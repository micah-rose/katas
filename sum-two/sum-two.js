//[19, 5, 42, 2, 77]
//5 + 2 = 7

const numbers = [19, 5, 42, 2, 77]

const sumTwo = (numbers) => {
    const [firstNumber, secondNumber] = numbers.sort((a, b) =>  a-b);
    console.log(firstNumber + secondNumber)
}

sumTwo(numbers);