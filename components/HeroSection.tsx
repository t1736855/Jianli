"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Mail, ArrowDown, Award, Briefcase, Code2, ChevronRight, Cpu, Cloud, Terminal, ShieldCheck, Zap, Layers, Trophy } from "lucide-react";
import gsap from "gsap";

const TypeAnimation = dynamic(() => import("react-type-animation").then((mod) => mod.TypeAnimation), { ssr: false });

// 极简高质感暖亮背景 (Apple Aesthetic Light Aura)
function AppleLightBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const lights = containerRef.current.querySelectorAll(".light-orb");

    lights.forEach((orb) => {
      gsap.to(orb, {
        x: "random(-30, 30)",
        y: "random(-30, 30)",
        scale: "random(0.95, 1.15)",
        opacity: "random(0.4, 0.7)",
        duration: "random(8, 12)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      {/* 极细浅灰几何网格 */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 0, 0, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
        }}
      />
      {/* 苹果极简弥散暖光色块 */}
      <div className="light-orb absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[380px] rounded-full bg-blue-200/40 blur-[130px]" />
      <div className="light-orb absolute top-1/3 left-1/3 w-[450px] h-[320px] rounded-full bg-indigo-100/50 blur-[140px]" />
      <div className="light-orb absolute bottom-1/4 right-1/3 w-[500px] h-[320px] rounded-full bg-sky-200/35 blur-[150px]" />
    </div>
  );
}

// 高级数字计数器
function AdvancedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || !countRef.current) return;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 2,
      ease: "power3.out",
      onUpdate: () => {
        if (countRef.current) {
          countRef.current.textContent = Math.floor(obj.value) + suffix;
        }
      },
    });
  }, [target, suffix, started]);

  return (
    <motion.span
      onViewportEnter={() => setStarted(true)}
      viewport={{ once: true }}
      ref={countRef}
      className="stat-number"
    >
      0{suffix}
    </motion.span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!contentRef.current) return;

    const tl = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tl.from(".hero-badge", { y: 20, opacity: 0, duration: 0.8, delay: 0.2 })
      .from(".hero-title", { y: 30, opacity: 0, duration: 1 }, "-=0.5")
      .from(".hero-subtitle", { y: 20, opacity: 0, duration: 0.8 }, "-=0.6")
      .from(".hero-typewriter", { y: 20, opacity: 0, duration: 0.6 }, "-=0.5")
      .from(".hero-bio", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-focus-grid", { y: 25, opacity: 0, duration: 0.7 }, "-=0.4")
      .from(".hero-tags", { y: 20, opacity: 0, duration: 0.6 }, "-=0.4")
      .from(".hero-contact", { y: 20, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.4")
      .from(".hero-stat", { y: 25, opacity: 0, stagger: 0.1, duration: 0.6 }, "-=0.3")
      .from(".hero-cta", { y: 20, opacity: 0, stagger: 0.1, duration: 0.5 }, "-=0.3");

    return () => {
      tl.kill();
    };
  }, []);

  const focusCards = [
    {
      icon: Cloud,
      title: "云原生架构",
      desc: "K8s 微服务治理与高可用编排",
      tag: "Kubernetes / Helm",
    },
    {
      icon: Terminal,
      title: "DevOps 自动化",
      desc: "CI/CD 流水线与 Infrastructure as Code",
      tag: "Docker / GitLab CI",
    },
    {
      icon: Zap,
      title: "Serverless 方案",
      desc: "事件驱动架构与低成本敏捷开发",
      tag: "云函数 / 函数计算",
    },
  ];

  const highlightsTags = [
    { label: "Kubernetes", icon: Cpu },
    { label: "Docker 容器化", icon: Layers },
    { label: "CI/CD 流水线", icon: Terminal },
    { label: "华为 ICT 大赛一等奖", icon: Trophy },
    { label: "Linux / Go / Python", icon: Code2 },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 sm:py-28"
    >
      <AppleLightBackground />

      <div ref={contentRef} className="relative z-10 container-main text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* 状态徽章 */}
          <div className="hero-badge flex justify-center">
            <div className="badge shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
              </span>
              Open for Opportunities · 云计算技术应用专业
            </div>
          </div>

          {/* 名字与标题 */}
          <div className="space-y-3">
            <h1 className="hero-title heading-display text-[clamp(2.8rem,7vw,5.5rem)] text-gray-900 tracking-tight">
              <span className="gradient-text-accent">李洪斌</span>
            </h1>
            <p className="hero-subtitle text-[clamp(1.1rem,2.2vw,1.8rem)] text-gray-500 font-light tracking-wide">
              Li Hongbin
            </p>
          </div>

          {/* 打字机动态角色 */}
          <div className="hero-typewriter min-h-[32px]">
            <span className="font-mono text-base sm:text-lg tracking-wider text-blue-600 font-semibold bg-blue-50/80 px-4 py-1.5 rounded-full border border-blue-100 shadow-sm inline-block">
              <TypeAnimation
                sequence={[
                  "Cloud Native Architect", 3000,
                  "DevOps Engineer", 3000,
                  "Kubernetes Specialist", 3000,
                  "Infrastructure Engineer", 3000,
                ]}
                wrapper="span"
                speed={45}
                repeat={Infinity}
                cursor={true}
              />
            </span>
          </div>

          {/* 简介 */}
          <div className="hero-bio max-w-2xl mx-auto space-y-2 px-4">
            <p className="text-gray-800 text-base sm:text-lg leading-relaxed font-normal">
              深耕云原生领域的准工程师，专注于容器化、微服务架构与自动化运维。
            </p>
            <p className="text-gray-500 text-sm sm:text-base leading-relaxed">
              擅长 Kubernetes 集群优化、Serverless 架构设计与生产级基础设施搭建。
            </p>
          </div>

          {/* 核心专注方向 3列精细 Bento 卡片 */}
          <div className="hero-focus-grid grid grid-cols-1 sm:grid-cols-3 gap-4 text-left max-w-4xl mx-auto pt-2">
            {focusCards.map((card, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="card p-5 bg-white/80 backdrop-blur-sm border border-gray-100 shadow-sm hover:shadow-md transition-all rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 border border-blue-100 flex items-center justify-center mb-3">
                    <card.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4">{card.desc}</p>
                </div>
                <span className="text-[11px] font-mono font-medium text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md w-fit">
                  {card.tag}
                </span>
              </motion.div>
            ))}
          </div>

          {/* 核心亮点速览标签栏 */}
          <div className="hero-tags flex flex-wrap justify-center items-center gap-2 max-w-3xl mx-auto pt-1">
            {highlightsTags.map((t, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-700 bg-gray-50 border border-gray-200/80 px-3.5 py-1.5 rounded-full shadow-2xs hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200 transition-colors cursor-default"
              >
                <t.icon className="w-3.5 h-3.5 text-blue-500" />
                {t.label}
              </span>
            ))}
          </div>

          {/* 联系信息 */}
          <div className="hero-contact flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 pt-2">
            {[
              { icon: MapPin, label: "Location", value: "中国 · 重庆" },
              { icon: Mail, label: "Email", value: "yunjie.cloud@example.com" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 flex-shrink-0 shadow-sm">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="text-left min-w-0">
                  <div className="text-[10px] text-gray-400 font-mono uppercase tracking-wider">
                    {item.label}
                  </div>
                  <div className="text-sm text-gray-800 font-medium">{item.value}</div>
                </div>
              </div>
            ))}
          </div>

          {/* 统计数据 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto pt-2">
            {[
              { icon: Award, label: "国家励志奖学金", value: "2024" },
              { icon: Briefcase, label: "项目经验", value: "8+", num: 8, suffix: "+" },
              { icon: Code2, label: "核心课程均分", value: "96.5", num: 96, suffix: ".5分" },
            ].map((item) => (
              <motion.div
                key={item.label}
                whileHover={{ y: -4 }}
                className="hero-stat card p-4 text-center bg-white/90 border border-gray-100 shadow-sm rounded-2xl"
              >
                <div className="w-9 h-9 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center mx-auto mb-2 border border-blue-100">
                  <item.icon className="w-4 h-4" />
                </div>
                <div className="text-xl font-bold text-gray-900">
                  {item.num ? <AdvancedCounter target={item.num} suffix={item.suffix} /> : item.value}
                </div>
                <div className="text-xs text-gray-500 mt-0.5">{item.label}</div>
              </motion.div>
            ))}
          </div>

          {/* CTA 按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hero-cta btn-primary text-center group"
            >
              查看项目作品
              <ChevronRight className="w-4 h-4 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.97 }}
              className="hero-cta btn-secondary text-center"
            >
              联系我
            </motion.a>
          </div>
        </div>
      </div>

      {/* 滚动指示器 */}
      <div className="hero-scroll absolute bottom-6 left-1/2 -translate-x-1/2">
        <a
          href="#about"
          className="flex flex-col items-center gap-1.5 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <span className="text-[10px] font-mono tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-blue-500" />
        </a>
      </div>
    </section>
  );
}
