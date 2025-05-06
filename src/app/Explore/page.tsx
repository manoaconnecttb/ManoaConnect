/* eslint-disable import/extensions */
import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
// import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import PostCard from '@/components/PostCard';

/** Render a list of stuff for the logged in user. */
const ExplorePage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const owner = (session && session.user && session.user.email) || '';
  const posts = await prisma.post.findMany({
    where: {
      owner,
    },
  });
  // console.log(stuff);
  return (

    <main style={{ margin: '50px' }}>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center" style={{ color: '#024731', fontWeight: 'bold' }}>Explore</h1>
            <div className="p-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '10px' }}>
              <Row>
                <Col className="d-flex align-items-center">
                  <img
                    src={session?.user?.image || '/profilePicDefault.jpg'}
                    alt="Profile"
                    style={{
                      width: '75px',
                      height: '75px',
                      borderRadius: '50%',
                      objectFit: 'cover',
                      border: '2px solid #024731',
                      marginRight: '10px',
                    }}
                  />
                  <h3 style={{ margin: 0 }}>
                    Welcome
                    {` ${session?.user?.email}`}
                  </h3>
                </Col>
                <Col className="text-center py-3">
                  <a
                    href="/post"
                    style={{
                      marginRight: '20px',
                      backgroundColor: '#024731',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    Create Post
                  </a>
                  <a
                    href="/clubs"
                    style={{
                      marginRight: '20px',
                      backgroundColor: '#024731',
                      color: 'white',
                      border: 'none',
                      padding: '10px 20px',
                      borderRadius: '5px',
                      textDecoration: 'none',
                      display: 'inline-block',
                      textAlign: 'center',
                    }}
                  >
                    Add a Club
                  </a>
                </Col>
              </Row>
            </div>
            <Row
              xs={1}
              md={2}
              lg={4}
              className="g-3 justify-content-center"
              style={{ maxHeight: '70vh', overflowY: 'auto' }}
            >
              {posts.slice().reverse().map((post: any) => (
                <Col key={post.id}>
                  <PostCard post={post} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </main>
  );
};

export default ExplorePage;
