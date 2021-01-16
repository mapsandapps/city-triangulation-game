// @ts-nocheck

// const NUMBER_OF_CITIES = 50

let cityMatrix = []
let cityData = []

// const citiesTruncated = _.slice(cities, 0, NUMBER_OF_CITIES)
const citiesTruncated = cities

_.map(citiesTruncated, (cityA, i) => {
  cityMatrix.push([])
  cityADistances = []
  _.map(citiesTruncated, (cityB, j) => {
    if (cityA.N === cityB.N && cityA.W === cityB.W) {
      cityMatrix[i][j] = null
      cityADistances.push(null)
    } else {
      distance = haversine ({
        latitude: cityA.N,
        longitude: cityA.W
      },{
        latitude: cityB.N,
        longitude: cityB.W
      },{
        unit: 'mile'
      })
      cityMatrix[i][j] = distance
      cityADistances.push(_.round(distance))
    }
  })
  cityData.push({
    city: cityA.City,
    state: cityA.State,
    lat: cityA.N,
    lon: `-${cityA.W}`,
    distances: cityADistances
  })
})

const mins = _.map(cityMatrix, row => {
  return _.round(_.min(row))
})

// how to haversine:
// const start = {
//   latitude: 30.849635,
//   longitude: -83.24559
// }
// haversine (startCoordinates, endCoordinates, options)

console.log(cityMatrix)
console.log(cityData)
