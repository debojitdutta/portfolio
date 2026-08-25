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
    date: "AUG 2026",
    title: "Building a Computer Vision Virtual Whiteboard",
    description:
      "How I built AirPaint using Python, OpenCV and MediaPipe to create a virtual drawing system controlled with hand gestures.",
    tags: ["Python", "OpenCV", "MediaPipe"],
    link: "#",
  },
  {
    id: "2",
    date: "JUL 2026",
    title: "What I Learned Building My First AI Project",
    description:
      "Lessons from building an AI project from scratch, dealing with libraries, debugging and understanding how the different components actually work.",
    tags: ["AI", "Machine Learning"],
    link: "#",
  },
  {
    id: "3",
    date: "JUN 2026",
    title: "Understanding Web Scraping",
    description:
      "A beginner-friendly introduction to web scraping, how websites expose data and where the legal and technical boundaries are.",
    tags: ["Web Scraping", "JavaScript"],
    link: "#",
  },
  {
    id: "4",
    date: "MAY 2026",
    title: "My Journey From BCA to MCA",
    description:
      "My experience transitioning from BCA to MCA, learning new technologies and figuring out what direction I want to take in software development.",
    tags: ["Career", "MCA"],
    link: "#",
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
          <Link href="/blogs" className="hover:text-white transition-colors">
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
            Thoughts, experiments, tutorials and things I've learned while
            building projects and exploring technology.
          </p>
        </section>

        {/* Blog List */}
        <section className="flex min-h-[450px] flex-col items-center justify-center border-t border-[#1a1a1a] text-center">
  <p className="mb-5 font-mono text-xs uppercase tracking-[0.3em] text-white/20">
    Writing / 01
  </p>

  <h2 className="text-5xl font-semibold uppercase tracking-tight text-white/20 md:text-7xl lg:text-8xl">
    Coming Soon...
  </h2>

  <p className="mt-6 max-w-md text-sm leading-6 text-white/30">
    I'm currently working on some things worth writing about.
    Check back soon.
  </p>
</section>
      </main>

      {/* Footer */}
      <footer className="max-w-[1000px] mx-auto p-[40px_20px] border-t border-[#1a1a1a] text-[#555] text-xs">
        © 2026 Debojit Dutta. Built with Next.js & Tailwind CSS.
      </footer>
      
    </div>
  );
}