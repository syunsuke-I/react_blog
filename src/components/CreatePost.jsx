import React from "react"

const CreatePost = () => {

  
return(
<div className="min-h-screen bg-gray-100 flex items-center justify-center">
  <div className="p-8 max-w-lg w-full bg-white rounded-lg shadow-md">
    <h1 className="text-2xl font-bold text-gray-800 mb-6">記事を投稿する</h1>

    <div className="mb-4">
      <div className="text-sm font-medium text-gray-600">タイトル</div>
      <input 
        type="text" 
        placeholder="タイトルを記入" 
        className="w-full p-2 border border-gray-300 rounded mt-1"
      />
    </div>

    <div className="mb-6">
      <div className="text-sm font-medium text-gray-600">投稿</div>
      <textarea 
        placeholder="内容を記入" 
        className="w-full p-2 border border-gray-300 rounded mt-1 h-40"
      ></textarea>
    </div>

    <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
      投稿する
    </button>
  </div>
</div>

  ) 
};

export default CreatePost;