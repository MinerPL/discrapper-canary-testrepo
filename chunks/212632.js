n(47120);
var i = n(735250),
  s = n(470079),
  a = n(120356),
  o = n.n(a),
  r = n(481060),
  l = n(981631),
  c = n(689938),
  d = n(526201),
  u = n(224499);
let h = 0,
  p = () => 'notification-position-selector-'.concat(h++),
  f = e => {
switch (e) {
  case l._vf.TOP_LEFT:
    return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_LEFT;
  case l._vf.TOP_RIGHT:
    return c.Z.Messages.OVERLAY_NOTIFICATIONS_TOP_RIGHT;
  case l._vf.BOTTOM_LEFT:
    return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_LEFT;
  case l._vf.BOTTOM_RIGHT:
    return c.Z.Messages.OVERLAY_NOTIFICATIONS_BOTTOM_RIGHT;
  default:
    return c.Z.Messages.OVERLAY_NOTIFICATIONS_DISABLED;
}
  },
  _ = [
l._vf.DISABLED,
l._vf.TOP_LEFT,
l._vf.TOP_RIGHT,
l._vf.BOTTOM_LEFT,
l._vf.BOTTOM_RIGHT
  ];

function g(e) {
  let {
position: t,
onChange: n
  } = e, [a] = s.useState(() => p()), h = t === l._vf.DISABLED ? c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_DISABLED : c.Z.Messages.OVERLAY_NOTIFICATION_SETTINGS_POSITION.format({
position: f(t)
  });
  return (0, i.jsxs)('div', {
children: [
  (0, i.jsx)(r.FocusRing, {
    within: !0,
    offset: -2,
    children: (0, i.jsx)('div', {
      className: o()(d.wrapper, {
        [d.disabledSelected]: t === l._vf.DISABLED
      }),
      children: _.map(e => (0, i.jsxs)('label', {
        className: o()({
          [d.selected]: e === t,
          [d.disabled]: e === l._vf.DISABLED,
          [d.topRight]: e === l._vf.TOP_RIGHT,
          [d.topLeft]: e === l._vf.TOP_LEFT,
          [d.bottomRight]: e === l._vf.BOTTOM_RIGHT,
          [d.bottomLeft]: e === l._vf.BOTTOM_LEFT
        }),
        children: [
          f(e),
          e === l._vf.DISABLED ? (0, i.jsx)(r.DenyIcon, {
            size: 'md',
            color: 'currentColor',
            className: d.disabledIcon
          }) : null,
          (0, i.jsx)('input', {
            type: 'radio',
            name: a,
            value: e,
            onChange: t => n(t, e),
            className: d.hiddenInput
          })
        ]
      }, e))
    })
  }),
  (0, i.jsx)(r.FormText, {
    type: r.FormTextTypes.DESCRIPTION,
    className: u.marginTop8,
    children: h
  })
]
  });
}
g.Positions = l._vf, t.Z = g;