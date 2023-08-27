<template>
  <form>
    <div class="my-5">
      <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Votre Email</label
      >
      <input
        v-model="state.mail"
        @input="v$.mail.$touch"
        @blur="v$.mail.$touch"
        aria-describedby="helper-text-explanation"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="songoku@saiyen.com"
      />
      <div v-if="v$.mail.$errors">
        <span
          class="text-red-400 font-bold"
          v-for="error in v$.mail.$errors"
          :key="error.$validator"
        >
          {{ error.$message }}
        </span>
      </div>
      <p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">
        Nous ne partagerons pas vos informations personnelles. En savoir plus sur la
        <a
          href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees"
          class="font-medium text-blue-600 hover:underline dark:text-blue-500"
          >Politique de Confidentialité</a
        >.
      </p>
    </div>

    <div>
      <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Votre message</label
      >
      <textarea
        v-model="state.message"
        @input="v$.message.$touch"
        @blur="v$.message.$touch"
        id="message"
        rows="4"
        class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Laissez votre message..."
      >
      </textarea>
      <div v-if="v$.message.$errors">
        <span
          class="text-red-400 font-bold"
          v-for="error in v$.message.$errors"
          :key="error.$validator"
        >
          {{ error.$message }}
        </span>
      </div>
    </div>
    <div class="flex items-center my-4">
      <input
        v-model="state.agree"
        @input="v$.agree.$touch"
        @blur="v$.agree.$touch"
        type="checkbox"
        class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
      />

      <label for="checkbox-1" class="ml-4 text-sm font-medium text-gray-600 dark:text-gray-300"
        >j'accepte de communiquer mon adresse mail à fredgruwedev.com.</label
      >
    </div>
    <div v-if="v$.agree.$errors">
      <span
        class="text-red-400 font-bold"
        v-for="error in v$.agree.$errors"
        :key="error.$validator"
      >
        {{ error.$message }}
      </span>
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
    Votre message a bien été envoyé !
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
    Une erreur est survenu lors de la soumission du formulaire
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { maxLength, required, email, helpers } from '@vuelidate/validators'
import { messageService } from '@/services/contact.service'

const initialState = {
  mail: '',
  message: '',
  agree: false
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

const rules = {
  mail: {
    required,
    email,
    maxLength: maxLength(requiredEmailMaxLength.value)
  },
  message: {
    required,
    maxLength: helpers.withMessage(
      `Votre texte dépasse les ${requiredMessageMaxLength.value} caractères`,
      maxLength(requiredMessageMaxLength.value)
    ),
    regex: helpers.withMessage('Caractères spéciaux interdits!', regex1)
  },
  agree: {
    required: helpers.withMessage('Vous devez accepter les conditions', isChecked)
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
          let response = await messageService.messagePost(JSON.stringify(state))
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
