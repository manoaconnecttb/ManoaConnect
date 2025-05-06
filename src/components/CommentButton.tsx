/* eslint-disable import/extensions */
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import router from 'next/router';
import { CommentPost } from '@/lib/dbActions';

type CommentButtonProps = {
  postId: number;
  user: string;
};

const CommentButton: React.FC<CommentButtonProps> = ({ postId, user }) => {
  const [showInput, setShowInput] = useState(false);
  const [comment, setComment] = useState('');

  const handleCommentSubmit = async () => {
    try {
      await CommentPost(postId, user, comment);
      setComment(''); // clear input
      setShowInput(false); // hide input after submit
    } catch (error) {
      console.error('Error submitting comment:', error);
      router.push('/home');
    }
  };

  return (
    <div>
      <Button
        onClick={() => setShowInput(!showInput)}
        className="commentbutton px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
      >
        {showInput ? 'Cancel' : 'Add Comment'}
      </Button>

      {showInput && (
        <div className="mt-2">
          <Form.Control
            type="text"
            placeholder="Enter your comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mb-2"
          />
          <Button
            onClick={handleCommentSubmit}
            className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Submit
          </Button>
        </div>
      )}
    </div>
  );
};

export default CommentButton;
