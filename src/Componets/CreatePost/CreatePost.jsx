import React from 'react'
import './CreatPost.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import {addDoc , collection} from 'firebase/firestore'
import { auth, db } from '../../config/firebase';
import {useAuthState} from 'react-firebase-hooks/auth'
 import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const navii = useNavigate()
  const [user] = useAuthState(auth)

 
// yup validtion
const schema = yup.object().shape({
  title:yup.string().required('You must add a title'),
  description:yup.string().required('You must add a description').min(6).max(150)
})

const { register, handleSubmit ,   formState:{errors}} = useForm({
  resolver: yupResolver(schema)
  });

  // database  Code below 
  const postRef = collection(db, "posts")

  const CreatePostsss = async (data) => {
 await addDoc(postRef, {
...data,
username: user?.displayName,
id: user?.uid


})}

const redirect = () => {
  navii('/Home')
}
// JSX start 

  return (

  <div className='create'>
    <form onSubmit={handleSubmit(CreatePostsss)}>
      <input type="text" placeholder='title... '{...register('title')}/>
      <p style={{color:"red"}}>{errors.title?.message}</p>
      <textarea  id="" cols="30" rows="10" placeholder='description' {...register('description')}></textarea>
      <p style={{color:"red"}}>{errors.description?.message}</p>
      <input type="submit" onClick={redirect}/>
    </form>
  </div>
  )
}

export default CreatePost
