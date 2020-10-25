module.exports = function reverse (n) {
    return Number.parseInt( n.toString().replace('-','').split('').reverse().join(''));
}
