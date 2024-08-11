import React, { useState } from "react"
import ImageUpload from "./ImageUpload"
import Tesseract from "tesseract.js"

export default function OCRReaderV2() {
    const [image, setImage] = useState(null);
    const [text, setText] = useState("");

    const handleImageChange = (imageData) => {
        setImage(imageData);
        processImage(imageData);
    }

    const processImage = (imageData) => {
        Tesseract.recognize(imageData, "eng", {
            logger: (m) => console.log(m),
        }).then(({data: {text}}) => {
            setText(text);
        })
    }

    return (
        <div>
            <h1>OCR Reader - Version 2</h1>
            <div>
                <ImageUpload onImageChange={handleImageChange} />
                {image && (
                    <div>
                        <img src={image} style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            marginTop: "20px"
                        }} />
                    </div>
                )}
            </div>
            <div>
                <h3>Extracted Text: </h3>
                <p style={{ marginBottom: "20px" }}>{text}</p>
            </div>
        </div>
    )
}