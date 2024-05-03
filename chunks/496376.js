"use strict";
n.r(t), n.d(t, {
  getClanSetupProgressSteps: function() {
    return M
  }
}), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("120356"),
  i = n.n(l),
  r = n("442837"),
  o = n("481060"),
  u = n("224706"),
  d = n("607070"),
  c = n("132580"),
  f = n("246364"),
  E = n("931240"),
  h = n("650461"),
  _ = n("620929"),
  C = n("94963"),
  S = n("745628"),
  m = n("950279"),
  p = n("796918"),
  I = n("513532"),
  T = n("741595"),
  g = n("754961"),
  A = n("974842"),
  N = n("359380"),
  v = n("308083"),
  R = n("689938"),
  L = n("156610");
let O = [v.ClanSetupSteps.GAMES, v.ClanSetupSteps.PLAYSTYLE, v.ClanSetupSteps.UTILITY_TRAITS, v.ClanSetupSteps.INTERESTS, v.ClanSetupSteps.DESCRIPTION, v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE, v.ClanSetupSteps.CUSTOMIZE_BANNER, v.ClanSetupSteps.MEMBER_APPLICATION];

function M(e) {
  return [{
    index: v.ClanSetupSteps.GAMES,
    name: R.default.Messages.CLAN_SETUP_GAMES_STEP,
    hasError: (null == e ? void 0 : e.gameApplicationIds) != null
  }, {
    index: v.ClanSetupSteps.PLAYSTYLE,
    name: R.default.Messages.CLAN_SETUP_PLAYSTYLE_STEP,
    hasError: (null == e ? void 0 : e.playstyle) != null
  }, {
    index: v.ClanSetupSteps.UTILITY_TRAITS,
    name: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_STEP
  }, {
    index: v.ClanSetupSteps.INTERESTS,
    name: R.default.Messages.CLAN_SETUP_INTERESTS_STEP,
    hasError: (null == e ? void 0 : e.interests) != null
  }, {
    index: v.ClanSetupSteps.DESCRIPTION,
    name: R.default.Messages.CLAN_SETUP_DESCRIPTION_STEP,
    hasError: (null == e ? void 0 : e.description) != null || (null == e ? void 0 : e.wildcardDescriptors) != null
  }, {
    index: v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE,
    name: R.default.Messages.CLAN_SETUP_TAG_STEP,
    hasError: (null == e ? void 0 : e.tag) != null || (null == e ? void 0 : e.badgeKind) != null || (null == e ? void 0 : e.badgePrimaryColor) != null || (null == e ? void 0 : e.badgeSecondaryColor) != null
  }, {
    index: v.ClanSetupSteps.CUSTOMIZE_BANNER,
    name: R.default.Messages.CLAN_SETUP_BANNER_STEP,
    hasError: (null == e ? void 0 : e.banner) != null || (null == e ? void 0 : e.brandPrimaryColor) != null || (null == e ? void 0 : e.brandSecondaryColor) != null
  }, {
    index: v.ClanSetupSteps.MEMBER_APPLICATION,
    name: R.default.Messages.CLAN_SETUP_APPLICATIONS_STEP,
    hasError: (null == e ? void 0 : e.verificationForm) != null
  }]
}
let P = e => {
  let {
    progress: t,
    setCurrentStep: n,
    onLastStep: l,
    errors: i
  } = e, {
    currentStep: r,
    gameApplicationIds: u,
    playstyle: d,
    interests: E,
    description: h,
    tag: _,
    verificationForm: C,
    furthestStep: S,
    brandPrimaryColor: m
  } = t, p = s.useMemo(() => null != C && C.formFields.some(e => !(0, f.isTermsFormField)(e)), [C]), I = s.useMemo(() => Array.from(E).filter(e => !v.ALL_TRAITS_SET.has(e) && !v.LANGUAGES_SET.has(e)), [E]), T = s.useMemo(() => {
    switch (r) {
      case v.ClanSetupSteps.GAMES:
        return 0 === u.size;
      case v.ClanSetupSteps.PLAYSTYLE:
        return d === v.ClanPlaystyles.NONE;
      case v.ClanSetupSteps.INTERESTS:
        return I.length < 3;
      case v.ClanSetupSteps.DESCRIPTION:
        return 0 === h.length;
      case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
        return _.length < 2;
      case v.ClanSetupSteps.MEMBER_APPLICATION:
        return !p;
      default:
        return !1
    }
  }, [r, h.length, u.size, p, I.length, d, _.length]), A = 0 === r, N = s.useCallback(() => {
    r === O.length - 1 ? l() : n(r + 1)
  }, [r, l, n]), R = s.useCallback(() => {
    n(r - 1)
  }, [r, n]), P = s.useCallback(e => {
    n(e)
  }, [n]), y = s.useMemo(() => M(i), [i]);
  return (0, a.jsxs)("div", {
    className: L.footer,
    children: [(0, a.jsx)(g.ClanSetupProgress, {
      steps: y,
      currentStepIndex: r,
      furthestStepIndex: S,
      onStepClick: P,
      stepFillColor: m
    }), (0, a.jsx)(g.ClanSetupProgressButtons, {
      className: L.footerButtons,
      isBackDisabled: A,
      isNextDisabled: T,
      onNextClick: N,
      onBackClick: R,
      nextButtonBackgroundColor: m,
      children: (0, a.jsxs)("div", {
        className: L.footerAlphaMsg,
        children: [(0, a.jsx)(c.default, {
          className: L.footerAlphaTag
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: "This is currently in Alpha, use test servers only!"
        })]
      })
    })]
  })
};
t.default = e => {
  let {
    guildId: t,
    setPage: n,
    onClose: l
  } = e, {
    progress: c,
    errors: f
  } = (0, r.useStateFromStoresObject)([h.default], () => {
    var e;
    let n = h.default.getStateForGuild(t);
    return {
      progress: null !== (e = n.progress) && void 0 !== e ? e : h.DEFAULT_CLAN_PROGRESS,
      errors: n.errors
    }
  }), {
    requiredGameId: g,
    gameApplicationIds: M,
    playstyle: y,
    interests: x,
    description: D,
    tag: b,
    currentStep: U,
    furthestStep: j
  } = c, G = (0, r.useStateFromStores)([d.default], () => d.default.useReducedMotion), [w, k] = s.useState(!0);
  s.useEffect(() => {
    u.default.getDetectableGames()
  }, []);
  let F = s.useCallback(e => E.updateClanSetup(t, {
      currentStep: e,
      furthestStep: null == j || e > j ? e : j
    }), [t, j]),
    B = s.useCallback(e => E.updateClanSetup(t, e), [t]),
    H = s.useCallback(e => B({
      gameApplicationIds: e
    }), [B]),
    V = s.useCallback(e => B({
      playstyle: e
    }), [B]),
    Y = s.useCallback(e => B({
      interests: e
    }), [B]),
    W = s.useCallback(() => {
      k(!1), setTimeout(() => n(v.ClanSetupModalPages.SIGN), 199)
    }, [n]);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(o.Button, {
      className: L.closeButton,
      look: o.Button.Looks.OUTLINED,
      size: o.Button.Sizes.MEDIUM,
      color: o.Button.Colors.PRIMARY,
      onClick: l,
      children: R.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsxs)("div", {
      className: i()(L.mainContent, L.fadeIn, {
        [L.fadeOut]: !w
      }),
      children: [(0, a.jsx)(o.Sequencer, {
        step: U,
        steps: O,
        sideMargin: 24,
        verticalMargin: 24,
        className: L.sequencer,
        innerClassName: L.sequencer,
        animatedNodeClassName: L.sequencer,
        children: (0, a.jsx)(o.ScrollerThin, {
          className: L.scroller,
          fade: !0,
          children: (() => {
            switch (U) {
              case v.ClanSetupSteps.GAMES:
                return (0, a.jsx)(m.default, {
                  title: R.default.Messages.CLAN_SETUP_GAMES_TITLE,
                  description: R.default.Messages.CLAN_SETUP_GAMES_SUBTITLE,
                  handleUpdate: H,
                  gameApplicationIds: M,
                  requiredGameId: g,
                  error: null == f ? void 0 : f.gameApplicationIds
                });
              case v.ClanSetupSteps.PLAYSTYLE:
                return (0, a.jsx)(T.default, {
                  title: R.default.Messages.CLAN_SETUP_PLAYSTYLE_TITLE,
                  description: R.default.Messages.CLAN_SETUP_PLAYSTYLE_SUBTITLE,
                  handleUpdate: V,
                  playstyle: y,
                  error: null == f ? void 0 : f.playstyle
                });
              case v.ClanSetupSteps.UTILITY_TRAITS:
                return (0, a.jsx)(N.default, {
                  title: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_TITLE,
                  description: R.default.Messages.CLAN_SETUP_UTILITY_TRAITS_SUBTITLE,
                  requiredGameId: g,
                  handleUpdate: Y,
                  interests: x,
                  optional: !0
                });
              case v.ClanSetupSteps.INTERESTS:
                return (0, a.jsx)(p.default, {
                  handleUpdate: B,
                  interests: x,
                  error: null == f ? void 0 : f.interests
                });
              case v.ClanSetupSteps.DESCRIPTION:
                return (0, a.jsx)(S.default, {
                  handleUpdate: B,
                  description: D,
                  wildcardDescriptors: c.wildcardDescriptors,
                  errors: f
                });
              case v.ClanSetupSteps.CUSTOMIZE_TAG_BADGE:
                return (0, a.jsx)(A.default, {
                  handleUpdate: B,
                  tag: b,
                  error: null == f ? void 0 : f.tag,
                  badge: c.badgeKind,
                  primaryColor: c.badgePrimaryColor,
                  secondaryColor: c.badgeSecondaryColor,
                  furthestStep: j
                });
              case v.ClanSetupSteps.CUSTOMIZE_BANNER:
                return (0, a.jsx)(C.default, {
                  handleUpdate: B,
                  progress: c,
                  guildId: t
                });
              case v.ClanSetupSteps.MEMBER_APPLICATION:
                return (0, a.jsx)(I.default, {
                  guildId: t
                })
            }
          })()
        })
      }), (0, a.jsx)(P, {
        setCurrentStep: F,
        progress: c,
        errors: f,
        onLastStep: W
      })]
    }), (0, a.jsx)("div", {
      className: L.divider
    }), (0, a.jsx)("div", {
      className: i()(L.overviewSidebar, {
        [L.fadeOut]: G && !w
      }),
      children: (0, a.jsx)(_.default, {
        guildId: t
      })
    })]
  })
}