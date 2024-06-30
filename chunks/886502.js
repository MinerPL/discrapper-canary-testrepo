var n = r(620014), _ = r(501979), a = r(575473), i = r(907287), o = r(65064), E = r(402428), s = r(207757), c = r(556868), I = '[object Arguments]', R = '[object Array]', u = '[object Object]', T = Object.prototype.hasOwnProperty;
t.exports = function (t, e, r, l, A, N) {
    var d = E(t), O = E(e), p = d ? R : o(t), S = O ? R : o(e);
    p = p == I ? u : p, S = S == I ? u : S;
    var D = p == u, f = S == u, L = p == S;
    if (L && s(t)) {
        if (!s(e))
            return !1;
        d = !0, D = !1;
    }
    if (L && !D)
        return N || (N = new n()), d || c(t) ? _(t, e, r, l, A, N) : a(t, e, p, r, l, A, N);
    if (!(1 & r)) {
        var h = D && T.call(t, '__wrapped__'), C = f && T.call(e, '__wrapped__');
        if (h || C) {
            var g = h ? t.value() : t, P = C ? e.value() : e;
            return N || (N = new n()), A(g, P, r, l, N);
        }
    }
    return !!L && (N || (N = new n()), i(t, e, r, l, A, N));
};
