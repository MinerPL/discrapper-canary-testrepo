s.d(t, {
  Z: function() {
return N;
  }
});
var n = s(735250);
s(470079);
var a = s(442837),
  i = s(481060),
  r = s(230711),
  o = s(574755),
  l = s(663389),
  c = s(309739),
  d = s(293389),
  _ = s(327885),
  E = s(326528),
  u = s(332325),
  T = s(981631),
  I = s(689938),
  S = s(774792);

function N() {
  let e = (0, E.b)(),
t = (0, a.e7)([l.Z], () => l.Z.getSubsection()),
s = null != t && e.some(e => e.id === t) ? t : e[0].id;
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(i.Heading, {
    className: S.heading,
    variant: 'heading-xl/semibold',
    children: I.Z.Messages.GAMES
  }),
  (0, n.jsx)(i.TabBar, {
    className: S.tabBar,
    selectedItem: s,
    onItemSelect: e => {
      r.Z.setSection(T.oAB.GAMES, e);
    },
    orientation: 'horizontal',
    type: 'top',
    look: 'brand',
    children: e.map(e => (0, n.jsxs)(i.TabBar.Item, {
      className: S.tab,
      id: e.id,
      'aria-label': e.title,
      children: [
        (0, n.jsx)(e.icon, {
          className: S.tabIcon,
          color: 'currentColor'
        }),
        (0, n.jsx)('div', {
          className: S.iconTitle,
          children: e.title
        })
      ]
    }, e.id))
  }),
  (() => {
    switch (s) {
      case u.Z.CLIPS:
        return (0, n.jsx)(o.Z, {
          className: S.body,
          showHeader: !1
        });
      case u.Z.OVERLAY:
        return (0, n.jsx)(_.Z, {
          className: S.body,
          showHeader: !1
        });
      case u.Z.ACTIVITY_PRIVACY:
        return (0, n.jsx)(c.Z, {
          className: S.body,
          showHeader: !1
        });
      case u.Z.MY_GAMES:
      default:
        return (0, n.jsx)(d.Z, {
          className: S.body,
          showHeader: !1
        });
    }
  })()
]
  });
}