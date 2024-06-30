n.d(t, {
    D: function () {
        return a;
    }
});
var r = n(812975), i = n(686942);
function a(e, t, n, a, o, s) {
    var l = {
            lastyear: e,
            lastmonth: t,
            nwdaymask: []
        }, u = [];
    if (s.freq === r.Ci.YEARLY) {
        if ((0, i.cS)(s.bymonth))
            u = [[
                    0,
                    n
                ]];
        else
            for (var c = 0; c < s.bymonth.length; c++)
                t = s.bymonth[c], u.push(a.slice(t - 1, t + 1));
    } else
        s.freq === r.Ci.MONTHLY && (u = [a.slice(t - 1, t + 1)]);
    if ((0, i.cS)(u))
        return l;
    l.nwdaymask = (0, i.rx)(0, n);
    for (var c = 0; c < u.length; c++) {
        for (var d = u[c], _ = d[0], E = d[1] - 1, f = 0; f < s.bynweekday.length; f++) {
            var h = void 0, p = s.bynweekday[f], m = p[0], I = p[1];
            I < 0 ? (h = E + (I + 1) * 7, h -= (0, i.Vy)(o[h] - m, 7)) : (h = _ + (I - 1) * 7, h += (0, i.Vy)(7 - o[h] + m, 7)), _ <= h && h <= E && (l.nwdaymask[h] = 1);
        }
    }
    return l;
}
