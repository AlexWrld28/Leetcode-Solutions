/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
    const result = [];

    for (i in arr) {
        if (Array.isArray(arr[i]) && n > 0) {
            const flattened = flat(arr[i], n - 1);
            result.push(...flattened);
        } else {
            result.push(arr[i]);
        }
    }

    return result;
};