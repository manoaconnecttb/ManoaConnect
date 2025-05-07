'use client';

import React, { Suspense } from 'react';
import { Container } from 'react-bootstrap';
import ClubsPageContent from './ClubPageContent';

export default function ClubsPage() {
  return (
    <Container>
      <Suspense fallback={<div>Loading club info...</div>}>
        <ClubsPageContent />
      </Suspense>
    </Container>
  );
}
