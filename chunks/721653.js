var r = n(687249),
    i = n(779518);
e.exports = function (e, t, n, a) {
    var s = n.length,
        o = s,
        l = !a;
    if (null == e) return !o;
    for (e = Object(e); s--; ) {
        var u = n[s];
        if (l && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1;
    }
    for (; ++s < o; ) {
        var c = (u = n[s])[0],
            d = e[c],
            _ = u[1];
        if (l && u[2]) {
            if (void 0 === d && !(c in e)) return !1;
        } else {
            var E = new r();
            if (a) var f = a(d, _, c, e, t, E);
            if (!(void 0 === f ? i(_, d, 3, a, E) : f)) return !1;
        }
    }
    return !0;
};
