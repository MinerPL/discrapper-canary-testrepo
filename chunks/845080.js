i.d(n, {
  Z: function() {
return l;
  }
});
var t = i(735250),
  o = i(470079),
  a = i(901461),
  c = i(464891);
let r = o.memo(c.ZP);

function l(e) {
  let {
message: n,
channel: i,
author: o,
compact: c,
animateAvatar: l,
guildId: s,
isGroupStart: d = !0,
roleIcon: u,
hideTimestamp: _
  } = e;
  return !(0, a.Z)(n) && (d || c) ? (0, t.jsx)(r, {
message: n,
channel: i,
author: o,
guildId: s,
compact: c,
animate: l,
roleIcon: u,
hideTimestamp: _
  }) : void 0;
}