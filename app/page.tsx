import Reveal from "./components/Reveal";
import Terminal from "./components/Terminal";
import EasterEggs from "./components/EasterEggs";

// Same base path Next uses for assets, so static links resolve under /my-portfolio on Pages.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const commit = "078bc31"; // current build

const skills = [
  { name: "c++", version: "^17.0", icon: "⚙️" },
  { name: "python", version: "^3.12", icon: "🐍" },
  { name: "javascript", version: "^ES2024", icon: "🟨" },
  { name: "react", version: "^19.2", icon: "⚛️" },
  { name: "django", version: "^5.0", icon: "🎸" },
  { name: "docker", version: "^27.0", icon: "🐳" },
  { name: "postman", version: "^11.0", icon: "📮" },
];

const projects = [
  {
    title: "ai-ats-analyzer",
    description:
      "An AI-powered resume analyzer that scores resumes against job descriptions, the way an ATS (Applicant Tracking System) would.",
    tags: ["javascript", "ai"],
    link: "https://github.com/rendercold007/ai-ats",
    stars: "★",
  },
  {
    title: "quiz-app",
    description:
      "An interactive quiz application built with JavaScript that lets users answer questions and track their scores.",
    tags: ["javascript"],
    link: "https://github.com/rendercold007/QuizApp",
    stars: "★",
  },
];

const navLinks = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#contact", label: "contact" },
];

function SectionHeading({ index, title }: { index: string; title: string }) {
  return (
    <div className="flex items-center justify-center gap-3 mb-12">
      <span className="text-sm text-[var(--ctp-overlay0)]">{index}</span>
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
        <span className="text-[var(--ctp-mauve)]">//</span> {title}
      </h2>
      <span className="hidden sm:block h-px w-16 bg-gradient-to-r from-[var(--ctp-surface1)] to-transparent" />
    </div>
  );
}

export default function Home() {
  return (
    <main className="scanlines relative min-h-screen bg-[var(--ctp-base)] text-[var(--ctp-text)] font-mono overflow-x-clip">
      <EasterEggs />

      {/* Global aurora backdrop */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="aurora aurora-1 top-[-6rem] left-[8%]" />
        <div className="aurora aurora-2 top-[30%] right-[5%]" />
        <div className="aurora aurora-3 bottom-[5%] left-[20%]" />
        {/* faint grid */}
        <div
          className="absolute inset-0 opacity-[0.14]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(205,214,244,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(205,214,244,0.05) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
            maskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent 75%)",
          }}
        />
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-[var(--ctp-crust)]/60 backdrop-blur-xl border-b border-[var(--ctp-surface0)]/60">
        <div className="max-w-5xl mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#home" className="text-sm tracking-tight">
            <span className="text-[var(--ctp-green)]">~/</span>
            <span className="text-[var(--ctp-text)]">aniket</span>
            <span className="cursor-blink align-baseline" />
          </a>
          <div className="flex items-center gap-6 text-sm text-[var(--ctp-subtext0)]">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="hidden sm:block hover:text-[var(--ctp-mauve)] transition-colors"
              >
                <span className="text-[var(--ctp-overlay0)]">$</span> {l.label}
              </a>
            ))}
            <a
              href={`${basePath}/resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded border border-[var(--ctp-surface1)] bg-[var(--ctp-surface0)]/40 px-3 py-1.5 text-[var(--ctp-text)] hover:border-[var(--ctp-mauve)]/60 hover:text-[var(--ctp-mauve)] transition"
            >
              ./resume.pdf
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section
        id="home"
        className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-24 pb-16"
      >
        <div className="mb-8 text-center max-w-xl">
          <div className="inline-flex items-center gap-2 border border-[var(--ctp-surface0)] bg-[var(--ctp-surface0)]/30 rounded-full px-4 py-1.5 mb-6 text-xs text-[var(--ctp-subtext0)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[var(--ctp-green)] opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--ctp-green)]" />
            </span>
            status: available for opportunities
          </div>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight tracking-tight">
            <span className="text-gradient">Aniket Singh</span>
          </h1>
          <p className="mt-3 text-sm md:text-base text-[var(--ctp-subtext0)]">
            <span className="text-[var(--ctp-peach)]">const</span> role ={" "}
            <span className="text-[var(--ctp-green)]">
              &quot;ECE Student &amp; Full Stack Developer&quot;
            </span>
          </p>
        </div>

        <Terminal />

        <p className="mt-6 text-xs text-[var(--ctp-overlay0)]">
          tip: press <span className="text-[var(--ctp-green)]">/</span> to focus ·
          type <span className="text-[var(--ctp-green)]">help</span> · there&apos;s a
          Konami code somewhere
        </p>
      </section>

      {/* About */}
      <section id="about" className="py-28 px-6 scroll-mt-20">
        <div className="max-w-3xl mx-auto">
          <Reveal>
            <SectionHeading index="01" title="about" />
          </Reveal>
          <Reveal delay={100}>
            <div className="card rounded-xl overflow-hidden text-sm">
              <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[var(--ctp-surface0)] text-xs text-[var(--ctp-subtext0)]">
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--ctp-red)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--ctp-yellow)]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[var(--ctp-green)]" />
                <span className="ml-2">aniket.ts</span>
              </div>
              <pre className="p-5 md:p-7 overflow-x-auto leading-relaxed">
                <code>
                  <span className="text-[var(--ctp-mauve)]">const</span>{" "}
                  <span className="text-[var(--ctp-blue)]">aniket</span>{" "}
                  <span className="text-[var(--ctp-text)]">=</span>{" "}
                  <span className="text-[var(--ctp-text)]">{"{"}</span>
                  {"\n  "}
                  <span className="text-[var(--ctp-teal)]">name</span>
                  <span className="text-[var(--ctp-text)]">:</span>{" "}
                  <span className="text-[var(--ctp-green)]">
                    &quot;Aniket Singh&quot;
                  </span>
                  <span className="text-[var(--ctp-text)]">,</span>
                  {"\n  "}
                  <span className="text-[var(--ctp-teal)]">education</span>
                  <span className="text-[var(--ctp-text)]">:</span>{" "}
                  <span className="text-[var(--ctp-green)]">
                    &quot;B.Tech ECE @ NIT Jalandhar&quot;
                  </span>
                  <span className="text-[var(--ctp-text)]">,</span>
                  {"\n  "}
                  <span className="text-[var(--ctp-teal)]">year</span>
                  <span className="text-[var(--ctp-text)]">:</span>{" "}
                  <span className="text-[var(--ctp-peach)]">3</span>
                  <span className="text-[var(--ctp-text)]">,</span>
                  {"\n  "}
                  <span className="text-[var(--ctp-teal)]">focus</span>
                  <span className="text-[var(--ctp-text)]">:</span>{" "}
                  <span className="text-[var(--ctp-text)]">[</span>
                  <span className="text-[var(--ctp-green)]">&quot;frontend&quot;</span>
                  <span className="text-[var(--ctp-text)]">, </span>
                  <span className="text-[var(--ctp-green)]">&quot;backend&quot;</span>
                  <span className="text-[var(--ctp-text)]">],</span>
                  {"\n  "}
                  <span className="text-[var(--ctp-teal)]">loves</span>
                  <span className="text-[var(--ctp-text)]">:</span>{" "}
                  <span className="text-[var(--ctp-green)]">
                    &quot;building things that solve real problems&quot;
                  </span>
                  <span className="text-[var(--ctp-text)]">,</span>
                  {"\n  "}
                  <span className="text-[var(--ctp-teal)]">currently</span>
                  <span className="text-[var(--ctp-text)]">:</span>{" "}
                  <span className="text-[var(--ctp-green)]">
                    &quot;always exploring new tech&quot;
                  </span>
                  <span className="text-[var(--ctp-text)]">,</span>
                  {"\n"}
                  <span className="text-[var(--ctp-text)]">{"};"}</span>
                </code>
              </pre>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Skills — marquee */}
      <section id="skills" className="py-28 scroll-mt-20">
        <div className="max-w-4xl mx-auto px-6">
          <Reveal>
            <SectionHeading index="02" title="skills" />
          </Reveal>
          <Reveal delay={80}>
            <p className="text-center text-xs text-[var(--ctp-subtext0)] mb-10">
              <span className="text-[var(--ctp-overlay0)]">$</span> cat
              package.json | jq{" "}
              <span className="text-[var(--ctp-green)]">.dependencies</span>
            </p>
          </Reveal>
        </div>
        <Reveal className="marquee-mask overflow-hidden">
          <div className="marquee-track gap-3 py-2">
            {[...skills, ...skills].map((skill, i) => (
              <div
                key={`${skill.name}-${i}`}
                className="card flex items-center gap-3 rounded-lg px-5 py-3 shrink-0 text-sm"
              >
                <span className="text-lg">{skill.icon}</span>
                <span className="text-[var(--ctp-blue)] whitespace-nowrap">
                  &quot;{skill.name}&quot;
                </span>
                <span className="text-[var(--ctp-overlay0)]">:</span>
                <span className="text-[var(--ctp-green)] whitespace-nowrap">
                  &quot;{skill.version}&quot;
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
            <SectionHeading index="03" title="projects" />
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-6">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 120}>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="card group block rounded-xl p-6 h-full hover:-translate-y-2"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-base font-semibold text-[var(--ctp-blue)] group-hover:text-[var(--ctp-mauve)] transition-colors">
                      <span className="text-[var(--ctp-overlay0)]">~/</span>
                      {project.title}
                    </h3>
                    <span className="text-[var(--ctp-overlay0)] group-hover:text-[var(--ctp-mauve)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↗
                    </span>
                  </div>
                  <p className="text-[var(--ctp-subtext0)] text-sm leading-relaxed mb-5">
                    <span className="text-[var(--ctp-overlay0)]"># </span>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-[var(--ctp-surface0)]/50 text-[var(--ctp-peach)] border border-[var(--ctp-surface1)] px-2.5 py-1 rounded"
                      >
                        #{tag}
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
            <SectionHeading index="04" title="contact" />
            <p className="text-[var(--ctp-subtext0)] text-sm mb-10 -mt-6">
              <span className="text-[var(--ctp-overlay0)]">$</span> echo
              &quot;open to projects, collaboration, or just to say hi&quot;
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="grid sm:grid-cols-2 gap-4">
              <a
                href="mailto:aniketsingh8072@gmail.com"
                className="card group rounded-lg p-6 hover:-translate-y-1 text-sm"
              >
                <div className="text-[var(--ctp-overlay0)] text-xs mb-2">
                  ~/mail
                </div>
                <div className="text-[var(--ctp-green)] group-hover:text-[var(--ctp-mauve)] transition-colors break-all">
                  aniketsingh8072@gmail.com
                </div>
              </a>
              <a
                href="https://github.com/rendercold007"
                target="_blank"
                rel="noopener noreferrer"
                className="card group rounded-lg p-6 hover:-translate-y-1 text-sm"
              >
                <div className="text-[var(--ctp-overlay0)] text-xs mb-2">
                  ~/github
                </div>
                <div className="text-[var(--ctp-green)] group-hover:text-[var(--ctp-mauve)] transition-colors">
                  github.com/rendercold007
                </div>
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--ctp-surface0)]/60 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--ctp-overlay0)]">
          <span>
            <span className="text-[var(--ctp-green)]">$</span> git log -1 →{" "}
            <span className="text-[var(--ctp-peach)]">{commit}</span> · ©{" "}
            {new Date().getFullYear()} Aniket Singh
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[var(--ctp-green)]" />
            built with next.js + tailwind, deployed on gh-pages
          </span>
        </div>
      </footer>
    </main>
  );
}
