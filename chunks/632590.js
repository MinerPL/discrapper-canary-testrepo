n.d(t, {
    $p: function () {
        return i;
    },
    DL: function () {
        return a;
    },
    LI: function () {
        return l;
    },
    k$: function () {
        return s;
    },
    sq: function () {
        return o;
    }
});
var r = n(192379),
    i = function (e) {
        return Array.isArray(e) ? e[0] : e;
    },
    a = function (e) {
        if ('function' == typeof e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
            return e.apply(void 0, n);
        }
    },
    s = function (e, t) {
        if ('function' == typeof e) return a(e, t);
        null != e && (e.current = t);
    },
    o = function (e) {
        return e.reduce(function (e, t) {
            var n = t[0],
                r = t[1];
            return (e[n] = r), e;
        }, {});
    },
    l = 'undefined' != typeof window && window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect;
