'use client';

import React, { useState } from 'react';
import { Button, Container, Modal } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const AddClubPrompt: React.FC = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);
  const handleSignIn = () => {
    router.push('/auth/signin');
  };
  const handleSignUp = () => {
    router.push('/auth/signup');
  };

  return (
    <Container className="py-3 text-center">
      <Button variant="link" onClick={handleShow} className="p-0 border-0 bg-transparent">
        <Image src="/PostButton.png" alt="Create Club" width={120} height={120} />
      </Button>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Not Signed In</Modal.Title>
        </Modal.Header>
        <Modal.Body>You need to sign in to create a club.</Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSignIn}>
            Sign In
          </Button>
          <Button variant="success" onClick={handleSignUp}>
            Sign Up
          </Button>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default AddClubPrompt;
