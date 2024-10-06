n.d(t, {
    Z: function () {
        return M;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(990547),
    l = n(399606),
    r = n(481060),
    o = n(434650),
    c = n(778569),
    d = n(182906),
    u = n(367907),
    _ = n(213609),
    E = n(783097),
    I = n(220082),
    m = n(914010),
    T = n(768581),
    N = n(135431),
    h = n(728345),
    C = n(812206),
    p = n(981631),
    f = n(689938),
    g = n(166272),
    A = n(413097),
    S = n(970952);
function M(e) {
    let { applicationId: t } = e,
        [n, s, r] = (0, l.Wu)([C.Z], () => [C.Z.getApplication(t), C.Z.isFetchingApplication(t), C.Z.didFetchingApplicationFail(t)], [t]);
    return (a.useEffect(() => {
        null == n && !s && !r && h.ZP.fetchApplication(t);
    }, [n, s, r, t]),
    null != n &&
        (0, N.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(x, { application: n })
        : null;
}
function x(e) {
    let { application: t } = e,
        n = (0, l.e7)([m.Z], () => {
            var e;
            return null !== (e = m.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: c,
            name: d,
            description: I
        } = a.useMemo(
            () =>
                (0, E.sl)(t, {
                    fakeAppIconURL: A,
                    size: 56
                }),
            [t]
        ),
        [T, h] = a.useState(!1),
        C = a.useCallback((e) => {
            e && h(!0);
        }, []),
        M = (0, o.O)(C);
    return (
        a.useEffect(() => {
            T &&
                (0, _.h)({
                    type: s.ImpressionTypes.VIEW,
                    name: s.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                    properties: { application_id: t.id }
                });
        }, [T, t]),
        (0, i.jsxs)('div', {
            ref: M,
            className: g.embedContainer,
            children: [
                (0, i.jsx)(O, {
                    application: t,
                    iconUrl: c
                }),
                (0, i.jsx)('img', {
                    className: g.icon,
                    alt: t.name,
                    src: null != c ? c : S,
                    'aria-hidden': !0,
                    draggable: !1
                }),
                (0, i.jsxs)('div', {
                    className: g.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: g.details,
                            children: [
                                (0, i.jsx)(r.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'interactive-active',
                                    children: d
                                }),
                                null != I &&
                                    (0, i.jsx)(r.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: I
                                    })
                            ]
                        }),
                        (0, i.jsx)(r.Button, {
                            color: r.Button.Colors.PRIMARY,
                            className: g.button,
                            type: 'button',
                            size: r.Button.Sizes.MEDIUM,
                            onClick: () => {
                                u.ZP.trackWithMetadata(p.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: t.id }),
                                    (0, N.LO)({
                                        applicationId: t.id,
                                        customInstallUrl: t.customInstallUrl,
                                        installParams: t.installParams,
                                        integrationTypesConfig: t.integrationTypesConfig,
                                        guildId: n,
                                        source: 'app_oauth2_link_embed'
                                    });
                            },
                            children: f.Z.Messages.APPLICATION_ADD_BUTTON
                        })
                    ]
                })
            ]
        })
    );
}
function O(e) {
    let { application: t, iconUrl: n } = e,
        a = (0, c.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        s = (0, I.ZP)(n, ''),
        l = t.bot,
        r = null,
        o = {};
    if ((0, E.ye)(t))
        r = (0, i.jsx)(d.Z, {
            imageBackground: a,
            applicationName: t.name,
            imageClassName: g.bannerImage,
            imageNotFoundClassName: g.bannerImage
        });
    else if ((null == l ? void 0 : l.banner) != null) {
        let e = (0, T.aN)({
            id: l.id,
            banner: l.banner,
            size: 280,
            canAnimate: !1
        });
        r = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: g.bannerImage
        });
    } else o = { backgroundColor: s };
    return (0, i.jsx)('div', {
        className: g.banner,
        style: o,
        children: r
    });
}
