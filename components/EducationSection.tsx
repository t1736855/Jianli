"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { GraduationCap, Award, BookOpen, Target, TrendingUp, Users } from "lucide-react";
import { useRef } from "react";

export default function EducationSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const education = {
    school: "重庆商务职业学院",
    englishName: "Chongqing Business Vocational College",
    major: "云计算技术应用",
    period: "2023 - 2026 (预计毕业)",
    gpa: "3.8 / 4.0",
    rank: "专业前 10%",
    honors: [
      {
        title: "国家励志奖学金",
        year: "2024",
        description: "表彰学业优异、品学兼优的学生",
      },
      {
        title: "华为 ICT 大赛云计算轨道",
        year: "2024",
        description: "重庆赛区一等奖",
      },
      {
        title: "优秀学生干部",
        year: "2023-2024",
        description: "担任班级技术委员，组织多次技术分享会",
      },
    ],
    courses: [
      { name: "容器化技术与 Docker", score: "95", credit: 4 },
      { name: "Kubernetes 集群管理", score: "92", credit: 4 },
      { name: "虚拟化技术", score: "90", credit: 3 },
      { name: "分布式数据库", score: "94", credit: 4 },
      { name: "云平台运维", score: "96", credit: 3 },
      { name: "Linux 系统管理", score: "98", credit: 4 },
      { name: "Python 编程", score: "93", credit: 3 },
      { name: "网络安全基础", score: "91", credit: 3 },
    ],
    activities: [
      "云计算技术社团 - 核心成员",
      "校级技术论坛 - 演讲嘉宾",
      "开源项目贡献者",
      "技术博客作者 (掘金/CSDN)",
    ],
  };

  const stats = [
    { icon: Target, label: "GPA", value: education.gpa },
    { icon: TrendingUp, label: "专业排名", value: education.rank },
    { icon: Users, label: "社团活动", value: "4+" },
  ];

  return (
    <section ref={sectionRef} id="education" className="py-32 relative overflow-hidden">
      {/* 背景装饰 */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
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
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Education Background</span>
          </motion.div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              教育背景
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            扎实的云计算专业基础，丰富的实践经验，持续学习的热情
          </p>
        </motion.div>

        {/* 学校信息卡片 */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mb-16"
        >
          <div className="grid lg:grid-cols-3 gap-8">
            {/* 主卡片 */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-8 shadow-lg border border-gray-200">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold text-gray-900 mb-2">
                    {education.school}
                  </h3>
                  <p className="text-gray-600 text-lg mb-2">{education.englishName}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                      {education.major}
                    </span>
                    <span className="px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm">
                      {education.period}
                    </span>
                  </div>
                </div>
              </div>

              {/* 统计数据 */}
              <div className="grid grid-cols-3 gap-4">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -5 }}
                      className="p-4 rounded-xl bg-gray-50 border border-gray-200"
                    >
                      <Icon className="w-6 h-6 text-primary mb-2" />
                      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* 活动卡片 */}
            <div className="bg-gradient-to-br from-primary to-accent rounded-3xl p-8 text-white shadow-lg">
              <h4 className="text-xl font-bold mb-6">校园活动与实践</h4>
              <div className="space-y-4">
                {education.activities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0" />
                    <span className="text-sm">{activity}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* 荣誉奖项 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="flex items-center gap-3 mb-8">
            <Award className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-900">荣誉奖项</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {education.honors.map((honor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-primary" />
                </div>
                <div className="text-sm text-primary font-medium mb-1">{honor.year}</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">{honor.title}</h4>
                <p className="text-sm text-gray-600">{honor.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* 核心课程 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-gray-900">核心课程</h3>
            <span className="text-sm text-gray-500">(平均分: 93.6)</span>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {education.courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-lg transition-all cursor-pointer"
              >
                <div className="flex items-start justify-between mb-2">
                  <h4 className="font-semibold text-gray-900 text-sm group-hover:text-primary transition-colors">
                    {course.name}
                  </h4>
                  <span className="text-xs text-gray-500">{course.credit} 学分</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${course.score}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.05 }}
                      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                    />
                  </div>
                  <span className="text-sm font-bold text-primary">{course.score}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
