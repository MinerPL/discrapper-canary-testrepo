var r = n(347941), i = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, a, o, s) {
    var l = 1 & n, u = (0, r.Z)(e), c = u.length;
    if (c != (0, r.Z)(t).length && !l)
        return !1;
    for (var d = c; d--;) {
        var _ = u[d];
        if (!(l ? _ in t : i.call(t, _)))
            return !1;
    }
    var E = s.get(e), f = s.get(t);
    if (E && f)
        return E == t && f == e;
    var h = !0;
    s.set(e, t), s.set(t, e);
    for (var p = l; ++d < c;) {
        var m = e[_ = u[d]], I = t[_];
        if (a)
            var T = l ? a(I, m, _, t, e, s) : a(m, I, _, e, t, s);
        if (!(void 0 === T ? m === I || o(m, I, n, a, s) : T)) {
            h = !1;
            break;
        }
        p || (p = 'constructor' == _);
    }
    if (h && !p) {
        var g = e.constructor, S = t.constructor;
        g != S && 'constructor' in e && 'constructor' in t && !('function' == typeof g && g instanceof g && 'function' == typeof S && S instanceof S) && (h = !1);
    }
    return s.delete(e), s.delete(t), h;
};
