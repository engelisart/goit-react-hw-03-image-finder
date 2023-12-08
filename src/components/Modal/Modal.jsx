import React from 'react';
import './Modal.css';

export const Modal = ({ image, setActiveImage }) => {
  return (
    <div
      className="overlay"
      onClick={() => {
        setActiveImage();
      }}
    >
      <div className="modal">
        <img
          className="largeImage"
          src={image.largeImageURL}
          alt={image.tags}
        />
      </div>
    </div>
  );
};
