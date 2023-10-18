<template>
  <div
    class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
  >
    <div>
      <h2
        class="max-w-lg font-sans text-2xl md:text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl my-5"
      >
        <span>
          <h2
            class="max-w-lg mb-10 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group"
          >
            <span class="inline-block mb-1 sm:mb-4">
              Snaparadise<br class="hidden md:block" />
            </span>
            <div
              class="h-1 ml-auto duration-500 origin-left transform bg-blue-accent-700 scale-x-30"
            ></div>
          </h2>
        </span>
      </h2>
    </div>
    <div class="flex flex-col justify-center items-center p-3 my-10">
      <div class="flex justify-center w-full mb-5">
        <p>La vidéo sera bientôt disponible.</p>
      </div>

      <video class="w-full md:w-3/4" controls poster="/assets/coming2.jpg">
        <source src="" type="video/mp4" />
        <p>La vidéo sera bientôt disponible. Veuillez revenir plus tard.</p>
      </video>

      <div class="text-center mt-2 hidden">Cliquez pour voir la vidéo de présentation</div>
    </div>

    <div class="flex flex-row items-center">
      <div class="pr-2">
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
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>
      </div>

      <div>
        <a
          aria-label="view item"
          href="https://snaparadise.com"
          target="_blank"
          class="text-xl font-bold transition-colors duration-200 text-blue-accent-700 hover:text-pink-400 hover:cursor-pointer mt-5"
          >Voir le site
        </a>
      </div>
    </div>
    <div class="flex">
      <div class="flex items-end">
        <div class="pr-2">
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
              d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
            />
          </svg>
        </div>
        <p class="flex items-center font-bold text-pink-400 hover:text-pink-800 mt-5">Github :</p>
      </div>
      <div class="flex items-end ml-2">
        <a
          aria-label="view item"
          href="https://github.com/jahfredW/npp_front_06"
          target="_blank"
          class="font-bold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer mr-1"
          >Front /
        </a>
        <a
          aria-label="view item"
          href="https://github.com/jahfredW/npp_back_end_06"
          target="_blank"
          class="font-bold transition-colors duration-200 text-pink-400 hover:text-pink-800 hover:cursor-pointer mt-2"
          >Back</a
        >
      </div>
    </div>

    <hr class="my-10 border-gray-300" />
    <!-- Fonctionnalités -->

    <div class="flex flex-col mb-6 lg:flex-row md:mb-2"></div>
    <div class="grid gap-8 row-gap-10 sm:grid-cols-2 lg:grid-cols-4">
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-deep-purple-accent-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
            />
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">E-commerce</h6>
        <p class="mb-3 text-sm text-gray-900">
          E-commerce optimisé pour la vente de photographies.
        </p>
        <hr class="mb-3" />
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Gestion des utilisateurs authentifiés ou non-authentifiés.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Options de paiement sécurisées : utilisation de l'API STRIPE et ses Webhooks.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Convivialité et expérience utilisateur optimale : temps de chargement, conception
            responsive, navigation intuitive.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Options de filtrage et de tri.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Système de gestion de panier / commande efficace.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Sécurité des données, conformément au RGPD.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Optimisation pour les moteurs de recherche ( SEO ) avec vue-meta.
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-deep-purple-accent-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Back Offices</h6>
        <p class="mb-3 text-sm text-gray-900">
          Des Fonctionnalités optimisées pour l'utilisateurs et administrateur.
        </p>
        <hr class="mb-3" />
        <h6 class="mb-2 font-semibold leading-5 text-center">Back Office Utilisateur :</h6>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Gestion des commandes et du profil.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Editions des factures au format PDF.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Service de mail : réception des photographies automatique par mail.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Réinitialisation de mot de passe.
          </li>
        </ul>
        <hr class="mb-3" />
        <h6 class="mb-2 font-semibold leading-5 text-center">Back Office Administrateur :</h6>
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Gestion des utilisateurs et des commandes.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Editions des factures au format PDF.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Système de Gestion des réductions en temps réel.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Réinitialisation de mot de passe.
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-deep-purple-accent-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
            />
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
            />
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Photographie</h6>
        <p class="mb-3 text-sm text-gray-900">
          Optimisation du rendu, du stockage et préservation des droits.
        </p>
        <hr class="mb-3" />
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Stockage sur cloud dédié
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Système de compression personnalisable.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Système de sécurisation : apposition d'un filigrane côté backend.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Affichage : optimisation du rendu en fonction du format d'affichage.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Téléchargement : utilisation d'un BLOB pour conservation des données binaires.
          </li>
        </ul>
      </div>
      <div>
        <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 text-deep-purple-accent-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
            />
          </svg>
        </div>
        <h6 class="mb-2 font-semibold leading-5">Sécurité</h6>
        <p class="mb-3 text-sm text-gray-900">
          Protection contre les attaques optimale et sécurité robuste.
        </p>
        <hr class="mb-3" />
        <ul class="mb-4 -ml-1 space-y-2">
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Authentification via Json Web Token.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Contrôle des URLS avec le authGuard component.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Modération des requêtes HTTP avec Axios Interceptor.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Validation des données frontend ET Backend.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Protection contre les injections SQL.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Politique CORS.
          </li>
          <li class="flex items-start">
            <span class="mr-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-4 h-6 text-deep-purple-accent-400"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5" />
              </svg>
            </span>
            Password Recovery sécurisé.
          </li>
        </ul>
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
        ref="cplus"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/vite.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Vite</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="symfony"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/symfony.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">Symfony</p>
      </div>
    </div>
    <div
      @mouseenter="show_text($event)"
      @mouseleave="hide_text($event)"
      class="flex flex-col items-center"
    >
      <img
        ref="vue"
        class="object-cover w-20 h-20 mb-2 rounded-full shadow"
        src="/assets/vuejs-icon.svg"
        alt="Person"
      />
      <div class="flex flex-col items-center">
        <p class="text-lg font-bold opacity-0">VueJs</p>
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
const c = ref(null)
const html = ref(null)
const css = ref(null)
const symfony = ref(null)
const vue = ref(null)

onMounted(() => {
  const elementsToAnimate = [
    php.value,
    js.value,
    symfony.value,
    c.value,
    vue.value,
    html.value,
    css.value
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
