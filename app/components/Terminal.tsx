"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type Line = { type: "in" | "out"; content: React.ReactNode };

const PROMPT = "aniket@nitj:~$";

const NEOFETCH = `       _nnnn_         aniket@nitj
      dGGGGMMb        ------------
     @p~qp~~qMb       OS:     Arch Linux (btw)
     M|@||@) M|       Host:   NIT Jalandhar
     @,----.JM|       Kernel: ECE 3rd year
    JS^\\__/  qKL      Shell:  /bin/full-stack
   dZP        qKRb    Editor: nvim
  dZP          qKKb   Stack:  React · Django · Docker
 fZP            SMMb  Uptime: building cool things`;

function Help() {
  const cmds: [string, string][] = [
    ["about", "who I am"],
    ["skills", "what I work with"],
    ["projects", "things I've built"],
    ["resume", "open my resume (pdf)"],
    ["contact", "how to reach me"],
    ["neofetch", "system info, nerd style"],
    ["sudo", "nice try"],
    ["clear", "clear the screen"],
    ["help", "this menu"],
  ];
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-4 gap-y-0.5">
      {cmds.map(([c, d]) => (
        <div key={c} className="contents">
          <span className="text-[var(--ctp-green)]">{c}</span>
          <span className="text-[var(--ctp-subtext0)]">{d}</span>
        </div>
      ))}
    </div>
  );
}

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Terminal() {
  const [history, setHistory] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const [typed, setTyped] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLDivElement>(null);
  const cmdHistory = useRef<string[]>([]);
  const histIdx = useRef(-1);

  // Auto-type the opening `whoami` command on mount.
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const full = "whoami";
    if (reduce) {
      setTyped(full);
      setBooted(true);
      setHistory(whoamiOutput());
      return;
    }
    let i = 0;
    const t = setInterval(() => {
      i += 1;
      setTyped(full.slice(0, i));
      if (i >= full.length) {
        clearInterval(t);
        setTimeout(() => {
          setBooted(true);
          setHistory(whoamiOutput());
        }, 350);
      }
    }, 110);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [history, booted]);

  const run = useCallback((raw: string) => {
    const cmd = raw.trim().toLowerCase();
    const echo: Line = {
      type: "in",
      content: (
        <span>
          <span className="text-[var(--ctp-green)]">{PROMPT}</span> {raw}
        </span>
      ),
    };

    if (cmd === "clear") {
      setHistory([]);
      return;
    }
    if (raw.trim()) {
      cmdHistory.current.unshift(raw);
      histIdx.current = -1;
    }

    let out: React.ReactNode;
    switch (cmd) {
      case "":
        setHistory((h) => [...h, echo]);
        return;
      case "help":
        out = <Help />;
        break;
      case "whoami":
      case "about":
        scrollTo("about");
        out = (
          <span>
            Aniket Singh — 3rd year B.Tech ECE @ NIT Jalandhar. Full stack dev.
            Scrolled you to <span className="text-[var(--ctp-blue)]">#about</span> ↓
          </span>
        );
        break;
      case "skills":
        scrollTo("skills");
        out = (
          <span>
            C++, Python, JavaScript, React, Django, Docker, Postman → see{" "}
            <span className="text-[var(--ctp-blue)]">#skills</span> ↓
          </span>
        );
        break;
      case "projects":
      case "ls":
        scrollTo("projects");
        out = (
          <span>
            ai-ats/ quiz-app/ → opening{" "}
            <span className="text-[var(--ctp-blue)]">#projects</span> ↓
          </span>
        );
        break;
      case "contact":
        scrollTo("contact");
        out = (
          <span>
            aniketsingh8072@gmail.com · github.com/rendercold007 →{" "}
            <span className="text-[var(--ctp-blue)]">#contact</span> ↓
          </span>
        );
        break;
      case "resume":
      case "cat resume.pdf":
        window.open(`${basePath}/resume.pdf`, "_blank", "noopener,noreferrer");
        out = <span className="text-[var(--ctp-yellow)]">opening resume.pdf…</span>;
        break;
      case "neofetch":
        out = (
          <pre className="text-[var(--ctp-mauve)] leading-tight text-[11px] sm:text-xs overflow-x-auto">
            {NEOFETCH}
          </pre>
        );
        break;
      case "sudo":
      case "sudo su":
      case "sudo rm -rf /":
        out = (
          <span className="text-[var(--ctp-red)]">
            aniket is not in the sudoers file. This incident will be reported. 🚓
          </span>
        );
        break;
      case "exit":
        out = <span className="text-[var(--ctp-subtext0)]">there is no escape. (try `help`)</span>;
        break;
      default:
        out = (
          <span className="text-[var(--ctp-red)]">
            command not found: {cmd}{" "}
            <span className="text-[var(--ctp-subtext0)]">— type `help`</span>
          </span>
        );
    }
    setHistory((h) => [...h, echo, { type: "out", content: out }]);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const h = cmdHistory.current;
      if (h.length) {
        histIdx.current = Math.min(histIdx.current + 1, h.length - 1);
        setInput(h[histIdx.current]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      histIdx.current = Math.max(histIdx.current - 1, -1);
      setInput(histIdx.current === -1 ? "" : cmdHistory.current[histIdx.current]);
    }
  };

  return (
    <div
      className="terminal w-full max-w-2xl mx-auto text-left text-sm"
      onClick={() => inputRef.current?.focus()}
    >
      {/* title bar */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-[var(--ctp-surface0)]">
        <span className="h-3 w-3 rounded-full bg-[var(--ctp-red)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--ctp-yellow)]" />
        <span className="h-3 w-3 rounded-full bg-[var(--ctp-green)]" />
        <span className="ml-2 text-xs text-[var(--ctp-subtext0)]">
          aniket@nitj: ~
        </span>
      </div>

      {/* body */}
      <div
        ref={bodyRef}
        className="px-4 py-4 h-[18rem] sm:h-[20rem] overflow-y-auto leading-relaxed"
      >
        {/* the auto-typed first command */}
        <div>
          <span className="text-[var(--ctp-green)]">{PROMPT}</span>{" "}
          {typed}
          {!booted && <span className="cursor-blink" />}
        </div>

        {history.map((line, i) => (
          <div key={i} className={line.type === "out" ? "mt-0.5 mb-2 text-[var(--ctp-text)]" : "mt-1"}>
            {line.content}
          </div>
        ))}

        {/* live input line */}
        {booted && (
          <div className="flex items-center mt-1">
            <span className="text-[var(--ctp-green)] shrink-0">{PROMPT}</span>
            <span className="ml-2 whitespace-pre">{input}</span>
            <span className="cursor-blink" />
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              autoFocus
              spellCheck={false}
              autoComplete="off"
              aria-label="terminal input"
              className="absolute opacity-0 w-0 h-0"
            />
          </div>
        )}
      </div>
    </div>
  );
}

function whoamiOutput(): Line[] {
  return [
    {
      type: "out",
      content: (
        <div className="space-y-1">
          <div>
            <span className="text-[var(--ctp-mauve)]">Aniket Singh</span>{" "}
            <span className="text-[var(--ctp-subtext0)]">
              — ECE @ NIT Jalandhar · Full Stack Developer
            </span>
          </div>
          <div className="text-[var(--ctp-subtext0)]">
            type <span className="text-[var(--ctp-green)]">help</span> to see what I
            can do — or just start typing.
          </div>
        </div>
      ),
    },
  ];
}
