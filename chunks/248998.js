t.d(s, {
    Z: function () {
        return u;
    }
});
var n = t(735250);
t(470079);
var a = t(120356),
    i = t.n(a),
    r = t(913527),
    o = t.n(r),
    l = t(481060),
    c = t(55935),
    d = t(955204),
    _ = t(674680),
    E = t(384924);
function u(e) {
    let { achievementId: s, dateUnlocked: t } = e,
        a = (0, d.oX)(s);
    if (null == a) return null;
    let r = null != t,
        { name: u, description: I, hideDescriptionUntilUnlock: T, onAction: S } = a,
        N = T && !r,
        C = r ? 'header-primary' : 'text-muted',
        m = r ? 'header-secondary' : 'text-muted',
        A = o()(t),
        O = null != S && r,
        g = O ? l.Clickable : 'div';
    return (0, n.jsxs)(g, {
        className: i()(E.container, O && E.actionable),
        onClick: () => {
            O && S();
        },
        children: [
            (0, n.jsx)('div', {
                className: E.iconContainer,
                children: (0, n.jsx)(_.Z, {
                    achievementId: s,
                    size: _.Z.Sizes.SIZE_40,
                    unlocked: r
                })
            }),
            (0, n.jsxs)('div', {
                className: E.nameContainer,
                children: [
                    null != t &&
                        (0, n.jsx)(l.Text, {
                            variant: 'text-xxs/semibold',
                            color: 'text-muted',
                            className: E.unlocked,
                            children: (0, c.Y4)(A)
                        }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-md/medium',
                        color: C,
                        children: u()
                    }),
                    (0, n.jsx)(l.Text, {
                        variant: 'text-xs/normal',
                        color: m,
                        children: N ? '?????' : I()
                    })
                ]
            })
        ]
    });
}
