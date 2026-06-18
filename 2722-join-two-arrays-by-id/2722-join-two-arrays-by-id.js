/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {
    const joinedArr = {};
    for (const item of arr1) {
        joinedArr[item.id] = item;
    }

    for (const item of arr2) {
        if (joinedArr[item.id]) {
            joinedArr[item.id] = {
                ...joinedArr[item.id],
                ...item
            };
        } else {
            joinedArr[item.id] = item;
        }
    }
    return Object.values(joinedArr).sort((a, b) => a.id - b.id);
    };