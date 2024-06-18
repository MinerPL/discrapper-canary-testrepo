"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(735250);
n(470079);
var r = n(307187),
  s = n(750858),
  o = n(739566);

function a(e) {
  var t, n;
  let a = (0, o.ZP)(e.message),
    l = (0, r.x)({
      message: e.message,
      channel: e.channel,
      user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
      compact: !!e.compact,
      isRepliedMessage: !!e.isRepliedMessage
    }),
    u = {};
  return null != l && (u[s.a.SYSTEM_TAG] = l), (0, i.jsx)(s.Z, {
    ...e,
    author: a,
    decorations: u
  })
}