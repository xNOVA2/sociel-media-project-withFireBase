import React from "react";
import './Navbar.css';
import { Link } from "react-router-dom";
import { auth } from "../../config/firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import {signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
const Navbar = () => {
  const navii = useNavigate()
  const sighUserout = async () => {
await signOut(auth)
navii('/')
  }
  const [user] = useAuthState(auth)
  return (
    <div className="navbar" >
      <div className="logo">
      <img src={user?.photoURL || null} widht='50' height='50'  className="logo2" />
     
      </div>
      <div className="links">
        <ul>
          <li>
           {!user || <Link to='/Home'>Home</Link> }
          </li>
          <li>
          {!user || <Link to='/CreatePost'>CreatePost</Link> }
          </li>
        </ul>
      </div>
      <div className="login">
{user? <button onClick={sighUserout} className='btnsignout'>Sign Out</button> :<a href="/"><h3>Login</h3></a>}
      </div>
    </div>
  );
};

export default Navbar;
