<template>
  <section class="min-h-screen flex items-center justify-center px-6 pt-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-950 dark:to-gray-900">
    <div class="max-w-5xl w-full text-center">
      <!-- 主标题 -->
      <h1
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { duration: 800 } }"
        class="text-5xl md:text-7xl font-bold mb-6 text-gray-900 dark:text-white"
      >
        卓越的云计算工程师
      </h1>

      <!-- 打字机效果 -->
      <div
        v-motion
        :initial="{ opacity: 0 }"
        :enter="{ opacity: 1, transition: { delay: 300, duration: 800 } }"
        class="text-xl md:text-2xl text-gray-600 dark:text-gray-400 min-h-[80px] font-medium flex items-center justify-center text-center mb-8"
      >
        <span class="gradient-text">{{ currentTitle }}</span>
        <span class="animate-pulse ml-1">|</span>
      </div>

      <!-- 介绍文字 -->
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 600, duration: 800 } }"
        class="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed"
      >
        重庆商务职业学院 · 云计算技术应用专业 | 专注于云原生架构、容器化技术与 DevOps 实践
      </p>

      <!-- 统计数据 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 900, duration: 800 } }"
        class="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-12"
      >
        <div
          v-for="(stat, index) in stats"
          :key="index"
          class="text-center"
        >
          <div class="text-3xl md:text-4xl font-bold gradient-text mb-2">
            {{ stat.value }}
          </div>
          <div class="text-sm text-gray-600 dark:text-gray-400">
            {{ stat.label }}
          </div>
        </div>
      </div>

      <!-- CTA 按钮 -->
      <div
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :enter="{ opacity: 1, y: 0, transition: { delay: 1200, duration: 800 } }"
        class="flex flex-col sm:flex-row gap-4 justify-center items-center"
      >
        <a
          href="#contact"
          class="px-8 py-4 bg-gradient-to-r from-primary to-accent text-white rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          联系我
        </a>
        <a
          href="#projects"
          class="px-8 py-4 glass-effect text-gray-700 dark:text-gray-300 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          查看项目
        </a>
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
