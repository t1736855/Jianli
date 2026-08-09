<template>
  <section class="relative h-[200vh] bg-white dark:bg-gray-950">
    <div class="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
      <!-- 大卡片 - 保持显示，作为背景 -->
      <div
        :style="{
          transform: `scale(${bigCardScale})`,
          filter: `blur(${bigCardBlur}px)`
        }"
        class="absolute inset-0 flex items-center justify-center p-8 pointer-events-none"
      >
        <div class="w-full max-w-5xl h-[600px] rounded-3xl bg-gradient-to-br from-primary via-accent to-purple-600 shadow-2xl p-12 flex flex-col justify-center items-center text-white relative overflow-hidden">
          <div class="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
          <h2 class="text-5xl font-bold mb-4 relative z-10">专业服务</h2>
          <p class="text-xl opacity-90 relative z-10">为企业数字化转型和云原生落地提供技术支持</p>
        </div>
      </div>

      <!-- 三个小卡片 - 叠加在大卡片上方 -->
      <div
        :style="{ opacity: smallCardsOpacity }"
        class="relative z-10 w-full max-w-7xl px-8"
      >
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div
            v-for="(card, index) in cards"
            :key="index"
            :style="{ transform: `scale(${smallCardsScale})` }"
            v-motion
            :initial="{ opacity: 0, y: 50 }"
            :enter="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
            :hovered="{ y: -10, scale: 1.05 }"
            class="h-[500px] rounded-3xl bg-white dark:bg-gray-900 shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 group cursor-pointer"
          >
            <div :class="['h-full p-8 flex flex-col', card.bg, 'relative']">
              <!-- 图标区域 -->
              <div class="flex-shrink-0 mb-6">
                <div :class="['w-14 h-14 rounded-2xl bg-gradient-to-br', card.color, 'flex items-center justify-center group-hover:scale-110 transition-transform duration-300']">
                  <component :is="card.icon" class="w-7 h-7 text-white" />
                </div>
              </div>

              <!-- 标题 -->
              <div class="space-y-2 mb-6">
                <div class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  {{ card.subtitle }}
                </div>
                <h3 class="text-3xl font-bold text-gray-900 dark:text-white">
                  {{ card.title }}
                </h3>
              </div>

              <!-- 描述 -->
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed flex-grow">
                {{ card.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Zap, Target, Lightbulb } from 'lucide-vue-next'

const bigCardScale = ref(1)
const bigCardBlur = ref(0)
const smallCardsOpacity = ref(0)
const smallCardsScale = ref(0.8)

const cards = [
  {
    icon: Zap,
    subtitle: 'Fast Iteration',
    title: '快速迭代',
    description: '如果您正在经营一个新的业务单元，或者完全是一个新的企业，或者正在进入一个新的市场',
    bg: 'bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-950',
    color: 'from-orange-500 to-orange-600'
  },
  {
    icon: Target,
    subtitle: 'All-in-One Solution',
    title: '一站式缩放',
    description: '如果您已经实现了产品/服务市场契合度，并希望将您的业务扩展到新的高度',
    bg: 'bg-gradient-to-br from-purple-50 to-white dark:from-gray-900 dark:to-gray-950',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Lightbulb,
    subtitle: 'Quick Solutions',
    title: '快速解决方案',
    description: '如果您非常清楚自己想要什么，需要一个能够介入并快速帮助您的团队',
    bg: 'bg-gradient-to-br from-pink-50 to-white dark:from-gray-900 dark:to-gray-950',
    color: 'from-purple-500 to-purple-600'
  }
]

const handleScroll = () => {
  const section = document.querySelector('.relative.h-\\[200vh\\]') as HTMLElement
  if (!section) return

  const rect = section.getBoundingClientRect()
  const scrollProgress = Math.max(0, Math.min(1, -rect.top / (rect.height - window.innerHeight)))

  // 大卡片缩放和模糊
  bigCardScale.value = 1 - scrollProgress * 0.05
  bigCardBlur.value = scrollProgress * 10

  // 小卡片透明度和缩放
  if (scrollProgress > 0.2) {
    const progress = Math.min(1, (scrollProgress - 0.2) / 0.3)
    smallCardsOpacity.value = progress
    smallCardsScale.value = 0.8 + progress * 0.2
  } else {
    smallCardsOpacity.value = 0
    smallCardsScale.value = 0.8
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.from-primary {
  --tw-gradient-from: #0070f3;
}

.via-accent {
  --tw-gradient-via: #00d4ff;
}
</style>
