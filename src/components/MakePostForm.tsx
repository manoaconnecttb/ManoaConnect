'use client';

import { useSession } from 'next-auth/react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import swal from 'sweetalert';
import { redirect } from 'next/navigation';
import { makePost } from '@/lib/dbActions';
import LoadingSpinner from '@/components/LoadingSpinner';
import { MakePostSchema } from '@/lib/validationSchemas';

const onSubmit = async (data: { title: string; image: string; author: string;
  content: string; owner: string }) => {
  // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
  await makePost(data);
  swal('Success', 'Your item has been added', 'success', {
    timer: 2000,
  });
};

const MakePostForm: React.FC = () => {
  const { data: session, status } = useSession();
  // console.log('MakePostForm', status, session);
  const currentUser = session?.user?.email || '';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(MakePostSchema),
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
              <h2>New Post</h2>
            </Col>
            <Card>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group>
                    <Form.Label>Title</Form.Label>
                    <input
                      type="text"
                      {...register('title')}
                      className={`form-control ${errors.title ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.title?.message}</div>
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Image</Form.Label>
                    <input
                      type="text"
                      {...register('image')}
                      className={`form-control ${errors.image ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.image?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('author')} value={currentUser} />
                  <Form.Group>
                    <Form.Label>Content</Form.Label>
                    <input
                      type="text"
                      {...register('content')}
                      className={`form-control ${errors.content ? 'is-invalid' : ''}`}
                    />
                    <div className="invalid-feedback">{errors.content?.message}</div>
                  </Form.Group>
                  <input type="hidden" {...register('owner')} value={currentUser} />
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

export default MakePostForm;
