n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var l = n(120356),
    r = n.n(l),
    a = n(338545),
    s = n(692547),
    o = n(481060),
    c = n(565138),
    u = n(252686),
    d = n(325093);
function h(e) {
    let { guild: t, show: n, active: l, onAnimationStart: h, onAnimationRest: p } = e,
        _ = {},
        f = {};
    (_.transform = 'translate3d(10px, 10px, 0) scale3d(3, 3, 1)'), (f.transform = 'translate3d(0, 0, 0) scale3d(1, 1, 1)');
    let g = (0, o.useToken)(s.Z.unsafe_rawColors.BRAND_500).hex(),
        m = (0, o.useToken)(s.Z.unsafe_rawColors.PRIMARY_630).hex();
    l && null == t.icon && ((_.backgroundColor = g), (f.backgroundColor = m));
    let C = (0, o.useTransition)(n, {
        from: _,
        enter: f,
        leave: _,
        config: { duration: 100 },
        onStart: h,
        onRest: p
    });
    return (0, i.jsx)(i.Fragment, {
        children: C(
            (e, n, l) =>
                n &&
                (0, i.jsx)(
                    'div',
                    {
                        className: r()(d.folder, d.hover),
                        children: (0, i.jsx)('div', {
                            className: d.folderIconWrapper,
                            children: (0, i.jsxs)('div', {
                                className: d.closedFolderIconWrapper,
                                children: [
                                    (0, i.jsx)(a.animated.div, {
                                        className: d.folderIconPreview,
                                        style: e,
                                        children: (0, i.jsx)(c.Z, {
                                            guild: t,
                                            size: c.Z.Sizes.SMOL,
                                            className: d.guildIcon
                                        })
                                    }),
                                    (0, i.jsx)(u.Z, { className: d.miniPlaceholder })
                                ]
                            })
                        })
                    },
                    l.key
                )
        )
    });
}
