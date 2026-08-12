export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#050505]">
      <div className="flex items-center gap-3 text-sm text-white/40">
        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
        Loading portfolio...
      </div>
    </main>
  );
}