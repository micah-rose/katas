var numbers = "3 6 9 2 5 4 0"

const highLow = (stringNumbers) => {
    var intArray = stringNumbers.split(' ').map( x => +x)
    var sortedArray = intArray.sort(function(a, b){return b-a});
    console.log(sortedArray)
}

highLow(numbers);