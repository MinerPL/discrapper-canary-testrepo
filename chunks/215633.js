"use strict";
n.r(t), n.d(t, {
  default: function() {
    return l
  }
});
var i = n("735250");
n("470079");
var r = n("505737"),
  a = n("705556"),
  s = n("901952"),
  o = n("391016");

function l(e) {
  let {
    user: t,
    guildId: n,
    channelId: l,
    onClose: u
  } = e, d = (0, r.default)(t.id, n);
  return (0, i.jsxs)("footer", {
    className: o.footer,
    children: [d && (0, i.jsx)(s.default, {
      user: t,
      guildId: n,
      channelId: l,
      onClose: u
    }), !d && (0, i.jsx)(a.default, {
      user: t,
      guildId: n,
      onClose: u
    })]
  })
}