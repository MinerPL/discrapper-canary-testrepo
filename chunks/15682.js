n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(191982);
let s = e => {
  let {
onChange: t,
label: n,
subtitle: s,
selected: o
  } = e;
  return (0, r.jsx)('div', {
className: a.checkboxRow,
children: (0, r.jsxs)(i.Checkbox, {
  type: i.Checkbox.Types.INVERTED,
  onChange: () => t(),
  value: o,
  children: [
    (0, r.jsx)(i.Text, {
      color: 'interactive-active',
      variant: 'text-md/semibold',
      children: n
    }),
    null != s ? (0, r.jsx)(i.Text, {
      color: 'interactive-active',
      variant: 'text-sm/normal',
      children: s
    }) : null
  ]
})
  });
};
t.Z = e => {
  let {
element: t,
state: n,
onChange: i
  } = e;
  if ((null == t ? void 0 : t.type) !== 'checkbox')
return null;
  let {
data: a
  } = t;
  return (0, r.jsx)('div', {
children: a.map((e, t) => {
  let [a, o, l] = e;
  return (0, r.jsx)(s, {
    onChange: () => i(a, o),
    selected: a in n,
    label: o,
    subtitle: l
  }, ''.concat(t, '+button'));
})
  });
};