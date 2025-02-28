<script setup>
import MainLayout from '@/layouts/MainLayout.vue'
</script>

<template>
  <main-layout>
    <h1>TestPage</h1>
    <div>
      <p>このページはVue.js が表示しています。</p>
      <p>このページはテスト用のページです。</p>
    </div>
    <div>
      <router-link to="/">IndexPage</router-link>
    </div>
  </main-layout>
</template>
