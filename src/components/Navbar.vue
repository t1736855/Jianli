<template>
  <nav
    :class="[
      'fixed top-0 left-0 right-0 z-40 transition-all duration-300',
      scrolled ? 'glass-effect shadow-lg' : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-6 py-4">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <a href="#" class="text-2xl font-bold gradient-text">
          张云阶
        </a>

        <!-- Desktop Menu -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            v-for="item in menuItems"
            :key="item.href"
            :href="item.href"
            class="text-gray-700 dark:text-gray-300 hover:text-primary transition-colors"
          >
            {{ item.label }}
          </a>
          
          <!-- Theme Toggle -->
          <button
            @click="themeStore.toggleTheme()"
            class="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
          >
            <Sun v-if="themeStore.theme === 'dark'" :size="20" />
            <Moon v-else :size="20" />
          </button>
        </div>

        <!-- Mobile Menu Button -->
        <button
          @click="mobileMenuOpen = !mobileMenuOpen"
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
        >
          <Menu v-if="!mobileMenuOpen" :size="24" />
          <X v-else :size="24" />
        </button>
      </div>

      <!-- Mobile Menu -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div v-if="mobileMenuOpen" class="md:hidden mt-4 space-y-2">
          <a
            v-for="item in menuItems"
            :key="item.href"
            :href="item.href"
            class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
            @click="mobileMenuOpen = false"
          >
            {{ item.label }}
          </a>
        </div>
      </Transition>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'
import { useThemeStore } from '../stores/theme'

const themeStore = useThemeStore()
const scrolled = ref(false)
const mobileMenuOpen = ref(false)

const menuItems = [
  { label: '首页', href: '#' },
  { label: '教育背景', href: '#education' },
  { label: '技能专长', href: '#skills' },
  { label: '项目经历', href: '#projects' },
  { label: '联系我', href: '#contact' },
]

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  themeStore.initTheme()
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>
