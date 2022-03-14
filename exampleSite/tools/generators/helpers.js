/**
 * File contains various helper functions for templating.
 */

/**
 * Capitalizes first character of the string.
 * @param {string} val
 */
function capitalize(val) {
    return val.charAt(0).toUpperCase() + val.slice(1);
}

// Exports
module.exports = {
    capitalize,
};
