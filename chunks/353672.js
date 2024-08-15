s.d(t, {
  Z: function() {
return _;
  }
});
var T = s(735250);
s(470079);
var o = s(120356),
  n = s.n(o),
  a = s(481060),
  l = s(296664);

function _(e) {
  let {
tips: t,
className: s,
headerText: o
  } = e;
  return (0, T.jsxs)('div', {
className: n()(l.tipsSection, s),
children: [
  (0, T.jsx)('div', {
    className: l.tipsHeader,
    children: (0, T.jsx)(a.Heading, {
      variant: 'heading-lg/bold',
      className: l.headerText,
      children: o
    })
  }),
  (0, T.jsx)('ul', {
    className: l.tipsList,
    children: t.map((e, t) => (0, T.jsxs)('li', {
      className: l.tipRow,
      children: [
        (0, T.jsx)(a.Heading, {
          variant: 'heading-md/semibold',
          color: 'text-brand',
          className: l.tipNumber,
          children: t + 1
        }),
        (0, T.jsx)(a.Text, {
          variant: 'text-sm/medium',
          children: e
        })
      ]
    }, 'safety-tips-'.concat(t)))
  })
]
  });
}