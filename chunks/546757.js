t.Z = function (e) {
    var t = typeof e;
    return 'string' == t || 'number' == t || 'symbol' == t || 'boolean' == t ? '__proto__' !== e : null === e;
};
