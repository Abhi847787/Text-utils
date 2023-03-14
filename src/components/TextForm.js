import React from 'react';
import { useState } from 'react';


export default function TextForm(props)
{
    const handleOnchange = (events) =>
{
    setText(events.target.value);
}

const handleonClick = () =>
{
    let newtext = text.toUpperCase();
    setText(newtext);
    props.showalert("Success","Converted to upperCase");
}

const handleClear = () =>
{
    let newtext = '';
    setText(newtext);
    props.showalert("Success","Text cleard");
}

const handleloClick = () =>
{
    let newtext = text.toLowerCase();
    setText(newtext);
    props.showalert("Success","Converted to LowerCase");
}

    const [text,setText] = useState("");
    return(
        <>
        <div className="container my-3" style = {{color:props.mode === 'light' ? 'black' : 'white'}}>
            <h1>{props.heading}</h1>
            <div class="mb-3">
                 <textarea class="form-control" value={text} onChange = {handleOnchange} style = {{backgroundColor:props.mode === 'dark' ? 'gray' : 'white', color:props.mode === 'light' ? "black" : "white"}} id="myBox" rows="8"></textarea>
            </div>
                 <button className="btn btn-primary mx-2 my-1" onClick={handleonClick}>Click to get Uppercase</button>
                 <button className="btn btn-primary mx-2 my-1" onClick={handleloClick}>Click to get LowerCase</button>
                 <button className="btn btn-primary mx-2 my-1" onClick={handleClear}>Click to Clear</button>
        </div>
        </>
    )
}