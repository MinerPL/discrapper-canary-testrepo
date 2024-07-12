n(47120);
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(259580),
  o = n(105308);
let s = e => {
  let {
child: t,
onClick: n
  } = e, [s] = t;
  return (0, r.jsxs)(i.Clickable, {
className: o.childButton,
onClick: () => n(t),
children: [
  (0, r.jsx)(i.Text, {
    className: o.childText,
    variant: 'text-md/semibold',
    children: s
  }),
  (0, r.jsx)(a.Z, {
    className: o.childIcon,
    direction: a.Z.Directions.RIGHT
  })
]
  });
};
t.Z = e => {
  let {
node: {
  children: t
},
onSelectChild: n
  } = e;
  if (null == t || 0 === t.length)
return null;
  let i = t.map(e => {
let [t, i] = e;
return (0, r.jsx)(s, {
  child: e,
  onClick: n
}, ''.concat(t, '+').concat(i));
  });
  return (0, r.jsx)('div', {
className: o.__invalid_childrenContainer,
children: i
  });
};