n.d(t, {
  Z: function() {
return o;
  }
});
var r = n(735250);
n(470079);
var i = n(739566),
  a = n(421399),
  s = n(47930);

function o(e) {
  var t, n;
  let o = (0, i.ZP)(e.message),
l = (0, s.x)({
  message: e.message,
  channel: e.channel,
  user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
  compact: !!e.compact,
  isRepliedMessage: !!e.isRepliedMessage
}),
u = {};
  return null != l && (u[a.a.SYSTEM_TAG] = l), (0, r.jsx)(a.Z, {
...e,
author: o,
decorations: u
  });
}