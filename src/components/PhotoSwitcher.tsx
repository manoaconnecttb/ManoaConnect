'use client';

import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from 'next/image';

interface PhotoSwitcherProps {
  images: { src: string; alt: string }[];
  size?: { width: number; height: number };
}

const PhotoSwitcher: React.FC<PhotoSwitcherProps> = ({ images, size = { width: 1000, height: 600 } }) => (
  <Carousel>
    {images.map((img) => (
      <Carousel.Item key={img.src}>
        <div style={{ textAlign: 'center' }}>
          <Image
            src={img.src}
            alt={img.alt}
            width={size.width}
            height={size.height}
            style={{
              objectFit: 'cover',
              margin: '0 auto',
            }}
          />
        </div>
      </Carousel.Item>
    ))}
  </Carousel>
);

export default PhotoSwitcher;
