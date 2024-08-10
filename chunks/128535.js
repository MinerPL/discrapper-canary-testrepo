n(653041), n(47120), n(724458);
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  r = n(959078),
  l = n(442837),
  o = n(481060),
  c = n(607070),
  u = n(553795),
  d = n(358085),
  _ = n(617136),
  E = n(111382),
  I = n(113434),
  m = n(918701),
  T = n(566078),
  h = n(667105),
  N = n(981631),
  f = n(689938),
  C = n(787248);
let p = e => 0 === e.length ? C.warning : C.danger,
  g = (e, t) => 0 === e.length ? f.Z.Messages.QUESTS_LAUNCHED_GAME.format({
gameTitle: t
  }) : f.Z.Messages.QUESTS_GAME_NOT_DETECTED.format({
gameTitle: t
  }),
  S = e => {
let {
  quest: t,
  location: n,
  errors: a,
  gameTitle: s,
  consoleHelpArticle: l,
  expiredCredentialsInteractable: c
} = e;
if (0 === a.length)
  return (0, i.jsx)(o.Text, {
    variant: 'text-sm/medium',
    color: 'text-muted',
    children: f.Z.Messages.QUESTS_MICROPHONE_UNIT_BODY.format({
      gameTitle: s
    })
  });
let E = [];
(0, m.Nj)({
  quest: t
}) && E.push((0, d.isWeb)() ? f.Z.Messages.QUEST_PROGRESS_NO_GAME_WEB : f.Z.Messages.QUEST_PROGRESS_NO_GAME);
let I = [
  ...E,
  ...a.map(e => {
    if (e.type !== r.K.EXPIRED_CREDENTIAL || !c)
      return e.message;
    let i = u.Z.getAccount(e.connected_account_id, e.connected_account_type),
      a = (0, m.C9)(e),
      s = (0, m._j)(e),
      l = s === N.ABu.XBOX;
    return a.format({
      account_name: null == i ? void 0 : i.name,
      onClick: () => {
        (0, m.fY)({
          quest: t,
          showInline: l,
          platformType: s
        }, {
          content: n,
          ctaContent: _.jZ.DEFIBRILLATOR_RECONNECT_CONSOLE
        });
      }
    });
  }),
  l
];
return (0, i.jsx)(o.Text, {
  variant: 'text-sm/medium',
  color: 'text-muted',
  children: I.reduce((e, t) => [
    ...e,
    t,
    ' '
  ], [])
});
  };
t.Z = function(e) {
  let t = T.r.build(e.quest.config).application.name,
n = (0, l.e7)([c.Z], () => c.Z.useReducedMotion),
a = (0, h.k3)(e.quest.id, e.location),
r = (0, E.n)(),
u = (0, h.g2)({
  useReducedMotion: n,
  className: C.refreshIcon
}),
{
  errorHints: d,
  startingConsoleQuest: m,
  startConsoleQuest: N
} = (0, I.GI)({
  questId: e.quest.id,
  beforeRequest: () => {
    u.startAnimation(), (0, _._3)({
      questId: e.quest.id,
      questContent: e.location,
      questContentCTA: _.jZ.DEFIBRILLATOR
    });
  },
  afterRequest: u.stopAnimation
});
  return (0, i.jsxs)('div', {
className: s()(C.container, {
  [C.inFlight]: m
}),
children: [
  (0, i.jsxs)('div', {
    className: C.info,
    children: [
      (0, i.jsxs)('div', {
        className: C.header,
        children: [
          (0, i.jsx)(o.CircleWarningIcon, {
            className: s()(C.headerIcon, p(d)),
            size: 'custom',
            color: 'currentColor',
            width: 16,
            height: 16
          }),
          (0, i.jsx)(o.Text, {
            variant: 'text-sm/semibold',
            children: g(d, t)
          })
        ]
      }),
      S({
        quest: e.quest,
        errors: d,
        gameTitle: t,
        location: e.location,
        consoleHelpArticle: a,
        expiredCredentialsInteractable: r
      })
    ]
  }),
  (0, i.jsx)('div', {
    className: C.cta,
    children: (0, i.jsx)(o.Button, {
      color: o.ButtonColors.PRIMARY,
      onClick: N,
      disabled: m,
      children: (0, i.jsxs)('div', {
        className: C.ctaInner,
        children: [
          u.render(),
          f.Z.Messages.QUESTS_MICROHPONE_UNIT_BUTTON_CTA
        ]
      })
    })
  })
]
  });
};