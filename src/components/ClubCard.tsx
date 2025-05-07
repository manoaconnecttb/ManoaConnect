import Link from 'next/link';
import React from 'react';
import { Card } from 'react-bootstrap';
import { ClubData } from './AddClubFormModal';

interface ClubCardProps {
  club: ClubData & { id: number };
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => (
  <Link
    href={{
      pathname: '/clubs/profile',
      query: {
        name: club.name,
        description: club.description,
        image: club.image,
        creator: club.creator,
        email: club.email,
      },
    }}
    style={{ textDecoration: 'none', color: 'inherit' }}
  >
    <Card className="h-100" role="button">
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
          Created by:
          <br />
          {club.creator}
          <br />
          (
          {club.email}
          )
        </small>
      </Card.Body>
    </Card>
  </Link>
);

export default ClubCard;
