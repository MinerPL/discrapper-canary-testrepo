var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(442837), r = n(846027), o = n(131951), c = n(80618), u = n(36703), d = n(358085), h = n(618158), p = n(162736);
t.Z = s.ZP.connectStores([o.Z], e => {
    let {
        userId: t,
        context: n
    } = e;
    return {
        currentVolume: o.Z.getLocalVolume(t, n),
        muted: o.Z.isLocalMute(t, n)
    };
})(function (e) {
    let {
        className: t,
        iconClassName: n,
        sliderClassName: a,
        userId: s,
        currentVolume: o,
        muted: m,
        context: _,
        currentWindow: f = window
    } = e;
    return (0, i.jsx)(h.Z, {
        children: (0, i.jsx)(c.Z, {
            currentWindow: f,
            iconClassName: l()(n, p.controlIcon),
            sliderClassName: a,
            className: t,
            value: (0, u.P)(o),
            muted: m,
            maxValue: d.isPlatformEmbedded ? 200 : 100,
            onValueChange: e => {
                var t, n, i, a;
                return t = e, n = s, i = m, a = _, void (t > 0 && i && r.Z.toggleLocalMute(n, a), r.Z.setLocalVolume(n, (0, u.A)(t), a));
            },
            onToggleMute: () => {
                var e, t;
                return e = s, t = _, void r.Z.toggleLocalMute(e, t);
            }
        })
    });
});
