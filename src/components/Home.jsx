import { collection,deleteDoc,doc,getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react"
import {db,auth} from "../firebase"

const Home = () => {

  const [postList, setPostList]  = useState([]);

  useEffect(()=>{
    const getPosts = async() => {
      const data = await getDocs(collection(db,"posts"));
      setPostList(data.docs.map((doc)=>({...doc.data(),id: doc.id})));
    };
    getPosts();
  },[]);

  const handleDelete = async (id) => {
    await deleteDoc(doc(db,"posts",id))
    window.location.href = "/"
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        {postList.map((post) => {
        return(
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mt-5">
              <div className="mb-4">
                <h1 className="text-2xl font-bold text-gray-800">{post.title}</h1>
              </div>
              <div className="mb-6">
                <p className="text-gray-600">{post.postText}</p>
              </div>
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-700">@{post.author.username}</h3>
                {post.author.id === auth.currentUser?.uid && (
                  <button 
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                    onClick={()=> handleDelete(post.id)}
                  >
                    削除
                  </button>
                )}
              </div>
            </div>      
        );
        })}
      </div>
    </>
  )
};

export default Home;