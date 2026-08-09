"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { MapPin, Mail, ArrowDown, Award, Briefcase, Code2, ChevronRight } from "lucide-react";
import gsap from "gsap";

const TypeAnimation = dynamic(() => import("react-type-animation").then((mod) => mod.TypeAnimation), { ssr: false });

// 高级粒子系统
function AdvancedParticleSystem() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
      color: string;
      hue: number;
      angle: number;
      spin: number;
      shape: "circle" | "square" | "triangle";
    }> = [];

    const colors = ["#2563EB", "#7C3AED", "#06B6D4", "#a18cd1", "#f093fb", "#4facfe", "#43e97b"];

    for (let i = 0; i < 120; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 2,
        speedX: (Math.random() - 0.5) * 1.5,
        speedY: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.8 + 0.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        hue: Math.random() * 360,
        angle: Math.random() * Math.PI * 2,
        spin: (Math.random() - 0.5) * 0.05,
        shape: ["circle", "square", "triangle"][Math.floor(Math.random() * 3)] as "circle" | "square" | "triangle",
      });
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        // 鼠标交互
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 200) {
          particle.speedX += dx * 0.00005;
          particle.speedY += dy * 0.00005;
        }

        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.angle += particle.spin;
        particle.hue += 0.3;

        // 边界检测
        if (particle.x > canvas.width + 50) particle.x = -50;
        if (particle.x < -50) particle.x = canvas.width + 50;
        if (particle.y > canvas.height + 50) particle.y = -50;
        if (particle.y < -50) particle.y = canvas.height + 50;

        // 绘制粒子
        ctx.save();
        ctx.translate(particle.x, particle.y);
        ctx.rotate(particle.angle);
        ctx.globalAlpha = particle.opacity;

        if (particle.shape === "circle") {
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fillStyle = particle.color;
          ctx.fill();
        } else if (particle.shape === "square") {
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size, -particle.size, particle.size * 2, particle.size * 2);
        } else {
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          ctx.fillStyle = particle.color;
          ctx.fill();
        }

        // 光晕效果
        ctx.beginPath();
        ctx.arc(0, 0, particle.size * 5, 0, Math.PI * 2);
        const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size * 5);
        gradient.addColorStop(0, particle.color);
        gradient.addColorStop(1, "transparent");
        ctx.fillStyle = gradient;
        ctx.globalAlpha = particle.opacity * 0.2;
        ctx.fill();

        ctx.restore();

        // 连线效果
        particles.forEach((other) => {
          const dx2 = particle.x - other.x;
          const dy2 = particle.y - other.y;
          const distance = Math.sqrt(dx2 * dx2 + dy2 * dy2);

          if (distance < 180 && distance > 0) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            const lineGradient = ctx.createLinearGradient(particle.x, particle.y, other.x, other.y);
            lineGradient.addColorStop(0, particle.color);
            lineGradient.addColorStop(1, other.color);
            ctx.strokeStyle = lineGradient;
            ctx.globalAlpha = (1 - distance / 180) * 0.2;
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        });
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    window.addEventListener("resize", resizeCanvas);
    return () => {
      window.removeEventListener("resize", resizeCanvas);
      window.removeEventListener("mousemove", handleMouseMove);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ opacity: 1 }}
    />
  );
}

// 3D 浮动元素
function Floating3DElements() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.querySelectorAll(".floating-3d");

    elements.forEach((el, i) => {
      // 3D 浮动动画
      gsap.to(el, {
        y: `random(-40, 40)`,
        x: `random(-30, 30)`,
        z: `random(-20, 20)`,
        rotationX: `random(-15, 15)`,
        rotationY: `random(-15, 15)`,
        rotationZ: `random(-10, 10)`,
        duration: `random(5, 10)`,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.15,
      });

      // 透视效果
      gsap.set(el, { transformPerspective: 800 });
    });
  }, []);

  const elements = [
    { icon: "{ }", x: "8%", y: "18%", size: "text-6xl", color: "text-blue-500/20" },
    { icon: "</>", x: "88%", y: "12%", size: "text-5xl", color: "text-purple-500/20" },
    { icon: "⚙", x: "78%", y: "68%", size: "text-4xl", color: "text-cyan-500/20" },
    { icon: "☁", x: "12%", y: "72%", size: "text-5xl", color: "text-indigo-500/20" },
    { icon: "λ", x: "92%", y: "42%", size: "text-4xl", color: "text-pink-500/20" },
    { icon: "π", x: "5%", y: "48%", size: "text-4xl", color: "text-emerald-500/20" },
    { icon: "∞", x: "48%", y: "8%", size: "text-4xl", color: "text-amber-500/20" },
    { icon: "∑", x: "28%", y: "82%", size: "text-3xl", color: "text-rose-500/20" },
    { icon: "Δ", x: "72%", y: "22%", size: "text-3xl", color: "text-teal-500/20" },
    { icon: "Ω", x: "18%", y: "38%", size: "text-3xl", color: "text-violet-500/20" },
    { icon: "Σ", x: "82%", y: "82%", size: "text-3xl", color: "text-sky-500/20" },
    { icon: "Θ", x: "42%", y: "88%", size: "text-2xl", color: "text-fuchsia-500/20" },
  ];

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none" style={{ perspective: "1000px" }}>
      {elements.map((el, i) => (
        <div
          key={i}
          className={`floating-3d absolute ${el.size} ${el.color} font-mono select-none`}
          style={{
            left: el.x,
            top: el.y,
            textShadow: "0 0 30px currentColor",
          }}
        >
          {el.icon}
        </div>
      ))}
    </div>
  );
}

// 动态光效背景
function DynamicLightBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const lights = containerRef.current.querySelectorAll(".light");

    lights.forEach((light, i) => {
      // 复杂的浮动动画
      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(light, {
        x: `random(-80, 80)`,
        y: `random(-80, 80)`,
        scale: `random(0.8, 1.3)`,
        opacity: `random(0.1, 0.4)`,
        duration: `random(6, 12)`,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="light absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-[100px]" />
      <div className="light absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 blur-[100px]" />
      <div className="light absolute top-1/2 left-1/2 w-[350px] h-[350px] rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 blur-[100px]" />
      <div className="light absolute top-1/3 right-1/3 w-[300px] h-[300px] rounded-full bg-gradient-to-br from-pink-500/20 to-rose-500/20 blur-[100px]" />
      <div className="light absolute bottom-1/3 left-1/3 w-[250px] h-[250px] rounded-full bg-gradient-to-br from-emerald-500/20 to-teal-500/20 blur-[100px]" />
    </div>
  );
}

// 高级鼠标跟随
function AdvancedMouseFollower() {
  const glowRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);
  const quickToX = useRef<gsap.QuickToFunc>();
  const quickToY = useRef<gsap.QuickToFunc>();
  const trailX = useRef<gsap.QuickToFunc>();
  const trailY = useRef<gsap.QuickToFunc>();

  useEffect(() => {
    if (!glowRef.current || !trailRef.current) return;

    quickToX.current = gsap.quickTo(glowRef.current, "x", { duration: 0.3, ease: "power3" });
    quickToY.current = gsap.quickTo(glowRef.current, "y", { duration: 0.3, ease: "power3" });
    trailX.current = gsap.quickTo(trailRef.current, "x", { duration: 0.6, ease: "power3" });
    trailY.current = gsap.quickTo(trailRef.current, "y", { duration: 0.6, ease: "power3" });

    const handleMouseMove = (e: MouseEvent) => {
      quickToX.current?.(e.clientX - 300);
      quickToY.current?.(e.clientY - 300);
      trailX.current?.(e.clientX - 200);
      trailY.current?.(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        ref={glowRef}
        className="fixed pointer-events-none z-40 mix-blend-screen"
        style={{ opacity: 0.6 }}
      >
        <div
          className="w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(37, 99, 235, 0.3) 0%, rgba(124, 58, 237, 0.2) 30%, transparent 70%)",
            filter: "blur(80px)",
          }}
        />
      </div>
      <div
        ref={trailRef}
        className="fixed pointer-events-none z-30"
        style={{ opacity: 0.3 }}
      >
        <div
          className="w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />
      </div>
    </>
  );
}

// 高级计数器
function AdvancedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const countRef = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started || !countRef.current) return;

    const obj = { value: 0 };
    gsap.to(obj, {
      value: target,
      duration: 2.5,
      ease: "elastic.out(1, 0.5)",
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
      defaults: { ease: "power4.out" },
    });

    // 高级入场动画
    tl.from(".hero-badge", {
      y: 60,
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.8,
    })
    .from(".hero-title", {
      y: 100,
      opacity: 0,
      duration: 1.2,
      ease: "back.out(1.4)",
    }, "-=0.6")
    .from(".hero-subtitle", {
      y: 80,
      opacity: 0,
      duration: 1,
    }, "-=0.8")
    .from(".hero-typewriter", {
      y: 50,
      opacity: 0,
      scale: 0.9,
      duration: 0.8,
    }, "-=0.6")
    .from(".hero-bio", {
      y: 40,
      opacity: 0,
      duration: 0.8,
    }, "-=0.4")
    .from(".hero-contact", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    }, "-=0.4")
    .from(".hero-stat", {
      y: 60,
      opacity: 0,
      scale: 0.8,
      stagger: 0.1,
      duration: 0.8,
      ease: "back.out(1.7)",
    }, "-=0.3")
    .from(".hero-cta", {
      y: 40,
      opacity: 0,
      stagger: 0.15,
      duration: 0.6,
    }, "-=0.3")
    .from(".hero-scroll", {
      y: 30,
      opacity: 0,
      duration: 0.5,
    }, "-=0.2");

    // 持续的动画效果
    gsap.to(".hero-scroll", {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <>
      <AdvancedMouseFollower />
      <section
        ref={sectionRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* 高级粒子系统 */}
        <AdvancedParticleSystem />

        {/* 动态光效背景 */}
        <DynamicLightBackground />

        {/* 3D 浮动元素 */}
        <Floating3DElements />

        {/* 网格背景 */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
              linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />

        {/* 渐变线条装饰 */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-56 bg-gradient-to-b from-transparent via-accent/60 to-transparent" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-56 bg-gradient-to-t from-transparent via-accent/60 to-transparent" />
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-40 h-px bg-gradient-to-l from-transparent via-accent/40 to-transparent" />

        <div ref={contentRef} className="relative z-10 container-main text-center">
          <div className="max-w-5xl mx-auto space-y-12">
            {/* 状态徽章 */}
            <div className="hero-badge flex justify-center">
              <div className="badge text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                </span>
                Open for Opportunities
              </div>
            </div>

            {/* 名字 */}
            <div className="space-y-5">
              <h1 className="hero-title heading-display text-[clamp(3.5rem,12vw,8rem)] text-foreground">
                <span className="gradient-text-accent" style={{ textShadow: "0 0 60px rgba(37, 99, 235, 0.3)" }}>
                  张云阶
                </span>
              </h1>
              <p className="hero-subtitle heading-display text-[clamp(1.5rem,4vw,3rem)] text-muted-foreground">
                Zhang Yunjie
              </p>
            </div>

            {/* 打字机效果 */}
            <div className="hero-typewriter min-h-[40px]">
              <span className="font-mono text-lg tracking-wider text-accent/90" style={{ textShadow: "0 0 20px rgba(37, 99, 235, 0.4)" }}>
                <TypeAnimation
                  sequence={[
                    "Cloud Native Architect", 3000,
                    "DevOps Engineer", 3000,
                    "Kubernetes Specialist", 3000,
                    "Full Stack Developer", 3000,
                  ]}
                  wrapper="span"
                  speed={40}
                  repeat={Infinity}
                  cursor={true}
                />
              </span>
            </div>

            {/* 简介 */}
            <div className="hero-bio max-w-3xl mx-auto space-y-4">
              <p className="text-foreground/90 text-xl leading-relaxed">
                深耕云原生领域的准工程师，专注于容器化、微服务架构与自动化运维。
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                擅长 Kubernetes 集群优化、Serverless 架构设计、CI/CD 流水线构建。
              </p>
            </div>

            {/* 联系信息 */}
            <div className="hero-contact flex flex-wrap justify-center gap-8">
              {[
                { icon: MapPin, label: "Location", value: "中国 · 重庆" },
                { icon: Mail, label: "Email", value: "yunjie.cloud@example.com" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center shadow-xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">
                      {item.label}
                    </div>
                    <div className="text-base text-foreground font-medium">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* 统计数据 */}
            <div className="grid grid-cols-3 gap-6 max-w-lg mx-auto">
              {[
                { icon: Award, label: "国家励志奖学金", value: "2024" },
                { icon: Briefcase, label: "项目经验", value: "8+", num: 8, suffix: "+" },
                { icon: Code2, label: "技术栈", value: "15+", num: 15, suffix: "+" },
              ].map((item) => (
                <motion.div
                  key={item.label}
                  whileHover={{ y: -10, scale: 1.08, rotateY: 5 }}
                  className="hero-stat card-glow p-5 text-center"
                  style={{ transformPerspective: "1000px" }}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-3 shadow-xl">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl font-semibold text-foreground">
                    {item.num ? <AdvancedCounter target={item.num} suffix={item.suffix} /> : item.value}
                  </div>
                  <div className="text-xs text-muted-foreground">{item.label}</div>
                </motion.div>
              ))}
            </div>

            {/* CTA 按钮 */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta btn-primary shine text-center group"
              >
                查看项目作品
                <ChevronRight className="w-5 h-5 inline-block ml-1 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="hero-cta btn-secondary text-center"
              >
                联系我
              </motion.a>
            </div>
          </div>
        </div>

        {/* 滚动指示器 */}
        <div className="hero-scroll absolute bottom-10 left-1/2 -translate-x-1/2">
          <a
            href="#education"
            className="flex flex-col items-center gap-3 text-muted-foreground/50 hover:text-muted-foreground transition-colors"
          >
            <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
            <ArrowDown className="w-6 h-6" />
          </a>
        </div>
      </section>
    </>
  );
}
