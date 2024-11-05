n(47120);
var i = n(200651),
    r = n(192379),
    a = n(782690),
    l = n(442837),
    s = n(481060),
    o = n(100527),
    c = n(970606),
    d = n(963202),
    u = n(650461),
    h = n(603839),
    m = n(322665),
    p = n(17845),
    g = n(374939),
    f = n(233374),
    _ = n(283293),
    E = n(216742),
    I = n(84615),
    C = n(889711),
    v = n(229893),
    S = n(931515),
    N = n(702646),
    T = n(207796),
    x = n(782322),
    b = n(895068),
    A = n(308083),
    Z = n(388032),
    y = n(641388);
function L(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n } = e,
        { guilds: a } = (0, d.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [l, m] = r.useState(() => {
            var e;
            let t = new Set(u.ZP.getGuildIds());
            for (let e of a) if (t.has(e.id)) return e.id;
            return null === (e = a[0]) || void 0 === e ? void 0 : e.id;
        }),
        p = r.useMemo(
            () =>
                a.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [a]
        ),
        g = n && a.length > 0,
        f = r.useCallback(() => {
            (0, c.aN)({
                guildId: l,
                location: o.Z.GLOBAL_DISCOVERY
            }),
                (0, I.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(h.Z, {
                            onClose: t,
                            guildId: l
                        });
                    },
                    { layerKey: A.Pv }
                );
        }, [l]),
        _ = r.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(s.Button, {
                              look: s.ButtonLooks.FILLED,
                              size: s.ButtonSizes.LARGE,
                              color: g ? s.ButtonColors.TRANSPARENT : s.ButtonColors.BRAND,
                              className: y.heroButton,
                              innerClassName: y.heroButtonInner,
                              onClick: () => {
                                  (0, c.GS)({ location: o.Z.GLOBAL_DISCOVERY }), (0, T.fH)(T.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(s.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: Z.intl.string(Z.t.s8EDLC)
                                  }),
                                  (0, i.jsx)(s.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, g]
        ),
        E = r.useMemo(
            () =>
                n && a.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              a.length > 0 &&
                                  (0, i.jsx)(s.SearchableSelect, {
                                      className: y.upsellSelect,
                                      value: l,
                                      options: p,
                                      onChange: m
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(s.Button, {
                                      look: s.ButtonLooks.FILLED,
                                      size: s.ButtonSizes.MEDIUM,
                                      color: s.ButtonColors.BRAND,
                                      className: y.heroButton,
                                      onClick: f,
                                      children: (0, i.jsx)(s.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: Z.intl.string(Z.t.ZA9f19)
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, a.length, p, l, f]
        );
    return (0, i.jsxs)('div', {
        className: y.contentCtaContainer,
        children: [E, _]
    });
}
t.Z = r.memo(function (e) {
    let t,
        { width: n, paddingVertical: o = 16, paddingHorizontal: c = 32, variant: u = b.Bj.DEFAULT, onScroll: h, withAdminContent: I = !1 } = e,
        { enabled: A } = (0, E.I7)(),
        R = r.useRef(null),
        P = r.useRef(null),
        O = (0, T.GN)((e) => e.completedNux, a.Z),
        j = (0, T.GN)((e) => e.entrypointGameId, a.Z),
        [D, M] = r.useState(null),
        { backgroundImageUrl: w, gameName: k } = (0, S.kN)(j),
        U = r.useCallback(() => {
            var e, t, n;
            if (!A) return;
            let i = null === (e = R.current) || void 0 === e ? void 0 : e.getBoundingClientRect().top,
                r = null !== (n = null === (t = P.current) || void 0 === t ? void 0 : t.getScrollerState().scrollTop) && void 0 !== n ? n : 0;
            null != i && D !== i && M(i + r);
        }, [D, A]);
    r.useEffect(() => {
        if (!A) return;
        let e = (0, C.pP)(U);
        return (0, C.YP)(e, document.body), () => (0, C.UC)(e, document.body);
    }, [A, U]);
    let G = r.useCallback(() => {
            var e, t;
            A && null != D
                ? null === (e = P.current) ||
                  void 0 === e ||
                  e.scrollTo({
                      to: D - 64,
                      animate: !1
                  })
                : null === (t = P.current) || void 0 === t || t.scrollToTop();
        }, [D, A]),
        B = r.useMemo(
            () =>
                (0, i.jsx)(L, {
                    showPickGameButton: !O,
                    showAdminGuildPicker: I
                }),
            [O, I]
        ),
        H = (0, l.e7)([v.Z], () => v.Z.getSavedGuilds().length),
        V = r.useMemo(
            () => [
                {
                    id: T.v0.DISCOVERY,
                    label: Z.intl.string(Z.t.Gw35HR)
                },
                {
                    id: T.v0.SAVED_GUILDS,
                    label: Z.intl.string(Z.t['WK/pEh']),
                    count: H
                }
            ],
            [H]
        ),
        F = (0, T.GN)((e) => e.mode, a.Z),
        { enableClanCreation: z } = (0, d.C3)({
            location: 'ClanDiscoveryContent',
            includeConverted: !0
        }),
        Y = (0, T.GN)((e) => e.dismissedPilotAdminNux),
        W = r.useMemo(() => !z || Y, [Y, z]);
    return (
        (t =
            null != j && null != k
                ? (0, i.jsxs)(p.Z, {
                      title: Z.intl.formatToPlainString(Z.t.kYjB7e, { gameName: k }),
                      description: Z.intl.format(Z.t.PwNiSE, { gameName: k }),
                      button: (0, i.jsx)(s.Button, {
                          className: y.heroButton,
                          innerClassName: y.heroButtonInner,
                          look: s.ButtonLooks.FILLED,
                          size: s.ButtonSizes.MEDIUM,
                          color: s.ButtonColors.WHITE,
                          onClick: () => (0, T.fH)(T.v0.PREFERENCES),
                          children: (0, i.jsx)(s.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: Z.intl.string(Z.t['SfO+xs'])
                          })
                      }),
                      children: [
                          (0, i.jsx)(m.Z, {}),
                          (0, i.jsx)('div', {
                              className: y.gameArt,
                              style: { backgroundImage: 'url("'.concat(w, '")') }
                          }),
                          (0, i.jsx)('div', { className: y.imageBackdrop })
                      ]
                  })
                : A
                  ? (0, i.jsx)(x.Z, {})
                  : (0, i.jsx)(p.Z, {
                        title: Z.intl.formatToPlainString(Z.t['l8D/Oz'], {}),
                        description: O ? Z.intl.string(Z.t.JWBE0d) : Z.intl.string(Z.t['b+qgxc']),
                        button: B,
                        children: (0, i.jsx)(m.Z, {})
                    })),
        (0, i.jsxs)(_.Z, {
            ref: P,
            onScroll: h,
            children: [
                t,
                (0, i.jsxs)(g.Z, {
                    children: [
                        W &&
                            (0, i.jsxs)('div', {
                                className: y.contentTabs,
                                ref: R,
                                children: [
                                    (0, i.jsx)(f.Z, {
                                        tabs: V,
                                        onTabSelect: T.fH,
                                        selectedTab: F
                                    }),
                                    F !== T.v0.SAVED_GUILDS && (0, i.jsx)(N.C, {})
                                ]
                            }),
                        (0, i.jsx)(b.ZP, {
                            width: n,
                            onUpdatePage: G,
                            paddingHorizontal: c,
                            paddingVertical: o,
                            variant: u
                        })
                    ]
                })
            ]
        })
    );
});
