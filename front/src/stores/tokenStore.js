import { defineStore } from 'pinia'
import VueJwtDecode from 'jwt-decode'
// import { useRouter } from 'vue-router';

// implémentation d'un nouveau magasin
// définition des propriétés token, pseudo, roles et statusApp
export const useTokenStore = defineStore('getToken', {
  state: () => ({
    token: localStorage.getItem('token'),
    pseudo: '',
    roles: [],
    statusApp: 'public'
  }),
  // déclaration des getters
  getters: {
    getLocalToken: (state) => state.token,
    getRoles: (state) => state.roles,
    getStatusApp: (state) => state.statusApp,
    getPseudo: (state) => state.pseudo
  },

  // définition des actions
  actions: {
    decodeToken(token) {
      return VueJwtDecode(token).roles
    },

    getTokenId() {
      if (this.getLocalToken) {
        return VueJwtDecode(this.token).id
      }
    },

    saveToken(token) {
      this.token = token
      localStorage.setItem('token', this.token)
    },

    disconnect() {
      localStorage.removeItem('token')
      this.setStatusApp('public')
      this.token = null
    },

    // analyse la validité du token ( date et role)
    getTokenValidity() {
      const timeStampInSeconds = Date.now()
      const date = timeStampInSeconds / 1000
      if (this.token) {
        const tokenExp = VueJwtDecode(this.token).exp
        // verification de la validité du token
        if (date > tokenExp) {
          // si la date est expirée alert, remove du token du localstorage et redirection
          this.token = ''
          this.setStatusApp('expired')
          // si le token est ok, on vérifie le role de l'utilisateur
        } else {
          let roles = this.decodeToken(this.token)
          // Si role admin : on passe en god mode
          if (roles.includes('ROLE_USER')) {
            this.setStatusApp('userMode')
          }
          if (roles.includes('ROLE_BANNISHED')) {
            this.setStatusApp('bannished')
          }
          if (roles.includes('ROLE_ADMIN')) {
            this.setStatusApp('godMode')

            // sinon on reste en mode User
          } else this.saveToken(this.token)
          this.setRoles(VueJwtDecode(this.token).roles)
        }
      } else {
        return false
      }
    },

    // implémentation des setters
    setPseudo(pseudo) {
      this.pseudo = pseudo
      console.log(this.pseudo)
    },

    setRoles(roles) {
      this.roles = roles
      console.log(this.roles)
    },

    setStatusApp(status) {
      this.statusApp = status
    }
  }
})
