"use strict";
const objects2 = {
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
function summ(a) {
    const x = Object.keys(a).map((k) => {
        const elem = a[k];
        if (typeof elem === undefined)
            return 0;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'string')
            return +elem.cvalue || 0;
        if (typeof (elem === null || elem === void 0 ? void 0 : elem.cvalue) === 'object')
            return summ(elem.cvalue);
        return (elem === null || elem === void 0 ? void 0 : elem.cvalue) || 0;
    });
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += x[i];
    }
    return sum;
}
console.log('bag function: ' + summ(objects2));
