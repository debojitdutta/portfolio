import { ArrowUpRight, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-8 md:p-16">
          <p className="mb-6 text-sm uppercase tracking-[0.25em] text-white/30">
            05 / Contact
          </p>

          <h2 className="max-w-3xl text-4xl font-semibold tracking-tight md:text-6xl">
            Have an idea?
            <br />
            <span className="text-white/30">Let's build it.</span>
          </h2>

          <p className="mt-8 max-w-xl leading-7 text-white/40">
            Whether it's a project, internship opportunity, collaboration, or
            just an interesting technical problem, feel free to reach out.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="group flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
            >
              <Mail size={16} />
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/50 transition hover:border-white/25 hover:text-white"
            >
              GitHub
            </a>

            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/10 px-6 py-3 text-sm text-white/50 transition hover:border-white/25 hover:text-white"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}