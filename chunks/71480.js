var r = n(566885),
    i = n(926515),
    a = n(24033),
    s = n(938507),
    o = n(908355),
    l = n(49693),
    u = n(838957),
    c = n(981971),
    d = n(11697),
    _ = n(776245),
    E = TypeError,
    f = function (e, t) {
        (this.stopped = e), (this.result = t);
    },
    h = f.prototype;
e.exports = function (e, t, n) {
    var p,
        m,
        I,
        T,
        g,
        S,
        A,
        N = n && n.that,
        v = !!(n && n.AS_ENTRIES),
        O = !!(n && n.IS_RECORD),
        R = !!(n && n.IS_ITERATOR),
        C = !!(n && n.INTERRUPTED),
        y = r(t, N),
        D = function (e) {
            return p && _(p, 'normal', e), new f(!0, e);
        },
        L = function (e) {
            return v ? (a(e), C ? y(e[0], e[1], D) : y(e[0], e[1])) : C ? y(e, D) : y(e);
        };
    if (O) p = e.iterator;
    else if (R) p = e;
    else {
        if (!(m = d(e))) throw E(s(e) + ' is not iterable');
        if (o(m)) {
            for (I = 0, T = l(e); T > I; I++) if ((g = L(e[I])) && u(h, g)) return g;
            return new f(!1);
        }
        p = c(e, m);
    }
    for (S = O ? e.next : p.next; !(A = i(S, p)).done; ) {
        try {
            g = L(A.value);
        } catch (e) {
            _(p, 'throw', e);
        }
        if ('object' == typeof g && g && u(h, g)) return g;
    }
    return new f(!1);
};
