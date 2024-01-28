import { useState,useCallback ,useEffect,useRef} from 'react'



function App() {

  const[Password,setPassword] = useState("");
  const[length,setLength]=useState(8);
  const[numberAllowed,setNumberAllowed] = useState(false);
  const[charAllowed,setCharAllowed]=useState(false);

  const passRef = useRef(0);

  const generatePassword = useCallback(()=>{
      let pass="";
      let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  
      if(charAllowed) str += "!@#$%^&*()_+"
      if(numberAllowed) str += "0123456789"

      for(let i=0;i<length;i++)
      {
         let random_index = Math.floor(Math.random()*str.length + 1)
         pass += str.charAt(random_index);
      }

      setPassword(pass);

  }, [length,charAllowed,numberAllowed]);

  useEffect(()=>{
     generatePassword()
  },[length,charAllowed,numberAllowed]);
  
  const copyToClipBoard = ()=>{
    window.navigator.clipboard.writeText(Password);
    passRef.current.select();
    
  }

  return (
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
         <h1 className='text-white text-center my-3'>Password Generator</h1>
         <div className='flex shadow rounded-lg overflow-hidden mb-4'>
            <input 
            type="text"
            value = {Password} 
            name="" 
            id="" 
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            ref = {passRef}
            readOnly/>
            <button
             onClick={copyToClipBoard}
             className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
             >copy</button>
         </div>
         <div
         className='flex text-sm gap-x-2'
         >
          <div className='flex items-center gap-x-1'>
              <input
              min = {6}
              max = {100}
              value = {length}
              className='cursor-pointer'
              onChange = {(e)=>setLength(e.target.value)} 
              type="range" 
              name="" 
              id="" />
              <label htmlFor="length">Length:{length}</label>

          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              defaultChecked={numberAllowed}
              onChange = {()=>{
                setNumberAllowed((prev)=>!prev)
              }}
              type="checkbox" 
              name="" 
              id="" />
              <label htmlFor="Number">Number</label>
              
          </div>
          <div className='flex items-center gap-x-1'>
              <input 
              defaultChecked={charAllowed}
              onChange = {()=>{
                setCharAllowed((prev)=>!prev)
              }}
              type="checkbox" 
              name="" 
              id="" />
              <label htmlFor="Character">Character</label>
              
          </div>

         </div>
    </div>
   
  )
}

export default App
