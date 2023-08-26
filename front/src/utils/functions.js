import VueJwtDecode from 'jwt-decode'

// récupère l'extension d'un fichier
const getExtension = (picture) => {
  let splitImage = picture.name.split('.')
  let extension = splitImage[splitImage.length - 1]
  return extension
}

// Formate une date reçu de datePicker en dd/mm/aaaa
const dateFormat = (date) => {
  let splitDate = date.toString().split(' ')
  let day = splitDate[2]
  let month = splitDate[1]
  let year = splitDate[3]
  let monthNumber = convertDay(month)
  let formatedDate = `${day}/${monthNumber}/${year}`
  return formatedDate
}

//formate une date immutable réçue du back
const dateImmutableFormat = (date) => {
  let splitDate = date.split('T')
  let leftDate = splitDate[0].split('-')
  let day = leftDate[2]
  let month = leftDate[1]
  let year = leftDate[0]
  let convertDate = `${day}/${month}/${year}`
  return convertDate
}

const convertDay = (month) => {
  const months = {
    Jan: '01',
    Feb: '02',
    Mar: '03',
    Apr: '04',
    May: '05',
    Jun: '06',
    Jul: '07',
    Aug: '08',
    Sep: '09',
    Oct: '10',
    Nov: '11',
    Dec: '12'
  }
  return months[month]
}

const getTokenExp = () => {
  let token = localStorage.getItem('token')
  if (token) {
    const timeStampInSeconds = Date.now()
    const date = timeStampInSeconds / 1000
    const tokenExp = VueJwtDecode(token).exp
    return date > tokenExp
  }
}

// lutte contre les attaques XSS
const htmlSpecialChars = (string) => {
  // correspondance des caractères spéciaux :
  const specialchars = [
    ['&', '&amp;'],
    ['<', '&lt;'],
    ['>', '&gt;'],
    ['"', '&quot;']
  ]

  // usage de trim sur la chaine en entrée.
  var escapedString = string.trim()

  // itération sur specialChars,
  var len = specialchars.length
  for (var x = 0; x < len; x++) {
    // Remplacement de chaque car par son entité correspondante .
    escapedString = escapedString.replace(new RegExp(specialchars[x][0], 'g'), specialchars[x][1])
  }

  return escapedString
}

const cleanUp = (string) => {
  return string.toLowerCase().replace(/[!$(){}[\]\s:;<+?\\>]/g, '')
}

// fonction de calcul de différences de dates en jours :
const countDown = (expireAtProps, countDownValue) => {
  const expireAt = expireAtProps
  const today = new Date()
  const convertedExpireAt = new Date(expireAt)
  const diffMs = convertedExpireAt - today
  const differenceEnJours = diffMs / (1000 * 60 * 60 * 24)
  countDownValue.value = Math.floor(differenceEnJours)
}

export const utils = {
  getExtension,
  dateFormat,
  convertDay,
  getTokenExp,
  htmlSpecialChars,
  cleanUp,
  countDown,
  dateImmutableFormat
}
