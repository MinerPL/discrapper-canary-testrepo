"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryAdminContainer: function() {
    return N
  },
  ClanDiscoveryUserContainer: function() {
    return A
  }
});
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("143927"),
  o = n("597312"),
  u = n("393238"),
  d = n("410030"),
  c = n("100527"),
  f = n("970606"),
  E = n("353093"),
  h = n("769727"),
  _ = n("207796"),
  C = n("497189"),
  m = n("304231"),
  S = n("526282"),
  p = n("878241"),
  g = n("981631"),
  I = n("424023");
let T = (e, t) => {
  switch (e) {
    case _.ClanDiscoveryGame.GENSHIN:
      return t === g.ThemeTypes.DARK ? I.genshinUpsellBackgroundImageDark : I.genshinUpsellBackgroundImageLight;
    case _.ClanDiscoveryGame.VALORANT:
      return t === g.ThemeTypes.DARK ? I.valorantUpsellBackgroundImageDark : I.valorantUpsellBackgroundImageLight
  }
};

function A() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, _.useClanDiscoveryUIStore)(e => e.userUpsellScreen, r.default),
    n = (0, _.useClanDiscoveryUIStore)(e => e.setUserUpsellScreen, r.default),
    l = s.useCallback(() => {
      (0, f.trackClanUserInviteClicked)({
        location: c.default.CLAN_DISCOVERY
      }), n(_.ClanDiscoveryUserScreens.USER_ONBOARDING)
    }, [n]),
    u = (0, d.default)(),
    E = s.useMemo(() => T(e, u), [e, u]),
    h = s.useMemo(() => {
      switch (e) {
        case _.ClanDiscoveryGame.GENSHIN:
          return u === g.ThemeTypes.DARK ? I.genshinOnboardingBackgroundImageDark : I.genshinOnboardingBackgroundImageLight;
        case _.ClanDiscoveryGame.VALORANT:
          return u === g.ThemeTypes.DARK ? I.valorantOnboardingBackgroundImageDark : I.valorantOnboardingBackgroundImageLight
      }
    }, [e, u]);
  switch (t) {
    case _.ClanDiscoveryUserScreens.USER_UPSELL:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: I.upsellScroller,
          fade: !0,
          children: (0, a.jsxs)("div", {
            className: i()(E, I.userUpsell),
            children: [(0, a.jsx)("div", {
              className: I.backgroundImageBlur
            }), (0, a.jsxs)("div", {
              className: I.backgroundImageContent,
              children: [(0, a.jsx)(S.ClanDiscoveryUserUpsellBackgroundRings, {}), (0, a.jsx)(S.default, {
                selectedGame: e,
                onClick: l
              })]
            })]
          })
        })
      });
    case _.ClanDiscoveryUserScreens.USER_ONBOARDING:
      return (0, a.jsx)("div", {
        className: I.container,
        children: (0, a.jsxs)("div", {
          className: i()(h, I.userOnboarding),
          children: [(0, a.jsx)("div", {
            className: I.backgroundImageBlur
          }), (0, a.jsx)("div", {
            className: I.backgroundImageContent,
            children: (0, a.jsx)(m.default, {
              selectedGame: e,
              setScreen: n
            })
          })]
        })
      })
  }
}

function N() {
  let e = (0, _.useClanDiscoveryUIStore)(e => e.game, r.default),
    t = (0, p.useGuildsEligibleForClan)({
      location: "ClanDiscoveryAdminContainer"
    }),
    n = s.useMemo(() => t.filter(e => !(0, E.isGuildAClan)(e)), [t]),
    {
      ref: l,
      width: c
    } = (0, u.default)(),
    f = (0, d.default)(),
    m = s.useMemo(() => T(e, f), [e, f]);
  return 0 === t.length ? null : (0, a.jsx)("div", {
    className: I.container,
    ref: l,
    children: (0, a.jsxs)(o.ScrollerNone, {
      className: I.upsellScroller,
      fade: !0,
      children: [(0, a.jsxs)("div", {
        className: i()(m, I.adminUpsell),
        children: [(0, a.jsx)("div", {
          className: I.backgroundImageBlur
        }), (0, a.jsx)("div", {
          className: I.backgroundImageContent,
          children: (0, a.jsx)(C.default, {
            selectedGame: e,
            eligibleGuilds: n,
            eligibleGuildsIncludingConverted: t
          })
        })]
      }), (0, a.jsx)(h.ClanDiscoveryTopPicks, {
        width: null != c ? c : 1024,
        limit: 10
      })]
    })
  })
}