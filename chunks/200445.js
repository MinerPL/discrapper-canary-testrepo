"use strict";
l.r(t), l.d(t, {
  default: function() {
    return N
  }
}), l("47120");
var a = l("735250"),
  n = l("470079"),
  s = l("120356"),
  i = l.n(s),
  r = l("848246"),
  u = l("442837"),
  o = l("481060"),
  d = l("607070"),
  c = l("386542"),
  f = l("485731"),
  m = l("301822"),
  S = l("626135"),
  E = l("981631"),
  _ = l("689938"),
  C = l("364835");
let g = async () => {
  let {
    default: e
  } = await l.e("21812").then(l.t.bind(l, "741855", 19));
  return e
};

function N(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: l,
    glow: s,
    playIntroTransition: N,
    onUnlocked: h
  } = e, [A, I] = n.useState(!1), x = (0, u.useStateFromStores)([d.default], () => d.default.useReducedMotion), {
    hqStreamingState: p
  } = (0, c.usePerksDemo)(r.EntitlementFeatureNames.STREAM_HIGH_QUALITY), T = n.useCallback(() => {
    (0, f.hqStreamingUnlockAnimationPlayed)(!0), h()
  }, [h]);
  return n.useEffect(() => {
    if (p.hqStreamingUnlockAnimationPlayed) return;
    let e = setTimeout(() => {
      I(!0)
    }, 1150);
    return () => {
      clearTimeout(e), I(!1)
    }
  }, [T, p, x]), n.useEffect(() => {
    if (p.hqStreamingUnlockAnimationPlayed) return;
    if (x) {
      T();
      return
    }
    let e = setTimeout(() => {
      T()
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, [h, T, , p, x]), n.useEffect(() => {
    S.default.track(E.AnalyticEvents.PERK_DEMO_OFFER_VIEWED, {
      guild_id: t,
      channel_id: l,
      perk_type: r.EntitlementFeatureNames.STREAM_HIGH_QUALITY
    })
  }, []), (0, a.jsx)("div", {
    className: i()(C.container, {
      [C.gradientGlow]: s
    }),
    children: (0, a.jsxs)("div", {
      className: C.content,
      children: [(0, a.jsx)(m.default, {
        importData: g,
        shouldAnimate: !x,
        pauseAtFrame: 90,
        className: i()(C.animation, {
          [C.animationEndState]: A || !N || x
        }),
        loop: !1
      }), (0, a.jsx)("div", {
        className: C.message,
        children: (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          children: _.default.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
        })
      })]
    })
  })
}