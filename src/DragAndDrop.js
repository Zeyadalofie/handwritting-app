import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const DragAndDrop = () => {
  const [image, setImage] = useState(null);
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    setImage(URL.createObjectURL(file));

    // Send the image to the server for processing
    const formData = new FormData();
    formData.append('image', file);
    fetch('/upload', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      console.log('Prediction:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={dropzoneStyle}>
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Drop the files here ...</p>
      ) : (
        <p>Drag 'n' drop some files here, or click to select files</p>
      )}
      {image && <img src={image} alt="preview" style={{ width: '100%', height: 'auto' }} />}
    </div>
  );
};

const dropzoneStyle= {
  border: '2px dashed #add',
  padding: '20px',
  textAlign: 'center',
  cursor: 'pointer',
};


export default DragAndDrop;