import Reveal from "./components/Reveal";
import Spotlight from "./components/Spotlight";

// Same base path Next uses for assets, so static links resolve under /my-portfolio on Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const skills = [
  { name: "C++", icon: "⚙️" },
  { name: "Python", icon: "🐍" },
  { name: "JavaScript", icon: "🟨" },
  { name: "React", icon: "⚛️" },
  { name: "Django", icon: "🎸" },
  { name: "Docker", icon: "🐳" },
  { name: "Postman", icon: "📮" },
];

const projects = [
  {
    title: "AI ATS Analyzer",
    description:
      "An AI-powered resume analyzer that scores resumes against job descriptions, the way an ATS (Applicant Tracking System) would.",
    tags: ["JavaScript", "AI"],
    link: "https://github.com/rendercold007/ai-ats",
  },
  {
    title: "Quiz App",
    description:
      "An interactive quiz application built with JavaScript that lets users answer questions and track their scores.",
    tags: ["JavaScript"],
    link: "https://github.com/rendercold007/QuizApp",
  },
];

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      <span className="font-mono text-sm text-[var(--color-accent)]">{index}</span>
      <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{title}</h2>
      <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-white/20 to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#050507] text-white font-sans overflow-x-clip">
      {/* Global aurora backdrop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora aurora-1 top-[-6rem] left-[8%]" />
        <div className="aurora aurora-2 top-[30%] right-[5%]" />
        <div className="aurora aurora-3 bottom-[5%] left-[20%]" />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.12]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[#050507]/60 backdrop-blur-xl border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="font-semibold text-lg tracking-tight">
            Aniket<span className="text-[var(--color-accent)]">.</span>
          </a>
          <div className="flex items-center gap-7 text-sm text-gray-400">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hidden sm:block hover:text-white transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`${basePath}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/[0.12] bg-white/[0.03] px-4 py-1.5 text-white hover:border-[var(--color-accent)]/50 hover:bg-white/[0.06] transition"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
        <Spotlight />
        <div className="relative text-center max-w-2xl">
          <div className="inline-flex items-center gap-2 border border-white/[0.08] bg-white/[0.03] rounded-full px-4 py-1.5 mb-7 text-xs text-gray-300 backdrop-blur-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-green-400" />
            </span>
            Available for opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-5 leading-[1.05] tracking-tight">
            Hi, I&apos;m <span className="text-gradient">Aniket Singh</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 mb-9 max-w-md mx-auto">
            ECE Student &amp; Full Stack Developer at NIT Jalandhar
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#contact"
              className="group relative bg-white text-black px-6 py-3 rounded-full font-medium transition hover:scale-105 hover:shadow-[0_0_30px_-5px_rgba(124,92,255,0.6)]"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/rendercold007"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.07] text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition hover:scale-105"
            >
              View GitHub
            </a>
            <a
              href={`${basePath}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/[0.12] bg-white/[0.03] hover:bg-white/[0.07] text-gray-300 hover:text-white px-6 py-3 rounded-full font-medium transition hover:scale-105"
            >
              <span aria-hidden>↓</span> Resume
            </a>
          </div>
        </div>

        {/* scroll cue */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-600">
          <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
          <span className="h-8 w-px bg-gradient-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionHeading index="01" title="About Me" />
          </Reveal>
          <Reveal delay={100}>
            <div className="card rounded-2xl p-8 md:p-10">
              <p className="text-gray-300 text-lg leading-relaxed text-center">
                Hey, I&apos;m Aniket — a 3rd year B.Tech undergraduate in Electronics &amp;
                Communication Engineering at{" "}
                <span className="text-white font-medium">NIT Jalandhar</span>. I love
                building full stack applications and enjoy working across both frontend and
                backend. I&apos;m always exploring new technologies and working on projects
                that solve real problems.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills — marquee */}
      <section id="skills" className="py-28 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <SectionHeading index="02" title="Skills" />
          </Reveal>
        </div>
        <Reveal className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-4 py-2">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="card flex items-center gap-3 rounded-full px-6 py-3 shrink-0"
              >
                <span className="text-2xl">{skill.icon}</span>
                <span className="text-gray-200 font-medium whitespace-nowrap">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Projects */}
      <section id="projects" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-4xl mx-auto">
          <Reveal>
            <SectionHeading index="03" title="Projects" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group block rounded-2xl p-7 h-full hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-semibold group-hover:text-white transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-gray-600 group-hover:text-[var(--color-accent)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↗
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-white/[0.04] text-gray-300 border border-white/[0.08] px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-2xl mx-auto text-center">
          <Reveal>
            <SectionHeading index="04" title="Get In Touch" />
            <p className="text-gray-400 mb-10 -mt-6">
              Feel free to reach out — whether it&apos;s for a project, collaboration, or just
              to say hi.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:flameboy568@gmail.com"
                className="card group rounded-xl p-6 hover:-translate-y-1"
              >
                <div className="text-2xl mb-2">✉️</div>
                <div className="text-gray-300 group-hover:text-white transition-colors text-sm break-all">
                  flameboy568@gmail.com
                </div>
              </a>
              <a
                href="https://github.com/rendercold007"
                target="_blank"
                rel="noopener noreferrer"
                className="card group rounded-xl p-6 hover:-translate-y-1"
              >
                <div className="text-2xl mb-2">🐙</div>
                <div className="text-gray-300 group-hover:text-white transition-colors text-sm">
                  github.com/rendercold007
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-10 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <span>© {new Date().getFullYear()} Aniket Singh</span>
          <div className="flex gap-6">
            <a
              href="https://github.com/rendercold007"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <a
              href="mailto:flameboy568@gmail.com"
              className="hover:text-white transition-colors"
            >
              Email
            </a>
            <a
              href={`${basePath}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Resume
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
