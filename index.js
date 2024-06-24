// Write your solution here!
let cats = ["Milo", "Otis", "Garfield"];

// appends a cat to the cats array
function destructivelyAppendCat(name){
    cats.push(name)
}
// prepends a cat to the begging of the cats array
function destructivelyPrependCat(name){
    cats.unshift(name)
    // removes the last cat dfrom the cats array
}function destructivelyRemoveLastCat(name){
    cats.pop(name)
}
// removes the first cat from the cats array
function destructivelyRemoveFirstCat(name){
    cats.shift(name)
}
function appendCat(name){
    let newCats = [...cats , name]
    return newCats

}
function prependCat(name){
    let newCats = [name, ...cats]
    return newCats

}
function removeLastCat(){
    let newCats = cats.slice(0, cats.length-1)
    console.log(newCats)
    return newCats

}
function removeFirstCat(){
    let newCats = cats.slice(1)
    return newCats
}