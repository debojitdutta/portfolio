"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { profile } from "@/lib/data";

export default function GitHub() {
  const username = profile.github
    ?.replace("https://github.com/", "")
    .replace(/\/$/, "");

  if (!username || username.includes("YOUR_")) {
    return null;
  }

  return (
    <section className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          06 / GitHub Activity
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Code,
              <br />
              <span className="text-white/30">in motion.</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-6 text-white/40">
              A glimpse of my coding activity and contributions on GitHub.
            </p>
          </div>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            <FaGithub size={16} />
            View GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        {/* Contribution Graph */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-5 md:p-7">
          <div className="mb-5 flex items-center justify-between">
            <span className="text-xs text-white/30">
              Contributions
            </span>

            <span className="font-mono text-xs text-white/20">
              @{username}
            </span>
          </div>

          <div className="overflow-x-auto pb-2">
            <img
              src={`https://ghchart.rshah.org/${username}`}
              alt={`${username}'s GitHub contribution graph`}
              className="min-w-[700px] w-full opacity-80"
            />
          </div>

          <div className="mt-5 flex justify-end">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-white/30 transition hover:text-white"
            >
              See full activity →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}