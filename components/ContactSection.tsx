"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, MessageSquare, Copy, Check, Phone, MapPin, Send } from "lucide-react";
import { useState } from "react";

export default function ContactSection() {
  const [copiedItem, setCopiedItem] = useState<string | null>(null);

  const socialLinks = [
    {
      icon: MessageSquare,
      label: "微信",
      value: "YunJie_Cloud",
      copyable: true,
      color: "from-green-400 to-green-600",
      bgColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      icon: Mail,
      label: "邮箱",
      value: "yunjie.cloud@example.com",
      href: "mailto:yunjie.cloud@example.com",
      copyable: true,
      color: "from-blue-400 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/zhangyunjie",
      href: "https://github.com",
      copyable: false,
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      textColor: "text-gray-700",
    },
    {
      icon: Linkedin,
      label: "掘金",
      value: "juejin.cn/@zhangyunjie",
      href: "https://juejin.cn",
      copyable: false,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-cyan-50",
      textColor: "text-cyan-600",
    },
  ];

  const contactInfo = [
    {
      icon: Phone,
      label: "联系电话",
      value: "+86 138-xxxx-xxxx",
    },
    {
      icon: MapPin,
      label: "当前位置",
      value: "重庆市 · 中国",
    },
    {
      icon: Send,
      label: "响应时间",
      value: "24小时内回复",
    },
  ];

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedItem(label);
    setTimeout(() => setCopiedItem(null), 2000);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-gray-50">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4"
          >
            <Mail className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Get In Touch</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              联系我
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            期待与您交流云计算技术，探讨职业发展机会
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* 左侧：个人介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white text-3xl font-bold mb-6">
                张
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">张云阶</h3>
              <p className="text-gray-600 mb-6">
                云计算技术应用专业学生<br />
                重庆商务职业学院
              </p>
              
              <div className="space-y-4">
                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-gray-600" />
                      </div>
                      <div>
                        <div className="text-sm text-gray-500">{item.label}</div>
                        <div className="font-medium text-gray-900">{item.value}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-6 text-white">
              <h4 className="font-bold mb-2">开放合作</h4>
              <p className="text-sm text-white/90">
                欢迎实习/全职机会、技术交流、项目合作
              </p>
            </div>
          </motion.div>

          {/* 右侧：联系方式卡片 */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => {
              const Icon = link.icon;
              const isCopied = copiedItem === link.label;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                  className="group bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-primary transition-all cursor-pointer"
                  onClick={() => {
                    if (link.copyable) {
                      handleCopy(link.value, link.label);
                    } else if (link.href) {
                      window.open(link.href, "_blank");
                    }
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className={`w-14 h-14 rounded-xl ${link.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <Icon className={`w-7 h-7 ${link.textColor}`} />
                    </div>
                    {link.copyable && (
                      <div className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                        isCopied 
                          ? "bg-green-100 text-green-600" 
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {isCopied ? "已复制" : "点击复制"}
                      </div>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold mb-2 ${link.textColor} group-hover:text-primary transition-colors`}>
                    {link.label}
                  </h3>

                  <p className="text-gray-600 text-sm break-all mb-4">
                    {link.value}
                  </p>

                  {link.copyable ? (
                    <button className={`w-full py-2.5 rounded-lg flex items-center justify-center gap-2 text-sm font-medium transition-all ${
                      isCopied
                        ? "bg-green-500 text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}>
                      {isCopied ? (
                        <>
                          <Check className="w-4 h-4" />
                          已复制到剪贴板
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          复制{link.label}
                        </>
                      )}
                    </button>
                  ) : (
                    <button className="w-full py-2.5 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 flex items-center justify-center gap-2 text-sm font-medium transition-all">
                      <Send className="w-4 h-4" />
                      访问主页
                    </button>
                  )}
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* 快速联系 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-8 md:p-12 border border-gray-200 shadow-sm"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              让我们一起创造价值
            </h3>
            <p className="text-gray-600 mb-8">
              如果您对我的技能和经验感兴趣，或者有任何合作机会，欢迎通过以上方式与我联系。
              我会在 24 小时内回复您的消息。
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:yunjie.cloud@example.com"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                发送邮件
              </motion.a>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleCopy("YunJie_Cloud", "微信")}
                className="px-8 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:border-primary hover:text-primary transition-all inline-flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-5 h-5" />
                复制微信号
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* 页脚 */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-20 pt-8 border-t border-gray-200 text-center space-y-4"
        >
          <div className="flex items-center justify-center gap-6 text-sm text-gray-600">
            <a href="#home" className="hover:text-primary transition-colors">首页</a>
            <a href="#education" className="hover:text-primary transition-colors">教育</a>
            <a href="#skills" className="hover:text-primary transition-colors">技能</a>
            <a href="#projects" className="hover:text-primary transition-colors">项目</a>
            <a href="#contact" className="hover:text-primary transition-colors">联系</a>
          </div>
          <p className="text-gray-600">
            © 2026 张云阶 (Zhang Yunjie). All rights reserved.
          </p>
          <p className="text-gray-500 text-sm">
            Built with ❤️ using Next.js, Tailwind CSS & Framer Motion
          </p>
          <div className="flex items-center justify-center gap-2 text-primary text-sm font-mono">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Cloud Native · DevOps · Full-Stack
          </div>
        </motion.div>
      </div>
    </section>
  );
}
