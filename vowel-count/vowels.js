const vowelCount = (str) => {
const count = str.split('').reduce((acc, v) => {
    return v.match(/[aeiou]/g) ? acc + 1 : acc
}, 0)
    console.log(count);
}

vowelCount("abracadabra");