var i = n(735250);
n(470079);
var s = n(481060),
  a = n(360048),
  r = n(731455),
  l = n(689938),
  o = n(283831);
t.Z = e => {
  let {
handleCategorySelect: t,
shouldDisplaySelectedCategory: n,
currentCategoryId: c
  } = e;
  return (0, i.jsx)(a.Z, {
avatar: (0, i.jsx)(s.HubIcon, {
  size: 'md',
  color: 'currentColor'
}),
name: l.Z.Messages.HUB_SCHOOL_HUBS,
focusProps: {
  offset: {
    right: 4,
    top: 1,
    bottom: 1
  }
},
onClick: () => {
  t(r.U);
},
wrapContent: !0,
selected: n && r.U === c,
className: o.categoryItem,
selectedClassName: o.selectedCategoryItem,
innerClassName: o.itemInner
  }, r.U);
};