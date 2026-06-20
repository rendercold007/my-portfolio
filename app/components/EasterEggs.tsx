"use client";

import { useEffect, useState } from "react";

const KONAMI = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function EasterEggs() {
  const [matrix, setMatrix] = useState(false);

  // DevTools greeting for the curious.
  useEffect(() => {
    const style =
      "color:#cba6f7;font-family:monospace;font-size:13px;font-weight:bold";
    console.log(
      "%c$ whoami\n%cAniket Singh — you opened the console. respect. 🛠️\n%c↳ Konami code unlocks something. github.com/rendercold007",
      style,
      "color:#a6e3a1;font-family:monospace",
      "color:#6c7086;font-family:monospace"
    );
  }, []);

  // Konami code → matrix rain.
  useEffect(() => {
    let pos = 0;
    const onKey = (e: KeyboardEvent) => {
      const want = KONAMI[pos];
      if (e.key.toLowerCase() === want.toLowerCase() || e.key === want) {
        pos += 1;
        if (pos === KONAMI.length) {
          setMatrix(true);
          pos = 0;
        }
      } else {
        pos = e.key === KONAMI[0] ? 1 : 0;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // "/" focuses the terminal input.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const el = document.activeElement;
      const typing =
        el instanceof HTMLInputElement || el instanceof HTMLTextAreaElement;
      if (e.key === "/" && !typing) {
        e.preventDefault();
        document
          .querySelector<HTMLInputElement>('input[aria-label="terminal input"]')
          ?.focus();
        document
          .getElementById("home")
          ?.scrollIntoView({ behavior: "smooth" });
      }
      if (e.key === "Escape") setMatrix(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  if (!matrix) return null;
  return <MatrixRain onClose={() => setMatrix(false)} />;
}

function MatrixRain({ onClose }: { onClose: () => void }) {
  useEffect(() => {
    const canvas = document.getElementById("matrix") as HTMLCanvasElement | null;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const fontSize = 16;
    const cols = Math.floor(canvas.width / fontSize);
    const drops = new Array(cols).fill(1);
    const chars = "アイウエオカキ01<>{}[]()=+*/abcdefΣλπ".split("");

    const draw = () => {
      ctx.fillStyle = "rgba(30,30,46,0.08)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#a6e3a1";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };
    const id = setInterval(draw, 45);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[100] bg-[var(--ctp-base)]">
      <canvas id="matrix" className="block" />
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-xs text-[var(--ctp-green)] border border-[var(--ctp-green)]/40 rounded px-3 py-1 hover:bg-[var(--ctp-green)]/10"
      >
        ESC to exit
      </button>
    </div>
  );
}
