'use client';

import React from 'react';
import Image from 'next/image';
import { HouseFill, FilePersonFill, Search } from 'react-bootstrap-icons';

const Sidebar = () => (
  <aside className="sidebar">
    <div className="sidebar-header">
      <Image
        src="/ManoaConnectLogo.png"
        alt="Logo"
        className="sidebar-logo"
        width={40}
        height={40}
        style={{ borderRadius: '50%' }}
      />
      <h2>Manoa Connect</h2>
    </div>
    <ul className="sidebar-links">
      <li>
        <a href="/">
          <span><HouseFill /></span>
          Home
        </a>
      </li>
      <li>
        <a href="/">
          <span><FilePersonFill /></span>
          Following
        </a>
      </li>
      <li>
        <a href="/">
          <span><Search /></span>
          Explore
        </a>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
