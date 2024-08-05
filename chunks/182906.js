n.d(t, {
  Z: function() {
return l;
  }
}), n(47120);
var i = n(735250),
  s = n(470079),
  a = n(558522),
  r = n(195787);

function l(e) {
  let {
imageBackground: t,
applicationName: n,
imageClassName: l,
imageNotFoundClassName: o
  } = e, [c, u] = s.useState(!1);
  return 'not-found' === t.state || c ? (0, i.jsx)('div', {
className: o,
children: (0, i.jsx)(a.Z, {
  className: r.brokenImageIcon
})
  }) : 'loading' === t.state ? null : (0, i.jsx)('img', {
alt: n,
className: l,
src: t.url,
onError: () => u(!0)
  });
}