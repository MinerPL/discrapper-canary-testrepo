"use strict";
n.r(t), n("47120");
var a = n("735250"),
  s = n("470079"),
  l = n("718017"),
  i = n("442837"),
  r = n("481060"),
  o = n("607070"),
  u = n("931240"),
  d = n("650461"),
  c = n("620929"),
  f = n("496376"),
  E = n("308083"),
  h = n("689938"),
  _ = n("156610");
t.default = e => {
  let {
    guildId: t,
    setPage: C,
    onClose: S
  } = e, m = s.useRef(null), p = (0, i.useStateFromStores)([o.default], () => o.default.useReducedMotion), {
    progress: I,
    errors: T,
    submitting: g
  } = (0, i.useStateFromStoresObject)([d.default], () => d.default.getStateForGuild(t)), {
    gameApplicationIds: A,
    playstyle: N,
    interests: v,
    description: R,
    tag: L,
    verificationForm: O,
    badgeKind: M,
    badgePrimaryColor: P,
    badgeSecondaryColor: y,
    banner: x,
    brandPrimaryColor: D,
    brandSecondaryColor: b,
    wildcardDescriptors: U,
    badgeImage: j
  } = null != I ? I : {}, G = s.useRef(null), w = s.useRef(null), k = s.useRef(null), [F, B] = s.useState(!1), H = async () => {
    try {
      await u.convertGuildToClan(t, {
        gameApplicationIds: A,
        playstyle: N,
        interests: v,
        description: R,
        tag: L,
        verificationForm: O,
        badgeKind: M,
        badgePrimaryColor: P,
        badgeSecondaryColor: y,
        banner: x,
        brandPrimaryColor: D,
        brandSecondaryColor: b,
        wildcardDescriptors: U,
        badgeImage: j
      })
    } catch (e) {
      return
    }
    S(), (0, r.openModalLazy)(async () => {
      let {
        default: e
      } = await Promise.all([n.e("99387"), n.e("63636")]).then(n.bind(n, "511385"));
      return n => (0, a.jsx)(e, {
        guildId: t,
        tag: L,
        brandPrimaryColor: D,
        ...n
      })
    })
  }, V = (0, l.useSpring)({
    ref: G,
    config: l.config.slow,
    from: {
      flex: 1,
      paddingLeft: p ? 120 : 0
    },
    to: {
      flex: 1,
      paddingLeft: 120
    }
  }), Y = (0, l.useSpring)({
    ref: w,
    config: l.config.slow,
    from: {
      flex: p ? 1 : 0,
      paddingRight: p ? 120 : 0,
      marginLeft: p ? -32 : 0
    },
    to: {
      flex: 1,
      paddingRight: 120,
      marginLeft: -32
    }
  }), W = (0, l.useSpring)({
    ref: k,
    config: l.config.default,
    from: {
      opacity: 0
    },
    to: {
      opacity: 1
    }
  });
  (0, l.useChain)([G, w, k], [0, 0, 1]);
  let K = s.useMemo(() => null != T && Object.values(T).some(e => null != e), [T]),
    z = s.useMemo(() => null != T && Object.values(T).length > 0 ? (0, f.getClanSetupProgressSteps)(T).find(e => e.hasError) : null, [T]),
    q = s.useCallback(() => {
      u.updateClanSetup(t, {
        currentStep: null == z ? void 0 : z.index
      }), C(E.ClanSetupModalPages.SETUP)
    }, [null == z ? void 0 : z.index, t, C]);
  return (0, a.jsxs)("div", {
    className: _.animationContainer,
    children: [(0, a.jsxs)(l.animated.div, {
      className: _.signTextLeft,
      style: {
        ...V,
        ...W
      },
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xxl/medium",
        children: h.default.Messages.CLAN_SETUP_SIGN_TITLE
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        children: h.default.Messages.CLAN_SETUP_SIGN_SUBTITLE
      })]
    }), (0, a.jsx)("div", {
      className: _.scrollContainer,
      children: (0, a.jsx)(c.default, {
        guildId: t,
        signed: F,
        setSigned: B,
        signRef: m
      })
    }), (0, a.jsxs)(l.animated.div, {
      className: _.signTextRight,
      style: {
        ...Y,
        ...W
      },
      children: [(0, a.jsx)(r.Button, {
        className: _.signButton,
        size: r.Button.Sizes.SMALL,
        onClick: () => {
          var e;
          null === (e = m.current) || void 0 === e || e.scrollIntoView({
            behavior: "smooth"
          }), B(!0)
        },
        children: h.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_CTA
      }), (0, a.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: h.default.Messages.CLAN_SETUP_OVERVIEW_SIGN_HELP
      })]
    }), (0, a.jsx)(r.Button, {
      className: _.closeButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: S,
      children: h.default.Messages.CLAN_SETUP_MODAL_SAVE_AND_QUIT
    }), (0, a.jsx)(r.Button, {
      className: _.previousButton,
      look: r.Button.Looks.OUTLINED,
      size: r.Button.Sizes.MEDIUM,
      color: r.Button.Colors.PRIMARY,
      onClick: () => C(E.ClanSetupModalPages.SETUP),
      children: h.default.Messages.PAGINATION_PREVIOUS
    }), (0, a.jsxs)("div", {
      className: _.finishButton,
      children: [K && (0, a.jsx)(r.Text, {
        className: _.errorText,
        color: "status-danger",
        variant: "text-sm/normal",
        children: h.default.Messages.CLAN_SUBMIT_ERROR_TEXT.format({
          backHook: (e, t) => (0, a.jsx)(r.Anchor, {
            className: _.errorLink,
            onClick: q,
            children: e
          }, t)
        })
      }), (0, a.jsx)(r.Button, {
        look: r.Button.Looks.FILLED,
        size: r.Button.Sizes.MEDIUM,
        color: r.Button.Colors.BRAND,
        disabled: !F || K,
        submitting: g,
        onClick: H,
        children: h.default.Messages.FINISH
      })]
    })]
  })
}