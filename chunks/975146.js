n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250);
n(470079);
var a = n(120356),
  s = n.n(a),
  l = n(481060),
  r = n(871499),
  o = n(689938),
  c = n(450910);

function u(e) {
  let {
className: t,
count: n
  } = e;
  return (0, i.jsxs)('div', {
className: s()(c.root, c.comboIcon, t),
children: [
  (0, i.jsx)(l.GroupIcon, {
    size: 'md',
    color: 'currentColor',
    className: c.icon
  }),
  (0, i.jsx)(l.Text, {
    color: 'none',
    className: c.count,
    variant: 'text-md/normal',
    children: n
  })
]
  });
}

function d(e) {
  let {
count: t,
...n
  } = e;
  return (0, i.jsx)(r.Z, {
label: o.Z.Messages.CHANNEL_CALL_PARTICIPANTS,
iconComponent: e => {
  let {
    className: n
  } = e;
  return (0, i.jsx)(u, {
    className: n,
    count: t
  });
},
tooltipPosition: 'bottom',
...n
  });
}