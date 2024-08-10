// OCRReader Component
import React, { useState } from "react";
import Tesseract from "tesseract.js";
import ImageUpload from "./ImageUpload";

export default function OCRReader() {
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
                <p>{text}</p>
            </div>
        </div>
    )
}