n.d(t, {
    Z: function () {
        return S;
    }
}), n(47120);
var i = n(735250), a = n(470079), s = n(873546), l = n(399606), r = n(481060), o = n(434650), c = n(706454), d = n(973616), u = n(914010), _ = n(594174), E = n(197409), m = n(626135), I = n(135431), T = n(674588), h = n(264043), N = n(132871), f = n(147890), p = n(981631), C = n(689938), g = n(938979);
function S(e) {
    var t, n;
    let {
            code: S,
            message: A
        } = e, [x, O, R] = (0, l.Wu)([h.Z], () => [
            h.Z.getApplication(S),
            h.Z.isInvalidApplication(S),
            h.Z.getApplicationFetchState(S)
        ], [S]), M = (0, l.e7)([c.default], () => c.default.locale), v = (0, l.e7)([u.Z], () => {
            var e;
            return null !== (e = u.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }), L = (0, l.e7)([_.default], () => _.default.getCurrentUser()), [Z, P] = a.useState(!1), b = a.useCallback(e => {
            e && P(!0);
        }, []), D = (0, o.O)(b);
    a.useEffect(() => {
        (0, T.gZ)(S);
    }, [S]), a.useEffect(() => {
        Z && R === h.M.FETCHED && m.default.track(p.rMx.APP_DIRECTORY_PROFILE_EMBED_VIEWED, {
            application_id: S,
            device_platform: s.tq ? 'mobile_web' : 'desktop_web',
            sender_user_id: A.author.id,
            guild_id: v,
            channel_id: A.channel_id
        });
    }, [
        Z,
        S,
        null == L ? void 0 : L.id,
        A.channel_id,
        v,
        A.author.id,
        R
    ]), a.useEffect(() => {
        Z && O && m.default.track(p.rMx.APP_DIRECTORY_PROFILE_INVALID_EMBED_VIEWED, {
            device_platform: s.tq ? 'mobile_web' : 'desktop_web',
            sender_user_id: A.author.id,
            guild_id: v,
            channel_id: A.channel_id
        });
    }, [
        Z,
        v,
        O,
        A.author.id,
        A.channel_id
    ]);
    let j = e => {
        m.default.track(p.rMx.APP_DIRECTORY_PROFILE_EMBED_APP_INFO_CLICKED, {
            application_id: S,
            device_platform: s.tq ? 'mobile_web' : 'desktop_web',
            clicked_section: e,
            guild_id: v,
            channel_id: A.channel_id
        }), (0, f.goToAppDirectory)({
            view: N.ApplicationDirectoryViews.APPLICATION,
            guildId: v,
            applicationId: S,
            entrypoint: { name: N.ApplicationDirectoryEntrypointNames.APPLICATION_DIRECTORY_PROFILE_EMBED }
        });
    };
    if (O)
        return (0, i.jsxs)(E.Z, {
            containerRef: D,
            children: [
                (0, i.jsx)(E.Z.Header, { text: C.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_HEADER }),
                (0, i.jsx)(E.Z.Body, {
                    children: (0, i.jsxs)('div', {
                        className: g.invalidBody,
                        children: [
                            (0, i.jsx)(E.Z.Icon, { expired: !0 }),
                            (0, i.jsx)(E.Z.Info, {
                                expired: !0,
                                title: C.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_TITLE,
                                children: C.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_INVALID_INFO_BODY
                            })
                        ]
                    })
                })
            ]
        });
    if (null == x || R === h.M.FETCHING)
        return (0, i.jsxs)(E.Z, {
            containerRef: D,
            children: [
                (0, i.jsx)(E.Z.Header, { text: C.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_RESOLVING_HEADER }),
                (0, i.jsx)(E.Z.Body, { resolving: !0 })
            ]
        });
    let U = new Intl.NumberFormat(M, {
        notation: 'compact',
        compactDisplay: 'short'
    }).format(null !== (n = null === (t = x.directory_entry) || void 0 === t ? void 0 : t.guild_count) && void 0 !== n ? n : 0);
    return (0, i.jsxs)(E.Z, {
        containerRef: D,
        children: [
            (0, i.jsx)(E.Z.Header, { text: C.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_HEADER }),
            (0, i.jsxs)(E.Z.Body, {
                children: [
                    (0, i.jsxs)('div', {
                        className: g.applicationInfoContainer,
                        children: [
                            (0, i.jsx)(E.Z.Icon, {
                                application: d.Z.createFromServer(x),
                                className: g.applicationIcon,
                                onClick: () => j('application_icon')
                            }),
                            (0, i.jsx)(E.Z.Info, {
                                title: (0, i.jsx)(r.Clickable, {
                                    onClick: () => j('application_name'),
                                    children: x.name
                                }),
                                children: (0, i.jsxs)(r.Clickable, {
                                    className: g.guildCountContainer,
                                    onClick: () => j('application_guild_count'),
                                    children: [
                                        (0, i.jsx)(r.CompassIcon, {
                                            size: 'custom',
                                            color: 'currentColor',
                                            width: 16,
                                            height: 16,
                                            className: g.guildCountIcon
                                        }),
                                        C.Z.Messages.APP_DIRECTORY_PROFILE_EMBED_GUILD_COUNT.format({ guildCount: U })
                                    ]
                                })
                            })
                        ]
                    }),
                    (0, i.jsx)(E.Z.Button, {
                        onClick: () => {
                            if (null != x)
                                (0, I.L)({
                                    applicationId: S,
                                    customInstallUrl: x.custom_install_url,
                                    installParams: x.install_params,
                                    integrationTypesConfig: x.integration_types_config,
                                    guildId: v,
                                    source: 'app_directory_profile_embed'
                                });
                        },
                        color: E.Z.Button.Colors.GREEN,
                        children: C.Z.Messages.APPLICATION_ADD_BUTTON
                    })
                ]
            })
        ]
    });
}
