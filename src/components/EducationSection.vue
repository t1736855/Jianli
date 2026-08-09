<template>
  <section id="education" class="py-20 px-6 bg-white dark:bg-gray-950">
    <div class="max-w-6xl mx-auto">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
      >
        教育背景
      </h2>

      <div class="glass-effect rounded-3xl p-8 md:p-12">
        <div class="flex flex-col md:flex-row gap-8">
          <div class="flex-1">
            <h3 class="text-3xl font-bold mb-2 text-gray-900 dark:text-white">
              重庆商务职业学院
            </h3>
            <p class="text-xl text-gray-600 dark:text-gray-400 mb-4">
              云计算技术应用专业
            </p>
            <div class="flex items-center gap-4 text-gray-500 dark:text-gray-400 mb-6">
              <span>2021 - 2024</span>
              <span>·</span>
              <span>GPA: 3.8/4.0</span>
            </div>
          </div>
        </div>

        <!-- 核心课程 -->
        <div class="mt-8">
          <h4 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">核心课程</h4>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div v-for="course in courses" :key="course" class="px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-lg text-center text-sm">
              {{ course }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const courses = [
  '云计算基础',
  'Linux系统管理',
  'Docker容器技术',
  'Kubernetes编排',
  'Python编程',
  'DevOps实践',
  '网络安全',
  '数据库技术'
]
</script>
