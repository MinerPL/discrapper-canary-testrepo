var r = n(748372);
e.exports = function (e, t, n) {
    for (var i = -1, a = e.criteria, s = t.criteria, o = a.length, l = n.length; ++i < o; ) {
        var u = r(a[i], s[i]);
        if (u) {
            if (i >= l) return u;
            return u * ('desc' == n[i] ? -1 : 1);
        }
    }
    return e.index - t.index;
};
