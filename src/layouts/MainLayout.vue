<script setup>
import { ref } from 'vue'
import MainHeader from '@/components/MainHeader.vue'
import MainFooter from '@/components/MainFooter.vue'

const theme = ref('light')
const themes = ref(['light', 'dark'])
</script>

<template>
  <div
    class="flex flex-col min-h-screen"
    :data-theme="theme"
  >
    <main-header></main-header>
    <main class="p-4 flex-grow">
      <slot></slot>
    </main>
    <main-footer>
      <div>
        <label for="theme">Theme:</label>
        <select
          id="theme"
          v-model="theme"
        >
          <option
            v-for="theme in themes"
            :key="theme"
            :value="theme"
          >{{ theme }}</option>
        </select>
      </div>
    </main-footer>
  </div>
</template>
