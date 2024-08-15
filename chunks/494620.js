t.d(n, {
  Z: function() {
return m;
  },
  z: function() {
return s;
  }
});
var l, s, a = t(735250);
t(470079);
var r = t(120356),
  i = t.n(r),
  o = t(481060),
  c = t(151876);
(l = s || (s = {})).INFO = 'info', l.WARNING = 'warning';
let u = {
info: c.info,
warning: c.warning
  },
  d = {
info: o.CircleInformationIcon,
warning: o.CircleWarningIcon
  };

function m(e) {
  let {
children: n,
className: t,
look: l = 'info'
  } = e, s = d[l];
  return (0, a.jsxs)('div', {
className: i()(c.root, t, u[l]),
children: [
  (0, a.jsx)(s, {
    className: c.icon
  }),
  (0, a.jsx)(o.Text, {
    className: c.text,
    variant: 'text-sm/medium',
    color: 'text-normal',
    children: n
  })
]
  });
}