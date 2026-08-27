"use client";

import { useState } from "react";
import {
  Mail,
  Menu,
  X,
  ExternalLink,
} from "lucide-react";
import { FaGithub, FaInstagram, FaLinkedin, FaFacebook } from "react-icons/fa";
import ThemeToggle from "./theme-toggle";
import { profile } from "@/lib/data";

const links = [
  { name: "About", href: "#about" },
  { name: "Stack", href: "#stack" },
  { name: "Projects", href: "#projects" },
  { name: "Journey", href: "#experience" },
  { name: "Certificates", href: "#certificates" },
  { name: "Blogs", href: "Blogs" },
];

const socials = [
  {
    name: "GitHub",
    description: "My projects & code",
    href: profile.github,
    icon: FaGithub,
  },
  {
    name: "LinkedIn",
    description: "Professional profile",
    href: profile.linkedin,
    icon: FaLinkedin,
  },
  {
    name: "Instagram",
    description: "A little more personal",
    href: profile.instagram,
    icon: FaInstagram,
  },
  {
    name: "Facebook",
    description: "Connect with me",
    href: profile.facebook,
    icon: FaFacebook,
  },
  {
    name: "Email",
    description: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [socialOpen, setSocialOpen] = useState(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50">
      <nav className="mx-auto mt-4 flex max-w-5xl items-center justify-between rounded-full border border-white/10 bg-black/70 px-5 py-3 backdrop-blur-xl">

        {/* Logo */}
        <a
          href="#"
          className="text-sm font-semibold tracking-wider text-white"
        >
          DD<span className="text-white/30">.</span>
        </a>

        {/* Desktop navigation */}
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

          {/* Socials */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setSocialOpen((value) => !value)}
              className="text-sm text-white/40 transition hover:text-white"
            >
              Socials
            </button>

            {socialOpen && (
              <div className="absolute right-0 top-10 w-72 overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] p-2 shadow-2xl">
                <div className="px-3 pb-2 pt-2">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/25">
                    Find me online
                  </p>
                </div>

                <div className="space-y-1">
                  {socials.map((social) => {
                    const Icon = social.icon;

                    if (!social.href || social.href.includes("YOUR_")) {
                      return null;
                    }

                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target={
                          social.name === "Email"
                            ? undefined
                            : "_blank"
                        }
                        rel={
                          social.name === "Email"
                            ? undefined
                            : "noopener noreferrer"
                        }
                        onClick={() => setSocialOpen(false)}
                        className="group flex items-center gap-3 rounded-xl p-3 transition hover:bg-white/5"
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/50 transition group-hover:border-white/20 group-hover:text-white">
                          <Icon size={16} />
                        </div>

                        <div className="flex-1">
                          <p className="text-sm text-white/70">
                            {social.name}
                          </p>

                          <p className="text-[11px] text-white/25">
                            {social.description}
                          </p>
                        </div>

                        <ExternalLink
                          size={13}
                          className="text-white/20"
                        />
                      </a>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <ThemeToggle />

          <a
            href="#contact"
            className="hidden rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition hover:bg-white/90 md:block"
          >
            Let&apos;s Connect
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((value) => !value)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-white md:hidden"
            aria-label="Toggle navigation"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mx-auto mt-2 max-w-5xl rounded-2xl border border-white/10 bg-black/95 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-white/50 transition hover:text-white"
              >
                {link.name}
              </a>
            ))}

            <div className="border-t border-white/10 pt-4">
              <p className="mb-3 text-xs uppercase tracking-[0.2em] text-white/25">
                Socials
              </p>

              <div className="grid grid-cols-2 gap-2">
                {socials.map((social) => {
                  const Icon = social.icon;

                  if (!social.href || social.href.includes("YOUR_")) {
                    return null;
                  }

                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      target={
                        social.name === "Email"
                          ? undefined
                          : "_blank"
                      }
                      rel={
                        social.name === "Email"
                          ? undefined
                          : "noopener noreferrer"
                      }
                      className="flex items-center gap-2 rounded-xl border border-white/10 p-3 text-xs text-white/50 transition hover:border-white/20 hover:text-white"
                    >
                      <Icon size={15} />
                      {social.name}
                    </a>
                  );
                })}
              </div>
            </div>

            <a
              href="#contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 rounded-full bg-white px-4 py-3 text-center text-sm font-medium text-black"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
