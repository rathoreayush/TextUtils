import React, {useState} from "react";

export default function TextForm(props) {



const handleUpClick =() => {
  let newText=text.toLocaleUpperCase();
  setText(newText)
}


const handleOnChange =(event) => {
  setText(event.target.value)
}

const handleLoClick =() => {
  let newText=text.toLocaleLowerCase();
  setText(newText)
}

const handleResetClick =() => {
let newText=" ";
setText(newText)
}

const handleCopyClick =() => {
  let text=document.getElementById('mybox1');
  text.select();
  navigator.clipboard.writeText(text.value);
  document.getSelection().removeAllRanges();
}

   // Declare a new state variable, which we'll call "count"
   const [text, setText] = useState('');


  return (
    <>
    <div className="container" style={{color:props.mode==='dark'? 'white':'#042743'}}>
      <h2 className="mb-4">{props.heading}</h2> 
      <div className="mb-3">
        <textarea 
          className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'? '#13466e':'white', color: props.mode==='dark'? 'white':'#042743'}}
          id="mybox1"
          rows={8}
          defaultValue= " "
        />
      </div>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>Convert To Uppercase</button>
      <button disabled={text.length===0} className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>Convert To Lowercase</button>
      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleResetClick}>Reset</button>
      <button disabled={text.length===0}className="btn btn-primary mx-2 my-2" onClick={handleCopyClick}>Copy Text</button>
    </div>
    <div className="container my-5" style={{color:props.mode==='dark'? 'white':'#042743'}}>
      <h3>Text Summary</h3>
      <p>{text.split("/\ s+ /").filter( (element)=> {return element.length!==0}).length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").filter( (element)=> {return element.length===!0}).length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0? text:"Please Enter something in text box to preview here"}</p>
      </div>
    </>
  );
}
