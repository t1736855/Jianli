<template>
  <section id="skills" class="relative py-24 px-6 bg-gradient-to-br from-white via-blue-50/30 to-cyan-50/30 dark:from-gray-950 dark:via-blue-950/20 dark:to-gray-900 overflow-hidden">
    <!-- 背景装饰 -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-10 right-20 w-64 h-64 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
      <div class="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-cyan-300/20 to-blue-300/20 rounded-full blur-3xl"></div>
    </div>
    
    <div class="relative max-w-7xl mx-auto z-10">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white"
      >
        技能专长
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg"
      >
        掌握前沿技术，持续学习进步
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div
          v-for="(category, index) in skills"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 150, duration: 600 } }"
          class="group relative glass-effect rounded-3xl p-8 card-hover"
        >
          <!-- 渐变边框 -->
          <div :class="['absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300', category.borderGradient]"></div>
          
          <div class="relative z-10">
            <!-- 图标区域 -->
            <div class="flex items-center gap-4 mb-6">
              <div :class="['w-14 h-14 rounded-2xl flex items-center justify-center', category.iconBg]">
                <component :is="category.icon" class="w-7 h-7 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                {{ category.title }}
              </h3>
            </div>
            
            <!-- 技能列表 -->
            <div class="space-y-5">
              <div v-for="skill in category.items" :key="skill.name" class="space-y-2">
                <div class="flex justify-between text-sm">
                  <span class="font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                  <span class="font-semibold text-primary-600 dark:text-primary-400">{{ skill.level }}%</span>
                </div>
                <div class="relative w-full h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div
                    :class="['h-full rounded-full transition-all duration-1000 ease-out', skill.gradient]"
                    :style="{ width: `${skill.level}%` }"
                  >
                    <div class="absolute inset-0 bg-white/30 animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Cloud, Code, Database, Shield } from 'lucide-vue-next'

const skills = [
  {
    title: '云平台',
    icon: Cloud,
    iconBg: 'bg-gradient-primary',
    borderGradient: 'bg-gradient-to-br from-blue-500/20 via-cyan-500/20 to-blue-500/20',
    items: [
      { name: 'AWS', level: 85, gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600' },
      { name: 'Azure', level: 80, gradient: 'bg-gradient-to-r from-blue-400 to-blue-600' },
      { name: '阿里云', level: 90, gradient: 'bg-gradient-to-r from-cyan-500 to-blue-600' }
    ]
  },
  {
    title: '编程语言',
    icon: Code,
    iconBg: 'bg-gradient-accent',
    borderGradient: 'bg-gradient-to-br from-cyan-500/20 via-blue-500/20 to-cyan-500/20',
    items: [
      { name: 'Python', level: 90, gradient: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
      { name: 'JavaScript', level: 85, gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500' },
      { name: 'Go', level: 75, gradient: 'bg-gradient-to-r from-blue-400 to-cyan-600' }
    ]
  },
  {
    title: '数据库',
    icon: Database,
    iconBg: 'bg-gradient-cyan',
    borderGradient: 'bg-gradient-to-br from-cyan-500/20 via-blue-400/20 to-cyan-500/20',
    items: [
      { name: 'MySQL', level: 85, gradient: 'bg-gradient-to-r from-blue-500 to-blue-700' },
      { name: 'MongoDB', level: 80, gradient: 'bg-gradient-to-r from-cyan-500 to-cyan-700' },
      { name: 'Redis', level: 85, gradient: 'bg-gradient-to-r from-blue-400 to-cyan-600' }
    ]
  },
  {
    title: '容器技术',
    icon: Shield,
    iconBg: 'bg-gradient-sunset',
    borderGradient: 'bg-gradient-to-br from-blue-500/20 via-cyan-400/20 to-blue-500/20',
    items: [
      { name: 'Docker', level: 95, gradient: 'bg-gradient-to-r from-blue-400 to-blue-600' },
      { name: 'Kubernetes', level: 90, gradient: 'bg-gradient-to-r from-blue-500 to-cyan-600' },
      { name: 'Helm', level: 80, gradient: 'bg-gradient-to-r from-cyan-400 to-blue-500' }
    ]
  }
]
</script>
