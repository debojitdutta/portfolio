"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">
        <a
          href="#"
          className="text-sm font-semibold tracking-wider text-white"
        >
          DD<span className="text-white/30">.</span>
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full border border-white/15 bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:block"
        >
          Let's talk
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="text-white md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm text-white/60 hover:text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
