<template>
  <section id="contact" class="py-20 px-6 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-4xl mx-auto">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
      >
        联系我
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(contact, index) in contacts"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          :hovered="{ y: -5 }"
          @click="copyToClipboard(contact.value)"
          class="glass-effect rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all duration-300"
        >
          <div class="flex items-center gap-4">
            <div :class="['w-12 h-12 rounded-xl bg-gradient-to-br', contact.color, 'flex items-center justify-center']">
              <component :is="contact.icon" class="w-6 h-6 text-white" />
            </div>
            <div class="flex-1">
              <h3 class="font-semibold text-gray-900 dark:text-white mb-1">
                {{ contact.label }}
              </h3>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                {{ contact.value }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Toast Notification -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y-4"
      >
        <div
          v-if="showToast"
          class="fixed bottom-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white px-6 py-3 rounded-lg shadow-xl z-50"
        >
          ✓ 已复制到剪贴板
        </div>
      </Transition>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Mail, Phone, Github, Linkedin } from 'lucide-vue-next'

const showToast = ref(false)

const contacts = [
  {
    icon: Mail,
    label: '邮箱',
    value: 'yunjie.zhang@example.com',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: Phone,
    label: '电话',
    value: '+86 138 0000 0000',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'github.com/zhangyunjie',
    color: 'from-gray-700 to-gray-800'
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/zhangyunjie',
    color: 'from-blue-600 to-blue-700'
  }
]

const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text)
    showToast.value = true
    setTimeout(() => {
      showToast.value = false
    }, 2000)
  } catch (err) {
    console.error('Failed to copy:', err)
  }
}
</script>
