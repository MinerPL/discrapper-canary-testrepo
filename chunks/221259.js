t.d(n, {
  IG: function() {
return b;
  },
  JK: function() {
return E;
  },
  ZA: function() {
return S;
  },
  _m: function() {
return N;
  },
  ft: function() {
return L;
  },
  yN: function() {
return h;
  }
}), t(47120);
var i = t(399606),
  a = t(92114),
  c = t(592125),
  o = t(9156),
  s = t(621600),
  r = t(423589),
  d = t(113449),
  _ = t(686660),
  l = t(981631),
  u = t(490897),
  g = t(526761);

function S(e) {
  let n = (0, i.e7)([o.ZP], () => o.ZP.resolveUnreadSetting(e)),
t = (0, i.e7)([o.ZP], () => o.ZP.resolvedMessageNotifications(e));
  return {
unread: n,
notification: t,
preset: (0, _.gs)(n, t)
  };
}

function h(e) {
  let n = (0, i.Wu)([o.ZP], () => (0, r.OD)(o.ZP.getChannelOverrides(e.guild_id), {
  ignoreMute: !0,
  ignoreUnreadSetting: !1,
  ignoreNotificationSetting: !1
})),
[t, a] = (0, i.Wu)([
  o.ZP,
  c.Z
], () => {
  let t = c.Z.getChannel(e.parent_id);
  return null != t && n.includes(t.id) ? [
    'parent',
    (0, _.p1)((0, _.gs)(o.ZP.resolveUnreadSetting(t), o.ZP.resolvedMessageNotifications(t)))
  ] : [
    'guild',
    (0, _.p1)((0, _.gs)(o.ZP.getGuildUnreadSetting(e.guild_id), o.ZP.getMessageNotifications(e.guild_id)))
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

function N(e, n, t) {
  let i = o.ZP.getChannelIdFlags(e, n);
  t === _.s8.ALL_MESSAGES ? a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.ALL_MESSAGES,
flags: (0, d.pq)(i, g.ic.UNREADS_ALL_MESSAGES)
  }, s.ZB.PresetAll) : t === _.s8.MENTIONS ? a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.ONLY_MENTIONS,
flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetMentions) : t === _.s8.NOTHING && a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.NO_MESSAGES,
flags: (0, d.pq)(i, g.ic.UNREADS_ONLY_MENTIONS)
  }, s.ZB.PresetNothing);
}

function E(e, n) {
  a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: l.bL.NULL,
flags: (0, d.YF)(o.ZP.getChannelIdFlags(e, n))
  }, s.ZB.PresetDefault);
}

function b(e, n, t) {
  let i = o.ZP.getChannelIdFlags(e, n);
  a.Z.updateChannelOverrideSettings(e, n, {
flags: (0, d.pq)(i, t === u.i.ALL_MESSAGES ? g.ic.UNREADS_ALL_MESSAGES : g.ic.UNREADS_ONLY_MENTIONS)
  }, s.UE.unreads(t));
}

function L(e, n, t) {
  a.Z.updateChannelOverrideSettings(e, n, {
message_notifications: t
  }, s.UE.notifications(t));
}