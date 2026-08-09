"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            if (loaderRef.current) {
              gsap.to(loaderRef.current, {
                opacity: 0,
                duration: 0.5,
                ease: "power3.inOut",
                onComplete: () => setShow(false),
              });
            }
          }, 300);
          return 100;
        }
        return Math.min(prev + Math.random() * 25 + 10, 100);
      });
    }, 40);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={loaderRef}
          initial={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#09090B] overflow-hidden"
        >
          <div ref={logoRef} className="text-center relative z-10">
            <span className="text-6xl font-mono font-bold tracking-tight text-white">
              YJ<span className="text-blue-500">.</span>
            </span>

            <p className="text-xs text-zinc-500 font-mono mt-3 tracking-[0.25em] uppercase">
              Cloud Native Engineer
            </p>
          </div>

          <div className="mt-12 w-64 space-y-3 relative z-10">
            {/* 进度条 */}
            <div className="h-[3px] bg-white/10 rounded-full overflow-hidden">
              <div
                className="h-full bg-blue-500 rounded-full transition-all duration-150"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* 进度百分比 */}
            <div className="flex justify-between text-[11px] font-mono text-zinc-500">
              <span>INITIALIZING</span>
              <span>{Math.floor(progress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
