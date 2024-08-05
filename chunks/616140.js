i.d(s, {
  Z: function() {
return g;
  }
}), i(47120);
var n = i(735250),
  l = i(470079),
  t = i(442837),
  o = i(706898),
  a = i(481060),
  r = i(387903),
  d = i(246946),
  c = i(785717),
  u = i(304704),
  I = i(27144),
  _ = i(100849),
  f = i(944546),
  m = i(470900),
  E = i(988246),
  v = i(970041),
  S = i(715388),
  x = i(879828),
  Z = i(834534),
  h = i(228168),
  p = i(47460);

function T(e) {
  let {
section: s,
subsection: i,
user: l,
currentUser: t,
displayProfile: o,
onClose: a
  } = e, {
newActivityCardsEnabled: d
  } = (0, u.Z)({
location: 'SimplifiedUserProfileModalTabs'
  }), {
pastActivityEnabled: c
  } = (0, I.z)({
location: 'SimplifiedUserProfileModalTabs'
  });
  return s === h.oh.ACTIVITY && (d || c) ? (0, n.jsx)(x.Z, {
user: l,
currentUser: t,
onClose: a
  }) : s === h.oh.ACTIVITY ? (0, n.jsx)(_.Z, {
showActions: (null == t ? void 0 : t.id) !== l.id,
user: l,
type: r.Y.SIMPLIFIED_PROFILE,
onClose: a
  }) : s === h.oh.MUTUAL_FRIENDS ? (0, n.jsx)(f.Z, {
user: l,
onClose: a
  }) : s === h.oh.MUTUAL_GUILDS ? (0, n.jsx)(m.Z, {
user: l,
onClose: a
  }) : s === h.oh.BOT_DATA_ACCESS ? (0, n.jsx)(v.Z, {
user: l
  }) : s === h.oh.BOT_INFO ? (0, n.jsx)(S.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  }) : (0, n.jsx)(Z.Z, {
user: l,
currentUser: t,
displayProfile: o,
subsection: i,
onClose: a
  });
}

function g(e) {
  var s, i, r;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: f,
initialSection: m = h.oh.USER_INFO,
initialSubsection: v,
onClose: S
  } = e, {
trackUserProfileAction: x
  } = (0, c.KZ)(), Z = (0, t.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, j] = l.useState({
section: null !== (r = null === (s = f.find(e => {
  let {
    section: s
  } = e;
  return s === m;
})) || void 0 === s ? void 0 : s.section) && void 0 !== r ? r : null === (i = f[0]) || void 0 === i ? void 0 : i.section,
subsection: v
  }), C = l.useCallback(e => {
x({
  action: 'PRESS_SECTION',
  section: e
}), j({
  section: e,
  subsection: void 0
});
  }, [
x,
j
  ]);
  return Z ? (0, n.jsx)('div', {
className: p.container,
children: (0, n.jsx)(E.Z, {})
  }) : (0, n.jsxs)('div', {
className: p.container,
children: [
  (0, n.jsx)(o.n, {
    className: p.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: C,
    children: f.map(e => {
      let {
        section: s,
        text: i
      } = e;
      return (0, n.jsx)(o.n.Item, {
        className: p.tabBarItem,
        id: s,
        'aria-label': i,
        children: (0, n.jsx)(a.Text, {
          variant: 'text-sm/normal',
          children: i
        })
      }, s);
    })
  }),
  (0, n.jsx)(T, {
    items: f,
    section: g,
    subsection: N,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: S
  })
]
  });
}