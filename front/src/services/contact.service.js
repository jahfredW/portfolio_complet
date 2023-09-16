/* importation des modules nécessaires */
import Axios from './caller.service.js'

const messagePost = (credentials) => {
  let url = 'api/contacts'
  return Axios.post(url, credentials, { headers: { 'Content-Type': 'application/json' } })
}

const messageRead = () => {
  let url = 'api/contacts'
  return Axios.get(url)
}

export const messageService = {
  messagePost,
  messageRead
}
