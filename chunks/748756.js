t.d(n, {
  V: function() {
return d;
  }
}), t(399606);
var i = t(92114),
  a = t(9156),
  c = t(621600),
  s = t(113449),
  o = t(686660),
  r = t(981631),
  _ = t(526761);

function d(e, n) {
  let t = a.ZP.getGuildFlags(e);
  n === o.s8.ALL_MESSAGES ? i.Z.updateGuildNotificationSettings(e, {
message_notifications: r.bL.ALL_MESSAGES,
flags: (0, s.Q4)(t, _.vc.UNREADS_ALL_MESSAGES)
  }, c.ZB.PresetAll) : n === o.s8.MENTIONS ? i.Z.updateGuildNotificationSettings(e, {
message_notifications: r.bL.ONLY_MENTIONS,
flags: (0, s.Q4)(t, _.vc.UNREADS_ONLY_MENTIONS)
  }, c.ZB.PresetMentions) : n === o.s8.NOTHING && i.Z.updateGuildNotificationSettings(e, {
message_notifications: r.bL.NO_MESSAGES,
flags: (0, s.Q4)(t, _.vc.UNREADS_ONLY_MENTIONS)
  }, c.ZB.PresetNothing);
}