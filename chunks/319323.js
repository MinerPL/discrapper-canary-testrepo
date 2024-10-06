n.d(t, {
    Z: function () {
        return d;
    }
});
var i = n(735250),
    a = n(470079),
    s = n(481060),
    l = n(283836),
    r = n(728345),
    o = n(689938),
    c = n(364060);
function d(e) {
    let { applicationId: t, guildId: n } = e,
        { data: a } = (0, r.IX)(t);
    return null == a
        ? null
        : (0, i.jsx)(u, {
              app: a,
              guildId: n
          });
}
function u(e) {
    let { app: t, guildId: r } = e;
    (0, l.q)(t.id);
    let d = a.useCallback(() => {
        (0, s.openModalLazy)(async () => {
            let { default: e } = await Promise.all([n.e('77803'), n.e('47988')]).then(n.bind(n, 7225));
            return (n) =>
                (0, i.jsx)(e, {
                    appId: t.id,
                    guildId: r,
                    ...n
                });
        });
    }, [t, r]);
    return (0, i.jsx)(s.Button, {
        color: s.Button.Colors.BRAND,
        size: s.Button.Sizes.SMALL,
        onClick: d,
        children: (0, i.jsxs)('div', {
            className: c.button,
            children: [
                (0, i.jsx)(s.ShopSparkleIcon, {
                    size: 'xs',
                    color: 'white'
                }),
                o.Z.Messages.STOREFRONT_TITLE.format({ appName: t.name })
            ]
        })
    });
}
