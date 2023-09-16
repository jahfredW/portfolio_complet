<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-5 row-gap-8 lg:grid-cols-2">
      <div class="flex flex-col justify-center">
        <div class="max-w-xl mb-6">
          <h2
            class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
          >
            1947, shooter TypeScript <br class="hidden md:block" />
            utilisant des
            <span class="relative px-1">
              <div
                class="absolute inset-x-0 bottom-0 h-3 transform -skew-x-12 bg-teal-accent-400"
              ></div>
              <span class="relative inline-block text-deep-purple-accent-400">patterns design</span>
            </span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Codé en TypeScript, ce jeu de tir Dystopique sur le thème de la seconde guerre mondiale
            Utilise les patterns design suivants :
          </p>
        </div>
        <div class="grid gap-5 row-gap-8 sm:grid-cols-2">
          <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
            <div class="h-full p-5 border border-l-0 rounded-r">
              <h6 class="mb-2 font-semibold leading-5">Pattern Design Singleton</h6>
              <p class="text-sm text-gray-900">
                Afin de s'assurer qu'une seule instance de la map de jeu soit créée
              </p>
            </div>
          </div>
          <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400">
            <div class="h-full p-5 border border-l-0 rounded-r">
              <h6 class="mb-2 font-semibold leading-5">Pattern design Factory</h6>
              <p class="text-sm text-gray-900">
                La Factory permet de créer facilement divers types de bateaux avec différents
                attributs et comportements.
              </p>
            </div>
          </div>
        </div>
        <div class="bg-white border-l-4 shadow-sm border-deep-purple-accent-400 mt-5">
          <div class="h-full p-5 border border-l-0 rounded-r">
            <h6 class="mb-2 font-semibold leading-5">Pattern design Composite</h6>
            <p class="text-sm text-gray-900">
              Le composite permet un calcul de collisions ainsi que la gestion de la mémoire
            </p>
          </div>
        </div>
      </div>
      <div class="py-5">
        <img
          class="w-full h-56 rounded shadow-lg sm:h-96"
          src="./../../public/assets/1947_screenshot.png"
          alt=""
        />
      </div>
      <div>
        <a
          href="https://github.com/jahfredW/1942"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Lien Github</a
        >
      </div>
    </div>
  </div>
</template>
