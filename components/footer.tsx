import { FaGithub, FaLinkedin } from "react-icons/fa";import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-5 text-sm text-white/30 md:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            aria-label="GitHub"
          >
            <FaGithub size={17} />
          </a>

          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-white"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={17} />
          </a>

          <a href="#" className="transition hover:text-white">
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}