var r = n(972910),
    i = n(160171),
    a = r('%Promise.resolve%', !0),
    s = a && i(a);
e.exports = function (e, t) {
    if (!s) throw SyntaxError('This environment does not support Promises.');
    return s(e, t);
};
