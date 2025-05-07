/* eslint-disable @next/next/no-img-element */
import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';
import FeedbackAdmin from '@/components/FeedbackAdmin';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import PostCardAdmin from '@/components/PostCardAdmin';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  adminProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  const feedback = await prisma.feedback.findMany({});
  const users = await prisma.user.findMany({});
  const posts = await prisma.post.findMany({});

  return (
    <main>
      <Container id="list" className="py-3">
        <Row>
          <Col>
            <h1>Feedback</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Response</th>
                </tr>
              </thead>
              <tbody>
                {feedback.map((item) => (
                  <FeedbackAdmin key={item.id} {...item} />
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1>List Users Admin</h1>
            <Table striped bordered hover>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Role</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id}>
                    <td>{user.email}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row className="gy-4">
          {posts.map((post) => (
            <PostCardAdmin key={post.id} post={post} />
          ))}
        </Row>

      </Container>
    </main>
  );
};

export default AdminPage;
