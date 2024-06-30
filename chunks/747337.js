n.d(t, {
    h: function () {
        return s;
    }
});
var r = n(146150), i = n(695170), a = n(686942), o = n(603259);
function s(e, t) {
    var n, s, l = (0, i.t2)(e, 1, 1), u = (0, i.Eg)(e) ? 366 : 365, c = (0, i.Eg)(e + 1) ? 366 : 365, d = (0, i.fv)(l), _ = (0, i.FO)(l), E = (0, r.pi)((0, r.pi)({
            yearlen: u,
            nextyearlen: c,
            yearordinal: d,
            yearweekday: _
        }, function (e) {
            var t = (0, i.Eg)(e) ? 366 : 365, n = (0, i.t2)(e, 1, 1), r = (0, i.FO)(n);
            return 365 === t ? {
                mmask: o.RL,
                mdaymask: o.qm,
                nmdaymask: o.nB,
                wdaymask: o.fV.slice(r),
                mrange: o.sr
            } : {
                mmask: o.h3,
                mdaymask: o.fY,
                nmdaymask: o.RP,
                wdaymask: o.fV.slice(r),
                mrange: o.Pi
            };
        }(e)), { wnomask: null });
    if ((0, a.cS)(t.byweekno))
        return E;
    E.wnomask = (0, a.rx)(0, u + 7);
    var f = n = (0, a.Vy)(7 - _ + t.wkst, 7);
    f >= 4 ? (f = 0, s = E.yearlen + (0, a.Vy)(_ - t.wkst, 7)) : s = u - f;
    for (var h = Math.floor(Math.floor(s / 7) + (0, a.Vy)(s, 7) / 4), p = 0; p < t.byweekno.length; p++) {
        var m = t.byweekno[p];
        if (m < 0 && (m += h + 1), !!(m > 0 && m <= h)) {
            var I = void 0;
            m > 1 ? (I = f + (m - 1) * 7, f !== n && (I -= 7 - n)) : I = f;
            for (var T = 0; T < 7 && (E.wnomask[I] = 1, I++, E.wdaymask[I] !== t.wkst); T++);
        }
    }
    if ((0, a.q9)(t.byweekno, 1)) {
        var I = f + 7 * h;
        if (f !== n && (I -= 7 - n), I < u)
            for (var p = 0; p < 7 && (E.wnomask[I] = 1, I += 1, E.wdaymask[I] !== t.wkst); p++);
    }
    if (f) {
        var g = void 0;
        if ((0, a.q9)(t.byweekno, -1))
            g = -1;
        else {
            var S = (0, i.FO)((0, i.t2)(e - 1, 1, 1)), A = (0, a.Vy)(7 - S.valueOf() + t.wkst, 7), N = (0, i.Eg)(e - 1) ? 366 : 365, v = void 0;
            A >= 4 ? (A = 0, v = N + (0, a.Vy)(S - t.wkst, 7)) : v = u - f, g = Math.floor(52 + (0, a.Vy)(v, 7) / 4);
        }
        if ((0, a.q9)(t.byweekno, g))
            for (var I = 0; I < f; I++)
                E.wnomask[I] = 1;
    }
    return E;
}
