"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import gsap from "gsap";

export default function PageLoader() {
  const [progress, setProgress] = useState(0);
  const [show, setShow] = useState(true);
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoTextRef = useRef<HTMLSpanElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 创建粒子效果
    if (particlesRef.current) {
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement("div");
        particle.className = "absolute w-2 h-2 rounded-full bg-accent/30";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesRef.current.appendChild(particle);

        gsap.to(particle, {
          x: `random(-100, 100)`,
          y: `random(-100, 100)`,
          opacity: `random(0.1, 0.5)`,
          scale: `random(0.5, 2)`,
          duration: `random(2, 4)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: Math.random() * 2,
        });
      }
    }

    // GSAP 入场动画
    const tl = gsap.timeline();

    tl.from(logoRef.current, {
      scale: 0,
      opacity: 0,
      rotation: -180,
      duration: 1.2,
      ease: "elastic.out(1, 0.5)",
    })
    .from(logoTextRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.6,
    }, "-=0.4")
    .from(progressRef.current, {
      y: 20,
      opacity: 0,
      scaleX: 0.8,
      duration: 0.5,
    }, "-=0.2");

    // Logo 持续动画
    gsap.to(logoRef.current, {
      rotateY: 360,
      duration: 4,
      repeat: -1,
      ease: "none",
    });

    // 进度条动画
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            // 退场动画
            const exitTl = gsap.timeline();
            exitTl.to(loaderRef.current, {
              scale: 1.1,
              duration: 0.3,
              ease: "power2.inOut",
            })
            .to(loaderRef.current, {
              opacity: 0,
              scale: 0.9,
              duration: 0.5,
              ease: "power3.inOut",
              onComplete: () => setShow(false),
            });
          }, 500);
          return 100;
        }
        return Math.min(prev + Math.random() * 18 + 5, 100);
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  // 更新进度条
  useEffect(() => {
    if (progressFillRef.current) {
      gsap.to(progressFillRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          ref={loaderRef}
          initial={{ opacity: 1 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white overflow-hidden"
        >
          {/* 粒子容器 */}
          <div ref={particlesRef} className="absolute inset-0 pointer-events-none" />

          {/* 装饰性背景 */}
          <div className="absolute inset-0 dot-grid opacity-10" />

          {/* 动态光效 */}
          <motion.div
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute top-1/3 left-1/3 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 blur-[150px]"
          />
          <motion.div
            animate={{
              scale: [1.5, 1, 1.5],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute bottom-1/3 right-1/3 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-[150px]"
          />

          <div ref={logoRef} className="text-center relative z-10" style={{ perspective: "1000px" }}>
            <span
              ref={logoTextRef}
              className="text-8xl font-display font-semibold tracking-tight text-foreground"
              style={{ textShadow: "0 0 40px rgba(37, 99, 235, 0.3)" }}
            >
              YJ<span className="gradient-text-accent">.</span>
            </span>

            <motion.p
              animate={{
                opacity: [0.4, 1, 0.4],
                letterSpacing: ["0.2em", "0.3em", "0.2em"],
              }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-xs text-muted-foreground font-mono mt-5 tracking-[0.25em] uppercase"
            >
              Cloud Native Engineer
            </motion.p>
          </div>

          <div ref={progressRef} className="mt-20 w-80 space-y-5 relative z-10">
            {/* 进度条 */}
            <div className="h-[5px] bg-border rounded-full overflow-hidden">
              <div
                ref={progressFillRef}
                className="h-full bg-gradient-accent rounded-full"
                style={{ width: "0%", boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              />
            </div>

            {/* 进度信息 */}
            <div className="flex justify-between">
              <span className="text-[10px] font-mono text-muted-foreground tracking-widest uppercase">Loading</span>
              <span className="text-sm font-mono text-muted-foreground tabular-nums stat-number">
                {String(Math.floor(progress)).padStart(3, "0")}
              </span>
            </div>
          </div>

          {/* 底部装饰 */}
          <motion.div
            animate={{
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-12 flex items-center gap-3 text-[10px] text-muted-foreground/50 font-mono"
          >
            <span className="w-2 h-2 rounded-full bg-accent/50" />
            <span>Next.js + Tailwind + Framer Motion + GSAP</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
