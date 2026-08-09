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
    const tl = gsap.timeline({ delay: 0.2 });

    tl.from(navRef.current, {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        logoRef.current,
        {
          scale: 0.8,
          opacity: 0,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .from(
        navItemsRef.current?.children || [],
        {
          y: -15,
          opacity: 0,
          stagger: 0.05,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.3"
      );
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);

      const sections = ["#contact", "#projects", "#skills", "#education", "#about", "#home"];
      for (const id of sections) {
        const el = document.querySelector(id);
        if (el && el.getBoundingClientRect().top <= 220) {
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
      <motion.nav ref={navRef} className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-8">
        <div
          className={`max-w-5xl mx-auto rounded-full transition-all duration-400 border ${
            scrolled
              ? "glass-strong shadow-xl border-black/5 py-2.5 px-6"
              : "bg-transparent border-transparent py-4 px-6"
          }`}
        >
          {/* 顶栏内容 */}
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.a
              ref={logoRef}
              href="#home"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-lg font-mono font-bold tracking-wider text-gray-900 flex items-center gap-1"
            >
              YJ<span className="text-blue-600">.</span>
            </motion.a>

            {/* 桌面导航 */}
            <div ref={navItemsRef} className="hidden md:flex items-center gap-1 bg-black/[0.03] p-1 rounded-full border border-black/5">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    whileHover={{ y: -1 }}
                    className={`relative px-4 py-1.5 text-xs font-mono rounded-full transition-colors ${
                      isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute inset-0 bg-white shadow-sm border border-black/5 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* 右侧操作栏 */}
            <div className="hidden md:flex items-center gap-3">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full text-gray-600 hover:text-gray-900 hover:bg-black/5 transition-colors"
              >
                <Github className="w-4 h-4" />
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary !px-4 !py-1.5 !text-xs"
              >
                <Download className="w-3.5 h-3.5" />
                简历
              </motion.button>
            </div>

            {/* 移动端菜单开关 */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>

        {/* 顶部极细进度线 */}
        <div className="fixed top-0 left-0 right-0 h-[2px] bg-black/5 pointer-events-none">
          <div
            className="h-full bg-blue-600 transition-all duration-150"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </motion.nav>

      {/* 移动端抽屉菜单 */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setMobileOpen(false)}
            />

            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="fixed top-20 left-4 right-4 z-50 p-6 glass-strong rounded-2xl border border-black/5 md:hidden"
            >
              <div className="space-y-3">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-mono transition-all ${
                      activeSection === item.href
                        ? "text-blue-600 bg-blue-50 font-medium border border-blue-100"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
