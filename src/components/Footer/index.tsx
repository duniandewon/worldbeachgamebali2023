import Link from "next/link";
import Image from "next/image";

import { Instagram, Twitter, Youtube } from "@/assets/icons";

const Footer = () => {
  return (
    <footer className="footer">
      <Link href="/" className="logo">
        <Image src="/logo.svg" alt="logo" width={20} height={20} />
        <p>
          2<sup>nd</sup> ANOC WORLD BEACH GAMES BALI 2023
        </p>
      </Link>
      <div className="socials">
        <a
          href="https://www.youtube.com/"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <Youtube fill="#fff" />
        </a>
        <a
          href="https://www.instagram.com/"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <Instagram fill="#fff" />
        </a>
        <a
          href="https://www.twitter.com/"
          target="_blank"
          rel="noreferrer"
          className="social"
        >
          <Twitter fill="#fff" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
