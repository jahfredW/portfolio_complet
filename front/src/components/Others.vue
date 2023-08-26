<template>
    <div class="grid grid-cols-2 gap-10 mx-auto lg:max-w-screen-lg lg:grid-cols-4">
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="vite" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/vite.svg" alt="Logo de viteJS" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Vite</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="jQuery" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/jquery.svg" alt="Logo de Jquery" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">JQuery</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="figma" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/figma.svg" alt="Logo de Figma" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Figma</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="mysql" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/mysql.svg" alt="Logo de Mysql" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">MySql</p>
        </div>
      </div>
      <!-- <div  @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="js" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/js.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Javascript</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="python" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/python.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p  class="text-lg font-bold opacity-0">Python</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="c" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/c.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">C</p>
        </div>
      </div>
      <div  @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="cplus" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/cplus.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">C++</p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="html" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/html.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">HTML 5 </p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="css" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/css.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">CSS </p>
        </div>
      </div>
      <div @mouseenter="show_text($event)" @mouseleave="hide_text($event)" class="flex flex-col items-center">
        <img ref="dart" class="object-cover w-20 h-20 mb-2 rounded-full shadow" src="/assets/dart.svg" alt="Person" />
        <div class="flex flex-col items-center">
          <p class="text-lg font-bold opacity-0">Dart</p>
        </div>
      </div> -->
    </div>
</template>

<script setup>

import { onMounted, ref } from 'vue';
import { gsap } from 'gsap'

const vite = ref(null);
const jQuery = ref(null);
const figma = ref(null);
const mysql = ref(null);
// const python = ref(null);
// const c = ref(null);
// const cplus = ref(null);
// const html = ref(null);
// const css = ref(null);
// const dart = ref(null);


onMounted( () => {

    vite.value.style.transform = 'translateX(-500%)'; 
    jQuery.value.style.transform = 'translateY(-500%)'; 
    figma.value.style.transform = 'translateY(-500%) translateX(-200%)'; 
    mysql.value.style.transform = 'translateY(-500%) translateX(-600%)'; 
    


})

onMounted(() => {
      const elementsToAnimate = [
        vite.value,
        jQuery.value,
        figma.value,
        mysql.value,
        // cplus.value,
        // html.value,
        // css.value,
        // dart.value
      ];

      elementsToAnimate.forEach((element, index) => {
        // Déplacer les éléments en dehors de l'écran pour les masquer
        gsap.set(element, { x: -500, y: -800 });

        // Animer les éléments vers leur position finale (0, 0)
        gsap.to(element, {
          duration: 0.5,
          x: 0,
          y: 0,
          ease: "power4",
          delay: 0.1 * index // Chaque élément commence après le précédent
        });
      });
    });


// const show_text = (event) => {
//     gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1.2, ease: "elastic.out"});
//     const text = event.target.children[1].children[0];
//     event.target.style.transform = 'scale(1.2)'; 
//     event.target.style.cursor= 'pointer'; 
//     console.log(text);
//     text.style.opacity = "100";
//     text.style.transition = 'opacity 2s ease';
    
// }

// const hide_text = (event) => {
//     gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1, ease: "elastic.out" });
//     const text = event.target.children[1].children[0];
//     text.style.opacity = "0";
//     text.style.transition = 'opacity 2s ease';
// }

const show_text = (event) => {
  gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1.2, ease: "elastic.out" });
  const text = event.target.children[1].children[0];
  gsap.to(text, { duration: 2, opacity: 1, ease: "ease-in-out" });
  event.target.style.cursor = 'pointer';
}

const hide_text = (event) => {
  gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1, ease: "elastic.out" });
  const text = event.target.children[1].children[0];
  gsap.to(text, { duration: 2, opacity: 0, ease: "ease-in-out" });
}


</script>