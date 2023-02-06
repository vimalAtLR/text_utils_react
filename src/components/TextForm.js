import React, { useState } from 'react'

function TextForm(props) {
    // create new state
    const [text, setText] = useState("Enter your text here");

    // convert text to uppercase and update text using of useState
    const handleUpClick = () => {
        setText(text.toUpperCase());
    }
    // update text using of useState when value get change
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <div>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
            </div>
            <button type="button" className="btn btn-primary" onClick={handleUpClick}>Convert to uppercase</button>
        </div>
    )
}

export default TextForm
