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
    <Container fluid className="py-4" style={{ margin: '50px auto', maxWidth: '1400px' }}>
      <h1 className="text-center" style={{ color: '#024731', fontWeight: 'bold' }}>Explore Clubs</h1>
      <Row>

        <Col className="justify-content-end d-flex">
          <h5 className="p-3" style={{ color: '#024731', fontWeight: 'bold' }}>Create a Club</h5>
          {/* Add Club Modal */}
          <AddClubFormModal onAddClub={handleAddClub} />
        </Col>
      </Row>
      {/* Display Club Cards */}
      <Row className="mt-4">
        {clubs
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((club) => (
            <Col key={club.name + club.email} md={4} className="mb-4">
              <ClubCard club={club} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};

export default TestPage;
