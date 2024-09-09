n.d(t, {
    Z: function () {
        return E;
    }
});
var r = n(735250),
    i = n(470079),
    a = n(373793),
    s = n(974674),
    o = n(481060),
    l = n(688465),
    u = n(768581),
    c = n(182294),
    d = n(689938),
    _ = n(875304);
function E(e) {
    let { application: t, onSelect: n } = e,
        E = i.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: t.id,
                    icon: t.icon
                }),
            [t.icon, t.id]
        ),
        f = i.useMemo(
            () =>
                [
                    {
                        type: a.Y.USER_INSTALL,
                        icon: o.UserPlusIcon,
                        title: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER,
                        subtitle: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_USER_SUBTITLE,
                        beta: !1
                    },
                    {
                        type: a.Y.GUILD_INSTALL,
                        icon: o.ServerIcon,
                        title: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD,
                        subtitle: d.Z.Messages.OAUTH2_INTEGRATION_SELECT_GUILD_SUBTITLE,
                        beta: !1
                    }
                ].filter((e) => {
                    var n, r;
                    return (null === (r = t.integrationTypesConfig) || void 0 === r ? void 0 : null === (n = r[e.type]) || void 0 === n ? void 0 : n.oauth2InstallParams) != null;
                }),
            [t.integrationTypesConfig]
        );
    return (0, r.jsxs)('div', {
        className: _.container,
        children: [
            (0, r.jsxs)('div', {
                className: _.header,
                children: [
                    (0, r.jsx)(s.qE, {
                        src: E,
                        size: c.EF.SIZE_80,
                        'aria-label': t.name
                    }),
                    (0, r.jsx)(o.Heading, {
                        variant: 'heading-xl/bold',
                        color: 'header-primary',
                        children: t.name
                    })
                ]
            }),
            (0, r.jsx)('ul', {
                className: _.rows,
                children: f.map((e) =>
                    (0, r.jsxs)(
                        o.Clickable,
                        {
                            tag: 'li',
                            className: _.row,
                            onClick: () => n(e.type),
                            children: [
                                (0, r.jsx)(e.icon, {
                                    size: 'md',
                                    color: 'currentColor',
                                    className: _.leftIcon
                                }),
                                (0, r.jsxs)('div', {
                                    className: _.rowInner,
                                    children: [
                                        (0, r.jsxs)('div', {
                                            className: _.rowDetails,
                                            children: [
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-md/medium',
                                                    color: 'interactive-active',
                                                    children: e.title
                                                }),
                                                (0, r.jsx)(o.Text, {
                                                    variant: 'text-xs/medium',
                                                    color: 'text-muted',
                                                    children: e.subtitle
                                                })
                                            ]
                                        }),
                                        e.beta && (0, r.jsx)(l.Z, {}),
                                        (0, r.jsx)(o.ChevronSmallRightIcon, {
                                            size: 'md',
                                            color: 'currentColor',
                                            className: _.rightIcon
                                        })
                                    ]
                                })
                            ]
                        },
                        e.type
                    )
                )
            })
        ]
    });
}
