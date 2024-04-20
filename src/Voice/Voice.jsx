import React from 'react'
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition'
function Voice() {
    const startListening =()=> SpeechRecognition.startListening({continous: true,language:'en-IN'});
    
    const {transcript,browserSupportsSpeechRecognition}=useSpeechRecognition();
    if(!browserSupportsSpeechRecognition){
        return null }
    return (
    <div>
      <h1>
        Voice recognition
      </h1>
      <div>
        {transcript}
      </div>
      <button onClick={startListening}>
        Start listening
      </button>
      <button onClick={SpeechRecognition.stopListening}>
        Stop Listening
      </button>
    </div>
  )
}

export default Voice
