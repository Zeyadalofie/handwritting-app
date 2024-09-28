import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';
import ThreeJSDisplay from './three';

const App = () => {
  const [image, setImage] = useState(null);

  const handleImageUpload = (img) => {
    setImage(img);
  };

  return (
    <div>
      <h1>Handwriting Recognition</h1>
      <DragAndDrop onImageUpload={handleImageUpload} />
      {image && <ThreeJSDisplay image={image} />}
    </div>
  );
};

export default App;