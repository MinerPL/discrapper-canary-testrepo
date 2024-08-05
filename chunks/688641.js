n.d(t, {
  Z: function() {
return c;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(689938),
  o = n(767826);

function c(e) {
  let {
className: t,
iconContainerClassName: n,
icon: a,
color: c,
title: u,
description: d,
userCount: h,
onClick: p,
highlight: m
  } = e;
  return (0, i.jsxs)(l.Clickable, {
className: s()(o.container, t, null != m && {
  [o.pulse]: m
}),
onClick: p,
children: [
  (0, i.jsx)('div', {
    style: {
      backgroundColor: c
    },
    className: s()(o.icon, n),
    children: a
  }),
  (0, i.jsxs)('div', {
    className: o.textContainer,
    children: [
      (0, i.jsx)(l.Heading, {
        variant: 'heading-md/semibold',
        children: u
      }),
      (0, i.jsx)(l.Text, {
        variant: 'text-xs/normal',
        color: 'header-secondary',
        className: o.inline,
        children: d
      }),
      null != h && h > 0 ? (0, i.jsxs)(i.Fragment, {
        children: [
          (0, i.jsx)(l.Text, {
            variant: 'text-xs/normal',
            color: 'header-secondary',
            className: o.dot,
            children: '\u2022'
          }),
          (0, i.jsx)(l.Text, {
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
  (0, i.jsx)(l.ChevronSmallRightIcon, {
    size: 'xs',
    color: 'currentColor',
    className: o.caret
  })
]
  });
}