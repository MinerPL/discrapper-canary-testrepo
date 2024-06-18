"use strict";
n.d(t, {
  Z: function() {
    return T
  }
}), n(47120);
var i = n(735250),
  r = n(470079),
  s = n(920906),
  o = n(442837),
  a = n(607070),
  l = n(267642),
  u = n(198466),
  _ = n(436444),
  d = n(981631),
  c = n(689938),
  E = n(291112);
let I = [d.Eu4.NONE, d.Eu4.TIER_1, d.Eu4.TIER_2, d.Eu4.TIER_3];

function T(e) {
  let {
    guild: t
  } = e, n = (0, o.e7)([a.Z], () => a.Z.useReducedMotion), [T, h] = r.useState(!1), [S, f] = r.useState(0), N = r.useRef(null), A = Math.min(d.Eu4.TIER_3, t.premiumTier + 1), m = d.oCV[t.premiumTier], O = d.oCV[A], R = (t.premiumSubscriberCount - m) / (O - m), C = _.P[t.premiumTier], p = _.P[A], g = t.premiumTier === d.Eu4.TIER_3, {
    progressBarFillWidthFactor: L,
    isProgressBarAnimationComplete: v,
    setShouldFireConfetti: D,
    shouldFireConfetti: M,
    tierMarkerAnimationPosition: P
  } = function(e) {
    let {
      fillFactor: t,
      guildBoostCount: n,
      premiumTier: i,
      isRevealed: o,
      useReducedMotion: a
    } = e, [l, u] = r.useState(a ? i : -1), [c, E] = r.useState(0 === n), [I, T] = r.useState(!1), h = r.useRef(!0), {
      widthFactor: S
    } = (0, s.useSpring)({
      from: {
        widthFactor: 0
      },
      to: {
        widthFactor: o ? t : 0
      },
      config: {
        tension: 15,
        friction: 7,
        clamp: !0
      },
      immediate: a,
      onChange: function(e) {
        let {
          widthFactor: t
        } = e;
        for (let [e, n] of Object.entries(_.P).reverse())
          if (t >= n - .02727272727272727) {
            u(Number(e));
            break
          }
      },
      onStart: () => {
        E(!1)
      },
      onRest: () => {
        E(!0), i === d.Eu4.TIER_3 && (T(!0), window.setTimeout(() => {
          h.current && T(!1)
        }, 200))
      }
    });
    return r.useEffect(() => () => {
      h.current = !1
    }, []), {
      isProgressBarAnimationComplete: c,
      progressBarFillWidthFactor: S,
      setShouldFireConfetti: T,
      shouldFireConfetti: I,
      tierMarkerAnimationPosition: l
    }
  }({
    fillFactor: g ? 1 : R * (p - C) + C,
    isRevealed: T || n,
    useReducedMotion: n,
    premiumTier: t.premiumTier,
    guildBoostCount: t.premiumSubscriberCount
  });
  return r.useEffect(() => {
    let e = window.setTimeout(() => {
      h(!0)
    }, 250);
    return () => {
      window.clearTimeout(e)
    }
  }, []), (0, i.jsxs)("div", {
    className: E.progressBar,
    role: "progressbar",
    "aria-valuenow": t.premiumSubscriberCount,
    "aria-valuetext": t.premiumTier === d.Eu4.NONE ? c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE.format({
      numSubscriptionsApplied: t.premiumSubscriberCount
    }) : c.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_SCREEN_READER_VALUE_TIER_UNLOCKED.format({
      numSubscriptionsApplied: t.premiumSubscriberCount,
      tierName: (0, l.nW)(t.premiumTier, {
        useLevels: !1
      })
    }),
    children: [(0, i.jsxs)("div", {
      className: E.progressBarScrubber,
      children: [(0, i.jsx)(s.animated.div, {
        className: E.progressBarFill,
        style: {
          width: L.to({
            range: [0, 1],
            output: [0, 100]
          }).to(e => "".concat(e, "%"))
        }
      }), (0, i.jsx)("div", {
        className: E.progressBarTrack
      })]
    }), I.map(e => (0, i.jsx)(_.Z, {
      confettiTriggerRef: N,
      guild: t,
      isProgressBarAnimationComplete: v,
      setConfettiCount: f,
      setShouldFireConfetti: D,
      tier: e,
      tierMarkerAnimationPosition: P,
      children: (0, l.nW)(e)
    }, e)), (0, i.jsx)(u.Z, {
      confettiCount: S,
      confettiTriggerRef: N,
      isFiring: M
    })]
  })
}