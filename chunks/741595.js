t.d(n, {
  R: function() {
return d;
  }
});
var a = t(735250),
  r = t(470079),
  i = t(120356),
  s = t.n(i),
  o = t(481060),
  l = t(308083),
  c = t(363778);

function d(e) {
  let {
playstyle: n,
onUpdatePlaystyle: t
  } = e, i = (0, o.useToken)(o.tokens.colors.WHITE), d = r.useMemo(() => Object.values((0, l.f4)()), []);
  return (0, a.jsx)('div', {
className: c.playstyleSelect,
children: d.map(e => (0, a.jsxs)(o.Clickable, {
  className: s()(c.playstyleOption, c.selectableOption, {
    [c.selectedOption]: e.type === n
  }),
  onClick: () => t(e.type),
  children: [
    (0, a.jsx)(o.Heading, {
      variant: 'heading-xxl/medium',
      children: e.emoji
    }),
    (0, a.jsx)(o.Heading, {
      variant: 'heading-md/medium',
      className: c.playstyleTitle,
      children: e.title
    }),
    (0, a.jsx)(o.Text, {
      variant: 'text-xs/normal',
      color: 'text-muted',
      children: e.subtitle
    }),
    e.type === n && (0, a.jsx)(o.CircleCheckIcon, {
      size: 'md',
      color: 'currentColor',
      secondaryColor: i.hex(),
      className: c.checkmark
    })
  ]
}, e.type))
  });
}
n.Z = e => {
  let {
title: n,
description: t,
onUpdatePlaystyle: r,
playstyle: i,
error: s
  } = e;
  return (0, a.jsxs)('div', {
className: c.slideContent,
children: [
  (0, a.jsx)(o.Heading, {
    variant: 'heading-xxl/medium',
    className: c.title,
    children: n
  }),
  (0, a.jsx)(o.Text, {
    variant: 'text-md/normal',
    color: 'header-secondary',
    className: c.subtitle,
    children: t
  }),
  null != s && (0, a.jsx)(o.Text, {
    variant: 'text-sm/normal',
    color: 'status-danger',
    className: c.errorText,
    children: s
  }),
  (0, a.jsx)(d, {
    playstyle: i,
    onUpdatePlaystyle: r
  })
]
  });
};