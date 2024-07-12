t.d(n, {
  V: function() {
return d;
  }
}), t(399606);
var s = t(92114),
  i = t(9156),
  a = t(621600),
  l = t(113449),
  u = t(686660),
  o = t(981631),
  r = t(526761);

function d(e, n) {
  let t = i.ZP.getGuildFlags(e);
  n === u.s8.ALL_MESSAGES ? s.Z.updateGuildNotificationSettings(e, {
message_notifications: o.bL.ALL_MESSAGES,
flags: (0, l.Q4)(t, r.vc.UNREADS_ALL_MESSAGES)
  }, a.ZB.PresetAll) : n === u.s8.MENTIONS ? s.Z.updateGuildNotificationSettings(e, {
message_notifications: o.bL.ONLY_MENTIONS,
flags: (0, l.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS)
  }, a.ZB.PresetMentions) : n === u.s8.NOTHING && s.Z.updateGuildNotificationSettings(e, {
message_notifications: o.bL.NO_MESSAGES,
flags: (0, l.Q4)(t, r.vc.UNREADS_ONLY_MENTIONS)
  }, a.ZB.PresetNothing);
}