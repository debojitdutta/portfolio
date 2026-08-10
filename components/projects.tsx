"use client";

import Image from "next/image";
import { ArrowUpRight, ExternalLink, } from "lucide-react";
import { FaGithub} from "react-icons/fa";

import { projects } from "@/lib/data";
import { motion } from "motion/react";

export default function Projects() {
  return (
    <section id="projects" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          03 / Projects
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Things I've
            <br />
            <span className="text-white/30">built.</span>
          </h2>

          <p className="max-w-md text-white/40 md:pt-2">
            A selection of projects exploring software development,
            computer vision, machine learning, and experimentation.
          </p>
        </div>

        <div className="mt-16 space-y-12">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.02] transition hover:border-white/20"
            >
              {/* Project Preview */}
              <div className="relative aspect-[16/8] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  className="object-cover object-top opacity-70 transition duration-700 group-hover:scale-[1.02] group-hover:opacity-90"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent" />

                <div className="absolute left-6 top-6">
                  <span className="rounded-full border border-white/10 bg-black/60 px-3 py-1.5 text-[10px] uppercase tracking-wider text-white/50 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>

                <div className="absolute bottom-6 right-6 flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/60 backdrop-blur-md transition hover:border-white/30 hover:text-white"
                  >
                    <FaGithub size={16} />
                  </a>

                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Open ${project.title} demo`}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-black/60 text-white/60 backdrop-blur-md transition hover:border-white/30 hover:text-white"
                    >
                      <ExternalLink size={16} />
                    </a>
                  )}
                </div>
              </div>

              {/* Project Information */}
              <div className="p-7 md:p-9">
                <div className="flex flex-col justify-between gap-6 md:flex-row">
                  <div className="max-w-2xl">
                    <div className="mb-4 flex items-center gap-3">
                      <span className="font-mono text-xs text-white/20">
                        0{index + 1}
                      </span>

                      {project.featured && (
                        <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/30">
                          Featured
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl font-medium tracking-tight md:text-3xl">
                      {project.title}
                    </h3>

                    <p className="mt-4 leading-7 text-white/40">
                      {project.description}
                    </p>

                    <p className="mt-3 text-sm leading-6 text-white/25">
                      {project.longDescription}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="hidden shrink-0 text-white/20 transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-white/50 md:block"
                  />
                </div>

                <div className="mt-8 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/40 transition group-hover:text-white/60"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}