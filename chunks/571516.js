var r = n(572657), i = n(670097), a = n(429296), o = n(675717);
t.Z = function (e, t, n) {
    if (!(0, o.Z)(n))
        return !1;
    var s = typeof t;
    return ('number' == s ? !!((0, i.Z)(n) && (0, a.Z)(t, n.length)) : 'string' == s && t in n) && (0, r.Z)(n[t], e);
};
