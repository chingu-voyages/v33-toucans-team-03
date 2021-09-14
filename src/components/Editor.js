import React,{useState}  from "react";

const Editor = (props) =>  {
    const [value,setValue] = useState("");
    const [isOpen,setOpen] = useState(true);
    const changeValue = (e) =>{
        setValue(e.target.value)
        props.click(e)
    }
    const handleToggle = () => {
        setOpen(!isOpen);
    }
    const eraseText = () => {
       // document.getElementById(`${props.id}`).value = "";
       setValue("");
    }

    return (
        <div className = "AllEditors">
            <div className = "titles">{props.editorTitle}
            <div>
                <button id = "clr" onClick = {eraseText}>Clear</button>
                <button onClick = {handleToggle}>{isOpen? "[-]":"[+]"}</button>
            </div>
        </div>
            <textarea className = {isOpen?"opened":"closed"} value={value} onChange={changeValue} row = "7" id = {props.id} placeholder = {props.placeholder}></textarea>
        </div>
    );
}
export default Editor;