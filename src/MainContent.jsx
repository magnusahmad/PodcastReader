import React, { useState} from 'react';
import './MainContent.css'; // Make sure to create this CSS file and style your components
import microphone_nobg from './images/microphone_nobg.png';

function MainContent(props) {
  // State hooks for input fields
  const [email, setEmail] = useState('');
  const [URL, setURL] = useState('');

  // Handle the change of the email input field
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  // Handle the change of the CV paragraph textarea
  const handleURLChange = (event) => {
    setURL(event.target.value);
  };

  // Simulated submission handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch('/api/process-url', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          // body: JSON.stringify({ email, URL }),
          body: JSON.stringify({ email, URL}),
      });

      if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const result = await response.json();
      console.log('Response from server:', result);
  } catch (error) {
      console.error('Error sending request:', error);
  }
  setEmail('');
  setURL('');
  console.log("URL: ", URL);
};

  return (
    <div className="parent">
    <div className="main-content">
    <h1 className="top-headline"  id='main-content'> Create an ebook from your favourite podcast</h1>
      <p>Simply add a YouTube link and you will receive a Kindle-formatted ebook to your email after some minutes.</p>
      {/* Additional promotional text here */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={URL}
          onChange={handleURLChange}
          placeholder="URL link to a YouTube video you'd like to transcribe..."
        ></input>
        <input
          type="email"
          value={email}
          onChange={handleEmailChange}
          placeholder="Which email do you want the eBook be sent to?"
        />
        <button type="submit">Generate Ebook!</button>
      </form>
      <p>Free version ebooks come unedited with basic transcription. If you would like higher fidelity transcriptions with editing, please check our paid options.</p>
      <p>Test: https://www.youtube.com/watch?v=cNbnef_eXBM</p>
    </div>
    {/* <div className="secondary-content">
      <img src={microphone_nobg} alt="microphone" className="microphone"></img>
    </div> */}
    </div>  
  );
};

export default MainContent;
