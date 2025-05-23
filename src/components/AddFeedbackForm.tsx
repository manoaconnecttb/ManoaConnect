'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { addFeedback } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { AddFeedbackSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: { name: string; response: string; }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await addFeedback(data);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const AddFeedbackForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('AddStuffForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(AddFeedbackSchema),
  });
  if (status === 'loading') {
    return <LoadingSpinner />;
  }
  if (status === 'unauthenticated') {
    redirect('/auth/signin');
  }

  return (
    <div className="feedback-bg">
      <Container className="py-3">
        <Row className="justify-content-center">
          <Col xs={5}>
            <Col className="text-center">
              <h2>Feedback</h2>
            </Col>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <input
                      type="text"
                      {...register('name')}
                      defaultValue={currentUser}
                      readOnly
                      className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Feedback</Form.Label>
                    <input
                      type="text"
                      {...register('response')}
                      className={`form-control ${errors.response ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.name?.message}</div>
                  </Form.Group>
                  <Form.Group className="form-group">
                    <Row className="pt-3">
                      <Col>
                        <Button type="submit" variant="primary">
                          Submit
                        </Button>
                      </Col>
                      <Col>
                        <Button type="button" onClick={() => reset()} variant="warning" className="float-right">
                          Reset
                        </Button>
                      </Col>
                    </Row>
                  </Form.Group>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AddFeedbackForm;
