import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:8000/api/auth/login', form);
            localStorage.setItem('token', res.data.token);
            navigate('/dashboard');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <h1 className='text-[80px] font-semi-bold font-FastOne' >Welcome to MICROCODE</h1>


            <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto mt-10 p-8 bg-white rounded-xl shadow-lg space-y-6"
            >
                <h2 className="text-2xl font-bold text-center text-gray-800">Login</h2>

                <input
                    type="email"
                    placeholder="Email"
                    autoComplete="off"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <input
                    type="password"
                    placeholder="Password"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />

                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
                >
                    Login
                </button>
            </form>

        </>
    );
}
