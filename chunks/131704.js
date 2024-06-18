"use strict";
n.d(t, {
  $N: function() {
    return $
  },
  AW: function() {
    return A
  },
  CG: function() {
    return ea
  },
  DA: function() {
    return eT
  },
  Ec: function() {
    return x
  },
  Em: function() {
    return F
  },
  Gz: function() {
    return el
  },
  Km: function() {
    return p
  },
  Lr: function() {
    return v
  },
  Q5: function() {
    return Z
  },
  Qm: function() {
    return b
  },
  Sf: function() {
    return ec
  },
  TK: function() {
    return K
  },
  Ti: function() {
    return R
  },
  Um: function() {
    return J
  },
  X_: function() {
    return X
  },
  Y0: function() {
    return W
  },
  _H: function() {
    return eL
  },
  bc: function() {
    return y
  },
  bw: function() {
    return L
  },
  cE: function() {
    return em
  },
  dF: function() {
    return j
  },
  hv: function() {
    return M
  },
  iR: function() {
    return ee
  },
  jD: function() {
    return ep
  },
  kt: function() {
    return ev
  },
  mn: function() {
    return eA
  },
  nl: function() {
    return eE
  },
  oj: function() {
    return C
  },
  ov: function() {
    return z
  },
  q_: function() {
    return eC
  },
  r8: function() {
    return N
  },
  sR: function() {
    return U
  },
  tx: function() {
    return g
  },
  uC: function() {
    return V
  },
  vc: function() {
    return B
  },
  vd: function() {
    return w
  },
  vg: function() {
    return Q
  },
  xL: function() {
    return q
  },
  zS: function() {
    return Y
  },
  zi: function() {
    return O
  }
}), n(47120), n(724458), n(789020);
var i = n(392711),
  r = n.n(i),
  s = n(31775),
  o = n.n(s),
  a = n(313361),
  l = n(683860),
  u = n(149765),
  _ = n(283693),
  d = n(146085),
  c = n(427679),
  E = n(630388),
  I = n(709054),
  T = n(981631),
  h = n(176505);

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let f = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_STORE, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.DM, T.d4z.GROUP_DM]);

function N(e) {
  return f.has(e)
}
let A = new Set([T.d4z.DM, T.d4z.GROUP_DM, T.d4z.GUILD_TEXT, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE, T.d4z.GUILD_CATEGORY, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_STORE, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]),
  m = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD]);

function O(e) {
  return m.has(e)
}
let R = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE]),
  C = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE, T.d4z.GUILD_CATEGORY, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_STORE, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]);

function p(e) {
  return C.has(e)
}
T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA;
let g = new Set([T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE]);

function L(e) {
  return "SELECTABLE" !== e && g.has(e)
}
let v = new Set([T.d4z.GUILD_STAGE_VOICE]),
  D = new Set([T.d4z.DM, T.d4z.GROUP_DM]);

function M(e) {
  return D.has(e)
}
let P = new Set([T.d4z.GROUP_DM]);

function y(e) {
  return P.has(e)
}
let U = new Set([T.d4z.DM, T.d4z.GROUP_DM, T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD]);

function b(e) {
  return U.has(e)
}
let G = new Set([T.d4z.DM, T.d4z.GROUP_DM, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD]);

function w(e) {
  return G.has(e)
}
let k = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.DM, T.d4z.GROUP_DM]);

function B(e) {
  return k.has(e)
}
let x = new Set([T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD]),
  V = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]);

function Z(e) {
  return x.has(e)
}
let H = new Set([T.d4z.DM, T.d4z.GROUP_DM, T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE]);

function F(e) {
  return H.has(e)
}
let Y = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_STORE, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]),
  j = new Set([T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_CATEGORY, T.d4z.GUILD_STORE, T.d4z.GUILD_TEXT, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE, T.d4z.GUILD_DIRECTORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]),
  W = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT]),
  K = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]),
  z = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE]),
  q = new Set([T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_TEXT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.ANNOUNCEMENT_THREAD]),
  X = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA, T.d4z.ANNOUNCEMENT_THREAD, T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE]),
  Q = new Set([T.d4z.PUBLIC_THREAD, T.d4z.PRIVATE_THREAD, T.d4z.GUILD_VOICE, T.d4z.GUILD_STAGE_VOICE]),
  J = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_FORUM, T.d4z.GUILD_MEDIA]),
  $ = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_CATEGORY, T.d4z.GUILD_FORUM, T.d4z.GUILD_ANNOUNCEMENT]),
  ee = new Set([T.d4z.GUILD_TEXT, T.d4z.GUILD_ANNOUNCEMENT, T.d4z.GUILD_FORUM, T.d4z.GUILD_VOICE]);

function et(e) {
  let t = {};
  return null == e || e.forEach(e => {
    t[e.id] = {
      id: e.id,
      type: e.type,
      allow: u.vB(e.allow),
      deny: u.vB(e.deny)
    }
  }), t
}

function en(e) {
  return null == e ? {} : r().reduce(e, (e, t) => (e[t.id] = t.nick, e), {})
}

function ei(e) {
  return null == e ? [] : e.map(e => ({
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }))
}

function er(e) {
  return null != e ? {
    id: e.id,
    name: e.name
  } : void 0
}
let es = u.$e(T.Plq.CONNECT, T.Plq.VIEW_CHANNEL),
  eo = T.S7T.CONNECT | T.S7T.VIEW_CHANNEL;

function ea(e) {
  return L(e) ? es : T.Plq.VIEW_CHANNEL
}

function el(e) {
  return L(e) ? eo : T.S7T.VIEW_CHANNEL
}
class eu {
  constructor(e) {
    var t, n, i;
    S(this, "id", void 0), S(this, "type", void 0), S(this, "name", void 0), S(this, "guild_id", void 0), S(this, "topic_", void 0), S(this, "position_", void 0), S(this, "permissionOverwrites_", void 0), S(this, "bitrate_", void 0), S(this, "rtcRegion", void 0), S(this, "videoQualityMode", void 0), S(this, "userLimit_", void 0), S(this, "recipients", void 0), S(this, "rawRecipients", void 0), S(this, "ownerId", void 0), S(this, "icon", void 0), S(this, "application_id", void 0), S(this, "nicks", void 0), S(this, "nsfw_", void 0), S(this, "parent_id", void 0), S(this, "memberListId", void 0), S(this, "rateLimitPerUser_", void 0), S(this, "defaultThreadRateLimitPerUser", void 0), S(this, "defaultAutoArchiveDuration", void 0), S(this, "flags_", void 0), S(this, "originChannelId", void 0), S(this, "lastMessageId", void 0), S(this, "lastPinTimestamp", void 0), S(this, "availableTags", void 0), S(this, "appliedTags", void 0), S(this, "messageCount", void 0), S(this, "memberCount", void 0), S(this, "threadMetadata", void 0), S(this, "memberIdsPreview", void 0), S(this, "member", void 0), S(this, "parentChannelThreadType", void 0), S(this, "template", void 0), S(this, "defaultReactionEmoji", void 0), S(this, "isMessageRequest", void 0), S(this, "isMessageRequestTimestamp", void 0), S(this, "isSpam", void 0), S(this, "totalMessageSent", void 0), S(this, "defaultSortOrder", void 0), S(this, "version", void 0), S(this, "defaultForumLayout", void 0), S(this, "iconEmoji", void 0), S(this, "themeColor", void 0), S(this, "safetyWarnings", void 0), this.id = e.id, this.type = null !== (t = e.type) && void 0 !== t ? t : T.d4z.GUILD_TEXT, this.name = null !== (n = e.name) && void 0 !== n ? n : "", this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null
  }
}

function e_(e) {
  return "topic" in e && (e.topic_ = e.topic, delete e.topic), "position" in e && (e.position_ = e.position, delete e.position), "permissionOverwrites" in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (e.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (e.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (e.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (e.flags_ = e.flags, delete e.flags), e
}
let ed = Object.freeze({});
class ec extends eu {
  get permissionOverwrites() {
    var e;
    return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : ed
  }
  get topic() {
    var e;
    return null !== (e = this.topic_) && void 0 !== e ? e : ""
  }
  get position() {
    var e;
    return null !== (e = this.position_) && void 0 !== e ? e : 0
  }
  get bitrate() {
    var e;
    return null !== (e = this.bitrate_) && void 0 !== e ? e : T.epw
  }
  get userLimit() {
    var e;
    return null !== (e = this.userLimit_) && void 0 !== e ? e : 0
  }
  get nsfw() {
    var e;
    return null !== (e = this.nsfw_) && void 0 !== e && e
  }
  get rateLimitPerUser() {
    var e;
    return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0
  }
  get flags() {
    var e;
    return null !== (e = this.flags_) && void 0 !== e ? e : 0
  }
  toJS() {
    return {
      ...this
    }
  }
  set(e, t) {
    return this.merge(e_({
      [e]: t
    }))
  }
  merge(e) {
    let t = null,
      n = e_(e);
    for (let e in n) {
      if (!!n.hasOwnProperty(e)) this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e])
    }
    return null != t ? new this.constructor(t) : this
  }
  computeLurkerPermissionsAllowList() {
    if (this.isGuildStageVoice() && c.Z.isPublic(this.id)) return d.L_
  }
  isNSFW() {
    return this.nsfw
  }
  isManaged() {
    return null != this.application_id
  }
  isPrivate() {
    return M(this.type)
  }
  isGroupDM() {
    return this.type === T.d4z.GROUP_DM
  }
  isMultiUserDM() {
    return y(this.type)
  }
  isDM() {
    return this.type === T.d4z.DM
  }
  isSystemDM() {
    return !1
  }
  isArchivedThread() {
    var e;
    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0
  }
  isLockedThread() {
    var e;
    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0
  }
  isScheduledForDeletion() {
    return this.hasFlag(h.zZ.IS_SCHEDULED_FOR_DELETION)
  }
  isBroadcastChannel() {
    return this.hasFlag(h.zZ.IS_BROADCASTING)
  }
  isArchivedLockedThread() {
    var e, t;
    return x.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0
  }
  isForumPost() {
    return this.type === T.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && T.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
  }
  isCategory() {
    return this.type === T.d4z.GUILD_CATEGORY
  }
  isVocal() {
    return w(this.type)
  }
  isGuildVocal() {
    return L(this.type)
  }
  isGuildVocalOrThread() {
    return this.isGuildVocal() || this.isVocalThread()
  }
  isGuildVoice() {
    return this.type === T.d4z.GUILD_VOICE
  }
  isGuildStageVoice() {
    return this.type === T.d4z.GUILD_STAGE_VOICE
  }
  isListenModeCapable() {
    return this.isGuildStageVoice()
  }
  isThread() {
    return Z(this.type)
  }
  isAnnouncementThread() {
    return this.type === T.d4z.ANNOUNCEMENT_THREAD
  }
  isVocalThread() {
    return this.type === T.d4z.PUBLIC_THREAD || this.type === T.d4z.PRIVATE_THREAD
  }
  isActiveThread() {
    var e;
    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0
  }
  isDirectory() {
    return this.type === T.d4z.GUILD_DIRECTORY
  }
  isForumLikeChannel() {
    return this.isForumChannel() || this.isMediaChannel()
  }
  isForumChannel() {
    return this.type === T.d4z.GUILD_FORUM
  }
  isMediaChannel() {
    return this.type === T.d4z.GUILD_MEDIA
  }
  isMediaPost() {
    return this.type === T.d4z.PUBLIC_THREAD && this.parentChannelThreadType === T.d4z.GUILD_MEDIA
  }
  isRoleSubscriptionTemplatePreviewChannel() {
    return this.hasFlag(h.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
  }
  isOwner(e) {
    return this.ownerId === e
  }
  getGuildId() {
    return this.guild_id
  }
  getApplicationId() {
    return this.application_id
  }
  getDefaultSortOrder() {
    var e;
    return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : l.z.LATEST_ACTIVITY
  }
  getDefaultLayout() {
    return this.isMediaChannel() ? a.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === a.X.DEFAULT ? a.X.LIST : this.defaultForumLayout
  }
  get accessPermissions() {
    return ea(this.type)
  }
  hasFlag(e) {
    return (0, E.yE)(this.flags, e)
  }
}
class eE extends ec {
  static fromServer(e, t) {
    var n, i, r;
    let s = {
      application_id: e.application_id,
      appliedTags: e.applied_tags,
      availableTags: null != e.available_tags ? ei(e.available_tags) : void 0,
      bitrate_: e.bitrate,
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultForumLayout: e.default_forum_layout,
      defaultReactionEmoji: null != e.default_reaction_emoji ? {
        emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
        emojiName: e.default_reaction_emoji.emoji_name
      } : void 0,
      defaultSortOrder: e.default_sort_order,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
      icon: e.icon,
      iconEmoji: er(e.icon_emoji),
      id: e.id,
      isMessageRequest: e.is_message_request,
      isMessageRequestTimestamp: e.is_message_request_timestamp,
      isSpam: e.is_spam,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      member: null != e.member ? {
        flags: e.member.flags,
        muted: e.member.muted,
        muteConfig: e.member.mute_config,
        joinTimestamp: e.member.join_timestamp
      } : void 0,
      memberCount: e.member_count,
      memberIdsPreview: e.member_ids_preview,
      memberListId: e.member_list_id,
      messageCount: e.message_count,
      name: null !== (i = e.name) && void 0 !== i ? i : "",
      nicks: en(e.nicks),
      nsfw_: e.nsfw,
      originChannelId: e.origin_channel_id,
      ownerId: e.owner_id,
      parent_id: e.parent_id,
      parentChannelThreadType: void 0,
      permissionOverwrites_: et(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: e.rate_limit_per_user,
      rawRecipients: null != e.recipients ? e.recipients : [],
      recipients: null != e.recipients ? e.recipients.map(e => e.id) : [],
      rtcRegion: e.rtc_region,
      safetyWarnings: e.safety_warnings,
      template: e.template,
      themeColor: e.theme_color,
      threadMetadata: null != e.thread_metadata ? {
        archived: e.thread_metadata.archived,
        autoArchiveDuration: e.thread_metadata.auto_archive_duration,
        archiveTimestamp: e.thread_metadata.archive_timestamp,
        createTimestamp: e.thread_metadata.create_timestamp,
        locked: e.thread_metadata.locked,
        invitable: null === (r = e.thread_metadata.invitable) || void 0 === r || r
      } : void 0,
      topic_: e.topic,
      totalMessageSent: e.total_message_sent,
      type: null != e.type ? e.type : T.d4z.UNKNOWN,
      userLimit_: e.user_limit,
      version: e.version,
      videoQualityMode: e.video_quality_mode
    };
    return (0, _.gh)(s, eE)
  }
  constructor(e) {
    super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode
  }
}
class eI extends ec {
  static fromServer(e, t) {
    var n, i, r, s;
    return eL({
      application_id: e.application_id,
      bitrate_: e.bitrate,
      flags_: e.flags,
      guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
      iconEmoji: er(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null !== (i = e.name) && void 0 !== i ? i : "",
      nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
      originChannelId: e.origin_channel_id,
      parent_id: e.parent_id,
      permissionOverwrites_: et(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
      rtcRegion: e.rtc_region,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : T.d4z.GUILD_VOICE,
      userLimit_: e.user_limit,
      version: e.version,
      videoQualityMode: e.video_quality_mode
    })
  }
  constructor(e) {
    var t;
    super(e), this.application_id = e.application_id, this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode
  }
}
class eT extends ec {
  static fromServer(e, t) {
    var n, i, r, s;
    return eL({
      application_id: e.application_id,
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
      iconEmoji: er(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null !== (i = e.name) && void 0 !== i ? i : "",
      nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
      parent_id: e.parent_id,
      permissionOverwrites_: et(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : T.d4z.GUILD_TEXT,
      version: e.version
    })
  }
  constructor(e) {
    var t;
    super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
  }
}
class eh extends ec {
  static fromServer(e, t) {
    var n, i, r, s;
    let o = {
      availableTags: null != e.available_tags ? ei(e.available_tags) : [],
      defaultAutoArchiveDuration: e.default_auto_archive_duration,
      defaultForumLayout: e.default_forum_layout,
      defaultReactionEmoji: null != e.default_reaction_emoji ? {
        emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
        emojiName: e.default_reaction_emoji.emoji_name
      } : void 0,
      defaultSortOrder: e.default_sort_order,
      defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
      flags_: e.flags,
      guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
      iconEmoji: er(e.icon_emoji),
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      memberListId: e.member_list_id,
      name: null !== (i = e.name) && void 0 !== i ? i : "",
      nsfw_: null !== (r = e.nsfw) && void 0 !== r && r,
      parent_id: e.parent_id,
      permissionOverwrites_: et(e.permission_overwrites),
      position_: e.position,
      rateLimitPerUser_: null !== (s = e.rate_limit_per_user) && void 0 !== s ? s : 0,
      template: e.template,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : T.d4z.GUILD_TEXT,
      version: e.version
    };
    return (0, _.gh)(o, eh)
  }
  constructor(e) {
    var t, n;
    super(e), this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
  }
}
class eS {
  getOrCompute(e) {
    let t = this.cache.get(e);
    if (null != t) return t;
    {
      let t = parseInt(e, 10);
      return this.cache.set(e, t), t
    }
  }
  constructor(e = 100) {
    S(this, "cache", void 0), this.cache = new(o())(e)
  }
}
let ef = new eS,
  eN = new eS;
class eA extends ec {
  static sortRecipients(e, t) {
    let n = ef.getOrCompute(t);
    return [...null != e ? e : []].sort((e, t) => {
      let i = eN.getOrCompute(e.id);
      return (i ^ n) - (eN.getOrCompute(t.id) ^ n)
    })
  }
  static fromServer(e) {
    var t, n;
    let i = eA.sortRecipients(e.recipients, e.id),
      r = {
        application_id: e.application_id,
        flags_: e.flags,
        guild_id: null,
        icon: e.icon,
        id: e.id,
        isMessageRequest: e.is_message_request,
        isMessageRequestTimestamp: e.is_message_request_timestamp,
        isSpam: null !== (t = e.is_spam) && void 0 !== t && t,
        lastMessageId: e.last_message_id,
        lastPinTimestamp: e.last_pin_timestamp,
        name: null !== (n = e.name) && void 0 !== n ? n : "",
        nicks: en(e.nicks),
        ownerId: e.owner_id,
        rawRecipients: i,
        recipients: i.map(e => e.id),
        safetyWarnings: e.safety_warnings,
        type: null != e.type ? e.type : T.d4z.DM
      };
    return (0, _.gh)(r, eA)
  }
  isSystemDM() {
    let e = this.rawRecipients[0];
    return this.type === T.d4z.DM && null != e && !0 === e.system
  }
  getRecipientId() {
    return this.recipients[0]
  }
  addRecipient(e, t, n) {
    if (e === n) return this;
    {
      var i;
      let n = this.set("recipients", r().uniq([...null !== (i = this.recipients) && void 0 !== i ? i : [], e]).sort(I.default.compare));
      return null == t ? n : n.set("nicks", {
        ...n.nicks,
        [e]: t
      })
    }
  }
  removeRecipient(e) {
    return this.set("recipients", r().without(this.recipients, e))
  }
  constructor(e) {
    var t, n;
    super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = eA.sortRecipients(e.rawRecipients, this.id), this.recipients = [...null !== (t = e.recipients) && void 0 !== t ? t : []].sort(I.default.compare), this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []
  }
}
class em extends eA {}
class eO extends ec {
  static fromServer(e, t) {
    var n, i, r, s, o;
    let a = {
      appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
      bitrate_: e.bitrate,
      flags_: e.flags,
      guild_id: null !== (i = null != t ? t : e.guild_id) && void 0 !== i ? i : null,
      id: e.id,
      lastMessageId: e.last_message_id,
      lastPinTimestamp: e.last_pin_timestamp,
      member: null != e.member ? {
        flags: e.member.flags,
        muted: e.member.muted,
        muteConfig: e.member.mute_config,
        joinTimestamp: e.member.join_timestamp
      } : void 0,
      memberCount: e.member_count,
      memberIdsPreview: e.member_ids_preview,
      messageCount: e.message_count,
      name: null !== (r = e.name) && void 0 !== r ? r : "",
      nsfw_: null !== (s = e.nsfw) && void 0 !== s && s,
      ownerId: e.owner_id,
      parent_id: e.parent_id,
      parentChannelThreadType: e.parentChannelThreadType,
      rateLimitPerUser_: e.rate_limit_per_user,
      rtcRegion: e.rtc_region,
      threadMetadata: null != e.thread_metadata ? {
        archived: e.thread_metadata.archived,
        autoArchiveDuration: e.thread_metadata.auto_archive_duration,
        archiveTimestamp: e.thread_metadata.archive_timestamp,
        createTimestamp: e.thread_metadata.create_timestamp,
        locked: e.thread_metadata.locked,
        invitable: null === (o = e.thread_metadata.invitable) || void 0 === o || o
      } : void 0,
      totalMessageSent: e.total_message_sent,
      type: null != e.type ? e.type : T.d4z.PUBLIC_THREAD,
      userLimit_: e.user_limit,
      videoQualityMode: e.video_quality_mode
    };
    return (0, _.gh)(a, eO)
  }
  constructor(e) {
    var t;
    super(e), this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
  }
}
let eR = {
  [T.d4z.DM]: eA.fromServer,
  [T.d4z.GROUP_DM]: eA.fromServer,
  [T.d4z.GUILD_TEXT]: eT.fromServer,
  [T.d4z.GUILD_VOICE]: eI.fromServer,
  [T.d4z.GUILD_STAGE_VOICE]: eI.fromServer,
  [T.d4z.GUILD_CATEGORY]: eT.fromServer,
  [T.d4z.GUILD_ANNOUNCEMENT]: eT.fromServer,
  [T.d4z.GUILD_STORE]: eT.fromServer,
  [T.d4z.ANNOUNCEMENT_THREAD]: eO.fromServer,
  [T.d4z.PUBLIC_THREAD]: eO.fromServer,
  [T.d4z.PRIVATE_THREAD]: eO.fromServer,
  [T.d4z.GUILD_DIRECTORY]: eT.fromServer,
  [T.d4z.GUILD_FORUM]: eh.fromServer,
  [T.d4z.GUILD_MEDIA]: eh.fromServer
};

function eC(e, t) {
  var n, i;
  return (null !== (i = eR[null !== (n = e.type) && void 0 !== n ? n : T.d4z.GUILD_TEXT]) && void 0 !== i ? i : eE.fromServer)(e, t)
}

function ep(e) {
  return ev(e)
}
let eg = {
  [T.d4z.DM]: em,
  [T.d4z.GROUP_DM]: class e extends eA {},
  [T.d4z.GUILD_TEXT]: class e extends eT {},
  [T.d4z.GUILD_VOICE]: class e extends eI {},
  [T.d4z.GUILD_STAGE_VOICE]: class e extends eI {},
  [T.d4z.GUILD_CATEGORY]: class e extends eT {},
  [T.d4z.GUILD_ANNOUNCEMENT]: class e extends eT {},
  [T.d4z.GUILD_STORE]: class e extends eT {},
  [T.d4z.ANNOUNCEMENT_THREAD]: eO,
  [T.d4z.PUBLIC_THREAD]: eO,
  [T.d4z.PRIVATE_THREAD]: eO,
  [T.d4z.GUILD_DIRECTORY]: class e extends eT {},
  [T.d4z.GUILD_FORUM]: eh,
  [T.d4z.GUILD_MEDIA]: eh
};

function eL(e) {
  var t, n;
  let i = null !== (n = eg[null !== (t = e.type) && void 0 !== t ? t : T.d4z.GUILD_TEXT]) && void 0 !== n ? n : eE;
  return (0, _.gh)(e, i)
}

function ev(e) {
  var t, n;
  return new(null !== (n = eg[null !== (t = e.type) && void 0 !== t ? t : T.d4z.GUILD_TEXT]) && void 0 !== n ? n : eE)(e_(e))
}