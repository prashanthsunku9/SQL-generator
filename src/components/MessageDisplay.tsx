
interface userMessage{
  role:string,
  content:string
}


interface MessageDisplayProps{
  message:userMessage

  
}

function MessageDisplay({message}:MessageDisplayProps) {
    return (
      <div className="mess">
         <p>•</p>
          {/* <p>{message.role}</p> */}
          <p id="prev">{message.content}</p>  
      </div>
    );
  }
  
  export default MessageDisplay;
  