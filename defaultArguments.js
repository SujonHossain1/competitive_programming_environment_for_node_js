function _add(a, b) {
    return a + b;
}

function defaultArguments(callback, defaultArguments) {
    return (...params) => {
        return callback(...params, ...Object.values(defaultArguments));
    };
}


let add_ = defaultArguments(_add, { e: 9, f: 10, g: 11 });


console.log(add_(10)); // 19
console.log(add_(10, 7, 11, 12)); // 17
console.log(add_()); // 19



