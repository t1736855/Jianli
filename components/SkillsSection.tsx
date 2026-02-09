"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Cloud, Container, Code, Server, Database, GitBranch, Shield, Gauge } from "lucide-react";
import { useState, useRef } from "react";

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const skillCategories = [
    {
      icon: Cloud,
      title: "云平台服务",
      subtitle: "Cloud Platforms",
      description: "熟练使用主流云服务商的核心产品",
      skills: [
        { name: "AWS (EC2, S3, Lambda)", level: 85 },
        { name: "阿里云 (ECS, OSS, FC)", level: 90 },
        { name: "华为云 (CCE, OBS)", level: 80 },
        { name: "腾讯云 (CVM, COS)", level: 75 },
      ],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
    },
    {
      icon: Container,
      title: "容器与编排",
      subtitle: "Container & Orchestration",
      description: "精通容器化技术和 Kubernetes 集群管理",
      skills: [
        { name: "Docker (镜像优化)", level: 95 },
        { name: "Kubernetes (集群运维)", level: 90 },
        { name: "Helm (包管理)", level: 85 },
        { name: "Harbor (镜像仓库)", level: 80 },
      ],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
    },
    {
      icon: GitBranch,
      title: "DevOps 工具链",
      subtitle: "CI/CD Pipeline",
      description: "构建自动化部署和持续集成流程",
      skills: [
        { name: "Jenkins (流水线)", level: 85 },
        { name: "GitLab CI/CD", level: 88 },
        { name: "GitHub Actions", level: 82 },
        { name: "ArgoCD (GitOps)", level: 80 },
      ],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
    },
    {
      icon: Code,
      title: "编程语言",
      subtitle: "Programming Languages",
      description: "多语言开发能力，注重代码质量",
      skills: [
        { name: "Python (自动化脚本)", level: 90 },
        { name: "Go (微服务开发)", level: 85 },
        { name: "JavaScript/Node.js", level: 88 },
        { name: "Bash (Shell 脚本)", level: 92 },
      ],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
    },
    {
      icon: Database,
      title: "数据库技术",
      subtitle: "Database Management",
      description: "关系型与 NoSQL 数据库管理经验",
      skills: [
        { name: "MySQL (优化调优)", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis (缓存)", level: 88 },
        { name: "MongoDB", level: 82 },
      ],
      color: "from-teal-500 to-blue-500",
      bgColor: "bg-teal-50",
      borderColor: "border-teal-200",
    },
    {
      icon: Gauge,
      title: "监控与可观测",
      subtitle: "Monitoring & Observability",
      description: "全方位的系统监控和性能分析",
      skills: [
        { name: "Prometheus (指标采集)", level: 88 },
        { name: "Grafana (可视化)", level: 90 },
        { name: "ELK Stack (日志)", level: 82 },
        { name: "Jaeger (链路追踪)", level: 78 },
      ],
      color: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-50",
      borderColor: "border-yellow-200",
    },
    {
      icon: Server,
      title: "基础设施即代码",
      subtitle: "Infrastructure as Code",
      description: "自动化基础设施管理和配置",
      skills: [
        { name: "Terraform (云资源)", level: 85 },
        { name: "Ansible (配置管理)", level: 88 },
        { name: "Linux Admin (CentOS/Ubuntu)", level: 92 },
        { name: "Nginx (反向代理)", level: 86 },
      ],
      color: "from-gray-600 to-gray-800",
      bgColor: "bg-gray-50",
      borderColor: "border-gray-200",
    },
    {
      icon: Shield,
      title: "安全与合规",
      subtitle: "Security & Compliance",
      description: "云安全最佳实践和合规性管理",
      skills: [
        { name: "网络安全基础", level: 80 },
        { name: "SSL/TLS 证书", level: 85 },
        { name: "安全审计", level: 78 },
        { name: "权限管理 (RBAC)", level: 82 },
      ],
      color: "from-red-500 to-pink-500",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
    },
  ];

  return (
    <section ref={sectionRef} id="skills" className="py-32 relative overflow-hidden bg-gray-50">
      {/* 背景装饰 */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
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
            <Code className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Technical Skills</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              技能专长
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            全面的云计算技术栈，从基础设施到应用层的完整覆盖
          </p>
        </motion.div>

        {/* 技能卡片网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            const isActive = activeCategory === index;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                onHoverStart={() => setActiveCategory(index)}
                className="relative group"
              >
                <motion.div
                  whileHover={{ y: -10 }}
                  className={`h-full bg-white rounded-2xl p-6 border-2 ${
                    isActive ? category.borderColor : "border-gray-200"
                  } hover:shadow-xl transition-all cursor-pointer`}
                >
                  {/* 图标 */}
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center mb-4`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </motion.div>

                  {/* 标题 */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {category.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-4">{category.subtitle}</p>

                  {/* 描述 */}
                  <p className="text-xs text-gray-600 mb-4 line-clamp-2">
                    {category.description}
                  </p>

                  {/* 技能列表 */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex}>
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs text-gray-700 font-medium">
                            {skill.name}
                          </span>
                          <span className="text-xs font-bold text-primary">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: index * 0.1 + skillIndex * 0.05 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 悬停效果指示器 */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: isActive ? 1 : 0 }}
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary flex items-center justify-center"
                  >
                    <span className="text-white text-xs">✓</span>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* 附加技能说明 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="mt-16 bg-gradient-to-r from-primary to-accent rounded-3xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6">综合能力与特长</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "云原生架构设计",
                desc: "具备完整的微服务架构设计能力，熟悉服务网格、API 网关、消息队列等组件的使用与优化。",
              },
              {
                title: "性能优化专家",
                desc: "擅长系统性能分析与调优，包括容器镜像精简、数据库查询优化、缓存策略设计等。",
              },
              {
                title: "自动化运维",
                desc: "精通 CI/CD 流水线构建，实现从代码提交到生产部署的全自动化，大幅提升团队效率。",
              },
              {
                title: "问题排查能力",
                desc: "丰富的线上问题排查经验，能够快速定位并解决生产环境中的各类技术问题。",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-3"
              >
                <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold mb-1">{item.title}</h4>
                  <p className="text-sm text-white/80">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
