var numbers = "3 6 9 2 5 4 0"

const highLow = (stringNumbers) => {
    var sortedArray = stringNumbers.split(' ')
        .map( x => +x)
        .sort(function(a, b){return b-a});

    let finalNumbers = "";
    sortedArray.forEach(function(e) {finalNumbers += e + " "});
    console.log(finalNumbers)
}

highLow(numbers);