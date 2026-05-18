// Polyfills
Array.prototype.mapTwo = function (){
    for (let i = 0; i < this.length; i++){
        this[i] *= 2;
    }
    return this;
}
console.log([3,2.34,3243,23,22].mapTwo())


// Some Array methods are map, filter, slice, concat, find, findIndex, includes, every, some, reduce, push, pop, shift, unshift, splice, sort

// I am writing polyfills for these all 
// To avoid issue with normal methods, i will use NormalConcatenatedText

Array.prototype.Map = function (){
    // this = [] so I have access each property and modify accordingly.
    for (let i=0; i<this.length; i++){
        this[i] => 
    }
    return this;
}