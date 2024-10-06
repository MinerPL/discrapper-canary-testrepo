var r = n(256098),
    i = n(436091),
    a = n(438330);
e.exports = function (e) {
    return function (t, n, s) {
        var o = Object(t);
        if (!i(t)) {
            var l = r(n, 3);
            (t = a(t)),
                (n = function (e) {
                    return l(o[e], e, o);
                });
        }
        var u = e(t, n, s);
        return u > -1 ? o[l ? t[u] : u] : void 0;
    };
};
