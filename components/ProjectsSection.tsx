"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, TrendingUp, CheckCircle2, ArrowRight, Star, GitBranch } from "lucide-react";

const projects = [
  {
    title: "Kubernetes 高可用微服务平台",
    subtitle: "HA Microservices on K8s",
    period: "2024.03 - 2024.08",
    team: "4人团队",
    role: "架构设计",
    status: "已上线",
    stars: 12,
    description: "校园私有云环境下，设计并实现基于 Kubernetes 的生产级微服务部署平台。集成 Prometheus 监控、Grafana 可视化、ELK 日志系统。",
    background: "校内项目部署效率低，缺乏统一容器化平台，每次部署需要手动操作，耗时且易出错。",
    solution: ["Kubernetes + Helm 统一容器编排", "Prometheus + Grafana 全方位监控", "HPA 自动扩缩容策略", "Istio 服务网格治理"],
    achievements: ["部署效率提升 80%", "服务可用性 99.9%", "资源利用率提升 40%", "支撑 15+ 微服务"],
    tech: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana", "Go", "Istio"],
    metrics: [{ label: "服务", value: "15+" }, { label: "日请求", value: "10K+" }, { label: "可用性", value: "99.9%" }],
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    title: "Serverless 自动化工作流",
    subtitle: "Serverless Automation",
    period: "2023.11 - 2024.02",
    team: "独立项目",
    role: "全栈开发",
    status: "已上线",
    stars: 8,
    description: "基于阿里云函数计算开发的自动化数据处理系统。事件驱动架构，自动处理图片压缩、视频转码、数据同步。",
    background: "传统服务器模式下媒体处理资源消耗大、成本高，空闲时资源浪费严重。",
    solution: ["Serverless 架构，按需付费", "事件驱动，OSS 触发器自动启动", "函数编排支持条件分支", "错误重试与死信队列"],
    achievements: ["计算成本降低 60%", "处理速度提升 3 倍", "零运维成本", "日处理 1000+ 文件"],
    tech: ["Node.js", "Aliyun FC", "OSS", "API Gateway", "TypeScript", "Redis"],
    metrics: [{ label: "成本节省", value: "60%" }, { label: "日处理", value: "1000+" }, { label: "响应", value: "<500ms" }],
    gradient: "from-amber-500 to-orange-600",
  },
  {
    title: "Terraform 多云资源管理",
    subtitle: "Multi-Cloud IaC Platform",
    period: "2023.09 - 2023.12",
    team: "3人团队",
    role: "IaC 设计",
    status: "已完成",
    stars: 15,
    description: "使用 Terraform 构建的跨云平台资源管理系统，支持 AWS、阿里云、华为云统一管理。模块化设计，可复用基础设施代码。",
    background: "多云环境资源管理混乱，手动配置易出错，环境不一致导致频繁故障。",
    solution: ["Terraform 可复用基础设施代码", "统一模块化架构，多云部署", "GitLab CI 自动化审批流程", "Ansible 配置管理联动"],
    achievements: ["部署时间天级降至小时级", "环境一致性 100%", "快速创建多环境", "管理 50+ 云资源"],
    tech: ["Terraform", "Ansible", "GitLab CI", "AWS", "Aliyun", "Python", "HCL"],
    metrics: [{ label: "资源", value: "50+" }, { label: "云平台", value: "3" }, { label: "部署速度", value: "10x" }],
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    title: "智能运维监控系统",
    subtitle: "Intelligent DevOps Monitoring",
    period: "2024.05 - 至今",
    team: "2人团队",
    role: "后端开发",
    status: "开发中",
    stars: 6,
    description: "基于 Prometheus + Grafana + Alertmanager 构建的智能运维监控系统。实时监控、智能告警、故障自愈。支持自定义 Dashboard。",
    background: "缺乏统一监控体系，故障发现不及时，告警泛滥导致告警疲劳。",
    solution: ["Prometheus 采集多维指标", "Grafana 多维度监控大屏", "Alertmanager 分级告警路由", "Webhook 集成企业微信/钉钉"],
    achievements: ["监控覆盖率 100%", "故障发现缩短 90%", "误告率降低 70%", "历史数据保留 30 天"],
    tech: ["Prometheus", "Grafana", "Alertmanager", "Go", "Webhook", "Docker"],
    metrics: [{ label: "指标", value: "30+" }, { label: "响应", value: "<2min" }, { label: "误告降低", value: "70%" }],
    gradient: "from-purple-500 to-pink-600",
  },
  {
    title: "容器镜像优化工具",
    subtitle: "Container Image Optimizer",
    period: "2024.08 - 2024.10",
    team: "独立项目",
    role: "工具开发",
    status: "开源",
    stars: 23,
    description: "自动化分析和优化 Docker 镜像大小的 CLI 工具。支持多阶段构建建议、无用层检测、基础镜像推荐。",
    background: "团队 Docker 镜像普遍偏大，影响部署速度和存储成本。",
    solution: ["镜像层分析与可视化", "多阶段构建自动优化", "无用依赖检测", "最佳基础镜像推荐"],
    achievements: ["平均镜像缩小 65%", "部署速度提升 3 倍", "节省存储 40%", "GitHub 23 Stars"],
    tech: ["Go", "Docker", "OCI", "CLI", "GitHub Actions"],
    metrics: [{ label: "镜像缩小", value: "65%" }, { label: "GitHub Stars", value: "23" }, { label: "用户", value: "200+" }],
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "校园云盘系统",
    subtitle: "Campus Cloud Storage",
    period: "2023.06 - 2023.09",
    team: "5人团队",
    role: "后端开发",
    status: "已上线",
    stars: 10,
    description: "面向校园的文件存储与分享系统。支持大文件分片上传、在线预览、权限管理、分享链接。基于 MinIO 对象存储。",
    background: "校内文件分享依赖U盘和微信，不便管理且安全性差。",
    solution: ["MinIO 对象存储后端", "分片上传与断点续传", "RBAC 权限管理体系", "文件在线预览服务"],
    achievements: ["注册用户 500+", "日活跃用户 100+", "存储文件 10K+", "平均上传速度 50MB/s"],
    tech: ["Python", "FastAPI", "MinIO", "PostgreSQL", "Redis", "Vue.js"],
    metrics: [{ label: "用户", value: "500+" }, { label: "文件", value: "10K+" }, { label: "在线率", value: "99.5%" }],
    gradient: "from-rose-500 to-red-600",
  },
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

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section relative overflow-hidden">
      <div className="blob-2" style={{ top: "20%", right: "-10%" }} />
      <div className="blob-3" style={{ bottom: "10%", left: "-5%" }} />

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
            <TrendingUp className="w-3.5 h-3.5" />
            Projects
          </div>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            <span className="gradient-text-accent">项目经历</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">从需求分析到生产部署的完整项目经验</p>
        </motion.div>

        {/* 项目统计 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-16"
        >
          {[
            { label: "项目总数", value: "8+", icon: "📦" },
            { label: "GitHub Stars", value: "74+", icon: "⭐" },
            { label: "团队协作", value: "4 个项目", icon: "👥" },
            { label: "技术栈", value: "15+", icon: "🔧" },
          ].map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.05 }}
              className="card p-5 text-center hover-glow"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-xl font-semibold text-foreground stat-number">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 项目卡片 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          {projects.map((project, index) => {
            const isExpanded = expanded === index;
            return (
              <motion.div key={index} variants={itemVariants}>
                <div className="card-flat overflow-hidden hover-glow">
                  {/* 渐变顶部条 */}
                  <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />

                  <div className="p-8">
                    {/* 头部 */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-5">
                      <div className="flex-1">
                        <div className="flex items-start gap-4 mb-3">
                          <motion.div
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            className={`w-12 h-12 rounded-xl bg-gradient-to-br ${project.gradient} text-white flex items-center justify-center text-base font-semibold flex-shrink-0 shadow-lg`}
                          >
                            {index + 1}
                          </motion.div>
                          <div>
                            <div className="flex items-center gap-3 flex-wrap">
                              <h3 className="text-xl md:text-2xl font-semibold text-foreground">{project.title}</h3>
                              <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                                project.status === "已上线" ? "bg-emerald-50 text-emerald-600" :
                                project.status === "开发中" ? "bg-amber-50 text-amber-600" :
                                project.status === "开源" ? "bg-blue-50 text-blue-600" :
                                "bg-muted text-muted-foreground"
                              }`}>
                                {project.status}
                              </span>
                            </div>
                            <p className="text-muted-foreground text-base">{project.subtitle}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-3 ml-16">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
                            <Calendar className="w-3.5 h-3.5" /> {project.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
                            <Users className="w-3.5 h-3.5" /> {project.team}
                          </span>
                          <span className="px-3 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium">{project.role}</span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-sm">
                            <Star className="w-3.5 h-3.5" /> {project.stars} stars
                          </span>
                        </div>
                      </div>
                      <div className="flex lg:flex-col gap-4">
                        {project.metrics.map((m, i) => (
                          <div key={i} className="text-center lg:text-right">
                            <div className="text-lg font-semibold gradient-text-accent stat-number">{m.value}</div>
                            <div className="text-xs text-muted-foreground">{m.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <p className="text-muted-foreground text-base leading-relaxed mb-5 ml-16">{project.description}</p>

                    {/* 可展开详情 */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="grid md:grid-cols-2 gap-5 mb-5 pt-5 border-t border-border ml-16">
                        <div>
                          <h4 className="text-base font-semibold text-foreground mb-3">项目背景</h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">{project.background}</p>
                        </div>
                        <div>
                          <h4 className="text-base font-semibold text-foreground mb-3">解决方案</h4>
                          <ul className="space-y-2">
                            {project.solution.map((s, i) => (
                              <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                                {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      <div className="ml-16 mb-5">
                        <h4 className="text-base font-semibold text-foreground mb-3 flex items-center gap-2">
                          <TrendingUp className="w-5 h-5 text-accent" /> 项目成果
                        </h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.achievements.map((a, i) => (
                            <div key={i} className="flex items-center gap-3 p-3 rounded-xl bg-muted/50 text-sm text-muted-foreground">
                              <div className="w-6 h-6 rounded-full bg-gradient-accent flex items-center justify-center flex-shrink-0">
                                <span className="text-white text-xs">✓</span>
                              </div>
                              {a}
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>

                    {/* 技术标签 + 操作 */}
                    <div className="flex flex-wrap items-center gap-3 pt-5 border-t border-border ml-16">
                      {project.tech.map((t, i) => (
                        <span key={i} className="tag">
                          {t}
                        </span>
                      ))}
                      <div className="flex-1" />
                      <button
                        onClick={() => setExpanded(isExpanded ? null : index)}
                        className="px-4 py-2 rounded-lg text-sm font-mono text-accent hover:bg-accent/5 transition-colors inline-flex items-center gap-1.5"
                      >
                        {isExpanded ? "收起" : "详情"}
                        <ArrowRight className={`w-4 h-4 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                      </button>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <Github className="w-5 h-5" />
                      </a>
                      <a href="#" className="p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors">
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
