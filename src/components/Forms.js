import React, { useState } from 'react'

export default function Forms(props) {

    const UpperCase = () => {
        let newText = text1.toUpperCase();
        setText1(newText);
    }

    const LowerCase = () => {
        let newText1 = text1.toLowerCase();
        setText1(newText1);
    }
    const Clear = () => {
        let newText1 = '';
        setText1(newText1);
    }
    const Copy = () => {
        navigator.clipboard.writeText(text1);
    }

    const ChangeText = (event) => {
        setText1(event.target.value);
    }
    const [text1, setText1] = useState("")

    return (
        <>
        <div className={`container text-${props.mode==='light'?'dark':'light'}`}>
            <div className="mb-3">
                <label for="box" className="form-label">{props.text1}</label>
                <textarea className="form-control" id="box" rows="6" value={text1} placeholder="Write text here" onChange={ChangeText} style={{backgroundColor : props.mode==='light'?'white':'#353740', color : props.mode==='light'?'black':'white' }}></textarea>
            </div>
            <button disabled = {text1.length === 0} className="btn btn-primary mx-2 my-1" onClick={UpperCase}>Convert to UpperCase</button>
            <button disabled = {text1.length === 0} className="btn btn-primary mx-2 my-1" onClick={LowerCase}>Convert to LowerCase</button>
            <button disabled = {text1.length === 0} className="btn btn-primary mx-2 my-1" onClick={Clear}>Clear Text</button>
            <button disabled = {text1.length === 0} className="btn btn-primary mx-2 my-1disabled = {text1.length === 0} " onClick={Copy}>Copy Text</button>
        </div>
        <div className={`container my-4 text-${props.mode==='light'?'dark':'light'}`}>
            <h4>Text Summary</h4>
            <p>{text1.split(/\s+/).filter((element)=>{return element.length !== 0}).length} words and {text1.length} characters</p>
            <h4>Preview</h4>
            <p>{text1.length>0?text1:"Enter the text in textbox to preview"}</p>
        </div>
        </>
    )
}
