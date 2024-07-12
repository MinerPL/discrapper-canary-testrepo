n.d(t, {
  L: function() {
return u;
  },
  Z: function() {
return c;
  }
});
var r = n(735250);
n(470079);
var i = n(120356),
  a = n.n(i),
  o = n(481060),
  s = n(285952),
  l = n(720746);

function u(e) {
  return e < 400 ? 'small' : e < 1000 ? 'medium' : 'large';
}

function c(e) {
  let {
onCTAClick: t,
callToAction: n,
header: i,
description: u,
size: c,
className: d,
artURL: _,
noArt: E = !1,
selected: f = !1
  } = e;
  return (0, r.jsxs)(s.Z, {
className: d,
justify: s.Z.Justify.CENTER,
align: s.Z.Align.CENTER,
direction: s.Z.Direction.VERTICAL,
style: {
  padding: 4
},
children: [
  !E && null != _ && (0, r.jsx)('div', {
    className: a()(l.art, l[c]),
    style: {
      backgroundImage: 'url('.concat(_, ')')
    }
  }),
  null != i ? (0, r.jsx)(o.Text, {
    color: 'none',
    variant: 'text-md/semibold',
    className: l.header,
    children: i
  }) : null,
  null != u ? (0, r.jsx)(o.Text, {
    color: 'none',
    className: l.description,
    variant: 'text-sm/medium',
    children: u
  }) : null,
  f || null == n ? null : (0, r.jsx)(o.Button, {
    className: l.outerButton,
    size: o.Button.Sizes.NONE,
    color: o.Button.Colors.WHITE,
    look: o.Button.Looks.BLANK,
    innerClassName: l.button,
    onClick: e => {
      e.stopPropagation(), null == t || t(e);
    },
    children: n
  })
]
  });
}