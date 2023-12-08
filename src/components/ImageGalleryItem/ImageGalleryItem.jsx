import React from 'react';
import './ImageGalleryItem.css';

const ImageGalletyItem = ({ image, setActiveImage }) => {
  return (
    <li id={image.id}>
      <img
        className="smallImage"
        src={image.webformatURL}
        alt=""
        width={325}
        height={225}
        onClick={() => {
          setActiveImage(image);
        }}
      />
    </li>
  );
};

export default ImageGalletyItem;
