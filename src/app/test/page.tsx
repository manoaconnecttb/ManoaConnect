'use client';

import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import AddClubFormModal, { ClubData } from '@/components/AddClubFormModal';
import ClubCard from '@/components/ClubCard';
import { makeClub, getAllClubs } from '@/lib/dbActions';

interface ClubWithId extends ClubData {
  id: number;
}

const TestPage: React.FC = () => {
  const [clubs, setClubs] = useState<ClubWithId[]>([]);

  // Fetch all clubs on mount
  useEffect(() => {
    const fetchClubs = async () => {
      const allClubs = await getAllClubs();
      setClubs(allClubs);
    };
    fetchClubs();
  }, []);

  // Add club handler
  const handleAddClub = async (club: ClubData) => {
    await makeClub(club);
    const allClubs = await getAllClubs();
    setClubs(allClubs);
  };

  return (
    <Container className="py-4">
      <h2 className="mb-4">Test ClubCard Creation</h2>

      {/* Add Club Modal */}
      <AddClubFormModal onAddClub={handleAddClub} />

      {/* Display Club Cards */}
      <Row className="mt-4">
        {clubs.map((club) => (
          <Col key={club.name + club.email} md={4} className="mb-4">
            <ClubCard club={club} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default TestPage;
