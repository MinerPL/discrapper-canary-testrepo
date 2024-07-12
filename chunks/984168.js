t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250);
t(470079);
var l = t(120356),
  a = t.n(l),
  r = t(481060),
  s = t(314734),
  o = t(689938),
  c = t(40147);

function u(e) {
  let {
sortOrder: n,
onSortOptionClick: t,
closePopout: l
  } = e, u = e => {
t(e), l();
  };
  return (0, i.jsx)('div', {
className: a()(s.Jh, c.container),
children: (0, i.jsx)(r.Menu, {
  navId: 'command-list-sort',
  'aria-label': o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_A11Y_LABEL,
  hideScroller: !0,
  onClose: l,
  onSelect: l,
  children: (0, i.jsxs)(r.MenuGroup, {
    label: o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_HEADER,
    children: [
      (0, i.jsx)(r.MenuRadioItem, {
        id: 'sort-by-popular',
        group: 'sort-by',
        label: o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_POPULAR,
        action: () => u(s.bS.POPULAR),
        checked: n === s.bS.POPULAR
      }),
      (0, i.jsx)(r.MenuRadioItem, {
        id: 'sort-by-alphabetical',
        group: 'sort-by',
        label: o.Z.Messages.APP_LAUNCHER_COMMAND_LIST_SORT_OPTION_ALPHABETICAL,
        action: () => u(s.bS.ALPHABETICAL),
        checked: n === s.bS.ALPHABETICAL
      })
    ]
  })
})
  });
}