var i = n(735250),
  s = n(470079),
  a = n(481060),
  r = n(984370),
  l = n(703656),
  o = n(626135),
  c = n(804739),
  d = n(981631),
  u = n(689938),
  _ = n(903375);
let h = (0, c.Q)() || !1;
t.Z = s.memo(function(e) {
  let {
currentRoute: t,
renderToolbar: n
  } = e, c = s.useContext(o.AnalyticsContext), E = h || t === d.Z5c.APPLICATION_LIBRARY_SETTINGS;
  return (0, i.jsxs)(r.Z, {
className: _.libraryHeader,
toolbar: null == n ? void 0 : n(),
children: [
  (0, i.jsx)(r.Z.Icon, {
    icon: a.InventoryIcon,
    'aria-hidden': !0
  }),
  (0, i.jsx)(r.Z.Title, {
    children: u.Z.Messages.LIBRARY
  }),
  (0, i.jsx)(r.Z.Divider, {}),
  (0, i.jsxs)(a.TabBar, {
    type: 'top-pill',
    selectedItem: t,
    onItemSelect: function(e) {
      e !== t && (0, l.uL)(e, {
        state: {
          analyticsSource: {
            ...c.location,
            section: d.jXE.TABS,
            object: d.qAy.NAVIGATION_LINK
          }
        }
      });
    },
    children: [
      (0, i.jsx)(a.TabBar.Item, {
        id: d.Z5c.APPLICATION_LIBRARY,
        children: u.Z.Messages.APPLICATION_LIBRARY_MY_GAMES
      }),
      E ? (0, i.jsx)(a.TabBar.Item, {
        id: d.Z5c.APPLICATION_LIBRARY_SETTINGS,
        children: u.Z.Messages.SETTINGS
      }) : null
    ]
  })
]
  });
});