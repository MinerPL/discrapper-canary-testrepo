n.d(t, {
    Z: function () {
        return g;
    }
});
var i = n(200651);
n(192379);
var r = n(120356),
    a = n.n(r),
    l = n(481060),
    s = n(924628),
    o = n(230711),
    c = n(630186),
    d = n(187819),
    u = n(981631),
    h = n(921944),
    m = n(388032),
    p = n(886769);
function g(e) {
    let { className: t, markAsDismissed: n } = e,
        r = (0, d._p)({ location: 'consent-card' });
    return (0, i.jsxs)(c.Z, {
        className: a()(p.card, t),
        children: [
            (0, i.jsx)(l.Heading, {
                variant: 'heading-md/semibold',
                className: p.header,
                children: m.intl.string(m.t.HcbnMD)
            }),
            (0, i.jsx)(l.Text, {
                variant: 'text-sm/normal',
                children: m.intl.format(m.t.NkFrzM, {
                    onPrivacyClick: () => {
                        r ? o.Z.open(u.oAB.DATA_AND_PRIVACY) : o.Z.open(u.oAB.PRIVACY_AND_SAFETY);
                    }
                })
            }),
            (0, i.jsxs)('div', {
                className: p.buttonContainer,
                children: [
                    (0, i.jsx)(l.Button, {
                        size: l.Button.Sizes.SMALL,
                        onClick: () => (0, s.g)([u.pjP.PERSONALIZATION], []),
                        children: m.intl.string(m.t.ebojgI)
                    }),
                    (0, i.jsx)(l.Button, {
                        color: l.Button.Colors.PRIMARY,
                        size: l.Button.Sizes.SMALL,
                        onClick: () => n(h.L.DISMISS),
                        look: l.Button.Looks.LINK,
                        children: m.intl.string(m.t.f3Pet7)
                    })
                ]
            })
        ]
    });
}
