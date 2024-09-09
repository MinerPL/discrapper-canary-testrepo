var r = n(620014),
    i = n(580755),
    a = n(805100),
    s = n(224760),
    o = n(915212),
    l = n(228057),
    u = n(161984),
    c = n(388456),
    d = n(325512),
    _ = n(990393),
    E = n(890179),
    f = n(65064),
    h = n(207635),
    p = n(354199),
    m = n(671660),
    I = n(402428),
    T = n(207757),
    g = n(397985),
    S = n(706627),
    A = n(822480),
    N = n(58834),
    v = n(453342),
    O = '[object Arguments]',
    R = '[object Function]',
    C = '[object Object]',
    y = {};
(y[O] = y['[object Array]'] = y['[object ArrayBuffer]'] = y['[object DataView]'] = y['[object Boolean]'] = y['[object Date]'] = y['[object Float32Array]'] = y['[object Float64Array]'] = y['[object Int8Array]'] = y['[object Int16Array]'] = y['[object Int32Array]'] = y['[object Map]'] = y['[object Number]'] = y[C] = y['[object RegExp]'] = y['[object Set]'] = y['[object String]'] = y['[object Symbol]'] = y['[object Uint8Array]'] = y['[object Uint8ClampedArray]'] = y['[object Uint16Array]'] = y['[object Uint32Array]'] = !0), (y['[object Error]'] = y[R] = y['[object WeakMap]'] = !1);
e.exports = function e(t, n, D, L, b, M) {
    var P,
        U = 1 & n,
        w = 2 & n,
        x = 4 & n;
    if ((D && (P = b ? D(t, L, b, M) : D(t)), void 0 !== P)) return P;
    if (!S(t)) return t;
    var G = I(t);
    if (G) {
        if (((P = h(t)), !U)) return u(t, P);
    } else {
        var k = f(t),
            B = k == R || '[object GeneratorFunction]' == k;
        if (T(t)) return l(t, U);
        if (k == C || k == O || (B && !b)) {
            if (((P = w || B ? {} : m(t)), !U)) return w ? d(t, o(P, t)) : c(t, s(P, t));
        } else {
            if (!y[k]) return b ? t : {};
            P = p(t, k, U);
        }
    }
    M || (M = new r());
    var F = M.get(t);
    if (F) return F;
    M.set(t, P),
        A(t)
            ? t.forEach(function (r) {
                  P.add(e(r, n, D, r, t, M));
              })
            : g(t) &&
              t.forEach(function (r, i) {
                  P.set(i, e(r, n, D, i, t, M));
              });
    var V = x ? (w ? E : _) : w ? v : N,
        H = G ? void 0 : V(t);
    return (
        i(H || t, function (r, i) {
            H && (r = t[(i = r)]), a(P, i, e(r, n, D, i, t, M));
        }),
        P
    );
};
