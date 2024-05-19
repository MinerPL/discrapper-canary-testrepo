"use strict";
n.r(t), n.d(t, {
  ClanDiscoveryUserUpsellBackgroundRings: function() {
    return I
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("100527"),
  d = n("970606"),
  c = n("231467"),
  f = n("207796"),
  E = n("436137"),
  h = n("316553"),
  _ = n("559469"),
  C = n("689938"),
  m = n("531612");
let S = {
    mass: 1,
    tension: 600,
    friction: 60
  },
  p = {
    from: {
      transform: "translateY(40px) scale(0.9)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px) scale(1)",
      opacity: 1
    },
    config: S
  },
  g = {
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: S
  };

function I() {
  let e = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion),
    t = s.useRef(null),
    n = s.useRef(null),
    r = s.useRef(null),
    u = (0, l.useSpring)({
      ref: t,
      ...g
    }),
    d = (0, l.useSpring)({
      ref: n,
      ...g
    }),
    c = (0, l.useSpring)({
      ref: r,
      ...g
    });
  return (0, l.useChain)([t, n, r], [.8, .9, 1]), (0, a.jsx)("div", {
    className: m.backgroundContainer,
    children: (0, a.jsxs)("div", {
      className: m.ringsContainer,
      children: [(0, a.jsx)(l.animated.div, {
        className: m.ringOuter,
        style: e ? void 0 : c
      }), (0, a.jsx)(l.animated.div, {
        className: m.ringMiddle,
        style: e ? void 0 : d
      }), (0, a.jsx)(l.animated.div, {
        className: m.ringInner,
        style: e ? void 0 : u
      })]
    })
  })
}
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    onClick: n
  } = e, g = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), I = s.useRef(null), T = s.useRef(null), A = s.useRef(null), N = s.useRef(null), v = s.useRef(null), R = s.useRef(null), O = (0, h.useDiscoveryGameApplicationId)({
    selectedGame: t
  }), L = (0, _.useFakeDiscoveryUpsellClans)(O), M = (0, l.useSpring)({
    ref: I,
    ...p
  }), y = (0, l.useSpring)({
    ref: T,
    ...p
  }), P = (0, l.useSpring)({
    ref: A,
    ...p
  }), x = (0, l.useSpring)({
    ref: N,
    ...p
  }), D = (0, l.useSpring)({
    ref: v,
    ...p
  }), b = (0, l.useSpring)({
    ref: R,
    from: {
      transform: "translateY(40px)",
      opacity: 0
    },
    to: {
      transform: "translateY(0px)",
      opacity: 1
    },
    config: S
  });
  (0, l.useChain)([I, T, A, N, v, R], [.1, .2, .3, .4, .5, 1]), s.useEffect(() => {
    (0, d.trackClanUserInviteViewed)({
      location: u.default.CLAN_DISCOVERY
    })
  }, []);
  let [U, j] = s.useMemo(() => {
    switch (t) {
      case f.ClanDiscoveryGame.GENSHIN:
        return [C.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE, C.default.Messages.CLAN_DISCOVERY_UPSELL_GENSHIN_SUBTITLE];
      case f.ClanDiscoveryGame.VALORANT:
        return [C.default.Messages.CLAN_DISCOVERY_UPSELL_TITLE, C.default.Messages.CLAN_DISCOVERY_UPSELL_VALORANT_SUBTITLE]
    }
  }, [t]);
  return (0, a.jsxs)("div", {
    className: m.upsellContainer,
    children: [(0, a.jsx)("div", {
      className: m.cardsContainer,
      children: (0, a.jsxs)("div", {
        className: m.cards,
        children: [(0, a.jsx)(l.animated.div, {
          className: m.clanCardOuterContainer,
          style: g ? void 0 : x,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[0],
            className: m.clanCardOuterLeft
          })
        }), (0, a.jsx)(l.animated.div, {
          className: m.clanCardInnerContainer,
          style: g ? void 0 : y,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[1],
            className: m.clanCardInnerLeft
          })
        }), (0, a.jsx)(l.animated.div, {
          className: m.clanCardCenterContainer,
          style: g ? void 0 : M,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[4],
            className: m.clanCardCenter
          })
        }), (0, a.jsx)(l.animated.div, {
          className: m.clanCardInnerContainer,
          style: g ? void 0 : P,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[2],
            className: m.clanCardInnerRight
          })
        }), (0, a.jsx)(l.animated.div, {
          className: m.clanCardOuterContainer,
          style: g ? void 0 : D,
          children: (0, a.jsx)(c.ClanDiscoveryCardView, {
            clan: L[3],
            className: m.clanCardOuterRight
          })
        })]
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: m.upsellDetails,
      style: g ? void 0 : b,
      children: [(0, a.jsx)(r.Heading, {
        className: m.upsellTitle,
        color: "header-primary",
        variant: "heading-xxl/semibold",
        children: U
      }), (0, a.jsx)(r.Text, {
        className: m.upsellSubtitle,
        color: "header-secondary",
        variant: "text-md/medium",
        children: j
      }), (0, a.jsx)(E.default, {
        onClick: n,
        children: C.default.Messages.CHECK_IT_OUT
      })]
    })]
  })
})