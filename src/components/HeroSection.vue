<template>
  <section class="relative min-h-screen flex items-center justify-center px-6 pt-20 overflow-hidden">
    <!-- 精美背景渐变 -->
    <div class="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-950 dark:to-blue-950"></div>
    
    <!-- 动态背景元素 -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
    </div>

    <div class="relative max-w-5xl w-full text-center z-10">
      <!-- 主标题 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 30 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 1000, ease: 'easeOut' } }"
        class="mb-8"
      >
        <div class="inline-block px-6 py-2 mb-6 glass-effect rounded-full">
          <span class="text-sm font-semibold gradient-text">CLOUD COMPUTING ENGINEER</span>
        </div>
        <h1 class="text-6xl md:text-8xl font-bold mb-6 text-gray-900 dark:text-white leading-tight">
          卓越的
          <span class="gradient-text-pink">云计算</span>
          <br>
          工程师
        </h1>
      </div>

      <!-- 打字机效果 -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 400, duration: 800 } }"
        class="text-2xl md:text-3xl text-gray-600 dark:text-gray-400 min-h-[100px] font-medium flex items-center justify-center text-center mb-12"
      >
        <span class="gradient-text-cyan font-semibold">{{ currentTitle }}</span>
        <span class="animate-pulse ml-2 text-primary-500">|</span>
      </div>

      <!-- 介绍文字 -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 800, duration: 800 } }"
        class="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-16 leading-relaxed"
      >
        重庆商务职业学院 · 云计算技术应用专业<br>
        <span class="gradient-text font-semibold">专注于云原生架构、容器化技术与 DevOps 实践</span>
      </p>

      <!-- 统计数据卡片 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1200, duration: 800 } }"
        class="grid grid-cols-3 gap-6 max-w-3xl mx-auto mb-16"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="glass-effect rounded-2xl p-6 card-hover"
        >
          <div class="text-4xl md:text-5xl font-bold gradient-text mb-3">
            {{ stat.value }}
          </div>
          <div class="text-sm font-medium text-gray-600 dark:text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- CTA 按钮 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1600, duration: 800 } }"
        class="flex flex-col sm:flex-row gap-6 justify-center items-center"
      >
        <a
          href="#contact"
          class="group relative px-10 py-5 bg-gradient-primary text-white rounded-2xl font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shine-effect"
        >
          <span class="relative z-10">联系我</span>
        </a>
        <a
          href="#projects"
          class="px-10 py-5 glass-effect text-gray-700 dark:text-gray-300 rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl"
        >
          查看项目
        </a>
      </div>
      
      <!-- 滚动提示 -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 2000, duration: 1000 } }"
        class="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 dark:text-gray-600"
      >
        <span class="text-sm font-medium">滚动探索</span>
        <div class="w-6 h-10 border-2 border-gray-300 dark:border-gray-700 rounded-full p-1">
          <div class="w-1.5 h-1.5 bg-gray-400 dark:bg-gray-600 rounded-full animate-bounce"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'

const titles = [
  '云原生架构师 in training',
  'DevOps 实践者',
  'Kubernetes 爱好者',
  '容器化技术专家'
]

const currentTitle = ref('')
const titleIndex = ref(0)
const charIndex = ref(0)
const isDeleting = ref(false)

const stats = [
  { value: '99.9%', label: '服务可用性' },
  { value: '80%', label: '效率提升' },
  { value: '24/7', label: '快速响应' }
]

let typingInterval: number

const typeEffect = () => {
  const currentText = titles[titleIndex.value]
  
  if (!isDeleting.value) {
    currentTitle.value = currentText.substring(0, charIndex.value + 1)
    charIndex.value++
    
    if (charIndex.value === currentText.length) {
      isDeleting.value = true
      return 2000 // 暂停2秒
    }
    return 100 // 打字速度
  } else {
    currentTitle.value = currentText.substring(0, charIndex.value - 1)
    charIndex.value--
    
    if (charIndex.value === 0) {
      isDeleting.value = false
      titleIndex.value = (titleIndex.value + 1) % titles.length
      return 500 // 切换标题前暂停
    }
    return 50 // 删除速度
  }
}

const startTyping = () => {
  const type = () => {
    const delay = typeEffect()
    typingInterval = window.setTimeout(type, delay)
  }
  type()
}

onMounted(() => {
  startTyping()
})

onUnmounted(() => {
  if (typingInterval) {
    clearTimeout(typingInterval)
  }
})
</script>

<style scoped>
.from-primary {
  --tw-gradient-from: #0070f3;
}

.to-accent {
  --tw-gradient-to: #00d4ff;
}
</style>
