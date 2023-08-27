<template>
  <!-- vidéo de présentation -->
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="relative mb-6 sm:mx-auto md:mb-10 md:max-w-md lg:max-w-lg">
      <video class="object-cover w-full h-56 rounded shadow-lg md:h-64 lg:h-80" alt=""></video>
      <a
        href="/"
        aria-label="Play Video"
        class="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
      >
        <div
          class="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110"
        >
          <svg class="w-10 text-gray-900" fill="currentColor" viewBox="0 0 24 24">
            <path
              d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z"
            ></path>
          </svg>
        </div>
      </a>
    </div>
    <div class="mb-16 md:mb-0 md:max-w-xl sm:mx-auto md:text-center">
      <h2
        class="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none"
      >
        The quick, brown fox jumps over a very sad and
        <span class="inline-block text-deep-purple-accent-400">lazy dog</span>
      </h2>
      <p class="mb-5 text-base text-gray-700 md:text-lg">
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
        laudantium, totam rem aperiam, eaque ipsa quae.
      </p>
      <div class="flex items-center md:justify-center">
        <a
          href="/"
          class="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
        >
          Get started
        </a>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700"
          >Learn more</a
        >
      </div>
    </div>
  </div>

  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="grid gap-6 row-gap-10 lg:grid-cols-2">
      <div class="lg:py-6 lg:pr-16">
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  class="w-4 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                  <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="mb-2 text-lg font-bold">Step 1</p>
            <p class="text-gray-700">
              All recipes are written using certain conventions, which define the characteristics of
              common ingredients. The rules vary from place to place.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  class="w-4 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                  <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="mb-2 text-lg font-bold">Step 2</p>
            <p class="text-gray-700">
              The first mate and his Skipper too will do their very best to make the others
              comfortable in their tropic island nest. Michael Knight a young loner.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  class="w-4 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                  <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="mb-2 text-lg font-bold">Step 3</p>
            <p class="text-gray-700">
              Tell them I hate them. Is the Space Pope reptilian!? Tell her she looks thin. Hello,
              little man. I will destroy you!
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg
                  class="w-4 text-gray-600"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                  <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                </svg>
              </div>
            </div>
            <div class="w-px h-full bg-gray-300"></div>
          </div>
          <div class="pt-1 pb-8">
            <p class="mb-2 text-lg font-bold">Step 4</p>
            <p class="text-gray-700">
              If one examines precultural libertarianism, one is faced with a choice: either accept
              rationalism or conclude that context is a product.
            </p>
          </div>
        </div>
        <div class="flex">
          <div class="flex flex-col items-center mr-4">
            <div>
              <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                <svg class="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                  <polyline
                    fill="none"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-miterlimit="10"
                    points="6,12 10,16 18,8"
                  ></polyline>
                </svg>
              </div>
            </div>
          </div>
          <div class="pt-1">
            <p class="mb-2 text-lg font-bold">Success</p>
            <p class="text-gray-700"></p>
          </div>
        </div>
      </div>
      <div class="relative">
        <img
          class="inset-0 object-cover object-bottom w-full rounded shadow-lg h-96 lg:absolute lg:h-full"
          src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
          alt=""
        />
      </div>
    </div>
  </div>
  <!-- Fonctionnalités -->
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div class="flex flex-col mb-6 lg:flex-row md:mb-10">
      <div class="lg:w-1/2">
        <h2
          class="max-w-md mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none xl:max-w-lg"
        >
          Liste des fonctionnalités.
        </h2>
      </div>
      <div class="lg:w-1/2">
        <p class="text-base text-gray-700 md:text-lg">
          Snapradise se démarque par ses features optimisées pour le client et pour
          l'administrateur.
        </p>
      </div>
    </div>
    <div class="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            class="w-7 h-7 text-deep-purple-accent-400"
            stroke-linecap="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <circle cx="11" cy="13" fill="none" r="9" stroke="currentColor"></circle>
            <path
              d=" M21.955,18.005c1.089,2.145,1.378,3.816,0.622,4.572C20.92,24.234,14.799,20.799,9,15S-0.234,3.08,1.423,1.423 C2.18,0.666,3.853,0.956,6,2.047"
              stroke="currentColor"
              fill="none"
            ></path>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">E-commerce</h6>
        <p class="mb-3 text-sm text-gray-900">E-commerce rapide et personnalisable.</p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Back Office dédié : gestion des utilisateurs et des commandes
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Système de Gestion des réductions en temps réel.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Editions des factures au format PDF.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Gestion des utilisateurs authentifiés ou non-authentifiés.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Service de mail : réception des photographies automatique par mail.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Utilisation de l'API STRIPE et ses Webhooks.
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            class="w-7 h-7 text-deep-purple-accent-400"
            viewBox="0 0 24 24"
            stroke-linecap="round"
          ></svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Photographie</h6>
        <p class="mb-3 text-sm text-gray-900">Optimisation du stockage et sécurité.</p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Stockage sur cloud dédié
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Système de compression personnalisable.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Système de sécurisation : filigrane.
          </li>
        </ul>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Learn more</a
        >
      </div>
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            class="w-7 h-7 text-deep-purple-accent-400"
            stroke-linecap="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M8.291,18.709,4.182,22.818c-.419.419-1.43.086-2.258-.742s-1.161-1.839-.742-2.258l4.11-4.11"
              fill="none"
              stroke="currentColor"
            ></path>
            <ellipse
              cx="19.078"
              cy="4.922"
              fill="none"
              rx="2.5"
              ry="4.95"
              stroke="currentColor"
              transform="translate(2.107 14.932) rotate(-45)"
            ></ellipse>
            <path
              d="M9.185,9.815,5.3,13.7c-.7.7-.143,2.382,1.238,3.762S9.6,19.4,10.3,18.7l3.885-3.885"
              fill="none"
              stroke="currentColor"
            ></path>
            <path
              d="M15.578,1.422,9.422,7.578c-.976.976-.2,3.335,1.732,5.268s4.292,2.708,5.268,1.732l6.156-6.156"
              fill="none"
              stroke="currentColor"
            ></path>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Explore space</h6>
        <p class="mb-3 text-sm text-gray-900">
          We are all connected to the universe atomically, strong bonds.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Infinity
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Stars
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Black Holes
          </li>
        </ul>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Learn more</a
        >
      </div>
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            class="w-7 h-7 text-deep-purple-accent-400"
            stroke-linecap="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path
              d="M8,13l3,3,9.379-9.379a2.122,2.122,0,0,0,0-3h0a2.122,2.122,0,0,0-3,0Z"
              fill="none"
              stroke="currentColor"
            ></path>
            <polyline fill="none" points="10 11 10 6 6 2 3 5 7 9" stroke="currentColor"></polyline>
            <polyline
              fill="none"
              points="15 12 15 17 19 21 22 18 18 14"
              stroke="currentColor"
            ></polyline>
            <path d="M8,23a7,7,0,0,1-7-7" fill="none" stroke="currentColor"></path>
            <path d="M8,19a3,3,0,0,1-3-3" fill="none" stroke="currentColor"></path>
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">First contact</h6>
        <p class="mb-3 text-sm text-gray-900">
          For those who have seen the Earth from space or in dreams.
        </p>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Listen
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Communicate
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                class="w-5 h-5 mt-px text-deep-purple-accent-400"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  stroke-width="4"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                ></polygon>
              </svg>
            </span>
            Run
          </li>
        </ul>
        <a
          href="/"
          aria-label=""
          class="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >Learn more</a
        >
      </div>
    </div>
  </div>
</template>
