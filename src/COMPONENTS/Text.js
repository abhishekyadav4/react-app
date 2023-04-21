import React, { useState } from "react";


export default function Text(props) {
    const [text, setText] = useState("")
    const upperHandler = () => {
        let newText = text.toUpperCase();
        setText(newText);
    };

    const lowerHandler = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }
    const clearHandler = () => {
        let newText = " ";
        setText(newText);
    }
    const spaceHandler = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    }
    const onChangeHandler = (event) => {

        setText(event.target.value);
    }
    return (
        <>
             <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1>{props.heading}</h1>
                <textarea className="form-control" value={text} onChange={onChangeHandler} style={{ backgroundColor: props.mode === "dark" ? "grey" : "white", color: props.mode === "dark" ? "white" : "black" }} id="for" rows="8"></textarea>
            </div>
            <div >
                <button className="btn btn-primary mx-1" onClick={upperHandler}> UpperCase</button>
                <button className="btn btn-primary mx-1" onClick={lowerHandler}> LowerCase</button>
                <button className="btn btn-primary mx-1" onClick={clearHandler}> Clear Space</button>
                <button className="btn btn-primary mx-1" onClick={spaceHandler}> Space</button>

            </div>

            <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "black" }}>

                <h1>Preview</h1>
                <p>{text}</p>

            </div>

        </>
    )
}