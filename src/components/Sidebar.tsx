'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { HouseFill, FilePersonFill, Search, PeopleFill } from 'react-bootstrap-icons';

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
        <Link href="/home" className="d-flex align-items-center gap-2">
          <HouseFill />
          <span>Home</span>
        </Link>
      </li>
      <li>
        <Link href="/following" className="d-flex align-items-center gap-2">
          <FilePersonFill />
          <span>Following</span>
        </Link>
      </li>
      <li>
        <Link href="/explore" className="d-flex align-items-center gap-2">
          <Search />
          <span>Explore</span>
        </Link>
      </li>
      <li>
        <Link href="/clubs" className="d-flex align-items-center gap-2">
          <PeopleFill />
          <span>My Clubs</span>
        </Link>
      </li>
    </ul>
  </aside>
);

export default Sidebar;
