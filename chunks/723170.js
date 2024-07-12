t.d(n, {
  B: function() {
return M;
  },
  J: function() {
return l;
  }
}), t(789020);
var E = t(442837),
  _ = t(592125),
  s = t(9156),
  u = t(630388),
  r = t(569471),
  a = t(124368),
  i = t(981631);

function l(e) {
  let n = r.Z.flags(e.id);
  if (null == n)
return a.iN.NO_MESSAGES;
  if ((0, u.yE)(n, a.iN.ALL_MESSAGES))
return a.iN.ALL_MESSAGES;
  if ((0, u.yE)(n, a.iN.ONLY_MENTIONS))
return a.iN.ONLY_MENTIONS;
  if ((0, u.yE)(n, a.iN.NO_MESSAGES))
return a.iN.NO_MESSAGES;
  let t = _.Z.getChannel(e.parent_id);
  if (null == t || s.ZP.isGuildOrCategoryOrChannelMuted(t.guild_id, t.id))
return a.iN.NO_MESSAGES;
  let E = s.ZP.resolvedMessageNotifications(t);
  return E === i.bL.NO_MESSAGES ? a.iN.NO_MESSAGES : E === i.bL.ONLY_MENTIONS ? a.iN.ONLY_MENTIONS : a.iN.ALL_MESSAGES;
}

function M(e) {
  return (0, E.e7)([
r.Z,
s.ZP,
_.Z
  ], () => l(e), [e]);
}