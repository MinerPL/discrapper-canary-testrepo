t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250),
  a = t(470079),
  s = t(120356),
  l = t.n(s),
  o = t(481060),
  r = t(689938),
  d = t(433783);
let c = [
  !1,
  !0
];

function u(e) {
  let {
isDisabled: n,
currentValue: t,
onChange: s
  } = e, r = (0, o.useRadioGroup)({
orientation: 'horizontal',
isDisabled: n
  }), u = a.useCallback(e => {
!n && e !== t && s(e);
  }, [
n,
t,
s
  ]);
  return (0, i.jsx)('div', {
className: l()(d.group, {
  [d.disabled]: n
}),
...r,
children: c.map(e => (0, i.jsx)(I, {
  isSelected: t === e,
  itemValue: e,
  onClick: () => u(e)
}, e.toString()))
  });
}

function I(e) {
  let {
isSelected: n,
itemValue: t,
onClick: a
  } = e, s = t ? d.allow : d.deny, c = t ? o.CheckmarkLargeIcon : o.CloseSmallIcon, u = t ? r.Z.Messages.PERMISSION_OVERRIDE_ALLOW : r.Z.Messages.PERMISSION_OVERRIDE_DENY, I = (0, o.useRadioItem)({
isSelected: n,
label: u
  });
  return (0, i.jsx)(o.Clickable, {
className: l()(d.item, s, {
  [d.selected]: n
}),
onClick: a,
...I,
children: (0, i.jsx)(c, {
  size: 'xs',
  color: 'currentColor'
})
  });
}