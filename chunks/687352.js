n.d(t, {
    Z: function () {
        return c;
    }
});
var i = n(735250);
n(470079);
var l = n(120356), r = n.n(l), a = n(481060), s = n(366695), o = n(606561);
function c(e) {
    let {
        className: t,
        embeddedApps: n,
        muted: l
    } = e;
    if (n.length <= 0)
        return null;
    if (1 === n.length)
        return (0, i.jsx)('div', {
            className: r()(o.container, t, l && o.modeMuted),
            children: (0, i.jsx)(s.Z, {
                game: n[0].application,
                className: o.icon20px
            })
        });
    {
        let e = n.length - 1;
        return (0, i.jsxs)('div', {
            className: r()(o.container, t, l && o.modeMuted),
            children: [
                (0, i.jsx)(s.Z, {
                    game: n[0].application,
                    className: o.icon20px
                }),
                2 === n.length ? (0, i.jsx)(s.Z, {
                    game: n[1].application,
                    className: o.icon20px
                }) : (0, i.jsx)(a.Text, {
                    className: o.overflow,
                    variant: 'text-xs/bold',
                    color: 'interactive-active',
                    children: '+'.concat(e)
                })
            ]
        });
    }
}
