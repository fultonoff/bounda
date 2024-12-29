import { navList } from "@/data/navigationLinks";
import Link from "next/link";
import React from "react";

const Navigation = () => {
  return (
    <nav className="w-full flex items-center pt-4">
      <ul className="mx-auto flex items-center gap-4 p-4 border rounded-full">
        {navList.map((link) => {
          return (
            <Link key={link.id} href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
