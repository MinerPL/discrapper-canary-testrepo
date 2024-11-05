n.d(t, {
    Z: function () {
        return b;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    l = n(990547),
    a = n(399606),
    o = n(481060),
    s = n(434650),
    c = n(778569),
    d = n(182906),
    u = n(367907),
    m = n(213609),
    h = n(783097),
    f = n(220082),
    p = n(240991),
    g = n(914010),
    _ = n(768581),
    C = n(135431),
    E = n(728345),
    I = n(812206),
    x = n(981631),
    v = n(388032),
    N = n(166272),
    T = n(413097),
    S = n(970952);
function b(e) {
    let { applicationId: t } = e,
        [n, l, o] = (0, a.Wu)([I.Z], () => [I.Z.getApplication(t), I.Z.isFetchingApplication(t), I.Z.didFetchingApplicationFail(t)], [t]);
    return (r.useEffect(() => {
        null == n && !l && !o && E.ZP.fetchApplication(t);
    }, [n, l, o, t]),
    null != n &&
        (0, C.Eb)({
            customInstallUrl: n.customInstallUrl,
            installParams: n.installParams,
            integrationTypesConfig: n.integrationTypesConfig
        }))
        ? (0, i.jsx)(A, { application: n })
        : null;
}
function A(e) {
    let { application: t } = e,
        n = (0, a.e7)([g.Z], () => {
            var e;
            return null !== (e = g.Z.getGuildId()) && void 0 !== e ? e : void 0;
        }),
        {
            iconURL: c,
            name: d,
            description: f
        } = r.useMemo(
            () =>
                (0, h.sl)(t, {
                    fakeAppIconURL: T,
                    size: 56
                }),
            [t]
        ),
        _ = r.useMemo(() => (null != f ? (0, p.parseBioReact)(f) : null), [f]),
        [E, I] = r.useState(!1),
        b = r.useCallback((e) => {
            e && I(!0);
        }, []),
        A = (0, s.O)(b);
    return (
        r.useEffect(() => {
            E &&
                (0, m.h)({
                    type: l.ImpressionTypes.VIEW,
                    name: l.ImpressionNames.APP_OAUTH2_LINK_EMBED,
                    properties: { application_id: t.id }
                });
        }, [E, t]),
        (0, i.jsxs)('div', {
            ref: A,
            className: N.embedContainer,
            children: [
                (0, i.jsx)(j, {
                    application: t,
                    iconUrl: c
                }),
                (0, i.jsx)('img', {
                    className: N.icon,
                    alt: t.name,
                    src: null != c ? c : S,
                    'aria-hidden': !0,
                    draggable: !1
                }),
                (0, i.jsxs)('div', {
                    className: N.body,
                    children: [
                        (0, i.jsxs)('div', {
                            className: N.details,
                            children: [
                                (0, i.jsx)(o.Heading, {
                                    variant: 'heading-lg/bold',
                                    color: 'interactive-active',
                                    children: d
                                }),
                                null != _ &&
                                    (0, i.jsx)(o.Text, {
                                        variant: 'text-sm/normal',
                                        color: 'text-normal',
                                        children: _
                                    })
                            ]
                        }),
                        (0, i.jsx)(o.Button, {
                            color: o.Button.Colors.PRIMARY,
                            className: N.button,
                            type: 'button',
                            size: o.Button.Sizes.MEDIUM,
                            onClick: () => {
                                u.ZP.trackWithMetadata(x.rMx.APP_OAUTH2_LINK_EMBED_CTA_CLICKED, { application_id: t.id }),
                                    (0, C.LO)({
                                        applicationId: t.id,
                                        customInstallUrl: t.customInstallUrl,
                                        installParams: t.installParams,
                                        integrationTypesConfig: t.integrationTypesConfig,
                                        guildId: n,
                                        source: 'app_oauth2_link_embed'
                                    });
                            },
                            children: v.intl.string(v.t.NgXl3N)
                        })
                    ]
                })
            ]
        })
    );
}
function j(e) {
    let { application: t, iconUrl: n } = e,
        r = (0, c.Z)({
            applicationId: t.id,
            size: 280,
            names: ['embedded_cover']
        }),
        l = (0, f.ZP)(n, ''),
        a = t.bot,
        o = null,
        s = {};
    if ((0, h.ye)(t))
        o = (0, i.jsx)(d.Z, {
            imageBackground: r,
            applicationName: t.name,
            imageClassName: N.bannerImage,
            imageNotFoundClassName: N.bannerImage
        });
    else if ((null == a ? void 0 : a.banner) != null) {
        let e = (0, _.aN)({
            id: a.id,
            banner: a.banner,
            size: 280,
            canAnimate: !1
        });
        o = (0, i.jsx)('img', {
            alt: t.name,
            src: e,
            className: N.bannerImage
        });
    } else s = { backgroundColor: l };
    return (0, i.jsx)('div', {
        className: N.banner,
        style: s,
        children: o
    });
}
