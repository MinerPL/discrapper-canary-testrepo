t.d(r, {
    Z: function () {
        return g;
    }
});
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(481060),
    c = t(931240),
    s = t(207796),
    d = t(540742),
    u = t(836768),
    h = t(10394),
    m = t(535271);
function g() {
    let e = n.useRef(null);
    return (0, a.jsxs)('div', {
        ref: e,
        className: o()(m.panel, h.panel),
        children: [
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: c.LX,
                children: 'Reset Every Clan Setup State'
            }),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: s.PJ,
                children: 'Reset Clan Discovery State'
            }),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: u.u,
                children: 'Reset Global Discovery State'
            }),
            (0, a.jsx)(l.Button, {
                size: l.Button.Sizes.SMALL,
                onClick: d.t,
                children: 'Reset Global Discovery Servers State'
            })
        ]
    });
}
