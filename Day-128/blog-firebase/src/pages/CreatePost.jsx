import React from "react";
import { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";
//addDoc allows ato add stuff to table

export default function CreatePost({ isAuth }) {
  const [title, setTitle] = useState("");
  const [postText, setPostText] = useState("");

  //function submits data to firebase
  // has to by async

  // name of collection after (,db, 'name of collection') (noSQL database)
  const postCollectionRef = collection(db, "posts");

  let navigate = useNavigate();

  const createPost = async () => {
    //variable auth from firebase_config -> auth for name and id
    await addDoc(postCollectionRef, {
      //title and post from useState
      title: title,
      postText: postText,
      author: {
        name: auth.currentUser.displayName,
        id: auth.currentUser.uid,
      },
    });
    navigate("/");
    setPostText("");
    setTitle("");

    //in firebase we needed to change if false to if true
  };

  //use effect to check if we are anthenticated and f not it redirects us
  useEffect(() => {
    if (!isAuth) {
      navigate("/login");
    }
  });
  return (
    <div className="w-full h-screen bg-black flex items-center justify-center">
      <div className="w-full max-w-lg bg-gray-800 p-6 rounded-lg shadow-lg">
        <h1 className="text-center text-white text-xl font-semibold mb-6">
          Create A Post
        </h1>

        <div className="flex flex-col gap-4">
          {/* Title input */}
          <div>
            <label className="block text-white font-medium mb-2">Title:</label>
            <input
              className="w-full p-2 rounded-lg border border-gray-400 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Title..."
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </div>

          {/* Textarea */}
          <div>
            <label className="block text-white font-medium mb-2">Text:</label>
            <textarea
              onChange={(event) => {
                setPostText(event.target.value);
              }}
              className="w-full p-2 rounded-lg h-40 border border-gray-400 bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What about lol..."
            />
          </div>

          {/* Submit button */}
          <button
            onClick={createPost}
            className="w-full bg-blue-600 hover:bg-blue-500 text-white font-medium py-2 rounded-lg transition duration-300"
          >
            Submit Post
          </button>
        </div>
      </div>
    </div>
  );
}
