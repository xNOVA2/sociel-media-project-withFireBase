import React from "react";
import "./Home.css";
import { useState } from "react";
import {    db} from "../../config/firebase";
 // import { useAuthState } from "react-firebase-hooks/auth";
import { getDocs, collection } from "firebase/firestore";
import { useEffect } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FaEnvelope } from "react-icons/fa";
const Home = () => {

  const postRef = collection(db, "posts")
 
  const [PostLists, setPostLists] = useState(null)
  
  const getPosts = async () => {
const data = await getDocs(postRef)
setPostLists(data.docs.map((doc => ({...doc.data(), id:doc.id}))));

  }
    
  
useEffect(() => {
  getPosts();
},[])


  return (
   <div>{PostLists?.map((post ) => {
    return(
      <>
      <div className="post">
        <div>
        <div className="tile"><h1>{post.title}</h1></div>
        </div>
        <hr />
     <div>
     <div className="description"><p><FaEnvelope width={50} height={40}/> {post.description}</p></div>
     </div>
     <div>
      <hr />
     <div className="footer"><p> <AiOutlineUser className="userlogo"/> {post.username}</p></div> 
     </div>
     <hr />

      </div>
      </>
    )
   })}</div>
  );
};

export default Home;
