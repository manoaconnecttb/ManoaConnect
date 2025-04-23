'use client';

import React from 'react';
import Image from 'next/image';
import { Container, Row, Col, Button } from 'react-bootstrap';

const CLUB_AVATAR =
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2azfqh_qr52MOAohFAngj9TyxfdHFYG5Kw&s';
const MEMBERS = [
  'https://pic2.zhimg.com/v2-c21606cc260d1e83272a3b3243a2ff17_1440w.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOgWy4XWbdQYgjwLNcVpkYiP98mVp2C_D851s5QSxf3dHce0H0ylFkvoDqw17QZfGPda0&usqp=CAU',
];

const ACTIVITIES = [
  'Club meeting every Friday 6pm.',
  'Spring Festival Celebration.',
  'Online coding contest next month!',
];

export default function ClubProfilePage() {
  return (
    <Container className="py-4">
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Image
            src={CLUB_AVATAR}
            alt="Club Avatar"
            width={120}
            height={120}
            style={{
              borderRadius: '16px',
              objectFit: 'cover',
              border: '2px solid #eee',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
            }}
            priority
          />
        </Col>
        <Col>
          <h2 className="mb-1">QQ</h2>
        </Col>
      </Row>
      <hr />
      <div className="mb-4">
        <h5>Members</h5>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          {MEMBERS.map((url, idx) => (
            <Image
              key={idx}
              src={url}
              alt={`Member ${idx + 1}`}
              width={56}
              height={56}
              style={{
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #fff',
                boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
              }}
            />
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h5>Club Description</h5>
        <p>
          QQ Club is a fun and active student club for everyone interested in tech and social activities.
        </p>
      </div>
      <div className="mb-4">
        <h5>Activity</h5>
        <ul>
          {ACTIVITIES.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      <div className="text-center mt-4">
        <Button variant="primary">Join Club</Button>
      </div>
    </Container>
  );
}
