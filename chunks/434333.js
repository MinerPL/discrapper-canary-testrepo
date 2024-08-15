n.d(t, {
  k: function() {
return d;
  },
  m: function() {
return c;
  }
});
var r = n(735250),
  i = n(470079),
  a = n(120356),
  s = n.n(a),
  o = n(1561),
  l = n(481060),
  u = n(381404);
let c = {
RED: u.backgroundRed,
BACKGROUND_TERTIARY: u.backgroundTertiary,
BACKGROUND_ACCENT: u.backgroundAccent
  },
  d = i.forwardRef(function(e, t) {
let {
  role: n,
  children: i,
  className: a,
  onDismiss: d,
  backgroundColor: _ = c.RED,
  icon: E = l.CircleWarningIcon,
  iconClassName: f
} = e;
return (0, r.jsxs)('div', {
  className: s()(u.error, a, _),
  ref: t,
  children: [
    (0, r.jsx)(E, {
      className: s()(u.icon, f),
      color: 'currentColor'
    }),
    (0, r.jsx)('div', {
      role: n,
      className: u.text,
      children: i
    }),
    null != d ? (0, r.jsx)(o.P, {
      onClick: d,
      className: u.errorClose,
      children: (0, r.jsx)(l.XSmallIcon, {
        size: 'md',
        color: 'currentColor',
        className: u.errorCloseIcon
      })
    }) : null
  ]
});
  });