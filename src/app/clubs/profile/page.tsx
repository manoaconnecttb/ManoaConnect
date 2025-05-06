'use client';

import React from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

export default function ClubProfilePage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const name = searchParams.get('name') || 'Unnamed Club';
  const image = searchParams.get('image') || 'https://via.placeholder.com/120';
  const description = searchParams.get('description') || 'No description provided.';
  const creator = searchParams.get('creator') || 'Unknown';
  const email = searchParams.get('email') || 'N/A';

  const handleViewClub = () => {
    const query = new URLSearchParams({
      name,
      image,
      creator,
      email,
    }).toString();
    router.push(`/clubs
      ?${query}`);
  };

  return (
    <Container className="py-4">
      <Row className="align-items-center mb-3">
        <Col xs="auto" style={{ cursor: 'pointer' }} onClick={handleViewClub}>
          <Image
            src={image}
            alt="Club Avatar"
            width={120}
            height={120}
            style={{
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid #eee',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
            priority
          />
        </Col>
        <Col>
          <h2 className="mb-1">{name}</h2>
          <p className="text-muted mb-0">
            Created by:
            <br />
            {creator}
            <br />
            (
            {email}
            )
          </p>
        </Col>
      </Row>
      <hr />
      <div className="mb-4">
        <h5>Club Description</h5>
        <p>{description}</p>
      </div>
      <div className="text-center mt-4">
        <Button variant="primary">Join Club</Button>
      </div>
      <div className="text-center mt-4">
        <Button variant="primary" onClick={handleViewClub}>
          View
        </Button>
      </div>
    </Container>
  );
}
