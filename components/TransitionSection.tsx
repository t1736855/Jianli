"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Cloud, Server, ShieldCheck, Cpu, Database, GitBranch, Container, Terminal, Gauge, Globe, Lock, Zap } from "lucide-react";
import gsap from "gsap";

const items = [
  { icon: Cloud, label: "Cloud Native" },
  { icon: Server, label: "DevOps" },
  { icon: ShieldCheck, label: "Security" },
  { icon: Cpu, label: "Kubernetes" },
  { icon: Database, label: "Infrastructure" },
  { icon: GitBranch, label: "CI/CD" },
  { icon: Container, label: "Docker" },
  { icon: Terminal, label: "Automation" },
  { icon: Gauge, label: "Monitoring" },
  { icon: Globe, label: "Multi-Cloud" },
  { icon: Lock, label: "RBAC" },
  { icon: Zap, label: "Serverless" },
];

export default function TransitionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const marquee1Ref = useRef<HTMLDivElement>(null);
  const marquee2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!marquee1Ref.current || !marquee2Ref.current) return;

    // GSAP 跑马灯动画 - 第一行
    const marquee1 = marquee1Ref.current;
    const totalWidth1 = marquee1.scrollWidth / 2;

    gsap.to(marquee1, {
      x: -totalWidth1,
      duration: 35,
      repeat: -1,
      ease: "none",
    });

    // GSAP 跑马灯动画 - 第二行（反向）
    const marquee2 = marquee2Ref.current;
    const totalWidth2 = marquee2.scrollWidth / 2;

    gsap.fromTo(marquee2,
      { x: -totalWidth2 },
      {
        x: 0,
        duration: 40,
        repeat: -1,
        ease: "none",
      }
    );

    // 入场动画
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power4.out",
    });
  }, []);

  const marqueeItems = [...items, ...items, ...items, ...items];

  return (
    <section
      ref={sectionRef}
      className="py-20 overflow-hidden border-y border-border bg-muted/20 relative"
    >
      {/* 渐变边缘 */}
      <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* 跑马灯 1 */}
      <div ref={marquee1Ref} className="flex items-center gap-16 whitespace-nowrap mb-8">
        {marqueeItems.map((item, i) => (
          <motion.div
            key={`1-${i}`}
            whileHover={{ scale: 1.2, y: -8 }}
            className="flex items-center gap-4 text-muted-foreground/25 hover:text-accent transition-colors cursor-default"
          >
            <item.icon className="w-7 h-7" />
            <span className="text-lg font-light tracking-widest uppercase">{item.label}</span>
          </motion.div>
        ))}
      </div>

      {/* 跑马灯 2 */}
      <div ref={marquee2Ref} className="flex items-center gap-16 whitespace-nowrap">
        {marqueeItems.map((item, i) => (
          <motion.div
            key={`2-${i}`}
            whileHover={{ scale: 1.2, y: -8 }}
            className="flex items-center gap-4 text-muted-foreground/20 hover:text-purple-500 transition-colors cursor-default"
          >
            <item.icon className="w-6 h-6" />
            <span className="text-base font-light tracking-widest uppercase">{item.label}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
