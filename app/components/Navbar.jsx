import Link from "next/link";
import React from "react";
import logo from "../../public/dojo-logo.png";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav>
      <Image
        src={logo}
        alt="Dojo Helpdesk Logo"
        width={70}
        quality={100}
        placeholder="blur"
      />
      <h1>Dojo Helpdesk</h1>
      <Link href="/">Dashboard</Link>
      <Link href="/tickets">Tickets</Link>
    </nav>
  );
}
