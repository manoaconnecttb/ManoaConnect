'use client';

/* eslint-disable import/extensions */

import { Button, Card, Image } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';
import { Post } from '@/lib/validationSchemas';
import { deletePost } from '@/lib/dbActions';

function removePost(id: number): void {
  deletePost(id);
}

const PostCardAdmin = ({ post }: { post: Post }) => {
  console.log('PostCardAdmin', post);

  return (
    <Card style={{ maxWidth: '250px', maxHeight: '200px', fontSize: '0.75rem' }}>
      <Card.Header>
        <Image src={post.image} alt="Post Image" width={50} />
        <Card.Title>
          {post.title.slice(0, 14)}
        </Card.Title>
        <Card.Subtitle>
          {post.author}
        </Card.Subtitle>
        <Button variant="danger" onClick={() => removePost(post.id)}>
          <Trash />
        </Button>
      </Card.Header>
      <Card.Body>
        <Card.Text>
          {post.content.slice(0, 30)}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default PostCardAdmin;
