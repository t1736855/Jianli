"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MessageSquare, Copy, Check, Phone, MapPin, Send, ExternalLink, ArrowUp, Clock, Coffee, Heart } from "lucide-react";

const socialLinks = [
  { icon: MessageSquare, label: "微信", value: "YunJie_Cloud", copyable: true, desc: "扫码或搜索添加" },
  { icon: Mail, label: "邮箱", value: "yunjie.cloud@example.com", href: "mailto:yunjie.cloud@example.com", copyable: true, desc: "24h 内回复" },
  { icon: Github, label: "GitHub", value: "github.com/zhangyunjie", href: "https://github.com", copyable: false, desc: "开源项目与贡献" },
  { icon: ExternalLink, label: "掘金", value: "juejin.cn/@zhangyunjie", href: "https://juejin.cn", copyable: false, desc: "技术博客文章" },
];

const contactInfo = [
  { icon: Phone, label: "电话", value: "+86 138-xxxx-xxxx" },
  { icon: MapPin, label: "位置", value: "重庆市 · 中国" },
  { icon: Send, label: "响应", value: "24h 内回复" },
  { icon: Clock, label: "时区", value: "UTC+8 (CST)" },
];

const faq = [
  { q: "可以远程工作吗？", a: "可以，支持远程协作，熟练使用 Slack、飞书、Zoom 等工具。" },
  { q: "接受实习机会吗？", a: "是的，正在寻找云计算/DevOps 相关的实习或全职机会。" },
  { q: "可以技术交流吗？", a: "非常欢迎！我热爱技术交流，可以通过微信或邮件联系我。" },
];

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact" className="section relative border-t border-white/5">
      <div className="container-main relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="badge mb-3">
            <Mail className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-foreground mb-3 tracking-tight">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            期待与您交流云计算技术，探讨职业发展机会
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* 个人联系方式卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-1 space-y-4"
          >
            <div className="card p-6">
              <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 text-blue-400 flex items-center justify-center text-xl font-bold mb-4">
                李
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">李洪斌</h3>
              <p className="text-xs font-mono text-muted-foreground mb-4">云计算技术应用 · 重庆商务职业学院</p>

              <div className="space-y-3 pt-3 border-t border-white/5">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                      <item.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[10px] text-muted-foreground font-mono">{item.label}</div>
                      <div className="text-xs text-foreground font-medium">{item.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card p-5 bg-gradient-to-br from-blue-950/20 via-zinc-900 to-zinc-900 border-blue-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Coffee className="w-4 h-4 text-blue-400" />
                <h4 className="font-bold text-xs text-foreground">开放合作</h4>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                欢迎实习/全职、技术交流、项目合作、开源协作
              </p>
            </div>
          </motion.div>

          {/* 社交链接 */}
          <div className="lg:col-span-2 grid sm:grid-cols-2 gap-4">
            {socialLinks.map((link, i) => {
              const isCopied = copiedItem === link.label;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="card p-5 flex flex-col justify-between"
                  onClick={() => {
                    if (link.copyable) handleCopy(link.value, link.label);
                    else if (link.href) window.open(link.href, "_blank");
                  }}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center">
                        <link.icon className="w-4.5 h-4.5" />
                      </div>
                      {link.copyable && (
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                          isCopied ? "bg-emerald-500/20 text-emerald-400" : "bg-white/5 text-zinc-400"
                        }`}>
                          {isCopied ? "已复制" : "点击复制"}
                        </span>
                      )}
                    </div>
                    <h3 className="text-sm font-bold text-foreground mb-1">{link.label}</h3>
                    <p className="text-xs text-muted-foreground mb-2">{link.desc}</p>
                    <p className="text-xs font-mono text-zinc-300 break-all mb-4">{link.value}</p>
                  </div>

                  {link.copyable ? (
                    <button className={`w-full py-2 rounded-lg flex items-center justify-center gap-1.5 text-xs font-mono transition-all ${
                      isCopied ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" : "bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10"
                    }`}>
                      {isCopied ? <><Check className="w-3.5 h-3.5" /> 已复制</> : <><Copy className="w-3.5 h-3.5" /> 复制</>}
                    </button>
                  ) : (
                    <button className="w-full py-2 rounded-lg bg-white/5 text-zinc-300 hover:bg-white/10 border border-white/10 flex items-center justify-center gap-1.5 text-xs font-mono transition-all">
                      <ExternalLink className="w-3.5 h-3.5" /> 访问
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 常见问题 */}
        <div className="mb-12">
          <h3 className="text-sm font-mono text-zinc-400 uppercase tracking-wider mb-6 text-center">常见问题</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="card p-5"
              >
                <h4 className="text-xs font-bold text-foreground mb-2">{item.q}</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 底部 Footer */}
        <footer className="pt-8 border-t border-white/5">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="text-sm font-mono font-bold">
                YJ<span className="text-blue-500">.</span>
              </span>
              <span className="text-zinc-700">|</span>
              <span className="text-xs text-muted-foreground font-mono">&copy; 2026 张云阶</span>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              {["首页", "教育", "技能", "项目", "联系"].map((label, i) => (
                <a
                  key={i}
                  href={`#${["home", "education", "skills", "projects", "contact"][i]}`}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <span className="text-[10px] text-zinc-500 font-mono">
                Next.js + Tailwind + Framer Motion + GSAP
              </span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-2 rounded-lg border border-white/10 text-zinc-400 hover:text-white hover:bg-white/5 transition-colors"
              >
                <ArrowUp className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
