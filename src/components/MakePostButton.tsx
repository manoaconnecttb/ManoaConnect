'use client';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../app/globals.css';
import { Image } from 'react-bootstrap';

const MakePostButton = () => (
  // #TODO ADD FUNCTIONALITY TO THIS BUTTON
  <div className="make-post-container">
    <Image src="../PostButton.png" alt="New Post" className="make-post-button" />
  </div>
);

export default MakePostButton;
