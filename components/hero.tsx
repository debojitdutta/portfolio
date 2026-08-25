"use client";

import { ArrowDown, ArrowUpRight, FileText } from "lucide-react";
import { profile } from "@/lib/data";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.025] blur-3xl" />

      <div className="relative mx-auto w-full max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 flex items-center gap-3 text-sm text-white/40">
            <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Available for opportunities
          </div>

          <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.05em] text-white dark:text-white sm:text-7xl md:text-8xl">
            {profile.name.split(" ")[0]}
            <br />
            <span className="text-white/30">
              {profile.name.split(" ").slice(1).join(" ")}.
            </span>
          </h1>

          <div className="mt-8 max-w-2xl">
            <p className="text-lg leading-relaxed text-white/50 md:text-xl">
              {profile.description}
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Explore projects
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
            >
              <FaGithub size={16} />
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
            >
              <FaLinkedin size={16} />
              LinkedIn
            </a>
            <a
              href={profile.resume}
              download
              className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-3 text-sm text-white/60 transition hover:border-white/25 hover:text-white"
            >
              <FileText size={16} />
              Resume
            </a>
          </div>
        </motion.div>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="absolute bottom-[-110px] left-0 hidden items-center gap-2 text-xs text-white/30 md:flex"
        >
          <ArrowDown size={14} />
          Scroll to explore
        </motion.a>
      </div>
    </section>
  );
}