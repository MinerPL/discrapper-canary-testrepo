"use strict";
n.d(t, {
  Z: function() {
    return d
  }
});
var i = n(727429),
  r = n(703656),
  s = n(769654),
  o = n(592125),
  a = n(754688),
  l = n(849027),
  u = n(927723),
  _ = n(981631);
async function d(e, t, n) {
  let d = (0, a.Qj)(e);
  if (null != d && !await (0, l.Z)(d)) {
    (0, u.k)({
      kind: "channel"
    });
    return
  }
  if (null == d) {
    (0, r.uL)(e, t, n);
    return
  }
  let c = function(e) {
    if (null == e.channelId) return e;
    let t = o.Z.getChannel(e.channelId);
    if (null == t) return e;
    let n = (0, i.e)(t);
    return {
      ...e,
      guildId: null != n ? n : _.ME
    }
  }(d);
  if (null == c.channelId) {
    (0, s.X)(c.guildId);
    return
  }
  null != c.threadId ? (0, r.uL)(_.Z5c.CHANNEL_THREAD_VIEW(c.guildId, c.channelId, c.threadId, c.messageId), t, n) : (0, r.uL)(_.Z5c.CHANNEL(c.guildId, c.channelId, c.messageId), t, n)
}