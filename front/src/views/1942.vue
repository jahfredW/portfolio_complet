<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="flex flex-col p-5">
      <h2
        class="max-w-lg font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span>
          <h2
            class="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
          >
            <span class="inline-block mb-1 sm:mb-4"> 1947<br class="hidden md:block" /> </span>
            <div
              class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
            ></div>
          </h2>
        </span>
      </h2>
      <div>Ceci est un test</div>
    </div>
    <div>
      <video class="p-5 w-full rounded" controls>
        <source src="/docs/videos/flowbite.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})
</script>
