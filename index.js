/**
 * @function `validateURL` - Check if a URL is valid or not.
 * @param { String } [string] - *Required* The URL to be checked.
 * @returns { Boolean } - Returns true if the URL is valid or false if it is not.
 */

module.exports = function validateURL(string) {
    if(!string) throw new Error("No URL specified");

    let url;

    try {
        url = new URL(string);
    } catch(err) {
        return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
}
