import './App.css';
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Home from './Componets/Home/Home';
import Navbar from './Componets/Navbar/Navbar';
import CreatePost from './Componets/CreatePost/CreatePost';
import Login from './Componets/Login/Login';
  import { auth } from './config/firebase';
  import {useAuthState} from 'react-firebase-hooks/auth'



  

function App() {
   const user = useAuthState(auth)
  return (
  
   <Router>
   
    <Navbar/>
<Routes>
  <Route path='/Home' element={<Home/>}></Route>
  <Route path='/CreatePost' element={<CreatePost/>}> </Route>
  {user ?  <Route path='/' element={<Login/>}></Route> : null }
</Routes>
   </Router>
  
  );
}

export default App;
