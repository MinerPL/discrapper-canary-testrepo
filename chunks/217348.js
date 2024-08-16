n.d(t, {
    Df: function () {
        return l;
    },
    S6: function () {
        return u;
    },
    Xy: function () {
        return o;
    },
    ZT: function () {
        return i;
    },
    dE: function () {
        return a;
    },
    is: function () {
        return s;
    },
    qo: function () {
        return c;
    },
    yl: function () {
        return d;
    }
});
var r = n(239189),
    i = function () {},
    a = function (e, t, n) {
        return Object.defineProperty(e, t, {
            value: n,
            writable: !0,
            configurable: !0
        });
    },
    s = {
        arr: Array.isArray,
        obj: function (e) {
            return !!e && 'Object' === e.constructor.name;
        },
        fun: function (e) {
            return 'function' == typeof e;
        },
        str: function (e) {
            return 'string' == typeof e;
        },
        num: function (e) {
            return 'number' == typeof e;
        },
        und: function (e) {
            return void 0 === e;
        }
    };
function o(e, t) {
    if (s.arr(e)) {
        if (!s.arr(t) || e.length !== t.length) return !1;
        for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1;
        return !0;
    }
    return e === t;
}
var l = function (e) {
        return s.str(e) && ('#' == e[0] || /\d/.test(e) || !!(r.colorNames && r.colorNames[e]));
    },
    u = function (e, t, n) {
        s.fun(e.forEach)
            ? e.forEach(t, n)
            : Object.keys(e).forEach(function (r) {
                  return t.call(n, e[r], r);
              });
    },
    c = function (e) {
        return s.und(e) ? [] : s.arr(e) ? e : [e];
    };
function d(e, t) {
    if (e.size) {
        var n = Array.from(e);
        e.clear(), u(n, t);
    }
}
