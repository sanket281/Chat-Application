import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./firebaseConfig";
const signUpUser = async (email, password)=>{

  const auth = getAuth(app);
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
  
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
  
    });
}

export {signUpUser};