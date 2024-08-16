var r = n(657398),
    i = n(708187),
    a = n(389109),
    s = Object.prototype,
    o = Function.prototype.toString,
    l = s.hasOwnProperty,
    u = o.call(Object);
e.exports = function (e) {
    if (!a(e) || '[object Object]' != r(e)) return !1;
    var t = i(e);
    if (null === t) return !0;
    var n = l.call(t, 'constructor') && t.constructor;
    return 'function' == typeof n && n instanceof n && o.call(n) == u;
};
