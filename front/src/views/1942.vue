<template>
  <div>
    <h2
      class="max-w-lg font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl px-5 mt-5"
    >
      <span>
        <h2
          class="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
        >
          <span class="inline-block mb-1 sm:mb-4"> 1942<br class="hidden md:block" /> </span>
          <div
            class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
          ></div>
        </h2>
      </span>
    </h2>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div class="flex flex-col justify-center items-center p-3 mt-y">
      <div class="flex justify-center w-full">
        <video class="w-full md:w-3/4" controls>
          <source
            src="https://drive.google.com/uc?id=1Wd67wGEc4j967smMaaWjEaRhkOs8qMuu"
            type="video/mp4"
          />
        </video>
      </div>

      <div class="text-center">Cliquez pour voir la vidéo de présentation</div>
    </div>

    <div class="flex flex-col m-5 p-3">
      <hr class="my-10 border-gray-300" />
      <div class="my-auto">
        <p>
          1942 est un jeu de tir codé from Scratch. J'ai essentiellement utilisé la Programmation
          Orientée Objet en y implémentant plusieurs design pattern, dont le SingleTon, le Factory
          ou le Composite.
        </p>
        <br />
        <p>Aucun moteur de jeu n'est utilisé, ce qui implique une gestion fine de la mémoire.</p>
        <br />
        <p>
          L'expérience de jeu évolue en fonction du support d'utilisation ( possibilité d'utiliser
          le gyroscope sur mobile )
        </p>
        <br />
        <a
          aria-label="view item"
          href="https://1942.fredgruwedev.com"
          target="_blank"
          class="text-xl justify-center flex font-bold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-5 mr-5"
          >Tester le jeu</a
        >
      </div>
    </div>
  </div>
  <hr class="my-10 border-gray-300 mx-3" />
  <div class="flex justify-evenly flex-wrap p-3">
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
        ref="cplus"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/sass.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Sass</p>
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
        ref="typScript"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/typeScript.svg"
        alt="Logo de TypeScript"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">TypeScript</p>
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
        src="/assets/vite.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Vite</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { initFlowbite } from 'flowbite'
import { onMounted, ref } from 'vue'
import { gsap } from 'gsap'

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite()
})

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
