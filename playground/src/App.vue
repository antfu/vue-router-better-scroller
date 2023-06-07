<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header sticky left-0 right-0 top-0 p-4 border="b gray/10" shadow bg-white>
    <nav flex="~ gap-8" px8>
      <button hover:text-green6 @click="$router.back()">
        Back
      </button>
      <RouterLink to="/" active-class="underline">
        Home
      </RouterLink>
      <RouterLink to="/about" active-class="underline">
        About
      </RouterLink>
      <!-- <a href="#hash">Hash</a> -->
    </nav>
  </header>
  <div p10>
    <RouterView />
  </div>
</template>
