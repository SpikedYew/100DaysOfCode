import React, { useState, useEffect } from "react";
import { getDocs, collection, deleteDoc, doc } from "firebase/firestore";
import { db, auth } from "../firebase-config";

export default function Home({ isAuth }) {
  const [postLists, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const postCollectionRef = collection(db, "posts");

  useEffect(() => {
    const getPosts = async () => {
      setIsLoading(true);
      try {
        const data = await getDocs(postCollectionRef);
        setPostList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setError(null);
      } catch (err) {
        setError("Failed to fetch posts. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };
    getPosts();
  }, []);

  const deletePost = async (id) => {
    try {
      const postDoc = doc(db, "posts", id);
      await deleteDoc(postDoc);
      setPostList((prev) => prev.filter((post) => post.id !== id)); // Aktualizacja listy po usunięciu
    } catch (err) {
      console.error("Failed to delete post:", err);
    }
  };

  if (isLoading) {
    return <div className="text-center text-white">Loading posts...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="w-full bg-black flex flex-col items-center justify-center">
      {postLists.length > 0 ? (
        postLists.map((post) => (
          <div
            key={post.id}
            className="w-full max-w-md p-4 my-2 bg-gray-800 rounded"
          >
            <h1 className="text-lg font-bold text-white">{post.title}</h1>
            <div className="text-white font-extrabold">
              {isAuth && post.author.id === auth.currentUser.uid && (
                <button onClick={() => deletePost(post.id)}>X</button>
              )}
            </div>
            <p className="text-gray-300">{post.postText}</p>
            <p className="text-sm text-gray-400">
              Author: {post.author?.name || "Unknown"}
            </p>
          </div>
        ))
      ) : (
        <div className="text-white">No posts found.</div>
      )}
    </div>
  );
}
