"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Download, Menu, X } from "lucide-react";
import gsap from "gsap";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#home");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLAnchorElement>(null);
  const navItemsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // GSAP 入场动画
    const tl = gsap.timeline({ delay: 0.5 });

    tl.from(navRef.current, {
      y: -80,
      opacity: 0,
      duration: 1,
      ease: "power4.out",
    })
    .from(logoRef.current, {
      scale: 0,
      rotation: -360,
      opacity: 0,
      duration: 0.8,
      ease: "back.out(2)",
    }, "-=0.5")
    .from(navItemsRef.current?.children || [], {
      y: -30,
      opacity: 0,
      stagger: 0.08,
      duration: 0.5,
      ease: "power3.out",
    }, "-=0.4");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      const sections = ["#contact", "#projects", "#skills", "#education", "#about", "#home"];
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top <= 200) {
          setActiveSection(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "首页", href: "#home" },
    { label: "关于", href: "#about" },
    { label: "教育", href: "#education" },
    { label: "技能", href: "#skills" },
    { label: "项目", href: "#projects" },
    { label: "联系", href: "#contact" },
  ];

  return (
    <>
      <motion.nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50"
      >
        {/* 滚动进度条 */}
        <div
          className="absolute bottom-0 left-0 h-[3px] bg-gradient-accent"
          style={{
            width: `${scrollProgress}%`,
            boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)",
          }}
        />

        <div
          className={`transition-all duration-500 ${
            scrolled
              ? "glass-strong shadow-xl"
              : "bg-transparent"
          }`}
        >
          <div className="container-main flex items-center justify-between h-16">
            {/* Logo */}
            <motion.a
              ref={logoRef}
              href="#home"
              whileHover={{ scale: 1.15, rotate: 10 }}
              whileTap={{ scale: 0.9 }}
              className="text-xl font-display font-semibold tracking-tight relative group"
            >
              <span className="relative z-10">
                YJ<span className="gradient-text-accent">.</span>
              </span>
              <motion.div
                className="absolute -inset-3 rounded-xl bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity"
                layoutId="logo-hover"
              />
            </motion.a>

            {/* 桌面导航 */}
            <div ref={navItemsRef} className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ y: -3, scale: 1.05 }}
                    className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                      isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0.5 left-3 right-3 h-[2px] bg-gradient-accent rounded-full"
                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        style={{ boxShadow: "0 0 8px rgba(37, 99, 235, 0.5)" }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* 右侧按钮 */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 15 }}
                whileTap={{ scale: 0.8 }}
                className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <Github className="w-[18px] h-[18px]" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.08, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary shine"
              >
                <Download className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                简历
              </motion.button>
            </div>

            {/* 移动端菜单按钮 */}
            <motion.button
              whileTap={{ scale: 0.8 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground"
            >
              <AnimatePresence mode="wait">
                {mobileOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-5 h-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-5 h-5" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* 移动端菜单 */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] glass-strong border-l border-border md:hidden"
            >
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <span className="text-xl font-display font-semibold">
                    YJ<span className="gradient-text-accent">.</span>
                  </span>
                  <motion.button
                    whileTap={{ scale: 0.8 }}
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-lg text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-5 h-5" />
                  </motion.button>
                </div>

                <div className="flex-1 overflow-y-auto py-6 px-4">
                  <div className="space-y-2">
                    {navItems.map((item, i) => (
                      <motion.a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={`block px-5 py-3.5 rounded-xl text-base font-medium transition-all ${
                          activeSection === item.href
                            ? "text-accent bg-accent/10"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted"
                        }`}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </div>
                </div>

                <div className="p-6 border-t border-border">
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl text-muted-foreground hover:text-foreground hover:bg-muted"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <button className="flex-1 btn-primary text-center">
                      <Download className="w-4 h-4 inline-block mr-1.5 -mt-0.5" />
                      简历下载
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
