import MessageDisplay from "./MessageDisplay";


interface userMessage{
  role:string,
  content:string
}
interface MessagesProps{
   hello:userMessage[]
}

function Messages({hello}: MessagesProps) {
    return (
      <div className="messdis">
       
       {
         
        //  hello.map((userMessage:userMessage,_index:number)=>
        //  return <MessageDisplay key={_index} message={userMessage}/>

         hello.map((i:userMessage,index:number)=>{
          return <MessageDisplay key={index} message={i}/>
         })
       


       }
       
      
      
       
      </div>
    );
  }
  
  export default Messages;