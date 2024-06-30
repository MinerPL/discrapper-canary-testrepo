n.d(t, {
    Z: function () {
        return h;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(481060), r = n(991570), o = n(50493), c = n(689938), u = n(638649), d = n(332513);
function h(e) {
    let {
            userId: t,
            guildId: n,
            onNavigate: a,
            backPanel: h = o.k.INFO
        } = e, p = (0, r.f)(t, n, 0.8, s.tokens.colors.BACKGROUND_SECONDARY);
    return (0, i.jsxs)('div', {
        className: l()(d.header),
        style: { backgroundColor: p },
        children: [
            (0, i.jsx)('div', {
                className: l()(d.headerTitle),
                children: (0, i.jsxs)(s.Clickable, {
                    className: l()(u.backButton),
                    onClick: () => null == a ? void 0 : a(h),
                    children: [
                        (0, i.jsx)(s.ArrowSmallLeftIcon, {
                            size: 'custom',
                            className: l()(u.__invalid_backButtonIcon),
                            width: 20,
                            height: 20
                        }),
                        (0, i.jsx)(s.Heading, {
                            variant: 'heading-md/semibold',
                            children: c.Z.Messages.BACK
                        })
                    ]
                })
            }),
            (0, i.jsx)('div', {
                className: l()(u.__invalid_options),
                children: (0, i.jsx)(s.KeyCombo, {
                    shortcut: 'esc',
                    keyClassName: u.keyComboInner,
                    className: u.keyComboContainer
                })
            })
        ]
    });
}
