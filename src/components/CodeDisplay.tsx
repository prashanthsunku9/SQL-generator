interface CodeDisplayProps{
  text:string
}


function CodeDisplay({text}:CodeDisplayProps) {
    return (
      <div className="hello">
      <p id="matter">{text}</p>
      </div>
    );
  }
  
  export default CodeDisplay;