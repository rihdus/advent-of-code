const input = require('./input')

const sample = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

const allPasswords = input
  .split('\n').filter(Boolean)
  .map((l) => {
    const match =  l.split(/[: -]/).filter(Boolean)
    return {
      i1: match[0],
      i2: match[1],
      regex: new RegExp(match[2], 'g'),
      char: match[2],
      password: match[3],
    }
  })
const validPasswords1 = allPasswords
  .filter(({i1, i2, regex, char, password}) => {
    const min = i1, max = i2;
    const numOccurrences = password.length - password.replace(regex, '').length;
    if(numOccurrences < min || numOccurrences > max) return false;
    return true;
  })

const validPasswords2 = allPasswords
  .filter(({i1, i2, char, password}) => {
    if((password[i1-1] == char || password[i2-1] == char)
      && password[i1-1] !== password[i2-1])
      return true;
  })

console.log(validPasswords1.length)
console.log(validPasswords2.length)
