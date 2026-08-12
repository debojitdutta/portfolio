"use client";

import { useEffect } from "react";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Portfolio error");
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505] px-6 text-white">
      <div className="text-center">
        <p className="text-sm text-white/30">
          Something went wrong.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-full bg-white px-5 py-3 text-sm font-medium text-black"
        >
          Try again
        </button>
      </div>
    </main>
  );
}