import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Login = () => { 
     const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();
  //using api key method 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//    const payload = {
//       email: email,
//       password: password,
//     };
//     console.log("Login Payload:", payload);
// axios.post("https://api.escuelajs.co/api/v1/auth/login", payload)
//       .then((response) => {
//         localStorage.setItem("token",JSON.stringify(response.data.access_token));
//       navigate("/");
        
//         console.log("Login Successful:", response.data);
//       })
//       .catch((error) => {
//         alert("Login Failed. Please check your credentials.");
//         console.error("Login Failed:", error);
        
//       });
//   }

const handleSubmit=(e)=>{
    e.preventDefault();

    const storedPayload=JSON.parse(localStorage.getItem("payload"));
    if (!storedPayload) return alert("User not found. Please signup first.");

    if (storedPayload.email === email && storedPayload.password === password) {
        localStorage.setItem("token", JSON.stringify(true));
        navigate("/");
    } else {
        alert("Invalid credentials.");
    }}
  return (
       <div className="auth-wrapper">
      <div className="auth-card pop">

        <p className="secure-badge">🔒 Secure Login</p>

        <h2>
          Welcome <span className="green-text">Back</span>
        </h2>

        <p className="sub-text">
          Continue your learning journey with AI-powered roadmaps
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
              placeholder="Enter your password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              required
            />
            <span
              className="eye"
              onClick={()=>setShowPass(!showPass)}
            >
              {showPass ? "🙈" : "👁️"}
            </span>
          </div>

          <button className="primary-btn" type="submit">
            Sign In →
          </button>
        </form>

        <p className="muted">Forgot Password?</p>

        <div className="divider"></div>

        <p className="center">
          Don't have an account? <Link to="/signup" className="link-green">Sign Up</Link>
        </p>

      </div>
    </div>
  )
}

export default Login
