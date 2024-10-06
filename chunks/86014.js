n(47120);
var i = n(735250),
    a = n(470079),
    s = n(120356),
    r = n.n(s),
    l = n(143927),
    o = n(442837),
    c = n(481060),
    d = n(224706),
    u = n(100527),
    _ = n(812206),
    E = n(970606),
    h = n(963202),
    m = n(650461),
    I = n(603839),
    p = n(669764),
    g = n(322665),
    T = n(17845),
    f = n(374939),
    S = n(283293),
    C = n(84615),
    N = n(207796),
    A = n(895068),
    v = n(308083),
    Z = n(689938),
    L = n(641388);
function R(e) {
    let { showPickGameButton: t, showAdminGuildPicker: n, inGlobalDiscovery: s } = e,
        { guilds: l } = (0, h.C3)({
            location: 'ClanDiscoveryContentCtaContent',
            includeConverted: !1
        }),
        [o, d] = a.useState(() => {
            var e;
            let t = new Set(m.ZP.getGuildIds());
            for (let e of l) if (t.has(e.id)) return e.id;
            return null === (e = l[0]) || void 0 === e ? void 0 : e.id;
        }),
        _ = a.useMemo(
            () =>
                l.map((e) => ({
                    value: e.id,
                    label: e.name
                })),
            [l]
        ),
        p = n && l.length > 0,
        g = a.useCallback(() => {
            (0, E._9)({
                guildId: o,
                location: s ? u.Z.GLOBAL_DISCOVERY : u.Z.CLAN_DISCOVERY
            }),
                (0, C.q4)(
                    (e) => {
                        let { closeLayer: t } = e;
                        return (0, i.jsx)(I.Z, {
                            onClose: t,
                            guildId: o
                        });
                    },
                    { layerKey: v.Pv }
                );
        }, [o, s]),
        T = a.useMemo(
            () =>
                t
                    ? (0, i.jsx)('div', {
                          children: (0, i.jsxs)(c.Button, {
                              look: c.ButtonLooks.FILLED,
                              size: c.ButtonSizes.LARGE,
                              color: p ? c.ButtonColors.TRANSPARENT : c.ButtonColors.BRAND,
                              className: L.heroButton,
                              innerClassName: L.heroButtonInner,
                              onClick: () => {
                                  (0, E.GS)({ location: s ? u.Z.GLOBAL_DISCOVERY : u.Z.CLAN_DISCOVERY }), (0, N.fH)(N.v0.GET_STARTED);
                              },
                              children: [
                                  (0, i.jsx)(c.Text, {
                                      variant: 'text-md/medium',
                                      color: 'none',
                                      children: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_USER_CTA
                                  }),
                                  (0, i.jsx)(c.ArrowSmallRightIcon, { color: 'currentColor' })
                              ]
                          })
                      })
                    : null,
            [t, p, s]
        ),
        f = a.useMemo(
            () =>
                n && l.length > 0
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [
                              l.length > 0 &&
                                  (0, i.jsx)(c.SearchableSelect, {
                                      className: L.upsellSelect,
                                      value: o,
                                      options: _,
                                      onChange: d
                                  }),
                              (0, i.jsx)('div', {
                                  children: (0, i.jsx)(c.Button, {
                                      look: c.ButtonLooks.FILLED,
                                      size: c.ButtonSizes.MEDIUM,
                                      color: c.ButtonColors.BRAND,
                                      className: L.heroButton,
                                      onClick: g,
                                      children: (0, i.jsx)(c.Text, {
                                          variant: 'text-sm/medium',
                                          color: 'always-white',
                                          children: Z.Z.Messages.CLAN_DISCOVERY_UPSELL_ADMIN_LIST_SERVER
                                      })
                                  })
                              })
                          ]
                      })
                    : null,
            [n, l.length, _, o, g]
        );
    return (0, i.jsxs)('div', {
        className: r()(L.contentCtaContainer, { [L.contentCtaContainerSpacing]: !s }),
        children: [f, T]
    });
}
t.Z = a.memo(function (e) {
    var t, n;
    let s,
        { width: u, paddingVertical: E = 16, paddingHorizontal: h = 32, variant: m = A.Bj.DEFAULT, onScroll: I, withAdminContent: C = !1, inGlobalDiscovery: v } = e,
        O = a.useRef(null),
        x = (0, N.GN)((e) => e.completedNux, l.Z),
        b = (0, N.GN)((e) => e.entrypointGameId, l.Z),
        M = (0, o.e7)([_.Z], () => (null != b ? _.Z.getApplication(b) : null)),
        P = (0, o.e7)([p.Z], () => (null != b ? p.Z.getGame(b) : null));
    a.useEffect(() => {
        null != b && null == P && d.Z.getDetectableGamesSupplemental([b]);
    }, [b, P]);
    let D = a.useCallback(() => {
            var e;
            null === (e = O.current) || void 0 === e || e.scrollToTop();
        }, []),
        y = a.useMemo(
            () =>
                (0, i.jsx)(R, {
                    inGlobalDiscovery: v,
                    showPickGameButton: !x,
                    showAdminGuildPicker: C
                }),
            [x, C, v]
        ),
        j = a.useMemo(() => {
            if (null == P) return '';
            let { artwork: e, screenshots: t } = P;
            if (e.length > 0) {
                let t = Math.floor(Math.random() * (e.length - 1));
                return e[t];
            }
            if (t.length > 0) {
                let e = Math.floor(Math.random() * (t.length - 1));
                return t[e];
            }
            return '';
        }, [P]),
        U = null !== (n = null !== (t = null == P ? void 0 : P.name) && void 0 !== t ? t : null == M ? void 0 : M.name) && void 0 !== n ? n : '';
    return (
        (s =
            null != b && (null != P || null != M)
                ? (0, i.jsxs)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: r()(L.globalDiscoveryTitle, L.customDiscoveryTitle),
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_HEADER.format({ gameName: U })
                      }),
                      description: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_SUBHEADER.format({ gameName: U }),
                      button: (0, i.jsx)(c.Button, {
                          className: L.heroButton,
                          innerClassName: L.heroButtonInner,
                          look: c.ButtonLooks.FILLED,
                          size: c.ButtonSizes.MEDIUM,
                          color: c.ButtonColors.WHITE,
                          onClick: () => (0, N.fH)(N.v0.PREFERENCES),
                          children: (0, i.jsx)(c.Text, {
                              variant: 'text-md/medium',
                              color: 'none',
                              children: Z.Z.Messages.DISCOVERY_FIND_GAMING_GUILD_CTA
                          })
                      }),
                      children: [
                          (0, i.jsx)(g.Z, {}),
                          (0, i.jsx)('div', {
                              className: L.gameArt,
                              style: { backgroundImage: 'url("'.concat(j, '")') }
                          }),
                          (0, i.jsx)('div', { className: L.imageBackdrop })
                      ]
                  })
                : (0, i.jsx)(T.Z, {
                      title: (0, i.jsx)(c.Text, {
                          className: L.globalDiscoveryTitle,
                          variant: 'display-lg',
                          color: 'header-primary',
                          children: Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_TITLE_2.format({})
                      }),
                      description: x ? Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION_NUX_COMPLETED : Z.Z.Messages.GLOBAL_DISCOVERY_SERVERS_GUILDS_HERO_DESCRIPTION,
                      button: y,
                      children: (0, i.jsx)(g.Z, {})
                  })),
        (0, i.jsxs)(S.Z, {
            ref: O,
            onScroll: I,
            children: [
                s,
                (0, i.jsx)(f.Z, {
                    children: (0, i.jsx)(A.ZP, {
                        width: u,
                        onUpdatePage: D,
                        paddingHorizontal: h,
                        paddingVertical: E,
                        variant: m
                    })
                })
            ]
        })
    );
});
