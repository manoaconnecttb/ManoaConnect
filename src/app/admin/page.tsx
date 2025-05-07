/* eslint-disable @next/next/no-img-element */
import ClubCard from '@/components/ClubCard';
import FeedbackAdmin from '@/components/FeedbackAdmin';
import PostCardAdmin from '@/components/PostCardAdmin';
import authOptions from '@/lib/authOptions';
import { adminProtectedPage } from '@/lib/page-protection';
import { prisma } from '@/lib/prisma';
import { getServerSession } from 'next-auth';
import { Col, Container, Row, Table } from 'react-bootstrap';

const AdminPage = async () => {
  const session = await getServerSession(authOptions);
  try {
    adminProtectedPage(
      session as {
        user: { email: string; id: string; randomKey: string };
      } | null,
    );
  } catch (err) {
    return (
      <main style={{ padding: '2rem', color: 'red' }}>
        <h1>Access Denied</h1>
        <p>You must be an admin to view this page.</p>
      </main>
    );
  }
  const feedback = await prisma.feedback.findMany({});
  const users = await prisma.user.findMany({});
  const posts = await prisma.post.findMany({});
  const clubs = await prisma.club.findMany({});

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
        <Row className="gy-4">
          {clubs.map((club) => (
            <ClubCard key={club.id} club={club} />
          ))}
        </Row>

      </Container>
    </main>
  );
};

export default AdminPage;
