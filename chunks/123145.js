n.d(t, {
  Z: function() {
return s;
  }
});
var r = n(735250);
n(470079);
var i = n(739566),
  a = n(421399),
  o = n(47930);

function s(e) {
  var t, n;
  let s = (0, i.ZP)(e.message),
l = (0, o.x)({
  message: e.message,
  channel: e.channel,
  user: null !== (n = null === (t = e.message) || void 0 === t ? void 0 : t.author) && void 0 !== n ? n : e.userOverride,
  compact: !!e.compact,
  isRepliedMessage: !!e.isRepliedMessage
}),
u = {};
  return null != l && (u[a.a.SYSTEM_TAG] = l), (0, r.jsx)(a.Z, {
...e,
author: s,
decorations: u
  });
}