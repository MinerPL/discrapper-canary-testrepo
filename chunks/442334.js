s.d(t, {
  O: function() {
return c;
  },
  Q: function() {
return d;
  }
});
var n = s(735250),
  a = s(470079),
  i = s(120356),
  r = s.n(i),
  o = s(481060),
  l = s(249866);

function c(e) {
  let {
title: t,
note: s,
children: a,
className: i,
id: c
  } = e;
  return (0, n.jsxs)('div', {
className: r()(l.inputItem, i),
children: [
  (0, n.jsxs)('div', {
    className: l.inputItemText,
    children: [
      (0, n.jsx)(o.Text, {
        tag: 'label',
        variant: 'text-md/medium',
        className: l.inputItemTitle,
        id: c,
        children: t
      }),
      null != s && (0, n.jsx)(o.FormText, {
        className: l.__invalid_note,
        type: o.FormText.Types.DESCRIPTION,
        children: s
      })
    ]
  }),
  a
]
  });
}

function d(e) {
  let {
options: t,
value: s,
select: i,
selectClassName: d,
..._
  } = e, E = a.useId();
  return (0, n.jsx)(c, {
..._,
id: E,
children: (0, n.jsx)(o.Select, {
  'aria-labelledby': E,
  className: r()(l.selectControl, d),
  options: t,
  isSelected: e => e === s,
  select: i,
  serialize: e => String(e)
})
  });
}