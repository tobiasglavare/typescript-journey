function createCounter(initial = 0) {
    let count = initial;

    return {
        increment: () => ++count,
        decrement: () => --count,
        reset: () => (count = initial),
        value: () => count,
    };
}

const counter = createCounter();
counter.increment();
counter.increment();
counter.value();
counter.decrement();
counter.reset();
