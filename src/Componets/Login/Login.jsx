import React  from 'react'
import './Login.css';
import { auth,provider } from '../../config/firebase'
import {  signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'
import { BsGoogle} from 'react-icons/bs'
const Login = () => {

const navii = useNavigate()

  const signInwithGoogle = async () =>{
    const result = await signInWithPopup(auth ,provider)
    navii('/Home')
    console.log(result);
  }

  

return (
    <div className='login22'>
      <div className='signGoogle'>
      <h1 >Sign in using Google</h1>
      </div>
 <div className='btnGoogle'>
 <button onClick={signInwithGoogle} className='btnGoogle2'><BsGoogle  width={40} height={40}/>     Sign in With Google</button>

 </div>
    </div>
  )
}

export default Login