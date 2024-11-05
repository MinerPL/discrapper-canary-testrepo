function r(e, t) {
    var n = t && t.cache ? t.cache : c,
        r = t && t.serializer ? t.serializer : l;
    return (t && t.strategy ? t.strategy : o)(e, {
        cache: n,
        serializer: r
    });
}
n.d(t, {
    A: function () {
        return d;
    },
    H: function () {
        return r;
    }
});
function i(e, t, n, r) {
    var i,
        a = null == (i = r) || 'number' == typeof i || 'boolean' == typeof i ? r : n(r),
        s = t.get(a);
    return void 0 === s && ((s = e.call(this, r)), t.set(a, s)), s;
}
function a(e, t, n) {
    var r = Array.prototype.slice.call(arguments, 3),
        i = n(r),
        a = t.get(i);
    return void 0 === a && ((a = e.apply(this, r)), t.set(i, a)), a;
}
function s(e, t, n, r, i) {
    return n.bind(t, e, r, i);
}
function o(e, t) {
    var n,
        r,
        s,
        o,
        l,
        u = 1 === e.length ? i : a;
    return (n = e), (r = this), (s = u), (o = t.cache.create()), (l = t.serializer), s.bind(r, n, o, l);
}
var l = function () {
    return JSON.stringify(arguments);
};
function u() {
    this.cache = Object.create(null);
}
(u.prototype.get = function (e) {
    return this.cache[e];
}),
    (u.prototype.set = function (e, t) {
        this.cache[e] = t;
    });
var c = {
        create: function () {
            return new u();
        }
    },
    d = {
        variadic: function (e, t) {
            var n, r, i, s, o;
            return (n = e), (r = this), (i = a), (s = t.cache.create()), (o = t.serializer), i.bind(r, n, s, o);
        },
        monadic: function (e, t) {
            var n, r, a, s, o;
            return (n = e), (r = this), (a = i), (s = t.cache.create()), (o = t.serializer), a.bind(r, n, s, o);
        }
    };
