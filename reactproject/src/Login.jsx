import {useState,useContext} from 'react';
import UserContext from "./context/Usercontext";
function Login() {
  
   const [username, setUsername]= useState('');
   const [password, setPassword]= useState('');
 
    const {setUser} = useContext(UserContext);

    const handleSubmit= (e)=>{
      e.preventDefault();
      setUser({username,password});
    }
  return (
    <div className='text-black'>
        <h2>Login</h2>
       <input type="text" placeholder='Enter your name' value={username} onChange={(e)=>setUsername(e.target.value)}/>
       <input type="password" placeholder='Enter your password' value={password} onChange={(e)=>setPassword(e.target.value)} />
       <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  )
}

export default Login
