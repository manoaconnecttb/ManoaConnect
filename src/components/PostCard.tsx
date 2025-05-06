'use client';

/* eslint-disable import/extensions */
// #TODO: Implement comments(hard) functionality

import { useState } from 'react';
import { Card, Image, Button, Col } from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';
import Link from 'next/link';
import { Post } from '@/lib/validationSchemas';
import { HandThumbsUp, Chat } from 'react-bootstrap-icons';


=======
const PostCard = ({ post }: { post: Post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiking, setIsLiking] = useState(false);
>>>>>>> main

  const handleLike = async () => {
    setIsLiking(true);
    try {
      const res = await fetch(`/api/posts/${post.id}/like`, { method: 'POST' });
      if (res.ok) {
        const data = await res.json();
        setLikes(data.likes);
      } else {
        console.error('Failed to like post');
      }
    } catch (err) {
      console.error('Error liking post:', err);
    } finally {
      setIsLiking(false);
    }
  };
  return (
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
        <Col>
          <Button variant="outline-primary" onClick={handleLike} disabled={isLiking}>
            <HeartFill />
            Like
            {likes}
          </Button>
        </Col>
        <Col>
          <Link href="/home" className="text-blue-500 hover:underline">
            Comment
            {post.comments.length}
          </Link>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
