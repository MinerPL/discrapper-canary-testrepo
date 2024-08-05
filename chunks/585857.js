n.d(t, {
  Q: function() {
return T;
  }
});
var s = n(735250);
n(470079);
var o = n(120356),
  r = n.n(o),
  a = n(533627),
  l = n(432594),
  i = n(481060),
  c = n(230711),
  d = n(231757),
  u = n(617136),
  p = n(497505),
  m = n(796111),
  x = n(46140),
  g = n(981631),
  f = n(689938),
  C = n(276458);

function _(e) {
  let {
quest: t,
isConnected: n,
consoleType: o
  } = e;
  return (0, s.jsx)(i.Clickable, {
className: C.connectConsoleButtonWrapper,
onClick: () => {
  (0, u._3)({
    questId: t.id,
    questContent: p.jn.QUEST_BAR_V2,
    questContentCTA: u.jZ.CONNECT_CONSOLE
  }), (0, d.Z)({
    platformType: o
  });
},
children: o === g.ABu.PLAYSTATION ? (0, s.jsx)(a.K, {
  colorClass: r()(C.connectConsoleButton, n ? C.playstationButtonConnected : C.connectConsoleButtonUnconnected),
  size: 'sm'
}) : (0, s.jsx)(l.a, {
  colorClass: r()(C.connectConsoleButton, n ? C.xboxButtonConnected : C.connectConsoleButtonUnconnected),
  size: 'sm'
})
  });
}

function h(e) {
  let {
text: t,
quest: n
  } = e;
  return (0, s.jsx)(i.Clickable, {
className: C.showConnectionsButton,
onClick: () => {
  (0, u._3)({
    questId: n.id,
    questContent: p.jn.QUEST_BAR_V2,
    questContentCTA: u.jZ.VIEW_CONSOLE_CONNECTIONS_LINK
  }), c.Z.open(g.oAB.CONNECTIONS);
},
children: (0, s.jsx)(i.Text, {
  'aria-label': t,
  color: 'none',
  variant: 'text-xxs/normal',
  children: t
})
  });
}

function E(e) {
  let {
quest: t,
xboxAccounts: n,
playstationAccounts: o,
xboxAndPlaystationAccounts: a
  } = e, l = a.slice(0, 2), c = a.length > 0, d = n.length > 0, u = o.length > 0;
  return (0, s.jsxs)('div', {
className: C.inlineConsoleConnectionDetails,
children: [
  (0, s.jsxs)('div', {
    className: C.inlineConsoleConnectionDetailsUpper,
    children: [
      (0, s.jsx)(i.Text, {
        color: 'header-secondary',
        variant: 'text-xxs/normal',
        children: c ? f.Z.Messages.QUESTS_CONNECTED : f.Z.Messages.QUESTS_SELECT_TO_START
      }),
      (0, s.jsxs)('div', {
        className: C.inlineConsoleConnectionDetailsIcons,
        children: [
          (0, s.jsx)(_, {
            consoleType: g.ABu.PLAYSTATION,
            isConnected: u,
            quest: t
          }),
          (0, s.jsx)('div', {
            className: C.consoleIconDivider
          }),
          (0, s.jsx)(_, {
            consoleType: g.ABu.XBOX,
            isConnected: d,
            quest: t
          })
        ]
      })
    ]
  }),
  c && (0, s.jsxs)('div', {
    className: C.inlineConsoleConnectionDetailsLower,
    children: [
      l.map((e, t) => (0, s.jsxs)('div', {
        className: r()(C.inlineConsoleConnectionDetailsLowerItem, t > 0 ? C.marginTop4px : void 0),
        children: [
          (0, s.jsx)(i.Text, {
            color: 'header-secondary',
            variant: 'text-xxs/normal',
            children: e.type === g.ABu.XBOX ? f.Z.Messages.QUESTS_XBOX_ID : f.Z.Messages.QUESTS_PSN_ONLINE_ID_V2
          }),
          (0, s.jsx)(i.Text, {
            color: 'header-secondary',
            variant: 'text-xxs/normal',
            children: e.name
          })
        ]
      }, t)),
      a.length > 2 && (0, s.jsx)(h, {
        text: f.Z.Messages.QUESTS_VIEW_MORE_ACCOUNTS,
        quest: t
      })
    ]
  })
]
  });
}

function S(e) {
  let {
xboxAndPlaystationAccounts: t,
quest: n
  } = e;
  return t.length > 0 ? (0, s.jsx)(h, {
text: f.Z.Messages.QUESTS_SHOW_CONNECTIONS,
quest: n
  }) : null;
}

function T(e) {
  let t = (0, m.P)({
location: x.dr.QUESTS_BAR
  });
  return (0, s.jsxs)(s.Fragment, {
children: [
  (0, s.jsx)(i.Text, {
    color: 'text-muted',
    variant: 'text-xs/medium',
    children: f.Z.Messages.QUESTS_CONSOLE_CONNECTION_HELPER_STEPS_CONNECT_ACCOUNT
  }),
  t ? (0, s.jsx)(E, {
    ...e
  }) : (0, s.jsx)(S, {
    ...e
  })
]
  });
}