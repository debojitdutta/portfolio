"use client";
import { FormEvent, useState } from "react";
import { ArrowUpRight, Check, Loader2, Mail, } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { profile } from "@/lib/data";
export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setSent(false);
    setError("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }, body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(result.error || "Something went wrong.");
      }
      setSent(true);
      form.reset();
    }
    catch (err) {
      setError(err instanceof Error ? err.message : "Unable to send message.");

    }
    finally {
      setLoading(false);

    }
  }
  return (
    <section id="contact" className="border-t border-white/10 px-6 py-32" >
      <div className="mx-auto max-w-5xl">
        <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/30">
          07 / Contact
        </p>
        <div className="grid gap-16 md:grid-cols-2">
          {/* Left */}
          <div>
            <h2 className="text-4xl font-semibold tracking-tight md:text-6xl">
              Let's build
              <br />
              <span className="text-white/30">
                something.
              </span>
            </h2>
            <p className="mt-6 max-w-md leading-7 text-white/40">
              Have a project, opportunity, or just want to talk about technology? Send me a message.
            </p>
            <div className="mt-10 space-y-3">
              <a href={`mailto:${profile.email}`}
                className="group flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-white/20 hover:bg-white/[0.02]" >
                <div className="flex items-center gap-4">
                  <Mail size={18} className="text-white/40" />
                  <div>
                    <p className="text-xs text-white/25">
                      Email
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      {profile.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={17} className="text-white/20 transition group-hover:text-white" />
              </a>
              <a href={profile.github} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-white/20 hover:bg-white/[0.02]" >
                <div className="flex items-center gap-4">
                  <FaGithub size={18} className="text-white/40" />
                  <div>
                    <p className="text-xs text-white/25">
                      GitHub
                    </p>
                    <p className="mt-1 text-sm text-white/60">
                      View my work
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={17} className="text-white/20 transition group-hover:text-white" />
              </a>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-white/20 hover:bg-white/[0.02]" >
                <div className="flex items-center gap-4">
                  <FaLinkedin size={18} className="text-white/40" />
                  <div> <p className="text-xs text-white/25">
                    LinkedIn
                  </p>
                    <p className="mt-1 text-sm text-white/60">
                      Connect professionally
                    </p>
                  </div>
                </div>
                <ArrowUpRight size={17}
                  className="text-white/20 transition group-hover:text-white" />
              </a>
            </div>
          </div>
          {/* Form */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
            <div className="mb-8">
              <p className="text-sm font-medium text-white">
                Mail me
              </p>
              <p className="mt-2 text-sm leading-6 text-white/30">
                Fill out the form and I'll get your message directly in my inbox.
              </p>
            </div>
            <form onSubmit={handleSubmit}
              className="space-y-5">
              <div> <label htmlFor="name"
                className="mb-2 block text-xs text-white/35" >
                Name
              </label>
                <input id="name" name="name" type="text" required placeholder="Your name"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25" />
              </div>
              <div>
                <label htmlFor="email"
                  className="mb-2 block text-xs text-white/35" >
                  Email
                </label>
                <input id="email" name="email" type="email" required placeholder="you@example.com"
                  className="w-full rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25" />
              </div>
              <div>
                <label htmlFor="message"
                  className="mb-2 block text-xs text-white/35" >
                  Message
                </label>
                <textarea id="message" name="message"
                  required rows={6} placeholder="Tell me what's on your mind..."
                  className="w-full resize-none rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/20 focus:border-white/25" />
              </div>
              {error && (
                <p
                  className="rounded-xl border border-red-500/20 bg-red-500/5 px-4 py-3 text-xs text-red-400">
                  {error}
                </p>
              )}
              {sent && (
                <p
                  className="flex items-center gap-2 rounded-xl border border-green-500/20 bg-green-500/5 px-4 py-3 text-xs text-green-400">
                  <Check size={14} />
                  Message sent successfully. Thanks!
                </p>
              )}
              <button type="submit" disabled={loading}
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-50" >
                {
                  loading ?
                    (<>
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </>
                    ) : (
                      <>
                        Mail Me
                        <ArrowUpRight size={16} />
                      </>
                    )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>);
}