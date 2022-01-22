import React from 'react';

import Link from 'next/link';
import { FaHome, FaCamera } from 'react-icons/fa';
import styles from '../styles/Tabs.module.css';
import './Tabs.css';

const TabsNavigation = () => {
  return (
    <nav className="bg-gray-two fixed-bottom px-96" role="navigation">
      {/* <Nav className="w-100"> */}
        <div className="flex flex-row justify-between w-100">
          {/* <NavItem key="Home-Tab"> */}
            <Link href="/home" className={[styles.navLink, styles.bottomNavLink, "transition duration-200 ease-in-out"]} activeClassName="active">
              <div className="flex justify-center items-center">
                <FaHome size={35} className="mt-8 mb-4" />
                {/* <div className="bottom-tab-label">Home</div> */}
              </div>
            </Link>
          {/* </NavItem> */}
          {/* <NavItem key="Camera-Tab"> */}
            <Link href="/camera" className={[styles.navLink, styles.bottomNavLink, "transition duration-200 ease-in-out"]} activeClassName="active">
              <div className="flex justify-center items-center">
                <FaCamera size={35} className="mt-8 mb-4" />
                {/* <div className="bottom-tab-label">Camera</div> */}
              </div>
            </Link>
          {/* </NavItem> */}
        </div>
      {/* </Nav> */}
    </nav>
  )
};

TabsNavigation.propTypes = {};

export default TabsNavigation;