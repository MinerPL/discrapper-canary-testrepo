n.d(t, {
  P: function() {
return I;
  }
}), n(411104);
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(338545),
  s = n(399606),
  l = n(481060),
  u = n(607070),
  c = n(906732),
  d = n(471885),
  _ = n(267642),
  E = n(879892),
  f = n(198466),
  h = n(981631),
  p = n(689938),
  m = n(459783);
let I = {
  [h.Eu4.NONE]: 0,
  [h.Eu4.TIER_1]: 1 / 3,
  [h.Eu4.TIER_2]: 2 / 3,
  [h.Eu4.TIER_3]: 1
};
t.Z = function(e) {
  let {
children: t,
confettiTriggerRef: n,
guild: i,
isProgressBarAnimationComplete: T,
setConfettiCount: g,
setShouldFireConfetti: S,
tier: A,
tierMarkerAnimationPosition: N
  } = e, v = (0, s.e7)([u.Z], () => u.Z.useReducedMotion), {
analyticsLocations: O
  } = (0, c.ZP)(), R = h.oCV[A] - i.premiumSubscriberCount, C = A <= N || T, y = C && A <= i.premiumTier, D = C && A < i.premiumTier, L = C && A === i.premiumTier, {
scaleFactor: b
  } = (0, o.useSpring)({
from: {
  scaleFactor: 0
},
to: {
  scaleFactor: N >= A || T && N + 1 === A || T && -1 === N && A === h.Eu4.NONE ? 1 : 0
},
config: {
  tension: 360,
  friction: 12
},
immediate: v
  }), M = (0, r.jsxs)(r.Fragment, {
children: [
  (0, r.jsx)(o.animated.div, {
    className: m.progressBarMarkerIndicator,
    style: {
      transform: b.to(e => 'translate(-50%, -50%) scale('.concat(e, ')'))
    }
  }),
  A !== h.Eu4.NONE && (0, r.jsx)(d.Z, {
    tier: A,
    className: m.boostedTierIcon
  })
]
  }), P = y ? 'div' : l.Clickable, U = y ? {} : {
onClick: function() {
  C && (0, E.u)({
    analyticsLocations: O,
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
            throw Error('Unsupported Boosting tier: '.concat(e));
        }
      }(A)
    },
    numberOfBoostsToAdd: R,
    guild: i
  });
}
  };
  return (0, r.jsx)(l.Tooltip, {
text: y ? p.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_TIER_UNLOCKED.format({
  tierName: (0, _.nW)(A, {
    useLevels: !1
  })
}) : p.Z.Messages.BOOSTING_MARKETING_REDESIGN_EXPERIMENT_PROGRESS_BAR_TOOLTIP_REMAINING_FOR_TIER.format({
  numBoostsRequired: R,
  tierName: (0, _.nW)(A, {
    useLevels: !1
  })
}),
shouldShow: A !== h.Eu4.NONE,
children: e => (0, r.jsxs)(P, {
  className: a()(m.progressBarMarker, {
    [m.progressBarMarkerUnlocked]: y,
    [m.progressBarMarkerLocked]: !y,
    [m.progressBarMarkerLower]: D,
    [m.progressBarMarkerCurrent]: L
  }),
  style: {
    left: ''.concat(100 * I[A], '%')
  },
  ...e,
  ...U,
  children: [
    !y && (0, r.jsx)('div', {
      className: m.boostedTierIconBackground
    }),
    y && A === h.Eu4.TIER_3 ? (0, r.jsx)(f.m, {
      confettiTriggerRef: n,
      setConfettiCount: g,
      setShouldFireConfetti: S,
      children: M
    }) : M,
    (0, r.jsxs)(l.Text, {
      className: m.progressBarMarkerLabel,
      variant: 'text-md/normal',
      children: [
        y && A !== h.Eu4.NONE && (0, r.jsx)(l.CheckmarkLargeIcon, {
          size: 'md',
          color: 'currentColor',
          className: m.progressBarMarkerUnlockedIcon
        }),
        t
      ]
    })
  ]
})
  });
};