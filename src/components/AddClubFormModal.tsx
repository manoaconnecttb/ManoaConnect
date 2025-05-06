import React, { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Button, Modal, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

export interface ClubData {
  creator: string;
  email: string;
  name: string;
  description: string;
  image: string;
}

interface AddClubFormModalProps {
  onAddClub: (club: ClubData) => Promise<void>;
}

const AddClubFormModal: React.FC<AddClubFormModalProps> = ({ onAddClub }) => {
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();
  const { register, handleSubmit, reset } = useForm<ClubData>();
  const router = useRouter();

  const handleOpen = () => setShow(true);
  const handleClose = () => setShow(false);

  const onSubmit = (data: ClubData) => {
    startTransition(async () => {
      await onAddClub(data); // ✅ 使用传入的 prop
      handleClose();
      reset();
      router.refresh();
    });
  };

  return (
    <>
      <Button
        variant="link"
        onClick={handleOpen}
        className="p-0 border-0 bg-transparent"
        style={{ width: 48, height: 48 }}
      >
        <Image
          src="/PostButton.png"
          alt="Add Club"
          width={48}
          height={48}
          style={{
            objectFit: 'contain',
            maxWidth: '100%',
            maxHeight: '100%',
          }}
          priority
        />
      </Button>

      <Modal show={show} onHide={handleClose} centered dialogClassName="custom-modal">
        <Modal.Header closeButton>
          <Modal.Title>Create a Club</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-2">
              <Form.Label>Creator Name</Form.Label>
              <Form.Control {...register('creator')} required />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Gmail</Form.Label>
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
              <Form.Label>Club Image URL</Form.Label>
              <Form.Control {...register('image')} required />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Cancel
              </Button>
              <Button type="submit" variant="primary" disabled={isPending}>
                {isPending ? 'Creating...' : 'Create'}
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddClubFormModal;
