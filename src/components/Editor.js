import React,{useState}  from "react";

const Editor = (props) =>  {
    const [value,setValue] = useState("");
    const changeValue = (e) =>{
        setValue(e.target.value)
        props.click(e)
    }

    return (
        <div>
            <textarea className = "AllEditors" value={value} onChange={changeValue} row = "7" id = {props.id} placeholder = {props.placeholder}></textarea>
        </div>
    );
}
export default Editor;