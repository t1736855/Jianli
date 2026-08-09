<template>
  <section id="projects" class="py-20 px-6 bg-white dark:bg-gray-950">
    <div class="max-w-7xl mx-auto">
      <h2
        v-motion
        :initial="{ opacity: 0, y: 20 }"
        :visible-once="{ opacity: 1, y: 0 }"
        class="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900 dark:text-white"
      >
        项目经历
      </h2>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div
          v-for="(project, index) in projects"
          :key="index"
          v-motion
          :initial="{ opacity: 0, y: 20 }"
          :visible-once="{ opacity: 1, y: 0, transition: { delay: index * 100 } }"
          class="glass-effect rounded-3xl p-8 hover:shadow-2xl transition-all duration-300"
        >
          <h3 class="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
            {{ project.title }}
          </h3>
          <p class="text-gray-600 dark:text-gray-400 mb-6">
            {{ project.description }}
          </p>
          
          <!-- 技术栈 -->
          <div class="flex flex-wrap gap-2 mb-6">
            <span
              v-for="tech in project.tech"
              :key="tech"
              class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full text-sm"
            >
              {{ tech }}
            </span>
          </div>

          <!-- 成果 -->
          <div class="space-y-2">
            <div v-for="result in project.results" :key="result" class="flex items-start gap-2">
              <span class="text-green-500 mt-1">✓</span>
              <span class="text-gray-600 dark:text-gray-400 text-sm">{{ result }}</span>
            </div>
          </div>
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
