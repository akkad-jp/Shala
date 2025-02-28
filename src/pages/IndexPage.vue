<script setup>
import MainLayout from '@/layouts/MainLayout.vue'

const vueLinks = [
  { name: 'IndexPage', path: '/' },
  { name: 'TestPage', path: '/test' },
]

const htmlLinks = [
  { name: 'index.html', path: '/html/' },
  { name: 'test.html', path: '/html/test.html' },
]
</script>

<template>
  <main-layout>
    <p class="text-3xl">IndexPage</p>
    <p>このページはVue.js が表示しています。</p>
    <div class="outline">
      <h2>リンク</h2>
      <h3>Vue.js のページ</h3>
      <ul>
        <li v-for="link in vueLinks" :key="link.path">
          <router-link :to="link.path">{{ link.name }}</router-link>
        </li>
      </ul>
    </div>
    <div class="outline">
      <h3>HTML のページ</h3>
      <ul>
        <li v-for="link in htmlLinks" :key="link.path">
          <a :href="link.path">{{ link.name }}</a>
        </li>
      </ul>
    </div>
  </main-layout>
</template>
<style scoped>
</style>

<style scoped>
.outline {
  @apply mx-2 my-4 p-2 border border-gray-100 rounded;
}
</style>
