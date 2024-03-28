"use strict";
l.r(t), l.d(t, {
  default: function() {
    return B
  }
}), l("47120");
var s = l("735250"),
  n = l("470079"),
  a = l("803997"),
  r = l.n(a),
  i = l("718017"),
  o = l("442837"),
  d = l("481060"),
  u = l("749210"),
  c = l("830064"),
  m = l("393238"),
  f = l("607070"),
  g = l("480608"),
  h = l("160404"),
  x = l("703656"),
  p = l("430824"),
  N = l("257915"),
  E = l("768581"),
  I = l("302221"),
  v = l("956664"),
  O = l("549817"),
  j = l("45966"),
  R = l("819553"),
  b = l("548473"),
  S = l("15320"),
  C = l("973051"),
  T = l("981631"),
  _ = l("689938"),
  M = l("262419");
async function D(e) {
  let t = await new Promise((t, l) => {
    let s = new Image;
    s.crossOrigin = "Anonymous", s.onerror = e => {
      l(e), s.onerror = s.onload = null, s = null
    }, s.onload = () => {
      t((0, v.getPalette)(s, 2, 10)), s.onerror = s.onload = null, s = null
    }, s.src = e
  });
  return null == t ? void 0 : t.map(e => {
    let [t, l, s] = e;
    return (0, I.rgbToHex)(t, l, s)
  })
}

function B(e) {
  let {
    guildId: t
  } = e, l = (0, o.useStateFromStores)([f.default], () => f.default.useReducedMotion), {
    ref: a,
    width: v,
    height: B
  } = (0, m.default)(), [A, k] = n.useState(), P = (0, o.useStateFromStoresArray)([j.default], () => j.default.getOnboardingPromptsForOnboarding(t)), L = (0, o.useStateFromStores)([j.default], () => j.default.getEnabled(t)), F = n.useCallback((e, l, s) => {
    O.default.selectOption(t, e, l, s)
  }, [t]), y = n.useCallback(() => {
    O.default.completeOnboarding(t, P)
  }, [t, P]), G = (0, o.useStateFromStores)([p.default], () => p.default.getGuild(t)), U = n.useMemo(() => null == G ? null : E.default.getGuildSplashURL({
    id: G.id,
    splash: G.splash
  }), [G]), w = (0, o.useStateFromStores)([R.default], () => R.default.getCurrentOnboardingStep(t)), [q, H] = n.useState(null != U ? null : "cover");
  null != U && null == A && D(U).then(e => {
    k(e[0])
  });
  let z = n.useCallback(e => {
      H(w), O.default.setUserOnboardingStep(t, e)
    }, [t, w]),
    V = (0, o.useStateFromStores)([h.default], () => h.default.isFullServerPreview(t)),
    Q = (0, o.useStateFromStores)([R.default], () => R.default.getOnboardingStatus(t)),
    Y = null != P && P.length > 0,
    K = n.useCallback(() => {
      (0, R.isOnboarding)(Q) && L && Y ? z(0) : y()
    }, [Q, L, Y, z, y]);
  n.useEffect(() => {
    if (!R.default.shouldShowOnboarding(t)) return u.default.escapeToDefaultChannel(t);
    (0, g.fetchMemberCounts)(t)
  }, [t]);
  let W = (0, i.useTransition)(w, {
      config: i.config.default,
      from: {
        scale: .8,
        opacity: 0
      },
      enter: {
        scale: 1,
        opacity: 1
      },
      immediate: l || "cover" !== q && null !== q
    }),
    X = R.default.shouldShowOnboarding(t),
    J = null == G;
  if (n.useEffect(() => {
      if (!X || J) {
        let e = setTimeout(() => {
          (0, x.transitionTo)(T.Routes.CHANNEL(t))
        }, 1e3);
        return () => clearTimeout(e)
      }
    }, [X, J, t]), !R.default.shouldShowOnboarding(t) || null == G) return null;
  let Z = () => {
    switch (w) {
      case "cover":
        return (0, s.jsx)(b.default, {
          guild: G,
          onboardingStatus: R.GuildOnboardingStatus.READY,
          onStart: K,
          disableTracking: V
        });
      case "rules":
        return (0, s.jsx)(C.default, {
          setCurrentStep: z,
          previousPromptIndex: P.length - 1,
          guild: G,
          prompts: P,
          completeOnboarding: y,
          disableTracking: V
        });
      case null:
        return null;
      default:
        return (0, s.jsx)(S.default, {
          guild: G,
          prompts: P,
          step: w,
          selectOption: F,
          completeOnboarding: y,
          setCurrentStep: z,
          disableTracking: V
        })
    }
  };
  return (0, s.jsxs)("div", {
    className: M.main,
    ref: a,
    children: [null != U ? (0, s.jsx)(N.default, {
      className: r()(M.artwork),
      src: U,
      width: v,
      height: B,
      imageClassName: M.cover
    }) : (0, s.jsx)(c.default, {
      className: M.artwork,
      preserveAspectRatio: "xMinYMin slice"
    }), null != A && (0, s.jsx)("div", {
      className: M.gradient,
      style: {
        background: "linear-gradient(180deg, ".concat((0, I.hexOpacityToRgba)(A, .16), " 0%, ").concat((0, I.hexOpacityToRgba)(A, 1), " 100%)")
      }
    }), (0, s.jsx)("div", {
      className: M.gradient
    }), W((e, t, l) => {
      let {
        key: n
      } = l;
      return (0, s.jsx)(i.animated.div, {
        style: e,
        children: Z()
      }, n)
    }), "cover" === w && (0, s.jsx)("div", {
      className: M.bottomCenterContent,
      children: (0, s.jsx)(d.Heading, {
        variant: "heading-sm/normal",
        color: "header-secondary",
        children: _.default.Messages.ONBOARDING_COVER_PRIVACY_POLICY.format({
          privacyLink: T.MarketingURLs.PRIVACY
        })
      })
    })]
  })
}