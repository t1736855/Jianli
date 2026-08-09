<template>
  <section id="skills" class="py-20 px-6 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
      >
        技能专长
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="(category, index) in skills"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="glass-effect rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center gap-3 mb-4">
            <component :is="category.icon" class="w-8 h-8 text-primary" />
            <h3 class="text-xl font-bold text-gray-900 dark:text-white">
              {{ category.title }}
            </h3>
          </div>
          <div class="space-y-3">
            <div v-for="skill in category.items" :key="skill.name" class="space-y-2">
              <div class="flex justify-between text-sm">
                <span class="text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000"
                  :style="{ width: `${skill.level}%` }"
                ></div>
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
    items: [
      { name: 'AWS', level: 85 },
      { name: 'Azure', level: 80 },
      { name: '阿里云', level: 90 }
    ]
  },
  {
    title: '编程语言',
    icon: Code,
    items: [
      { name: 'Python', level: 90 },
      { name: 'JavaScript', level: 85 },
      { name: 'Go', level: 75 }
    ]
  },
  {
    title: '数据库',
    icon: Database,
    items: [
      { name: 'MySQL', level: 85 },
      { name: 'MongoDB', level: 80 },
      { name: 'Redis', level: 85 }
    ]
  },
  {
    title: '容器技术',
    icon: Shield,
    items: [
      { name: 'Docker', level: 95 },
      { name: 'Kubernetes', level: 90 },
      { name: 'Helm', level: 80 }
    ]
  }
]
</script>

<style scoped>
.from-primary {
  --tw-gradient-from: #0070f3;
}

.to-accent {
  --tw-gradient-to: #00d4ff;
}
</style>
