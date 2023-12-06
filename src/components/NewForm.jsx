import React, { useState } from "react";

const NewForm = ({ setName }) => {
  const [nameInput, setNameInput] = useState("");

  const handleNameChange = (event) => {
    const newName = event.target.value;
    setNameInput(newName);
    setName(newName); 
  };

  return (
    <>
      <div>Write the name of New Form Page Content</div>
      <br />
      <input
        type="text"
        value={nameInput}
        placeholder="Set the name of the Enquiry Form"
        onChange={handleNameChange}
      />
    </>
  );
};

export default NewForm;
