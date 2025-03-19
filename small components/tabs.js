import {useState} from 'react';
export default function Tabs(){
  const[activeTab,setActiveTab] = useState('html');
  return(
    <div>
      <div id='tabs'>
        <button id='html-tab'
        onClick = {() => setActiveTab('html')}
        className={activeTab === 'html' ? 'active' : ''}>HTML</button>
        <button id='css-tab'
        onClick = {() => setActiveTab('css')}
        className={activeTab === 'css' ? 'active' : ''}>CSS</button>
        <button id='js-tab'
        onClick = {() => setActiveTab('js')}
        className={activeTab === 'js' ? 'active' : ''}>JavaScript</button>
      </div>
      <div id='tab-content'>
        <p id='html-content'style={{display: activeTab === 'html'?'block':'none'}}>
          The HyperText Markup Language or HTML is the
          standard markup language for documents designed to
          be displayed in a web browser.
        </p>
        <p id='css-content' style={{display: activeTab === 'css' ? 'block' : 'none'}}>
          Cascading Style Sheets is a style sheet language
          used for describing the presentation of a document
          written in a markup language such as HTML or XML.
        </p>
        <p id='js-content' style={{display: activeTab === 'js' ? 'block' : 'none'}}>
          JavaScript, often abbreviated as JS, is a
          programming language that is one of the core
          technologies of the World Wide Web, alongside HTML
          and CSS.
        </p>
      </div>
    </div>
  );
}
