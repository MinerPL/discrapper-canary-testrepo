n.d(t, {
    Eo: function () {
        return O;
    },
    VD: function () {
        return R;
    }
}),
    n(47120);
var i = n(200651),
    r = n(192379),
    a = n(120356),
    l = n.n(a),
    s = n(442837),
    o = n(622535),
    c = n(481060),
    d = n(668781),
    u = n(239091),
    h = n(881052),
    m = n(410030),
    p = n(686546),
    g = n(556017),
    f = n(206887),
    _ = n(66637),
    E = n(782738),
    I = n(371260),
    C = n(372769),
    v = n(134432),
    S = n(695346),
    N = n(768581),
    T = n(356164),
    x = n(981631),
    b = n(388032),
    A = n(534238),
    Z = n(129512),
    y = n(330065),
    L = n(755386);
function R(e) {
    let { guild: t, onClick: a, onView: s } = e,
        [E, I] = r.useState(!1),
        [T, R] = r.useState(!1),
        [P, O] = r.useState(!1),
        j = r.useCallback(async () => {
            R(!0);
            try {
                await a(t.id);
            } catch (n) {
                var e;
                let t = new h.Hx(n);
                d.Z.show({
                    title: b.intl.string(b.t.R0RpRU),
                    body: null !== (e = t.getAnyErrorMessage()) && void 0 !== e ? e : b.intl.string(b.t.eAn6z8)
                });
            } finally {
                R(!1);
            }
        }, [t.id, a]),
        D = r.useCallback(
            (e) => {
                e && !E && (I(!0), null == s || s(t.id));
            },
            [t.id, E, s]
        ),
        M = r.useCallback(
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
        w = (0, m.ZP)(),
        k = t.features.has(x.oNc.HUB),
        U = r.useMemo(() => {
            let e = N.ZP.getGuildDiscoverySplashURL({
                id: t.id,
                splash: t.discoverySplash,
                size: 300 * (0, v.x_)()
            });
            if (null != e) return e;
            if (k) return L;
            switch (w) {
                case x.BRd.DARK:
                    return Z;
                case x.BRd.LIGHT:
                    return y;
            }
        }, [t.discoverySplash, t.id, k, w]),
        G = r.useMemo(
            () =>
                N.ZP.getGuildIconURL({
                    id: t.id,
                    icon: t.icon,
                    size: 40
                }),
            [t.icon, t.id]
        ),
        { canSeeInAppReportingButtons: B } = g.N.getCurrentConfig({ location: 'de1ef6_3' }, { autoTrackExposure: !1 });
    g.N.trackExposure({ location: 'GlobalDiscoveryServersCard' });
    let H = S.Sb.getSetting();
    return (0, i.jsxs)('div', {
        className: A.container,
        children: [
            T &&
                (0, i.jsx)('div', {
                    className: A.spinnerContainer,
                    children: (0, i.jsx)(c.Spinner, {
                        type: c.Spinner.Type.PULSING_ELLIPSIS,
                        className: A.spinner
                    })
                }),
            (0, i.jsx)(o.$, {
                onChange: D,
                active: !E,
                threshold: 0.55,
                children: (0, i.jsxs)(_.Z, {
                    className: A.card,
                    onClick: j,
                    disabled: T,
                    onContextMenu: M,
                    children: [
                        (0, i.jsxs)('div', {
                            className: A.header,
                            children: [
                                (0, i.jsx)('div', {
                                    className: l()(A.banner, { [A.loaded]: P }),
                                    children: (0, i.jsx)('img', {
                                        src: U,
                                        alt: '',
                                        className: A.bannerImage,
                                        onLoad: () => O(!0)
                                    })
                                }),
                                (H || B) &&
                                    (0, i.jsx)(f.Z, {
                                        guild: t,
                                        className: A.contextMenu
                                    }),
                                (0, i.jsx)('div', {
                                    className: A.icon,
                                    children: (0, i.jsx)(p.ZP, {
                                        mask: p.ZP.Masks.SQUIRCLE,
                                        width: 48,
                                        height: 48,
                                        children: (0, i.jsx)('div', {
                                            className: A.iconMask,
                                            children: (0, i.jsx)(p.ZP, {
                                                mask: p.ZP.Masks.SQUIRCLE,
                                                width: 40,
                                                height: 40,
                                                children: (0, i.jsx)('img', {
                                                    src: G,
                                                    alt: '',
                                                    className: A.avatar
                                                })
                                            })
                                        })
                                    })
                                })
                            ]
                        }),
                        (0, i.jsxs)('div', {
                            className: A.guildDetails,
                            children: [
                                (0, i.jsxs)('div', {
                                    className: A.title,
                                    children: [
                                        (0, i.jsx)(C.Z, {
                                            className: A.guildBadge,
                                            guild: t,
                                            tooltipColor: c.Tooltip.Colors.PRIMARY
                                        }),
                                        (0, i.jsx)(c.Heading, {
                                            variant: 'heading-md/semibold',
                                            className: A.guildName,
                                            children: t.name
                                        })
                                    ]
                                }),
                                (0, i.jsx)(c.Text, {
                                    className: A.description,
                                    variant: 'text-sm/normal',
                                    color: 'header-secondary',
                                    children: t.description
                                }),
                                (0, i.jsxs)('div', {
                                    className: A.memberDetails,
                                    children: [
                                        null != t.presenceCount &&
                                            (0, i.jsxs)('div', {
                                                className: A.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: A.presenceCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: A.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: b.intl.format(b.t['LC+S+v'], { membersOnline: t.presenceCount })
                                                    })
                                                ]
                                            }),
                                        null != t.memberCount &&
                                            (0, i.jsxs)('div', {
                                                className: A.memberDetailsCount,
                                                children: [
                                                    (0, i.jsx)('div', { className: A.memberCountDot }),
                                                    (0, i.jsx)(c.Text, {
                                                        className: A.memberDetailsText,
                                                        variant: 'text-xs/normal',
                                                        color: 'header-secondary',
                                                        children: b.intl.format(b.t.zRl6XV, { count: t.memberCount })
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
function P(e) {
    let { guildId: t, onClick: n, onView: r } = e,
        a = (0, s.e7)([T.Z], () => T.Z.getGuild(t));
    return null == a
        ? null
        : (0, i.jsx)(R, {
              guild: a,
              onClick: n,
              onView: r
          });
}
function O(e) {
    let { guildId: t, index: n, onClick: a, onView: l } = e,
        s = r.useRef(null == t),
        o = r.useCallback(
            (e, t, n, r) =>
                null == t.guildId
                    ? (0, i.jsx)(
                          I.Z,
                          {
                              state: n,
                              cleanUp: r,
                              children: (0, i.jsx)(E.Z, { className: A.placeholder })
                          },
                          e
                      )
                    : (0, i.jsx)(
                          I.Z,
                          {
                              state: n,
                              cleanUp: r,
                              animate: s.current,
                              children: (0, i.jsx)(P, {
                                  guildId: t.guildId,
                                  onClick: a,
                                  onView: l
                              })
                          },
                          e
                      ),
            [a, l]
        ),
        d = r.useCallback((e) => {
            var t;
            return null !== (t = e.guildId) && void 0 !== t ? t : ''.concat(e.index);
        }, []),
        u = r.useMemo(
            () => [
                {
                    guildId: t,
                    index: n
                }
            ],
            [t, n]
        );
    return (0, i.jsx)('div', {
        className: A.transitionGroup,
        children: (0, i.jsx)(c.TransitionGroup, {
            items: u,
            renderItem: o,
            getItemKey: d
        })
    });
}
t.ZP = r.memo(P);
