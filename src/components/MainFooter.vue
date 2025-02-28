<template>
  <footer class="footer bg-neutral text-neutral-content items-center p-4">
    <aside class="grid-flow-col items-center">
      <slot></slot>
      <p>Copyright © {{ new Date().getFullYear() }} Akkad LLC. - All right reserved</p>
    </aside>
  </footer>
</template>
