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
  const [s_html, setHTML] = useState("")
  const [s_css, setCSS] = useState("")
  const [s_js, setJS] = useState("")
  // const [update, setupdate] = useState(false)
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
    console.log("clear")
    setHTML("")
    setCSS("")
    setJS("")
  }
  

  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
        <Navbar location={"home"} func={run} clr={clear} />
          <div className="container">
            <div className='Editors'>
              <Editor id='html' html={s_html} placeholder='Write HTML code here' editorTitle = "HTML" click={html} />
              <Editor id='css' css={s_css} placeholder='Write CSS code here' editorTitle = "CSS" click={css} />
              <Editor id='js' js={s_js} placeholder='Write JavaScript code here' editorTitle = "JavaScript" click={js} />
            </div>
            <Frame html={s_html} css={s_css} js={s_js} location={"home"}/>
          </div>
          <Footer />
        </Route>
        <Route exact={true} path="/fullpage">
        <Navbar location={"Full"} func={run}/>
          <Frame html={s_html} css={s_css} js={s_js}  />
          <Footer/>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
