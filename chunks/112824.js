n.d(t, {
    R: function () {
        return m;
    },
    Z: function () {
        return N;
    }
});
var s = n(735250);
n(470079);
var a = n(120356), i = n.n(a), r = n(149765), l = n(442837), o = n(481060), c = n(430824), d = n(496675), u = n(700785), _ = n(647086), E = n(135899), I = n(689938), T = n(609191);
function m(e) {
    return E.$X.filter(t => (null == e ? void 0 : e.id) !== _._ && u.oz(t, e));
}
function N(e) {
    let {guild: t} = e, a = (0, l.e7)([c.Z], () => c.Z.getRole(t.id, t.getEveryoneRoleId())), u = m(t), _ = u.length > 0, N = E.$X.some(e => !d.Z.can(e, t, null, {
            [a.id]: {
                ...a,
                permissions: r.Od(a.permissions, e)
            }
        })), S = (0, s.jsxs)(s.Fragment, {
            children: [
                (0, s.jsxs)('div', {
                    className: T.itemContent,
                    children: [
                        (0, s.jsx)(o.Heading, {
                            variant: 'text-md/semibold',
                            color: 'header-primary',
                            children: I.Z.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS
                        }),
                        (0, s.jsx)(o.Text, {
                            variant: 'text-sm/medium',
                            color: 'header-secondary',
                            children: I.Z.Messages.GUILD_SETTINGS_SAFETY_EVERYONE_RISKY_PERMISSIONS_DETAILS.format({ numPerms: u.length })
                        })
                    ]
                }),
                _ ? (0, s.jsx)(o.CircleExclamationPointIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 24,
                    width: 24,
                    className: T.warning,
                    'aria-label': I.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL
                }) : (0, s.jsx)(o.CircleCheckIcon, {
                    size: 'custom',
                    color: 'currentColor',
                    height: 24,
                    width: 24,
                    className: T.check,
                    'aria-label': I.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_ARIA_LABEL_COMPLETE
                })
            ]
        });
    return _ ? N ? (0, s.jsx)(o.Tooltip, {
        text: I.Z.Messages.SAFETY_REMOVE_RISKY_PERMS_WARNING,
        children: e => (0, s.jsx)('div', {
            className: i()(T.simpleItemWrapper, T.disabled),
            ...e,
            children: S
        })
    }) : (0, s.jsx)(o.Clickable, {
        onClick: () => {
            (0, o.openModalLazy)(async () => {
                let {default: e} = await n.e('39627').then(n.bind(n, 193845));
                return n => (0, s.jsx)(e, {
                    guild: t,
                    ...n
                });
            });
        },
        className: i()(T.simpleItemWrapper, T.clickable),
        children: S
    }) : (0, s.jsx)('div', {
        className: T.simpleItemWrapper,
        children: S
    });
}
