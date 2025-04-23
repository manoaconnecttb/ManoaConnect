'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';
import { Image } from 'react-bootstrap';
import Link from 'next/link';

const MakePostButton = () => (
  <div className="make-post-container">
    <Link className="make-post-button" href="/post">
      <Image src="../PostButton.png" alt="New Post" className="make-post-button" />
    </Link>
  </div>
);

export default MakePostButton;
