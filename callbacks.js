var pizza = 'margherita'
orderPizza(pizza, deliver)

function orderPizza(pizza, callback) {
  console.info('Ordered a ' + pizza + ' pizza')
  setTimeout(function () {
    if (pizza === 'cheese') {
      callback(null, pizza)
    } else {
      var msg = 'Sorry, can\'t make a ' + pizza + ' pizza'
      callback(new Error(msg))
    }
  }, 3000)
}

function deliver (err, pizza) {
  if (err) {
    return tryCheese(err, deliver)
  }
  console.info('Delivered a ' + pizza + ' pizza')
  enjoy(pizza)
}

function tryCheese (err, callback) {
  console.warn(err.message)
  orderPizza('cheese', deliver)
}

function enjoy (pizza) {
  console.log('Hmm ... ' + pizza + ' pizza')
}
