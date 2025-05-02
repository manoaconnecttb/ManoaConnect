/* eslint-disable import/extensions */
import { getServerSession } from 'next-auth';
import authOptions from '@/lib/authOptions';
import { loggedInProtectedPage } from '@/lib/page-protection';
import AddFeedbackForm from '@/components/AddFeedbackForm';

const AddFeedback = async () => {
  // Protect the page, only logged in users can access it.
  const session = await getServerSession(authOptions);
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; randomKey: string };
    } | null,
  );
  return (
    <main>
      <AddFeedbackForm />
    </main>
  );
};

export default AddFeedback;
