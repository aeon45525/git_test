// Translate border-left-width to borderLeftWidth
function camelize(str) {
  return str
    .split('-') 
    .map(
      (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(''); 
}
// console.log(camelize("background-color"))


// Filter range



// Filter range "in place"
// Sort in decreasing order
// Copy and sort array
// Shuffle an array
// Filter unique array members