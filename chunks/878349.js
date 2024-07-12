n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  l = n(120356),
  s = n.n(l),
  r = n(442837),
  o = n(780384),
  c = n(481060),
  d = n(393238),
  u = n(410030),
  h = n(607070),
  p = n(466794),
  m = n(602198),
  _ = n(546240),
  f = n(952009);

function E(e) {
  let {
checked: t,
labelText: n,
tooltipText: l,
canToggle: E,
iconAltText: C,
onChange: g,
tooltipColor: I,
className: x,
id: T = 'fancybutton-toggle',
collapseWhenChecked: v = !0,
onClick: N,
disabled: S
  } = e, Z = (0, r.e7)([h.Z], () => h.Z.useReducedMotion), [A, M] = a.useState(!1), b = (0, u.ZP)(), R = (0, o.wj)(b) || t ? f : _, {
width: j = 0,
ref: L
  } = (0, d.Z)(), {
width: P = 0,
ref: O
  } = (0, d.Z)();
  return (0, i.jsxs)(c.TooltipContainer, {
text: (0, i.jsx)(p.X, {
  textColor: 'always-white',
  tooltipText: l
}),
position: 'top',
color: null != I ? I : S ? c.Tooltip.Colors.BLACK : c.Tooltip.Colors.BRAND,
'aria-label': l,
tooltipClassName: m.tooltip,
className: m.tooltipContainer,
children: [
  (0, i.jsx)('input', {
    className: m.visuallyHidden,
    checked: t,
    onChange: function() {
      if (E) {
        let e = !t;
        M(!0), null == g || g(e);
      }
      'function' == typeof N && N();
    },
    id: T,
    type: 'checkbox',
    disabled: S
  }),
  (0, i.jsxs)('label', {
    htmlFor: T,
    className: s()(m.label, x, {
      [m.transition]: A,
      [m.labelChecked]: t,
      [m.labelUnchecked]: !t && !E
    }),
    style: v ? {
      width: t ? j : j + P
    } : void 0,
    children: [
      t ? (0, i.jsx)(c.Shine, {
        className: m.shine,
        shinePaused: Z
      }) : null,
      (0, i.jsx)('img', {
        ref: L,
        src: R,
        alt: C
      }),
      (0, i.jsx)('span', {
        ref: O,
        children: (0, i.jsx)(c.Text, {
          className: s()(m.burstText, {
            [m.visuallyHidden]: t && v,
            [m.burstTextChecked]: t
          }),
          variant: 'text-sm/semibold',
          children: n
        })
      })
    ]
  })
]
  });
}