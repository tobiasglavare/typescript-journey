function once(fn)  {
    let called = false;

    return function() {
        if (!called) {
            called = true;
            return fn ();
        }
    };
}

const sayHello = once(() => console.log("Hello"));

sayHello();
sayHello();
sayHello();
