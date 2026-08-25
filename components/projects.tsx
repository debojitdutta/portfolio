"use client";
import Image from "next/image";

import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "motion/react";

import { projects } from "@/lib/data";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-24">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          03 / Projects
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Things I've
            <br />
            <span className="text-white/30">built.</span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-white/40 md:pt-2">
            A selection of projects exploring software development,
            computer vision, machine learning, and experimentation.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {projects.slice(0, 3).map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="group flex min-h-[280px] flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Top row */}
              <div className="flex items-start justify-between">
                <span className="font-mono text-xs text-white/20">
                  0{index + 1}
                </span>

                <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/30 hover:text-white"
                  >
                    <FaGithub size={14} />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} demo`}
                      className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/40 transition hover:border-white/30 hover:text-white"
                    >
                      <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </div>

              {/* Category */}
              <div className="mt-6">
                <span className="text-[10px] uppercase tracking-[0.2em] text-white/30">
                  {project.category}
                </span>
              </div>

              {/* Project info */}
              <div className="mt-3">
                <h3 className="text-xl font-medium tracking-tight">
                  {project.title}
                </h3>

                <p className="mt-3 line-clamp-3 text-sm leading-6 text-white/40">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mt-auto flex flex-wrap gap-1.5 pt-6">
                {project.technologies.slice(0, 4).map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full bg-white/5 px-2.5 py-1 text-[10px] text-white/40 transition group-hover:text-white/60"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Arrow */}
              <div className="mt-5 flex justify-end">
                <ArrowUpRight
                  size={18}
                  className="text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/60"
                />
              </div>
            </motion.article>
          ))}
        </div>

        {/* Optional remaining projects */}
        {projects.length > 3 && (
          <div className="mt-6 text-center">
            <p className="text-xs text-white/30">
              More projects coming soon.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}