n.d(t, {
  Z: function() {
return o;
  }
});
var s = n(735250);
n(470079);
var a = n(120356),
  r = n.n(a),
  i = n(481060),
  l = n(382114);

function o(e) {
  let {
icon: t,
tooltip: n,
onClick: a,
className: o
  } = e, c = e => {
e.preventDefault(), e.stopPropagation(), a(e);
  };
  return (0, s.jsx)(i.Tooltip, {
text: n,
children: e => (0, s.jsx)(i.Clickable, {
  ...e,
  'aria-label': n,
  onClick: c,
  className: r()(l.actionButton, o),
  children: (0, s.jsx)(t, {
    className: l.icon,
    color: 'currentColor'
  })
})
  });
}