var r = n(796581),
    o = n(149912);
e.exports = function e(t, n, i, a, c) {
    var l = -1,
        s = t.length;
    for (i || (i = o), c || (c = []); ++l < s; ) {
        var u = t[l];
        n > 0 && i(u) ? (n > 1 ? e(u, n - 1, i, a, c) : r(c, u)) : !a && (c[c.length] = u);
    }
    return c;
};
