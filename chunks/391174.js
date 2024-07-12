n.d(t, {
  Z: function() {
return c;
  }
});
var s = n(735250),
  a = n(470079),
  r = n(120356),
  l = n.n(r),
  i = n(725436),
  u = n(413091),
  o = n(153521);

function c(e) {
  let {
description: t,
className: n,
guildId: r,
truncate: c = !0
  } = e, E = a.useMemo(() => (0, i.m)(t, !0, {
guildId: r,
allowLinks: !0,
allowHeading: !0,
allowList: !0
  }), [
t,
r
  ]);
  return (0, s.jsx)('div', {
className: l()(u.descriptionText, n, o.markup, {
  [u.truncate]: c
}),
children: E
  });
}