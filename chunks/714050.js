var e = n(974971),
    i = String;
t.exports = function (t) {
    if ('Symbol' === e(t)) throw TypeError('Cannot convert a Symbol value to a string');
    return i(t);
};
