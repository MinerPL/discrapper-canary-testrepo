var n = r(466293), _ = r(139069), a = r(703284), i = r(501979), o = r(98368), E = r(433005), s = n ? n.prototype : void 0, c = s ? s.valueOf : void 0;
t.exports = function (t, e, r, n, s, I, R) {
    switch (r) {
    case '[object DataView]':
        if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset)
            break;
        t = t.buffer, e = e.buffer;
    case '[object ArrayBuffer]':
        if (t.byteLength != e.byteLength || !I(new _(t), new _(e)))
            break;
        return !0;
    case '[object Boolean]':
    case '[object Date]':
    case '[object Number]':
        return a(+t, +e);
    case '[object Error]':
        return t.name == e.name && t.message == e.message;
    case '[object RegExp]':
    case '[object String]':
        return t == e + '';
    case '[object Map]':
        var u = o;
    case '[object Set]':
        var T = 1 & n;
        if (u || (u = E), t.size != e.size && !T)
            break;
        var l = R.get(t);
        if (l)
            return l == e;
        n |= 2, R.set(t, e);
        var A = i(u(t), u(e), n, s, I, R);
        return R.delete(t), A;
    case '[object Symbol]':
        if (c)
            return c.call(t) == c.call(e);
    }
    return !1;
};
