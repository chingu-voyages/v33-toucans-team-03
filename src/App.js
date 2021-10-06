import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Editor from './components/Editor';
import Frame from './components/Frame';
import Footer from './components/Footer'
import Navbar from './components/Navbar';


function App() {

  const [mode,setMode] = useState("light")

  const [s_html, setHTML] = useState("")
  const [s_css, setCSS] = useState("")
  const [s_js, setJS] = useState("")

  const [t_html, settHTML] = useState("")
  const [t_css, settCSS] = useState("")
  const [t_js, settJS] = useState("")
  const html = (e) => {
    settHTML(e.target.value)

  }
  const css = (e) => {
    settCSS(e.target.value)
  }
  const js = (e) => {
    settJS(e.target.value)
  }
  const run=()=>{
    setHTML(t_html)
    setCSS(t_css)
    setJS(t_js)
    
  }
  const clear=()=>{
    setHTML("")
    setCSS("")
    setJS("")
  }

  const setModeToDark = () => {
    setMode("dark");
  }
  const setModeToLight = () => {
    setMode("light")
  }
  const setModeToSpace = () => {
    setMode("space");
  }
  const setModeToNeon = () => {
    setMode("neon");
  }
  const setModeToRetro = () => {
    setMode("retro");
  }
  let editorStyle = {}
  if(mode === "dark") {
      editorStyle = {background:"#363636"} 
  } 
  if (mode === "space" ) {
    editorStyle = {background:"#2C394B"}
  }
  if (mode === "neon" ) {
    editorStyle = {background:"rgb(137, 44, 220)"}
  }
  if (mode === "retro" ) {
    editorStyle = {background:"rgb(86, 74, 74)"}
  }
  
  

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
        <Navbar 
          location={"home"} 
          func={run} 
          clr={clear} 
          mode={mode} 
          setModeToDark={setModeToDark} 
          setModeToLight={setModeToLight} 
          setModeToSpace={setModeToSpace}
          setModeToNeon={setModeToNeon}
          setModeToRetro={setModeToRetro}
        />
          <div className="container1">
            <div className='Editors' style={editorStyle}>
              <Editor id='html' html={s_html} placeholder='Write HTML code here' editorTitle = "HTML" click={html} mode={mode} />
              <Editor id='css' css={s_css} placeholder='Write CSS code here' editorTitle = "CSS" click={css} mode={mode} />
              <Editor id='js' js={s_js} placeholder='Write JavaScript code here' editorTitle = "JavaScript" click={js} mode={mode} />
            </div>
            <Frame html={s_html} css={s_css} js={s_js} location={"home"} />
          </div>
          <Footer mode={mode} setModeToDark={setModeToDark} setModeToLight={setModeToLight}/>
        </Route>
        <Route exact={true} path="/fullpage">
        <Navbar location={"Full"} func={run}
          clr={clear} 
          mode={mode} 
          setModeToDark={setModeToDark} 
          setModeToLight={setModeToLight} 
          setModeToSpace={setModeToSpace}
          setModeToNeon={setModeToNeon}
          setModeToRetro={setModeToRetro}
        />
          <Frame html={s_html} css={s_css} js={s_js}  />
          <Footer mode={mode} setModeToDark={setModeToDark} setModeToLight={setModeToLight}/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
