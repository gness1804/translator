const pig = 'pig'
const dog = 'dog'
const arrow = 'arrow'
const ember = 'ember'

//this would go in a separate file within a helpers folder in an actual app
const isTheLetterAVowel = (letter) => {
  if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
    return true
  } else {
    return false
  }
}

//this is the main function
const pigLatinTrans = (word) => {
  const wordArr = word.split('')
  if (isTheLetterAVowel(wordArr[0])) {
    return `${wordArr.join('')}way`
  } else {

  }
}

console.log(pigLatinTrans(arrow))
