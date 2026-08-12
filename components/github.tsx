"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, GitBranch } from "lucide-react";
import { profile } from "@/lib/data";
import { motion } from "motion/react";

type Repository = {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
};

export default function GitHub() {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (
      !profile.github ||
      profile.github.includes("YOUR_")
    ) {
      setLoading(false);
      return;
    }

    const username = profile.github
      .replace("https://github.com/", "")
      .replace("/", "");

    fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("GitHub request failed");
        }

        return response.json();
      })
      .then((data) => {
        setRepos(data);
      })
      .catch(() => {
        setRepos([]);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section className="border-t border-white/10 px-6 py-32">
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          06 / GitHub
        </p>

        <div className="flex flex-col justify-between gap-8 md:flex-row">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Open source,
            <br />
            <span className="text-white/30">mostly.</span>
          </h2>

          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-fit items-center gap-2 text-sm text-white/40 transition hover:text-white"
          >
            View GitHub
            <ArrowUpRight size={15} />
          </a>
        </div>

        {loading ? (
          <div className="mt-16 text-sm text-white/30">
            Loading repositories...
          </div>
        ) : repos.length === 0 ? (
          <div className="mt-16 rounded-2xl border border-white/10 p-8 text-sm text-white/30">
            Add your GitHub profile URL in{" "}
            <code>lib/data.ts</code> to display repositories.
          </div>
        ) : (
          <div className="mt-16 grid gap-3 md:grid-cols-2">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="flex items-start justify-between gap-4">
                  <GitBranch
                    size={17}
                    className="text-white/30"
                  />

                  <ArrowUpRight
                    size={17}
                    className="text-white/20 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-8 font-medium text-white">
                  {repo.name}
                </h3>

                <p className="mt-3 line-clamp-2 text-sm leading-6 text-white/35">
                  {repo.description || "No repository description."}
                </p>

                <div className="mt-6 flex items-center gap-4 text-xs text-white/25">
                  {repo.language && (
                    <span>{repo.language}</span>
                  )}

                  <span>★ {repo.stargazers_count}</span>

                  <span>⑂ {repo.forks_count}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}