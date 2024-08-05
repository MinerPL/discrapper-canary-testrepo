n.d(t, {
  Z: function() {
return E;
  }
}), n(47120);
var i = n(735250),
  a = n(470079),
  s = n(120356),
  l = n.n(s),
  r = n(442837),
  o = n(780384),
  c = n(481060),
  u = n(393238),
  d = n(410030),
  h = n(607070),
  p = n(466794),
  m = n(602198),
  _ = n(546240),
  f = n(952009);

function E(e) {
  let {
checked: t,
labelText: n,
tooltipText: s,
canToggle: E,
iconAltText: g,
onChange: C,
tooltipColor: I,
className: x,
id: T = 'fancybutton-toggle',
collapseWhenChecked: N = !0,
onClick: v,
disabled: S
  } = e, Z = (0, r.e7)([h.Z], () => h.Z.useReducedMotion), [A, M] = a.useState(!1), b = (0, d.ZP)(), R = (0, o.wj)(b) || t ? f : _, {
width: j = 0,
ref: L
  } = (0, u.Z)(), {
width: P = 0,
ref: O
  } = (0, u.Z)();
  return (0, i.jsxs)(c.TooltipContainer, {
text: (0, i.jsx)(p.X, {
  textColor: 'always-white',
  tooltipText: s
}),
position: 'top',
color: null != I ? I : S ? c.Tooltip.Colors.BLACK : c.Tooltip.Colors.BRAND,
'aria-label': s,
tooltipClassName: m.tooltip,
className: m.tooltipContainer,
children: [
  (0, i.jsx)('input', {
    className: m.visuallyHidden,
    checked: t,
    onChange: function() {
      if (E) {
        let e = !t;
        M(!0), null == C || C(e);
      }
      'function' == typeof v && v();
    },
    id: T,
    type: 'checkbox',
    disabled: S
  }),
  (0, i.jsxs)('label', {
    htmlFor: T,
    className: l()(m.label, x, {
      [m.transition]: A,
      [m.labelChecked]: t,
      [m.labelUnchecked]: !t && !E
    }),
    style: N ? {
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
        alt: g
      }),
      (0, i.jsx)('span', {
        ref: O,
        children: (0, i.jsx)(c.Text, {
          className: l()(m.burstText, {
            [m.visuallyHidden]: t && N,
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