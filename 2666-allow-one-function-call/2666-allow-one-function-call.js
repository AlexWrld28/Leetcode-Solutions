/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let hasRun = false;

    return function(...args) {
        if (!hasRun) {
            hasRun = true;
            return fn(...args);
        }

        return undefined;
    };
};