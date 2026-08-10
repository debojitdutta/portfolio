import { Code2, Cpu, Lightbulb, Terminal } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Software Development",
    description:
      "Building desktop applications, web applications, and developer-focused tools.",
  },
  {
    icon: Cpu,
    title: "Machine Learning",
    description:
      "Experimenting with machine learning, deep learning, anomaly detection, and computer vision.",
  },
  {
    icon: Terminal,
    title: "Problem Solving",
    description:
      "Breaking complex problems into smaller systems that can actually be built and tested.",
  },
  {
    icon: Lightbulb,
    title: "Experimentation",
    description:
      "I enjoy turning unusual ideas into small, practical projects.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-16 md:grid-cols-[1fr_1.5fr]">
          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
              01 / About
            </p>

            <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
              Building things
              <br />
              <span className="text-white/30">to understand them.</span>
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/50">
              Im Debojit, a computer applications student and aspiring
              software developer interested in building practical software
              and intelligent systems.
            </p>

            <p className="mt-6 text-lg leading-8 text-white/50">
              My interests sit at the intersection of software development,
              machine learning, computer vision, and experimentation. I prefer
              learning by building rather than simply following tutorials.
            </p>

            <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {highlights.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="bg-[#080808] p-6 transition hover:bg-[#0d0d0d]"
                  >
                    <Icon size={20} className="mb-6 text-white/60" />

                    <h3 className="mb-2 font-medium text-white">
                      {item.title}
                    </h3>

                    <p className="text-sm leading-6 text-white/40">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}