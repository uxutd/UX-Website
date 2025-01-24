import React from "react";

interface ImageGridProps {
  images: string[]; // Define images as an array of strings
}

const ImageGrid: React.FC<ImageGridProps> = ({ images }) => {
  return (
    <div className="grid-container">
      {images.map((image, index) => (
        <img
          key={index}
          alt={`${index + 1}`}
          className="grid-item"
          src={image}
        />
      ))}
    </div>
  );
};

export default ImageGrid;
