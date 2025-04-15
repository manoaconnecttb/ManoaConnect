import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { Container } from 'react-bootstrap';
import MakePostButton from '@/components/MakePostButton';
import PostCard from '@/components/PostCard';

const HomePage = async () => {
  // Protect the page, only logged in users can access it.
  // const session = await getServerSession(authOptions);
  // loggedInProtectedPage(
  //   session as {
  //     user: { email: string; id: string; randomKey: string };
  //   } | null,
  // );

  const mockPosts = Array.from({ length: 3 }, (_, i) => ({
    id: i + 1,
    title: `Post Title ${i + 1}`,
    content: `This is the content of post ${i + 1}. It’s just placeholder text for now.`,
  }));

  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100 p-4">
      <Container className="w-full max-w-2xl rounded-2xl shadow-xl p-4 overflow-y-auto max-h-[80vh]">
        <h1>Posts</h1>
        <div className="space-y-4">
          {mockPosts.map((post) => (
            <PostCard key={post.id} />
          ))}
        </div>
      </Container>
      <MakePostButton />
    </main>
  );
};

export default HomePage;
