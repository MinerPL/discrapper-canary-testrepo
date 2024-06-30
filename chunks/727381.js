n.d(t, {
    Z: function () {
        return x;
    }
});
var i = n(735250);
n(470079);
var a = n(120356), l = n.n(a), s = n(399606), r = n(481060), o = n(271383), c = n(594174), u = n(777288), d = n(991570), h = n(753042), p = n(787469), m = n(477718), _ = n(791176), f = n(908474), E = n(467014), C = n(689938), g = n(332513);
function I(e) {
    let {
            userId: t,
            guildId: n
        } = e, a = (0, d.f)(t, n, 0.8, r.tokens.colors.BACKGROUND_SECONDARY);
    return (0, i.jsxs)('div', {
        className: l()(g.header),
        style: { backgroundColor: a },
        children: [
            (0, i.jsxs)('div', {
                className: l()(g.headerTitle),
                children: [
                    (0, i.jsx)(u.Z, {
                        width: 16,
                        height: 16
                    }),
                    (0, i.jsx)(r.Heading, {
                        variant: 'heading-md/semibold',
                        children: C.Z.Messages.GUILD_MEMBER_MOD_VIEW_TITLE
                    })
                ]
            }),
            (0, i.jsx)('div', {
                children: (0, i.jsx)(r.KeyCombo, {
                    shortcut: 'esc',
                    keyClassName: g.keyComboInner,
                    className: g.keyComboContainer
                })
            })
        ]
    });
}
function x(e) {
    let {
            userId: t,
            guildId: n,
            location: a,
            className: u,
            onNavigate: C
        } = e, x = (0, s.e7)([c.default], () => c.default.getUser(t), [t]), T = (0, s.e7)([o.ZP], () => o.ZP.getMember(n, t), [
            n,
            t
        ]), N = (0, d.f)(t, n);
    return null == x || null == T ? null : (0, i.jsxs)(r.Scroller, {
        className: l()(g.container, u),
        style: { backgroundColor: N },
        children: [
            (0, i.jsx)(I, {
                userId: t,
                guildId: n
            }),
            (0, i.jsxs)('div', {
                className: l()(g.innerContainer),
                children: [
                    (0, i.jsx)(f.Z, { member: T }),
                    (0, i.jsx)(E.Z, {
                        userId: t,
                        guildId: n
                    }),
                    (0, i.jsx)(_.Z, {
                        member: T,
                        onNavigate: C
                    }),
                    (0, i.jsx)(p.Z, { member: T }),
                    (0, i.jsx)(h.Z, { member: T }),
                    (0, i.jsx)(m.Z, { member: T })
                ]
            })
        ]
    });
}
