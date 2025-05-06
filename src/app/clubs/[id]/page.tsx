/* eslint-disable import/extensions */
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { Container, Row, Col } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';

export default async function ClubProfile({ params }: { params: { id: string } }) {
  const club = await prisma.club.findUnique({
    where: { id: Number(params.id) },
  });

  if (!club) return notFound();

  return (
    <Container className="py-4">
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Image
            src={club.image}
            alt="Club Avatar"
            width={120}
            height={120}
            style={{ borderRadius: '16px', objectFit: 'cover' }}
          />
        </Col>
        <Col>
          <h2>{club.name}</h2>
          <p className="text-muted">
            Created by
            {club.creator}
            (
            {club.email}
            )
          </p>
        </Col>
      </Row>
      <hr />
      <h5>Description</h5>
      <p>{club.description}</p>
    </Container>
  );
}
