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
const pigLatinTrans = (text) => {
  const masterArr = []

  if (typeof text !== 'string') {
    throw new Error('You must enter a string.')
  }

  const translate = (word) => {
    const wordArr = word.split('')
    if (isTheLetterAVowel(wordArr[0])) {
      masterArr.push(`${wordArr.join('')}way`)
    } else {
      const secondArr = []
      secondArr.push(wordArr[0])
      masterArr.push(`${wordArr.slice(1).concat(secondArr).join('')}ay`)
    }
  }

  const textArr = text.toLowerCase().split(' ')

  for (var i = 0; i < textArr.length; i++) {
    translate(textArr[i])
  }

  return masterArr

  // if (isTheLetterAVowel(wordArr[0])) {
  //   return `${wordArr.join('')}way`
  // } else {
  //   const secondArr = []
  //   secondArr.push(wordArr[0])
  //   return `${wordArr.slice(1).concat(secondArr).join('')}ay`
  // }
}

console.log('consonant test:', pigLatinTrans(dog)) //returns 'ogday'
console.log('vowel test:', pigLatinTrans(ember)) //returns 'emberway'
console.log('consonant capital test:', pigLatinTrans('Dog'))
console.log('vowel capital test:', pigLatinTrans('Egg'))
console.log('multi-word test:', pigLatinTrans('hello there'))
console.log('error test for non-string:', pigLatinTrans(9)) //throws an error
