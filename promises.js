var Promise = require('bluebird')

var pizza = 'margherita'
orderPizza(pizza)
  .then(deliver)
  .catch(tryCheese)

function orderPizza(pizza) {
  console.info('Ordered a ' + pizza + ' pizza')
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (pizza === 'cheese') {
        resolve(pizza)
      } else {
        var msg = 'Sorry, can\'t make a ' + pizza + ' pizza'
        reject(new Error(msg))
      }
    }, 3000)
  })
}

function deliver (pizza) {
  console.info('Delivered a ' + pizza + ' pizza')
  enjoy(pizza)
}

function tryCheese (err) {
  console.warn(err.message)
  orderPizza('cheese')
    .then(deliver)
    .catch(function (err) {
      console.warn(err.message)
    })
}

function enjoy (pizza) {
  console.log('Hmm ... ' + pizza + ' pizza')
}
