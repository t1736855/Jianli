<template>
  <section id="projects" class="relative py-24 px-6 bg-white dark:bg-gray-950 overflow-hidden">
    <!-- 背景网格 -->
    <div class="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000,transparent)]"></div>
    
    <div class="relative max-w-7xl mx-auto z-10">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-5xl md:text-6xl font-bold text-center mb-4 text-gray-900 dark:text-white"
      >
        项目经历
      </h2>
      <p
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0, transition: { delay: 200 } }"
        class="text-center text-gray-600 dark:text-gray-400 mb-16 text-lg"
      >
        实战项目经验，解决真实业务问题
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 30 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 200, duration: 600 } }"
          class="group relative glass-effect rounded-3xl p-8 card-hover overflow-hidden"
        >
          <!-- 项目编号标签 -->
          <div class="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500/20 to-accent-500/20 flex items-center justify-center">
            <span class="text-xl font-bold gradient-text">{{ String(index + 1).padStart(2, '0') }}</span>
          </div>
          
          <div class="relative z-10">
            <h3 class="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white pr-16">
              {{ project.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {{ project.description }}
            </p>
            
            <!-- 技术标签 -->
            <div class="flex flex-wrap gap-2 mb-8">
              <span
                v-for="tech in project.tech"
                :key="tech"
                class="px-4 py-2 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-primary-900/30 dark:to-purple-900/30 text-primary-700 dark:text-primary-300 rounded-xl text-sm font-medium border border-primary-200/50 dark:border-primary-700/50 hover:scale-105 transition-transform"
              >
                {{ tech }}
              </span>
            </div>

            <!-- 成果列表 -->
            <div class="space-y-3">
              <div v-for="result in project.results" :key="result" class="flex items-start gap-3 group/item">
                <div class="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center mt-0.5">
                  <span class="text-white text-sm">✓</span>
                </div>
                <span class="text-gray-700 dark:text-gray-300 leading-relaxed group-hover/item:text-primary-600 dark:group-hover/item:text-primary-400 transition-colors">{{ result }}</span>
              </div>
            </div>
          </div>
          
          <!-- 悬停效果装饰 -->
          <div class="absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const projects = [
  {
    title: '企业级云原生平台建设',
    description: '基于 Kubernetes 构建多租户容器云平台，支持应用的全生命周期管理',
    tech: ['Kubernetes', 'Docker', 'Istio', 'Prometheus', 'Grafana'],
    results: [
      '降低运维成本 60%',
      '提升部署效率 80%',
      '实现服务 99.9% 高可用'
    ]
  },
  {
    title: 'DevOps 自动化流水线',
    description: '构建 CI/CD 自动化流水线，实现代码提交到生产部署的全流程自动化',
    tech: ['Jenkins', 'GitLab CI', 'Docker', 'Ansible', 'Terraform'],
    results: [
      '发布频率提升 10 倍',
      '故障恢复时间减少 70%',
      '代码质量显著提升'
    ]
  },
  {
    title: '微服务架构改造',
    description: '将单体应用拆分为微服务架构，提升系统可扩展性和可维护性',
    tech: ['Spring Cloud', 'Redis', 'MySQL', 'RabbitMQ', 'Nginx'],
    results: [
      '系统并发能力提升 5 倍',
      '模块独立部署',
      '降低系统耦合度'
    ]
  },
  {
    title: '监控告警体系建设',
    description: '搭建全栈监控告警系统，覆盖基础设施、应用和业务层面',
    tech: ['Prometheus', 'Grafana', 'ELK', 'Alertmanager'],
    results: [
      '实现全链路监控',
      '故障发现时间 < 1分钟',
      '运维效率提升 50%'
    ]
  }
]
</script>
