t.d(n, {
    Z: function () {
        return E;
    }
}),
    t(47120),
    t(653041);
var a = t(735250),
    r = t(470079),
    s = t(120356),
    i = t.n(s),
    o = t(758713),
    l = t(657707),
    c = t(51527);
let d = [o.z.DESKTOP, o.z.XBOX, o.z.PLAYSTATION, o.z.NINTENDO];
function u(e) {
    let { platform: n } = e;
    switch (n) {
        case o.z.DESKTOP:
            return (0, a.jsx)(l.pzj, { size: 'xs' });
        case o.z.XBOX:
            return (0, a.jsx)(l.Mko, { size: 'xs' });
        case o.z.PLAYSTATION:
            return (0, a.jsx)(l.Tsp, { size: 'xs' });
        case o.z.NINTENDO:
            return (0, a.jsx)(l.aPH, { size: 'xs' });
        default:
            return null;
    }
}
function _(e) {
    let { platforms: n } = e;
    return (0, a.jsx)('div', {
        className: i()(c.row, c.gapSm),
        style: { alignItems: 'center' },
        children: n.map((e) => (0, a.jsx)(u, { platform: e }, e))
    });
}
function E(e) {
    let { detectedGame: n, className: t } = e,
        s = r.useMemo(() => {
            let e = new Set(n.platforms),
                t = [...e];
            return !e.has(o.z.DESKTOP) && (e.has(o.z.MACOS) || e.has(o.z.LINUX)) && t.push(o.z.DESKTOP), t.filter((e) => d.includes(e));
        }, [n.platforms]);
    return 0 === s.length
        ? null
        : (0, a.jsx)('div', {
              className: i()(c.column, c.gapLg, t),
              children: s.length > 0 && (0, a.jsx)(_, { platforms: s })
          });
}
