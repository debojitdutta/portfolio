import { ArrowUpRight} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/lib/data";

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
            computer vision, and machine learning.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-7 transition hover:border-white/20 hover:bg-white/[0.04] md:p-9"
            >
              <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
                <div className="max-w-2xl">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="font-mono text-xs text-white/20">
                      0{index + 1}
                    </span>

                    {project.featured && (
                      <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] uppercase tracking-wider text-white/40">
                        Featured
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-medium text-white md:text-3xl">
                    {project.title}
                  </h3>

                  <p className="mt-4 max-w-xl leading-7 text-white/40">
                    {project.description}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">
                    {project.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/5 px-3 py-1.5 text-xs text-white/40"
                      >
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/10 text-white/40 transition group-hover:border-white/25 group-hover:text-white"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FaGithub size={17} />
                </a>
              </div>

              <ArrowUpRight
                size={20}
                className="absolute bottom-8 right-8 hidden text-white/10 transition group-hover:text-white/30 md:block"
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}