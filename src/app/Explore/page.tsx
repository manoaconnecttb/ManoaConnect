import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma.ts';
// import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection.ts';
import authOptions from '@/lib/authOptions.ts';
import PostCard from '@/components/PostCard.tsx';

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
  const contacts: Contact[] = await prisma.stuff.findMany({
    where: {
      owner,
    },
  });
  // console.log(stuff);
  return (
    <main>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center text-white py-3">Explore</h1>
            <Row
              xs={1}
              md={2}
              lg={4}
              className="g-3 justify-content-center"
              style={{ maxHeight: '70vh', overflowY: 'auto' }}
            >
              {contacts.map((contact) => (
                <Col
                  key={contact.name + contact.id}
                  className="d-flex justify-content-center"
                >
                  <PostCard contact={contact} />
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
