const food = 'burger'

if (food === 'burger') {
  console.log('you are starving')
} else if (food === 'noodle') {
  console.log('you are not so hungry')
} else {
  console.log('every food is for all human mankind')
}
console.log('----------------')

true ? console.log('true') : console.log('false')

2 === 6 / 2 ? console.log('true') : console.log('false')

console.log('--------------')

const cars = 'ferarri' || 'avanza'
console.log(cars)

const age = 60
const car = 'innova'
const gender = 'male'

if (gender === 'male' && age >= 50 && car === 'innova') {
  console.log('welcome brother')
} else if (age >= 50 && car === 'innova') {
  console.log('welcome banget')
} else {
  console.log('please try again')
}

console.log('-------------')

const school = 'impactbyte'
const coach = 'bara'

if (school === 'impactbyte' || coach === 'bara') {
  console.log('welcome to BARATECH CORP')
} else {
  console.log('im sorry, try to others corp, see you!')
}

function comparison(number1, number2) {
  if (number1 > number2) {
    console.log('number1 is larger than number2')
  } else if (number2 > number1) {
    console.log('number2 is larger than number1')
  }
}

comparison(1, 2)
