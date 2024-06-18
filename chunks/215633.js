"use strict";
n.d(t, {
  Z: function() {
    return u
  }
});
var i = n(735250);
n(470079);
var r = n(505737),
  s = n(705556),
  o = n(901952),
  a = n(228168),
  l = n(391016);

function u(e) {
  let {
    user: t,
    guildId: n,
    channelId: u,
    onClose: _
  } = e, d = (0, r.Z)(t.id, n);
  return (0, i.jsxs)("footer", {
    className: l.footer,
    children: [d && (0, i.jsx)(o.Z, {
      user: t,
      guildId: n,
      channelId: u,
      onClose: _
    }), !d && (0, i.jsx)(s.Z, {
      user: t,
      guildId: n,
      onClose: _,
      profileType: a.y0.BITE_SIZE
    })]
  })
}