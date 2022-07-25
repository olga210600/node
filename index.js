const fs = require('fs')
const textRead = fs.readFileSync('./text.txt')
const correctText = textRead.toString()

const wordCount = (str) => {
    return `Words: ${str.split(" ").length}`;
}

const symbolCount = (str) => {
    return `Symbols: ${str.split("").length}`;
}

const getCountNumbers = (string) => {
    for (let [key, value] of string) {
        if (!(key === ' ') && !(key === '!')) {
            console.log(`'${key}': ${value}`)
        }
    }
}

const count = (str, counter) => {
    for (let i = 0; i < str.length; i++) {
        let k = counter.get(str[i]);
        counter.set(str[i], k + 1);
    }
    getCountNumbers(counter);
}

const startCount = (test, callback) => {
    if (test.length === 0) {
        console.log("empty string");
        return;
    } else {
        let string = new Map();
        for (let i = 0; i < test.length; i++) {
            string.set(test[i], 0);
        }
        callback(test, string);
    }
}

const createText = () => {
    return `${wordCount(correctText)}
${symbolCount(correctText)}
${startCount(correctText.toLowerCase(), count)}
     `
}

fs.writeFileSync('./result.txt', `${createText()}`)
