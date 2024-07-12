n.d(t, {
  Z: function() {
return m;
  }
});
var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(113434),
  l = n(497505),
  o = n(585500),
  c = n(566078),
  d = n(472144),
  u = n(644646),
  _ = n(69439),
  h = n(46140),
  E = n(689938),
  I = n(855892);

function m(e) {
  var t, n;
  let {
quest: m,
questContent: g
  } = e, p = c.r.build(m.config).defaultReward.messages.name, T = (0, r.Rf)(m), S = T.percentComplete > 0, C = (0, r.B6)(m.config.expiresAt, {
month: '2-digit',
day: '2-digit'
  }), f = (0, o.D)({
quest: m,
taskDetails: T,
location: h.dr.QUEST_HOME_DESKTOP,
questContent: l.jn.QUEST_HOME_DESKTOP,
useV2Variants: !0,
expiryDate: C
  }), N = (null === (t = m.userStatus) || void 0 === t ? void 0 : t.claimedAt) != null, A = (0, r.B6)(null === (n = m.userStatus) || void 0 === n ? void 0 : n.claimedAt), Z = s.useCallback(() => (0, i.jsx)(a.Text, {
variant: 'text-md/semibold',
color: 'text-brand',
tag: 'span',
className: I.header,
children: p
  }), [p]), L = s.useMemo(() => N ? Z() : E.Z.Messages.QUESTS_CLAIM_THE_REWARD_HOOK.format({
rewardHook: Z
  }), [
N,
Z
  ]), v = s.useMemo(() => N ? (0, i.jsx)(a.Text, {
variant: 'text-sm/medium',
color: 'text-muted',
className: I.description,
children: E.Z.Messages.QUESTS_HOME_REWARD_CLAIMED_DESCRIPTION.format({
  claimDate: A
})
  }) : null != f ? (0, i.jsx)(a.Text, {
variant: 'text-sm/medium',
color: 'text-muted',
className: I.description,
children: f
  }) : null, [
N,
f,
A
  ]);
  return (0, i.jsxs)('div', {
className: I.container,
children: [
  (0, i.jsxs)('div', {
    className: I.rewardDescriptionContainer,
    children: [
      S && !N ? (0, i.jsx)('div', {
        className: I.progressWrapper,
        children: (0, i.jsx)(d.Z, {
          quest: m,
          size: 76,
          percentComplete: T.percentComplete,
          children: (0, i.jsx)('div', {
            className: I.circularRewardTileWrapper,
            children: (0, i.jsx)(u.Z, {
              quest: m,
              questContent: g,
              className: I.circularQuestRewardTileAsset
            })
          })
        })
      }) : (0, i.jsx)(u.Z, {
        quest: m,
        questContent: l.jn.QUEST_HOME_DESKTOP,
        className: I.questRewardTileAsset
      }),
      (0, i.jsxs)('div', {
        className: I.textContainer,
        children: [
          (0, i.jsx)('span', {
            className: I.headerSpan,
            children: (0, i.jsx)(a.Text, {
              variant: 'text-md/semibold',
              color: 'header-primary',
              className: I.header,
              children: L
            })
          }),
          v
        ]
      })
    ]
  }),
  (0, i.jsx)(_.Z, {
    quest: m
  })
]
  });
}