import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here")

  const handleChange = (event) =>{
    setText(event.target.value);
    
  }

  const convertToUppercase = () =>{
    setText(text.toUpperCase());
    props.showAlert("Converted to uppercase", "success");
  }

  const clearText = () => {
    setText("");
    props.showAlert("Text cleared", "warning");

  }

  const toLoCase = () =>{
    setText(text.toLowerCase());
    props.showAlert("Converted to lowercase", "warning");
  }

  const trimSpaces = () =>{
    setText(text.replace(/\s+/g, ' '));
    props.showAlert("Extra spaces removed", "success");
  }

  

  return (


    <>
      <div style={{color:props.mode==="dark"?"white":"black"}}>
          <h1 className={props.mode}>{props.heading}</h1>
          <div className="mb-3">
              <textarea className='form-control' style={{backgroundColor:props.mode=='light'?"white":"#27424a",color:props.mode=='light'?"black":"white"}} value={text} onChange={handleChange} name="" id="myBox" cols="30" rows="8"></textarea>
          </div>
          <button className="btn btn-primary" onClick={convertToUppercase}>Convert to Uppercase</button>
          <button className="btn btn-primary ms-2" onClick={toLoCase}>Convert to Uppercase</button>
          <button className="btn btn-primary ms-2" onClick={trimSpaces}>Trim Text</button>
          <button className="btn btn-secondary ms-2" onClick={clearText}>clear</button>
      </div>

      <div className='mt-3' style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>Your Text Summary</h1>
          <p>{(text.length==0)?0:text.trim().split(" ").length} Words and {text.length} Characters</p> 
      </div>

      <div className='mt-3' style={{color:props.mode==="dark"?"white":"black"}}>
          <h1>Preview</h1>
          <p>{text}</p>
      </div>

    </>


  )
}
