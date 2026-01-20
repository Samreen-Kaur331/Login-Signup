import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        const payload={
            email,
            password};
            localStorage.setItem("payload",JSON.stringify(payload));
               alert("Account created successfully 🎉");
navigate("/login");

    }

  return (
 <div className="auth-wrapper">
      <div className="auth-card pop">

        <p className="secure-badge">📝 Create Account</p>

        <h2>
          Join <span className="green-text">Us</span>
        </h2>

        <p className="sub-text">
          Start your personalized learning with AI assistance
        </p>

        <form onSubmit={handleSubmit} className="auth-form">

          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            required
          />

          <label>Password</label>
          <div className="password-box">
            <input
              type={showPass ? "text" : "password"}
              placeholder="Create a password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <span className="eye" onClick={()=>setShowPass(!showPass)}>
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="primary-btn" type="submit">
            Sign Up →
          </button>
        </form>

        <div className="divider"></div>

        <p className="center">
          Already have account? <Link to="/login" className="link-green">Login</Link>
        </p>

      </div>
    </div>
  )
}

export default Signup
