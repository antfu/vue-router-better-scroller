<script setup lang="ts">
import TextBlock from '../TextBlock.vue'
</script>

<template>
  <main>
    <div>Scroll the box, go to another page and go back.</div>

    <TextBlock
      class="scrollable"
      p5 rounded mt-5 w-150 h-80 border="~ block" of-auto
    />
  </main>
</template>
