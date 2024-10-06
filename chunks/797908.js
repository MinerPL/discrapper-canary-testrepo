var i = n(735250),
    a = n(470079),
    s = n(481060),
    r = n(783097),
    l = n(924489),
    o = n(491576),
    c = n(686546),
    d = n(66637),
    u = n(768581),
    _ = n(420372),
    E = n(689938),
    h = n(923592);
t.Z = function (e) {
    var t, n, m, I, p;
    let { application: g, showCategory: T = !1 } = e,
        f = (0, o.Z)({ application: g }),
        S = null === (t = g.categories) || void 0 === t ? void 0 : t[0],
        C = (0, r.lf)(g),
        N = (0, r.vJ)(g),
        A = a.useMemo(
            () =>
                u.ZP.getApplicationIconURL({
                    id: g.id,
                    icon: g.icon,
                    size: 48
                }),
            [g]
        ),
        v = (null !== (I = null === (n = g.directory_entry) || void 0 === n ? void 0 : n.guild_count) && void 0 !== I ? I : 0) > 0 || f.length > 0,
        Z = (0, i.jsx)(l.Z, {
            application: g,
            textVariant: 'text-xs/normal',
            mutualGuilds: f,
            mutualGuildShownMax: 3,
            guildIconSize: l.x.SMALL,
            compact: !0
        });
    return (0, i.jsx)('div', {
        className: h.container,
        children: (0, i.jsxs)(d.Z, {
            className: h.card,
            onClick: () => {},
            onContextMenu: () => {},
            children: [
                (0, i.jsxs)('div', {
                    className: h.header,
                    children: [
                        (0, i.jsx)(_.Z, {
                            application: g,
                            iconURL: A
                        }),
                        (0, i.jsx)('div', {
                            className: h.icon,
                            children: (0, i.jsx)(c.ZP, {
                                mask: c.ZP.Masks.SQUIRCLE,
                                width: 56,
                                height: 56,
                                children: (0, i.jsx)('div', {
                                    className: h.iconMask,
                                    children: (0, i.jsx)(c.ZP, {
                                        mask: c.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('img', {
                                            src: A,
                                            alt: '',
                                            className: h.avatar
                                        })
                                    })
                                })
                            })
                        })
                    ]
                }),
                (0, i.jsxs)('div', {
                    className: h.appDetails,
                    children: [
                        (0, i.jsxs)('div', {
                            className: h.titleContainer,
                            children: [
                                (0, i.jsx)('div', {
                                    className: h.title,
                                    children: (0, i.jsx)(s.Heading, {
                                        variant: 'heading-md/semibold',
                                        className: h.appName,
                                        children: g.name
                                    })
                                }),
                                C || N
                                    ? (0, i.jsx)('div', {
                                          className: h.tagContainer,
                                          children: (0, i.jsx)(s.Text, {
                                              variant: 'text-sm/bold',
                                              children: C ? E.Z.Messages.APP_LAUNCHER_PROMOTED : E.Z.Messages.APP_DIRECTORY_PARTNER
                                          })
                                      })
                                    : null
                            ]
                        }),
                        T
                            ? (0, i.jsx)(s.Text, {
                                  className: h.appCategory,
                                  variant: 'text-xs/normal',
                                  color: 'text-muted',
                                  children: null != S ? S.name : ' '
                              })
                            : null,
                        (0, i.jsx)(s.Text, {
                            className: h.description,
                            variant: 'text-sm/normal',
                            color: 'header-secondary',
                            lineClamp: T ? 2 : 3,
                            children: null !== (p = null === (m = g.directory_entry) || void 0 === m ? void 0 : m.short_description) && void 0 !== p ? p : g.description
                        }),
                        v
                            ? (0, i.jsx)('div', {
                                  className: h.memberDetails,
                                  children: Z
                              })
                            : null
                    ]
                })
            ]
        })
    });
};
