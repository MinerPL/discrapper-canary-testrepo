t.d(n, {
  y: function() {
return a;
  }
});
var i, a, s = t(735250);
t(470079);
var l = t(120356),
  o = t.n(l),
  r = t(481060),
  c = t(689938),
  d = t(453380);
(i = a || (a = {})).DENY = 'DENY', i.PASSTHROUGH = 'PASSTHROUGH', i.ALLOW = 'ALLOW';
let u = Object.keys(a);

function I(e) {
  let {
value: n = 'PASSTHROUGH',
onChange: t,
labelledBy: i,
disabled: a = !1
  } = e, l = (0, r.useRadioGroup)({
orientation: 'horizontal',
isDisabled: a,
labelledBy: i
  });
  return (0, s.jsx)('div', {
className: o()(d.group, {
  [d.disabled]: a
}),
...l,
children: u.map(e => (0, s.jsx)(m, {
  type: e,
  isSelected: n === e,
  onSelect: e => {
    n !== e && !a && t(e);
  }
}, e))
  });
}

function m(e) {
  let n, t, i, {
type: a,
onSelect: l,
isSelected: u
  } = e;
  switch (a) {
case 'DENY':
  i = c.Z.Messages.PERMISSION_OVERRIDE_DENY, n = r.CloseSmallIcon, t = d.deny;
  break;
case 'ALLOW':
  i = c.Z.Messages.PERMISSION_OVERRIDE_ALLOW, n = r.CheckmarkLargeIcon, t = d.allow;
  break;
default:
  i = c.Z.Messages.PERMISSION_OVERRIDE_PASSTHROUGH, n = r.SlashIcon, t = d.passthrough;
  }
  let I = (0, r.useRadioItem)({
isSelected: u,
label: i
  });
  return (0, s.jsx)(r.Clickable, {
className: o()(d.item, t, {
  [d.selected]: u
}),
onClick: () => l(a),
...I,
children: (0, s.jsx)(n, {
  color: 'currentColor',
  size: 'xs'
})
  });
}
I.Types = a, n.Z = I;