import Link from 'next/link';
import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { PencilFill } from 'react-bootstrap-icons';
import EditClubModal from '@/components/EditClubModal';
import { ClubData } from './AddClubFormModal';

interface ClubCardProps {
  club: ClubData & { id: number };
}

const ClubCard: React.FC<ClubCardProps> = ({ club }) => {
  const [showEdit, setShowEdit] = useState(false);

  return (
    <>
      <Card className="h-100 position-relative">
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
          <Card.Img
            variant="top"
            src={club.image}
            style={{
              height: '200px',
              width: '100%',
              objectFit: 'cover',
            }}
          />
        </Link>

        <Button
          variant="light"
          size="sm"
          onClick={() => setShowEdit(true)}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            borderRadius: '50%',
            padding: '0.3rem 0.5rem',
            boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
            zIndex: 10,
          }}
        >
          <PencilFill />
        </Button>

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

      {showEdit && (
        <EditClubModal
          show={showEdit}
          onHide={() => setShowEdit(false)}
          club={club}
        />
      )}
    </>
  );
};

export default ClubCard;
