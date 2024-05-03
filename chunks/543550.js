"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return R
  },
  ClanDiscoveryUserContainer: function() {
    return v
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("442837"),
  d = n("780384"),
  c = n("963202"),
  f = n("430824"),
  E = n("626135"),
  h = n("792125"),
  _ = n("769727"),
  C = n("207796"),
  S = n("497189"),
  m = n("304231"),
  p = n("526282"),
  I = n("802001"),
  T = n("981631"),
  g = n("231338"),
  A = n("495257");

function N(e) {
  let {
    children: t,
    selectedGame: n,
    className: l
  } = e, r = s.useMemo(() => {
    switch (n) {
      case C.ClanDiscoveryGame.GENSHIN:
        return A.genshinBackgroundImage;
      case C.ClanDiscoveryGame.VALORANT:
        return A.valorantBackgroundImage
    }
  }, [n]), o = (0, h.getThemeClass)(g.ThemeTypes.DARK);
  return (0, a.jsx)(d.ThemeContextProvider, {
    theme: g.ThemeTypes.DARK,
    children: (0, a.jsx)("div", {
      className: i()(r, l, o),
      children: t
    })
  })
}

function v() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, C.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, C.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      E.default.track(T.AnalyticEvents.CLAN_DISCOVERY_USER_NUX_CLICKED), n(C.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]);
  switch (t) {
    case C.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: A.upsellScroller,
          fade: !0,
          children: (0, a.jsx)(N, {
            selectedGame: e,
            className: A.userUpsell,
            children: (0, a.jsx)(p.default, {
              selectedGame: e,
              onClick: l
            })
          })
        })
      });
    case C.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: A.container,
        children: (0, a.jsx)(N, {
          selectedGame: e,
          className: A.userOnboarding,
          children: (0, a.jsx)(m.default, {
            selectedGame: e,
            setScreen: n
          })
        })
      })
  }
}

function R() {
  let e = (0, C.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, C.useClanDiscoveryUIStore)(e => e.setMode, r.default),
    n = (0, u.useStateFromStoresArray)([f.default], () => Object.values(f.default.getGuilds())),
    l = (0, c.useAnyClanPrepilotExperimentEnabled)(n, "clan_discovery_admin_upsell"),
    i = (0, I.useGuildsEligibleForClanConversion)();
  return (s.useEffect(() => {
    (!l || 0 === i.length && l) && t(C.ClanDiscoveryMode.GET_STARTED)
  }, [i.length, l, t]), 0 === i.length) ? null : (0, a.jsx)("div", {
    className: A.container,
    children: (0, a.jsxs)(o.ScrollerThin, {
      className: A.upsellScroller,
      fade: !0,
      children: [(0, a.jsx)(N, {
        selectedGame: e,
        className: A.adminUpsell,
        children: (0, a.jsx)(S.default, {
          selectedGame: e,
          eligibleGuilds: i
        })
      }), (0, a.jsx)(_.ClanDiscoveryTopPicks, {
        limit: 10
      })]
    })
  })
}