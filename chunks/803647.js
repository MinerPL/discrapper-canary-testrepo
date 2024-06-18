"use strict";
n.d(t, {
  Z: function() {
    return a
  }
});
var i = n(846027),
  r = n(872810),
  s = n(314897),
  o = n(569545);

function a(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
  if (null == e) return;
  let {
    streamType: n,
    guildId: a,
    channelId: l,
    ownerId: u
  } = e, _ = (0, o.V9)({
    streamType: n,
    guildId: a,
    channelId: l,
    ownerId: u
  });
  u === s.default.getId() && i.Z.setGoLiveSource(null), r.g(_, t)
}