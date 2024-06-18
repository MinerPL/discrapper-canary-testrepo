"use strict";
n.d(t, {
  Q: function() {
    return u
  },
  Z: function() {
    return l
  }
});
var i = n(442837),
  r = n(314897),
  s = n(592125),
  o = n(944486),
  a = n(885110);

function l() {
  let e = (0, i.e7)([r.default], () => r.default.getId()),
    t = (0, i.e7)([o.Z], () => o.Z.getVoiceChannelId()),
    n = (0, i.e7)([s.Z], () => s.Z.getChannel(t), [t]),
    l = (0, i.e7)([a.Z], () => null != a.Z.getBroadcast()),
    u = (null == n ? void 0 : n.isOwner(e)) && (null == n ? void 0 : n.isBroadcastChannel()) || null == t;
  return !l && u
}

function u() {
  if (null != a.Z.getBroadcast()) return !1;
  let e = o.Z.getVoiceChannelId();
  if (null == e) return !0;
  let t = r.default.getId(),
    n = s.Z.getChannel(e);
  return (null == n ? void 0 : n.isOwner(t)) && (null == n ? void 0 : n.isBroadcastChannel())
}