'use client';

import React from 'react';
import { Card } from 'react-bootstrap';
import { ClubData } from './AddClubFormModal';

interface ClubCardProps {
  club: ClubData;
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  return (
    <Card className="h-100">
      <Card.Img
        variant="top"
        src={club.image}
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
        }}
      />
      <Card.Body>
        <Card.Title>{club.name}</Card.Title>
        <Card.Text>{club.description}</Card.Text>
        <small className="text-muted">
          Created by: {club.creator} ({club.email})
        </small>
      </Card.Body>
    </Card>
  );
};

export default ClubCard;
