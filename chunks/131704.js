"use strict";
n.r(t), n.d(t, {
  ALL_CHANNEL_TYPES: function() {
    return m
  },
  CHANNEL_ELIGIBLE_FOR_UNREAD_SETTING: function() {
    return $
  },
  CREATEABLE_NON_VOCAL_CHANNEL_NAME_TYPES: function() {
    return X
  },
  ChannelRecordBase: function() {
    return ec
  },
  DMChannelRecord: function() {
    return eN
  },
  EDITABLE_CHANNEL_TYPES: function() {
    return W
  },
  EDITABLE_VOICE_SETTINGS_TYPES: function() {
    return q
  },
  GUILD_CHANNEL_TYPES: function() {
    return C
  },
  GUILD_FAVORITES_CHANNEL_TYPES: function() {
    return ee
  },
  GUILD_NON_CATEGORY_CHANNEL_TYPES: function() {
    return j
  },
  GUILD_VOCAL_CHANNEL_TYPES: function() {
    return g
  },
  GUILD_WEBHOOK_CHANNEL_TYPES: function() {
    return O
  },
  GuildTextualChannelRecord: function() {
    return eT
  },
  NSFW_CHANNEL_TYPES: function() {
    return Z
  },
  PrivateChannelRecord: function() {
    return em
  },
  SILENT_JOIN_LEAVE_CHANNEL_TYPES: function() {
    return v
  },
  SLOWMODE_CHANNEL_TYPES: function() {
    return Q
  },
  TEXT_CHANNEL_TYPES: function() {
    return U
  },
  THREADED_CHANNEL_TYPES: function() {
    return x
  },
  THREAD_CHANNEL_TYPES: function() {
    return V
  },
  TOGGLE_ANNOUNCEMENT_CHANNEL_TYPES: function() {
    return K
  },
  TOPIC_CHANNEL_TYPES: function() {
    return z
  },
  UnknownChannelRecord: function() {
    return eE
  },
  VOICE_THREAD_PARENT_CHANNEL_TYPES: function() {
    return J
  },
  castChannelRecord: function() {
    return eL
  },
  createChannelRecord: function() {
    return ev
  },
  createChannelRecordFromInvite: function() {
    return eR
  },
  createChannelRecordFromServer: function() {
    return eC
  },
  getAccessPermissions: function() {
    return eo
  },
  getBasicAccessPermissions: function() {
    return el
  },
  isGuildChannelType: function() {
    return R
  },
  isGuildReadableType: function() {
    return B
  },
  isGuildSelectableChannelType: function() {
    return A
  },
  isGuildTextChannelType: function() {
    return p
  },
  isGuildVocalChannelType: function() {
    return L
  },
  isMultiUserDM: function() {
    return P
  },
  isPrivate: function() {
    return M
  },
  isReadableType: function() {
    return Y
  },
  isTextChannel: function() {
    return b
  },
  isThread: function() {
    return F
  },
  isVoiceChannel: function() {
    return w
  }
}), n("47120"), n("724458"), n("789020");
var i = n("392711"),
  r = n.n(i),
  a = n("31775"),
  s = n.n(a),
  o = n("313361"),
  l = n("683860"),
  u = n("149765"),
  d = n("283693"),
  _ = n("146085"),
  c = n("427679"),
  E = n("630388"),
  I = n("709054"),
  T = n("981631"),
  f = n("176505");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let h = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM]);

function A(e) {
  return h.has(e)
}
let m = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
  N = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]);

function p(e) {
  return N.has(e)
}
let O = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
  C = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]);

function R(e) {
  return C.has(e)
}
T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA;
let g = new Set([T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]);

function L(e) {
  return "SELECTABLE" !== e && g.has(e)
}
let v = new Set([T.ChannelTypes.GUILD_STAGE_VOICE]),
  D = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM]);

function M(e) {
  return D.has(e)
}
let y = new Set([T.ChannelTypes.GROUP_DM]);

function P(e) {
  return y.has(e)
}
let U = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]);

function b(e) {
  return U.has(e)
}
let G = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]);

function w(e) {
  return G.has(e)
}
let k = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM]);

function B(e) {
  return k.has(e)
}
let V = new Set([T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD]),
  x = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]);

function F(e) {
  return V.has(e)
}
let H = new Set([T.ChannelTypes.DM, T.ChannelTypes.GROUP_DM, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]);

function Y(e) {
  return H.has(e)
}
let j = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
  W = new Set([T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_STORE, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE, T.ChannelTypes.GUILD_DIRECTORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
  K = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT]),
  z = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
  Z = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
  X = new Set([T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.ANNOUNCEMENT_THREAD]),
  Q = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA, T.ChannelTypes.ANNOUNCEMENT_THREAD, T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
  q = new Set([T.ChannelTypes.PUBLIC_THREAD, T.ChannelTypes.PRIVATE_THREAD, T.ChannelTypes.GUILD_VOICE, T.ChannelTypes.GUILD_STAGE_VOICE]),
  J = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_MEDIA]),
  $ = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_CATEGORY, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_ANNOUNCEMENT]),
  ee = new Set([T.ChannelTypes.GUILD_TEXT, T.ChannelTypes.GUILD_ANNOUNCEMENT, T.ChannelTypes.GUILD_FORUM, T.ChannelTypes.GUILD_VOICE]);

function et(e) {
  let t = {};
  return null == e || e.forEach(e => {
    t[e.id] = {
      id: e.id,
      type: e.type,
      allow: u.deserialize(e.allow),
      deny: u.deserialize(e.deny)
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
let ea = u.combine(T.Permissions.CONNECT, T.Permissions.VIEW_CHANNEL),
  es = T.BasicPermissions.CONNECT | T.BasicPermissions.VIEW_CHANNEL;

function eo(e) {
  return L(e) ? ea : T.Permissions.VIEW_CHANNEL
}

function el(e) {
  return L(e) ? es : T.BasicPermissions.VIEW_CHANNEL
}
class eu {
  constructor(e) {
    var t, n, i;
    S(this, "id", void 0), S(this, "type", void 0), S(this, "name", void 0), S(this, "guild_id", void 0), S(this, "topic_", void 0), S(this, "position_", void 0), S(this, "permissionOverwrites_", void 0), S(this, "bitrate_", void 0), S(this, "rtcRegion", void 0), S(this, "videoQualityMode", void 0), S(this, "userLimit_", void 0), S(this, "recipients", void 0), S(this, "rawRecipients", void 0), S(this, "ownerId", void 0), S(this, "icon", void 0), S(this, "application_id", void 0), S(this, "nicks", void 0), S(this, "nsfw_", void 0), S(this, "parent_id", void 0), S(this, "memberListId", void 0), S(this, "rateLimitPerUser_", void 0), S(this, "defaultThreadRateLimitPerUser", void 0), S(this, "defaultAutoArchiveDuration", void 0), S(this, "flags_", void 0), S(this, "originChannelId", void 0), S(this, "lastMessageId", void 0), S(this, "lastPinTimestamp", void 0), S(this, "availableTags", void 0), S(this, "appliedTags", void 0), S(this, "messageCount", void 0), S(this, "memberCount", void 0), S(this, "threadMetadata", void 0), S(this, "memberIdsPreview", void 0), S(this, "member", void 0), S(this, "parentChannelThreadType", void 0), S(this, "template", void 0), S(this, "defaultReactionEmoji", void 0), S(this, "isMessageRequest", void 0), S(this, "isMessageRequestTimestamp", void 0), S(this, "isSpam", void 0), S(this, "totalMessageSent", void 0), S(this, "defaultSortOrder", void 0), S(this, "version", void 0), S(this, "defaultForumLayout", void 0), S(this, "iconEmoji", void 0), S(this, "themeColor", void 0), S(this, "safetyWarnings", void 0), this.id = e.id, this.type = null !== (t = e.type) && void 0 !== t ? t : T.ChannelTypes.GUILD_TEXT, this.name = null !== (n = e.name) && void 0 !== n ? n : "", this.guild_id = null !== (i = e.guild_id) && void 0 !== i ? i : null
  }
}

function ed(e) {
  return "topic" in e && (e.topic_ = e.topic, delete e.topic), "position" in e && (e.position_ = e.position, delete e.position), "permissionOverwrites" in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), "bitrate" in e && (e.bitrate_ = e.bitrate, delete e.bitrate), "userLimit" in e && (e.userLimit_ = e.userLimit, delete e.userLimit), "nsfw" in e && (e.nsfw_ = e.nsfw, delete e.nsfw), "rateLimitPerUser" in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), "flags" in e && (e.flags_ = e.flags, delete e.flags), e
}
let e_ = Object.freeze({});
class ec extends eu {
  get permissionOverwrites() {
    var e;
    return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : e_
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
    return null !== (e = this.bitrate_) && void 0 !== e ? e : T.BITRATE_DEFAULT
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
    return this.merge(ed({
      [e]: t
    }))
  }
  merge(e) {
    let t = null,
      n = ed(e);
    for (let e in n) n.hasOwnProperty(e) && this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
    return null != t ? new this.constructor(t) : this
  }
  computeLurkerPermissionsAllowList() {
    if (this.isGuildStageVoice() && c.default.isPublic(this.id)) return _.LURKER_STAGE_CHANNEL_PERMISSIONS_ALLOWLIST
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
    return this.type === T.ChannelTypes.GROUP_DM
  }
  isMultiUserDM() {
    return P(this.type)
  }
  isDM() {
    return this.type === T.ChannelTypes.DM
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
    return this.hasFlag(f.ChannelFlags.IS_SCHEDULED_FOR_DELETION)
  }
  isBroadcastChannel() {
    return this.hasFlag(f.ChannelFlags.IS_BROADCASTING)
  }
  isArchivedLockedThread() {
    var e, t;
    return V.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0
  }
  isForumPost() {
    return this.type === T.ChannelTypes.PUBLIC_THREAD && null != this.parentChannelThreadType && T.ChannelTypesSets.GUILD_THREADS_ONLY.has(this.parentChannelThreadType)
  }
  isCategory() {
    return this.type === T.ChannelTypes.GUILD_CATEGORY
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
    return this.type === T.ChannelTypes.GUILD_VOICE
  }
  isGuildStageVoice() {
    return this.type === T.ChannelTypes.GUILD_STAGE_VOICE
  }
  isListenModeCapable() {
    return this.isGuildStageVoice()
  }
  isThread() {
    return F(this.type)
  }
  isAnnouncementThread() {
    return this.type === T.ChannelTypes.ANNOUNCEMENT_THREAD
  }
  isVocalThread() {
    return this.type === T.ChannelTypes.PUBLIC_THREAD || this.type === T.ChannelTypes.PRIVATE_THREAD
  }
  isActiveThread() {
    var e;
    return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0
  }
  isDirectory() {
    return this.type === T.ChannelTypes.GUILD_DIRECTORY
  }
  isForumLikeChannel() {
    return this.isForumChannel() || this.isMediaChannel()
  }
  isForumChannel() {
    return this.type === T.ChannelTypes.GUILD_FORUM
  }
  isMediaChannel() {
    return this.type === T.ChannelTypes.GUILD_MEDIA
  }
  isMediaPost() {
    return this.type === T.ChannelTypes.PUBLIC_THREAD && this.parentChannelThreadType === T.ChannelTypes.GUILD_MEDIA
  }
  isRoleSubscriptionTemplatePreviewChannel() {
    return this.hasFlag(f.ChannelFlags.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL)
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
    return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : l.ThreadSortOrder.LATEST_ACTIVITY
  }
  getDefaultLayout() {
    return this.isMediaChannel() ? o.ForumLayout.GRID : null == this.defaultForumLayout || this.defaultForumLayout === o.ForumLayout.DEFAULT ? o.ForumLayout.LIST : this.defaultForumLayout
  }
  get accessPermissions() {
    return eo(this.type)
  }
  hasFlag(e) {
    return (0, E.hasFlag)(this.flags, e)
  }
}
class eE extends ec {
  static fromServer(e, t) {
    var n, i, r;
    let a = {
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
      type: null != e.type ? e.type : T.ChannelTypes.UNKNOWN,
      userLimit_: e.user_limit,
      version: e.version,
      videoQualityMode: e.video_quality_mode
    };
    return (0, d.dangerouslyCast)(a, eE)
  }
  constructor(e) {
    super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode
  }
}
class eI extends ec {
  static fromServer(e, t) {
    var n, i, r, a;
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
      rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
      rtcRegion: e.rtc_region,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : T.ChannelTypes.GUILD_VOICE,
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
    var n, i, r, a;
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
      rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : T.ChannelTypes.GUILD_TEXT,
      version: e.version
    })
  }
  constructor(e) {
    var t;
    super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version
  }
}
class ef extends ec {
  static fromServer(e, t) {
    var n, i, r, a;
    let s = {
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
      rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
      template: e.template,
      themeColor: e.theme_color,
      topic_: e.topic,
      type: null != e.type ? e.type : T.ChannelTypes.GUILD_TEXT,
      version: e.version
    };
    return (0, d.dangerouslyCast)(s, ef)
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
    S(this, "cache", void 0), this.cache = new(s())(e)
  }
}
let eh = new eS,
  eA = new eS;
class em extends ec {
  static sortRecipients(e, t) {
    let n = eh.getOrCompute(t);
    return [...null != e ? e : []].sort((e, t) => {
      let i = eA.getOrCompute(e.id);
      return (i ^ n) - (eA.getOrCompute(t.id) ^ n)
    })
  }
  static fromServer(e) {
    var t, n;
    let i = em.sortRecipients(e.recipients, e.id),
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
        type: null != e.type ? e.type : T.ChannelTypes.DM
      };
    return (0, d.dangerouslyCast)(r, em)
  }
  isSystemDM() {
    let e = this.rawRecipients[0];
    return this.type === T.ChannelTypes.DM && null != e && !0 === e.system
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
    super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = em.sortRecipients(e.rawRecipients, this.id), this.recipients = [...null !== (t = e.recipients) && void 0 !== t ? t : []].sort(I.default.compare), this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []
  }
}
class eN extends em {}
class ep extends ec {
  static fromServer(e, t) {
    var n, i, r, a, s;
    let o = {
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
      nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
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
        invitable: null === (s = e.thread_metadata.invitable) || void 0 === s || s
      } : void 0,
      totalMessageSent: e.total_message_sent,
      type: null != e.type ? e.type : T.ChannelTypes.PUBLIC_THREAD,
      userLimit_: e.user_limit,
      videoQualityMode: e.video_quality_mode
    };
    return (0, d.dangerouslyCast)(o, ep)
  }
  constructor(e) {
    var t;
    super(e), this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode
  }
}
let eO = {
  [T.ChannelTypes.DM]: em.fromServer,
  [T.ChannelTypes.GROUP_DM]: em.fromServer,
  [T.ChannelTypes.GUILD_TEXT]: eT.fromServer,
  [T.ChannelTypes.GUILD_VOICE]: eI.fromServer,
  [T.ChannelTypes.GUILD_STAGE_VOICE]: eI.fromServer,
  [T.ChannelTypes.GUILD_CATEGORY]: eT.fromServer,
  [T.ChannelTypes.GUILD_ANNOUNCEMENT]: eT.fromServer,
  [T.ChannelTypes.GUILD_STORE]: eT.fromServer,
  [T.ChannelTypes.ANNOUNCEMENT_THREAD]: ep.fromServer,
  [T.ChannelTypes.PUBLIC_THREAD]: ep.fromServer,
  [T.ChannelTypes.PRIVATE_THREAD]: ep.fromServer,
  [T.ChannelTypes.GUILD_DIRECTORY]: eT.fromServer,
  [T.ChannelTypes.GUILD_FORUM]: ef.fromServer,
  [T.ChannelTypes.GUILD_MEDIA]: ef.fromServer
};

function eC(e, t) {
  var n, i;
  return (null !== (i = eO[null !== (n = e.type) && void 0 !== n ? n : T.ChannelTypes.GUILD_TEXT]) && void 0 !== i ? i : eE.fromServer)(e, t)
}

function eR(e) {
  return ev(e)
}
let eg = {
  [T.ChannelTypes.DM]: eN,
  [T.ChannelTypes.GROUP_DM]: class e extends em {},
  [T.ChannelTypes.GUILD_TEXT]: class e extends eT {},
  [T.ChannelTypes.GUILD_VOICE]: class e extends eI {},
  [T.ChannelTypes.GUILD_STAGE_VOICE]: class e extends eI {},
  [T.ChannelTypes.GUILD_CATEGORY]: class e extends eT {},
  [T.ChannelTypes.GUILD_ANNOUNCEMENT]: class e extends eT {},
  [T.ChannelTypes.GUILD_STORE]: class e extends eT {},
  [T.ChannelTypes.ANNOUNCEMENT_THREAD]: ep,
  [T.ChannelTypes.PUBLIC_THREAD]: ep,
  [T.ChannelTypes.PRIVATE_THREAD]: ep,
  [T.ChannelTypes.GUILD_DIRECTORY]: class e extends eT {},
  [T.ChannelTypes.GUILD_FORUM]: ef,
  [T.ChannelTypes.GUILD_MEDIA]: ef
};

function eL(e) {
  var t, n;
  let i = null !== (n = eg[null !== (t = e.type) && void 0 !== t ? t : T.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eE;
  return (0, d.dangerouslyCast)(e, i)
}

function ev(e) {
  var t, n;
  return new(null !== (n = eg[null !== (t = e.type) && void 0 !== t ? t : T.ChannelTypes.GUILD_TEXT]) && void 0 !== n ? n : eE)(ed(e))
}