var r = n(690244),
    i = n(834889),
    a = n(134533)(),
    s = n(49662),
    o = n(815329),
    l = r('%Math.floor%');
e.exports = function (e, t) {
    if ('function' != typeof e) throw new o('`fn` is not a function');
    if ('number' != typeof t || t < 0 || t > 4294967295 || l(t) !== t) throw new o('`length` must be a positive 32-bit integer');
    var n = arguments.length > 2 && !!arguments[2],
        r = !0,
        u = !0;
    if ('length' in e && s) {
        var c = s(e, 'length');
        c && !c.configurable && (r = !1), c && !c.writable && (u = !1);
    }
    return (r || u || !n) && (a ? i(e, 'length', t, !0, !0) : i(e, 'length', t)), e;
};
