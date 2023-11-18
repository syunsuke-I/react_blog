import React from "react"
import { signInWithPopup, signOut } from "firebase/auth";
import { auth,provider } from "../firebase";
import {useNavigate} from "react-router-dom";

const Logout = ({setIsAuth}) => {
  const navigate = useNavigate();

  const logout = () =>{
    signOut(auth).then(()=>{
      localStorage.clear();
      setIsAuth(false);
      navigate("/login");
    });
  };

  return (
  <>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="p-10 rounded-lg shadow-lg bg-white max-w-sm">
        <h1 className="text-2xl font-semibold text-gray-800 mb-6">ログアウト</h1>
        <button 
          onClick={logout}
          className="bg-red-500 hover:bg-red-600 w-full text-white font-bold py-2 px-4 rounded transition duration-200">
          Logout with Google
        </button>
      </div>
    </div>
  </>
  );
};

export default Logout;