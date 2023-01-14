import React, { useState } from 'react'


const Textform = (props) => {
const [text, setText] = useState("");

const handleonchange = (e)=>{
    setText(e.target.value);
}

const toUpper = ()=>{
    if(text){
        setText(text.toUpperCase());
        props.initAlert("Text converted to uppercase", "success");
    }
    else{
        props.initAlert("Please, enter your text below !", "warning");
    }
}
const toLower = ()=>{

    if(text){
        setText(text.toLowerCase());
        props.initAlert("Text converted to lowercase", "success");
        
    }
    else{
        props.initAlert("Please, enter your text below !", "warning");
    }
}
const copyText = ()=>{
    
    if(text){
        
        navigator.clipboard.writeText(text);
        props.initAlert("Text is copied to your clipboard", "success");
        
    }
    else{
        props.initAlert("Please, enter your text below !", "warning");
    }
}
const extract = ()=>{
    if(text){
        
    const alltext = text;
    const mails = alltext.match(/([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/gi);
   
    if(mails && mails.length!==0){
        setText(mails.length+" mails found \n"+mails.join("\n"));
        props.initAlert("Mails are extracted from your text ", "success");
    }
    else{
        props.initAlert("0 mails found !", "warning");
        setText("0 mails found in the text");
    }
    }
    else{
        props.initAlert("Please, enter your text below !", "warning");

    }
    
    

}

const removeExtraSpaces = ()=>{
    if(text){
        
    let textvalue = text.split(/[ ]+/);
    console.log(textvalue);
    setText(textvalue.join(" "));
    props.initAlert("Extra spaces are removed from your text ", "success");
    }
    else{
        props.initAlert("Please, enter your text below !", "warning");

    }

}
const cleartext = ()=>{
    setText("");
}


return (
<div className='container'>
< div className ="mb-3 my-3 mx-3 ">
  <label htmlFor="exampleFormControlTextarea1" className ="form-label" ><h6>Input Text To Analyze</h6></label>
  <textarea className ="form-control" id="exampleFormControlTextarea1" value = {text} onChange={handleonchange} style={props.mode==='dark'?{backgroundColor:'#031633',color:'#6ea8fe'}:{backgroundColor:'white',color:'black'}} rows="6"></textarea>
  <button className="btn btn-primary my-2" onClick={toUpper}>Convert To Uppercase</button>
  <button className="btn btn-primary my-2 mx-2" onClick={toLower}>Convert To Lowercase</button>
  
  <button className="btn btn-primary my-2 " onClick={extract}>Extract Email</button>
  <button className="btn btn-primary my-2 mx-2" onClick={removeExtraSpaces}>Remove Spaces</button>
  <button className="btn btn-primary my-2 " onClick={copyText}>Copy</button>
  <button className="btn btn-primary my-2 mx-2" onClick={cleartext}>Clear</button>

</div>
    <div className="container">
        <h5>Text Summary</h5>
        <p>{text.split(/[ ]+/).length-1} words and {text.length} Characters</p>
        <p>{(text.split(/[ ]+/).length-1)*0.008} Minutes to read</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
</div>
  )
}

export default Textform