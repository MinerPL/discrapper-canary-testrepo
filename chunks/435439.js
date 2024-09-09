t.d(n, {
    Z: function () {
        return f;
    }
});
var l = t(735250),
    i = t(481060),
    a = t(374129),
    r = t(639351),
    o = t(908841),
    s = t(410441),
    c = t(206583),
    u = t(689938);
let d = {
        [c.kG.SPOTIFY]: o.Z,
        [c.kG.CRUNCHYROLL]: i.CrunchyrollNeutralIcon,
        [c.kG.XBOX]: r.Z,
        [c.kG.PLAYSTATION]: a.Z
    },
    m = {
        [c.kG.SPOTIFY]: () => u.Z.Messages.SPOTIFY,
        [c.kG.CRUNCHYROLL]: () => u.Z.Messages.CRUNCHYROLL,
        [c.kG.XBOX]: () => u.Z.Messages.XBOX,
        [c.kG.PLAYSTATION]: () => u.Z.Messages.PLAYSTATION
    };
function f(e) {
    var n;
    let { type: t, 'aria-label': i, ...a } = e,
        r = d[t];
    if (null == r) return null;
    let o = null != i ? i : null === (n = m[t]) || void 0 === n ? void 0 : n.call(m);
    return (0, l.jsx)(s.Z, {
        Icon: r,
        ...a,
        'aria-label': o
    });
}
