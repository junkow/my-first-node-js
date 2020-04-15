'use strict';
const number = process.argv[2] || 0;
// process.argv[0]: entered node command path.
// process.argv[1]: entered the file path of the executed program.
// process.ragv[2]: the argument that is used when execute the program.

let sum = 0;
for (let i = 0; i <= number; i++) {
    sum = sum + i;
}

console.log(sum);