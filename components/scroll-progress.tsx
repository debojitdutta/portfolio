"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setProgress(height > 0 ? (scrollTop / height) * 100 : 0);
    };

    update();

    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <div
      className="fixed left-0 top-0 z-[100] h-px bg-white transition-[width]"
      style={{ width: `${progress}%` }}
    />
  );
}