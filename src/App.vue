<template>
  <div id="app">
    <PageLoader v-if="loading" @loaded="loading = false" />
    <div v-else>
      <Navbar />
      <main>
        <HeroSection />
        <TransitionSection />
        <EducationSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import PageLoader from './components/PageLoader.vue'
import Navbar from './components/Navbar.vue'
import HeroSection from './components/HeroSection.vue'
import TransitionSection from './components/TransitionSection.vue'
import EducationSection from './components/EducationSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'

const loading = ref(true)

onMounted(() => {
  // 页面加载完成后，PageLoader 会自动调用 @loaded
})
</script>

<style scoped>
#app {
  min-height: 100vh;
}
</style>
