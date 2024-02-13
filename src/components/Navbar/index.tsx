"use client";

import React, { useEffect, useState } from "react";
import { FaCode, FaEnvelope, FaHome } from "react-icons/fa";
import "./styles.scss";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  const [pwaMode, setPwaMode] = useState(false);
  useEffect(() => {
    // Check for PWA installation
    const isPWA =
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true;

    if (isPWA) {
      setPwaMode(true)
    } else {
      setPwaMode(false)
    }
  }, []);
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <FaHome className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/projects">
            <FaCode className="icon" />
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <FaEnvelope className="icon" />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
