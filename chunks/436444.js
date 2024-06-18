"use strict";
n.d(t, {
  P: function() {
    return N
  }
}), n(411104);
var i = n(735250);
n(470079);
var r = n(120356),
  s = n.n(r),
  o = n(920906),
  a = n(399606),
  l = n(481060),
  u = n(607070),
  _ = n(906732),
  d = n(471885),
  c = n(263704),
  E = n(267642),
  I = n(879892),
  T = n(198466),
  h = n(981631),
  S = n(689938),
  f = n(598693);
let N = {
  [h.Eu4.NONE]: 0,
  [h.Eu4.TIER_1]: 1 / 3,
  [h.Eu4.TIER_2]: 2 / 3,
  [h.Eu4.TIER_3]: 1
};
t.Z = function(e) {
  let {
    children: t,
    confettiTriggerRef: n,
    guild: r,
    isProgressBarAnimationComplete: A,
    setConfettiCount: m,
    setShouldFireConfetti: O,
    tier: R,
    tierMarkerAnimationPosition: C
  } = e, p = (0, a.e7)([u.Z], () => u.Z.useReducedMotion), {
    analyticsLocations: g
  } = (0, _.ZP)(), L = h.oCV[R] - r.premiumSubscriberCount, v = R <= C || A, D = v && R <= r.premiumTier, M = v && R < r.premiumTier, P = v && R === r.premiumTier, {
    scaleFactor: y
  } = (0, o.useSpring)({
    from: {
      scaleFactor: 0
    },
    to: {
      scaleFactor: C >= R || A && C + 1 === R || A && -1 === C && R === h.Eu4.NONE ? 1 : 0
    },
    config: {
      tension: 360,
      friction: 12
    },
    immediate: p
  }), U = (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(o.animated.div, {
      className: f.progressBarMarkerIndicator,
      style: {
        transform: y.to(e => "translate(-50%, -50%) scale(".concat(e, ")"))
      }
    }), R !== h.Eu4.NONE && (0, i.jsx)(d.Z, {
      tier: R,
      className: f.boostedTierIcon
    })]
  }), b = D ? "div" : l.Clickable, G = D ? {} : {
    onClick: function() {
      v && (0, I.u)({
        analyticsLocations: g,
        analyticsLocation: {
          page: h.ZY5.PREMIUM_GUILD_USER_MODAL,
          section: h.jXE.PREMIUM_GUILD_USER_MODAL_PROGRESS_BAR,
          object: h.qAy.SUBSCRIBE_TO_TIER_BUTTON,
          objectType: function(e) {
            switch (e) {
              case h.Eu4.TIER_3:
                return h.Qqv.TIER_3;
              case h.Eu4.TIER_2:
                return h.Qqv.TIER_2;
              case h.Eu4.TIER_1:
                return h.Qqv.TIER_1;
              default:
                throw Error("Unsupported Boosting tier: ".concat(e))
            }
          }(R)
        },
        numberOfBoostsToAdd: L,
        guild: r
      })
    }
  };
  return (0, i.jsx)(l.Tooltip, {
    text: D ? S.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
      tierName: (0, E.nW)(R, {
        useLevels: !1
      })
    }) : S.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
      numBoostsRequired: L,
      tierName: (0, E.nW)(R, {
        useLevels: !1
      })
    }),
    shouldShow: R !== h.Eu4.NONE,
    children: e => (0, i.jsxs)(b, {
      className: s()(f.progressBarMarker, {
        [f.progressBarMarkerUnlocked]: D,
        [f.progressBarMarkerLocked]: !D,
        [f.progressBarMarkerLower]: M,
        [f.progressBarMarkerCurrent]: P
      }),
      style: {
        left: "".concat(100 * N[R], "%")
      },
      ...e,
      ...G,
      children: [!D && (0, i.jsx)("div", {
        className: f.boostedTierIconBackground
      }), D && R === h.Eu4.TIER_3 ? (0, i.jsx)(T.m, {
        confettiTriggerRef: n,
        setConfettiCount: m,
        setShouldFireConfetti: O,
        children: U
      }) : U, (0, i.jsxs)(l.Text, {
        className: f.progressBarMarkerLabel,
        variant: "text-md/normal",
        children: [D && R !== h.Eu4.NONE && (0, i.jsx)(c.Z, {
          className: f.progressBarMarkerUnlockedIcon
        }), t]
      })]
    })
  })
}