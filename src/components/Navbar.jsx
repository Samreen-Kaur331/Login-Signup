import React from 'react'
import { Link ,useNavigate} from 'react-router-dom'

const Navbar = () => {
const navigate=useNavigate();
const token =localStorage.getItem("token");
const handlelogout=()=>{
    localStorage.removeItem("token");
    navigate("/login");
}

  return (

      <div className=" bg-pink-50 text-gray-800">
            <nav className="bg-pink-200 p-4 flex justify-between shadow-md">
              <h1 className="text-xl font-bold">🌸 GlowGuide</h1>
              <div className="space-x-4">
                <Link to="/" className="hover:text-pink-700">
                  Home
                </Link>
 {token && <Link to="/login" className='bg-pink-200' >login</Link>}   
 {token && <Link to="/signup" className='bg-pink-200' >Signup</Link>}
 {token  && <button onClick={handlelogout} className="bg-pink-400 hover:bg-pink-500 text-white px-3 py-1 rounded-md">  Logout </button>}
</div>
            </nav>
            </div>
   
  )
}

export default Navbar
