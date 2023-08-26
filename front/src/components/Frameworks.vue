<template>
    <div class="grid grid-cols-2 gap-10 mx-auto lg:max-w-screen-lg lg:grid-cols-4">
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="fastApi" class="object-cover w-20 h-20 mb-2 rounded-full" src="/assets/fastapi.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Fast API</p>
        </div>
      </div>
      <div  @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="symfony" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/symfony.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Symfony</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="vue" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/vuejs-icon.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p  class="text-lg font-bold opacity-0">Vue Js</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="django" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/django.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Django</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="tailwind" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/tailwind.svg" alt="logo de tailwind" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Tailwind</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="bootstrap" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/bootstrap.svg" alt="logo de boostrap" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Bootstrap</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="bulma" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/bulma.svg" alt="logo de bulma" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Bulma</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="flutter" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/flutter.svg" alt="logo de flutter" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Flutter</p>
        </div>
      </div>
      <!-- <div class="flex flex-col items-center">
        <img class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Andrew Larkin</p>
          <p class="text-sm text-gray-800">Backend Developer</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Sophie Denmo</p>
          <p class="text-sm text-gray-800">Designer UI/UX</p>
        </div>
      </div>
      <div class="flex flex-col items-center">
        <img class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="https://images.pexels.com/photos/3931553/pexels-photo-3931553.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold">Benedict Caro</p>
          <p class="text-sm text-gray-800">Frontend Developer</p>
        </div>
      </div>  -->
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { gsap } from 'gsap'

const fastApi = ref(null);
const symfony = ref(null);
const vue = ref(null);
const django = ref(null);
const tailwind = ref(null);
const bootstrap = ref(null);
const bulma = ref(null);
const flutter = ref(null);


onMounted( () => {

    const frameworks_list = [fastApi.value, symfony.value, vue.value, django.value, tailwind.value, bootstrap.value, bulma.value,
  flutter.value]


    frameworks_list.forEach((element, index) => {

      gsap.set(element, { x: -500, y: -800 });

      gsap.to(element, { duration : 0.5, x: 0, y: 0, ease: "power4", delay: index * 0.1 })
    });
 

})


const show_text = (event) => {
  gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1.2, ease: "power4" });
  const text = event.target.children[1].children[0];
  gsap.to(text, { duration: 2, opacity: 1, ease: "ease-in-out" });
  event.target.style.cursor = 'pointer';
}

const hide_text = (event) => {
  gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1, ease: "power4" });
  const text = event.target.children[1].children[0];
  gsap.to(text, { duration: 2, opacity: 0, ease: "ease-in-out" });
}


</script>