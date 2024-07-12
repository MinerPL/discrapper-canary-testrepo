n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  l = n.n(a),
  s = n(481060),
  r = n(689938),
  o = n(767826);

function c(e) {
  let {
className: t,
iconContainerClassName: n,
icon: a,
color: c,
title: d,
description: u,
userCount: h,
onClick: p,
highlight: m
  } = e;
  return (0, i.jsxs)(s.Clickable, {
className: l()(o.container, t, null != m && {
  [o.pulse]: m
}),
onClick: p,
children: [
  (0, i.jsx)('div', {
    style: {
      backgroundColor: c
    },
    className: l()(o.icon, n),
    children: a
  }),
  (0, i.jsxs)('div', {
    className: o.textContainer,
    children: [
      (0, i.jsx)(s.Heading, {
        variant: 'heading-md/semibold',
        children: d
      }),
      (0, i.jsx)(s.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        className: o.inline,
        children: u
      }),
      null != h && h > 0 ? (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            className: o.dot,
            children: '\u2022'
          }),
          (0, i.jsx)(s.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            className: o.inline,
            children: r.Z.Messages.GUILD_EVENT_INTERESTED.format({
              count: h
            })
          })
        ]
      }) : null
    ]
  }),
  (0, i.jsx)(s.ChevronSmallRightIcon, {
    size: 'xs',
    color: 'currentColor',
    className: o.caret
  })
]
  });
}