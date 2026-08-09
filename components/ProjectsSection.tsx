"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, TrendingUp, CheckCircle2, ArrowRight, Star } from "lucide-react";

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
  },
];

export default function ProjectsSection() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="projects" className="section relative border-t border-white/5">
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
            <TrendingUp className="w-3.5 h-3.5" />
            Projects
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-foreground mb-3 tracking-tight">
            <span className="gradient-text">项目经历</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-sm sm:text-base">
            从需求分析到生产部署的完整项目经验
          </p>
        </motion.div>

        {/* 项目统计数据 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {[
            { label: "项目总数", value: "8+", icon: "📦" },
            { label: "GitHub Stars", value: "74+", icon: "⭐" },
            { label: "团队协作", value: "4 个项目", icon: "👥" },
            { label: "技术栈", value: "15+", icon: "🔧" },
          ].map((stat) => (
            <div key={stat.label} className="card p-4 text-center">
              <div className="text-2xl mb-1">{stat.icon}</div>
              <div className="text-lg font-bold text-foreground stat-number">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* 项目列表 */}
        <div className="space-y-6">
          {projects.map((project, index) => {
            const isExpanded = expanded === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
              >
                <div className="card p-6 sm:p-8">
                  {/* 头部信息 */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-2">
                        <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center text-sm font-mono font-bold flex-shrink-0">
                          0{index + 1}
                        </div>
                        <div>
                          <div className="flex items-center gap-3 flex-wrap">
                            <h3 className="text-lg font-bold text-foreground">{project.title}</h3>
                            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-blue-500/10 text-blue-400 border border-blue-500/20">
                              {project.status}
                            </span>
                          </div>
                          <p className="text-xs font-mono text-muted-foreground">{project.subtitle}</p>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2.5 ml-14">
                        <span className="tag inline-flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {project.period}
                        </span>
                        <span className="tag inline-flex items-center gap-1">
                          <Users className="w-3 h-3" /> {project.team}
                        </span>
                        <span className="tag !bg-blue-500/10 !text-blue-400 !border-blue-500/20">{project.role}</span>
                        <span className="tag inline-flex items-center gap-1">
                          <Star className="w-3 h-3 text-amber-400" /> {project.stars} stars
                        </span>
                      </div>
                    </div>

                    <div className="flex lg:flex-col gap-4">
                      {project.metrics.map((m, i) => (
                        <div key={i} className="text-left lg:text-right">
                          <div className="text-sm font-bold font-mono text-blue-400 stat-number">{m.value}</div>
                          <div className="text-[10px] text-muted-foreground font-mono">{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed mb-4 ml-14">{project.description}</p>

                  {/* 展开详情 */}
                  <motion.div
                    initial={false}
                    animate={{ height: isExpanded ? "auto" : 0, opacity: isExpanded ? 1 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="grid md:grid-cols-2 gap-4 mb-4 pt-4 border-t border-white/5 ml-14">
                      <div>
                        <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">项目背景</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">{project.background}</p>
                      </div>
                      <div>
                        <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">解决方案</h4>
                        <ul className="space-y-1.5">
                          {project.solution.map((s, i) => (
                            <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 mt-0.5 flex-shrink-0" />
                              {s}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="ml-14 mb-4">
                      <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">项目成果</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {project.achievements.map((a, i) => (
                          <div key={i} className="flex items-center gap-2 p-2 rounded bg-white/[0.02] text-xs text-zinc-300 border border-white/5">
                            <span className="text-blue-400 text-xs font-mono">✓</span>
                            {a}
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>

                  {/* 底部 Footer */}
                  <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-white/5 ml-14">
                    {project.tech.map((t, i) => (
                      <span key={i} className="tag">
                        {t}
                      </span>
                    ))}
                    <div className="flex-1" />
                    <button
                      onClick={() => setExpanded(isExpanded ? null : index)}
                      className="px-3 py-1.5 rounded text-xs font-mono text-blue-400 hover:bg-blue-500/10 transition-colors inline-flex items-center gap-1 border border-blue-500/20"
                    >
                      {isExpanded ? "收起" : "详情"}
                      <ArrowRight className={`w-3.5 h-3.5 transition-transform ${isExpanded ? "rotate-90" : ""}`} />
                    </button>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-1.5 rounded text-zinc-400 hover:text-white transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                    <a href="#" className="p-1.5 rounded text-zinc-400 hover:text-white transition-colors">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
