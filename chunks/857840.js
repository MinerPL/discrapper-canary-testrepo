function n(t, e) {
    var r = e && e.cache ? e.cache : l,
        n = e && e.serializer ? e.serializer : u;
    return (e && e.strategy ? e.strategy : s)(t, {
        cache: r,
        serializer: n
    });
}
r.d(e, {
    A: function () {
        return h;
    },
    H: function () {
        return n;
    }
});
function i(t, e, r, n) {
    var i,
        o = null == (i = n) || 'number' == typeof i || 'boolean' == typeof i ? n : r(n),
        a = e.get(o);
    return void 0 === a && ((a = t.call(this, n)), e.set(o, a)), a;
}
function o(t, e, r) {
    var n = Array.prototype.slice.call(arguments, 3),
        i = r(n),
        o = e.get(i);
    return void 0 === o && ((o = t.apply(this, n)), e.set(i, o)), o;
}
function a(t, e, r, n, i) {
    return r.bind(e, t, n, i);
}
function s(t, e) {
    var r,
        n,
        a,
        s,
        u,
        c = 1 === t.length ? i : o;
    return (r = t), (n = this), (a = c), (s = e.cache.create()), (u = e.serializer), a.bind(n, r, s, u);
}
var u = function () {
    return JSON.stringify(arguments);
};
function c() {
    this.cache = Object.create(null);
}
(c.prototype.get = function (t) {
    return this.cache[t];
}),
    (c.prototype.set = function (t, e) {
        this.cache[t] = e;
    });
var l = {
        create: function () {
            return new c();
        }
    },
    h = {
        variadic: function (t, e) {
            var r, n, i, a, s;
            return (r = t), (n = this), (i = o), (a = e.cache.create()), (s = e.serializer), i.bind(n, r, a, s);
        },
        monadic: function (t, e) {
            var r, n, o, a, s;
            return (r = t), (n = this), (o = i), (a = e.cache.create()), (s = e.serializer), o.bind(n, r, a, s);
        }
    };
