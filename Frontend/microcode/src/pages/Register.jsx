import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { RiAdminFill } from "react-icons/ri";
import { MdPassword } from "react-icons/md";

export default function Register() {
    const [form, setForm] = useState({ name: '', email: '', password: '' });
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/auth/register', form);
            alert('Registered! Please Login.');
            navigate('/login');
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
                <h2 className="text-2xl font-bold text-center text-gray-800 font-Rubik">Register</h2>


                <div className='relative'>
                    <span className='absolute top-1/2 transform -translate-y-1/2 left-4'><RiAdminFill /></span>
                    <input
                        type="text"
                        autoComplete="off"
                        placeholder="Name"
                        onChange={e => setForm({ ...form, name: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                    />

                </div>


                <div className='relative'>
                    <span className='absolute top-1/2 transform -translate-y-1/2 left-4'><RiAdminFill /></span>

                    <input
                        type="email"
                        placeholder="Email"
                        autoComplete="off"
                        onChange={e => setForm({ ...form, email: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                    />

                </div>

                <div className='relative'>
                    <span className='absolute top-1/2 transform -translate-y-1/2 left-4'><MdPassword /></span>
                    <input
                        type="password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange={e => setForm({ ...form, password: e.target.value })}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 pl-10"
                    />

                </div>

                <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300"
                >
                    Register
                </button>
            </form>

        </>
    );
}
