import React,{useState} from 'react'

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text here")

  const handleChange = (event) =>{
    setText(event.target.value);
  }

  const convertToUppercase = () =>{
    setText(text.toUpperCase());
  }

  const clearText = () => {
    setText("");
  }

  const toLoCase = () =>{
    setText(text.toLowerCase());
  }

  

  return (
    <>
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' value={text} onChange={handleChange} name="" id="myBox" cols="30" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-primary ms-2" onClick={toLoCase}>Convert to Uppercase</button>

        <button className="btn btn-secondary ms-2" onClick={clearText}>clear</button>
    </div>


    <div className='mt-3'>
      <h1>Your Text Summary</h1>
      <p>{(text.length==0)?0:text.trim().split(" ").length} Words and {text.length} Characters</p> 
    </div>

  


    <div className='mt-3'>
      <h1>Preview</h1>
      <p>{text}</p>
    </div>

    </>


  )
}
