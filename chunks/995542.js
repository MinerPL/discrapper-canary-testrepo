var r = n(56135),
    i = n(888968),
    a = n(649786),
    s = n(718332),
    o = n(320114),
    l = n(82075),
    u = r ? r.prototype : void 0,
    c = u ? u.valueOf : void 0;
e.exports = function (e, t, n, r, u, d, _) {
    switch (n) {
        case '[object DataView]':
            if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
            (e = e.buffer), (t = t.buffer);
        case '[object ArrayBuffer]':
            if (e.byteLength != t.byteLength || !d(new i(e), new i(t))) break;
            return !0;
        case '[object Boolean]':
        case '[object Date]':
        case '[object Number]':
            return a(+e, +t);
        case '[object Error]':
            return e.name == t.name && e.message == t.message;
        case '[object RegExp]':
        case '[object String]':
            return e == t + '';
        case '[object Map]':
            var E = o;
        case '[object Set]':
            var f = 1 & r;
            if ((E || (E = l), e.size != t.size && !f)) break;
            var h = _.get(e);
            if (h) return h == t;
            (r |= 2), _.set(e, t);
            var p = s(E(e), E(t), r, u, d, _);
            return _.delete(e), p;
        case '[object Symbol]':
            if (c) return c.call(e) == c.call(t);
    }
    return !1;
};
