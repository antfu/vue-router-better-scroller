<script setup lang="ts">
import { paragraphs } from './ipsum'

const colors = [
  '#3C6255',
  '#61876E',
  '#A6BB8D',
  '#EAE7B1',
  '#A6BB8D',
  '#61876E',
]
</script>

<template>
  <div flex="~ col gap-5">
    <p v-for="p, idx in paragraphs" :key="idx" :style="{ color: colors[idx % colors.length] }">
      {{ p }}
    </p>
  </div>
</template>
