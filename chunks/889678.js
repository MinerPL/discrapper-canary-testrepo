var r = n(706627),
    i = n(885365),
    a = n(67948),
    s = Math.max,
    o = Math.min;
e.exports = function (e, t, n) {
    var l,
        u,
        c,
        d,
        _,
        E,
        f = 0,
        h = !1,
        p = !1,
        m = !0;
    if ('function' != typeof e) throw TypeError('Expected a function');
    function I(t) {
        var n = l,
            r = u;
        return (l = u = void 0), (f = t), (d = e.apply(r, n));
    }
    (t = a(t) || 0), r(n) && ((h = !!n.leading), (c = (p = 'maxWait' in n) ? s(a(n.maxWait) || 0, t) : c), (m = 'trailing' in n ? !!n.trailing : m));
    function T(e) {
        var n = e - E,
            r = e - f;
        return void 0 === E || n >= t || n < 0 || (p && r >= c);
    }
    function g() {
        var e,
            n,
            r,
            a,
            s = i();
        if (T(s)) return S(s);
        _ = setTimeout(g, ((n = (e = s) - E), (r = e - f), (a = t - n), p ? o(a, c - r) : a));
    }
    function S(e) {
        return ((_ = void 0), m && l) ? I(e) : ((l = u = void 0), d);
    }
    function A() {
        var e,
            n = i(),
            r = T(n);
        if (((l = arguments), (u = this), (E = n), r)) {
            if (void 0 === _) {
                return (f = e = E), (_ = setTimeout(g, t)), h ? I(e) : d;
            }
            if (p) return clearTimeout(_), (_ = setTimeout(g, t)), I(E);
        }
        return void 0 === _ && (_ = setTimeout(g, t)), d;
    }
    return (
        (A.cancel = function () {
            void 0 !== _ && clearTimeout(_), (f = 0), (l = E = u = _ = void 0);
        }),
        (A.flush = function () {
            return void 0 === _ ? d : S(i());
        }),
        A
    );
};
