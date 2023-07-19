import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = ()=> {
 
    let newText = text.toUpperCase();
    setText(newText);
  }
  const handleloClick = ()=> {

    let newText = text.toLowerCase();
    setText(newText);
  }
  const handleclearClick = ()=> {
    let newText = '';
    setText(newText);
  }

  const handleOnChange = (event) => {
    setText(event.target.value);
  }
   const handleCopy =()=>{
    let text =document.getElementById("myBox")
    text.select();
    text.setSelectionRange(0,999);
    navigator.clipboard.writeText(text.value);
   }

   const handleExtraSpaces =()=>{
  let newText = text.split(/[ ]+/);
    setText(newText.join(""))
   }

  const [text, setText] = useState("type text here2");

  return (
  
    <div>
      <div className="container">
      <h3>{props.heading}</h3>
      <div className="mb-2">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          id="myBox"
          rows="6"
        ></textarea>
      </div>
      <button disabled={text.length===0} className="btn btn-primary btn-sm mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
 
      <button disabled={text.length===0}className="btn btn-primary btn-sm mx-2" onClick={handleloClick}>Convert to Lowercase</button>

      <button disabled={text.length===0}className="btn btn-primary btn-sm mx-2" onClick={handleclearClick}>Clear text</button>

      <button disabled={text.length===0}className="btn btn-primary btn-sm mx-2" onClick={handleCopy}>Copy text</button>

      <button disabled={text.length===0}className="btn btn-primary btn-sm mx-2" onClick={handleExtraSpaces}>RemoveExtra spaces</button>

    </div>

    <div className="container my-2">
<h1>Your text summary</h1> 
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length}characters</p>
<p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length}Minutes read</p>
<h3>Preview</h3>
<p>{text}</p>




    </div>


    </div>
  )
}
// export default TextForm;
