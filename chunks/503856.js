"use strict";
n.d(t, {
  p: function() {
    return l
  },
  r: function() {
    return u
  }
});
var i = n(442837),
  r = n(592125),
  s = n(430824),
  o = n(944486),
  a = n(981631);
let l = () => {
    let e = o.Z.getVoiceChannelId();
    if (null == e) return !1;
    let t = r.Z.getChannel(e);
    if (null == t) return !1;
    let n = s.Z.getGuild(t.getGuildId());
    return null != n && n.hasFeature(a.oNc.HUB)
  },
  u = e => (0, i.e7)([o.Z, r.Z, s.Z], () => {
    let t = o.Z.getVoiceChannelId();
    if (null == t) return !1;
    let n = r.Z.getChannel(t);
    if (null == n) return !1;
    let i = s.Z.getGuild(n.getGuildId());
    return null != i && i.id === e
  })