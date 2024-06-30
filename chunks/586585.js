t.d(n, {
    g: function () {
        return l;
    }
});
var r, l, i = t(735250);
t(470079);
var s = t(481060), a = t(285952), o = t(612853), u = t(689938), c = t(568071);
(r = l || (l = {}))[r.CONTINUE = 0] = 'CONTINUE', r[r.UPGRADE = 1] = 'UPGRADE', r[r.PURCHASE = 2] = 'PURCHASE';
let d = e => {
    let {
        onBack: n,
        backText: t,
        primaryIcon: r,
        primaryCTA: l,
        primaryType: d,
        primaryText: m,
        primaryTooltip: f,
        primaryDisabled: x,
        primarySubmitting: h,
        onPrimary: C,
        secondaryText: N,
        onSecondary: v
    } = e;
    return (0, i.jsxs)(s.ModalFooter, {
        justify: a.Z.Justify.BETWEEN,
        align: a.Z.Align.CENTER,
        children: [
            (() => {
                if (null == l || null == m)
                    return null;
                let e = 2 === l ? s.ShinyButton : s.Button, n = {
                        innerClassName: c.button,
                        type: d,
                        disabled: x,
                        submitting: h,
                        color: 0 === l ? s.Button.Colors.BRAND : s.Button.Colors.GREEN,
                        onClick: C
                    };
                return null != f ? (0, i.jsx)(s.Tooltip, {
                    text: f,
                    children: t => (0, i.jsxs)(e, {
                        ...t,
                        ...n,
                        children: [
                            null == r ? null : (0, i.jsx)(r, {
                                color: 'currentColor',
                                className: c.primaryIcon
                            }),
                            m
                        ]
                    })
                }) : (0, i.jsxs)(e, {
                    ...n,
                    children: [
                        null == r ? null : (0, i.jsx)(r, {
                            color: 'currentColor',
                            className: c.primaryIcon
                        }),
                        m
                    ]
                });
            })(),
            null == N ? null : (0, i.jsx)(s.Button, {
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: v,
                children: N
            }),
            (0, i.jsx)(o.Z, {}),
            null == n ? null : (0, i.jsx)(s.Button, {
                className: c.back,
                color: s.Button.Colors.PRIMARY,
                look: s.Button.Looks.LINK,
                onClick: n,
                children: null != t ? t : u.Z.Messages.BACK
            })
        ]
    });
};
d.CTAType = l, n.Z = d;
