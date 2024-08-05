n.d(t, {
  Z: function() {
return l;
  }
});
var r = n(735250);
n(470079);
var i = n(481060),
  a = n(499033),
  s = n(689938),
  o = n(202635);

function l() {
  return (0, r.jsxs)('div', {
className: o.container,
children: [
  (0, r.jsxs)('div', {
    className: o.iconContainer,
    children: [
      (0, r.jsx)('div', {
        className: o.icon,
        children: (0, r.jsx)(i.TopicsIcon, {
          size: 'custom',
          color: 'currentColor',
          className: o.iconOffset,
          width: 28,
          height: 28
        })
      }),
      (0, r.jsx)(a.Z, {
        className: o.stars
      })
    ]
  }),
  (0, r.jsx)(i.Heading, {
    className: o.header,
    variant: 'heading-xl/semibold',
    children: s.Z.Messages.SUMMARY_EMPTY_STATE_TITLE
  }),
  (0, r.jsx)(i.Text, {
    className: o.text,
    color: 'header-secondary',
    variant: 'text-md/normal',
    children: s.Z.Messages.SUMMARY_EMPTY_STATE_TEXT
  })
]
  });
}