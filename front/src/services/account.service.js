/* importation des modules nécessaires */
import Axios from './caller.service.js'

// fonction  de login
let login = (credentials) => {
  return Axios.post('api/login_check', credentials, {
    headers: { 'Content-Type': 'application/json' }
  })
}

// permet d'exporter sous la forme d'un objet les
// expressions de fonction.
// A bien mettre à la fin du module !
export const accountService = {
  login
  // addUser,
}
