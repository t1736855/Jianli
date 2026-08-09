"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen, Trophy, Star, Users, Presentation, Calendar, MapPin } from "lucide-react";

const education = {
  school: "重庆商务职业学院",
  englishName: "Chongqing Business Vocational College",
  major: "云计算技术应用",
  period: "2023 - 2026",
  location: "重庆市沙坪坝区",
  gpa: "3.8 / 4.0",
  rank: "Top 10%",
  honors: [
    { title: "国家励志奖学金", year: "2024", desc: "表彰学业优异、品学兼优的学生", icon: Trophy },
    { title: "华为 ICT 大赛", year: "2024", desc: "重庆赛区一等奖", icon: Award },
    { title: "优秀学生干部", year: "2023-2024", desc: "组织多次技术分享会", icon: Star },
    { title: "ACM 编程竞赛", year: "2024", desc: "校级二等奖", icon: Award },
  ],
  courses: [
    { name: "容器化技术与 Docker", score: 95, credit: 4 },
    { name: "Kubernetes 集群管理", score: 92, credit: 4 },
    { name: "虚拟化技术", score: 90, credit: 3 },
    { name: "分布式数据库", score: 94, credit: 4 },
    { name: "云平台运维", score: 96, credit: 3 },
    { name: "Linux 系统管理", score: 98, credit: 4 },
    { name: "Python 编程", score: 93, credit: 3 },
    { name: "网络安全基础", score: 91, credit: 3 },
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

export default function EducationSection() {
  return (
    <section id="education" className="section relative overflow-hidden">
      <div className="container-main">
        {/* 装饰性背景 */}
        <div className="blob-2" style={{ top: "-10%", right: "-5%" }} />
        <div className="blob-3" style={{ bottom: "-10%", left: "-5%" }} />

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

        {/* 标题 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <div className="badge mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            Education
          </div>
          <h2 className="heading-display text-4xl md:text-5xl text-foreground mb-4">
            <span className="gradient-text-accent">教育背景</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto text-lg">扎实的云计算专业基础，丰富的实践经验</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* 学校信息 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-2 card-flat p-5 sm:p-8 hover-glow"
          >
            <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-4 sm:gap-5 mb-6 sm:mb-8">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-16 h-16 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 shadow-xl"
              >
                <GraduationCap className="w-8 h-8 text-white" />
              </motion.div>
              <div className="flex-1">
                <h3 className="text-xl sm:text-2xl font-semibold text-foreground mb-2">{education.school}</h3>
                <p className="text-muted-foreground text-sm sm:text-base mb-4">{education.englishName}</p>
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3">
                  <span className="px-3 sm:px-4 py-1.5 rounded-full bg-accent/10 text-accent text-xs sm:text-sm font-medium">{education.major}</span>
                  <span className="px-3 sm:px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm inline-flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" /> {education.period}
                  </span>
                  <span className="px-3 sm:px-4 py-1.5 rounded-full bg-muted text-muted-foreground text-xs sm:text-sm inline-flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" /> {education.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
              {[
                { label: "GPA", value: education.gpa, icon: "📊" },
                { label: "排名", value: education.rank, icon: "🏆" },
                { label: "活动", value: "4+", icon: "🎯" },
              ].map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ y: -6, scale: 1.05 }}
                  className="p-5 rounded-xl bg-gradient-to-br from-muted/50 to-muted hover:from-accent/5 hover:to-accent/10 text-center transition-all hover:shadow-lg"
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-xl font-semibold text-foreground stat-number">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* 校园活动 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="card-flat p-8 bg-foreground text-white noise hover-glow"
          >
            <h4 className="text-xl font-semibold mb-6">校园活动</h4>
            <div className="space-y-4">
              {education.activities.map((activity, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0">
                    <activity.icon className="w-5 h-5" />
                  </div>
                  <span className="text-base text-white/80">{activity.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* 时间线 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h3 className="text-xl font-semibold text-foreground mb-8 flex items-center gap-3">
            <Calendar className="w-6 h-6 text-accent" />
            成长历程
          </h3>
          <div className="relative pl-12">
            <div className="timeline-line" />
            <div className="space-y-8">
              {education.timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                  className="relative"
                >
                  <div className="timeline-dot absolute -left-12 top-2" />
                  <motion.div
                    whileHover={{ x: 10, scale: 1.02 }}
                    className={`p-5 rounded-xl ${item.highlight ? "bg-accent/5 border border-accent/10" : "bg-muted/30"}`}
                  >
                    <span className="text-sm font-mono text-accent">{item.year}</span>
                    <p className="text-base text-foreground mt-2">{item.event}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* 荣誉奖项 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">荣誉奖项</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {education.honors.map((honor, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, scale: 1.03 }}
                className="card-glow p-6"
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                  <honor.icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-sm text-accent font-mono mb-2">{honor.year}</div>
                <h4 className="text-base font-semibold text-foreground mb-2">{honor.title}</h4>
                <p className="text-sm text-muted-foreground">{honor.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 核心课程 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-accent" />
            <h3 className="text-xl font-semibold text-foreground">核心课程</h3>
            <span className="text-sm text-muted-foreground font-mono bg-muted px-3 py-1 rounded-lg">avg: 93.6</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {education.courses.map((course, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: i * 0.05, ease: "easeOut" }}
                whileHover={{ scale: 1.03, y: -6 }}
                className="card p-5 hover-glow"
              >
                <div className="flex items-start justify-between mb-3">
                  <h4 className="text-sm font-medium text-foreground">{course.name}</h4>
                  <span className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded">{course.credit}分</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${course.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: i * 0.05, ease: "easeOut" }}
                      className="h-full bg-gradient-accent rounded-full"
                      style={{ boxShadow: "0 0 10px rgba(37, 99, 235, 0.4)" }}
                    />
                  </div>
                  <span className="text-lg font-semibold text-foreground stat-number">{course.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
