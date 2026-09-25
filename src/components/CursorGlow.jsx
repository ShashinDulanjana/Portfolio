import { useEffect } from "react";
import { useMotionValue, useSpring, useTransform, motion } from "framer-motion";
import "./CursorGlow.css";

// A soft pair of colour blobs that trail the cursor across the whole page.
// Glass panels sit on top of this layer, so as the light drifts underneath
// them their tint and highlight shift — the "liquid glass" signature effect.
export default function CursorGlow() {
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.32);

  const x = useSpring(mx, { stiffness: 32, damping: 20, mass: 0.9 });
  const y = useSpring(my, { stiffness: 32, damping: 20, mass: 0.9 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const handleMove = (e) => {
      mx.set(e.clientX / window.innerWidth);
      my.set(e.clientY / window.innerHeight);
    };
    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [mx, my]);

  const cyanLeft = useTransform(x, (v) => `${v * 100}%`);
  const cyanTop = useTransform(y, (v) => `${v * 100}%`);
  const violetLeft = useTransform(x, (v) => `${v * 100 + 18}%`);
  const violetTop = useTransform(y, (v) => `${v * 100 - 12}%`);

  return (
    <div className="cursor-glow-layer" aria-hidden="true">
      <div className="grid-backdrop grid-fade-edge" />
      <motion.div className="glow-blob glow-cyan" style={{ left: cyanLeft, top: cyanTop }} />
      <motion.div className="glow-blob glow-violet" style={{ left: violetLeft, top: violetTop }} />
      <div className="vignette" />
    </div>
  );
}
