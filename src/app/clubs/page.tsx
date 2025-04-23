'use client';

import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddClubFormModal, { ClubData } from '@/components/AddClubFormModal';
import ClubCard from '@/components/ClubCard';

const ClubsPage: React.FC = () => {
  const [clubs, setClubs] = useState<ClubData[]>([]);

  const handleAddClub = (club: ClubData) => {
    setClubs([...clubs, club]);
  };

  return (
    <Container className="py-4 text-center">
      <h2>My Clubs</h2>
      <p>Click the button below to create a new club!</p>

      {/* Create button */}
      <AddClubFormModal onAddClub={handleAddClub} />

      {/* Club list */}
      <Row className="mt-4">
        {clubs.map((club, idx) => (
          <Col key={idx} md={4} className="mb-4">
            <ClubCard club={club} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ClubsPage;
