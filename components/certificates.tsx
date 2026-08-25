"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

import { certificates } from "@/lib/data";

export default function Certificates() {
  return (
    <section
      id="certificates"
      className="border-t border-white/10 px-6 py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          05 / Certificates
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row">
          <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">
            Things I've
            <br />
            <span className="text-white/30">earned.</span>
          </h2>

          <p className="max-w-md text-sm leading-6 text-white/40 md:pt-2">
            A selection of certifications and achievements from my
            learning and technical journey.
          </p>
        </div>

        {/* Certificate Grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {certificates.map((certificate, index) => (
            <motion.article
              key={certificate.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.45,
                delay: index * 0.06,
              }}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 hover:border-white/20 hover:bg-white/[0.04]"
            >
              {/* Certificate Image */}
              <div className="relative aspect-[16/9] overflow-hidden bg-[#0a0a0a]">
                <Image
                  src={certificate.image}
                  alt={`${certificate.title} certificate`}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                />

                {/* Image overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                {/* Number */}
                <span className="absolute left-3 top-3 rounded-full border border-white/10 bg-black/60 px-2.5 py-1 font-mono text-[10px] text-white/40 backdrop-blur-md">
                  0{index + 1}
                </span>
              </div>

              {/* Certificate Information */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-base font-medium leading-5 tracking-tight">
                    {certificate.title}
                  </h3>

                  {certificate.date && (
                    <span className="shrink-0 font-mono text-[10px] text-white/25">
                      {certificate.date}
                    </span>
                  )}
                </div>

                <p className="mt-2 text-xs text-white/30">
                  {certificate.issuer}
                </p>

                <p className="mt-3 line-clamp-2 text-xs leading-5 text-white/35">
                  {certificate.description}
                </p>

                {certificate.link && (
                  <a
                    href={certificate.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-xs text-white/30 transition hover:text-white"
                  >
                    View certificate
                    <ArrowUpRight size={13} />
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}