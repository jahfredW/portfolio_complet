<template>
  <a
    href="#"
    class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
  >
    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
      {{ props.message.mail }}
    </h5>
    <p class="font-normal text-gray-700 dark:text-gray-400">
      {{ props.message.message }}
    </p>
  </a>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({ message: Object })
</script>
