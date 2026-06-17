/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const result = {};
    const len = this.length
    for (let i = 0; i < len; i++) {
        const hold = this[i];
        const item = hold;
        const key = fn(item)

        if(!result[key]) {
            result[key] = [];
        }
        result[key].push(item);
    }
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */