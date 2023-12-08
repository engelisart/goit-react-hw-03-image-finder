import React from 'react';
import ImageGalletyItem from '../ImageGalleryItem/ImageGalleryItem';
import css from '../ImageGallery/ImageGallety.module.css';

const ImageGallery = ({ images, setActiveImage }) => {
  return (
    <ul className={css.gallery}>
      {images.map(image => (
        <ImageGalletyItem
          key={image.id}
          image={image}
          setActiveImage={setActiveImage}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
