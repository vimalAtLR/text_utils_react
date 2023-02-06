import React, { useState } from 'react'

function TextForm(props) {
    // create new state
    const [text, setText] = useState("");
    const [preText, setPreText] = useState("");

    // convert text to uppercase and update text using of useState
    const handleUpClick = () => {
        setPreText(text.toUpperCase());
    }
    // convert text to lowercase and update text using of useState
    const handleLoClick = () => {
        setPreText(text.toLowerCase());
    }
    // update text using of useState when value get change
    const handleOnChange = (event) => {
        setText(event.target.value)
    }

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="button" className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to uppercase</button>
                <button type="button" className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to lowercase</button>
            </div>
            <div className="container my-3">
                <h2>Your text summary</h2>
                <p>
                    {text.split(" ").length} words and {text.length} characters found.
                </p>
                <p>
                    {0.08 * text.split(" ").length} Minutes to read
                </p>

                <h2>Preview</h2>
                <div className="mb-3">
                    <textarea readOnly className="form-control" value={preText} id="myBox" rows="8"></textarea>
                </div>
            </div>
        </>
    )
}

export default TextForm
