t.d(r, {
    Z: function () {
        return m;
    }
}),
    t(47120);
var a = t(735250),
    n = t(470079),
    i = t(120356),
    o = t.n(i),
    l = t(442837),
    c = t(481060),
    s = t(98357),
    d = t(432877),
    u = t(891362),
    h = t(535271);
function m(e) {
    let { devSettingsCategory: r } = e,
        t = (0, l.e7)([d.ZP], () => d.ZP.allByCategory(r), [r], l.pF),
        i = n.useMemo(
            () =>
                t.map((e) => {
                    let [r, t, { label: n }] = e;
                    return (0, a.jsx)(
                        c.FormSwitch,
                        {
                            value: t,
                            onChange: (e) => (0, s.Z)(r, e),
                            hideBorder: !0,
                            className: u.switch,
                            children: n
                        },
                        r
                    );
                }),
            [t]
        );
    return (0, a.jsx)('div', {
        className: o()(h.panel, u.panel),
        children: i
    });
}
