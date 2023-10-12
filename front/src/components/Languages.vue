<template>
  <div class="grid grid-cols-2 gap-10 mx-auto lg:max-w-screen-lg lg:grid-cols-4">
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="php"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/php.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">PHP</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="js"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/js.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Javascript</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="python"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/python.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Python</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="c"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/c.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">C</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="cplus"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/cplus.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">C++</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="html"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/html.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">HTML 5</p>
        <!-- <p class="text-sm text-gray-800">Backend Developer</p> -->
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="css"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/css.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">CSS</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="dart"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/dart.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Dart</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="csharp"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/c-sharp.svg"
        alt="Logo de c-sharp"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">C-sharp</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="typScript"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/typeScript.svg"
        alt="Logo de TypeScript"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">TypeScript</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

const php = ref(null)
const js = ref(null)
const python = ref(null)
const c = ref(null)
const cplus = ref(null)
const html = ref(null)
const css = ref(null)
const dart = ref(null)
const lua = ref(null)
const csharp = ref(null)
const typScript = ref(null)

// onMounted( () => {

//     php.value.style.transform = 'translateX(-500%)';
//     js.value.style.transform = 'translateY(-500%)';
//     python.value.style.transform = 'translateY(-500%) translateX(+200%)';
//     c.value.style.transform = 'translateY(-500%) translateX(+400%)';
//     cplus.value.style.transform = 'translateX(-500%) translateY(+500%)';
//     html.value.style.transform = 'translateX(-500%) translateY(+700%)';
//     css.value.style.transform = 'translateY(+700%)';
//     dart.value.style.transform = 'translateX(+500%) translateY(+700%)';

//     gsap.to(python.value, { duration : 2, x: 0, y: 0, ease: "power3.out" })
//     gsap.to(js.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.4 })
//     gsap.to(php.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.2 })
//     gsap.to(c.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.2 })
//     gsap.to(cplus.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.2 })
//     gsap.to(html.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.2 })
//     gsap.to(css.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.2 })
//     gsap.to(dart.value, { duration : 2, x: 0, y: 0, ease: "elastic.out",  delay: 0.2 })

// })

onMounted(() => {
  const elementsToAnimate = [
    php.value,
    js.value,
    python.value,
    c.value,
    cplus.value,
    html.value,
    css.value,
    dart.value,
    lua.value,
    csharp.value,
    typScript.value
  ]

  elementsToAnimate.forEach((element, index) => {
    // Déplacer les éléments en dehors de l'écran pour les masquer
    gsap.set(element, { x: -500, y: -800 })

    // Animer les éléments vers leur position finale (0, 0)
    gsap.to(element, {
      duration: 0.5,
      x: 0,
      y: 0,
      ease: 'power4',
      delay: 0.1 * index // Chaque élément commence après le précédent
    })
  })
})

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
  gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1.2, ease: 'elastic.out' })
  const text = event.target.children[1].children[0]
  gsap.to(text, { duration: 2, opacity: 1, ease: 'ease-in-out' })
  event.target.style.cursor = 'pointer'
}

const hide_text = (event) => {
  gsap.to(event.target, { duration: 2, x: 0, y: 0, scale: 1, ease: 'elastic.out' })
  const text = event.target.children[1].children[0]
  gsap.to(text, { duration: 2, opacity: 0, ease: 'ease-in-out' })
}
</script>
