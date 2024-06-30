var r = n(317063), i = n(757209);
e.exports = function (e) {
    return r(function (t, n) {
        var r = -1, a = n.length, o = a > 1 ? n[a - 1] : void 0, s = a > 2 ? n[2] : void 0;
        for (o = e.length > 3 && 'function' == typeof o ? (a--, o) : void 0, s && i(n[0], n[1], s) && (o = a < 3 ? void 0 : o, a = 1), t = Object(t); ++r < a;) {
            var l = n[r];
            l && e(t, l, r, o);
        }
        return t;
    });
};
