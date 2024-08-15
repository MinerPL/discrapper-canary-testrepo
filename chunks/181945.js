n.d(t, {
  Z: function() {
return f;
  }
}), n(390547), n(47120), n(653041);
var r = n(392711),
  i = n.n(r),
  a = n(45114),
  s = n(45966),
  o = n(601070),
  l = n(984933),
  u = n(306680),
  c = n(626135),
  d = n(709054),
  _ = n(981631),
  E = n(490897);

function f(e, t, n) {
  let r = i().flatMap(e, e => {
let t = l.ZP.getSelectableChannelIds(e),
  n = [
    ...t,
    ...l.ZP.getVocalChannelIds(e)
  ],
  r = o.Z.getActiveJoinedThreadsForGuild(e);
for (let e of t) {
  var i;
  let t = null !== (i = r[e]) && void 0 !== i ? i : {};
  for (let e in t)
    n.push(e);
}
return n;
  }).map(e => ({
channelId: e,
readStateType: E.W.CHANNEL,
messageId: u.ZP.lastMessageId(e)
  }));
  return e.forEach(e => {
r.push({
  channelId: d.default.cast(e),
  readStateType: E.W.GUILD_EVENT,
  messageId: u.ZP.lastMessageId(e, E.W.GUILD_EVENT)
}), r.push({
  channelId: d.default.cast(e),
  readStateType: E.W.GUILD_ONBOARDING_QUESTION,
  messageId: s.Z.ackIdForGuild(e)
});
  }), c.default.track(_.rMx.MARK_AS_READ, {
source: t,
type: 'guild'
  }), (0, a.y5)(r, n);
}