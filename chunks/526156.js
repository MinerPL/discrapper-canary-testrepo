var n = t(735250);
t(470079);
var a = t(481060),
  i = t(230711),
  r = t(528084),
  o = t(313482);
s.Z = e => {
  let {
tabs: s,
settingsSection: t,
parentSetting: l
  } = e, {
viewableTabs: c,
selectedTab: d
  } = (0, r.a)(s, l);
  return (0, n.jsxs)(n.Fragment, {
children: [
  (0, n.jsx)(a.TabBar, {
    className: o.tabBar,
    selectedItem: d.setting,
    onItemSelect: e => {
      i.Z.setSection(t, e);
    },
    orientation: 'horizontal',
    type: 'top',
    look: 'brand',
    children: c.map(e => (0, n.jsx)(a.TabBar.Item, {
      className: o.tab,
      id: e.setting,
      'aria-label': e.title,
      children: e.title
    }, e.setting))
  }),
  (0, n.jsx)(a.TabBar.Panel, {
    id: d.setting,
    'aria-labelledby': d.title,
    className: o.tabBarPanel,
    children: (e => {
      let s = e.component;
      return 'function' == typeof s ? (0, n.jsx)(s, {}) : s;
    })(d)
  })
]
  });
};