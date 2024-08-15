t.d(n, {
  Z: function() {
return a;
  }
});
var r = t(735250),
  i = t(470079),
  o = t(901461),
  l = t(464891);
let u = i.memo(l.ZP);

function a(e) {
  let {
message: n,
channel: t,
author: i,
compact: l,
animateAvatar: a,
guildId: s,
isGroupStart: c = !0,
roleIcon: d,
hideTimestamp: _
  } = e;
  return !(0, o.Z)(n) && (c || l) ? (0, r.jsx)(u, {
message: n,
channel: t,
author: i,
guildId: s,
compact: l,
animate: a,
roleIcon: d,
hideTimestamp: _
  }) : void 0;
}