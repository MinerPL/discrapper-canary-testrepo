var r = n(102074), i = n(153027), a = n(803607);
e.exports = function (e, t, n, o, s, l) {
    var u = 1 & n, c = e.length, d = t.length;
    if (c != d && !(u && d > c))
        return !1;
    var _ = l.get(e);
    if (_ && l.get(t))
        return _ == t;
    var E = -1, f = !0, h = 2 & n ? new r() : void 0;
    for (l.set(e, t), l.set(t, e); ++E < c;) {
        var p = e[E], m = t[E];
        if (o)
            var I = u ? o(m, p, E, t, e, l) : o(p, m, E, e, t, l);
        if (void 0 !== I) {
            if (I)
                continue;
            f = !1;
            break;
        }
        if (h) {
            if (!i(t, function (e, t) {
                    if (!a(h, t) && (p === e || s(p, e, n, o, l)))
                        return h.push(t);
                })) {
                f = !1;
                break;
            }
        } else if (!(p === m || s(p, m, n, o, l))) {
            f = !1;
            break;
        }
    }
    return l.delete(e), l.delete(t), f;
};
