import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const loginUser = async(email, password)=>{

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      alert(errorCode);
      const errorMessage = error.message;
      console.log(errorMessage);
    });
}

export {loginUser};