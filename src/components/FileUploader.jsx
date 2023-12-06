import React, { useRef } from 'react';

export default function FileUploader({ onFileSelect, onFileSelectError, onFileSelectSuccess }) {
    const fileInput = useRef(null);

    const handleFileInput = (e) => {
        const file = e.target.files[0];

        // handle validations
        if (file.size > 1024) {
            onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        } else {
            onFileSelectSuccess(file);
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} ref={fileInput} style={{ display: 'none' }} />
            <button onClick={() => fileInput.current && fileInput.current.click()} className="btn btn-primary">
                Select File
            </button>
        </div>
    );
};

