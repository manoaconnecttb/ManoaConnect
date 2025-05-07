'use client';

/* eslint-disable import/extensions */
import React from 'react';
import { useSession } from 'next-auth/react';
import { Card, Button } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { deleteClub } from '@/lib/dbActions';
import { ClubData } from './AddClubFormModal';

interface ClubCardProps {
  club: ClubData & { id: number };
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;

  return (
    <Card className="h-100 position-relative">
      <Card.Img
        variant="top"
        src={club.image}
        style={{
          height: '200px',
          width: '100%',
          objectFit: 'cover',
        }}
      />

      {/* Admin Only Link */}
      {currentUser && role === 'ADMIN' && (
        <Button variant="danger" onClick={() => deleteClub(club.id)}>
          <Trash />
        </Button>
      )}
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
  );
};

export default ClubCard;
