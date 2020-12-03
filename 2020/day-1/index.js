const input = require('./sample');
const arr = input
              .split('\n').filter(Boolean)
              .map(a => parseInt(a));
console.log(arr)

// Happy coding