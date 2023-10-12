<template>
  <div v-if="isDesktop" class="bg-blue-700">
    <div
      class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div>
        <div class="grid grid-cols-12">
          <div class="col-span-4">
            <h2
              class="text-center max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto"
            >
              <span class="relative inline-block">
                <svg
                  viewBox="0 0 52 24"
                  fill="currentColor"
                  class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-deep-purple-accent-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                >
                  <defs>
                    <pattern
                      id="700c93bf-0068-4e32-aafe-ef5b6a647708"
                      x="0"
                      y="0"
                      width=".135"
                      height=".30"
                    >
                      <circle cx="1" cy="1" r=".7"></circle>
                    </pattern>
                  </defs>
                  <rect
                    fill="url(#700c93bf-0068-4e32-aafe-ef5b6a647708)"
                    width="52"
                    height="24"
                  ></rect>
                </svg>
                <span class="relative">Frédéric Gruwé</span>
              </span>
            </h2>
          </div>

          <div v-if="isDesktop" class="col-span-4 flex justify-center items-center">
            <img
              class="rounded-full shadow-lg md:h-96 h-64 myPhoto"
              src="/assets/images/moi.jpg"
              alt="photo de profil"
            />
          </div>
          <div class="col-span-4 text-base md:text-lg flex flex-col justify-end">
            <div class="text-center text-white text-2xl font-bold">
              &lt Concepteur - Développeur /&gt
            </div>
          </div>
          <!-- <div>
              <a
                href="/"
                class="inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
              >
                Get started
              </a>
            </div> -->
        </div>
      </div>
    </div>
  </div>
  <!-- template a propos -->

  <div
    v-if="!isDesktop"
    id="propos"
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-10 lg:grid-cols-2 flex-col justify-center">
      <div class="flex justify-center items-center">
        <img class="rounded-full shadow-lg md:h-96 h-64" src="/assets/images/moi.jpg" alt="" />
      </div>
    </div>
  </div>
  <div
    v-if="!isDesktop"
    class="h-1 ml-auto duration-500 transform bg-blue-accent-700 scale-x-30"
  ></div>

  <!-- ***************************************************************************************************************************************** -->
  <div
    class="px-4 py-10 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 mt-5 md:mt-20"
  >
    <div class="max-w-xl mb-15 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="text-center max-w-lg mb-6 font-sans text-xl font-bold leading-none tracking-tight text-blue-700 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-16 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="1d4040f3-9f3e-4ac7-b117-7d4009658ced"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#1d4040f3-9f3e-4ac7-b117-7d4009658ced)" width="52" height="24"></rect>
          </svg>
          <span>Comment puis-je vous aider ?</span>
        </span>
      </h2>
    </div>

    <!-- carousel test -->

    <!-- carousel test  -->
    <div class="grid gap-10 sm:grid-cols-1 lg:grid-cols-3">
      <div @mouseenter="testEnter" @mouseleave="displayP">
        <div
          class="relative overflow-hidden transition duration-300 transform rounded-tl-3xl rounded-br-3xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <div v-if="isDesktop" class="absolute inset-0 bg-white bg-opacity-25"></div>
          <div v-if="!isDesktop" class="absolute inset-0 bg-black bg-opacity-70"></div>
          <div v-if="isDesktop" ref="aideDev" class="absolute bg-black-500 top-0 h-20 w-full">
            <div class="bg-black bg-opacity-75 w-full h-full flex justify-center items-center">
              <p class="font-bold text-white tracking-wide px-5">Développement full stack</p>
            </div>
          </div>

          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/perso.jpg"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center"
            :class="{
              'transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-5 text-lg font-bold text-gray-100">Développement web Full stack</p>
            <p class="mb-5 text-xs text-gray-100">
              Vous recherchez un développeur full stack avec des compétences en Python (Django), PHP
              (Symfony), C# ( .NET) et/ou React / Vue.js ?
            </p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Prenons rendez-vous pour Discuter de votre projet.
            </p>
            <div v-if="!isDesktop" class="pt-2 flex justify-center w-1/2 md:w-1/4 mx-auto">
              <button
                @click="redirectToRendezVous"
                type="submit"
                class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-50 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span class="ml-2 text-center">PRENDRE RDV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div @mouseenter="testEnter" @mouseleave="displayP">
        <div
          class="relative overflow-hidden transition duration-300 transform rounded-tl-3xl rounded-br-3xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <div v-if="isDesktop" class="absolute inset-0 bg-white bg-opacity-25"></div>
          <div v-if="!isDesktop" class="absolute inset-0 bg-black bg-opacity-70"></div>
          <div v-if="isDesktop" ref="aideDev" class="absolute bg-black-500 top-0 h-20 w-full">
            <div class="bg-black bg-opacity-75 w-full h-full flex justify-center items-center">
              <p class="font-bold text-white tracking-wide px-5">Renforcement de vos équipes</p>
            </div>
          </div>

          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/devteam.jpg"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center"
            :class="{
              'transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-5 text-lg font-bold text-gray-100">Renforcement de vos équipes</p>
            <p class="mb-5 text-xs text-gray-100">
              Vous recherchez à compléter votre équipe avec un développeur capable de s'adapter
              rapidement ?
            </p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Prenons rendez-vous pour Discuter de votre projet.
            </p>
            <div v-if="!isDesktop" class="pt-2 flex justify-center w-1/2 md:w-1/4 mx-auto">
              <button
                @click="redirectToRendezVous"
                type="submit"
                class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-50 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span class="ml-2 text-center">PRENDRE RDV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div @mouseenter="testEnter" @mouseleave="displayP">
        <div
          class="relative overflow-hidden transition duration-300 transform rounded-tl-3xl rounded-br-3xl shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl"
        >
          <div v-if="isDesktop" class="absolute inset-0 bg-white bg-opacity-25"></div>
          <div v-if="!isDesktop" class="absolute inset-0 bg-black bg-opacity-70"></div>
          <div v-if="isDesktop" ref="aideDev" class="absolute bg-black-500 top-0 h-20 w-full">
            <div class="bg-black bg-opacity-75 w-full h-full flex justify-center items-center">
              <p class="font-bold text-white tracking-wide px-5">
                Conception - Développement de Projets
              </p>
            </div>
          </div>

          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/dev.jpg"
            alt="Person"
          />
          <div
            class="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center"
            :class="{
              'transition-opacity duration-300 bg-black bg-opacity-75 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-5 text-lg font-bold text-gray-100">Réalisation de Projets</p>
            <p class="mb-3 text-xs text-gray-100">
              De la conception au développement de vos projets, je suis prêt à investir mes
              compétences dans des domaines techniques et variés.
            </p>
            <p class="mb-4 text-xs tracking-wide text-gray-400">
              Prenons rendez-vous pour Discuter de votre projet.
            </p>
            <div v-if="!isDesktop" class="pt-2 flex justify-center w-1/2 md:w-1/4 mx-auto">
              <button
                @click="redirectToRendezVous"
                class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-50 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
                  />
                </svg>
                <span class="ml-2 text-center">PRENDRE RDV</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
    <div v-if="isDesktop" class="pt-4 mt-10 flex justify-center w-1/2 md:w-1/4 mx-auto">
      <button
        @click="redirectToRendezVous"
        type="submit"
        class="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-50 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z"
          />
        </svg>
        <span class="ml-2 text-center">Prendre rendez-vous</span>
      </button>
    </div>
  </div>

  <div id="propos" class="px-4 mx-auto sm:max-w-xl md:max-w-full lg:w-1/2 md:px-24 lg:px-8">
    <div class="grid gap-10 lg:grid-cols-1 flex-col justify-center">
      <div class="p-10 flex items-center justify-center">
        <div class="flex-col justify-center">
          <hr class="mb-6 border-gray-300" />
          <h5 class="mb-4 text-4xl font-extrabold leading-none">
            Un développeur passionné<br class="hidden md:block" />
            <span class="inline-block text-blue-accent-700">à votre service</span>
          </h5>
          <p class="mb-6 text-gray-900">
            De formation scientifique, j'ai exercé prendant vingt ans en laboratoire Technique et
            Scientifique, au cours desquels j'ai occupé plusieurs postes à reponsabilité. Tout au
            long de ce parcours j'ai été amené à me former en autodidacte sur le métier du
            <strong>développement informatique</strong> ( processus d'automatisation et analyse de
            données). J'ai ensuite consolidé mes
            <span class="text-blue-accent-700"><strong>compétences</strong></span> en suivant le
            programme <span class="text-blue-accent-700"><strong>Vivre du Code</strong></span
            >, avant d'obtenir le titre pro de
            <span class="text-blue-accent-700"
              ><strong>Développeur Web et Web Mobile.</strong></span
            >
          </p>
          <p class="mb-6 text-gray-900">
            Je suis actuellement en formation de
            <span class="text-blue-accent-700"
              ><strong>Concepteur Développeur d'Applications.</strong></span
            >
          </p>
          <!-- <p class="mb-6 text-gray-1200">Mon objectif final serait d'obtenir le titre d'expert Full Stack</p> -->
          <hr class="border-gray-300" />
        </div>
      </div>
    </div>
  </div>

  <!-- ********************************************************************************************************************************************* -->
  <div
    class="px-4 py-16 mt-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
      <h2
        class="max-w-lg mb-5 text-center font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
          </svg>
          <h2
            class="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
          >
            <span class="inline-block mb-1 sm:mb-4"
              >Mes frameworks favoris<br class="hidden md:block" />
            </span>
            <div
              ref="blue_expand_1"
              id="blue_expand_1"
              class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
            ></div>
          </h2>
        </span>
      </h2>
    </div>
    <!-- carousel -->
    <div id="default-carousel" class="relative w-full" data-carousel="static">
      <!-- Carousel wrapper -->
      <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
        <!-- Item 1 -->
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full"
                src="/assets/vuejs-icon.svg"
                alt="logo du framework vueJS"
              />
              <img
                class="logo2 opacity-0"
                src="/assets/vuejs-icon.svg"
                alt="logo du framework vueJS"
              />
            </div>
            <!-- <div class=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <img class="logo2 w-full h-full" src="/assets/vuejs-icon.svg" alt="logo du framework vueJS">
            </div> -->
            <h6 class="title mb-3 md:mb-10 font-semibold text-xl md:text-4xl leading-5">VueJS3</h6>
            <p class="text mb-3 text-sm">
              Le FrameWork Front-end que j'affectionne particulièrement. Utilisé avec Vite, ça va
              franchement très vite !
            </p>
          </div>
        </div>
        <!-- Item 2 -->
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full"
                src="/assets/react.svg"
                alt="logo du framework vueJS"
              />
              <img class="logo2 opacity-0" src="/assets/react.svg" alt="logo du framework vueJS" />
            </div>
            <!-- <div class=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <img class="logo2 w-full h-full" src="/assets/vuejs-icon.svg" alt="logo du framework vueJS">
            </div> -->
            <h6 class="title mb-3 md:mb-10 font-semibold text-xl md:text-4xl leading-5">ReactJs</h6>
            <p class="text mb-3 text-sm">
              L'incontournable React, que l'on ne présente plus ! Même s'il s'agit plus d'une
              bibliothèque que d'un framework, il se démarque par sa flexibilité et ses
              performances.
            </p>
          </div>
        </div>
        <!-- Item 3 -->
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full"
                src="/assets/react-native.svg"
                alt="logo du framework vueJS"
              />
              <img
                class="logo2 opacity-0"
                src="/assets/react-native.svg"
                alt="logo du framework vueJS"
              />
            </div>
            <!-- <div class=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <img class="logo2 w-full h-full" src="/assets/vuejs-icon.svg" alt="logo du framework vueJS">
            </div> -->
            <h6 class="title mb-3 md:mb-10 font-semibold text-xl md:text-4xl leading-5">
              React Native
            </h6>
            <p class="text mb-3 text-sm">
              Le framework qui permet de créer des applications mobiles. C'est du react, mais avec
              les features natives des plateformes mobiles !
            </p>
          </div>
        </div>
        <!-- Item 4 -->
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full"
                src="/assets/flutter.svg"
                alt="logo du framework vueJS"
              />
              <img
                class="logo2 opacity-0"
                src="/assets/flutter.svg"
                alt="logo du framework vueJS"
              />
            </div>
            <!-- <div class=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <img class="logo2 w-full h-full" src="/assets/vuejs-icon.svg" alt="logo du framework vueJS">
            </div> -->
            <h6 class="title mb-3 md:mb-10 font-semibold text-xl md:text-4xl leading-5">Flutter</h6>
            <p class="text mb-3 text-sm">
              Flutter est un SDK open-source permettant de développer des applications mobiles.
              Utilise le langage DART.
            </p>
          </div>
        </div>
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full contrast-boosted"
                src="/assets/.net.svg"
                alt="logo du framework vueJS"
              />
              <img class="logo2 opacity-0" src="/assets/.net.svg" alt="logo du framework vueJS" />
            </div>
            <!-- <div class=" flex items-center justify-center w-16 h-16 mb-4 rounded-full">
              <img class="logo2 w-full h-full" src="/assets/vuejs-icon.svg" alt="logo du framework vueJS">
            </div> -->
            <h6 class="title mb-3 md:mb-10 font-semibold text-xl md:text-4xl leading-5">
              .Net Framework
            </h6>
            <p class="text mb-3 text-sm">
              Microsoft .NET est une plateforme de développement logiciel polyvalente qui prend en
              charge la création d'applications pour diverses plateformes, notamment Windows, Web,
              mobile et cloud.
            </p>
          </div>
        </div>
        <!-- Item 5 -->
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full"
                src="/assets/symfony.svg"
                alt="logo du framework symfony"
              />
              <img
                class="logo2 opacity-0"
                src="/assets/symfony.svg"
                alt="logo du framework symfony"
              />
            </div>
            <h6 class="title mb-3 md:mb-10 font-semibold text-xl md:text-4xl leading-5">
              Symfony ( PHP )
            </h6>
            <p class="text mb-3 text-sm">
              Symfony est un framework Backend codé en PHP. Basé sur l'architecture MVC, il permet
              de développer des applications web puissantes.
            </p>
          </div>
        </div>
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img
                class="logo w-full h-full contrast-boosted"
                src="/assets/express.svg"
                alt="logo de node"
              />
              <img class="logo2 opacity-0" src="/assets/express.svg" alt="logo de node" />
            </div>
            <h6 class="title mb-2 font-semibold leading-5">Express ( Javascript )</h6>
            <p class="text mb-3 text-sm">
              Express permet de concevoir rapidement des serveurs sécurisés ainsi qu'une
              architecture backend robuste.
            </p>
          </div>
        </div>
        <div
          class="hover:opacity-90 test flex flex-col justify-between p-5 border rounded shadow-sm overflow-hidden bg-neutral-950 transition duration-1000 text-white hover:text-black hover:bg-slate-200 hidden duration-700 ease-in-out"
          data-carousel-item
        >
          <div>
            <div class="flex flex-row items-center justify-between w-16 h-16 mb-4 rounded-full">
              <img class="logo w-full h-full" src="/assets/django.svg" alt="logo de Django" />
              <img class="logo2 opacity-0" src="/assets/django.svg" alt="logo de Django" />
            </div>
            <h6 class="title mb-2 font-semibold leading-5">Django ( Python )</h6>
            <p class="text mb-3 text-sm">
              Django est la solution idéale pour le développement Web en Python. Et en plus son
              langage de template twig fait le taf !
            </p>
          </div>
        </div>
      </div>

      <!-- Slider indicators -->
      <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 4"
          data-carousel-slide-to="3"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 5"
          data-carousel-slide-to="4"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 6"
          data-carousel-slide-to="5"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 7"
          data-carousel-slide-to="6"
        ></button>
        <button
          type="button"
          class="w-3 h-3 rounded-full"
          aria-current="false"
          aria-label="Slide 8"
          data-carousel-slide-to="7"
        ></button>
      </div>
      <!-- Slider controls -->
      <button
        type="button"
        class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-prev
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span class="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        data-carousel-next
      >
        <span
          class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none"
        >
          <svg
            class="w-4 h-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span class="sr-only">Next</span>
        </span>
      </button>
    </div>
    <!-- endcarousel -->
    <div class="grid gap-4 row-gap-5 sm:grid-cols-2 lg:grid-cols-4"></div>
  </div>
  <!-- template projets -->

  <div
    id="test1"
    class="px-4 py-20 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
      <h2
        class="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
      >
        <span class="inline-block mb-1 sm:mb-4">Mon Portfolio<br class="hidden md:block" /> </span>

        <div
          ref="blue_expand_1"
          id="blue_expand_1"
          class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
        ></div>
      </h2>
      <!-- <router-link link to="/about" class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-2">En savoir plus</router-link> -->
    </div>
    <div class="relative container-projets">
      <div
        ref="projets1"
        id="projets1"
        class="w-full md:w-full lg:w-full relative grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 mx-auto"
      >
        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/npp-cover.png"
            alt="image de présentation de snaparadise"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-95"
            :class="{
              'transition-opacity duration-200 opacity-0 hover:opacity-100': isDesktop
            }"
          >
            <p class="mb-2 sm:mb-4 text-lg font-bold text-gray-100">&lt SNAPARADISE /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 sm:mb-4">
              Dernier projet en date, actuellement en cours de développement. Il s'agit d'un
              marketPlace destiné à la vente de photographies.
            </p>
            <!-- <p class="text-xs tracking-wide text-gray-300 ">
                Nicolas Peltier Photographie sera le premier à en bénéficier
              </p> -->
            <a
              aria-label="view item"
              href="https://snaparadise.com"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-pink-400 hover:cursor-pointer mt-5"
              >Voir le site</a
            >
            <div class="flex flex-row">
              <p
                class="flex items-center font-semibold text-pink-400 hover:text-pink-800 mt-5 mr-3"
              >
                Github :
              </p>
              <a
                aria-label="view item"
                href="https://github.com/jahfredW/npp_front_06"
                target="_blank"
                class="relative flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer mt-5 mr-5"
                >Front</a
              >
              <a
                aria-label="view item"
                href="https://github.com/jahfredW/npp_back_end_06"
                target="_blank"
                class="relative flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer mt-5"
                >Back</a
              >
            </div>
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-fit w-full h-56 md:h-64 xl:h-80"
            src="/assets/1942.png"
            alt="image de présentation de snaparadise"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-90"
            :class="{
              'transition-opacity duration-200 bg-black bg-opacity-90 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt 1942 /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 mb-4">
              Shooter en cours de développement qui implémente des pattern design. Codé from Scratch
              en TypeScript et en Sass, sans l'aide de moteur de jeu.
            </p>
            <a
              aria-label="view item"
              href="https://1942.fredgruwedev.com"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-5 mr-5"
              >Tester le jeu</a
            >
            <a
              aria-label="View Item"
              href="https://github.com/jahfredW/1947"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer mt-5"
              >Lien Github</a
            >
            <!-- <p class="text-xs tracking-wide text-gray-300 ">
                Nicolas Peltier Photographie sera le premier à en bénéficier
              </p> -->
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/boldaircover.png"
            alt="image de présentation de snaparadise"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-90"
            :class="{
              'transition-opacity duration-200 opacity-0 hover:opacity-100': isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt Bold'air /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 mb-5">
              Le but de cette application, développée sous architecture " couteau suisse" est de
              fournir un état détaillé de la pollution en cours, En plus de permettre aux usagers de
              signaler une "incommodation".
            </p>
            <!-- <p class="text-xs tracking-wide text-gray-300">
                Le Backend est codé en Python, les repuêtes en API sont gérées avec FastApi tandis que le front est mis en place avec VueJs
              </p> -->
            <a
              aria-label="view item"
              href="https://github.com/jahfredW/Bold_Air"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-2"
              >Lien GitHub</a
            >
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/fredgruwe.png"
            alt="image de présentation de snaparadise"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-90"
            :class="{
              'transition-opacity duration-200 bg-black bg-opacity-90 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt fredGruweDev.com /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 mb-4">
              Sous ses apparences de site vitrine, il s'agit d'une application full-stack qui
              démontre ma capacité à développer à l'aide du framework VueJS3 côté front et NodeJs
              côté Backend.
            </p>
            <a
              aria-label="view item"
              href="https://express.fredgruwedev.com"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer md:mt-5 mb-2"
              >Voir le site</a
            >
            <div class="flex flex-row">
              <p class="flex items-center font-semibold text-pink-400 md:mt-2 mr-3">Github :</p>
              <a
                aria-label="view item"
                href="https://github.com/jahfredW/front_4.0"
                target="_blank"
                class="relative flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer md:mt-2 mr-5"
                >Front</a
              >
              <a
                aria-label="view item"
                href="https://github.com/jahfredW/back_4.0"
                target="_blank"
                class="relative flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer md:mt-2"
                >Back</a
              >
            </div>
          </div>
        </div>

        <!-- 1947 -->
      </div>

      <div
        v-if="showProject2"
        ref="projets2"
        id="projets2"
        class="w-full absolute grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2"
      >
        <!-- <div v-if="showProject2" ref="projets2" id="projets2" class="w-full absolute grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2 justify-center"> -->

        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/scrappy.png"
            alt="scrappy"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-95"
            :class="{
              'transition-opacity duration-200 opacity-0 hover:opacity-100': isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt Scrappy Cooker /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 mb-5">
              Il s'agit d'une petite application anti-gaspi de scrapping, codée en python, qui
              permet de concevoir des recettes de cuisine avec ce qu'il vous reste dans le
              réfrigérateur ! ;)
            </p>
            <a
              href="https://github.com/jahfredW/cooking_project_v2"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-2"
              >Lien github</a
            >
            <!-- <p class="text-xs tracking-wide text-gray-300">
                Le Backend est codé en Python, les repuêtes en API sont gérées avec FastApi tandis que le front est mis en place avec VueJs
              </p> -->
          </div>
        </div>

        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/obr.png"
            alt="scrappy"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-95"
            :class="{
              'transition-opacity duration-200 opacity-0 hover:opacity-100': isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt OBR-plomberie /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 mb-4">
              Il s'agit d'un site vitrine pour un plombier, avec des features spécifiques comme la
              prise de rendez vous en ligne ainsi que l'implémentation d'un mailer.
            </p>
            <a
              aria-label="View Item"
              href="https://obr-plomberie.fr"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mb-2"
              >Voir le site</a
            >
            <a
              aria-label="View Item"
              href="https://github.com/jahfredW/obr"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer mt-5"
              >Lien Github</a
            >
            <!-- <p class="text-xs tracking-wide text-gray-300 ">
                Nicolas Peltier Photographie sera le premier à en bénéficier
              </p> -->
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-fill w-full h-56 md:h-64 xl:h-80"
            src="/assets/images/poleo.png"
            alt="scrappy"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-90"
            :class="{
              'transition-opacity duration-200 bg-black bg-opacity-90 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt Poleo /&gt</p>
            <p class="text-xs md:text-sm tracking-wide text-gray-300 mb-4">
              Application en full React qui permet d'obtenir les relevés de pollution en temps réel,
              où que vous soyez. En cours de développement.
            </p>
            <a
              aria-label="View Item"
              href="https://poleo.fredgruwedev.com"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mb-2"
              >Voir le site</a
            >
          </div>
        </div>
        <div
          class="relative overflow-hidden rounded"
          :class="{
            'transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl':
              isDesktop
          }"
        >
          <img
            class="object-cover w-full h-56 md:h-64 xl:h-80"
            src="/assets/codingame.svg"
            alt="scrappy"
          />
          <div
            class="absolute inset-0 px-6 py-4 bg-black bg-opacity-90"
            :class="{
              'transition-opacity duration-200 bg-black bg-opacity-90 opacity-0 hover:opacity-100':
                isDesktop
            }"
          >
            <p class="mb-4 text-lg font-bold text-gray-100">&lt CodinGame /&gt</p>
            <p class="text-sm tracking-wide text-gray-300 mb-4">
              Je vous parle des puzzles que j'ai pu réussir, ainsi que de ma certification Python.
            </p>
            <a
              href="https://www.codingame.com/profile/f2a708aef3b3e45220e3bda15f3f064f5107834"
              target="_blank"
              class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-2"
              >Lien vers Codingame</a
            >
          </div>
        </div>
      </div>
    </div>

    <div class="text-center">
      <button
        @click="test"
        ref="seeMore"
        class="see-more-projects text-xl font-bold inline-flex items-center transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer"
      >
        Voir plus +
      </button>
    </div>
  </div>

  <!-- technos -->

  <div
    id="technos"
    class="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-hidden"
  >
    <h2
      class="max-w-lg text-center font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
    >
      <span class="relative inline-block">
        <svg
          viewBox="0 0 52 24"
          fill="currentColor"
          class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
        >
          <defs>
            <pattern
              id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
              x="0"
              y="0"
              width=".135"
              height=".30"
            >
              <circle cx="1" cy="1" r=".7"></circle>
            </pattern>
          </defs>
          <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
        </svg>
        <h2
          class="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
        >
          <span class="inline-block mb-1 sm:mb-4"> Compétences<br class="hidden md:block" /> </span>
          <div
            class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
          ></div>
        </h2>
      </span>
    </h2>
    <div class="mx-auto lg:max-w-xl sm:text-center">
      <div style="z-index: 999" class="flex flex-row justify-evenly">
        <button
          ref="languages"
          id="languages_show"
          @click="check_tech($event)"
          class="block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 hover:scale-110 hover:bg-blue-500 hover:text-white transition transition ease-in-out"
        >
          langages
        </button>
        <p
          ref="frameworks"
          id="frameworks_show"
          @click="check_tech($event)"
          class="block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 hover:scale-110 hover:bg-blue-500 hover:text-white transition transition ease-in-out hover:cursor-pointer"
        >
          frameworks
        </p>
        <p
          ref="other"
          id="other_show"
          @click="check_tech($event)"
          class="hover:cursor-pointer block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400 hover:scale-110 hover:bg-blue-500 hover:text-white transition transition ease-in-out"
        >
          autres
        </p>
      </div>
      <div v-if="languages_show" class="my-12">
        <Languages></Languages>
      </div>
      <div v-if="frameworks_show" class="my-12">
        <FrameWorks></FrameWorks>
      </div>
      <div v-if="other_show" class="my-12">
        <Others></Others>
      </div>
    </div>
  </div>
  <div
    id="contacts"
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 overflow-hidden"
  >
    <div class="flex flex-col lg:justify-between lg:flex-row">
      <h2
        class="max-w-lg text-center font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
      >
        <span class="relative inline-block">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
          >
            <defs>
              <pattern
                id="18302e52-9e2a-4c8e-9550-0cbb21b38e55"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#18302e52-9e2a-4c8e-9550-0cbb21b38e55)" width="52" height="24"></rect>
          </svg>
          <h2
            class="max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
          >
            <span class="inline-block mb-1 sm:mb-4"> Contact<br class="hidden md:block" /> </span>
            <div
              class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
            ></div>
          </h2>
        </span>
      </h2>

      <!-- <router-link link to="/about" class="relative flex items-center font-semibold transition-colors duration-200 text-blue-accent-700 hover:text-deep-purple-800 hover:cursor-pointer mt-2">En savoir plus</router-link> -->
    </div>
    <div id="contact" class="max-w-md shadow-xl rounded px-3 py-3 mx-auto">
      <ContactForm></ContactForm>
    </div>
  </div>

  <!-- connaissances -->
</template>

<script setup>
import { onMounted, ref } from 'vue'

import FrameWorks from './Frameworks.vue'
import Languages from './Languages.vue'
import Others from './Others.vue'
import ContactForm from './SimpleContact.vue'

import { checkScreenSize } from '../composables/screen'

const frameworks_show = ref(false)
const languages_show = ref(false)
const other_show = ref(false)

const frameworks = ref(null)
const languages = ref(null)
const other = ref(null)

const aideDev = ref(null)

const blue_expand_1 = ref(null)
const blue_expand_2 = ref(null)

const { isDesktop } = checkScreenSize()

onMounted(() => {
  // Commencer l'observation de l'élément
  if (languages.value) {
    observer.observe(languages.value)
    observer.observe(frameworks.value)
  }
  // if (blue_expand_1.value) {
  //   observer.observe(blue_expand_1.value)
  //   observer.observe(blue_expand_2.value)
  // }

  // projets2.value.style.transform= 'translateX(-120%)';
  // projets2.value.style.transform= 'translateY(-120%)';
})

const testEnter = (event) => {
  console.log(event.target.firstChild.children[2].firstChild)
  event.target.firstChild.children[1].firstChild.style.display = 'none'
}

const displayP = (event) => {
  event.target.firstChild.children[1].firstChild.style.display = 'flex'
}

// const handleClick = (event) => {
//   console.log(event.target.children)

//   console.log('click')
//   if (event.target.children[1].style.display == 'block') {
//     event.target.children[1].style.display = 'none'
//   } else {
//     event.target.children[1].style.display = 'block'
//   }
// }

const callback = (entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // L'élément est visible à l'écran
      console.log(entry.target.id)
      switch (entry.target.id) {
        case 'languages_show':
          if (!frameworks_show.value && !other_show.value) {
            languages_show.value = true
            languages.value.classList.remove('bg-teal-accent-400')
            languages.value.classList.add('bg-black')
            languages.value.classList.add('text-white')
          }

          break
        case 'blue_expand_1':
          console.log('expand-1 visibel')
          blue_expand_1.value.style.transform = 'scale(100%)'
          break
        case 'blue_expand_two':
          console.log('ici')
          blue_expand_2.value.style.transform = 'scale(100%)'
          break
      }

      // Vous pouvez effectuer ici toutes les actions que vous voulez lorsque l'élément est visible
      // Par exemple, appeler la fonction test() ou effectuer des animations, etc.
      // test();
    } else {
      // L'élément n'est plus visible à l'écran

      console.log("L'élément n'est plus visible !")
      switch (entry.target.id) {
        // case "languages_show":
        //   languages_show.value = false;
        //   languages.value.classList.add('bg-teal-accent-400');
        //   languages.value.classList.remove('bg-black');
        //   languages.value.classList.remove('text-white');
        //   break;
        case 'blue_expand_1':
          console.log('expand_1 plus visible!')
          blue_expand_1.value.style.transform = 'scale(20%)'
          break
        case 'blue_expand_two':
          blue_expand_2.value.style.transform = 'scale(20%)'
          break
      }
    }
  })
}

const observer = new IntersectionObserver(callback)

const showProject2 = ref(false)
const projets1 = ref(null)
const projets2 = ref(null)
const seeMore = ref(null)

// fonction de redirection vers la prise de rendez-vous
const redirectToRendezVous = () => {
  window.location.href = 'https://calendly.com/fred-gruwe/30min'
}

const test = () => {
  console.log(projets1.value)

  if (seeMore.value.innerText == 'Voir plus +') {
    seeMore.value.textContent = 'Voir Moins -'

    showProject2.value = true

    console.log(isDesktop.value)

    // permet d'attendre que la dernière animation est terminée
    // équivaut à un setTimeOut avec une avleur de 0 ms
    requestAnimationFrame(() => {
      projets1.value.style.transform = 'translateX(-150%)'
      projets1.value.style.opacity = '0'
      projets1.value.style.transition = 'transform 1s ease, opacity 2s ease'
      projets2.value.style.opacity = '0'

      if (isDesktop.value) {
        projets2.value.style.transform = 'translateY(-110%)'
      } else {
        projets2.value.style.transform = 'translateY(-105%)'
      }
      projets2.value.style.opacity = '100'
      projets2.value.style.transition = 'opacity 1s ease , transform 1s ease '
    }, 0)
  } else {
    requestAnimationFrame(() => {
      projets1.value.style.transform = 'translateX(0)'
      projets1.value.style.opacity = '100'
      projets1.value.style.transition = 'transform 1s ease, opacity 2s ease'
      projets2.value.style.opacity = '0'

      if (isDesktop.value) {
        projets2.value.style.transform = 'translateY(+210%)'
      } else {
        projets2.value.style.transform = 'translateY(+205%)'
      }
      projets2.value.style.transition = 'opacity 1s ease, transform 1s ease'
    })
    seeMore.value.textContent = 'Voir plus +'
    showProject2.value = true
  }
}

const class_init = () => {
  const sections = [frameworks, languages, other]
  sections.forEach((section) => {
    section.value.classList.remove('bg-black', 'text-white')
    section.value.classList.add('bg-teal-accent-400')
  })
}

const check_tech = (event) => {
  switch (event.target.id) {
    case 'frameworks_show':
      class_init()

      frameworks.value.classList.remove('bg-teal-accent-400')
      frameworks.value.classList.add('text-white')
      frameworks.value.classList.add('bg-black')

      frameworks_show.value = true
      languages_show.value = false
      other_show.value = false
      break
    case 'languages_show':
      class_init()

      languages.value.classList.remove('bg-teal-accent-400')
      languages.value.classList.add('bg-black')
      languages.value.classList.add('text-white')
      languages_show.value = true
      frameworks_show.value = false
      other_show.value = false
      break
    case 'other_show':
      class_init()

      other.value.classList.remove('bg-teal-accent-400')
      other.value.classList.add('bg-black')
      other.value.classList.add('text-white')

      languages_show.value = false
      frameworks_show.value = false
      other_show.value = true
      break
  }
}
</script>

<style>
/* Définition des styles de base pour l'effet de transition */

/* #projets2{
  transform: translateY(-110%);
} */

.myPhoto {
  filter: grayscale(0.3) brightness(1.2);
}

.see-more-project:active #projets {
  transform: translateX(-100%);
}

.target {
  width: 100%;
  height: 100%;
  z-index: 50;
}
.logo {
  transform: translateX(150%) translateY(+100%) scale(2);
  transition: transform 1s ease;
}

.title {
  transform: translateX(-100%);
  transition: transform 1s ease;
}

.text {
  transform: translateY(+500%);
  transition: transform 1s ease;
}

/* Définition des styles pour l'effet de transformation lors du survol */

.test:hover .logo {
  opacity: 0;
  position: absolute;
  visibility: hidden;
  z-index: -50;
  transform: translateX(-50%) translateY(0) scale(0.8);
  transition: transform 1s ease, opacity 2s ease, visibility 2s ease;
  pointer-events: none;
}

.test:hover .logo2 {
  opacity: 100;
  transform: translateX(0) translateY(0) scale(1);
  transition: opacity 2s ease;
}

.test:hover .title {
  transform: translateX(0);
}

.test:hover .text {
  transform: translateY(0);
}

.contrast-boosted {
  filter: invert(100%) contrast(10%) brightness(200%);
}

@media screen and (max-width: 1000px) {
  /* Définition des styles de base pour l'effet de transition */
  .logo {
    transform: translateX(200%) translateY(100%) scale(2);
    transition: transform 1s ease;
  }
}

@media screen and (max-width: 376px) {
  /* Définition des styles de base pour l'effet de transition */
  .logo {
    transform: translateX(180%) translateY(100%) scale(2);
    transition: transform 1s ease;
  }
}

@media screen and (min-width: 396px) and (max-width: 415px) {
  /* Définition des styles de base pour l'effet de transition */
  .logo {
    transform: translateX(220%) translateY(100%) scale(2);
    transition: transform 1s ease;
  }
}

@media screen and (min-width: 376px) and (max-width: 394px) {
  /* Définition des styles de base pour l'effet de transition */
  .logo {
    transform: translateX(190%) translateY(90%) scale(2);
    transition: transform 1s ease;
  }
}
</style>
