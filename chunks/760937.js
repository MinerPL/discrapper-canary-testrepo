var n = s(565580);
e.exports = function (e, t) {
    var s = -1,
        r = e.length,
        o = r - 1;
    for (t = void 0 === t ? r : t; ++s < t; ) {
        var i = n(s, o),
            a = e[i];
        (e[i] = e[s]), (e[s] = a);
    }
    return (e.length = t), e;
};
