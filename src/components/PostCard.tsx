'use client';

/* eslint-disable import/extensions */

import { useState } from 'react';
import { Card, Image, Button, Col } from 'react-bootstrap';
import { HeartFill } from 'react-bootstrap-icons';
import { Post } from '@/lib/validationSchemas';
import { likePost } from '@/lib/dbActions';

const PostCard = ({ post }: { post: Post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [isLiking, setIsLiking] = useState(false);

  const handleLike = async () => {
    console.log('Liking post...');
    setIsLiking(true);
    try {
      await likePost(post.id); // assuming it succeeds
      setLikes((prevLikes) => prevLikes + 1); // increment locally
    } catch (error) {
      console.error('Failed to like post:', error);
    } finally {
      setIsLiking(false);
    }
  };
  return (
    <Card className="h-100">
      <Card.Header>
        <Image src={post.image} alt="Post Image" width={318} />
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
          <Button
            variant="outline-primary"
            onClick={handleLike}
            disabled={isLiking}
            style={{ color: '#024731', borderColor: '#024731' }}
          >
            <HeartFill />
            {' '}
            Like
            {' '}
            {likes}
          </Button>
        </Col>
      </Card.Footer>
    </Card>
  );
};

export default PostCard;
