import React, { useState, useEffect } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

// import Parser from 'html-react-parser';
import CdTimerComp from './CdTimerComp';


const styles = {
    whiteSpace: 'pre-line', // This will preserve line breaks
  };

// Popup component for submit the topic
const Popup = ({ onClose, onSubmit }) => {
    const [inputValue, setInputValue] = useState('');
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
    };
  
    const handleSubmit = () => {
      onSubmit(inputValue);
      onClose();
    };
  
    return (
      <div className="popup">
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button onClick={handleSubmit}>Submit</button>
      </div>
    );
  };


  const Editor = () => {

    const [text, setText] = useState('');

    // for pop input text field
    const [isPopupVisible, setPopupVisibility] = useState(false);
    const [topic, setTopic] = useState('');
    const openPopup = () => {
      setPopupVisibility(true);
    };
  
    const closePopup = () => {
      setPopupVisibility(false);
    };

  
    const handlePopupSubmit = (data) => {

      setTopic(data);
    };
    
    // for timer setting
    const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();
    const dateTimeAfterThreeDays = NOW_IN_MS + THREE_DAYS_IN_MS;




    
    const handleEditorChange = (value) => {
      setText(value);
    };


  return (
    <div>
       
      {/* bottons for topic and timer */}
      <div class="row">
      <div class="column">
      <button onClick={openPopup}>Enter your topic</button>
      {isPopupVisible && (
        <Popup onClose={closePopup} onSubmit={handlePopupSubmit} />
      )}
      {topic && <p>Topic: {topic}</p>}
      </div>

      <div class="column">  <CdTimerComp />  </div>

      </div>

      {/* editor */}
      <div>
        <ReactQuill theme="snow" value={text} onChange={handleEditorChange} style={{ width: '700px',height: '250px' }}/>
        {/* <div dangerouslySetInnerHTML={{__html: text}}></div> */}
        </div>


    </div>
  )
}

export default Editor