import React from 'react'
import { Link } from 'react-router-dom'

const Open = () => {
  return (
    <>

    <div className='bg-[#eee] h-[80vh]'>
        
        <h1 className='text-[80px] font-semi-bold font-FastOne' >Welcome to MICROCODE</h1>

        <Link to="/register" className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-semibold rounded-xl shadow-md hover:from-purple-600 hover:to-indigo-700 transition-all duration-300">Click Here To Register Yourself</Link>
</div>
    </>
  )
}

export default Open