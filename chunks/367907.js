"use strict";
n.d(t, {
  $H: function() {
    return w
  },
  AB: function() {
    return b
  },
  JS: function() {
    return y
  },
  hH: function() {
    return P
  },
  kO: function() {
    return k
  },
  oG: function() {
    return B
  },
  v_: function() {
    return U
  },
  yw: function() {
    return G
  }
});
var i = n(392711),
  r = n.n(i),
  s = n(149765),
  o = n(50244),
  a = n(686660),
  l = n(131704),
  u = n(314897),
  _ = n(592125),
  d = n(984933),
  c = n(650774),
  E = n(271383),
  I = n(430824),
  T = n(131951),
  h = n(496675),
  S = n(158776),
  f = n(19780),
  N = n(306680),
  A = n(944486),
  m = n(914010),
  O = n(9156),
  R = n(979651),
  C = n(626135),
  p = n(70956),
  g = n(700785),
  L = n(546416),
  v = n(981631),
  D = n(176505);

function M(e) {
  let t = 0;
  for (let n in e) t += 1;
  return t
}

function P(e) {
  var t;
  if (null == e) return null;
  let n = I.Z.getGuild(e);
  if (null == n) return null;
  let i = I.Z.getRoles(n.id),
    r = u.default.getId(),
    s = E.ZP.getMember(e, r),
    o = d.ZP.getChannels(e),
    a = o[d.sH].length,
    l = o[d.Zb].length,
    _ = R.Z.getVoiceStates(e);
  return {
    guild_id: n.id,
    guild_size_total: c.Z.getMemberCount(e),
    guild_num_channels: a + l,
    guild_num_text_channels: a,
    guild_num_voice_channels: l,
    guild_num_roles: M(i),
    guild_member_num_roles: null != s ? s.roles.length : 0,
    guild_member_perms: String(null !== (t = h.Z.getGuildPermissions(n)) && void 0 !== t ? t : g.Hn),
    guild_is_vip: n.hasFeature(v.oNc.VIP_REGIONS),
    is_member: null != s,
    num_voice_channels_active: M(_)
  }
}

function y(e) {
  if (null == e) return null;
  let t = _.Z.getChannel(e);
  return null == t ? null : U(t)
}

function U(e) {
  var t;
  if (null == e) return null;
  let n = !1,
    i = e.getGuildId();
  if (null != i) {
    let t = e => {
      if (null == e) return !1;
      let t = e.permissionOverwrites[i];
      return null != t && s.e$(t.deny, v.Plq.VIEW_CHANNEL)
    };
    n = l.Ec.has(e.type) && null != e.parent_id ? t(_.Z.getChannel(e.parent_id)) : t(e)
  }
  return {
    channel_id: e.id,
    channel_type: e.type,
    channel_size_total: e.isPrivate() ? e.recipients.length : 0,
    channel_member_perms: String(null != i && null !== (t = h.Z.getChannelPermissions(e)) && void 0 !== t ? t : g.Hn),
    channel_hidden: n
  }
}

function b(e) {
  if (null == e) return null;
  let t = _.Z.getChannel(e);
  if (null == t) return null;
  let n = T.Z.isVideoEnabled(),
    i = f.Z.getMediaSessionId();
  return {
    channel_id: t.id,
    channel_type: t.type,
    guild_id: t.getGuildId(),
    media_session_id: i,
    ...k(t.getGuildId(), t.id, n),
    ...(0, L.V)()
  }
}

function G(e) {
  var t, n, i, r, s;
  let o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
    a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (C.default.isThrottled(e)) return;
  let l = !("location" in o) || o.location !== v.Sbl.GUILD_CREATE_INVITE_SUGGESTION,
    u = "guild_id" in o ? o.guild_id : l ? m.Z.getGuildId() : null,
    d = "channel_id" in o ? o.channel_id : l ? A.Z.getChannelId(u) : null,
    c = _.Z.getChannel(d);
  let E = (t = c, n = u, null == t ? null != n ? n : null : t.isPrivate() ? null : null !== (r = null !== (i = t.getGuildId()) && void 0 !== i ? i : n) && void 0 !== r ? r : null);
  let I = {
    ...o,
    ...P(E),
    ...null != u && null != d && (0, D.AB)(d) ? (s = 0, {
      channel_static_route: d,
      channel_hidden: !1
    }) : U(c)
  };
  C.default.track(e, I, {
    flush: a
  })
}

function w(e) {
  let t = _.Z.getChannel(e);
  if (null == t || null == t.guild_id) return {
    channel_id: e
  };
  let n = I.Z.getGuild(t.guild_id);
  if (null == n) return {
    channel_id: e
  };
  let i = N.ZP.getSnapshot(e, 10 * p.Z.Millis.SECOND);
  return {
    channel_id: e,
    channel_was_unread: i.unread,
    channel_mention_count: i.mentionCount,
    channel_is_muted: O.ZP.isChannelMuted(t.guild_id, t.id),
    channel_is_nsfw: t.isNSFW(),
    channel_resolved_unread_setting: O.ZP.resolveUnreadSetting(t),
    channel_preset: (0, a.gs)(O.ZP.resolveUnreadSetting(t), O.ZP.resolvedMessageNotifications(t)),
    guild_id: t.guild_id,
    guild_was_unread: i.guildUnread,
    guild_mention_count: i.guildMentionCount,
    guild_is_muted: O.ZP.isMuted(t.guild_id),
    guild_resolved_unread_setting: O.ZP.resolveGuildUnreadSetting(n),
    guild_preset: (0, a.gs)(O.ZP.resolveGuildUnreadSetting(n), O.ZP.getMessageNotifications(t.guild_id)),
    parent_id: t.parent_id,
    parent_channel_type: t.parentChannelThreadType,
    has_pending_member_action: (0, o.P)(t.guild_id, e),
    can_send_message: h.Z.can(v.Plq.SEND_MESSAGES, t)
  }
}

function k(e, t, n) {
  let i = {
    voice_state_count: 0,
    video_stream_count: 0,
    video_enabled: n
  };
  return r()(R.Z.getVoiceStates(e)).filter(e => e.channelId === t).filter(e => e.userId !== u.default.getId()).forEach(e => {
    i.voice_state_count++, (e.selfVideo || e.selfStream) && i.video_stream_count++
  }), i
}

function B(e, t) {
  let n = {
    custom_status_count: 0
  };
  return r()(R.Z.getVoiceStates(e)).forEach(e => {
    e.channelId === t && null != S.Z.findActivity(e.userId, e => e.type === v.IIU.CUSTOM_STATUS) && n.custom_status_count++
  }), n
}
t.ZP = {
  trackWithMetadata: G,
  getVoiceStateMetadata: k
}