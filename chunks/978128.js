var r = n(11537),
    i = n(410200),
    a = n(830478),
    s = n(436091),
    o = n(876557),
    l = n(438330),
    u = Object.prototype.hasOwnProperty,
    c = a(function (e, t) {
        if (o(t) || s(t)) {
            i(t, l(t), e);
            return;
        }
        for (var n in t) u.call(t, n) && r(e, n, t[n]);
    });
e.exports = c;
