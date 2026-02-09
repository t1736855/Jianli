"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Moon, Sun, Github, Download, Menu, X } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "首页", href: "#home" },
    { label: "教育", href: "#education" },
    { label: "项目", href: "#projects" },
    { label: "技能", href: "#skills" },
    { label: "联系", href: "#contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? "glass-effect shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            whileHover={{ scale: 1.05 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
          >
            YJ.Cloud
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="text-gray-600 hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1, rotate: 180 }}
              transition={{ duration: 0.3 }}
              onClick={toggleTheme}
              className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </motion.button>

            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-lg glass-effect hover:bg-white/10 transition-colors"
            >
              <Github className="w-5 h-5" />
            </motion.a>

            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 rounded-lg bg-primary hover:bg-primary-dark text-white font-medium shine-effect transition-colors"
            >
              <Download className="w-4 h-4 inline-block mr-2" />
              简历下载
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg glass-effect"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden glass-effect border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block py-2 text-gray-300 hover:text-white transition-colors"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center space-x-3 pt-3 border-t border-white/10">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg glass-effect hover:bg-white/10"
              >
                {theme === "dark" ? (
                  <Sun className="w-5 h-5" />
                ) : (
                  <Moon className="w-5 h-5" />
                )}
              </button>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg glass-effect hover:bg-white/10"
              >
                <Github className="w-5 h-5" />
              </a>
              <button className="flex-1 px-4 py-2 rounded-lg bg-primary text-white font-medium">
                <Download className="w-4 h-4 inline-block mr-2" />
                简历下载
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
