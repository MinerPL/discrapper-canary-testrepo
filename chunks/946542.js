var i = n(200651),
    r = n(192379),
    a = n(481060),
    l = n(924489),
    s = n(824606),
    o = n(768581),
    c = n(689938),
    d = n(675890);
function u(e) {
    var t, n, c;
    let { application: u } = e,
        h = (0, s.Z)({ application: u }),
        m = null === (t = u.categories) || void 0 === t ? void 0 : t[0],
        p = r.useMemo(
            () =>
                o.ZP.getApplicationIconURL({
                    id: u.id,
                    icon: u.icon,
                    size: 48
                }),
            [u]
        );
    return (0, i.jsxs)('div', {
        className: d.appContainer,
        children: [
            (0, i.jsxs)('div', {
                className: d.appHeader,
                children: [
                    (0, i.jsx)('img', {
                        src: p,
                        alt: '',
                        className: d.avatar,
                        height: 48,
                        width: 48
                    }),
                    (0, i.jsxs)('div', {
                        className: d.titleContainer,
                        children: [
                            (0, i.jsx)('div', {
                                style: {
                                    flex: 1,
                                    minWidth: 0,
                                    overflow: 'hidden'
                                },
                                children: (0, i.jsx)(a.Heading, {
                                    variant: 'heading-md/semibold',
                                    color: 'header-primary',
                                    className: d.appName,
                                    children: u.name
                                })
                            }),
                            null != m
                                ? (0, i.jsx)(a.Text, {
                                      className: d.appCategory,
                                      variant: 'text-xs/medium',
                                      color: 'text-muted',
                                      children: m.name
                                  })
                                : null
                        ]
                    })
                ]
            }),
            (0, i.jsx)(a.Text, {
                className: d.appDescription,
                variant: 'text-sm/medium',
                color: 'header-secondary',
                lineClamp: 2,
                children: null !== (c = null === (n = u.directory_entry) || void 0 === n ? void 0 : n.short_description) && void 0 !== c ? c : u.description
            }),
            (0, i.jsx)(l.Z, {
                application: u,
                textVariant: 'text-xs/medium',
                mutualGuilds: h,
                mutualGuildShownMax: 3,
                guildIconSize: l.x.SMALL,
                compact: !0
            })
        ]
    });
}
t.Z = function (e) {
    let { application: t } = e;
    return (0, i.jsxs)('div', {
        className: d.sectionContainer,
        children: [
            (0, i.jsx)('div', { className: d.divider }),
            (0, i.jsx)(a.Heading, {
                variant: 'heading-sm/semibold',
                color: 'header-primary',
                className: d.sectionHeader,
                children: c.Z.Messages.APP_DIRECTORY_PROFILE_RELATED_APPS_HEADING
            }),
            (0, i.jsxs)('div', {
                className: d.contentContainer,
                children: [(0, i.jsx)(u, { application: t }), (0, i.jsx)(u, { application: t }), (0, i.jsx)(u, { application: t })]
            })
        ]
    });
};
