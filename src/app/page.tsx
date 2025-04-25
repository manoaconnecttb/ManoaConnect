'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import PhotoSwitcher from '@/components/PhotoSwitcher';
import AddClubPrompt from '@/components/AddClubPrompt';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  const imageList = [
    { src: '/ACM.jpg', alt: 'ACM' },
    { src: '/ACM.jpg', alt: 'Image 2' },
    { src: '/ACM.jpg', alt: 'Image 3' },
    { src: '/ACM.jpg', alt: 'Image 4' },
    { src: '/ACM.jpg', alt: 'Image 5' },
    { src: '/ACM.jpg', alt: 'Image 6' },
  ];

  return (
    <main>
      <Container className="py-3">
        <PhotoSwitcher images={imageList} size={{ width: 1000, height: 600 }} />

        <AddClubPrompt />
      </Container>
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
