import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

export default function FileUploader({ onFileSelect, onFileSelectError, onFileSelectSuccess }) {
    const fileInput = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState([]);


    const handleFileInput = (e) => {
        const file = e.target.files[0];
       
        if (file.size > 50) {
            onFileSelectError({ error: "File size cannot exceed more than 5kb" });
        } else {
            setSelectedFiles([file]);
            onFileSelectSuccess(file);
        }
        if (onFileSelect) {
            onFileSelect(file);
        }
    };

    return (
        <div className="file-uploader">
            <input type="file" onChange={handleFileInput} ref={fileInput} style={{ display: 'none' }} />
            <button onClick={() => fileInput.current && fileInput.current.click()} className="btn btn-primary">
                Attach file up to 5kb
            </button>

            {selectedFiles.length > 0 && (
                <div>
                    <strong>Selected File(s):</strong>
                    <ul>
                        {selectedFiles.map((file, index) => (
                            <li key={index}>{file.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

FileUploader.propTypes = {
    onFileSelect: PropTypes.func,
    onFileSelectError: PropTypes.func,
    onFileSelectSuccess: PropTypes.func,
};
