var r = n(96403), o = /[^\0-\u007E]/, a = /[.\u3002\uFF0E\uFF61]/g, i = 'Overflow: input needs wider integers to process', s = 35, c = RangeError, l = r(a.exec), u = Math.floor, d = String.fromCharCode, p = r(''.charCodeAt), h = r([].join), f = r([].push), m = r(''.replace), y = r(''.split), v = r(''.toLowerCase), g = function (e) {
        for (var t = [], n = 0, r = e.length; n < r;) {
            var o = p(e, n++);
            if (o >= 55296 && o <= 56319 && n < r) {
                var a = p(e, n++);
                (64512 & a) == 56320 ? f(t, ((1023 & o) << 10) + (1023 & a) + 65536) : (f(t, o), n--);
            } else
                f(t, o);
        }
        return t;
    }, b = function (e) {
        return e + 22 + 75 * (e < 26);
    }, _ = function (e, t, n) {
        var r = 0;
        for (e = n ? u(e / 700) : e >> 1, e += u(e / t); e > 26 * s >> 1;)
            e = u(e / s), r += 36;
        return u(r + (s + 1) * e / (e + 38));
    }, k = function (e) {
        var t, n, r = [], o = (e = g(e)).length, a = 128, s = 0, l = 72;
        for (t = 0; t < e.length; t++)
            (n = e[t]) < 128 && f(r, d(n));
        var p = r.length, m = p;
        for (p && f(r, '-'); m < o;) {
            var y = 2147483647;
            for (t = 0; t < e.length; t++)
                (n = e[t]) >= a && n < y && (y = n);
            var v = m + 1;
            if (y - a > u((2147483647 - s) / v))
                throw new c(i);
            for (s += (y - a) * v, a = y, t = 0; t < e.length; t++) {
                if ((n = e[t]) < a && ++s > 2147483647)
                    throw new c(i);
                if (n === a) {
                    for (var k = s, C = 36;;) {
                        var Z = C <= l ? 1 : C >= l + 26 ? 26 : C - l;
                        if (k < Z)
                            break;
                        var w = k - Z, S = 36 - Z;
                        f(r, d(b(Z + w % S))), k = u(w / S), C += 36;
                    }
                    f(r, d(b(k))), l = _(s, v, m === p), s = 0, m++;
                }
            }
            s++, a++;
        }
        return h(r, '');
    };
e.exports = function (e) {
    var t, n, r = [], i = y(m(v(e), a, '.'), '.');
    for (t = 0; t < i.length; t++)
        f(r, l(o, n = i[t]) ? 'xn--' + k(n) : n);
    return h(r, '.');
};
