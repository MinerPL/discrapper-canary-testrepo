n.d(t, {
  Z: function() {
return S;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  r = n.n(s),
  l = n(442837),
  o = n(481060),
  c = n(393238),
  d = n(607070),
  u = n(113434),
  _ = n(566078),
  h = n(472144),
  E = n(644646),
  I = n(69439),
  m = n(46140),
  g = n(689938),
  p = n(855892);
let T = async () => await n.e('67963').then(n.t.bind(n, 145193, 19));

function S(e) {
  var t, n, s;
  let {
quest: S,
questContent: f,
isHovering: C,
contentPosition: N,
rowIndex: A,
onReceiveErrorHints: v
  } = e, Z = _.r.build(S.config).defaultReward.messages.name, L = (null === (t = S.userStatus) || void 0 === t ? void 0 : t.enrolledAt) != null, [O, R] = a.useState(!1), x = a.useRef(null);
  (0, c.P)(x, e => {
let {
  height: t
} = e;
null != t && t > 20 && R(!0);
  }, [R]);
  let b = a.useRef(null),
[P, M] = a.useState(!1);
  (0, c.P)(b, e => {
let {
  height: t,
  scrollHeight: n
} = e;
null != t && null != n && n - t > 1 && M(!0);
  }, [M]);
  let D = (null === (n = S.userStatus) || void 0 === n ? void 0 : n.completedAt) != null,
y = (null === (s = S.userStatus) || void 0 === s ? void 0 : s.claimedAt) != null,
{
  completedRatio: j
} = (0, u.I)(S),
U = (0, u.Bd)(S),
G = a.useCallback(() => (0, i.jsx)(o.Text, {
  variant: 'text-md/semibold',
  color: 'text-brand',
  tag: 'span',
  className: p.header,
  children: Z
}), [Z]),
k = a.useMemo(() => y ? G() : g.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
  rewardHook: G
}), [
  y,
  G
]),
w = a.useMemo(() => {
  let e = !C && O,
    t = !C && !O;
  if (null != U)
    return (0, i.jsx)(o.Text, {
      variant: 'text-sm/medium',
      color: 'text-muted',
      ref: b,
      className: r()(p.description, {
        [p.truncateTextTwoLines]: e,
        [p.truncateTextThreeLines]: t
      }),
      children: U
    });
}, [
  U,
  C,
  O
]),
B = (0, l.e7)([d.Z], () => d.Z.useReducedMotion);
  return (0, i.jsxs)('div', {
className: r()(p.container, {
  [p.hoveredHeight]: P && C,
  [p.height]: !C || !P
}),
children: [
  (0, i.jsxs)('div', {
    className: r()(p.rewardDescriptionContainer),
    children: [
      !y && D && (0, i.jsx)('div', {
        className: p.completionAnimation
      }),
      L && !y ? (0, i.jsxs)('div', {
        className: p.progressWrapper,
        children: [
          D && (0, i.jsx)(o.LottieAnimation, {
            importData: T,
            className: p.confetti,
            loop: !1,
            autoplay: !1,
            shouldAnimate: !B
          }),
          (0, i.jsx)(h.Z, {
            quest: S,
            size: 76,
            percentComplete: j,
            children: (0, i.jsx)('div', {
              className: p.circularRewardTileWrapper,
              children: (0, i.jsx)(E.Z, {
                quest: S,
                questContent: f,
                className: p.circularQuestRewardTileAsset,
                location: m.dr.QUEST_HOME_DESKTOP
              })
            })
          })
        ]
      }) : (0, i.jsx)(E.Z, {
        quest: S,
        autoplay: C,
        questContent: f,
        className: p.questRewardTileAsset,
        location: m.dr.QUEST_HOME_DESKTOP
      }),
      (0, i.jsxs)('div', {
        className: p.textContainer,
        children: [
          (0, i.jsx)('div', {
            ref: x,
            children: (0, i.jsx)('span', {
              className: p.headerSpan,
              children: (0, i.jsx)(o.Text, {
                variant: 'text-md/semibold',
                color: 'header-primary',
                className: p.header,
                children: k
              })
            })
          }),
          w
        ]
      })
    ]
  }),
  (0, i.jsx)(I.Z, {
    quest: S,
    location: f,
    contentPosition: N,
    rowIndex: A,
    onReceiveErrorHints: v
  })
]
  });
}