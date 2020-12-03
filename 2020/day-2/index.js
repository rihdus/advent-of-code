const input = require('./input')

const sample = `
1-3 a: abcde
1-3 b: cdefg
2-9 c: ccccccccc
`;

const validPasswords = input
  .split('\n').filter(Boolean)
  .map((l) => {
    const match =  l.split(/[: -]/).filter(Boolean)
    return {
      min: match[0],
      max: match[1],
      char: new RegExp(match[2], 'g'),
      password: match[3],
    }
  })
  .filter(({min, max, char, password}) => {
    const numOccurrences = password.length - password.replace(char, '').length;
    if(numOccurrences < min || numOccurrences > max) return false;
    return true;
  })

console.log(validPasswords.length)
