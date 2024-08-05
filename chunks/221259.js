t.d(n, {
  IG: function() {
return h;
  },
  JK: function() {
return f;
  },
  ZA: function() {
return g;
  },
  _m: function() {
return E;
  },
  ft: function() {
return M;
  },
  yN: function() {
return N;
  }
}), t(47120);
var i = t(399606),
  a = t(92114),
  c = t(592125),
  s = t(9156),
  o = t(621600),
  r = t(423589),
  _ = t(113449),
  d = t(686660),
  l = t(981631),
  u = t(490897),
  S = t(526761);

function g(e) {
  let n = (0, i.e7)([s.ZP], () => s.ZP.resolveUnreadSetting(e)),
t = (0, i.e7)([s.ZP], () => s.ZP.resolvedMessageNotifications(e));
  return {
unread: n,
notification: t,
preset: (0, d.gs)(n, t)
  };
}

function N(e) {
  let n = (0, i.Wu)([s.ZP], () => (0, r.OD)(s.ZP.getChannelOverrides(e.guild_id), {
  ignoreMute: !0,
  ignoreUnreadSetting: !1,
  ignoreNotificationSetting: !1
})),
[t, a] = (0, i.Wu)([
  s.ZP,
  c.Z
], () => {
  let t = c.Z.getChannel(e.parent_id);
  return null != t && n.includes(t.id) ? [
    'parent',
    (0, d.p1)((0, d.gs)(s.ZP.resolveUnreadSetting(t), s.ZP.resolvedMessageNotifications(t)))
  ] : [
    'guild',
    (0, d.p1)((0, d.gs)(s.ZP.getGuildUnreadSetting(e.guild_id), s.ZP.getMessageNotifications(e.guild_id)))
  ];
}, [
  e.guild_id,
  e.parent_id,
  n
]);
  return {
inherited: !n.includes(e.id),
inheritedFrom: t,
inheritedPreset: a
  };
}

function E(e, n, t) {
  let i = s.ZP.getChannelIdFlags(e, n);
  t === d.s8.ALL_MESSAGES ? a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.ALL_MESSAGES,
flags: (0, _.pq)(i, S.ic.UNREADS_ALL_MESSAGES)
  }, o.ZB.PresetAll) : t === d.s8.MENTIONS ? a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.ONLY_MENTIONS,
flags: (0, _.pq)(i, S.ic.UNREADS_ONLY_MENTIONS)
  }, o.ZB.PresetMentions) : t === d.s8.NOTHING && a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.NO_MESSAGES,
flags: (0, _.pq)(i, S.ic.UNREADS_ONLY_MENTIONS)
  }, o.ZB.PresetNothing);
}

function f(e, n) {
  a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.NULL,
flags: (0, _.YF)(s.ZP.getChannelIdFlags(e, n))
  }, o.ZB.PresetDefault);
}

function h(e, n, t) {
  let i = s.ZP.getChannelIdFlags(e, n);
  a.Z.updateChannelOverrideSettings(e, n, {
flags: (0, _.pq)(i, t === u.i.ALL_MESSAGES ? S.ic.UNREADS_ALL_MESSAGES : S.ic.UNREADS_ONLY_MENTIONS)
  }, o.UE.unreads(t));
}

function M(e, n, t) {
  a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: t
  }, o.UE.notifications(t));
}