import Link from "next/link";

interface BlogPost {
  id: string;
  date: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

// 2. Storing  blog data in an array for clean rendering
const blogsData: BlogPost[] = [
  {
    id: "1",
    date: "AUG 2024",
    title: "My Anime Watchlist",
    description:
      "A collection of anime I've watched, from classics like Cowboy Bebop and Berserk to modern series like Jujutsu Kaisen and Solo Leveling.",
    tags: ["Anime"],
    link: "/app",
  },
];

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#f5f5f5] font-sans selection:bg-white selection:text-black">

      {/* Navbar */}
      <nav className="sticky top-0 z-10 flex items-center justify-between max-w-[1000px] mx-auto p-5 bg-[#050505]/90 border-b border-[#1a1a1a] backdrop-blur-sm">
        <Link href="/" className="text-lg font-bold tracking-[3px]">
          DD.
        </Link>

        {/* Hidden on mobile, flex on md (768px) and up */}
        <div className="hidden md:flex gap-[25px] text-sm text-[#888]">
          <Link href="/#about" className="hover:text-white transition-colors">
            About
          </Link>
          <Link href="/#projects" className="hover:text-white transition-colors">
            Projects
          </Link>
          <Link href="/#experience" className="hover:text-white transition-colors">
            Journey
          </Link>
          <Link href="/Blogs" className="hover:text-white transition-colors">
            Blogs
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1000px] mx-auto pt-[60px] md:pt-[80px] px-5 pb-20">

        {/* Heading Section */}
        <section className="mb-[60px]">
          <span className="block mb-[10px] text-xs tracking-[3px] uppercase text-[#555]">
            05 / Writing
          </span>
          <h1 className="text-[clamp(40px,7vw,72px)] font-bold leading-none mb-5">
            Blogs.
          </h1>
          <p className="max-w-[550px] text-[#777]">
            Thoughts, experiments, tutorials and things I&apos;ve learned while
            building projects and exploring technology.
          </p>
        </section>

        {/* Blog List */}
        <section className="border-t border-[#1a1a1a]">
          {blogsData.map((blog) => (
            <article
              key={blog.id}
              className="group border-b border-[#1a1a1a] py-8"
            >
              <Link href={blog.link} className="block">

                <p className="mb-3 font-mono text-xs tracking-[0.2em] text-[#555]">
                  {blog.date}
                </p>.

                <h2 className="mb-3 text-2xl font-semibold text-white md:text-3xl">
                  {blog.title}
                </h2>

                <p className="mb-5 max-w-[650px] text-sm leading-6 text-[#777]">
                  {blog.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-[#252525] px-2 py-1 font-mono text-[12px] uppercase tracking-wider text-[#666]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="mt-5 font-mono text-xs uppercase tracking-[0.2em] text-[#555] group-hover:text-white">
                  Read →
                </p>

              </Link>
            </article>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-[1000px] mx-auto p-[40px_20px] border-t border-[#1a1a1a] text-[#555] text-xs">
        © 2026 Debojit Dutta. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}