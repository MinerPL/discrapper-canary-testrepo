var i = r(690244)('%TypeError%'),
    a = r(813426),
    s = r(828148),
    o = r(632384);
e.exports = function (e, n) {
    if ('Object' !== o(e)) throw new i('Assertion failed: Type(O) is not Object');
    if (!s(n)) throw new i('Assertion failed: IsPropertyKey(P) is not true, got ' + a(n));
    return e[n];
};
