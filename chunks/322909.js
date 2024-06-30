var r = n(748372);
e.exports = function (e, t, n) {
    for (var i = -1, a = e.criteria, o = t.criteria, s = a.length, l = n.length; ++i < s;) {
        var u = r(a[i], o[i]);
        if (u) {
            if (i >= l)
                return u;
            return u * ('desc' == n[i] ? -1 : 1);
        }
    }
    return e.index - t.index;
};
