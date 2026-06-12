var timeLimit = function(fn, t) {
    return async function(...args) {
        const res1 = fn(...args);

        const res2 = new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded");
            }, t);
        });

        return Promise.race([res1, res2]);
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */