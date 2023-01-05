"use strict";
const objects1 = {
    name1: undefined,
    surname1: {
        cvalue: 5
    },
    age1: {
        cvalue: {
            surname3: {
                cvalue: {
                    surname4: { cvalue: '1' }
                }
            }
        }
    }
};
function counting(objects) {
    let sum = 0;
    for (let key in objects) {
        let obj = objects[key];
        if (typeof obj === 'object') {
            sum += counting(obj);
        }
        if (typeof obj === 'number' && key === 'cvalue') {
            sum += obj;
        }
        if (typeof obj === 'string' && key === 'cvalue') {
            sum += +obj | 0;
        }
    }
    return sum;
}
let mySumm = counting(objects1);
console.log('my function: ' + mySumm);
