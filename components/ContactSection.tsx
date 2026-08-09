"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Github, MessageSquare, Copy, Check, Phone, MapPin, Send, ExternalLink, ArrowUp, Clock, Coffee, Heart } from "lucide-react";

const socialLinks = [
  { icon: MessageSquare, label: "微信", value: "YunJie_Cloud", copyable: true, desc: "扫码或搜索添加", gradient: "from-green-500 to-emerald-500" },
  { icon: Mail, label: "邮箱", value: "yunjie.cloud@example.com", href: "mailto:yunjie.cloud@example.com", copyable: true, desc: "24h 内回复", gradient: "from-blue-500 to-indigo-500" },
  { icon: Github, label: "GitHub", value: "github.com/zhangyunjie", href: "https://github.com", copyable: false, desc: "开源项目与贡献", gradient: "from-gray-700 to-gray-900" },
  { icon: ExternalLink, label: "掘金", value: "juejin.cn/@zhangyunjie", href: "https://juejin.cn", copyable: false, desc: "技术博客文章", gradient: "from-blue-400 to-blue-600" },
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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

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
    <section id="contact" className="section bg-muted/30 relative overflow-hidden">
      <div className="blob-1" style={{ bottom: "-15%", right: "-10%" }} />
      <div className="blob-3" style={{ top: "10%", left: "-5%" }} />

      {/* 网格背景 */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-main relative z-10">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="badge mb-4">
            <Mail className="w-3.5 h-3.5" />
            Contact
          </div>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            <span className="gradient-text-accent">联系我</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">期待与您交流云计算技术，探讨职业发展机会</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* 个人卡片 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-1 space-y-5"
          >
            <div className="card-flat p-8 hover-glow">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-accent text-white flex items-center justify-center text-3xl font-display font-semibold mb-5 shadow-xl"
              >
                张
              </motion.div>
              <h3 className="text-2xl font-semibold text-foreground mb-2">张云阶</h3>
              <p className="text-muted-foreground text-base mb-2">云计算技术应用</p>
              <p className="text-muted-foreground text-base mb-6">重庆商务职业学院</p>
              <div className="space-y-4">
                {contactInfo.map((item) => (
                  <motion.div
                    key={item.label}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-4"
                  >
                    <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-lg">
                      <item.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground font-mono">{item.label}</div>
                      <div className="text-base text-foreground font-medium">{item.value}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="card-flat p-6 bg-foreground text-white noise hover-glow">
              <div className="flex items-center gap-3 mb-3">
                <Coffee className="w-5 h-5" />
                <h4 className="font-semibold text-base">开放合作</h4>
              </div>
              <p className="text-sm text-white/60 leading-relaxed">
                欢迎实习/全职、技术交流、项目合作、开源协作
              </p>
            </div>

            <div className="card-flat p-6 hover-glow">
              <div className="flex items-center gap-3 mb-4">
                <Heart className="w-5 h-5 text-red-500" />
                <h4 className="font-semibold text-base text-foreground">兴趣爱好</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {["开源社区", "技术写作", "云计算", "容器化", "自动化", "Linux"].map((hobby) => (
                  <span key={hobby} className="px-3 py-1.5 rounded-full bg-muted text-sm text-muted-foreground hover:bg-accent hover:text-white transition-colors cursor-default">
                    {hobby}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 社交链接 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 grid md:grid-cols-2 gap-5"
          >
            {socialLinks.map((link, i) => {
              const isCopied = copiedItem === link.label;
              return (
                <motion.div
                  key={i}
                  variants={itemVariants}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="card-glow p-6 cursor-pointer"
                  onClick={() => {
                    if (link.copyable) handleCopy(link.value, link.label);
                    else if (link.href) window.open(link.href, "_blank");
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-lg`}>
                      <link.icon className="w-6 h-6 text-white" />
                    </div>
                    {link.copyable && (
                      <span className={`px-3 py-1 rounded-full text-xs font-mono transition-colors ${
                        isCopied ? "bg-emerald-50 text-emerald-600" : "bg-muted text-muted-foreground"
                      }`}>
                        {isCopied ? "已复制" : "点击复制"}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{link.label}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{link.desc}</p>
                  <p className="text-sm text-muted-foreground font-mono break-all mb-4">{link.value}</p>
                  {link.copyable ? (
                    <button className={`w-full py-3 rounded-xl flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                      isCopied ? "bg-emerald-50 text-emerald-600" : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}>
                      {isCopied ? <><Check className="w-4 h-4" /> 已复制</> : <><Copy className="w-4 h-4" /> 复制</>}
                    </button>
                  ) : (
                    <button className="w-full py-3 rounded-xl bg-muted text-muted-foreground hover:bg-muted/80 flex items-center justify-center gap-2 text-sm font-medium transition-all">
                      <ExternalLink className="w-4 h-4" /> 访问
                    </button>
                  )}
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* 常见问题 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 text-center">常见问题</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {faq.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="card p-6 hover-glow"
              >
                <h4 className="text-base font-semibold text-foreground mb-3">{item.q}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card-flat p-10 md:p-14 text-center mb-16 bg-foreground text-white noise relative overflow-hidden hover-glow"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/90" />
          <div className="relative z-10">
            <h3 className="heading-display text-3xl md:text-4xl mb-4">让我们一起创造价值</h3>
            <p className="text-white/60 text-base mb-10 max-w-lg mx-auto">
              如果您对我的技能和经验感兴趣，欢迎随时联系我。<br />
              我通常在 24 小时内回复。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:yunjie.cloud@example.com"
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-white text-foreground font-medium text-base inline-flex items-center justify-center gap-2 hover:bg-white/90 transition-colors"
              >
                <Mail className="w-5 h-5" /> 发送邮件
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.1, y: -4 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy("YunJie_Cloud", "微信")}
                className="px-10 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium text-base hover:bg-white/20 transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" /> 复制微信号
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Footer */}
        <footer className="pt-10 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <span className="text-xl font-display font-semibold">
                YJ<span className="gradient-text-accent">.</span>
              </span>
              <span className="text-border">|</span>
              <span className="text-sm text-muted-foreground">&copy; 2026 张云阶</span>
            </div>
            <div className="flex items-center gap-5 text-sm">
              {["首页", "教育", "技能", "项目", "联系"].map((label, i) => (
                <a
                  key={i}
                  href={`#${["home", "education", "skills", "projects", "contact"][i]}`}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                Next.js + Tailwind + Framer Motion + GSAP
              </span>
              <motion.button
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="p-3 rounded-xl border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </footer>
      </div>
    </section>
  );
}
