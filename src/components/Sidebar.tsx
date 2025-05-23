'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  HouseFill, PencilSquare, PersonFillGear, PersonBoundingBox, People,
} from 'react-bootstrap-icons';

const Sidebar = () => {
  const { data: session } = useSession();
  const currentUser = session?.user?.email;
  const userWithRole = session?.user as { email: string; randomKey: string };
  const role = userWithRole?.randomKey;
  const pathName = usePathname();
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <Image
          src="/ManoaConnectCenterLogo3.png"
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
        {currentUser && (
          <>
            <li>
              <Link href="/Explore">
                <span><PersonBoundingBox /></span>
                Explore Posts
              </Link>
            </li>
            <li>
              <Link href="/test">
                <span><People /></span>
                Explore Clubs
              </Link>
            </li>
            <li>
              <Link href="/feedback" className={pathName === '/feedback' ? 'active' : ''}>
                <span><PencilSquare /></span>
                Feedback
              </Link>
            </li>
          </>
        )}
        {/* Admin Only Link */}
        {currentUser && role === 'ADMIN' && (
          <li>
            <Link href="/admin" className={pathName === '/admin' ? 'active' : ''}>
              <span><PersonFillGear /></span>
              Admin
            </Link>
          </li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
