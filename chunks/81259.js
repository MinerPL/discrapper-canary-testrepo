s.d(t, {
  Z: function() {
return m;
  }
}), s(627341);
var n = s(735250);
s(470079);
var i = s(120356),
  a = s.n(i),
  r = s(278074),
  l = s(692547),
  o = s(481060),
  u = s(551556),
  d = s(740080);
let c = () => (0, n.jsx)(u.Z, {
width: 13,
height: 13,
backgroundColor: l.Z.colors.TEXT_POSITIVE.css
  }),
  E = () => (0, n.jsx)(o.CircleXIcon, {
size: 'custom',
width: 13,
height: 13,
color: l.Z.colors.TEXT_DANGER.css
  }),
  _ = () => (0, n.jsx)(o.CircleXIcon, {
size: 'custom',
width: 13,
height: 13,
color: l.Z.colors.TEXT_WARNING.css
  });

function m(e) {
  let t = (0, r.EQ)(e.type).with('info', () => (0, n.jsx)(_, {})).with('error', () => (0, n.jsx)(E, {})).with('success', () => (0, n.jsx)(c, {})).otherwise(() => null);
  return (0, n.jsxs)(n.Fragment, {
children: [
  t,
  (0, n.jsx)(o.Text, {
    variant: 'text-sm/medium',
    className: a()(d.formMessage, {
      [d.formMessageNegative]: 'error' === e.type,
      [d.formMessagePositive]: 'success' === e.type
    }),
    children: e.children
  })
]
  });
}