var n = r(92801),
    a = r(58834);
e.exports = function (e) {
    for (var t = a(e), r = t.length; r--; ) {
        var o = t[r],
            i = e[o];
        t[r] = [o, i, n(i)];
    }
    return t;
};
