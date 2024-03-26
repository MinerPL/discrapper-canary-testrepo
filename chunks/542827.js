"use strict";
n.r(t), n.d(t, {
  default: function() {
    return S
  }
}), n("881410"), n("222007"), n("424973");
var i = n("917351"),
  s = n.n(i),
  a = n("267363"),
  l = n("863636"),
  u = n("401690"),
  o = n("923959"),
  d = n("660478"),
  r = n("599110"),
  c = n("299039"),
  f = n("49111"),
  E = n("133335");

function S(e, t, n) {
  let i = s.flatMap(e, e => {
    let t = o.default.getSelectableChannelIds(e),
      n = o.default.getVocalChannelIds(e),
      i = [...t, ...n],
      s = u.default.getActiveJoinedThreadsForGuild(e);
    for (let e of t) {
      var a;
      let t = null !== (a = s[e]) && void 0 !== a ? a : {};
      for (let e in t) i.push(e)
    }
    return i
  }).map(e => ({
    channelId: e,
    readStateType: E.ReadStateTypes.CHANNEL,
    messageId: d.default.lastMessageId(e)
  }));
  return e.forEach(e => {
    i.push({
      channelId: c.default.cast(e),
      readStateType: E.ReadStateTypes.GUILD_EVENT,
      messageId: d.default.lastMessageId(e, E.ReadStateTypes.GUILD_EVENT)
    }), i.push({
      channelId: c.default.cast(e),
      readStateType: E.ReadStateTypes.GUILD_ONBOARDING_QUESTION,
      messageId: l.default.ackIdForGuild(e)
    })
  }), r.default.track(f.AnalyticEvents.MARK_AS_READ, {
    source: t,
    type: "guild"
  }), (0, a.bulkAck)(i, n)
}