
const alpha = [
    "a", "b", "c", "d", "e",
    "f", "g", "h", "i", "j", 
    "k", "l", "m", "n", "o", 
    "p", "q", "r", "s", "t",
    "u", "v", "w", "x", "y", "z"
]

const replaceAlpha = (text) => {
    var lowerText = text
        .toLowerCase()
        .replace(/[^a-zA-Z]/g, '')
        .split('')
        .map((letter) => alpha.indexOf(letter) + 1);
    console.log(lowerText)
}

const text = "The sunset sets at twelve o' clock."

replaceAlpha(text);