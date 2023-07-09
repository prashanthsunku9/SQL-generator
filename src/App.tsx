import React from 'react';
import MessageDisplay from "./components/MessageDisplay";
import CodeDisplay from './components/CodeDisplay';
import { useForm } from 'react-hook-form';
import Messages from './components/Messages';
import { useState } from 'react';


interface ChatDate{
  role:string,
  content:string
}

function App() {
  const {register,handleSubmit,formState:{errors},reset}=useForm();

    const [chat,setChat]=useState<ChatDate[]>([]);

  const fun=async(d:any)=>{
    console.log(d);

   
      try{
        const options={
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify({
            message: d.message
          })
        }
   
        const res=await fetch("http://localhost:8000/completions",options)
        const data=await res.json();
        console.log(data);
        const userMessage={
          role:"user",
          content:d.message
        }
        setChat(oldChat=>[...oldChat,data,userMessage]);
      }catch(error){
        console.error(error);
      }

  reset();

  }
  console.log(chat);
  const onlyUserMess=chat.filter(mess=>mess.role==='user')
  const latest =chat.filter(mess=>mess.role==='assistant').pop();

   const clearAll=()=>{
      setChat([]);
   }

    
  return (
    <div className='app container text-center' >
          <h1 className='diplay-1'><u>SQL GENERATOR</u></h1>
       <Messages hello={onlyUserMess}/>
       <form onSubmit={handleSubmit(fun)} className='for'>
       <label htmlFor="message">enter query:</label>
       <input id="message" className='form-control'
        placeholder='enter query' type="text" {...register("message",{required:true})}/>
        {errors.message?.type==='required'  && <p className='text-danger'>*please enter the query</p>}
       
       <button id="green" type='submit'>get query</button>
       <button id="red"  onClick={clearAll}>clear chat</button>
       </form>

       
      
        <CodeDisplay text={latest?.content || ""}/>
      
    </div>
  );
}

export default App;