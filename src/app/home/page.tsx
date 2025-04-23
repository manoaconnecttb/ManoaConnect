import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { Col, Container, Row } from 'react-bootstrap';
import MakePostButton from '@/components/MakePostButton';
import PostCard from '@/components/PostCard';
import { prisma } from '@/lib/prisma';

// #TODO: make so only some posts are shown at a time

const HomePage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );

  const posts = await prisma.post.findMany({
  });

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Container className="w-full max-w-2xl rounded-2xl shadow-xl p-4 overflow-y-auto max-h-[80vh]">
        <Col>
          <h1>Posts</h1>
          <Row className="gy-4">
            {posts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </Row>
        </Col>
      </Container>
      <MakePostButton />
    </main>
  );
};

export default HomePage;
