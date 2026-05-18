function Tatacar(chassiNumber, model){
    // { }
    // This object is not returned explicitly from here, so it would be managed by new keyword.

    this.chassiNumber = chassiNumber;
    this.model = model;
    this.fuelLevel = 100;
}

Tatacar.prototype.status = function (){
    return `Tata ${this.model}:  #${this.chassiNumber} with ${this.fuelLevel} fuel`
}

const car1 = new Tatacar("SUV", "3AAVDD")
const car2 = new Tatacar("SUMO", "PWEE33F")
console.log(car1)
console.log(car2)


// New creates new instance, Some steps involved Here are ;
/* 
1. new Keyword initialises an empty object.
2. This empty object is linked with Tatacar object prototype  
3. Bound this to new object.
4. Explicit return the object.
*/


function createAutoRickshaw(id, route){
    return {
        id, 
        route, 
        run(){
            return `Auto ${this.id} is running on ${this.route}`
        }
    }
}
let auto1 = createAutoRickshaw("UP-01", "Agra to Kanpur")
let auto2 = createAutoRickshaw("UP-02", "Lucknow to Kanpur")
console.log(auto1.run())
// Here createAutoRickshaw is a factory function which holds the whole property or reference for every variable
// Whereas in case of new Keyword, empty object is linked with new instance just like function, class or object 
// In new, placed at a single place and memory is shared but in factory function, everytime memory is created.