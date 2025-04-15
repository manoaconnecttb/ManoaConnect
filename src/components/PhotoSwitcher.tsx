'use client';
import React from 'react';
import { Carousel } from 'react-bootstrap';

interface PhotoSwitcherProps {
  images: { src: string; alt: string }[];
  size?: { width: number; height: number };
}

const PhotoSwitcher: React.FC<PhotoSwitcherProps> = ({ images, size }) => {
  return (
    <Carousel>
      {images.map((img, idx) => (
        <Carousel.Item key={idx}>
          <img
            src={img.src}
            alt={img.alt}
            style={{
              width: size?.width || '100%',
              height: size?.height || 'auto',
              objectFit: 'cover',
              display: 'block',
              margin: '0 auto',
            }}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default PhotoSwitcher;
