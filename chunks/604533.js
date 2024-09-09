var r = n(176338),
    i = n(754401),
    a = n(370873),
    s = Object.prototype,
    o = Function.prototype.toString,
    l = s.hasOwnProperty,
    u = o.call(Object);
t.Z = function (e) {
    if (!(0, a.Z)(e) || '[object Object]' != (0, r.Z)(e)) return !1;
    var t = (0, i.Z)(e);
    if (null === t) return !0;
    var n = l.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && o.call(n) == u;
};
