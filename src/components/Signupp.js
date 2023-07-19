import React, { useState } from "react";
import { signUpUser } from "../backend/firebase/signup";
import { useNavigate } from "react-router-dom";

export default function Signupp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const handleSignUp = async () => {

    try {
      const userCredential = await signUpUser(email, password);
      console.log("Sign up successfull:", userCredential);
      navigate("/home");
    } catch (error) {
      console.error("Error signing up:", error.message);
    }
  };
  const handleSubmit = (event) =>{
    event.preventDefault();
    handleSignUp();
  }
  return (
    <div>
      <h1>sign up part</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="signupInputEmail1"
            aria-describedby="emailHelp"
            name="signUpEmail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="signupInputPassword1"
            name="signupPassword"
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
  );
}
