"use strict";
n.r(t), n.d(t, {
  permissionOverwritesForRoles: function() {
    return A
  },
  permissionOverwriteForUser: function() {
    return y
  },
  permissionOverwriteForRole: function() {
    return N
  },
  permissionOverwritesForAnnouncement: function() {
    return R
  },
  isChannelFull: function() {
    return O
  },
  sanitizeGuildTextChannelName: function() {
    return r.default
  },
  getBitrateLimit: function() {
    return D
  },
  computeSummarizedVoiceUsers: function() {
    return P
  },
  channelTypeString: function() {
    return b
  },
  getMentionIconType: function() {
    return L
  },
  previousTextChannelRouteForGuild: function() {
    return M
  },
  getChannelPermalink: function() {
    return U
  },
  getChannelLinkToCopy: function() {
    return k
  }
}), n("70102"), n("424973"), n("222007");
var i = n("316693"),
  s = n("798609"),
  r = n("364480"),
  a = n("89073"),
  o = n("711326"),
  l = n("808422"),
  u = n("233069"),
  d = n("42203"),
  c = n("923959"),
  f = n("957255"),
  _ = n("18494"),
  h = n("316133"),
  g = n("991170"),
  m = n("49111"),
  E = n("646718"),
  p = n("782340");
let {
  GUILD_VOICE: v,
  GUILD_CATEGORY: S,
  GUILD_STAGE_VOICE: T
} = m.ChannelTypes;

function I(e, t) {
  return e === t || e === S
}

function C(e, t, n) {
  let s = g.default.NONE;
  return ((0, u.isGuildSelectableChannelType)(t) || t === S) && (s = i.default.add(s, m.Permissions.VIEW_CHANNEL)), (I(t, v) || I(t, T)) && (s = i.default.add(s, m.Permissions.VIEW_CHANNEL), s = i.default.add(s, m.Permissions.CONNECT)), {
    id: e,
    type: n,
    deny: g.default.NONE,
    allow: s
  }
}

function A(e, t, n) {
  let r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
    a = [];
  if (n.length > 0 || r) {
    var o, l, d;
    let n;
    a.push((o = e, l = t, d = s.PermissionOverwriteType.ROLE, n = g.default.NONE, ((0, u.isGuildSelectableChannelType)(l) || l === S) && (n = i.default.add(n, m.Permissions.VIEW_CHANNEL)), I(l, v) && (n = i.default.add(n, m.Permissions.VIEW_CHANNEL), n = i.default.add(n, m.Permissions.CONNECT)), {
      id: o,
      type: d,
      allow: g.default.NONE,
      deny: n
    }))
  }
  return n.forEach(e => {
    a.push(C(e, t, s.PermissionOverwriteType.ROLE))
  }), a
}

function y(e, t) {
  return C(e, t, s.PermissionOverwriteType.MEMBER)
}

function N(e, t) {
  return C(e, t, s.PermissionOverwriteType.ROLE)
}

function R(e) {
  return [{
    id: e,
    type: s.PermissionOverwriteType.ROLE,
    deny: m.Permissions.SEND_MESSAGES,
    allow: g.default.NONE
  }]
}

function O(e, t, n) {
  var i, s;
  let r = e.getGuildId(),
    o = n.getGuild(r),
    l = null !== (i = null == o ? void 0 : o.maxVideoChannelUsers) && void 0 !== i ? i : -1,
    u = null !== (s = null == o ? void 0 : o.maxStageVideoChannelUsers) && void 0 !== s ? s : -1,
    d = h.default.countVoiceStatesForChannel(e.id),
    c = h.default.getVoiceStatesForChannel(e),
    _ = f.default.can(m.Permissions.MOVE_MEMBERS, e) && f.default.can(m.Permissions.CONNECT, e),
    g = !1;
  g = e.type === T ? null != r && (t.hasVideo(e.id) || (0, a.hasStream)(c)) && u > 0 && d >= u : null != r && t.hasVideo(e.id) && l > 0 && d >= l + (_ ? 1 : 0);
  let E = e.userLimit > 0 && d >= e.userLimit;
  return g || E && !_
}

function D(e, t) {
  return t.isGuildStageVoice() ? m.BITRATE_DEFAULT : null == e ? m.BITRATE_MAX : Math.max(e.hasFeature(m.GuildFeatures.VIP_REGIONS) ? E.BoostedGuildFeatures[m.BoostedGuildTiers.TIER_3].limits.bitrate : m.BITRATE_MAX, E.BoostedGuildFeatures[e.premiumTier].limits.bitrate)
}

function P(e) {
  let {
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: i,
    voiceStates: s
  } = e, r = function(e) {
    let {
      channels: t,
      selectedChannelId: n,
      selectedVoiceChannelId: i,
      voiceStates: s
    } = e, r = [];
    return t.forEach(e => {
      if (e.id === i || e.id === n) return;
      let t = s[e.id];
      null != t && (e.isGuildStageVoice() ? t.forEach(e => {
        (0, l.getAudienceRequestToSpeakState)(e.voiceState) === l.RequestToSpeakStates.ON_STAGE && r.push(e)
      }) : t.forEach(e => r.push(e)))
    }), r
  }({
    channels: t,
    selectedChannelId: n,
    selectedVoiceChannelId: i,
    voiceStates: s
  });
  return r.map(e => e.user)
}

function b(e) {
  let {
    type: t
  } = e;
  switch (t) {
    case m.ChannelTypes.DM:
      return p.default.Messages.DM;
    case m.ChannelTypes.GROUP_DM:
      return p.default.Messages.GROUP_DM;
    case m.ChannelTypes.GUILD_TEXT:
      return p.default.Messages.TEXT_CHANNEL;
    case m.ChannelTypes.GUILD_FORUM:
      return p.default.Messages.FORUM_CHANNEL;
    case m.ChannelTypes.GUILD_MEDIA:
      return p.default.Messages.MEDIA_CHANNEL;
    case m.ChannelTypes.GUILD_VOICE:
      return p.default.Messages.VOICE_CHANNEL;
    case m.ChannelTypes.GUILD_STAGE_VOICE:
      return p.default.Messages.STAGE_CHANNEL;
    case m.ChannelTypes.GUILD_ANNOUNCEMENT:
      return p.default.Messages.NEWS_CHANNEL;
    case m.ChannelTypes.GUILD_STORE:
      return p.default.Messages.STORE_CHANNEL;
    case m.ChannelTypes.GUILD_CATEGORY:
      return p.default.Messages.CATEGORY;
    default:
      return null
  }
}

function L(e) {
  if (null == e) return "text";
  let t = e.isMediaChannel();
  if (e.type === m.ChannelTypes.GUILD_VOICE) return f.default.can(m.Permissions.CONNECT, e) ? "voice" : "voice-locked";
  if (e.type === m.ChannelTypes.GUILD_STAGE_VOICE) return f.default.can(m.Permissions.CONNECT, e) ? "stage" : "stage-locked";
  if (u.THREAD_CHANNEL_TYPES.has(e.type)) return e.isForumPost() ? "post" : "thread";
  else if (e.type === m.ChannelTypes.GUILD_FORUM) return t ? "media" : "forum";
  else if (e.type === m.ChannelTypes.GUILD_MEDIA) return "media";
  else if (u.TEXT_CHANNEL_TYPES.has(e.type)) return "text"
}

function M(e) {
  let t;
  let n = d.default.getChannel(_.default.getLastSelectedChannelId());
  if (null != n && n.getGuildId() === e && n.type === m.ChannelTypes.GUILD_TEXT) t = n.id;
  else {
    let n = c.default.getDefaultChannel(e);
    t = null != n ? n.id : null
  }
  return m.Routes.CHANNEL(e, t)
}

function U(e, t, n, i) {
  return "".concat(location.protocol, "//").concat(location.host).concat(m.Routes.CHANNEL(e, t, n)).concat(null == i ? "" : "?summaryId=".concat(i))
}

function k(e, t, n, i) {
  let s;
  let r = e.getGuildId(),
    a = (0, o.canUseMediaPostEmbed)(r, t);
  if (null != t && a) {
    var l, u, d, c;
    l = r, u = t.id, d = e.id, c = e.id, s = null == l || null == u || null == d ? U(l, u, c) : "".concat(location.protocol, "//").concat(location.host).concat(m.Routes.CHANNEL_THREAD_VIEW(l, u, d, c))
  } else s = null != i ? i : U(r, e.id, n);
  return s
}