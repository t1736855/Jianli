"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cloud, Container, Code, Server, Database, GitBranch, Shield, Gauge, Zap, Rocket, Bug, Workflow, Globe, Lock } from "lucide-react";

const categories = [
  {
    icon: Cloud,
    title: "云平台",
    subtitle: "Cloud Platforms",
    skills: [
      { name: "AWS", level: 85 },
      { name: "阿里云", level: 90 },
      { name: "华为云", level: 80 },
      { name: "腾讯云", level: 75 },
    ],
  },
  {
    icon: Container,
    title: "容器编排",
    subtitle: "Container Orchestration",
    skills: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 90 },
      { name: "Helm", level: 85 },
      { name: "Istio", level: 78 },
    ],
  },
  {
    icon: GitBranch,
    title: "DevOps",
    subtitle: "CI/CD Pipeline",
    skills: [
      { name: "Jenkins", level: 85 },
      { name: "GitLab CI", level: 88 },
      { name: "ArgoCD", level: 80 },
      { name: "GitHub Actions", level: 82 },
    ],
  },
  {
    icon: Code,
    title: "编程语言",
    subtitle: "Programming",
    skills: [
      { name: "Python", level: 90 },
      { name: "Go", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "Shell/Bash", level: 88 },
    ],
  },
  {
    icon: Database,
    title: "数据库",
    subtitle: "Databases",
    skills: [
      { name: "MySQL", level: 85 },
      { name: "Redis", level: 88 },
      { name: "MongoDB", level: 82 },
      { name: "PostgreSQL", level: 80 },
    ],
  },
  {
    icon: Gauge,
    title: "监控告警",
    subtitle: "Monitoring",
    skills: [
      { name: "Prometheus", level: 88 },
      { name: "Grafana", level: 90 },
      { name: "ELK Stack", level: 82 },
      { name: "Alertmanager", level: 85 },
    ],
  },
  {
    icon: Server,
    title: "基础设施",
    subtitle: "Infrastructure",
    skills: [
      { name: "Terraform", level: 85 },
      { name: "Ansible", level: 88 },
      { name: "Linux", level: 92 },
      { name: "Nginx", level: 88 },
    ],
  },
  {
    icon: Shield,
    title: "安全",
    subtitle: "Security",
    skills: [
      { name: "网络安全", level: 80 },
      { name: "SSL/TLS", level: 85 },
      { name: "RBAC", level: 82 },
      { name: "Vault", level: 75 },
    ],
  },
];

const expertise = [
  { icon: Rocket, title: "云原生架构", desc: "微服务架构设计，服务网格、API 网关、服务发现与治理" },
  { icon: Zap, title: "性能优化", desc: "容器镜像精简、数据库查询优化、缓存策略设计" },
  { icon: Workflow, title: "自动化运维", desc: "CI/CD 流水线，代码到生产全自动化，GitOps 工作流" },
  { icon: Bug, title: "问题排查", desc: "丰富的线上问题排查经验，日志分析、链路追踪" },
  { icon: Globe, title: "多云管理", desc: "跨云平台资源编排，统一管理 AWS、阿里云、华为云" },
  { icon: Lock, title: "安全合规", desc: "容器安全扫描、密钥管理、RBAC 权限体系设计" },
];

const certifications = [
  { name: "华为 HCIA-Cloud Computing", year: "2024", issuer: "华为" },
  { name: "AWS Cloud Practitioner", year: "2024", issuer: "Amazon" },
  { name: "CKA (Kubernetes Administrator)", year: "2025", issuer: "CNCF" },
  { name: "Linux Professional Institute", year: "2024", issuer: "LPI" },
];

export default function SkillsSection() {
  const [active, setActive] = useState(0);

  return (
    <section id="skills" className="section relative border-t border-black/5 bg-white/40 backdrop-blur-sm">
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
            <Code className="w-3.5 h-3.5" />
            Skills
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-gray-900 mb-3 tracking-tight">
            技能专长
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base font-light">
            全面的云计算技术栈，从基础设施到应用层
          </p>
        </motion.div>

        {/* 技能网格 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {categories.map((cat, i) => {
            const isActive = active === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                onHoverStart={() => setActive(i)}
                className={`card p-5 cursor-pointer transition-all ${
                  isActive ? "border-blue-300 shadow-md bg-white" : ""
                }`}
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mb-4">
                  <cat.icon className="w-5 h-5" />
                </div>
                <h3 className="text-sm font-bold text-gray-900">{cat.title}</h3>
                <p className="text-[11px] text-gray-400 font-mono mb-4">{cat.subtitle}</p>

                <div className="space-y-3">
                  {cat.skills.map((skill, si) => (
                    <div key={si}>
                      <div className="flex items-center justify-between text-xs mb-1">
                        <span className="text-gray-600 font-medium">{skill.name}</span>
                        <span className="font-mono text-blue-600 font-semibold">{skill.level}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: si * 0.05 }}
                          className="h-full bg-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 综合能力与认证 */}
        <div className="grid lg:grid-cols-3 gap-6">
          {/* 综合能力 Bento */}
          <div className="lg:col-span-2 card p-6">
            <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-6">综合能力</h3>
            <div className="grid md:grid-cols-2 gap-4">
              {expertise.map((item, i) => (
                <div key={i} className="flex items-start gap-3.5 p-3 rounded-xl bg-gray-50 border border-gray-100">
                  <div className="w-9 h-9 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4.5 h-4.5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 认证资质 */}
          <div className="card p-6 flex flex-col justify-between">
            <div>
              <h3 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">认证资质</h3>
              <div className="space-y-3">
                {certifications.map((cert, i) => (
                  <div key={i} className="p-3 rounded-xl bg-gray-50 border border-gray-100">
                    <div className="text-[10px] text-blue-600 font-mono mb-0.5 font-semibold">{cert.year}</div>
                    <h4 className="text-xs font-bold text-gray-900">{cert.name}</h4>
                    <p className="text-[10px] text-gray-400 mt-0.5">{cert.issuer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
