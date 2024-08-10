// ImageUpload component
import React from "react";

export default function ImageUpload({ onImageChange }) {
    // function to handle image upload
    const handleImageUpload = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onImageChange(reader.result);
            }
            reader.readAsDataURL(selectedFile);

        }
    }

    return (
        <div>
            <h2>Upload Image</h2>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
        </div>
    )
}
