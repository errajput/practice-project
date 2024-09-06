import React, { useState } from 'react';
import './App.css';
const Image = () => {
    // State to hold the images
    const [images, setImages] = useState([]);
  
    // Function to add an image to the gallery
    const addImage = () => {
      const newImage = `https://via.placeholder.com/150?text=Image+${images.length + 1}`;
      setImages([...images, newImage]); // Add the new image to the existing list
    };
  
    return (
      <div className="container">
        <div className="right-side">
          {/* Tabs */}
          <div className="tabs">
            <button className="active">Gallery</button>
          </div>
          
          {/* Gallery Content */}
          <div className="content">
            <div className="gallery">
              {images.length === 0 ? (
                <p>No images yet. Click the button below to add an image.</p>
              ) : (
                images.map((image, index) => (
                  <img key={index} src={image} alt={`Gallery Image ${index + 1}`} />
                ))
              )}
            </div>
            <button className="add-image-button" onClick={addImage}>
              Add Image
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default Image;