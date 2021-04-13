//[19, 5, 42, 2, 77]
//5 + 2 = 7

const numbers = [19, 5, 42, 2, 77]

const sumTwo = (numbers) => {
    var sortedNumbers = numbers.map( x => +x)
        .sort(function(a, b){return a-b});

    var sumOfTwo = sortedNumbers[0] + sortedNumbers[1]
    console.log(sumOfTwo)
}

sumTwo(numbers);