n.d(t, {
    Eo: function () {
        return P;
    },
    VD: function () {
        return b;
    }
}),
    n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(668781),
    u = n(239091),
    _ = n(881052),
    E = n(410030),
    h = n(686546),
    m = n(556017),
    I = n(206887),
    p = n(66637),
    g = n(782738),
    T = n(371260),
    f = n(372769),
    S = n(134432),
    C = n(695346),
    N = n(768581),
    A = n(356164),
    v = n(981631),
    Z = n(689938),
    L = n(534238),
    R = n(129512),
    O = n(330065),
    x = n(755386);
function b(e) {
    let { guild: t, onClick: s, onView: l } = e,
        [g, T] = a.useState(!1),
        [A, b] = a.useState(!1),
        [M, P] = a.useState(!1),
        D = a.useCallback(
            async (e) => {
                let { className: n } = e.target;
                if (!n.includes('Menu')) {
                    e.stopPropagation(), b(!0);
                    try {
                        await s(t.id);
                    } catch (t) {
                        var i;
                        let e = new _.Hx(t);
                        d.Z.show({
                            title: Z.Z.Messages.ERROR_GENERIC_TITLE,
                            body: null !== (i = e.getAnyErrorMessage()) && void 0 !== i ? i : Z.Z.Messages.GENERIC_ERROR_BODY
                        });
                    } finally {
                        b(!1);
                    }
                }
            },
            [t.id, s]
        ),
        y = a.useCallback(
            (e) => {
                e && !g && (T(!0), null == l || l(t.id));
            },
            [t.id, g, l]
        ),
        j = a.useCallback(
            (e) => {
                (0, u.jW)(e, async () => {
                    let { default: e } = await Promise.resolve().then(n.bind(n, 455839));
                    return (n) =>
                        (0, i.jsx)(e, {
                            ...n,
                            guild: t
                        });
                });
            },
            [t]
        ),
        U = (0, E.ZP)(),
        G = t.features.has(v.oNc.HUB),
        w = a.useMemo(() => {
            let e = N.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, S.x_)()
            });
            if (null != e) return e;
            if (G) return x;
            switch (U) {
                case v.BRd.DARK:
                    return R;
                case v.BRd.LIGHT:
                    return O;
            }
        }, [t.discoverySplash, t.id, G, U]),
        k = a.useMemo(
            () =>
                N.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        { canSeeInAppReportingButtons: B } = m.N.getCurrentConfig({ location: 'de1ef6_3' }, { autoTrackExposure: !1 });
    m.N.trackExposure({ location: 'GlobalDiscoveryServersCard' });
    let V = C.Sb.getSetting();
    return (0, i.jsxs)('div', {
        className: L.container,
        children: [
            A &&
                (0, i.jsx)('div', {
                    className: L.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: L.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: y,
                active: !g,
                threshold: 0.55,
                children: (0, i.jsxs)(p.Z, {
                    className: L.card,
                    onClick: D,
                    disabled: A,
                    onContextMenu: j,
                    children: [
                        (0, i.jsxs)('div', {
                            className: L.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: r()(L.banner, { [L.loaded]: M }),
                                    children: (0, i.jsx)('img', {
                                        src: w,
                                        alt: '',
                                        className: L.bannerImage,
                                        onLoad: () => P(!0)
                                    })
                                }),
                                (V || B) &&
                                    (0, i.jsx)(I.Z, {
                                        guild: t,
                                        className: L.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: L.icon,
                                    children: (0, i.jsx)(h.ZP, {
                                        mask: h.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('div', {
                                            className: L.iconMask,
                                            children: (0, i.jsx)(h.ZP, {
                                                mask: h.ZP.Masks.SQUIRCLE,
                                                width: 40,
                                                height: 40,
                                                children: (0, i.jsx)('img', {
                                                    src: k,
                                                    alt: '',
                                                    className: L.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: L.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: L.title,
                                    children: [
                                        (0, i.jsx)(f.Z, {
                                            className: L.guildBadge,
                                            guild: t,
                                            tooltipColor: c.Tooltip.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: L.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: L.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: L.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: L.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: L.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: L.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: Z.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_ONLINE.format({ membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: L.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: L.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: L.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: Z.Z.Messages.INSTANT_INVITE_GUILD_MEMBERS_TOTAL.format({ count: t.memberCount })
                                                    })
                                                ]
                                            })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
function M(e) {
    let { guildId: t, onClick: n, onView: a } = e,
        s = (0, l.e7)([A.Z], () => A.Z.getGuild(t));
    return null == s
        ? null
        : (0, i.jsx)(b, {
              guild: s,
              onClick: n,
              onView: a
          });
}
function P(e) {
    let { guildId: t, index: n, onClick: s, onView: r } = e,
        l = a.useRef(null == t),
        o = a.useCallback(
            (e, t, n, a) =>
                null == t.guildId
                    ? (0, i.jsx)(
                          T.Z,
                          {
                              state: n,
                              cleanUp: a,
                              children: (0, i.jsx)(g.Z, { className: L.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          T.Z,
                          {
                              state: n,
                              cleanUp: a,
                              animate: l.current,
                              children: (0, i.jsx)(M, {
                                  guildId: t.guildId,
                                  onClick: s,
                                  onView: r
                              })
                          },
                          e
                      ),
            [s, r]
        ),
        d = a.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
        }, []),
        u = a.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, i.jsx)('div', {
        className: L.transitionGroup,
        children: (0, i.jsx)(c.TransitionGroup, {
            items: u,
            renderItem: o,
            getItemKey: d
        })
    });
}
t.ZP = a.memo(M);
