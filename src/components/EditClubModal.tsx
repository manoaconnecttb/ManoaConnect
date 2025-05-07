'use client';

import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, Form } from 'react-bootstrap';
import { useRouter } from 'next/navigation';
import { updateClub, deleteClub } from '@/lib/dbActions';
import { ClubData } from './AddClubFormModal';

interface EditClubModalProps {
  show: boolean;
  onHide: () => void;
  club: ClubData & { id: number };
}

const EditClubModal: React.FC<EditClubModalProps> = ({ show, onHide, club }) => {
  const { register, handleSubmit, reset } = useForm<ClubData>({
    defaultValues: {
      name: club.name,
      description: club.description,
      creator: club.creator,
      email: club.email,
      image: club.image,
    },
  });

  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const onSubmit = (data: ClubData) => {
    startTransition(async () => {
      await updateClub(club.id, data);
      onHide();
      reset();
      router.refresh();
    });
  };

  const handleDelete = () => {
    startTransition(async () => {
      await deleteClub(club.id);
      onHide();
      router.refresh();
    });
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Edit Club</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Form.Group className="mb-2">
            <Form.Label>Creator Name</Form.Label>
            <Form.Control {...register('creator')} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" {...register('email')} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Club Name</Form.Label>
            <Form.Control {...register('name')} required />
          </Form.Group>
          <Form.Group className="mb-2">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows={3} {...register('description')} required />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Image URL</Form.Label>
            <Form.Control {...register('image')} required />
          </Form.Group>
          <div className="d-flex justify-content-between">
            <Button variant="danger" onClick={handleDelete}>
              Delete
            </Button>
            <div>
              <Button variant="secondary" onClick={onHide} className="me-2">
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isPending}>
                {isPending ? 'Saving...' : 'Save'}
              </Button>
            </div>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditClubModal;
