var fridge = ["milk", "yogurt", "pepperonis", "gatorade"]
var pins = [1234, 4321, 5678, 8765]
var hasRsvped = [true, false, false, true]

console.log(fridge)
console.log(pins)
console.log (hasRsvped)

//pop will remove the last element from the fridge array (gatorade)
fridge.pop()
console.log(fridge)

//push will add these three new pins to the end of the pins array
pins.push(1987, 1337, 6543)
console.log(pins)

//shift will remove the first element from the hasRsvped array - after shift removes the first element, 
//it shifts the remaining 3 to the left in position
hasRsvped.shift()
console.log(hasRsvped)

//a note on index position - on line 1, the fridge variable has an array 
//of foods it contains, and each one has an index position starting with
//milk being number 0, yogurt being 1, pepperonis being 2, and gatorade
//being 3.