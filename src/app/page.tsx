'use client';

import React from 'react';
import { Container } from 'react-bootstrap';
import PhotoSwitcher from '@/components/PhotoSwitcher';
import AddClubPrompt from '@/components/AddClubPrompt';
import ScrollToTopButton from '@/components/ScrollToTopButton';

const Home = () => {
  const imageList = [
    { src: '/slideshow1.jpg', alt: 'Image1' },
    { src: '/slideshow2.png', alt: 'Image 2' },
    { src: '/slideshow.jpg', alt: 'Image 3' },
    { src: '/slideshow5.jpeg', alt: 'Image 4' },
    { src: '/slideshow6.jpg', alt: 'Image 5' },
    { src: '/slideshow7.jpg', alt: 'Image 6' },
  ];

  return (
    <main>
      <h1 className="text-center mt-4" style={{ color: '#024731', fontWeight: 'bold' }}>Welcome To ManoaConnectTB</h1>
      <div style={{ textAlign: 'center' }}>
        <a
          href="/auth/signin"
          style={{
            marginRight: '20px',
            backgroundColor: '#024731',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            textDecoration: 'none',
            display: 'inline-block',
            textAlign: 'center',
          }}
        >
          Sign In To Get Started
        </a>
      </div>
      <Container className="py-3">
        <PhotoSwitcher images={imageList} size={{ width: 1000, height: 600 }} />

        <AddClubPrompt />
      </Container>
      <ScrollToTopButton />
    </main>
  );
};

export default Home;
