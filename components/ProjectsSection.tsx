"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ExternalLink, Github, Calendar, Users, TrendingUp, CheckCircle2 } from "lucide-react";
import { useRef } from "react";

export default function ProjectsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const projects = [
    {
      title: "基于 Kubernetes 的高可用微服务部署平台",
      subtitle: "High-Availability Microservices Platform on K8s",
      period: "2024.03 - 2024.08",
      team: "4人团队",
      role: "架构设计 & 核心开发",
      description: "在校园私有云环境下，设计并实现了一套基于 Kubernetes 的生产级微服务部署平台。该平台集成了 Prometheus 监控、Grafana 可视化、ELK 日志系统，支持自动扩缩容、滚动更新、健康检查等企业级功能，为校内多个项目提供稳定的容器化运行环境。",
      background: "校内项目部署效率低下，缺乏统一的容器化平台，运维成本高。",
      solution: [
        "采用 Kubernetes + Helm 构建统一的容器编排平台",
        "集成 Prometheus + Grafana 实现全方位监控告警",
        "基于 HPA 实现自动扩缩容，提升资源利用率",
        "通过 Ingress-Nginx 实现统一的流量入口管理",
        "建立完善的 CI/CD 流水线，实现自动化部署",
      ],
      achievements: [
        "部署效率提升 80%，从小时级降至分钟级",
        "服务可用性达到 99.9%，故障恢复时间 < 30s",
        "资源利用率提升 40%，降低了基础设施成本",
        "支撑 15+ 个微服务应用稳定运行",
      ],
      tech: ["Kubernetes", "Docker", "Helm", "Prometheus", "Grafana", "ELK", "Go", "Python"],
      github: "https://github.com",
      demo: "#",
      gradient: "from-blue-500 via-purple-500 to-pink-500",
      metrics: [
        { label: "服务数量", value: "15+" },
        { label: "日均请求", value: "10K+" },
        { label: "可用性", value: "99.9%" },
      ],
    },
    {
      title: "Serverless 自动化工作流系统",
      subtitle: "Serverless Automation Workflow System",
      period: "2023.11 - 2024.02",
      team: "独立项目",
      role: "全栈开发",
      description: "基于阿里云函数计算 (Function Compute) 开发的自动化数据处理系统。该系统采用事件驱动架构，能够自动化处理图片压缩、视频转码、数据同步等任务，支持复杂的工作流编排，大幅降低了计算成本和运维复杂度。",
      background: "传统服务器模式下，媒体文件处理任务资源消耗大，成本高，扩展性差。",
      solution: [
        "采用 Serverless 架构，按需付费，降低成本",
        "基于事件驱动设计，OSS 触发器自动启动任务",
        "函数编排实现复杂工作流，支持条件分支和并行处理",
        "集成阿里云 MNS 消息队列，保证任务可靠性",
        "使用 API Gateway 提供 RESTful 接口",
      ],
      achievements: [
        "计算成本降低 60%，仅为传统方案的 40%",
        "处理速度提升 3 倍，支持高并发场景",
        "零运维成本，自动伸缩，按需计费",
        "日处理文件数量 1000+，峰值 5000+",
      ],
      tech: ["Node.js", "Aliyun FC", "OSS", "API Gateway", "EventBridge", "MNS", "TypeScript"],
      github: "https://github.com",
      demo: "#",
      gradient: "from-green-500 via-teal-500 to-blue-500",
      metrics: [
        { label: "成本节省", value: "60%" },
        { label: "日处理量", value: "1000+" },
        { label: "响应时间", value: "<500ms" },
      ],
    },
    {
      title: "基于 Terraform 的多云资源管理平台",
      subtitle: "Multi-Cloud Resource Management Platform",
      period: "2023.09 - 2023.12",
      team: "3人团队",
      role: "IaC 设计 & 实施",
      description: "使用 Terraform 构建的跨云平台资源管理系统，支持 AWS、阿里云、华为云的统一管理。通过基础设施即代码 (IaC) 的方式，实现了云资源的版本控制、一键部署、环境复制等功能，大幅提升了基础设施管理效率。",
      background: "多云环境下资源管理混乱，手动配置易出错，环境不一致。",
      solution: [
        "使用 Terraform 编写可复用的基础设施代码",
        "建立统一的模块化架构，支持多云部署",
        "集成 GitLab CI 实现自动化审批和部署",
        "使用 Terraform State 远程存储，确保状态一致性",
        "编写 Ansible Playbook 完成后续配置管理",
      ],
      achievements: [
        "基础设施部署时间从天级降至小时级",
        "环境一致性达到 100%，消除配置漂移",
        "支持快速创建开发/测试/生产环境",
        "管理 50+ 云资源实例，覆盖 3 个云平台",
      ],
      tech: ["Terraform", "Ansible", "GitLab CI", "AWS", "Aliyun", "HuaweiCloud", "Python"],
      github: "https://github.com",
      demo: "#",
      gradient: "from-orange-500 via-red-500 to-pink-500",
      metrics: [
        { label: "资源数量", value: "50+" },
        { label: "云平台", value: "3" },
        { label: "部署速度", value: "10x" },
      ],
    },
    {
      title: "智能运维监控告警系统",
      subtitle: "Intelligent DevOps Monitoring & Alerting System",
      period: "2024.05 - 至今",
      team: "2人团队",
      role: "后端开发 & 监控架构",
      description: "基于 Prometheus + Grafana + Alertmanager 构建的智能运维监控系统。该系统不仅提供实时监控和可视化，还集成了智能告警策略、故障自愈机制、历史数据分析等功能，帮助运维团队快速发现和解决问题。",
      background: "缺乏统一的监控体系，故障发现不及时，告警噪音大。",
      solution: [
        "部署 Prometheus 采集系统、应用、业务指标",
        "使用 Grafana 构建多维度监控大屏",
        "配置 Alertmanager 实现分级告警和路由",
        "开发自定义 Exporter 监控业务指标",
        "集成钉钉/企业微信机器人，实时推送告警",
      ],
      achievements: [
        "监控覆盖率 100%，包含 30+ 监控指标",
        "故障发现时间缩短 90%，平均响应 < 2分钟",
        "误告率降低 70%，通过智能聚合和抑制",
        "历史数据保留 30 天，支持趋势分析",
      ],
      tech: ["Prometheus", "Grafana", "Alertmanager", "Node Exporter", "Blackbox", "Go", "Webhook"],
      github: "https://github.com",
      demo: "#",
      gradient: "from-yellow-500 via-orange-500 to-red-500",
      metrics: [
        { label: "监控指标", value: "30+" },
        { label: "告警响应", value: "<2min" },
        { label: "误告降低", value: "70%" },
      ],
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-32 relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </motion.div>

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
            <TrendingUp className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Featured Projects</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              项目经历
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            从需求分析到生产部署的完整项目经验，注重技术深度与业务价值
          </p>
        </motion.div>

        {/* 项目列表 */}
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="group"
            >
              <div className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500">
                {/* 顶部装饰条 */}
                <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
                
                <div className="p-8 md:p-10">
                  {/* 项目头部 */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-8">
                    <div className="flex-1">
                      <div className="flex items-start gap-4 mb-4">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white text-2xl font-bold flex-shrink-0`}>
                          {index + 1}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-3xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>
                          <p className="text-gray-600 text-lg mb-3">{project.subtitle}</p>
                          <div className="flex flex-wrap gap-3">
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                              <Calendar className="w-4 h-4" />
                              {project.period}
                            </span>
                            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                              <Users className="w-4 h-4" />
                              {project.team}
                            </span>
                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                              {project.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* 关键指标 */}
                    <div className="flex lg:flex-col gap-4">
                      {project.metrics.map((metric, i) => (
                        <div key={i} className="text-center lg:text-right">
                          <div className="text-2xl font-bold text-primary">{metric.value}</div>
                          <div className="text-sm text-gray-600">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* 项目描述 */}
                  <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                    {project.description}
                  </p>

                  {/* 背景与解决方案 */}
                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-primary rounded" />
                        项目背景
                      </h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{project.background}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <span className="w-1 h-5 bg-accent rounded" />
                        解决方案
                      </h4>
                      <ul className="space-y-2">
                        {project.solution.slice(0, 3).map((item, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* 项目成果 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-primary" />
                      项目成果
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {project.achievements.map((achievement, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-start gap-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors"
                        >
                          <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-primary text-sm font-bold">✓</span>
                          </div>
                          <span className="text-sm text-gray-700">{achievement}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* 技术栈 */}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">技术栈</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <motion.span
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 rounded-xl text-sm font-medium bg-gray-100 text-gray-700 hover:bg-primary hover:text-white transition-all cursor-pointer"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>

                  {/* 链接 */}
                  <div className="flex gap-3 pt-4 border-t border-gray-200">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gray-900 text-white font-medium hover:bg-gray-800 transition-colors"
                    >
                      <Github className="w-5 h-5" />
                      查看源码
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${project.gradient} text-white font-medium shadow-lg hover:shadow-xl transition-all`}
                    >
                      <ExternalLink className="w-5 h-5" />
                      在线演示
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
