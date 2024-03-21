import React,{useCallback, useEffect, useState,useRef} from 'react';

function Password(){
const [length,setLength]= useState(8);
const [numberAllowed,setnumberAllowed]= useState(false);
const [charAllowed,setcharAllowed]= useState(false);

const [password,setPassword]= useState("");
const passWordRef= useRef(null);

const passwordGenerator= useCallback(()=>{
   let pass= "";
   let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
   if(numberAllowed) str +="0123456789";
  if(charAllowed) str+="!@#$%^&*";

  for(let i=1; i<=length; i++){
     let char= Math.floor(Math.random()* str.length+1);
     pass += str.charAt(char);
  }
  setPassword(pass);
    },[length,numberAllowed,charAllowed,setPassword])

    useEffect( ()=>{
        passwordGenerator();
    },[length,numberAllowed,charAllowed,passwordGenerator])

    const copyPassword= ()=>{
        passWordRef.current?.select();
        passWordRef.current?.setSelectionRange(0,20);
        window.navigator.clipboard.writeText(password);
    }
 return(
 <>
  <div className='w-full max-w-md mx-auto rounded-lg'>
    <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex rounded-lg overflow-hidden mb-4'>
         <input type="text" value={password} className='outline-none w-full' placeholder='password' readOnly  ref={passWordRef} />   
         <button className='outline-none bg-blue-700 text-white' onClick={copyPassword}>Copy</button>
        </div>
        <div className='flex items-center gap-x-2'>
         <input type="range" min={6} max={100}  value={length} className='cursor-pointer' onChange={(e)=>{ setLength(e.target.value)}} />   
         <label>{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <input type="checkbox" id="numberInput" onChange={()=>{ setnumberAllowed( (pre)=> !pre)    }} />   
         <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
         <input type="checkbox" id="charInput" onChange={()=>{ setcharAllowed( (pre)=> !pre)    }}  />   
         <label htmlFor="charInput">Characters</label>
        </div>
  </div>
 </>
 );

}


export default Password;