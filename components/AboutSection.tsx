"use client";

import { motion } from "framer-motion";
import { User, Target, Lightbulb, TrendingUp, Calendar, MapPin, Briefcase, GraduationCap, Code, Cloud, Server, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: Target,
    title: "专注领域",
    desc: "云原生架构、容器编排、DevOps 自动化",
    items: ["Kubernetes", "Docker", "微服务"],
  },
  {
    icon: Lightbulb,
    title: "技术理念",
    desc: "Infrastructure as Code，一切皆可自动化",
    items: ["IaC", "GitOps", "自动化"],
  },
  {
    icon: TrendingUp,
    title: "成长方向",
    desc: "从运维到架构，从工具到平台工程",
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

export default function AboutSection() {
  return (
    <section id="about" className="section relative border-t border-black/5 bg-white/40 backdrop-blur-sm">
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
            <User className="w-3.5 h-3.5" />
            About Me
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-gray-900 mb-3 tracking-tight">
            关于我
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base font-light">
            热爱技术，追求卓越，用代码构建更高效的基础设施
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-6 mb-12">
          {/* 主要介绍 Bento 卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3 card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center text-2xl font-bold flex-shrink-0 shadow-sm">
                  李
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">李洪斌</h3>
                  <p className="text-gray-500 text-sm font-mono">云计算技术应用 · 重庆商务职业学院</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-3">
                    <span className="tag">云计算</span>
                    <span className="tag">DevOps</span>
                    <span className="tag">云原生</span>
                  </div>
                </div>
              </div>

              <div className="space-y-4 text-gray-600 text-sm leading-relaxed font-normal">
                <p>
                  我是一名热爱云计算技术的在校学生，专注于云原生架构和 DevOps 领域。从入学开始，我就对容器化和微服务架构产生了浓厚的兴趣，并通过自学和实践不断提升自己的技术能力。
                </p>
                <p>
                  在校期间，我积极参与各类技术项目和竞赛，积累了丰富的实战经验。从搭建第一个 Kubernetes 集群，到设计生产级的微服务架构，再到开发自动化运维工具，每一步都让我对云原生技术有了更深入的理解。
                </p>
                <p>
                  我相信 Infrastructure as Code 的理念，致力于通过自动化和工具化来提升开发和运维效率。目前正在寻找云计算/DevOps 相关的实习或全职机会，希望能将所学知识应用到实际生产环境中。
                </p>
              </div>
            </div>

            {/* 快速信息 */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8 pt-6 border-t border-gray-100">
              {quickFacts.map((fact) => (
                <div key={fact.label} className="text-center p-3 rounded-xl bg-gray-50 border border-gray-100/80">
                  <fact.icon className="w-4 h-4 text-blue-600 mx-auto mb-1.5" />
                  <div className="text-sm font-bold text-gray-900">{fact.value}</div>
                  <div className="text-[11px] text-gray-400 font-mono">{fact.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* 右侧重点 Bento 卡片 */}
          <div className="lg:col-span-2 space-y-4 flex flex-col justify-between">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-5"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-500 mb-3 leading-relaxed">{item.desc}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {item.items.map((tag) => (
                        <span key={tag} className="text-[10px] font-mono px-2 py-0.5 rounded bg-gray-100 text-gray-600 border border-gray-200/50">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* 技术信条卡片 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="card p-5 bg-gradient-to-br from-blue-50/50 via-white to-gray-50 border-blue-200/50"
            >
              <div className="flex items-center gap-2 mb-2">
                <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                <span className="text-[10px] text-blue-600 font-mono uppercase tracking-wider font-semibold">技术信条</span>
              </div>
              <blockquote className="text-xs text-gray-700 italic leading-relaxed font-mono">
                &ldquo;The best infrastructure is the one you don&apos;t have to think about.&rdquo;
              </blockquote>
              <p className="text-[10px] text-gray-400 mt-2">— 我的技术理念</p>
            </motion.div>
          </div>
        </div>

        {/* 技术栈概览 */}
        <div className="mt-12">
          <h3 className="text-xs font-mono text-gray-400 mb-6 text-center uppercase tracking-widest">技术栈概览</h3>
          <div className="grid md:grid-cols-3 gap-4">
            {techStack.map((stack, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="card p-5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-3">
                  <stack.icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-gray-900 mb-3">{stack.name}</h4>
                <div className="flex flex-wrap justify-center gap-1.5">
                  {stack.items.map((item) => (
                    <span key={item} className="tag">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
