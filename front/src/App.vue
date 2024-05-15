<template>
  <div class="bg-gray-900">
    <div
      id="wrapper-header"
      class="mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8"
    >
      <div class="z-30 relative flex items-center justify-between lg:justify-center lg:space-x-16">
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <router-link
              :to="{ name: 'home' }"
              @click="scrollToElement('#test1')"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Portfolio</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'home' }"
              @click="scrollToElement('#technos')"
              aria-label="Our product"
              title="Our product"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Compétences</router-link
            >
          </li>
        </ul>
        <a href="/" aria-label="Company" title="Company" class="inline-flex items-center"
          ><img src="/assets/logo.svg" alt="logo du site" />
          <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
            >Frédéric Gruwé</span
          >
        </a>
        <ul class="flex items-center hidden space-x-8 lg:flex">
          <li>
            <router-link
              :to="{ name: 'home' }"
              @click="scrollToElement('#propos')"
              aria-label="About us"
              title="About us"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >A propos</router-link
            >
          </li>
          <li>
            <router-link
              :to="{ name: 'home' }"
              @click="scrollToElement('#contact')"
              aria-label="Contact"
              title="contact Form"
              class="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
              >Contact</router-link
            >
          </li>
        </ul>
        <div class="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            class="p-2 transition duration-200 focus:outline-none focus:shadow-outline"
            @click="openMenu"
          >
            <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
              <path
                fill="currentColor"
                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
              ></path>
              <path
                fill="currentColor"
                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
              ></path>
              <path
                fill="currentColor"
                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
              ></path>
            </svg>
          </button>
          <div v-if="isMenuOpen" class="absolute top-0 left-0 w-full">
            <div class="p-5 bg-white border rounded shadow-sm">
              <div class="flex items-center justify-between mb-4">
                <div>
                  <a href="/" aria-label="Company" title="Company" class="inline-flex items-center">
                    <img src="/assets/logo.svg" alt="logo de fredGruweDev" />
                    <span class="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase"
                      >FredGruweDev</span
                    >
                  </a>
                </div>
                <div class="z-30">
                  <button
                    aria-label="Close Menu"
                    title="Close Menu"
                    class="transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    @click="closeMenu"
                  >
                    <svg class="w-5 text-gray-600" viewBox="0 0 24 24">
                      <path
                        fill="currentColor"
                        d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
              <nav>
                <ul class="space-y-4">
                  <li>
                    <router-link
                      :to="{ name: 'home' }"
                      @click="scrollToElement('#test1')"
                      aria-label="Our product"
                      title="Our product"
                      class="text-base font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Porfolio</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'home' }"
                      @click="scrollToElement('#technos')"
                      aria-label="Our product"
                      title="Our product"
                      class="text-base font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Compétences</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'home' }"
                      @click="scrollToElement('#propos')"
                      aria-label="Product pricing"
                      title="Product pricing"
                      class="text-base font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >A propos</router-link
                    >
                  </li>
                  <li>
                    <router-link
                      :to="{ name: 'home' }"
                      @click="scrollToElement('#contact')"
                      aria-label="Contact"
                      title="contact Form"
                      class="text-base font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >Contact</router-link
                    >
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <RouterView />
  <div class="relative mt-16 bg-blue-700">
    <svg
      class="absolute top-0 w-full h-6 -mt-5 sm:-mt-10 sm:h-16 text-blue-700"
      preserveAspectRatio="none"
      viewBox="0 0 1440 54"
    >
      <path
        fill="currentColor"
        d="M0 22L120 16.7C240 11 480 1.00001 720 0.700012C960 1.00001 1200 11 1320 16.7L1440 22V54H1320C1200 54 960 54 720 54C480 54 240 54 120 54H0V22Z"
      ></path>
    </svg>
    <div class="px-4 pt-12 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div class="flex flex-col sm:flex-row justify-evenly mb-5">
        <div>
          <div class="flex flex-row justify-center">
            <a href="/" aria-label="Go home" title="Company" class="inline-flex items-center">
              <img src="/assets/logo.svg" alt="logo de fredGruweDev.com" />
              <span class="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase"
                >FredGruweDev</span
              >
            </a>
          </div>
        </div>
        <!-- <div class="my-4 lg:max-w-sm">
          <p class="text-sm text-center text-deep-purple-50">
            Ceci est un site vitrine, il ne représente en aucun cas une quelconque activité
            professionelle.
          </p>
        </div> -->
      </div>
      <div class="pt-5 pb-10 border-t border-blue-200">
        <p class="text-sm text-center text-gray-100">
          © Copyright 2024 FredGruweDev.com Inc. All rights reserved.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import { scrollTo } from 'vue-scrollto'

const isMenuOpen = ref(false)

const openMenu = () => {
  isMenuOpen.value = true
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const scrollToElement = (id) => {
  scrollTo(id, 500, {
    offset: +2 // Décalage pour ajuster la position après le défilement
  })
}
</script>

<style>
#wrapper-header {
  padding: 10px;
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
