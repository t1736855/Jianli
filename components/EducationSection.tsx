"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy, Star, Users, Presentation, Calendar, MapPin, ShieldCheck, Eye, X } from "lucide-react";

const getCertPath = (path: string) => {
  if (typeof window === "undefined") return path;
  if (!window.location.pathname.startsWith("/jianli")) {
    return path.replace(/^\/jianli/, "");
  }
  return path;
};

const education = {
  school: "重庆商务职业学院",
  englishName: "Chongqing Business Vocational College",
  major: "云计算技术应用",
  period: "2024 - 2027",
  location: "重庆市沙坪坝区",
  gpa: "3.9 / 4.0",
  rank: "Top 5%",
  honors: [
    {
      title: "第四届重庆市大学生区块链技术应用创新大赛",
      year: "2025.12",
      desc: "区块链技术赛项(高职组) — 一等奖 (重庆市教育委员会颁发 | 编号: CQSZJJ2025-430104)",
      image: "/jianli/certificates/a2939c02aa6c1d3f763e5affd3439741.jpg",
      tag: "市级一等奖",
      icon: Trophy,
    },
    {
      title: "2025年重庆市职业院校技能大赛",
      year: "2026.04",
      desc: "人工智能赛道高职组人工智能应用集成与部署 — 银奖 (重庆市教委代章 | 编号: CQJNDSHJZS20250702)",
      image: "/jianli/certificates/b0a805a0-3651-4585-b4cf-1d52eba36248.png",
      tag: "市级银奖",
      icon: Trophy,
    },
    {
      title: "KaiwuDB 数据库专家 (KWCE)",
      year: "2026.07",
      desc: "浪潮 KaiwuDB 专家级认证 (KWCE20260709016)",
      image: "/jianli/certificates/李洪斌_KWCE_KWCE20260709016.png",
      tag: "专业认证",
      icon: ShieldCheck,
    },
    {
      title: "KaiwuDB 数据库高级工程师 (KWCP)",
      year: "2026.07",
      desc: "浪潮 KaiwuDB 高级工程师认证 (KWCP20260709014)",
      image: "/jianli/certificates/李洪斌_KWCP_KWCP20260709014.png",
      tag: "专业认证",
      icon: Award,
    },
    {
      title: "KaiwuDB 数据库工程师 (KWCA)",
      year: "2026.07",
      desc: "浪潮 KaiwuDB 工程师认证 (KWCA20260707021)",
      image: "/jianli/certificates/李洪斌_KWCA_KWCA20260707021.png",
      tag: "专业认证",
      icon: Award,
    },
    {
      title: "华为微认证 - 数通网络层协议基础",
      year: "2026.02",
      desc: "华为官方微认证 (03050101015620260205004754)",
      image: "/jianli/certificates/华为微认证.png",
      tag: "华为认证",
      icon: Award,
    },
    {
      title: "华为微认证 - 人工智能初识",
      year: "2026.01",
      desc: "华为官方微认证 (03170501015620260113014666)",
      image: "/jianli/certificates/13d4db8f-13b2-40a7-87af-3804422f0717.png",
      tag: "华为认证",
      icon: Award,
    },
    {
      title: "全国大学生创新创业能力大赛",
      year: "2025.10",
      desc: "初赛创新思维赛 - 一等奖 (CXCY176060196895)",
      image: "/jianli/certificates/mmexport545354be1fe77de8749326eb08cfa958_1761448.jpeg",
      tag: "全国竞赛",
      icon: Trophy,
    },
    {
      title: "重庆商务职业学院 优秀学生干部",
      year: "2025.05",
      desc: "2024-2025学年中表现突出，被评为优秀学生干部",
      image: "/jianli/certificates/IMG_20251108_220902.jpg",
      tag: "校级荣誉",
      icon: Star,
    },
    {
      title: "大学生信息素养竞赛",
      year: "2024.09",
      desc: "重庆商务职业学院 - 二等奖",
      image: "/jianli/certificates/IMG_20251108_220833.jpg",
      tag: "校级竞赛",
      icon: Award,
    },
  ],
  courses: [
    { name: "虚拟化技术与应用", score: 99, credit: 4 },
    { name: "云平台搭建与运维", score: 97, credit: 6 },
    { name: "云应用开发", score: 98, credit: 6 },
    { name: "云应用开发实训", score: 100, credit: 2 },
    { name: "区块链技术导论", score: 100, credit: 3 },
    { name: "路由与交换技术", score: 100, credit: 2 },
    { name: "web前端基础设计", score: 95, credit: 3 },
    { name: "数据库应用技术", score: 99, credit: 3 },
    { name: "程序设计基础", score: 81, credit: 3 },
    { name: "人工智能导论", score: 97, credit: 2 },
  ],
  activities: [
    { text: "云计算技术社团 - 核心成员", icon: Users },
    { text: "校级技术论坛 - 演讲嘉宾", icon: Presentation },
    { text: "开源项目贡献者", icon: BookOpen },
    { text: "技术博客作者", icon: GraduationCap },
  ],
  timeline: [
    { year: "2023.09", event: "入学，选择云计算技术应用专业", highlight: false },
    { year: "2024.03", event: "组建团队，启动 K8s 微服务平台项目", highlight: true },
    { year: "2024.06", event: "华为 ICT 大赛重庆赛区一等奖", highlight: true },
    { year: "2024.09", event: "获得国家励志奖学金", highlight: true },
    { year: "2024.11", event: "完成 Serverless 自动化工作流开发", highlight: false },
    { year: "2025.03", event: "开始智能运维监控系统开发", highlight: false },
  ],
};

export default function EducationSection() {
  const [activeCert, setActiveCert] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const modalContent = (
    <AnimatePresence>
      {activeCert && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setActiveCert(null)}
          className="fixed inset-0 z-[999999] flex items-center justify-center bg-black/85 p-4 sm:p-6 backdrop-blur-md cursor-pointer"
          style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-4xl max-h-[90vh] w-full bg-white rounded-2xl overflow-hidden shadow-2xl p-2 flex flex-col items-center justify-center my-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActiveCert(null)}
              className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/70 text-white hover:bg-black transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
            <img
              src={getCertPath(activeCert)}
              alt="证书大图"
              className="w-full h-auto max-h-[82vh] object-contain rounded-xl"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <section id="education" className="section relative border-t border-black/5 bg-white/40 backdrop-blur-sm">
      {mounted && typeof document !== "undefined" && createPortal(modalContent, document.body)}
      <div className="container-main">

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="badge mb-3">
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </div>
          <h2 className="heading-display text-3xl sm:text-4xl text-gray-900 mb-3 tracking-tight">
            教育背景
          </h2>
          <p className="text-gray-500 max-w-lg mx-auto text-sm sm:text-base font-light">
            扎实的云计算专业基础，丰富的实践经验
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {/* 学校信息卡片 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-5 mb-6">
                <div className="w-14 h-14 rounded-xl bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <GraduationCap className="w-7 h-7" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{education.school}</h3>
                  <p className="text-gray-400 text-xs font-mono mb-3">{education.englishName}</p>
                  <div className="flex flex-wrap justify-center sm:justify-start gap-2">
                    <span className="tag !bg-blue-50 !text-blue-600 !border-blue-100 font-semibold">{education.major}</span>
                    <span className="tag inline-flex items-center gap-1">
                      <Calendar className="w-3 h-3 text-gray-400" /> {education.period}
                    </span>
                    <span className="tag inline-flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" /> {education.location}
                    </span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 mt-6 pt-6 border-t border-gray-100">
                {[
                  { label: "GPA", value: education.gpa, icon: "📊" },
                  { label: "排名", value: education.rank, icon: "🏆" },
                  { label: "活动", value: "4+", icon: "🎯" },
                ].map((stat) => (
                  <div key={stat.label} className="p-3 rounded-xl bg-gray-50 border border-gray-100 text-center">
                    <div className="text-lg mb-1">{stat.icon}</div>
                    <div className="text-sm font-bold text-gray-900 stat-number">{stat.value}</div>
                    <div className="text-[10px] text-gray-400 font-mono">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 校园活动 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="card p-6 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xs font-mono text-gray-400 uppercase tracking-widest mb-4">校园活动</h4>
              <div className="space-y-3">
                {education.activities.map((activity, i) => (
                  <div key={i} className="flex items-center gap-3 p-2.5 rounded-lg bg-gray-50 border border-gray-100">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                      <activity.icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs text-gray-700 font-medium">{activity.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* 成长历程 Timeline */}
        <div className="mb-12">
          <h3 className="text-xs font-mono text-gray-400 mb-6 flex items-center gap-2 uppercase tracking-widest">
            <Calendar className="w-4 h-4 text-blue-600" />
            成长历程
          </h3>
          <div className="relative pl-6 border-l border-gray-200 space-y-6">
            {education.timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative group"
              >
                <div
                  className={`absolute -left-[31px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                    item.highlight ? "bg-blue-600 border-blue-400 shadow-[0_0_8px_rgba(37,99,235,0.4)]" : "bg-gray-300 border-gray-200"
                  }`}
                />
                <div className={`p-4 rounded-xl border transition-all ${
                  item.highlight ? "bg-blue-50/50 border-blue-200/80 shadow-sm" : "bg-white border-gray-100"
                }`}>
                  <span className="text-xs font-mono text-blue-600 font-semibold">{item.year}</span>
                  <p className="text-sm text-gray-800 mt-1 font-medium">{item.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 荣誉奖项与课程 */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* 荣誉奖项与专业证书 */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono text-gray-400 flex items-center gap-2 uppercase tracking-widest mb-4">
              <Award className="w-4 h-4 text-blue-600" />
              专业证书与荣誉奖项 (点击可放大预览原件)
            </h3>
            <div className="grid sm:grid-cols-2 gap-3 max-h-[560px] overflow-y-auto pr-1">
              {education.honors.map((honor, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => honor.image && setActiveCert(honor.image)}
                  className="card p-3.5 hover:shadow-md hover:border-blue-200 transition-all cursor-pointer group flex flex-col justify-between bg-white/90"
                >
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-[10px] font-mono font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100">
                        {honor.tag}
                      </span>
                      <span className="text-[10px] text-gray-400 font-mono">{honor.year}</span>
                    </div>
                    <h4 className="text-xs font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                      {honor.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 line-clamp-2 leading-relaxed">{honor.desc}</p>
                  </div>

                  {honor.image && (
                    <div className="mt-2.5 pt-2 border-t border-gray-100 flex items-center justify-between text-[10px] font-mono text-blue-600">
                      <span className="inline-flex items-center gap-1 group-hover:underline">
                        <Eye className="w-3 h-3" /> 查看照片原件
                      </span>
                      <span className="text-gray-400">点击预览</span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          {/* 核心课程列表 */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xs font-mono text-gray-400 flex items-center gap-2 uppercase tracking-widest">
                <BookOpen className="w-4 h-4 text-blue-600" />
                核心课程
              </h3>
              <span className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-100 font-semibold">
                AVG: 93.6
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-3">
              {education.courses.map((course, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="card p-3.5 flex items-center justify-between"
                >
                  <div>
                    <h4 className="text-xs font-medium text-gray-800">{course.name}</h4>
                    <span className="text-[10px] text-gray-400 font-mono">{course.credit} 学分</span>
                  </div>
                  <span className="text-sm font-bold font-mono text-blue-600">{course.score}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
