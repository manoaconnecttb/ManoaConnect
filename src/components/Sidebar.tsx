'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
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
      <h2>Main Menu</h2>
    </div>
    <ul className="sidebar-links">
      <li>
        <Link href="/home">
          <span><HouseFill /></span>
          Home
        </Link>
      </li>
      <li>
        <Link href="/following">
          <span><FilePersonFill /></span>
          Following
        </Link>
      </li>
      <li>
        <Link href="/explore">
          <span><Search /></span>
          Explore
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
