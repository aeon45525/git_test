function add7(num){
    return num + 7
}
// console.log(add7(10))

function multiply(num1, num2){
    return num1 * num2
}
// console.log(multiply(3, 2))

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}
// console.log(capitalize("abCD"))\

function lastletter(letter){
    let length = letter.charAt(letter.length - 1)
    return length
}
console.log(lastletter("ABCD"))