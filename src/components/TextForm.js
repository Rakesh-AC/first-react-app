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

  return (
    <div>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className='form-control' value={text} onChange={handleChange} name="" id="myBox" cols="30" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={convertToUppercase}>Convert to Uppercase</button>
        <button className="btn btn-secondary ms-2" onClick={clearText}>clear</button>
    </div>
  )
}
