// @ts-nocheck

const NUMBER_OF_CITIES = cities.length

var correctAnswer
var remainingCities = _.cloneDeep(cities)

const checkAnswer = (foo, bar) => {
  console.log(foo)
  console.log(bar)
}

const chooseAnswer = () => {
  const chosenCities = _.sampleSize(cities, 4)

  console.log(chosenCities)

  var answerOptions = _.cloneDeep(cities)
  _.pullAt(answerOptions, [
    chosenCities[1].index,
    chosenCities[2].index,
    chosenCities[3].index
  ])
  console.log(answerOptions.length) // should be 47

  correctAnswer = chosenCities[0]
  const correctAnswerIndex = correctAnswer.index

  answerOptionsShuffled = _.shuffle(answerOptions)

  writeHTML({
    chosenCities,
    correctAnswerIndex,
    answerOptionsShuffled
  })
}

const writeHTML = ({
  chosenCities,
  correctAnswerIndex,
  answerOptionsShuffled
}) => {
  document.getElementById('otherCities').innerHTML = `<div>What city is</div><div> ${chosenCities[1].distances[correctAnswerIndex]} miles from ${chosenCities[1].city}, ${chosenCities[1].state},</div><div>${chosenCities[2].distances[correctAnswerIndex]} miles from ${chosenCities[2].city}, ${chosenCities[2].state}, and</div><div>${chosenCities[3].distances[correctAnswerIndex]} miles from ${chosenCities[3].city}, ${chosenCities[3].state}?</div>`

  document.getElementById('correctAnswer').innerHTML = `${chosenCities[0].city}, ${chosenCities[0].state}`


  var optionButtonsHTML = ''

  _.map(answerOptionsShuffled, city => {
    optionButtonsHTML += `<button onclick="checkAnswer('${city.city}', '${city.state}')">${city.city}, ${city.state}</button><br />`
  })

  document.getElementById('optionButtons').innerHTML = optionButtonsHTML
}

chooseAnswer()
