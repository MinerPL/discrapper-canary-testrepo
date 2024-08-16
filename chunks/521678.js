var r = n(175056),
    i = n(906024),
    a = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    s = /^\w*$/;
t.Z = function (e, t) {
    if ((0, r.Z)(e)) return !1;
    var n = typeof e;
    return !!('number' == n || 'symbol' == n || 'boolean' == n || null == e || (0, i.Z)(e)) || s.test(e) || !a.test(e) || (null != t && e in Object(t));
};
