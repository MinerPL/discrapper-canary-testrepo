var r = Array.prototype.slice, i = n(775569), a = n(35262), o = e.exports = function (e, t, n) {
        if (!n && (n = {}), e === t)
            return !0;
        if (e instanceof Date && t instanceof Date)
            return e.getTime() === t.getTime();
        if (!e || !t || 'object' != typeof e && 'object' != typeof t)
            return n.strict ? e === t : e == t;
        else
            return function (e, t, n) {
                if (null == (c = e) || null == (d = t) || e.prototype !== t.prototype)
                    return !1;
                if (a(e))
                    return !!a(t) && (e = r.call(e), o(e, t = r.call(t), n));
                if (l(e)) {
                    if (!l(t) || e.length !== t.length)
                        return !1;
                    for (s = 0; s < e.length; s++)
                        if (e[s] !== t[s])
                            return !1;
                    return !0;
                }
                try {
                    var s, u, c, d, _ = i(e), E = i(t);
                } catch (e) {
                    return !1;
                }
                if (_.length != E.length)
                    return !1;
                for (_.sort(), E.sort(), s = _.length - 1; s >= 0; s--)
                    if (_[s] != E[s])
                        return !1;
                for (s = _.length - 1; s >= 0; s--)
                    if (!o(e[u = _[s]], t[u], n))
                        return !1;
                return typeof e == typeof t;
            }(e, t, n);
    };
function s(e) {
    return null == e;
}
function l(e) {
    return !!e && 'object' == typeof e && 'number' == typeof e.length && 'function' == typeof e.copy && 'function' == typeof e.slice && (!(e.length > 0) || 'number' == typeof e[0]) && !0;
}
