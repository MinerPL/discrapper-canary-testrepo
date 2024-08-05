s.d(t, {
  Z: function() {
return E;
  },
  z: function() {
return a;
  }
});
var n, a, i = s(735250);
s(470079);
var r = s(120356),
  o = s.n(r),
  l = s(481060),
  c = s(701714);
(n = a || (a = {})).INFO = 'info', n.WARNING = 'warning';
let d = {
info: c.info,
warning: c.warning
  },
  _ = {
info: l.CircleInformationIcon,
warning: l.CircleExclamationPointIcon
  };

function E(e) {
  let {
children: t,
className: s,
look: n = 'info'
  } = e, a = _[n];
  return (0, i.jsxs)('div', {
className: o()(c.root, s, d[n]),
children: [
  (0, i.jsx)(a, {
    className: c.icon
  }),
  (0, i.jsx)(l.Text, {
    className: c.text,
    variant: 'text-sm/medium',
    color: 'text-normal',
    children: t
  })
]
  });
}