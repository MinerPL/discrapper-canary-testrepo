var r = n(581031),
    i = /[^\0-\u007E]/,
    a = /[.\u3002\uFF0E\uFF61]/g,
    s = 'Overflow: input needs wider integers to process',
    o = 35,
    l = RangeError,
    u = r(a.exec),
    c = Math.floor,
    d = String.fromCharCode,
    _ = r(''.charCodeAt),
    E = r([].join),
    f = r([].push),
    h = r(''.replace),
    p = r(''.split),
    m = r(''.toLowerCase),
    I = function (e) {
        for (var t = [], n = 0, r = e.length; n < r; ) {
            var i = _(e, n++);
            if (i >= 55296 && i <= 56319 && n < r) {
                var a = _(e, n++);
                (64512 & a) == 56320 ? f(t, ((1023 & i) << 10) + (1023 & a) + 65536) : (f(t, i), n--);
            } else f(t, i);
        }
        return t;
    },
    T = function (e) {
        return e + 22 + 75 * (e < 26);
    },
    g = function (e, t, n) {
        var r = 0;
        for (e = n ? c(e / 700) : e >> 1, e += c(e / t); e > (26 * o) >> 1; ) (e = c(e / o)), (r += 36);
        return c(r + ((o + 1) * e) / (e + 38));
    },
    S = function (e) {
        var t,
            n,
            r = [],
            i = (e = I(e)).length,
            a = 128,
            o = 0,
            u = 72;
        for (t = 0; t < e.length; t++) (n = e[t]) < 128 && f(r, d(n));
        var _ = r.length,
            h = _;
        for (_ && f(r, '-'); h < i; ) {
            var p = 2147483647;
            for (t = 0; t < e.length; t++) (n = e[t]) >= a && n < p && (p = n);
            var m = h + 1;
            if (p - a > c((2147483647 - o) / m)) throw l(s);
            for (o += (p - a) * m, a = p, t = 0; t < e.length; t++) {
                if ((n = e[t]) < a && ++o > 2147483647) throw l(s);
                if (n === a) {
                    for (var S = o, A = 36; ; ) {
                        var N = A <= u ? 1 : A >= u + 26 ? 26 : A - u;
                        if (S < N) break;
                        var v = S - N,
                            O = 36 - N;
                        f(r, d(T(N + (v % O)))), (S = c(v / O)), (A += 36);
                    }
                    f(r, d(T(S))), (u = g(o, m, h === _)), (o = 0), h++;
                }
            }
            o++, a++;
        }
        return E(r, '');
    };
e.exports = function (e) {
    var t,
        n,
        r = [],
        s = p(h(m(e), a, '.'), '.');
    for (t = 0; t < s.length; t++) f(r, u(i, (n = s[t])) ? 'xn--' + S(n) : n);
    return E(r, '.');
};
