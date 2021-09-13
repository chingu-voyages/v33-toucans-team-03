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

    return (
        <div className = "AllEditors">
            <div className = "titles">{props.editorTitle}<button onClick = {handleToggle}>{isOpen? "[x]":"[+}"}</button></div>
            <textarea className = {isOpen ? "opened" : "closed"} value={value} onChange={changeValue} row = "7" id = {props.id} placeholder = {props.placeholder}></textarea>
        </div>
    );
}
export default Editor;