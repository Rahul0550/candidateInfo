import React, { useState } from "react";
import FileUploader from "./FileUploader";

export default function DocumentCollection() {
  const [selectedFile, setSelectedFile] = useState(null);
  console.log(selectedFile);
  const handleFileSelect = (file) => {
    setSelectedFile(file);
  };

  const handleFileSelectError = ({ error }) => {
    alert(error);
  };

  return (
    <>
      <div className="Top">
        <h3> Name of the Enquiry Form</h3>
      </div>
      <div>
        <div className="form-group">
        <label>1. 10th Marksheet*</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>2. 12th Marksheet*</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>3. Graduation Marksheet*</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>4. Post Graduation Marksheet</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>5. Offer Letter*</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>6. Salary Slip*</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>7. Bank Statement*</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>8. Increment Letter(if any)</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        <br />
        </div>

        <div className="form-group">
        <label>9. Others (if any)</label>
        <br />
        <FileUploader
          onFileSelectSuccess={handleFileSelect}
          onFileSelectError={handleFileSelectError}
          required
        />
        </div>
      </div>
    </>
  );
}