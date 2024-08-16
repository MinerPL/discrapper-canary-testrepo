var r = n(821164),
    i = Object.prototype.hasOwnProperty;
e.exports = function (e, t, n, a, s, o) {
    var l = 1 & n,
        u = r(e),
        c = u.length;
    if (c != r(t).length && !l) return !1;
    for (var d = c; d--; ) {
        var _ = u[d];
        if (!(l ? _ in t : i.call(t, _))) return !1;
    }
    var E = o.get(e);
    if (E && o.get(t)) return E == t;
    var f = !0;
    o.set(e, t), o.set(t, e);
    for (var h = l; ++d < c; ) {
        var p = e[(_ = u[d])],
            m = t[_];
        if (a) var I = l ? a(m, p, _, t, e, o) : a(p, m, _, e, t, o);
        if (!(void 0 === I ? p === m || s(p, m, n, a, o) : I)) {
            f = !1;
            break;
        }
        h || (h = 'constructor' == _);
    }
    if (f && !h) {
        var T = e.constructor,
            g = t.constructor;
        T != g && 'constructor' in e && 'constructor' in t && !('function' == typeof T && T instanceof T && 'function' == typeof g && g instanceof g) && (f = !1);
    }
    return o.delete(e), o.delete(t), f;
};
