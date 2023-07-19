import React, {useEffect, useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

export default function Navbar() {
    const [user, setUser] = useState(null);
    const auth = getAuth();
    const handleSignOut = async () => {
        try {
          await signOut(auth); // Call the signOut function with the auth instance
          console.log("User signed out successfully");
        } catch (error) {
          console.error("Error signing out:", error.message);
        }
      };
    let location = useLocation();

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setUser(user);
        });
        return ()=> unsubscribe();
    }, [auth])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        
        <li className="nav-item">
          <Link className={`nav-link ${
                    location.pathname === "/home" ? "active" : ""
                  }`} to="/home" aria-current="page">home</Link>
        </li>
        {user?(<>
            <li className="nav-item">
          <Link className={`nav-link disabled `} to="/signup" aria-current="page">signup</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link disabled `} to="/login" aria-current="page">login</Link>
        </li>
        </>):(<>
        
        <li className="nav-item">
          <Link className={`nav-link ${
                    location.pathname === "/signup" ? "active" : ""
                  }`} to="/signup" aria-current="page">signup</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${
                    location.pathname === "/login" ? "active" : ""
                  }`} to="/login" aria-current="page">login</Link>
        </li>
        </>)}
        {user?(

            <button class="btn btn-outline-success" type="submit" onClick={handleSignOut}>Logout</button>
        ):(
            <></>
        )}
      
    
      </ul>
    
    </div>
  </div>
</nav>
    </div>
  )
}
