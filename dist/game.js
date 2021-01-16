// @ts-nocheck

const NUMBER_OF_CITIES = cities.length

var correctAnswer
var remainingCities = _.cloneDeep(cities)
console.log(remainingCities.length)

const chooseAnswer = () => {
  const correctAnswerIndex = _.random(NUMBER_OF_CITIES - 1)
  correctAnswer = remainingCities[correctAnswerIndex]
  _.pullAt(remainingCities, [correctAnswerIndex])
  console.log(remainingCities.length)

  // TODO: make sure none of the cities is the same
  const cityAIndex = _.random(NUMBER_OF_CITIES - 1)
  _.pullAt(remainingCities, [cityAIndex])
  console.log(remainingCities.length)
  const cityBIndex = _.random(NUMBER_OF_CITIES - 1)
  _.pullAt(remainingCities, [cityBIndex])
  console.log(remainingCities.length)
  const cityCIndex = _.random(NUMBER_OF_CITIES - 1)
  _.pullAt(remainingCities, [cityCIndex])
  console.log(remainingCities.length)
  const cityA = cities[cityAIndex]
  const cityB = cities[cityBIndex]
  const cityC = cities[cityCIndex]


  document.getElementById('cityA').innerHTML = `${cityA.city}, ${cityA.state}: ${cityA.distances[correctAnswerIndex]} mi`
  document.getElementById('cityB').innerHTML = `${cityB.city}, ${cityB.state}: ${cityB.distances[correctAnswerIndex]} mi`
  document.getElementById('cityC').innerHTML = `${cityC.city}, ${cityC.state}: ${cityC.distances[correctAnswerIndex]} mi`
  document.getElementById('correctAnswer').innerHTML = `${correctAnswer.city}, ${correctAnswer.state}`

  const answerOptions = _.cloneDeep(remainingCities)
  answerOptions.push(correctAnswer)
  answerOptionsShuffled = _.shuffle(answerOptions)
  // TODO: shuffle answerOptions
  var optionButtonsHTML = ''

  _.map(answerOptionsShuffled, city => {
    optionButtonsHTML += `<button>${city.city}, ${city.state}</button>`
  })

  document.getElementById('optionButtons').innerHTML = optionButtonsHTML
}



chooseAnswer()
