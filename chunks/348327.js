var r = Array.prototype.slice,
    i = n(775569),
    a = n(35262),
    s = (e.exports = function (e, t, n) {
        if ((!n && (n = {}), e === t)) return !0;
        if (e instanceof Date && t instanceof Date) return e.getTime() === t.getTime();
        if (!e || !t || ('object' != typeof e && 'object' != typeof t)) return n.strict ? e === t : e == t;
        else
            return (function (e, t, n) {
                if (null == (c = e) || null == (d = t) || e.prototype !== t.prototype) return !1;
                if (a(e)) return !!a(t) && ((e = r.call(e)), s(e, (t = r.call(t)), n));
                if (l(e)) {
                    if (!l(t) || e.length !== t.length) return !1;
                    for (o = 0; o < e.length; o++) if (e[o] !== t[o]) return !1;
                    return !0;
                }
                try {
                    var o,
                        u,
                        c,
                        d,
                        _ = i(e),
                        E = i(t);
                } catch (e) {
                    return !1;
                }
                if (_.length != E.length) return !1;
                for (_.sort(), E.sort(), o = _.length - 1; o >= 0; o--) if (_[o] != E[o]) return !1;
                for (o = _.length - 1; o >= 0; o--) if (!s(e[(u = _[o])], t[u], n)) return !1;
                return typeof e == typeof t;
            })(e, t, n);
    });
function o(e) {
    return null == e;
}
function l(e) {
    return !!e && 'object' == typeof e && 'number' == typeof e.length && 'function' == typeof e.copy && 'function' == typeof e.slice && (!(e.length > 0) || 'number' == typeof e[0]) && !0;
}
