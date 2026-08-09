<template>
  <div class="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white dark:bg-gray-950">
    <div class="w-full max-w-md px-8">
      <!-- Logo/Icon -->
      <div class="mb-8 text-center">
        <div class="inline-block rounded-2xl bg-gradient-to-br from-primary to-accent p-4">
          <Cloud class="w-12 h-12 text-white" :size="48" />
        </div>
      </div>

      <!-- Loading Text -->
      <div class="mb-6 text-center">
        <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-2">
          {{ loadingText }}
        </h2>
        <p class="text-sm text-gray-500 dark:text-gray-400">
          Initializing Cloud Environment...
        </p>
      </div>

      <!-- Progress Bar -->
      <div class="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
        <div
          class="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
          :style="{ width: `${displayProgress}%` }"
        ></div>
      </div>

      <!-- Progress Percentage -->
      <div class="mt-4 text-center text-sm font-medium text-gray-600 dark:text-gray-400">
        {{ displayProgress }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { Cloud } from 'lucide-vue-next'

const emit = defineEmits<{
  loaded: []
}>()

const progress = ref(0)
const loadingText = ref('Loading')

// 显示的进度（向下取整，确保不超过100）
const displayProgress = computed(() => {
  return Math.min(Math.floor(progress.value), 100)
})

const loadingTexts = [
  'Loading',
  'Loading.',
  'Loading..',
  'Loading...'
]

onMounted(() => {
  let textIndex = 0
  const textInterval = setInterval(() => {
    loadingText.value = loadingTexts[textIndex % loadingTexts.length]
    textIndex++
  }, 300)

  const duration = 2000
  const intervalTime = 20
  const increment = 100 / (duration / intervalTime)

  const interval = setInterval(() => {
    progress.value += increment
    
    // 当进度达到或超过100时停止
    if (progress.value >= 100) {
      progress.value = 100
      clearInterval(interval)
      clearInterval(textInterval)
      
      setTimeout(() => {
        emit('loaded')
      }, 300)
    }
  }, intervalTime)
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
