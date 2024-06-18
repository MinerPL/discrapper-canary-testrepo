"use strict";
n.d(t, {
  Z: function() {
    return _
  }
});
var i = n(735250),
  r = n(470079),
  s = n(120356),
  o = n.n(s),
  a = n(768581),
  l = n(689938),
  u = n(377197);

function _(e) {
  let {
    application: t,
    src: n,
    className: s,
    size: _,
    botIconFirst: d,
    fallbackAvatar: c
  } = e, E = r.useMemo(() => null != t ? a.ZP.getApplicationIconURL({
    id: t.id,
    icon: t.icon,
    bot: t.bot,
    size: _,
    botIconFirst: d,
    fallbackAvatar: c
  }) : n, [t, n, _, d, c]);
  return null == E ? null : (0, i.jsx)("img", {
    className: o()(u.icon, s),
    alt: l.Z.Messages.IMAGE,
    src: E
  })
}