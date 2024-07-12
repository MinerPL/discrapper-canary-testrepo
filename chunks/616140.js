i.d(n, {
  Z: function() {
return h;
  }
}), i(47120);
var s = i(735250),
  l = i(470079),
  o = i(442837),
  t = i(706898),
  r = i(481060),
  a = i(387903),
  d = i(246946),
  c = i(785717),
  u = i(100849),
  I = i(944546),
  _ = i(470900),
  f = i(988246),
  E = i(970041),
  m = i(715388),
  S = i(834534),
  Z = i(228168),
  x = i(47460);

function v(e) {
  let {
section: n,
subsection: i,
user: l,
currentUser: o,
displayProfile: t,
onClose: r
  } = e;
  return n === Z.oh.ACTIVITY ? (0, s.jsx)(u.Z, {
showActions: (null == o ? void 0 : o.id) !== l.id,
user: l,
type: a.Y.SIMPLIFIED_PROFILE,
onClose: r
  }) : n === Z.oh.MUTUAL_FRIENDS ? (0, s.jsx)(I.Z, {
user: l,
onClose: r
  }) : n === Z.oh.MUTUAL_GUILDS ? (0, s.jsx)(_.Z, {
user: l,
onClose: r
  }) : n === Z.oh.BOT_DATA_ACCESS ? (0, s.jsx)(E.Z, {
user: l
  }) : n === Z.oh.BOT_INFO ? (0, s.jsx)(m.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: i,
onClose: r
  }) : (0, s.jsx)(S.Z, {
user: l,
currentUser: o,
displayProfile: t,
subsection: i,
onClose: r
  });
}

function h(e) {
  var n, i, a;
  let {
user: u,
currentUser: I,
displayProfile: _,
items: E,
initialSection: m = Z.oh.USER_INFO,
initialSubsection: S,
onClose: h
  } = e, {
trackUserProfileAction: p
  } = (0, c.KZ)(), T = (0, o.e7)([d.Z], () => d.Z.hidePersonalInformation), [{
section: g,
subsection: N
  }, C] = l.useState({
section: null !== (a = null === (n = E.find(e => {
  let {
    section: n
  } = e;
  return n === m;
})) || void 0 === n ? void 0 : n.section) && void 0 !== a ? a : null === (i = E[0]) || void 0 === i ? void 0 : i.section,
subsection: S
  }), j = l.useCallback(e => {
p({
  action: 'PRESS_SECTION',
  section: e
}), C({
  section: e,
  subsection: void 0
});
  }, [
p,
C
  ]);
  return T ? (0, s.jsx)('div', {
className: x.container,
children: (0, s.jsx)(f.Z, {})
  }) : (0, s.jsxs)('div', {
className: x.container,
children: [
  (0, s.jsx)(t.n, {
    className: x.tabBar,
    type: 'top',
    selectedItem: g,
    onItemSelect: j,
    children: E.map(e => {
      let {
        section: n,
        text: i
      } = e;
      return (0, s.jsx)(t.n.Item, {
        className: x.tabBarItem,
        id: n,
        'aria-label': i,
        children: (0, s.jsx)(r.Text, {
          variant: 'text-sm/normal',
          children: i
        })
      }, n);
    })
  }),
  (0, s.jsx)(v, {
    items: E,
    section: g,
    subsection: N,
    user: u,
    currentUser: I,
    displayProfile: _,
    onClose: h
  })
]
  });
}