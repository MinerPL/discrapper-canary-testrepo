(e.exports = s), (s.default = s), (s.stable = u), (s.stableStringify = u);
var t = '[...]',
    n = '[Circular]',
    r = [],
    i = [];
function a() {
    return {
        depthLimit: Number.MAX_SAFE_INTEGER,
        edgesLimit: Number.MAX_SAFE_INTEGER
    };
}
function s(e, s, l, u) {
    void 0 === u && (u = a()),
        (function e(r, i, a, s, l, u, c) {
            if (((u += 1), 'object' == typeof r && null !== r)) {
                for (d = 0; d < s.length; d++)
                    if (s[d] === r) {
                        o(n, r, i, l);
                        return;
                    }
                if ((void 0 !== c.depthLimit && u > c.depthLimit) || (void 0 !== c.edgesLimit && a + 1 > c.edgesLimit)) {
                    o(t, r, i, l);
                    return;
                }
                if ((s.push(r), Array.isArray(r))) for (d = 0; d < r.length; d++) e(r[d], d, d, s, r, u, c);
                else {
                    var d,
                        _ = Object.keys(r);
                    for (d = 0; d < _.length; d++) {
                        var E = _[d];
                        e(r[E], E, d, s, r, u, c);
                    }
                }
                s.pop();
            }
        })(e, '', 0, [], void 0, 0, u);
    try {
        d = 0 === i.length ? JSON.stringify(e, s, l) : JSON.stringify(e, c(s), l);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var d,
                _ = r.pop();
            4 === _.length ? Object.defineProperty(_[0], _[1], _[3]) : (_[0][_[1]] = _[2]);
        }
    }
    return d;
}
function o(e, t, n, a) {
    var s = Object.getOwnPropertyDescriptor(a, n);
    void 0 !== s.get ? (s.configurable ? (Object.defineProperty(a, n, { value: e }), r.push([a, n, t, s])) : i.push([t, n, e])) : ((a[n] = e), r.push([a, n, t]));
}
function l(e, t) {
    return e < t ? -1 : e > t ? 1 : 0;
}
function u(e, s, u, d) {
    void 0 === d && (d = a());
    var _,
        E =
            (function e(i, a, s, u, c, d, _) {
                if (((d += 1), 'object' == typeof i && null !== i)) {
                    for (E = 0; E < u.length; E++)
                        if (u[E] === i) {
                            o(n, i, a, c);
                            return;
                        }
                    try {
                        if ('function' == typeof i.toJSON) return;
                    } catch (e) {
                        return;
                    }
                    if ((void 0 !== _.depthLimit && d > _.depthLimit) || (void 0 !== _.edgesLimit && s + 1 > _.edgesLimit)) {
                        o(t, i, a, c);
                        return;
                    }
                    if ((u.push(i), Array.isArray(i))) for (E = 0; E < i.length; E++) e(i[E], E, E, u, i, d, _);
                    else {
                        var E,
                            f = {},
                            h = Object.keys(i).sort(l);
                        for (E = 0; E < h.length; E++) {
                            var p = h[E];
                            e(i[p], p, E, u, i, d, _), (f[p] = i[p]);
                        }
                        if (void 0 === c) return f;
                        r.push([c, a, i]), (c[a] = f);
                    }
                    u.pop();
                }
            })(e, '', 0, [], void 0, 0, d) || e;
    try {
        _ = 0 === i.length ? JSON.stringify(E, s, u) : JSON.stringify(E, c(s), u);
    } catch (e) {
        return JSON.stringify('[unable to serialize, circular reference is too complex to analyze]');
    } finally {
        for (; 0 !== r.length; ) {
            var f = r.pop();
            4 === f.length ? Object.defineProperty(f[0], f[1], f[3]) : (f[0][f[1]] = f[2]);
        }
    }
    return _;
}
function c(e) {
    return (
        (e =
            void 0 !== e
                ? e
                : function (e, t) {
                      return t;
                  }),
        function (t, n) {
            if (i.length > 0)
                for (var r = 0; r < i.length; r++) {
                    var a = i[r];
                    if (a[1] === t && a[0] === n) {
                        (n = a[2]), i.splice(r, 1);
                        break;
                    }
                }
            return e.call(this, t, n);
        }
    );
}
