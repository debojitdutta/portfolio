import { education } from "@/lib/data";

export default function Experience() {
  return (
    <section
      id="experience"
      className="border-t border-white/10 px-6 py-32"
    >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          04 / Journey
        </p>

        <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
          Education &
          <br />
          <span className="text-white/30">experience.</span>
        </h2>

        <div className="mt-16">
          {education.map((item) => (
            <div
              key={item.period}
              className="grid gap-5 border-t border-white/10 py-10 md:grid-cols-[180px_1fr]"
            >
              <span className="font-mono text-xs text-white/30">
                {item.period}
              </span>

              <div>
                <h3 className="text-xl font-medium text-white">
                  {item.title}
                </h3>

                <p className="mt-1 text-sm text-white/30">
                  {item.institution}
                </p>

                <p className="mt-5 max-w-2xl leading-7 text-white/40">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}