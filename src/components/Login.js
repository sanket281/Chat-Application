import React, {useState} from 'react'
import { loginUser } from '../backend/firebase/login';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    const handleLogin = async () => {
  
      try {
        const userCredential = await loginUser(email, password);
        console.log("Login successfull:", userCredential);
        navigate("/home");
      } catch (error) {
        console.error("Error logging up:", error.message);
      
      }
    };
    const handleSubmit = (event) =>{
      event.preventDefault();
      handleLogin();
    }
  return (
    <div>
        <h1>login part</h1>
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="loginInputEmail1"
          aria-describedby="emailHelp"
          name="loginEmail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">
          Password
        </label>
        <input
          type="password"
          className="form-control"
          id="loginInputPassword1"
          name="loginPassword"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
       
        type="submit"
        className="btn btn-primary"
      >
        Submit
      </button>
    </form>
  </div>
  )
}
