n.d(t, {
    Z: function () {
        return E;
    }
});
var i = n(735250);
n(470079);
var a = n(442837), s = n(481060), l = n(197409), r = n(846587), o = n(409059), c = n(58346), d = n(689938), u = n(227210), _ = n(637091);
function E(e) {
    var t;
    let {code: E} = e, m = (0, a.e7)([o.Z], () => o.Z.getGuildTemplate(E));
    if (null == m || m.state === c.Rj.RESOLVING)
        return (0, i.jsxs)(l.Z, {
            children: [
                (0, i.jsx)(l.Z.Header, { text: d.Z.Messages.GUILD_TEMPLATE_RESOLVING_TITLE }),
                (0, i.jsx)(l.Z.Body, { resolving: !0 })
            ]
        });
    if (m.state === c.Rj.EXPIRED)
        return (0, i.jsxs)(l.Z, {
            children: [
                (0, i.jsx)(l.Z.Header, { text: d.Z.Messages.GUILD_TEMPLATE_INVALID_TITLE }),
                (0, i.jsxs)(l.Z.Body, {
                    children: [
                        (0, i.jsx)(l.Z.Icon, { expired: !0 }),
                        (0, i.jsx)(l.Z.Info, {
                            expired: !0,
                            title: d.Z.Messages.GUILD_TEMPLATE_INVALID_SUBTITLE
                        })
                    ]
                })
            ]
        });
    let I = __OVERLAY__ ? (0, i.jsx)(l.Z.Button, {
        isDisabled: !0,
        color: l.Z.Button.Colors.PRIMARY,
        children: d.Z.Messages.GUILD_TEMPLATE_EMBED_VIEW_IN_APP
    }) : (0, i.jsx)(l.Z.Button, {
        onClick: () => {
            (0, s.openModalLazy)(async () => {
                let {default: e} = await Promise.all([
                    n.e('10778'),
                    n.e('22921')
                ]).then(n.bind(n, 766775));
                return t => (0, i.jsx)(e, {
                    ...t,
                    guildTemplate: m
                });
            });
        },
        submitting: m.state === c.Rj.ACCEPTING,
        color: l.Z.Button.Colors.GREEN,
        children: d.Z.Messages.GUILD_TEMPLATE_OPEN
    });
    return (0, i.jsxs)(l.Z, {
        children: [
            (0, i.jsx)(l.Z.Header, { text: d.Z.Messages.GUILD_TEMPLATE_RESOLVED_EMBED_TITLE }),
            (0, i.jsxs)(l.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: _.headerLine,
                        children: [
                            (0, i.jsx)(r.Z, { className: u.icon }),
                            (0, i.jsx)(l.Z.Info, {
                                title: m.name,
                                children: d.Z.Messages.GUILD_TEMPLATE_USAGES.format({ usageCount: String(null !== (t = m.usageCount) && void 0 !== t ? t : 0) })
                            })
                        ]
                    }),
                    I
                ]
            })
        ]
    });
}
