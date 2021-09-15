import React, { useState } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Editor from './components/Editor';
import Frame from './components/Frame';


function App() {
  const [s_html, setHTML] = useState("")
  const [s_css, setCSS] = useState("")
  const [s_js, setJS] = useState("")

  const html = (e) => {
    setHTML(e.target.value)
  }
  const css = (e) => {
    setCSS(e.target.value)
  }
  const js = (e) => {
    setJS(e.target.value)
  }


  return (
    <Router>
      <Switch>
        <Route exact={true} path="/">
          <div className="container">
            <div className='Editors'>
              <Editor id='html' placeholder='Write HTML code here' editorTitle = "HTML" click={html} />
              <Editor id='css' placeholder='Write CSS code here' editorTitle = "CSS" click={css} />
              <Editor id='js' placeholder='Write JavaScript code here' editorTitle = "JavaScript" click={js} />
            </div>
            <Frame html={s_html} css={s_css} js={s_js} location={"home"}/>
          </div>
        </Route>
        <Route exact={true} path="/fullpage">
        
          <Frame html={s_html} css={s_css} js={s_js} location={"fullpage"} />
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
