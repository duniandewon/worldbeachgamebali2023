import Link from "next/link";
import Image from "next/image";

import { Instagram, Twitter, Youtube } from "@/assets/icons";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/" className="logo">
        <Image src="/logo.svg" alt="logo" width={20} height={20} />
        <p>
          2<sup>nd</sup> AWBG BALI 2023
        </p>
      </Link>
      <div className="socials">
        <Link href="https://www.twitter.com" target="_blank" className="social">
          <Twitter />
        </Link>
        <Link href="https://www.instagram.com" target="_blank" className="social">
          <Instagram />
        </Link>
        <Link href="https://www.yputube.com" target="_blank" className="social">
          <Youtube />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
