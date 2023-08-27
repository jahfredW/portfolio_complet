import axios from 'axios'
// import { accountService } from './account.service'
import router from '@/router'
// import { useTokenStore } from '@/stores/tokenStore'

/* ce module défini la configuration initiale de axios, 
et paramètre le header */

const isDev = process.env.NODE_ENV === 'development'

const baseURL = isDev ? 'https://localhost:8000' : 'https://backend.fredgruwedev.com'

const Axios = axios.create({
  baseURL: baseURL,
  //   baseURL: 'https://localhost:8000',
  // baseURL : 'https://70bd-2a01-e0a-849-4580-30a9-f4a2-18c9-6c6e.ngrok-free.app',
  // headers: {'X-Custom-Header': 'foobar'},
  withCredentials: false
})

axios.defaults.headers['content-type'] = 'application/json'

axios.defaults.withCredentials = true

axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token')

// Axios.defaults.headers.common["Authorization"] =
//   "Bearer, " + localStorage.getItem("token");

// Interceptor des réponses de l'api

// Axios.interceptors.response.use(response => {
//     return response
// }, error => {
//     if(error.response.status == 401){
//         accountService.logout();
//         router.push('/login');
//         alert('Désolé, vous n etes pas autorisé ! ')}
//     // else if(error.response.status == 500){
//     //     alert("Erreur lors de l'enregistrement popo ! ")
//     //     location.reload();
//     // }
// })

// axios interceptor, si connecté alors le token est
// ajouté dans l'entête.
// Interceptor pour injection token
// Axios.interceptors.request.use((request) => {
//   if (accountService.isLogged()) {
//     request.headers.Authorization = 'Bearer ' + accountService.getToken()
//     const tokenStore = useTokenStore()
//     if (tokenStore.getLocalToken) {
//       // tokenStore.getTokenValidity()
//       // console.log(tokenStore.getStatusApp);
//       let statusApp = tokenStore.getStatusApp
//       // console.log(statusApp);
//       if (statusApp === 'expired') {
//         alert('Session expirée, vous devez vous reconnecter')
//         localStorage.removeItem('token')
//         router.push('/')
//       }

//       const currentRoute = router.currentRoute.value
//       console.log(currentRoute.matched[0].name)
//       if (statusApp === 'userMode' && currentRoute.matched[0].name === 'admin') {
//         alert('Url non autorisée!')
//         router.push('/')
//       }

//       if (statusApp === 'bannished') {
//         alert('Vous êtes bannis!')
//         router.push('/auth/bannished')
//       }
//     }
//   }
//   return request
// })

export default Axios
