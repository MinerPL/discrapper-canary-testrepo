n.d(t, {
  D: function() {
return N;
  },
  Z: function() {
return C;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(338545),
  r = n(442837),
  l = n(686777),
  o = n(113434),
  c = n(569984),
  u = n(497505),
  d = n(602667),
  _ = n(87894),
  E = n(372113),
  I = n(206044),
  m = n(266843),
  T = n(46140),
  h = n(959445);

function N(e) {
  let {
questId: t,
...n
  } = e, s = (0, r.e7)([c.Z], () => c.Z.getQuest(t));
  if (null == s)
return null;
  {
let e = {
  quest: s,
  ...n
};
return (0, i.jsx)(C, {
  ...e
});
  }
}

function C(e) {
  let {
quest: t,
location: n,
initiallyExpanded: r,
contentPosition: c
  } = e, [N, C] = s.useState(!1), f = s.useCallback(() => C(!0), []), p = s.useCallback(() => C(!1), []), g = (0, o.tP)(t), {
containerRef: S,
size: A,
height: R
  } = (0, m.h)(), O = (0, l.q)({
location: T.dr.QUESTS_CARD
  }), {
expansionSpring: x,
isAnimating: M,
isExpanded: v,
toggleExpanded: L
  } = (0, m.O)({
initiallyExpanded: !O || r || (0, _.iM)({
  location: n,
  quest: t
})
  }), Z = null != R ? R : _.U0;
  return (0, i.jsx)(d.A, {
questOrQuests: t,
questContent: n,
questContentPosition: c,
trackGuildAndChannelMetadata: n === u.jn.QUESTS_EMBED,
children: e => (0, i.jsx)(i.Fragment, {
  children: (0, i.jsx)(a.animated.div, {
    style: {
      maxHeight: n === u.jn.QUESTS_EMBED ? void 0 : x.to({
        range: [
          0,
          1
        ],
        output: [
          _.DJ,
          Z
        ]
      })
    },
    className: h.questsCard,
    onFocus: f,
    onMouseEnter: f,
    onBlur: p,
    onMouseLeave: p,
    children: (0, i.jsxs)('div', {
      ref: t => {
        e.current = t, S.current = t;
      },
      children: [
        (0, i.jsx)(I.Z, {
          isFocused: N,
          isQuestExpired: g,
          location: n,
          quest: t,
          size: A,
          expansionSpring: x,
          isAnimating: M,
          isExpanded: v,
          isInConcurrentQuestExperiment: O,
          contentPosition: c,
          toggleExpanded: L
        }),
        (0, i.jsx)(E.Z, {
          quest: t,
          isQuestExpired: g,
          location: n,
          size: A,
          isFocused: N,
          isExpanded: v,
          isAnimating: M,
          contentPosition: c
        })
      ]
    })
  })
})
  });
}