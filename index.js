const fs           = require('fs');
const path         = require("path");
const textRead     = fs.readFileSync('./text.txt');
const correctText  = textRead.toString();
const lettersArray = correctText.toLowerCase().split('');

const wordCount = (str) => {
    return `Words: ${str.split(" ").length}`;
}

const symbolCount = (str) => {
    return `Symbols: ${str.split("").length}`;
}

const everyLetter = (str) => {
    let col          = {};
    let string       = '';
    let countLetters = '';
    str.forEach (i => {
        col[i] = str.filter (e => e === i).length;
    })

    for (let i in col) {
        if (i !== ' ' && i !== '!') {
            string = `'${i}': ${col[i]}  \n`;
            countLetters += string;
        }
    }
    return countLetters;
}


const createText = `${wordCount(correctText)};
${symbolCount(correctText)}
Letters: \n${everyLetter(lettersArray)}`
console.log(createText);

fs.writeFileSync(path.join(__dirname, 'result.txt'), createText);
