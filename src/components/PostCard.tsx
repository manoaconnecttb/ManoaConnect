'use client';

/* eslint-disable import/extensions */
// #TODO: Implement likes (easy?) and comments(hard) functionality
// #TODO: Add time to the post

import { Card, Image } from 'react-bootstrap';
import Link from 'next/link';
import { Post } from '@/lib/validationSchemas';
import { HandThumbsUp, Chat } from 'react-bootstrap-icons';

const PostCard = ({ post }: { post: Post }) => (
  <Card className="h-100">
    <Card.Header>
      <Image src={post.image} alt="Post Image" width={365} />
      <Card.Title>
        {post.title}
      </Card.Title>
      <Card.Subtitle>
        {post.author}
      </Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        {post.content}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <Link href="/home" className="text-[#024731] no-underline hover:no-underline">
        <HandThumbsUp className="mb-1" />
        {' '}
        {post.likes}
        {' '}
      </Link>
      <Link href="/home" className="no-underline hover:no-underline text-[#024731]">
        {' '}
        <Chat className="mb-1 ml-4" />
        {' '}
        {post.comments.length}
      </Link>

    </Card.Footer>
  </Card>
);

/* Placeholder
const PostCard = () => (
  <Card className="postcard h-100">
    <Card.Header>
      <Image src="https://github.com/RuiChen12.png" alt="Post Image" width={400} />
      <Card.Title>
        Placeholder Post Title
      </Card.Title>
      <Card.Subtitle>Posted at Time by Person</Card.Subtitle>
    </Card.Header>
    <Card.Body>
      <Card.Text>
        Placeholder post
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      Like
    </Card.Footer>
  </Card>
);
*/

export default PostCard;
