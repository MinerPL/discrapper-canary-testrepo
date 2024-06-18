"use strict";
n.d(t, {
  Z: function() {
    return Z
  }
}), n(47120);
var l = n(735250),
  s = n(470079),
  a = n(120356),
  i = n.n(a),
  r = n(848246),
  o = n(442837),
  u = n(481060),
  c = n(607070),
  d = n(386542),
  m = n(485731),
  E = n(626135),
  _ = n(981631),
  S = n(689938),
  h = n(492626);
let g = async () => {
  let {
    default: e
  } = await n.e("21812").then(n.t.bind(n, 741855, 19));
  return e
};

function Z(e) {
  let {
    selectedGuildId: t,
    selectedChannelId: n,
    glow: a,
    playIntroTransition: Z,
    onUnlocked: C
  } = e, [f, N] = s.useState(!1), x = (0, o.e7)([c.Z], () => c.Z.useReducedMotion), {
    hqStreamingState: I
  } = (0, d.k)(r.q.STREAM_HIGH_QUALITY), A = s.useCallback(() => {
    (0, m.dE)(!0), C()
  }, [C]);
  return s.useEffect(() => {
    if (I.hqStreamingUnlockAnimationPlayed) return;
    let e = setTimeout(() => {
      N(!0)
    }, 1150);
    return () => {
      clearTimeout(e), N(!1)
    }
  }, [A, I, x]), s.useEffect(() => {
    if (I.hqStreamingUnlockAnimationPlayed) return;
    if (x) {
      A();
      return
    }
    let e = setTimeout(() => {
      A()
    }, 250);
    return () => {
      clearTimeout(e)
    }
  }, [C, A, , I, x]), s.useEffect(() => {
    E.default.track(_.rMx.PERK_DEMO_OFFER_VIEWED, {
      guild_id: t,
      channel_id: n,
      perk_type: r.q.STREAM_HIGH_QUALITY
    })
  }, []), (0, l.jsx)("div", {
    className: i()(h.container, {
      [h.gradientGlow]: a
    }),
    children: (0, l.jsxs)("div", {
      className: h.content,
      children: [(0, l.jsx)(u.LottieAnimation, {
        importData: g,
        shouldAnimate: !x,
        pauseAtFrame: 90,
        className: i()(h.animation, {
          [h.animationEndState]: f || !Z || x
        }),
        loop: !1
      }), (0, l.jsx)("div", {
        className: h.message,
        children: (0, l.jsx)(u.Text, {
          variant: "text-sm/medium",
          children: S.Z.Messages.GO_LIVE_MODAL_PERK_DEMO_HD_STREAMING_INITIAL_UPSELL
        })
      })]
    })
  })
}