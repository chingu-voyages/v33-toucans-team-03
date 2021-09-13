import React, { useState } from 'react'
import './App.css';
import Editor from './components/Editor';
import Frame from './components/Frame';


function App() {
  const [s_html,setHTML] = useState("")
  const [s_css,setCSS] = useState("")
  const [s_js,setJS] = useState("")

  const html = (e) =>{
    setHTML(e.target.value)
  }
  const css= (e) =>{
    setCSS(e.target.value)
  }
  const js= (e)=>{
    setJS(e.target.value)
  }
 
  
  return (
    <div className="container">
      <div className = 'Editors'>
          <Editor id='html' placeholder='Write HTML code here' editorTitle = "HTML" click={html} />
          <Editor id = 'css' placeholder='Write CSS code here' editorTitle = "CSS" click={css} />
          <Editor id = 'js' placeholder='Write JavaScript code here' editorTitle = "Java Script" click={js} />
      </div>
      <Frame html={s_html} css={s_css} js={s_js} />
    </div>

  );
}

export default App;
