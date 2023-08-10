import { useState } from "react";
import "./app.css";
import "regenerator-runtime";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import useClipboard from "react-use-clipboard";
function App() {
  const [textToCopy, setText] = useState("");
  const [isCopied, setCopied] = useClipboard(textToCopy);
  const startListening = () => {SpeechRecognition.startListening({ continuous: true })};
  const { transcript, browserSupportsSpeechRecognition } =
    useSpeechRecognition();
  if (!browserSupportsSpeechRecognition) {
    return <span>Broweser Not Support</span>;
  }
  return (
    <>
      <div className="container">
        <h2>Speech To Text</h2>
        <br />
        <p>
          A React hook that converts speech from the microphone to text and
          makes it available to your React components.
        </p>
        <div className="main-content" onClick={() => setText(transcript)}>
          {transcript}
        </div>
        <div className="btn-style">
          <button onClick={setCopied}>
            {isCopied ? "Copied" : "Copy To Clipboard"}
          </button>
          <button onClick={startListening}>Start Listening</button>
          <button onClick={SpeechRecognition.stopListening}>
            Stop Listening
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
