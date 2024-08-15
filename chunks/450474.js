var s = n(735250);
n(470079);
var a = n(481060),
  i = n(296386),
  r = n(150192),
  l = n(285888),
  o = n(203377),
  c = n(592602);
t.Z = e => {
  let {
guild: t,
guildMetadata: n,
menuPlacement: d,
disabled: u
  } = e, _ = e => {
let {
  secondaryCategoryIds: s
} = n, a = e.map(e => e.value);
if (e.length < s.length)
  s.filter(e => !a.includes(e)).forEach(e => (0, i.K0)(t.id, e));
else {
  if (s.length >= o.Pg)
    return;
  a.filter(e => !s.includes(e)).forEach(e => (0, i.Kq)(t.id, e));
}
  }, I = e => {
(0, i.K0)(t.id, e);
  }, E = e => {
e.preventDefault(), e.stopPropagation();
  }, T = r.Z.getAllCategories().map(e => {
let {
  categoryId: t,
  name: n
} = e;
return {
  value: t,
  label: n
};
  });
  return (0, s.jsx)(l.Z, {
value: n.secondaryCategoryIds,
searchable: !0,
clearable: !1,
options: T,
onChange: e => _(e),
multiValueRenderer: e => {
  let {
    label: t,
    value: n
  } = e;
  return (0, s.jsxs)('span', {
    className: c.subcategory,
    onMouseDown: E,
    children: [
      t,
      (0, s.jsx)(a.Clickable, {
        className: c.closeWrapper,
        onClick: () => I(n),
        children: (0, s.jsx)(a.XSmallIcon, {
          size: 'xs',
          color: 'currentColor',
          className: c.close
        })
      })
    ]
  });
},
menuPlacement: d,
disabled: u,
isMulti: !0
  });
};