t.d(A, {
    Z: function () {
        return l;
    }
});
var n = t(735250);
t(470079);
var a = t(866442), r = t(481060), s = t(689938), o = t(394318);
function l(e) {
    let {
            locked: A,
            role: t,
            textVariant: l = 'text-xs/medium'
        } = e, i = (0, r.useToken)(r.tokens.colors.INTERACTIVE_NORMAL).hex();
    return (0, n.jsx)('div', {
        className: o.roleTagContainer,
        children: (0, n.jsxs)('div', {
            className: o.roleTag,
            children: [
                (0, n.jsx)('div', {
                    className: o.roleColor,
                    style: { backgroundColor: (0, a.Rf)(t.color) }
                }),
                (0, n.jsx)(r.Spacer, {
                    size: 8,
                    horizontal: !0
                }),
                (0, n.jsxs)(r.Text, {
                    variant: l,
                    color: 'text-normal',
                    children: [
                        (0, n.jsx)(r.HiddenVisually, { children: s.Z.Messages.GUILD_PRODUCT_CARD_HIDDEN_ROLE_SCREEN_READER }),
                        t.name
                    ]
                }),
                !0 === A && (0, n.jsxs)(n.Fragment, {
                    children: [
                        (0, n.jsx)(r.Spacer, {
                            size: 8,
                            horizontal: !0
                        }),
                        (0, n.jsx)(r.LockIcon, {
                            size: 'md',
                            color: i
                        })
                    ]
                })
            ]
        })
    });
}
