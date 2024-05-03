"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("143927"),
  i = n("481060"),
  r = n("950279"),
  o = n("741595"),
  u = n("754961"),
  d = n("359380"),
  c = n("207796"),
  f = n("316553"),
  E = n("689938"),
  h = n("713125");

function _(e) {
  let {
    currentStep: t,
    selectedGame: n
  } = e, u = (0, f.useDiscoveryGameApplicationId)({
    selectedGame: n
  }), _ = (0, c.useClanDiscoveryUIStore)(e => e.selectedGames, l.default), S = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedGames, l.default), m = s.useMemo(() => new Set(_), [_]), p = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), I = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedPlaystyle, l.default), T = (0, c.useClanDiscoveryUIStore)(e => e.selectedTraits, l.default), g = (0, c.useClanDiscoveryUIStore)(e => e.setSelectedTraits, l.default), A = s.useMemo(() => new Set(T), [T]), N = s.useCallback(e => S(Array.from(e)), [S]), v = s.useCallback(e => I(e), [I]), R = s.useCallback(e => g([...e]), [g]), L = s.useCallback(() => {
    switch (t) {
      case 0:
        return (0, a.jsx)(r.default, {
          title: E.default.Messages.CLAN_DISCOVERY_GAME_TITLE,
          description: E.default.Messages.CLAN_DISCOVERY_GAME_SUBTITLE,
          requiredGameId: u,
          handleUpdate: N,
          gameApplicationIds: m
        });
      case 1:
        return (0, a.jsx)(o.default, {
          title: E.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_TITLE,
          description: E.default.Messages.CLAN_DISCOVERY_PLAYSTYLE_SUBTITLE,
          handleUpdate: v,
          playstyle: p
        });
      case 2:
        return (0, a.jsx)(d.default, {
          title: E.default.Messages.CLAN_DISCOVERY_TRAIT_TITLE,
          description: E.default.Messages.CLAN_DISCOVERY_TRAIT_SUBTITLE,
          handleUpdate: R,
          interests: A,
          requiredGameId: u
        })
    }
  }, [t, u, N, m, v, p, R, A]);
  return (0, a.jsx)(i.Sequencer, {
    step: t,
    steps: C,
    sideMargin: 24,
    verticalMargin: 24,
    className: h.sequencer,
    innerClassName: h.sequencer,
    animatedNodeClassName: h.sequencer,
    children: (0, a.jsx)(i.ScrollerThin, {
      className: h.scroller,
      fade: !0,
      children: (0, a.jsx)("div", {
        className: h.stepsContainer,
        children: L()
      })
    })
  })
}
let C = [0, 1, 2];
t.default = s.memo(function(e) {
  let {
    selectedGame: t,
    setScreen: n
  } = e, [i, r] = s.useState(0), [o, d] = s.useState(0), f = (0, c.useClanDiscoveryUIStore)(e => e.setMode, l.default), C = (0, c.useClanDiscoveryUIStore)(e => e.selectedPlaystyle, l.default), S = s.useCallback(e => {
    r(e), o < e && d(e)
  }, [o]), m = s.useCallback(() => {
    0 === i ? n(c.ClanDiscoveryUserScreens.USER_UPSELL) : S(i - 1)
  }, [i, n, S]), p = s.useCallback(() => {
    2 === i ? f(c.ClanDiscoveryMode.DISCOVERY) : S(i + 1)
  }, [f, i, S]), I = s.useMemo(() => 1 === i && null == C, [C, i]), T = s.useMemo(() => [{
    index: 0,
    name: E.default.Messages.CLAN_SETUP_GAMES_STEP
  }, {
    index: 1,
    name: E.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP
  }, {
    index: 2,
    name: E.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }], []);
  return (0, a.jsxs)("div", {
    className: h.container,
    children: [(0, a.jsx)(_, {
      currentStep: i,
      selectedGame: t
    }), (0, a.jsxs)("div", {
      className: h.footer,
      children: [(0, a.jsx)(u.ClanSetupProgress, {
        currentStepIndex: i,
        steps: T,
        furthestStepIndex: o,
        onStepClick: S
      }), (0, a.jsx)(u.ClanSetupProgressButtons, {
        className: h.footerButtons,
        isBackDisabled: !1,
        isNextDisabled: I,
        onNextClick: p,
        onBackClick: m
      })]
    })]
  })
})