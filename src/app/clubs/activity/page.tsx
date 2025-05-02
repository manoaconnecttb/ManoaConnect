'use client';

import React, { useState } from 'react';
import { Button, Modal, Form, Container, Table } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

interface Activity {
  id: number;
  title: string;
  description: string;
  link: string;
}

const ActivityPage: React.FC = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [showModal, setShowModal] = useState(false);
  const { register, handleSubmit, reset } = useForm<Omit<Activity, 'id'>>();

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const onSubmit = (data: Omit<Activity, 'id'>) => {
    const newActivity: Activity = {
      id: Date.now(),
      ...data,
    };
    setActivities([...activities, newActivity]);
    reset();
    handleClose();
  };

  return (
    <Container style={{ marginTop: '32px' }}>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3>Club Activities</h3>
        <Button onClick={handleOpen} variant="primary">
          Add Activity
        </Button>
      </div>

      <Table bordered hover responsive>
        <thead className="table-light">
          <tr>
            <th style={{ width: '20%' }}>Activity Name</th>
            <th style={{ width: '50%' }}>Description</th>
            <th style={{ width: '30%' }}>Link</th>
          </tr>
        </thead>
        <tbody>
          {activities.map((activity) => (
            <tr key={activity.id}>
              <td style={{ verticalAlign: 'middle' }}>{activity.title}</td>
              <td style={{ verticalAlign: 'middle' }}>{activity.description}</td>
              <td style={{ verticalAlign: 'middle' }}>
                <a
                  href={activity.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none"
                >
                  {activity.link.length > 30 ? `${activity.link.slice(0, 30)}…` : activity.link}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Activity</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className="mb-3">
              <Form.Label>Activity Name</Form.Label>
              <Form.Control {...register('title')} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={3} {...register('description')} required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Link</Form.Label>
              <Form.Control type="url" {...register('link')} required />
            </Form.Group>
            <div className="d-flex justify-content-end">
              <Button variant="secondary" onClick={handleClose} className="me-2">
                Cancel
              </Button>
              <Button type="submit" variant="primary">
                Add
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default ActivityPage;
