var r = n(42848),
    i = 4294967294,
    a = Math.floor,
    s = Math.min;
e.exports = function (e, t, n, o) {
    var l = 0,
        u = null == e ? 0 : e.length;
    if (0 === u) return 0;
    for (var c = (t = n(t)) != t, d = null === t, _ = r(t), E = void 0 === t; l < u; ) {
        var f = a((l + u) / 2),
            h = n(e[f]),
            p = void 0 !== h,
            m = null === h,
            I = h == h,
            T = r(h);
        if (c) var g = o || I;
        else g = E ? I && (o || p) : d ? I && p && (o || !m) : _ ? I && p && !m && (o || !T) : !m && !T && (o ? h <= t : h < t);
        g ? (l = f + 1) : (u = f);
    }
    return s(u, i);
};
