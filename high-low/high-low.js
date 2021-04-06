var numbers = "3 6 9 2 5 4 0"

const highLow = (stringNumbers) => {
    var intArray = stringNumbers.split(' ').map( x => +x)
    console.log(intArray)
}

highLow(numbers);