s.d(t, {
  Z: function() {
return i;
  }
});
var o = s(735250);
s(470079);
var T = s(120356),
  n = s.n(T),
  a = s(481060),
  l = s(250617);

function i(e) {
  let {
tips: t,
className: s,
headerText: T
  } = e;
  return (0, o.jsxs)('div', {
className: n()(l.tipsSection, s),
children: [
  (0, o.jsx)('div', {
    className: l.tipsHeader,
    children: (0, o.jsx)(a.Heading, {
      variant: 'heading-lg/bold',
      className: l.headerText,
      children: T
    })
  }),
  (0, o.jsx)('ul', {
    className: l.tipsList,
    children: t.map((e, t) => (0, o.jsxs)('li', {
      className: l.tipRow,
      children: [
        (0, o.jsx)(a.Heading, {
          variant: 'heading-md/semibold',
          color: 'text-brand',
          className: l.tipNumber,
          children: t + 1
        }),
        (0, o.jsx)(a.Text, {
          variant: 'text-sm/medium',
          children: e
        })
      ]
    }, 'safety-tips-'.concat(t)))
  })
]
  });
}