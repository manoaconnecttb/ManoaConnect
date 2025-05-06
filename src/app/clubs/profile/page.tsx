'use client';

import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import ClubProfileContent from '@/app/clubs/profile/ClubProfileContent';

export default function ClubProfilePage() {
  return (
    <Container className="py-4">
      <Suspense fallback={<div>Loading profile...</div>}>
        <ClubProfileContent />
      </Suspense>
    </Container>
  );
}