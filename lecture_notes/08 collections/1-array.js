'use strict';

// Implementation
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

// Usage
let ages = [10, 12, 15, 15, 17, 18, 18, 19, 20];
ages = ages.filter(onlyUnique);

ages.unshift(8);
ages.push(22);

const first = ages[0];
const last = ages[ages.length - 1];

console.log({ first, last });
