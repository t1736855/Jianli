"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb, TrendingUp, Calendar, MapPin, Briefcase, GraduationCap, Code, Cloud, Server } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "专注领域",
    desc: "云原生架构、容器编排、DevOps 自动化",
    gradient: "from-blue-500 to-indigo-500",
    items: ["Kubernetes", "Docker", "微服务"],
  },
  {
    icon: Lightbulb,
    title: "技术理念",
    desc: "Infrastructure as Code，一切皆可自动化",
    gradient: "from-amber-500 to-orange-500",
    items: ["IaC", "GitOps", "自动化"],
  },
  {
    icon: TrendingUp,
    title: "成长方向",
    desc: "从运维到架构，从工具到平台",
    gradient: "from-emerald-500 to-teal-500",
    items: ["架构设计", "平台工程", "SRE"],
  },
];

const quickFacts = [
  { icon: GraduationCap, label: "学历", value: "大专在读" },
  { icon: Calendar, label: "经验", value: "2年+" },
  { icon: MapPin, label: "坐标", value: "重庆" },
  { icon: Briefcase, label: "状态", value: "求职中" },
];

const techStack = [
  { icon: Cloud, name: "云平台", items: ["AWS", "阿里云", "华为云"] },
  { icon: Server, name: "基础设施", items: ["K8s", "Docker", "Terraform"] },
  { icon: Code, name: "开发", items: ["Python", "Go", "TypeScript"] },
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

export default function AboutSection() {
  return (
    <section id="about" className="section relative overflow-hidden">
      {/* 装饰背景 */}
      <div className="blob-1" style={{ top: "-10%", left: "-10%" }} />
      <div className="blob-2" style={{ bottom: "-10%", right: "-10%" }} />

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
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            <span className="gradient-text-accent">关于我</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">热爱技术，追求卓越，用代码构建更高效的基础设施</p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 mb-16">
          {/* 主要介绍 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-3 card-flat p-5 sm:p-8 hover-glow"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 mb-6 sm:mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-20 h-20 rounded-2xl bg-gradient-accent text-white flex items-center justify-center text-3xl font-display font-semibold flex-shrink-0 shadow-xl"
              >
                张
              </motion.div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-2">张云阶</h3>
                <p className="text-muted-foreground text-base">云计算技术应用 · 重庆商务职业学院</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                  <span className="px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">云计算</span>
                  <span className="px-3 py-1 rounded-full bg-purple-500/10 text-purple-600 text-xs font-medium">DevOps</span>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 text-xs font-medium">云原生</span>
                </div>
              </div>
            </div>

            <div className="space-y-5 text-muted-foreground text-base leading-relaxed">
              <p>
                我是一名热爱云计算技术的在校学生，专注于云原生架构和 DevOps 领域。从入学开始，我就对容器化和微服务架构产生了浓厚的兴趣，
                并通过自学和实践不断提升自己的技术能力。
              </p>
              <p>
                在校期间，我积极参与各类技术项目和竞赛，积累了丰富的实战经验。从搭建第一个 Kubernetes 集群，到设计生产级的微服务架构，
                再到开发自动化运维工具，每一步都让我对云原生技术有了更深入的理解。
              </p>
              <p>
                我相信 Infrastructure as Code 的理念，致力于通过自动化和工具化来提升开发和运维效率。
                目前正在寻找云计算/DevOps 相关的实习或全职机会，希望能将所学知识应用到实际生产环境中。
              </p>
            </div>

            {/* 快速信息 */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-8 border-t border-border"
            >
              {quickFacts.map((fact) => (
                <motion.div
                  key={fact.label}
                  variants={itemVariants}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="text-center p-4 rounded-xl bg-gradient-to-br from-muted/50 to-muted hover:from-accent/5 hover:to-accent/10 transition-all"
                >
                  <fact.icon className="w-6 h-6 text-accent mx-auto mb-2" />
                  <div className="text-lg font-semibold text-foreground">{fact.value}</div>
                  <div className="text-xs text-muted-foreground">{fact.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* 右侧卡片 */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="lg:col-span-2 space-y-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.02 }}
                className="card-glow p-6"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-foreground mb-1">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">{item.desc}</p>
                    <div className="flex flex-wrap gap-2">
                      {item.items.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 rounded-full bg-muted text-xs text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 名言卡片 */}
            <motion.div
              variants={itemVariants}
              className="card-flat p-6 bg-foreground text-white noise hover-glow"
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-xs text-white/60 font-mono uppercase tracking-wider">技术信条</span>
              </div>
              <blockquote className="text-base text-white/90 italic leading-relaxed">
                The best infrastructure is the one you don&apos;t have to think about.
              </blockquote>
              <p className="text-xs text-white/40 mt-3">— 我的技术理念</p>
            </motion.div>
          </motion.div>
        </div>

        {/* 技术栈概览 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-8"
        >
          <h3 className="text-xl font-semibold text-foreground mb-6 text-center">技术栈概览</h3>
          <div className="grid md:grid-cols-3 gap-5">
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="card p-6 text-center hover-glow"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mx-auto mb-4 shadow-xl">
                  <stack.icon className="w-7 h-7 text-white" />
                </div>
                <h4 className="text-base font-semibold text-foreground mb-3">{stack.name}</h4>
                <div className="flex flex-wrap justify-center gap-2">
                  {stack.items.map((item) => (
                    <span key={item} className="px-3 py-1 rounded-full bg-muted text-sm text-muted-foreground">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
