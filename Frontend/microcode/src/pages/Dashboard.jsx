export default function Dashboard() {
  return (
    <div>
      
      <h1 className='text-[80px] font-semi-bold font-FastOne' >Welcome to Microcode Dashboard</h1>
      <button className="w-[300px] mt-[50px] py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300" onClick={() => {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }}>Logout</button>
    </div>
  );
}
