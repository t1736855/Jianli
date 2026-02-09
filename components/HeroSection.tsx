"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { MapPin, Mail, Award, Briefcase, Code2, Sparkles } from "lucide-react";
import { useRef } from "react";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const achievements = [
    { icon: Award, label: "国家励志奖学金", value: "2024" },
    { icon: Briefcase, label: "项目经验", value: "8+" },
    { icon: Code2, label: "技术栈", value: "15+" },
  ];

  return (
    <section
      ref={sectionRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* 动态背景装饰 */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-40 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary/3 rounded-full blur-3xl" />
      </motion.div>

      {/* 网格背景 */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        {/* 主内容 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-8"
        >
          {/* 标签 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">
                Cloud Computing Engineer
              </span>
            </div>
          </motion.div>

          {/* 姓名 - 居中 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-8xl font-bold leading-tight">
              <span className="block text-gray-900">张云阶</span>
              <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                Zhang Yunjie
              </span>
            </h1>
          </motion.div>

          {/* 打字机效果 - 居中 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 min-h-[80px] font-medium flex items-center justify-center text-center"
          >
            <TypeAnimation
              sequence={[
                "云原生架构师 in training",
                2000,
                "DevOps 工程实践者",
                2000,
                "全栈开发工程师",
                2000,
                "Kubernetes 技术专家",
                2000,
                "云计算解决方案设计师",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          {/* 详细介绍 - 居中 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="space-y-4 max-w-3xl mx-auto text-center"
          >
            <p className="text-gray-600 text-lg leading-relaxed">
              🚀 <strong>深耕云原生领域</strong>的准工程师，专注于容器化、微服务架构与自动化运维。
              热衷于探索 Kubernetes 集群优化、Serverless 架构设计，以及 CI/CD 流水线构建。
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              💡 擅长将<strong>复杂的基础设施逻辑</strong>转化为高效、稳定、可扩展的生产力工具。
              在云平台架构设计、容器编排、监控告警等方面拥有丰富的实践经验。
            </p>
          </motion.div>

          {/* 联系方式 - 居中 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-gray-600"
          >
            <div className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Location</div>
                <div className="font-medium">中国 · 重庆</div>
              </div>
            </div>
            <div className="flex items-center gap-2 group">
              <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Email</div>
                <div className="font-medium">yunjie.cloud@example.com</div>
              </div>
            </div>
          </motion.div>

          {/* 成就统计 - 居中 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="grid grid-cols-3 gap-4 max-w-2xl mx-auto pt-4"
          >
            {achievements.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="p-4 rounded-xl bg-white border border-gray-200 shadow-sm hover:shadow-md transition-all"
                >
                  <Icon className="w-6 h-6 text-primary mb-2 mx-auto" />
                  <div className="text-2xl font-bold text-gray-900 text-center">
                    {item.value}
                  </div>
                  <div className="text-sm text-gray-600 text-center">{item.label}</div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* CTA 按钮 - 居中 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-4 justify-center pt-4"
          >
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-primary to-accent text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              查看项目作品
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-white border-2 border-gray-200 text-gray-900 font-semibold hover:border-primary hover:text-primary transition-all"
            >
              联系我
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* 滚动提示 */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400"
        >
          <span className="text-sm">向下滚动探索更多</span>
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1.5 h-1.5 bg-gray-400 rounded-full mx-auto"
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
