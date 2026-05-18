console.log(this)
function abcd() {
    // console.log(this)
}
abcd()

const bollywood = {
    name: "bajirao",
    total: 54,
    pqrs() {
        return `${this.name} has ${this.total} in total.`
    }
}
console.log(bollywood.pqrs())

// It is misbehaving totally. Will check callstack
const newObj = {
    crew: "Spot boys.",
    prepareProps() {
        console.log(`Outer crew is ${this.crew}`);
        
        function arrangeChairs() {
            console.log(`Inner crew is ${this.crew}`)
        }

        const arrangeLight = () => {
            console.log(`Arrow this.crew: ${this.crew}`)
        }
        arrangeLight()
        arrangeChairs()
    }
}
newObj.prepareProps()

// Detached Mode and functions inside functions to be remembered for this 
console.log(123, "Start of detach and connected functions.")
const actor = {
    name: "Ranveer Singh",
    cast() {
        return `${this.name} is in action.`
    }
}

const connectedCast = actor.cast() // Object is running its own method
console.log(connectedCast)

const detachedCast = actor.cast // Here method is taken out and called later
console.log(detachedCast())
// It is different from closures as closure holds referenced variables but this doesn't



// call - bind - apply
let name = "Sagar"
function cookDish(dish, indgredients) {
    return `${this.name} cooks ${dish} from ${indgredients}`
}
console.log(cookDish("Pasta", "vegetables"))

let sharmaKitchen = { name: "Sharma Ji's Kitchen" }
let guptaKitchen = { name: "Gupta ji's kitchen" }

console.log(cookDish.call(sharmaKitchen, "Pasta", ['vegetables', 'panner'].join(' & ')))

console.log(cookDish.call(guptaKitchen, "soup", 'vegetables'))

const munnaOrder = ["chhole kulche", "punjabi dhaba"]
console.log(cookDish.apply(guptaKitchen, munnaOrder)) // apply is generally used for arrays.



const bills = [100, 200, 14040, 11, 300]
let max = Math.max(...bills)
let max2 = Math.max.apply(null, bills)
console.log(max, max2)
// .apply(): This is a method available on all JavaScript functions. It allows you to call a function with a specific this context and, more importantly, an array of arguments.
// null: The first argument of .apply() sets the value of this inside the function. Since Math.max doesn't rely on this (it’s a static utility), we pass null or undefined.
// bills: This is your array of numbers. apply takes this array and "unpacks" it so that each element becomes an individual argument for Math.max.




// Binds return function whereas call and apply returns result
function reportDelivery(location, status){
    return `${this.name} at ${location} : ${status}`
}
let deliverboy = {name: "Ranveer"}

console.log("Call; ", reportDelivery.call(deliverboy, "Lyari", "Ordered"))
console.log("Apply: ", reportDelivery.apply(deliverboy, ["Sahara", "Pickup"]))
console.log("Bind: ", reportDelivery.bind(deliverboy, "Mars", "Delivered"))// It is returning function so try to execute it
// Bind can be used to hold reference that can be executed later. But call and apply  are executed immediately
let bound = reportDelivery.bind(deliverboy, "Mars", "Delivered");
console.log(bound())
// Also we can pass variable during execution
let bound2 = reportDelivery.bind(deliverboy, "Uranus")
console.log(bound2("Failed to Deliver"))
// or
let bound3 = reportDelivery.bind(deliverboy)
console.log(bound3("jupitor", "Attempt atleast"))



