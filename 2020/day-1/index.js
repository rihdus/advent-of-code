const input = require('./day-1-input');
const arr = input
              .split('\n').filter(Boolean)
              .map(a => parseInt(a));
const arrSize = arr.length;

let sum2020 = []
let travellingWindowindex = 0;

while(travellingWindowindex < arr.length) {

  let nextIndex = travellingWindowindex + 1

  for(;nextIndex<arrSize; nextIndex++) {
    let nextNextIndex = nextIndex + 1
    for(;nextNextIndex<arrSize; nextNextIndex++) {
      if( arr[travellingWindowindex] + arr[nextIndex] + arr[nextNextIndex] == 2020) {
        sum2020.push([travellingWindowindex, nextIndex, nextNextIndex])
        break;
      }
    }
    if( arr[travellingWindowindex] + arr[nextIndex] == 2020) {
      sum2020.push([travellingWindowindex, nextIndex])
      break;
    }
  }
  travellingWindowindex += 1;
}

sum2020.forEach((sum) => {
  console.log(sum.map(i => arr[i]), sum.reduce((mul, v) => mul*=arr[v], 1))
})
