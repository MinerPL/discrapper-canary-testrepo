t.d(n, {
  Z: function() {
return u;
  }
});
var i = t(735250),
  a = t(470079),
  l = t(120356),
  o = t.n(l),
  r = t(768581),
  s = t(689938),
  c = t(106477);

function u(e) {
  let {
application: n,
src: t,
className: l,
size: u,
botIconFirst: d,
fallbackAvatar: m,
rendersPlaceholder: p = !1
  } = e, _ = a.useMemo(() => null != n ? r.ZP.getApplicationIconURL({
id: n.id,
icon: n.icon,
bot: n.bot,
size: u,
botIconFirst: d,
fallbackAvatar: m
  }) : t, [
n,
t,
u,
d,
m
  ]);
  if (null == _)
return p ? (0, i.jsx)('div', {
  className: o()(c.icon, c.placeholder, l)
}) : null;
  return (0, i.jsx)('img', {
className: o()(c.icon, l),
alt: s.Z.Messages.IMAGE,
src: _,
'aria-hidden': !0,
draggable: !1
  });
}