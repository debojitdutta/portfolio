"use client";

import { useEffect, useState } from "react";
import {
  Mail,
  Search,
  User,
  Code2,
  FileText,
} from "lucide-react";
import { FaGithub, FaLinkedin} from "react-icons/fa";

import { profile } from "@/lib/data";

const commands = [
  {
    name: "About",
    href: "#about",
    icon: User,
  },
  {
    name: "Tech Stack",
    href: "#stack",
    icon: Code2,
  },
  {
    name: "Projects",
    href: "#projects",
    icon: Code2,
  },
  {
    name: "Journey",
    href: "#experience",
    icon: User,
  },
  {
    name: "Contact",
    href: "#contact",
    icon: Mail,
  },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handler);

    return () => window.removeEventListener("keydown", handler);
  }, []);

  if (!open) {
    return (
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-40 hidden items-center gap-2 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs text-white/40 backdrop-blur-xl transition hover:border-white/25 hover:text-white md:flex"
      >
        <Search size={13} />
        <span>Search</span>
        <kbd className="rounded border border-white/10 px-1.5 py-0.5">
          Ctrl K
        </kbd>
      </button>
    );
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-start justify-center bg-black/70 px-4 pt-[15vh] backdrop-blur-md"
      onMouseDown={() => setOpen(false)}
    >
      <div
        className="w-full max-w-lg overflow-hidden rounded-2xl border border-white/10 bg-[#0b0b0b] shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-white/10 px-4">
          <Search size={17} className="text-white/30" />

          <input
            autoFocus
            placeholder="Search portfolio..."
            className="h-14 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/25"
          />
        </div>

        <div className="p-2">
          {commands.map((command) => {
            const Icon = command.icon;

            return (
              <a
                key={command.name}
                href={command.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
              >
                <Icon size={16} />
                {command.name}
              </a>
            );
          })}

          <a
            href={profile.resume}
            download
            onClick={() => setOpen(false)}
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            <FileText size={16} />
            Download Resume
          </a>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            <FaGithub size={16} />
            GitHub
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-white/50 transition hover:bg-white/5 hover:text-white"
          >
            <FaLinkedin size={16} />
            LinkedIn
          </a>
        </div>

        <div className="border-t border-white/10 px-4 py-3 text-xs text-white/20">
          Press ESC to close
        </div>
      </div>
    </div>
  );
}