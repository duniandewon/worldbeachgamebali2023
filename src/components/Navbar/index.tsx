import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

import SearchBox from "../SearchBox";
import Language from "../SelectLanguange";

const Navbar = () => {
  const links = [
    {
      href: "/",
      label: "home",
    },
    {
      href: "/about",
      label: "about",
    },
    {
      href: "/calender",
      label: "calender",
    },
    {
      href: "/news",
      label: "news",
    },
  ];

  const router = useRouter();
  return (
    <header className="navbar">
      <Link href="/" className="logo">
        <Image src="/logo.svg" alt="logo" width={20} height={20} />
        <p>
          2<sup>nd</sup> AWBG BALI 2023
        </p>
      </Link>
      <nav className="navigation">
        {links.map((link) => (
          <Link
            href={link.href}
            className={`navigation__item ${
              router.pathname === link.href ? "active" : ""
            }`}
            key={link.href}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <SearchBox />
      <Language />
    </header>
  );
};

export default Navbar;
