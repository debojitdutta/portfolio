import { technologies } from "@/lib/data";

export default function TechStack() {
  return (
    <section
      id="stack"
      className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          02 / Stack
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Tools I
            <br />
            <span className="text-white/30">work with.</span>
          </h2>

          <p className="max-w-md text-white/40 md:pt-2">
            A growing collection of languages, frameworks, libraries, and
            tools I use while building software and ML projects.
          </p>
        </div>

        <div className="mt-16 flex flex-wrap gap-3">
          {technologies.map((technology) => (
            <div
              key={technology}
              className="rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-sm text-white/60 transition hover:border-white/25 hover:bg-white/[0.05] hover:text-white"
            >
              {technology}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}