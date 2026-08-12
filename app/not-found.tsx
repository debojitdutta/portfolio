import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="text-center">
        <p className="font-mono text-sm text-white/30">
          ERROR 404
        </p>

        <h1 className="mt-5 text-7xl font-semibold tracking-tighter md:text-9xl">
          404
        </h1>

        <p className="mt-6 text-white/40">
          Looks like this page doesn't exist.
        </p>

        <Link
          href="/"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
        >
          <ArrowLeft size={15} />
          Back home
        </Link>
      </div>
    </main>
  );
}