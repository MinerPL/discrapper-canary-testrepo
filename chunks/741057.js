var r = n(421896), i = n(318670), a = n(193079), o = n(97106), s = n(257109), l = n(175056), u = n(532455), c = n(676067), d = '[object Arguments]', _ = '[object Array]', E = '[object Object]', f = Object.prototype.hasOwnProperty;
t.Z = function (e, t, n, h, p, m) {
    var I = (0, l.Z)(e), T = (0, l.Z)(t), g = I ? _ : (0, s.Z)(e), S = T ? _ : (0, s.Z)(t);
    g = g == d ? E : g, S = S == d ? E : S;
    var A = g == E, N = S == E, v = g == S;
    if (v && (0, u.Z)(e)) {
        if (!(0, u.Z)(t))
            return !1;
        I = !0, A = !1;
    }
    if (v && !A)
        return m || (m = new r.Z()), I || (0, c.Z)(e) ? (0, i.Z)(e, t, n, h, p, m) : (0, a.Z)(e, t, g, n, h, p, m);
    if (!(1 & n)) {
        var O = A && f.call(e, '__wrapped__'), R = N && f.call(t, '__wrapped__');
        if (O || R) {
            var C = O ? e.value() : e, y = R ? t.value() : t;
            return m || (m = new r.Z()), p(C, y, n, h, m);
        }
    }
    return !!v && (m || (m = new r.Z()), (0, o.Z)(e, t, n, h, p, m));
};
