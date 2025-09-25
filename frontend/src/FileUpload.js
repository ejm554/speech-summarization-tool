// FileUpload.js - A React component for drag-and-drop file uploads
// This component will eventually handle MP3 files for our speech summarization tool

import React from 'react';

function FileUpload() {
  // This function will handle when files are dropped onto our component
  // For now, it just shows an alert - we'll add real functionality later
  const handleDrop = (event) => {
    event.preventDefault(); // Prevents browser from trying to open the file
    alert('Files dropped! We will process them here later.');
  };

  // Prevent the default browser behavior when dragging over the component
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div 
      className="file-upload-area"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <h2>Speech Summarization Tool</h2>
      <p>Drag and drop your MP3 files here</p>
      <p style={{fontSize: '14px', color: '#666'}}>
        (File processing not yet implemented)
      </p>
    </div>
  );
}

// Export this component so other files can import and use it
export default FileUpload;