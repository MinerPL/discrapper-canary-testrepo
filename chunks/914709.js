var r = n(961123),
    i = n(841566),
    a = n(290677),
    s = n(682653),
    o = n(720815),
    l = n(278757);
e.exports = function (e, t, n) {
    t = r(t, e);
    for (var u = -1, c = t.length, d = !1; ++u < c; ) {
        var _ = l(t[u]);
        if (!(d = null != e && n(e, _))) break;
        e = e[_];
    }
    return d || ++u != c ? d : !!(c = null == e ? 0 : e.length) && o(c) && s(_, c) && (a(e) || i(e));
};
