<template>
  <div class="mx-5">
    <form>
      <div class="my-5">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Votre Email</label
        >
        <input
          v-model="state.email"
          @input="v$.email.$touch"
          @blur="v$.email.$touch"
          aria-describedby="helper-text-explanation"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="songoku@saiyen.com"
        />
        <div v-if="v$.email.$errors">
          <span
            class="text-red-400 font-bold"
            v-for="error in v$.email.$errors"
            :key="error.$validator"
          >
            {{ error.$message }}
          </span>
        </div>
      </div>

      <div>
        <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Votre mot de passe</label
        >
        <input
          v-model="state.password"
          @input="v$.password.$touch"
          @blur="v$.password.$touch"
          id="password"
          rows="4"
          class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Votre mot de passe..."
        />

        <div v-if="v$.password.$errors">
          <span
            class="text-red-400 font-bold"
            v-for="error in v$.password.$errors"
            :key="error.$validator"
          >
            {{ error.$message }}
          </span>
        </div>
      </div>
      <div class="pt-4 mb-2">
        <button
          @click.prevent="submitForm"
          type="submit"
          class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Soumettre
        </button>
      </div>
    </form>
    <div
      ref="boxAlertSuccess"
      class="opacity-0 transition-opacity duration-700 ease-in-out max-w-md mx-auto shadow-xl fixed top-10 left-5 mb-3 inline-flex w-full items-center rounded-lg bg-green-500 px-6 py-5 text-base text-success-700"
      role="alert"
    >
      <span class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      Connexion réussi
    </div>
    <div
      ref="boxAlertFail"
      class="opacity-0 transition-opacity duration-700 ease-in-out max-w-md mx-auto shadow-xl fixed top-10 left-5 mb-3 inline-flex w-full items-center rounded-lg bg-red-600 px-6 py-5 text-white text-danger-700"
      role="alert"
    >
      <span class="mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="h-5 w-5"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z"
            clip-rule="evenodd"
          />
        </svg>
      </span>
      Une erreur est survenu lors de la connexion
    </div>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, required, email, helpers } from '@vuelidate/validators'
import { accountService } from '@/services/account.service'
import { utils } from '@/utils/functions'

const initialState = {
  email: '',
  password: ''
}

const requiredEmailMaxLength = ref(25)
const requiredMessageMaxLength = ref(500)

const state = reactive({
  ...initialState
})

const regex1 = helpers.regex(/^[a-zA-Z0-9\s.,]+$/)

const boxAlertSuccess = ref(null)
const boxAlertFail = ref(null)

const isChecked = (value) => value === true

let escapedPassword = utils.htmlSpecialChars(initialState.email)
state.password = escapedPassword

const rules = {
  email: {
    required,
    email,
    maxLength: maxLength(requiredEmailMaxLength.value)
  },
  password: {
    required,
    maxLength: helpers.withMessage(
      `Votre texte dépasse les ${requiredMessageMaxLength.value} caractères`,
      maxLength(requiredMessageMaxLength.value)
    )
  }
}

const v$ = useVuelidate(rules, state)

// reset de validation
const resetValidation = () => {
  for (const key in v$) {
    if (v$[key].$dirty !== undefined) {
      v$[key].$reset()
    }
  }
}

// soumission de la validation et requete AJAX
const submitForm = () => {
  v$.value
    .$validate()
    .then(async (result) => {
      console.log(state)
      if (result) {
        try {
          state.password
          let response = await accountService.login(JSON.stringify(state))
          fadeIn(boxAlertSuccess)
          setTimeout(() => {
            fadeOut(boxAlertSuccess)
          }, 2000)
          console.log(response)

          Object.assign(state, initialState)
          resetValidation()
        } catch (error) {
          fadeIn(boxAlertFail)
          setTimeout(() => {
            fadeOut(boxAlertFail)
          }, 2000)
          console.log(error)
        }
      }
    })
    .catch((err) => {
      console.log('oups, something wrong')
      console.log(err)
    })
}

// gestion de l'apparition, disparition en fondu :

const fadeIn = (element) => {
  element.value.classList.add('opacity-100')
  element.value.classList.remove('opacity-0')
}

const fadeOut = (element) => {
  element.value.classList.add('opacity-0')
  element.value.classList.remove('opacity-100')
}
</script>
