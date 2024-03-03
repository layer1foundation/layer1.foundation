import React from "react";
import Link from "next/link";

export default function MobileNav() {
  return (
    <nav className="flex flex-col text-right pr-4">
      <Link href="/" className="font-mono text-xl">
        MISSION
      </Link>
      <Link href="/brc20" className="font-mono text-xl">
        METAPROTOCOLS
      </Link>
      <Link href="/tools" className="font-mono text-xl">
        TOOLS
      </Link>
      <Link href="/donate" className="font-mono text-xl">
        PARTNERS
      </Link>
      {/* <Link href="/blog" className="font-mono text-xl">
        BLOG
      </Link> */}
    </nav>
  );
}
