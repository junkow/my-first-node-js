'use strict';
const number = process.argv[2] || 0;
// process.argv[0]: contains `node` command path.
// process.argv[1]: contains the path to the script which I executed.
// process.ragv[2]: the argument that is used when execute the program.

let sum = 0;
for (let i = 0; i <= number; i++) {
    sum = sum + i;
}

console.log(sum);