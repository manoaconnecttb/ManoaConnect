/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable import/extensions */

import { getServerSession } from 'next-auth';
import { Col, Container, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
// import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import authOptions from '@/lib/authOptions';
import PostCard from '@/components/PostCard';
import Link from 'next/link';

/** Render a list of stuff for the logged in user. */
const FollowingPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
      // eslint-disable-next-line @typescript-eslint/comma-dangle
    } | null,
  );
  const clubs = await prisma.club.findMany(
    where: {

    }
);
  // console.log(stuff);
  return (

    <main style={{ margin: '50px' }}>
      <Container id="list" fluid className="py-3">
        <Row>
          <Col>
            <h1 className="text-center" style={{ color: '#024731', fontWeight: 'bold' }}>Explore Posts</h1>
            <Link href="/test" className="no-underline hover:no-underline text-[#024731]">
              Explore Clubs
            </Link>
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
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
// comment out the above code and uncomment the below code to test the page

export default FollowingPage;
