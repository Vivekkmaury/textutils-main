import React,{ useState } from 'react'


export default function TextForm(props) {
    const handleUpClick=()=>{
        // console.log("Uppercase was Clicked"+text);
        let newtext=text.toUpperCase();
        setText(newtext)
        props.showAlert(" Converted to UpperCase!","Success");

    }
    const handleLoClick=()=>{
        // console.log("Uppercase was Clicked"+text);
        let newtext=text.toLowerCase();
        setText(newtext)
        props.showAlert(" Converted to LowerCase!","Success");
    }

    const handleClearClick=()=>{
        // console.log("Uppercase was Clicked"+text);
        let newtext=' ';
        setText(newtext)
        props.showAlert(" Text Cleared!","Success");
    }

    const handleCopy=()=>{
        var text=document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert(" Text Copied!","Success");
    }

    const handleOnChange=(event)=>{
        // console.log("On Change");
        setText(event.target.value);
    }
  const [text,setText] = useState(' ');
return (<>
<div className="container" style = {{color: props.mode==='dark'?'white':'#042f50'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} style = {{backgroundColor: props.mode==='light'?'white':'grey',
        color:props.mode==='dark'?'white':'#042f50'}} id="myBox" rows="10"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert UpperCase</button>
        <button className="btn btn-danger mx-2" onClick={handleLoClick}>Convert LowerCase</button>
        <button className="btn btn-warning mx-2" onClick={handleClearClick}>Clear Text</button>
        <button className="btn btn-dark mx-2" onClick={handleCopy}>Copy Text</button>
    </div>
    <div className="container  my-5" style = {{color: props.mode==='dark'?'white':'#042f50'}}>
        <h1><u>Yor text summary:</u></h1>
        <p><b>
        {text.split(" ").length } words and {text.length} characters
        </b></p>
        <p><b>{0.008 *text.split(" ").length} Minutes read</b> </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the above box to preview it here"}</p>
    </div>
</>
  ) 
}
