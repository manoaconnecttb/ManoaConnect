'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Container, Row, Col, Nav, Card } from 'react-bootstrap';
import AddClubFormModal, { ClubData } from '@/components/AddClubFormModal';

const CLUB_AVATAR = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_2azfqh_qr52MOAohFAngj9TyxfdHFYG5Kw&s';
const CLUB_NAME = 'QQ';
const MEMBER_COUNT = 1;

const DUMMY_POSTS = [
  { id: 1, author: 'Alice', content: 'Welcome to QQ Club!' },
  { id: 2, author: 'Bob', content: 'Remember our meeting this Friday at 6pm.' },
];

const ClubsPage: React.FC = () => {
  const [clubs, setClubs] = useState<ClubData[]>([]);

  const handleAddClub = (club: ClubData) => {
    setClubs([...clubs, club]);
  };

  return (
    <Container
      className="py-4"
      style={{
        background: '#fff',
        borderRadius: 16,
        boxShadow: '0 2px 8px rgba(0,0,0,0.07)',
        marginTop: 32,
        marginBottom: 32,
        maxWidth: 900,
      }}
    >
      {/* 顶部 Club 信息 */}
      <Row className="align-items-center mb-3">
        <Col xs="auto">
          <Link href="/clubs/profile" style={{ display: 'inline-block' }}>
            <Image
              src={CLUB_AVATAR}
              alt="Club Avatar"
              width={64}
              height={64}
              style={{
                borderRadius: '16px',
                objectFit: 'cover',
                border: '2px solid #eee',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
                cursor: 'pointer',
              }}
              priority
            />
          </Link>
        </Col>
        <Col className="text-start">
          <div style={{ fontWeight: 700, fontSize: 24 }}>{CLUB_NAME}</div>
          <div style={{ fontSize: 16, color: '#888' }}>Member: {MEMBER_COUNT}</div>
        </Col>
      </Row>

      <hr />

      {/* Navbar */}
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

      {/* Post 列表 */}
      <div>
        {DUMMY_POSTS.map((post, idx) => (
          <div key={post.id} style={{ marginBottom: 24 }}>
            <Card className="text-start mb-2" style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
              <Card.Body>
                <Card.Title style={{ fontSize: 18 }}>{post.author}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
              </Card.Body>
            </Card>
            {idx !== DUMMY_POSTS.length - 1 && <hr style={{ margin: '12px 0' }} />}
          </div>
        ))}
      </div>

      {/* 右下角 Create Club 按钮 */}
      <div style={{
        position: 'fixed',
        right: 40,
        bottom: 40,
        zIndex: 1000,
        width: 48,
        height: 48,
      }}>
        <AddClubFormModal onAddClub={handleAddClub} />
      </div>
    </Container>
  );
};

export default ClubsPage;
