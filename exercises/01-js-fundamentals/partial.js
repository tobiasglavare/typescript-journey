function multiply(a, b) {
    return a * b;
}

function partial(fn, a) {
    return function (b) {
        return fn(a, b);
    };
}

const double = partial(multiply, 2);
const triple = partial(multiply, 3);
const quadruple = partial(multiply, 4);

