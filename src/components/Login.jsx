import React from "react"
import { signInWithPopup } from "firebase/auth";
import { auth,provider } from "../firebase";
import {useNavigate} from "react-router-dom";

const Login = ({setIsAuth}) => {
  const navigate = useNavigate();

  const loginInWithGoogle = () =>{
    signInWithPopup(auth,provider).then((res)=>{
      localStorage.setItem("isAuth",true);
      setIsAuth(true);
      navigate("/");
    })
  };

  return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 rounded-lg shadow-lg bg-white max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">ログイン</h1>
        <p className="text-gray-600 mb-6">Googleアカウントを使用してログイン</p>
        <button 
          onClick={loginInWithGoogle}
          className="bg-red-500 hover:bg-red-600 w-full text-white font-bold py-2 px-4 rounded transition duration-200">
          Login with Google
        </button>
      </div>
    </div>
  </>
  );
};

export default Login;