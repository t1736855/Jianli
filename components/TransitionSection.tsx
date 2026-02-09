"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { TrendingUp, Zap, Target } from "lucide-react";
import { useRef } from "react";

export default function TransitionSection() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // 大卡片的缩放和模糊效果
  const bigCardScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);
  const bigCardBlur = useTransform(scrollYProgress, [0, 0.5], [0, 10]);

  // 小卡片的透明度和缩放
  const smallCardsOpacity = useTransform(scrollYProgress, [0.2, 0.5], [0, 1]);
  const smallCardsScale = useTransform(scrollYProgress, [0.2, 0.5], [0.8, 1]);

  const cards = [
    {
      icon: TrendingUp,
      title: "快速迭代",
      subtitle: "Rapid Development",
      description: "无论您是开拓一个新的业务单元，还是开启一个新的产品，全新的创业项目，或者进入一个新市场",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-gradient-to-br from-blue-50 to-cyan-50",
    },
    {
      icon: Zap,
      title: "一站式缩放",
      subtitle: "All-in-One Solution",
      description: "如果您已经实现了产品/服务市场契合度，并希望将您的业务扩展到新的高度",
      color: "from-red-500 to-orange-500",
      bg: "bg-gradient-to-br from-red-50 to-orange-50",
    },
    {
      icon: Target,
      title: "快速解决方案",
      subtitle: "Quick Solutions",
      description: "如果您非常清楚自己想要什么，需要一个能迅速介入并帮助的团队",
      color: "from-gray-700 to-gray-900",
      bg: "bg-gradient-to-br from-gray-50 to-gray-100",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-white"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* 大卡片 - 保持显示，作为背景 */}
        <motion.div
          style={{
            scale: bigCardScale,
            filter: `blur(${bigCardBlur}px)`,
          }}
          className="absolute inset-0 flex items-center justify-center p-8 pointer-events-none"
        >
          <div className="w-full max-w-5xl h-[600px] rounded-3xl bg-gradient-to-br from-primary via-accent to-purple-600 shadow-2xl p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
            {/* 装饰性背景 */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute top-10 left-10 w-32 h-32 bg-white rounded-full blur-3xl" />
              <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 text-center space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="space-y-2"
              >
                <div className="text-sm font-medium opacity-90">致力于成为</div>
                <h2 className="text-6xl md:text-7xl font-bold">
                  卓越的云计算工程师
                </h2>
              </motion.div>
              
              <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
                为企业数字化转型和云原生落地提供技术支持
              </p>

              <div className="grid grid-cols-3 gap-8 pt-8">
                <div className="space-y-2">
                  <div className="text-4xl font-bold">99.9%</div>
                  <div className="text-sm opacity-80">服务可用性</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">80%</div>
                  <div className="text-sm opacity-80">效率提升</div>
                </div>
                <div className="space-y-2">
                  <div className="text-4xl font-bold">24/7</div>
                  <div className="text-sm opacity-80">技术支持</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 三个小卡片 - 叠加在大卡片上方 */}
        <motion.div
          style={{ 
            opacity: smallCardsOpacity,
          }}
          className="relative z-10 w-full max-w-7xl px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card, index) => {
              const Icon = card.icon;
              
              return (
                <motion.div
                  key={index}
                  style={{ scale: smallCardsScale }}
                  initial={{ opacity: 0, y: 50 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="h-[500px] rounded-3xl bg-white shadow-2xl overflow-hidden border border-gray-200 group"
                >
                  <div className={`h-full p-8 flex flex-col ${card.bg} relative`}>
                    {/* 图标区域 */}
                    <div className="flex-shrink-0 mb-6">
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                    </div>

                    {/* 标题 */}
                    <div className="space-y-2 mb-6">
                      <div className="text-sm font-medium text-gray-500">
                        {card.subtitle}
                      </div>
                      <h3 className="text-3xl font-bold text-gray-900">
                        {card.title}
                      </h3>
                    </div>

                    {/* 描述 */}
                    <p className="text-gray-600 leading-relaxed flex-grow">
                      {card.description}
                    </p>

                    {/* 悬停效果背景 */}
                    <motion.div
                      initial={{ scale: 0, opacity: 0 }}
                      whileHover={{ scale: 1.5, opacity: 0.05 }}
                      className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br ${card.color} rounded-full blur-3xl pointer-events-none`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
