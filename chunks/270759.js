n(610138), n(216116), n(78328), n(815648), n(47120), n(757143);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  r = n.n(a),
  l = n(266067),
  o = n(873546),
  c = n(442837),
  d = n(481060),
  u = n(570140),
  _ = n(150063),
  h = n(758059),
  E = n(252618),
  I = n(5254),
  m = n(984370),
  g = n(518311),
  p = n(199104),
  T = n(108427),
  S = n(210887),
  C = n(974042),
  f = n(153124),
  N = n(792125),
  A = n(666286),
  Z = n(596957),
  L = n(981631),
  v = n(723359),
  O = n(689938),
  R = n(721636);

function x() {
  return (0, i.jsxs)('div', {
className: R.inviteToolbar,
children: [
  (0, i.jsx)(g.Z, {
    tooltip: O.Z.Messages.NEW_GROUP_DM
  }),
  (0, i.jsx)(m.Z.Divider, {})
]
  });
}
t.Z = function(e) {
  let {
initialSection: t
  } = e, n = (0, l.TH)(), a = (0, l.k6)();
  s.useEffect(() => {
'true' === new URLSearchParams(n.search).get('confirm-age') && u.Z.dispatch({
  type: 'AGE_GATE_MODAL_OPEN',
  source: v.L0.DEEP_LINK_PROMPT
}).then(() => {
  a.replace(L.Z5c.ME);
});
  }, [
a,
n
  ]), s.useEffect(() => {
_.Y(L.Z5c.FRIENDS), (0, T.e)('friends');
  }, []), s.useEffect(() => {
null != t && h.Z.setInitialSection(t);
  }, [t]);
  let g = (0, c.e7)([S.Z], () => S.Z.theme),
{
  section: b,
  pendingCount: P
} = (0, c.cj)([C.ZP], () => C.ZP.getState()),
M = (0, c.cj)([I.Z], () => I.Z.getSuggestionCount()),
D = (0, f.Dt)(),
y = (0, f.Dt)();
  return (0, i.jsxs)('main', {
className: R.container,
'aria-label': O.Z.Messages.FRIENDS,
children: [
  (0, i.jsx)(E.yY, {
    location: O.Z.Messages.FRIENDS
  }),
  (0, i.jsxs)(m.Z, {
    className: (0, N.Q)(g),
    toolbar: (0, i.jsx)(x, {}),
    scrollable: o.tq,
    role: 'navigation',
    'aria-labelledby': D,
    children: [
      (0, i.jsx)(m.Z.Icon, {
        icon: d.FriendsIcon,
        'aria-hidden': !0
      }),
      (0, i.jsx)(m.Z.Title, {
        id: D,
        children: O.Z.Messages.FRIENDS
      }),
      (0, i.jsx)(m.Z.Divider, {}),
      (0, i.jsxs)(d.TabBar, {
        'aria-label': O.Z.Messages.FRIENDS,
        selectedItem: b,
        type: 'top-pill',
        onItemSelect: e => {
          h.Z.setSection(e);
        },
        className: R.tabBar,
        children: [
          (0, i.jsx)(d.TabBar.Item, {
            id: L.pJs.ONLINE,
            className: R.item,
            children: O.Z.Messages.FRIENDS_SECTION_ONLINE
          }),
          (0, i.jsx)(d.TabBar.Item, {
            id: L.pJs.ALL,
            className: R.item,
            children: O.Z.Messages.FRIENDS_SECTION_ALL
          }),
          (0, i.jsxs)(d.TabBar.Item, {
            id: L.pJs.PENDING,
            className: R.item,
            'aria-label': O.Z.Messages.FRIENDS_SECTION_PENDING,
            children: [
              O.Z.Messages.FRIENDS_SECTION_PENDING,
              P > 0 ? (0, i.jsx)(d.NumberBadge, {
                count: P,
                className: R.badge,
                style: {
                  paddingRight: 0
                }
              }) : null
            ]
          }),
          M > 0 ? (0, i.jsxs)(d.TabBar.Item, {
            id: L.pJs.SUGGESTIONS,
            className: R.item,
            'aria-label': O.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
            children: [
              O.Z.Messages.FRIENDS_SECTION_SUGGESTIONS,
              (0, i.jsx)(d.NumberBadge, {
                count: M,
                className: R.badge,
                style: {
                  paddingRight: 0
                }
              })
            ]
          }) : null,
          (0, i.jsx)(d.TabBar.Item, {
            id: L.pJs.BLOCKED,
            className: R.item,
            children: O.Z.Messages.BLOCKED
          }),
          (0, i.jsx)(d.TabBar.Item, {
            'aria-label': O.Z.Messages.FRIENDS_SECTION_ADD_FRIEND,
            className: r()(R.item, R.addFriend),
            id: L.pJs.ADD_FRIEND,
            children: (0, i.jsx)('span', {
              children: O.Z.Messages.FRIENDS_SECTION_ADD_FRIEND
            })
          })
        ]
      })
    ]
  }),
  (0, i.jsxs)('div', {
    className: R.tabBody,
    children: [
      (0, i.jsx)(d.TabBar.Panel, {
        id: b,
        className: R.peopleColumn,
        'aria-labelledby': y,
        children: b === L.pJs.ADD_FRIEND ? (0, i.jsx)(A.Z, {}) : (0, i.jsx)(Z.Z, {
          titleId: y,
          sectionFilter: b
        })
      }),
      (0, i.jsx)('div', {
        className: R.nowPlayingColumn,
        children: (0, i.jsx)(p.Z, {})
      })
    ]
  })
]
  });
};