"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("920906"),
  i = n("143927"),
  r = n("442837"),
  o = n("481060"),
  u = n("607070"),
  d = n("950279"),
  c = n("741595"),
  f = n("754961"),
  E = n("359380"),
  h = n("207796"),
  _ = n("316553"),
  C = n("689938"),
  m = n("297344");
let S = {
  mass: 1,
  tension: 600,
  friction: 60
};

function p(e) {
  let {
    currentStep: t,
    selectedGame: n
  } = e, l = (0, _.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), r = (0, h.useClanDiscoveryUIStore)(e => e.selectedGames, i.default), u = (0, h.useClanDiscoveryUIStore)(e => e.setSelectedGames, i.default), f = s.useMemo(() => new Set(r), [r]), S = (0, h.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default), p = (0, h.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, i.default), I = (0, h.useClanDiscoveryUIStore)(e => e.selectedTraits, i.default), T = (0, h.useClanDiscoveryUIStore)(e => e.setSelectedTraits, i.default), A = s.useMemo(() => new Set(I), [I]), N = s.useCallback(e => u(Array.from(e)), [u]), v = s.useCallback(e => p(e), [p]), R = s.useCallback(e => T([...e]), [T]), O = s.useCallback(() => {
    switch (t) {
      case 0:
        return (0, a.jsx)(d.default, {
          title: C.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: C.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: l,
          handleUpdate: N,
          gameApplicationIds: f
        });
      case 1:
        return (0, a.jsx)(c.default, {
          title: C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: C.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: v,
          playstyle: S
        });
      case 2:
        return (0, a.jsx)(E.default, {
          title: C.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: C.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: R,
          interests: A,
          requiredGameId: l,
          hidePreview: !0
        })
    }
  }, [t, l, N, f, v, S, R, A]);
  return (0, a.jsx)(o.Sequencer, {
    step: t,
    steps: g,
    sideMargin: 24,
    verticalMargin: 24,
    className: m.sequencer,
    innerClassName: m.sequencer,
    animatedNodeClassName: m.sequencer,
    children: (0, a.jsx)(o.ScrollerThin, {
      className: m.scroller,
      fade: !0,
      children: (0, a.jsx)("div", {
        className: m.stepsContainer,
        children: O()
      })
    })
  })
}
let g = [0, 1, 2];
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: n
  } = e, o = s.useRef(null), d = s.useRef(null), c = (0, r.useStateFromStores)([u.default], () => u.default.useReducedMotion), [E, _] = s.useState(0), [g, I] = s.useState(0), T = (0, h.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, i.default), A = (0, h.useClanDiscoveryUIStore)(e => e.previousMode, i.default), N = s.useCallback(e => {
    _(e), g < e && I(e)
  }, [g]), v = s.useCallback(() => {
    0 === E ? (n(h.ClanDiscoveryUserScreens.USER_UPSELL), (0, h.setClanDiscoveryMode)(A)) : N(E - 1)
  }, [E, A, n, N]), R = s.useCallback(() => {
    2 === E ? (0, h.setClanDiscoveryMode)(h.ClanDiscoveryMode.DISCOVERY) : N(E + 1)
  }, [E, N]), O = s.useMemo(() => 1 === E && null == T, [T, E]), L = s.useMemo(() => [{
    index: 0,
    name: C.default.Messages.CLAN_SETUP_GAMES_STEP
  }, {
    index: 1,
    name: C.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
  }, {
    index: 2,
    name: C.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }], []), M = (0, l.useSpring)({
    ref: o,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    },
    config: S
  }), y = (0, l.useSpring)({
    ref: d,
    from: {
      opacity: 0,
      transform: c ? "translateY(0px)" : "translateY(40px)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0px)"
    },
    config: S
  });
  return (0, l.useChain)([o, d], [0, .2]), (0, a.jsxs)(l.animated.div, {
    className: m.container,
    style: M,
    children: [(0, a.jsx)(l.animated.div, {
      className: m.sequencer,
      style: y,
      children: (0, a.jsx)(p, {
        currentStep: E,
        selectedGame: t
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: m.footer,
      children: [(0, a.jsx)(f.ClanSetupProgress, {
        currentStepIndex: E,
        steps: L,
        furthestStepIndex: g,
        onStepClick: N
      }), (0, a.jsx)(f.ClanSetupProgressButtons, {
        className: m.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: O,
        onNextClick: R,
        onBackClick: v
      })]
    })]
  })
})