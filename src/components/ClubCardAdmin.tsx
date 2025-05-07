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

const ClubCardAdmin: React.FC<ClubCardProps> = ({ club }) => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;

  return (
    <Card style={{ maxWidth: '250px', maxHeight: '200px', fontSize: '0.75rem' }}>
      <Card.Header>
        <Card.Img src={club.image} alt="Club Image" style={{ maxWidth: '50px', maxHeight: '30px' }} />
        <Card.Title>
          {club.name.slice(0, 12)}
          ...
        </Card.Title>
        <Card.Subtitle>{club.creator}</Card.Subtitle>
        {/* Admin Only Link */}
        {currentUser && role === 'ADMIN' && (
        <Button variant="danger" onClick={() => deleteClub(club.id)}>
          <Trash />
        </Button>
        )}
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {club.description.slice(0, 30)}
          ...
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ClubCardAdmin;
