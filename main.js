document.getElementsByClassName('div1')[0].onclick = show1
document.getElementsByClassName('div2')[0].onclick = show2
document.getElementsByClassName('div3')[0].onclick = show3

function show1(e){
    alert('Div 1')
    e.stopPropagation();
}
function show2(e){
    alert('Div 2')
    e.stopPropagation();
}
function show3(e){
    alert('Div 3')
    e.stopPropagation();

}



// Question 2

'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }



/*
 * Complete the 'textQueries' function below.
 *
 * The function accepts following parameters:
 *  1. STRING_ARRAY sentences
 *  2. STRING_ARRAY queries
 */

let sentences1 = ["you did it", "you had it", "i want it", "lil wayne loves cash money you"];
let queries1 = ["you it", "it", "cash money", "comic sans it you"];
function textQueries(sentences, queries) {
  let hmap = new Map();
  for ( let a = 0; a < queries.length; a++) {
    let arrayOfQueries = queries[a].split(" ");
    hmap.set(a, new Map());
    for (let b = 0; b < arrayOfQueries.length; b++) {
      let innerMap = hmap.get(a);
      innerMap.set(arrayOfQueries[b], new Array());
    }
  }
    // loop through sentences
  for (let c = 0; c < sentences.length; c++) {
    hmap.forEach( (value, key, map) => {
      value.forEach( (val, k, m) => {
        if (sentences[c].includes(k) ) {
          val.push(c);
        }
        m.set(k, val);
      })
    })
  }
  let output = [];
  for (let d = 0; d < hmap.size; d++) {
    let arrays = [];
      hmap.get(d).forEach( (va, ke, ma) => {
        arrays.push(va);
      });
      var result = arrays.shift().filter(function(v) {
      return arrays.every(function(a) {
              return a.indexOf(v) !== -1;
          });
      });
      output.push(result);
    }
  console.log(output);
  return output;
}

textQueries(sentences1, queries1);