const monObj = {
    a: 1, 
    b: 2, 
    c: 3, 
    d: 4
};

const {a, b, ...copyMonObj} = monObj;
console.log(copyMonObj); 