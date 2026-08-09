"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Container, Code, Server, Database, GitBranch, Shield, Gauge, Zap, Rocket, Bug, Workflow, Terminal, Globe, Lock } from "lucide-react";

const categories = [
  {
    icon: Cloud, title: "云平台", subtitle: "Cloud Platforms",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    skills: [
      { name: "AWS", level: 85 },
      { name: "阿里云", level: 90 },
      { name: "华为云", level: 80 },
      { name: "腾讯云", level: 75 },
    ],
  },
  {
    icon: Container, title: "容器编排", subtitle: "Container Orchestration",
    gradient: "from-indigo-500 to-blue-500",
    bgGradient: "from-indigo-500/10 to-blue-500/10",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Helm", level: 85 },
      { name: "Istio", level: 78 },
    ],
  },
  {
    icon: GitBranch, title: "DevOps", subtitle: "CI/CD Pipeline",
    gradient: "from-orange-500 to-red-500",
    bgGradient: "from-orange-500/10 to-red-500/10",
    skills: [
      { name: "Jenkins", level: 85 },
      { name: "GitLab CI", level: 88 },
      { name: "ArgoCD", level: 80 },
      { name: "GitHub Actions", level: 82 },
    ],
  },
  {
    icon: Code, title: "编程语言", subtitle: "Programming",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-500/10 to-teal-500/10",
    skills: [
      { name: "Python", level: 90 },
      { name: "Go", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Shell/Bash", level: 88 },
    ],
  },
  {
    icon: Database, title: "数据库", subtitle: "Databases",
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-500/10 to-pink-500/10",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    icon: Gauge, title: "监控告警", subtitle: "Monitoring",
    gradient: "from-amber-500 to-yellow-500",
    bgGradient: "from-amber-500/10 to-yellow-500/10",
    skills: [
      { name: "Prometheus", level: 88 },
      { name: "Grafana", level: 90 },
      { name: "ELK Stack", level: 82 },
      { name: "Alertmanager", level: 85 },
    ],
  },
  {
    icon: Server, title: "基础设施", subtitle: "Infrastructure",
    gradient: "from-slate-500 to-gray-500",
    bgGradient: "from-slate-500/10 to-gray-500/10",
    skills: [
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 88 },
      { name: "Linux", level: 92 },
      { name: "Nginx", level: 88 },
    ],
  },
  {
    icon: Shield, title: "安全", subtitle: "Security",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-500/10 to-rose-500/10",
    skills: [
      { name: "网络安全", level: 80 },
      { name: "SSL/TLS", level: 85 },
      { name: "RBAC", level: 82 },
      { name: "Vault", level: 75 },
    ],
  },
];

const expertise = [
  { icon: Rocket, title: "云原生架构", desc: "微服务架构设计，服务网格、API 网关、服务发现与治理", gradient: "from-blue-500 to-indigo-500" },
  { icon: Zap, title: "性能优化", desc: "容器镜像精简、数据库查询优化、缓存策略设计", gradient: "from-amber-500 to-orange-500" },
  { icon: Workflow, title: "自动化运维", desc: "CI/CD 流水线，代码到生产全自动化，GitOps 工作流", gradient: "from-emerald-500 to-teal-500" },
  { icon: Bug, title: "问题排查", desc: "丰富的线上问题排查经验，日志分析、链路追踪", gradient: "from-red-500 to-pink-500" },
  { icon: Globe, title: "多云管理", desc: "跨云平台资源编排，统一管理 AWS、阿里云、华为云", gradient: "from-purple-500 to-violet-500" },
  { icon: Lock, title: "安全合规", desc: "容器安全扫描、密钥管理、RBAC 权限体系设计", gradient: "from-cyan-500 to-blue-500" },
];

const certifications = [
  { name: "华为 HCIA-Cloud Computing", year: "2024", issuer: "华为" },
  { name: "AWS Cloud Practitioner", year: "2024", issuer: "Amazon" },
  { name: "CKA (Kubernetes Administrator)", year: "2025", issuer: "CNCF" },
  { name: "Linux Professional Institute", year: "2024", issuer: "LPI" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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

export default function SkillsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section bg-muted/30 relative overflow-hidden">
      {/* 装饰性背景 */}
      <div className="blob-1" style={{ bottom: "-10%", left: "-10%" }} />
      <div className="blob-3" style={{ top: "10%", right: "-5%" }} />

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
            <Code className="w-3.5 h-3.5" />
            Skills
          </div>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            <span className="gradient-text-accent">技能专长</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">全面的云计算技术栈，从基础设施到应用层</p>
        </motion.div>

        {/* 技能网格 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16"
        >
          {categories.map((cat, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                onHoverStart={() => setActive(i)}
                className="group"
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={`h-full rounded-xl p-6 border transition-all duration-400 cursor-pointer relative overflow-hidden ${
                    isActive
                      ? "bg-white border-accent/30 shadow-xl"
                      : "bg-white/80 border-transparent hover:bg-white hover:border-border hover:shadow-lg"
                  }`}
                >
                  {/* 渐变背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${cat.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* 渐变顶部条 */}
                  {isActive && (
                    <motion.div
                      layoutId="skill-gradient"
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${cat.gradient}`}
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                      style={{ boxShadow: "0 0 10px rgba(37, 99, 235, 0.4)" }}
                    />
                  )}

                  {/* 图标 */}
                  <div className={`relative w-12 h-12 rounded-xl bg-gradient-to-br ${cat.gradient} flex items-center justify-center mb-5 text-white shadow-lg`}>
                    <cat.icon className="w-6 h-6" />
                  </div>

                  <h3 className="relative text-base font-semibold text-foreground mb-1">{cat.title}</h3>
                  <p className="relative text-xs text-muted-foreground font-mono mb-5">{cat.subtitle}</p>

                  {/* 技能进度条 */}
                  <div className="relative space-y-3">
                    {cat.skills.map((skill, si) => (
                      <div key={si}>
                        <div className="flex items-center justify-between mb-1.5">
                          <span className="text-sm text-muted-foreground">{skill.name}</span>
                          <span className="text-xs font-mono text-foreground/50">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: si * 0.08, ease: "easeOut" }}
                            className={`h-full rounded-full bg-gradient-to-r ${cat.gradient}`}
                            style={{ boxShadow: "0 0 8px rgba(37, 99, 235, 0.3)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 活跃指示器 */}
                  {isActive && (
                    <motion.div
                      layoutId="skill-dot"
                      className="relative mt-5 flex items-center gap-2 text-accent"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    >
                      <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                      <span className="text-xs font-mono">Active</span>
                    </motion.div>
                  )}
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 综合能力 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card-flat p-8 mb-16 hover-glow"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8">综合能力</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {expertise.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -6, scale: 1.03 }}
                className="flex items-start gap-4 p-5 rounded-xl hover:bg-muted/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 text-white shadow-lg`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-semibold text-foreground mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 认证资质 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="card-gradient p-8 hover-glow"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Shield className="w-6 h-6 text-accent" />
            认证资质
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {certifications.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="p-5 rounded-xl bg-white border border-border/50 hover:border-accent/30 transition-all hover:shadow-lg"
              >
                <div className="text-sm text-accent font-mono mb-3">{cert.year}</div>
                <h4 className="text-base font-semibold text-foreground mb-2">{cert.name}</h4>
                <p className="text-sm text-muted-foreground">{cert.issuer}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
