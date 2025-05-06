'use client';

import React from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { Row, Col, Nav } from 'react-bootstrap';

const ClubsPageContent: React.FC = () => {
  const params = useSearchParams();

  const name = params.get('name') || 'Unnamed Club';
  const image = params.get('image') || 'https://via.placeholder.com/120';
  const creator = params.get('creator') || 'Unknown';
  const email = params.get('email') || 'N/A';

  return (
    <div className="py-4">
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Image
            src={image}
            alt="Club Avatar"
            width={64}
            height={64}
            style={{
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid #eee',
              boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
            }}
            priority
          />
        </Col>
        <Col className="text-start">
          <div style={{ fontWeight: 700, fontSize: 24 }}>{name}</div>
          <div style={{ fontSize: 16, color: '#888' }}>
            Created by:
            <br />
            {creator}
            <br />
            (
            {email}
            )
          </div>
        </Col>
      </Row>

      <hr />

      <Nav variant="tabs" defaultActiveKey="post" className="mb-4">
        <Nav.Item>
          <Nav.Link eventKey="post">Post</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="activity">Activity</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="clockin">Clock In</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="chat">Chat</Nav.Link>
        </Nav.Item>
      </Nav>

      <div style={{ textAlign: 'center', color: '#666' }}>No posts yet.</div>
    </div>
  );
};

export default ClubsPageContent;
