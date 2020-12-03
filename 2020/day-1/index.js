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

    if( arr[travellingWindowindex] + arr[nextIndex] == 2020) {
      sum2020.push([travellingWindowindex, nextIndex])
      break;
    }
  }
  if( sum2020.length > 0 ) {
    console.log(arr[sum2020[0][0]] * arr[sum2020[0][1]]);
    break;
  }
  travellingWindowindex += 1;
}
