"use strict";
n.d(t, {
  Z: function() {
    return I
  }
}), n(390547), n(47120), n(653041);
var i = n(392711),
  r = n.n(i),
  s = n(45114),
  o = n(45966),
  a = n(601070),
  l = n(984933),
  u = n(306680),
  _ = n(626135),
  d = n(709054),
  c = n(981631),
  E = n(490897);

function I(e, t, n) {
  let i = r().flatMap(e, e => {
    let t = l.ZP.getSelectableChannelIds(e),
      n = [...t, ...l.ZP.getVocalChannelIds(e)],
      i = a.Z.getActiveJoinedThreadsForGuild(e);
    for (let e of t) {
      var r;
      let t = null !== (r = i[e]) && void 0 !== r ? r : {};
      for (let e in t) n.push(e)
    }
    return n
  }).map(e => ({
    channelId: e,
    readStateType: E.W.CHANNEL,
    messageId: u.ZP.lastMessageId(e)
  }));
  return e.forEach(e => {
    i.push({
      channelId: d.default.cast(e),
      readStateType: E.W.GUILD_EVENT,
      messageId: u.ZP.lastMessageId(e, E.W.GUILD_EVENT)
    }), i.push({
      channelId: d.default.cast(e),
      readStateType: E.W.GUILD_ONBOARDING_QUESTION,
      messageId: o.Z.ackIdForGuild(e)
    })
  }), _.default.track(c.rMx.MARK_AS_READ, {
    source: t,
    type: "guild"
  }), (0, s.y5)(i, n)
}