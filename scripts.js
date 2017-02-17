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
  if (typeof word !== 'string') {
    throw new Error('You must enter a string.')
  }
  const wordArr = word.split('')
  if (wordArr.includes(' ')) {
    throw new Error('You must enter a single word.')
  }
  if (isTheLetterAVowel(wordArr[0])) {
    return `${wordArr.join('')}way`
  } else {
    const secondArr = []
    secondArr.push(wordArr[0])
    return `${wordArr.slice(1).concat(secondArr).join('')}ay`
  }
}

console.log('consonant test:', pigLatinTrans(dog)) //returns 'ogday'
console.log('vowel test:', pigLatinTrans(ember)) //returns 'emberway'
console.log('error test for non-string:', pigLatinTrans(9)) //throws an error
console.log('error test for multi-word string:', pigLatinTrans('Hello there')) //throws an error
