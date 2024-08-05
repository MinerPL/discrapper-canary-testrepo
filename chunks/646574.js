n.d(t, {
  Z: function() {
return g;
  }
}), n(47120);
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(338545),
  l = n(442837),
  u = n(704215),
  c = n(481060),
  d = n(607070),
  _ = n(243778),
  E = n(594174),
  f = n(74538),
  h = n(921944),
  p = n(689938),
  m = n(774577);
let I = {
  tension: 750,
  mass: 2.5,
  friction: 70
};

function T(e) {
  let {
tooltipText: t,
headingText: n,
textColor: i
  } = e, a = null != n;
  return (0, r.jsxs)('span', {
className: a ? void 0 : m.tooltipContainer,
children: [
  (0, r.jsxs)('span', {
    className: m.tooltipContainer,
    children: [
      (0, r.jsx)(c.NitroWheelIcon, {
        size: 'md',
        color: 'currentColor',
        className: m.nitroWheel
      }),
      a ? (0, r.jsx)(c.Heading, {
        color: null != i ? i : 'text-normal',
        variant: 'heading-sm/semibold',
        children: n
      }) : null
    ]
  }),
  (0, r.jsx)(c.Text, {
    variant: a ? 'text-xs/normal' : 'text-sm/medium',
    color: null != i ? i : 'text-normal',
    children: t
  })
]
  });
}

function g(e) {
  let {
checked: t,
onClick: n,
id: a = 'burst-reaction-toggle-button'
  } = e, g = (0, l.e7)([d.Z], () => d.Z.useReducedMotion), S = E.default.getCurrentUser(), A = null == S || (0, f.I5)(S) ? [u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP] : [], [N, v] = (0, _.U)(A), [O, R] = i.useState(!1), [C, y] = (0, c.useSpring)(() => ({})), D = (0, o.animated)(c.SuperReactionIcon);
  i.useEffect(() => {
let e = N === u.z.SUPER_REACTION_TOGGLE_EDUCATION_DESKTOP;
e && (v(h.L.DISMISS), setTimeout(() => R(e), 200));
  }, [
N,
v
  ]);
  let L = O ? p.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_DESCRIPTION_DESKTOP_V2 : t ? p.Z.Messages.SUPER_REACTION_TOGGLE_ENABLED : p.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED,
b = O ? p.Z.Messages.SUPER_REACTIONS_UNLIMITED_NOTICE_TITLE : void 0;
  return (0, r.jsxs)(c.TooltipContainer, {
position: 'top',
text: (0, r.jsx)(T, {
  textColor: 'always-white',
  tooltipText: L,
  headingText: b
}),
color: c.Tooltip.Colors.BRAND,
forceOpen: O,
'aria-label': L,
tooltipClassName: m.tooltip,
children: [
  (0, r.jsx)('input', {
    className: m.visuallyHidden,
    checked: t,
    onChange: function() {
      y({
        from: {
          rotate: t ? '360deg' : '0deg'
        },
        to: {
          rotate: t ? '0deg' : '360deg'
        },
        config: I
      }), null == n || n(), R(!1);
    },
    id: a,
    type: 'checkbox'
  }),
  (0, r.jsxs)('label', {
    htmlFor: a,
    className: s()(m.label, {
      [m.labelChecked]: t
    }),
    children: [
      t ? (0, r.jsx)(c.Shine, {
        className: m.shine,
        shinePaused: g
      }) : null,
      (0, r.jsx)(D, {
        style: g ? void 0 : C,
        size: 'custom',
        width: 20,
        height: 20,
        color: t ? 'white' : 'currentColor',
        className: m.icon
      }),
      (0, r.jsx)('span', {
        children: (0, r.jsx)(c.Text, {
          className: m.visuallyHidden,
          variant: 'text-sm/semibold',
          children: p.Z.Messages.SUPER_REACTION_TOGGLE_DISABLED
        })
      })
    ]
  })
]
  });
}