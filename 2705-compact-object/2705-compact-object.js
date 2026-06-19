/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (Array.isArray(obj)) {
        const updated = [];

        for (let i = 0; i < obj.length; i++) {
            let value = obj[i];
            if (typeof value === "object" && value !== null) {
                value = compactObject(value);
            }
            if (value) {
                updated.push(value);
            }
        }
        return updated;
    } else {
        const updated = {};

        for (let key in obj) {
            let value = obj[key];

            if (typeof value === "object" && value !== null) {
                value = compactObject(value);
            }

            if (value) {
                updated[key] = value;
            }
        }

            return updated;
    }
};