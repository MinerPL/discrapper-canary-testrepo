var r = n(926080),
    i = n(97445),
    a = n(175056),
    s = n(429296),
    o = n(725180),
    l = n(17071);
t.Z = function (e, t, n) {
    t = (0, r.Z)(t, e);
    for (var u = -1, c = t.length, d = !1; ++u < c; ) {
        var _ = (0, l.Z)(t[u]);
        if (!(d = null != e && n(e, _))) break;
        e = e[_];
    }
    return d || ++u != c ? d : !!(c = null == e ? 0 : e.length) && (0, o.Z)(c) && (0, s.Z)(_, c) && ((0, a.Z)(e) || (0, i.Z)(e));
};
