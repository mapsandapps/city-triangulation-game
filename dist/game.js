// @ts-nocheck

const NUMBER_OF_CITIES = cities.length

var correctAnswer
var remainingCities = _.cloneDeep(cities)

const revealAnswer = () => {
  document.getElementById('correctAnswer').innerHTML = `${correctAnswer.city}, ${correctAnswer.state}<br><button onclick="location.reload()">Next question</button>`
}

const checkAnswer = (city, state, buttonIndex) => {
  // TODO: and add check or X

  if (city === correctAnswer.city && state === correctAnswer.state) {
    document.getElementById(`option${buttonIndex}`).classList.add('correct')
    revealAnswer()
  } else {
    document.getElementById('correctAnswer').innerHTML = `<button onclick="revealAnswer()">Reveal answer</button>`
    document.getElementById(`option${buttonIndex}`).classList.add('incorrect')
  }
}

const setUpQuestion = () => {
  const chosenCities = _.sampleSize(cities, 4)

  var answerOptions = _.cloneDeep(cities)
  _.pullAt(answerOptions, [
    chosenCities[1].index,
    chosenCities[2].index,
    chosenCities[3].index
  ])

  correctAnswer = chosenCities[0]
  const correctAnswerIndex = correctAnswer.index

  answerOptionsSorted = _.sortBy(answerOptions, ['state', 'city'])

  writeHTML({
    chosenCities,
    correctAnswerIndex,
    answerOptionsSorted
  })
}

const writeHTML = ({
  chosenCities,
  correctAnswerIndex,
  answerOptionsSorted
}) => {
  document.getElementById('otherCities').innerHTML = `<div>What city is</div><div> ${chosenCities[1].distances[correctAnswerIndex]} miles from ${chosenCities[1].city}, ${chosenCities[1].state},</div><div>${chosenCities[2].distances[correctAnswerIndex]} miles from ${chosenCities[2].city}, ${chosenCities[2].state}, and</div><div>${chosenCities[3].distances[correctAnswerIndex]} miles from ${chosenCities[3].city}, ${chosenCities[3].state}?</div>`

  var optionButtonsHTML = ''

  _.map(answerOptionsSorted, (city, index) => {
    optionButtonsHTML += `<button id="option${index}" onclick="checkAnswer('${city.city}', '${city.state}', '${index}')"><span class="city">${city.city}</span><br /><span class="state">${city.state}</span></button>`
  })

  document.getElementById('optionButtons').innerHTML = optionButtonsHTML
}

setUpQuestion()
