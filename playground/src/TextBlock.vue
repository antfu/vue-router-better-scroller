<script setup lang="ts">
import { paragraphs } from './ipsum'

const colors = [
  '#40513B',
  '#609966',
  '#9DC08B',
]
</script>

<template>
  <div>
    <p
      v-for="p, idx in paragraphs" :key="idx" :style="{
        color: colors[idx % colors.length],
      }" px2 py1
    >
      {{ p }}
    </p>
  </div>
</template>
