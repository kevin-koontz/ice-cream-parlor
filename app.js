const iceCream = [
  { name: 'Cookie Dough', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Vanilla', price: 1, quantity: 0, type: 'scoop' },
  { name: 'Strawberry', price: 1.25, quantity: 0, type: 'scoop' },
  { name: 'Sprinkles', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Chocolate Chips', price: 0.25, quantity: 0, type: 'topping' },
  { name: 'Cookie Chunks', price: 0.50, quantity: 0, type: 'topping' }
]

// function orderVanilla() {
//   console.log('ordering vanilla', iceCream[1]);
//   let vanilla = iceCream[1]
//   vanilla.quantity += 1
//   console.log('vanilla');

// }

// function orderVanilla() {
//   let vanilla = null
//   for (let i = 0; i < iceCream.length; ++i) {
//     let scoop = iceCream[i]
//     // console.log('🔁', scoop);
//     if (scoop.name == 'Vanilla') {
//       // console.log('you found Vanilla', scoop);
//       vanilla = scoop
//     }
//   }

//   console.log('You ready to Vanilla this?', vanilla);
//   vanilla.quantity++

// }

function orderItem(selectedItemName) {
  // console.log('ordering', selectedItemName);
  let itemOrdered = null
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    if (item.name == selectedItemName) {
      // console.log('found', item);
      itemOrdered = item
    }
  }

  itemOrdered.quantity += 1
  drawOrder()

}

function calculateCostTotal() {
  let costTotal = 0
  for (let i = 0; i < iceCream.length; i++) {
    let item = iceCream[i]
    costTotal += item.price * item.quantity
  }
  // console.log('💳', costTotal);

  return costTotal
}

function drawOrder() {
  let cartElm = document.getElementById('cart')
  // console.log('📃', cartElm);
  let cartContent = ''
  for (let i = 0; i < iceCream.length; i++) {
    // console.log(i, iceCream[i]);
    let item = iceCream[i]
    // console.log(`${item.quantity}x ${item.name} $${item.price * item.quantity}`);
    if (item.quantity > 0) {
      cartContent += `<p>${item.quantity}x ${item.name} $${(item.price * item.quantity).toFixed(2)}</p>`
    }
  }
  console.log(cartContent);
  cartElm.innerHTML = cartContent

  let customerCost = calculateCostTotal()
  // console.log('You owe me', customerCost);
  let costElm = document.getElementById('cost')
  costElm.innerText = customerCost.toFixed(2)

}


