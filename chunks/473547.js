var r = n(548015),
    i = n(204188),
    a = n(175056),
    s = n(906024),
    o = 1 / 0,
    l = r.Z ? r.Z.prototype : void 0,
    u = l ? l.toString : void 0;
t.Z = function e(t) {
    if ('string' == typeof t) return t;
    if ((0, a.Z)(t)) return (0, i.Z)(t, e) + '';
    if ((0, s.Z)(t)) return u ? u.call(t) : '';
    var n = t + '';
    return '0' == n && 1 / t == -o ? '-0' : n;
};
