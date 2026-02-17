const double = (x) => x *2;
const addTen = (x) => x + 10;
const square = (x) => x * x;

function compose(...fns){
    return function(x) {
        return fns.reduceRight((result, fn) => fn(result), x);
    };
}

const transform = compose(square, addTen, double);
transform(9);
