n.d(t, {
  Z: function() {
return d;
  }
});
var i = n(735250),
  o = n(470079),
  a = n(120356),
  l = n.n(a),
  r = n(768581),
  s = n(689938),
  u = n(62676);

function d(e) {
  let {
application: t,
className: n,
size: a,
botIconFirst: d,
fallbackAvatar: c
  } = e, m = o.useMemo(() => r.ZP.getApplicationIconURL({
id: t.id,
icon: t.icon,
bot: t.bot,
size: a,
botIconFirst: d,
fallbackAvatar: c
  }), [
t,
a,
d,
c
  ]);
  return null == m ? null : (0, i.jsx)('img', {
className: l()(u.icon, n),
alt: s.Z.Messages.IMAGE,
src: m,
'aria-hidden': !0
  });
}