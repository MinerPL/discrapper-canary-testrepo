var r = n(317063),
    i = n(757209);
e.exports = function (e) {
    return r(function (t, n) {
        var r = -1,
            a = n.length,
            s = a > 1 ? n[a - 1] : void 0,
            o = a > 2 ? n[2] : void 0;
        for (s = e.length > 3 && 'function' == typeof s ? (a--, s) : void 0, o && i(n[0], n[1], o) && ((s = a < 3 ? void 0 : s), (a = 1)), t = Object(t); ++r < a; ) {
            var l = n[r];
            l && e(t, l, r, s);
        }
        return t;
    });
};
