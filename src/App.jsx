import './App.css'
import OCRReaderV1 from './OCRReaderV1'
import OCRReaderV2 from './OCRReaderV2'

export default function App() {
  return (
    <main>
      <h1>GHW MLH - AI/ML in JavaScript React App</h1>
      <div style={{
          width: "100%",
          height: "5px",
          color: "rgba(255, 255, 255, 0.87)",
          padding: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.87)",
      }} />
        <OCRReaderV1 />
      <div style={{
          width: "100%",
          height: "5px",
          color: "rgba(255, 255, 255, 0.87)",
          padding: "2px",
          backgroundColor: "rgba(255, 255, 255, 0.87)",
      }} />
        <OCRReaderV2 />
    </main>
  )
}
