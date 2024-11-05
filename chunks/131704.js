n.d(t, {
    $N: function () {
        return $;
    },
    AW: function () {
        return I;
    },
    CG: function () {
        return eo;
    },
    Ec: function () {
        return B;
    },
    Em: function () {
        return j;
    },
    Gz: function () {
        return el;
    },
    Km: function () {
        return A;
    },
    Lr: function () {
        return R;
    },
    Q5: function () {
        return F;
    },
    Qm: function () {
        return M;
    },
    Sf: function () {
        return ef;
    },
    TK: function () {
        return K;
    },
    Ti: function () {
        return b;
    },
    Um: function () {
        return J;
    },
    X_: function () {
        return Q;
    },
    Y0: function () {
        return W;
    },
    _H: function () {
        return eN;
    },
    bc: function () {
        return x;
    },
    bw: function () {
        return C;
    },
    dF: function () {
        return Y;
    },
    hv: function () {
        return D;
    },
    iR: function () {
        return ee;
    },
    jD: function () {
        return ey;
    },
    kt: function () {
        return eC;
    },
    mn: function () {
        return eI;
    },
    nl: function () {
        return e_;
    },
    oj: function () {
        return y;
    },
    ov: function () {
        return z;
    },
    q_: function () {
        return eb;
    },
    r8: function () {
        return v;
    },
    sR: function () {
        return w;
    },
    tx: function () {
        return N;
    },
    uC: function () {
        return Z;
    },
    vc: function () {
        return G;
    },
    vd: function () {
        return k;
    },
    vg: function () {
        return X;
    },
    xL: function () {
        return q;
    },
    zS: function () {
        return H;
    },
    zi: function () {
        return T;
    }
}),
    n(47120),
    n(724458),
    n(789020);
var r = n(392711),
    i = n.n(r),
    a = n(31775),
    s = n.n(a),
    o = n(313361),
    l = n(683860),
    u = n(149765),
    c = n(283693),
    d = n(146085),
    f = n(427679),
    _ = n(630388),
    h = n(709054),
    p = n(981631),
    m = n(176505);
function g(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let E = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_STORE, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.DM, p.d4z.GROUP_DM]);
function v(e) {
    return E.has(e);
}
let I = new Set([p.d4z.DM, p.d4z.GROUP_DM, p.d4z.GUILD_TEXT, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE, p.d4z.GUILD_CATEGORY, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_STORE, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]),
    S = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD]);
function T(e) {
    return S.has(e);
}
let b = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE]),
    y = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE, p.d4z.GUILD_CATEGORY, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_STORE, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]);
function A(e) {
    return y.has(e);
}
p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA;
let N = new Set([p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE]);
function C(e) {
    return 'SELECTABLE' !== e && N.has(e);
}
let R = new Set([p.d4z.GUILD_STAGE_VOICE]),
    O = new Set([p.d4z.DM, p.d4z.GROUP_DM]);
function D(e) {
    return O.has(e);
}
let L = new Set([p.d4z.GROUP_DM]);
function x(e) {
    return L.has(e);
}
let w = new Set([p.d4z.DM, p.d4z.GROUP_DM, p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD]);
function M(e) {
    return w.has(e);
}
let P = new Set([p.d4z.DM, p.d4z.GROUP_DM, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD]);
function k(e) {
    return P.has(e);
}
let U = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.DM, p.d4z.GROUP_DM]);
function G(e) {
    return U.has(e);
}
let B = new Set([p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD]),
    Z = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]);
function F(e) {
    return B.has(e);
}
let V = new Set([p.d4z.DM, p.d4z.GROUP_DM, p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE]);
function j(e) {
    return V.has(e);
}
let H = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_STORE, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]),
    Y = new Set([p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_CATEGORY, p.d4z.GUILD_STORE, p.d4z.GUILD_TEXT, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE, p.d4z.GUILD_DIRECTORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]),
    W = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT]),
    K = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]),
    z = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE]),
    q = new Set([p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_TEXT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.ANNOUNCEMENT_THREAD]),
    Q = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA, p.d4z.ANNOUNCEMENT_THREAD, p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE]),
    X = new Set([p.d4z.PUBLIC_THREAD, p.d4z.PRIVATE_THREAD, p.d4z.GUILD_VOICE, p.d4z.GUILD_STAGE_VOICE]),
    J = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_FORUM, p.d4z.GUILD_MEDIA]),
    $ = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_CATEGORY, p.d4z.GUILD_FORUM, p.d4z.GUILD_ANNOUNCEMENT]),
    ee = new Set([p.d4z.GUILD_TEXT, p.d4z.GUILD_ANNOUNCEMENT, p.d4z.GUILD_FORUM, p.d4z.GUILD_VOICE]);
function et(e) {
    let t = {};
    return (
        null == e ||
            e.forEach((e) => {
                t[e.id] = {
                    id: e.id,
                    type: e.type,
                    allow: u.vB(e.allow),
                    deny: u.vB(e.deny)
                };
            }),
        t
    );
}
function en(e) {
    return null == e ? {} : i().reduce(e, (e, t) => ((e[t.id] = t.nick), e), {});
}
function er(e) {
    return null == e
        ? []
        : e.map((e) => ({
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated
          }));
}
function ei(e) {
    return null != e
        ? {
              id: e.id,
              name: e.name
          }
        : void 0;
}
let ea = u.$e(p.Plq.CONNECT, p.Plq.VIEW_CHANNEL),
    es = p.S7T.CONNECT | p.S7T.VIEW_CHANNEL;
function eo(e) {
    return C(e) ? ea : p.Plq.VIEW_CHANNEL;
}
function el(e) {
    return C(e) ? es : p.S7T.VIEW_CHANNEL;
}
class eu {
    constructor(e) {
        var t, n, r;
        g(this, 'id', void 0), g(this, 'type', void 0), g(this, 'name', void 0), g(this, 'guild_id', void 0), g(this, 'topic_', void 0), g(this, 'position_', void 0), g(this, 'permissionOverwrites_', void 0), g(this, 'bitrate_', void 0), g(this, 'rtcRegion', void 0), g(this, 'videoQualityMode', void 0), g(this, 'userLimit_', void 0), g(this, 'recipients', void 0), g(this, 'rawRecipients', void 0), g(this, 'ownerId', void 0), g(this, 'icon', void 0), g(this, 'application_id', void 0), g(this, 'nicks', void 0), g(this, 'nsfw_', void 0), g(this, 'parent_id', void 0), g(this, 'memberListId', void 0), g(this, 'rateLimitPerUser_', void 0), g(this, 'defaultThreadRateLimitPerUser', void 0), g(this, 'defaultAutoArchiveDuration', void 0), g(this, 'flags_', void 0), g(this, 'originChannelId', void 0), g(this, 'lastMessageId', void 0), g(this, 'lastPinTimestamp', void 0), g(this, 'availableTags', void 0), g(this, 'appliedTags', void 0), g(this, 'messageCount', void 0), g(this, 'memberCount', void 0), g(this, 'threadMetadata', void 0), g(this, 'memberIdsPreview', void 0), g(this, 'member', void 0), g(this, 'parentChannelThreadType', void 0), g(this, 'template', void 0), g(this, 'defaultReactionEmoji', void 0), g(this, 'isMessageRequest', void 0), g(this, 'isMessageRequestTimestamp', void 0), g(this, 'isSpam', void 0), g(this, 'totalMessageSent', void 0), g(this, 'defaultSortOrder', void 0), g(this, 'version', void 0), g(this, 'defaultForumLayout', void 0), g(this, 'iconEmoji', void 0), g(this, 'themeColor', void 0), g(this, 'safetyWarnings', void 0), g(this, 'blockedUserWarningDismissed', void 0), g(this, 'recipientFlags', void 0), g(this, 'linkedLobby', void 0), g(this, 'hdStreamingUntil', void 0), g(this, 'hdStreamingBuyerId', void 0), (this.id = e.id), (this.type = null !== (t = e.type) && void 0 !== t ? t : p.d4z.GUILD_TEXT), (this.name = null !== (n = e.name) && void 0 !== n ? n : ''), (this.guild_id = null !== (r = e.guild_id) && void 0 !== r ? r : null);
    }
}
function ec(e) {
    return 'topic' in e && ((e.topic_ = e.topic), delete e.topic), 'position' in e && ((e.position_ = e.position), delete e.position), 'permissionOverwrites' in e && ((e.permissionOverwrites_ = e.permissionOverwrites), delete e.permissionOverwrites), 'bitrate' in e && ((e.bitrate_ = e.bitrate), delete e.bitrate), 'userLimit' in e && ((e.userLimit_ = e.userLimit), delete e.userLimit), 'nsfw' in e && ((e.nsfw_ = e.nsfw), delete e.nsfw), 'rateLimitPerUser' in e && ((e.rateLimitPerUser_ = e.rateLimitPerUser), delete e.rateLimitPerUser), 'flags' in e && ((e.flags_ = e.flags), delete e.flags), e;
}
let ed = Object.freeze({});
class ef extends eu {
    get permissionOverwrites() {
        var e;
        return null !== (e = this.permissionOverwrites_) && void 0 !== e ? e : ed;
    }
    get topic() {
        var e;
        return null !== (e = this.topic_) && void 0 !== e ? e : '';
    }
    get position() {
        var e;
        return null !== (e = this.position_) && void 0 !== e ? e : 0;
    }
    get bitrate() {
        var e;
        return null !== (e = this.bitrate_) && void 0 !== e ? e : p.epw;
    }
    get userLimit() {
        var e;
        return null !== (e = this.userLimit_) && void 0 !== e ? e : 0;
    }
    get nsfw() {
        var e;
        return null !== (e = this.nsfw_) && void 0 !== e && e;
    }
    get rateLimitPerUser() {
        var e;
        return null !== (e = this.rateLimitPerUser_) && void 0 !== e ? e : 0;
    }
    get flags() {
        var e;
        return null !== (e = this.flags_) && void 0 !== e ? e : 0;
    }
    toJS() {
        return { ...this };
    }
    set(e, t) {
        return this.merge(ec({ [e]: t }));
    }
    merge(e) {
        let t = null,
            n = ec(e);
        for (let e in n) {
            if (!!n.hasOwnProperty(e)) this[e] !== n[e] && (null == t && (t = this.toJS()), (t[e] = n[e]));
        }
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && f.Z.isPublic(this.id)) return d.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return D(this.type);
    }
    isGroupDM() {
        return this.type === p.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return x(this.type);
    }
    isDM() {
        return this.type === p.d4z.DM;
    }
    isSystemDM() {
        return !1;
    }
    isArchivedThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0;
    }
    isLockedThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.locked) === !0;
    }
    isScheduledForDeletion() {
        return this.hasFlag(m.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isArchivedLockedThread() {
        var e, t;
        return B.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0;
    }
    isForumPost() {
        return this.type === p.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && p.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isCategory() {
        return this.type === p.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return k(this.type);
    }
    isGuildVocal() {
        return C(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === p.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === p.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return F(this.type);
    }
    isAnnouncementThread() {
        return this.type === p.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === p.d4z.PUBLIC_THREAD || this.type === p.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === p.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === p.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === p.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === p.d4z.PUBLIC_THREAD && this.parentChannelThreadType === p.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(m.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
    }
    isOwner(e) {
        return this.ownerId === e;
    }
    getGuildId() {
        return this.guild_id;
    }
    getApplicationId() {
        return this.application_id;
    }
    getDefaultSortOrder() {
        var e;
        return null !== (e = this.defaultSortOrder) && void 0 !== e ? e : l.z.LATEST_ACTIVITY;
    }
    getDefaultLayout() {
        return this.isMediaChannel() ? o.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === o.X.DEFAULT ? o.X.LIST : this.defaultForumLayout;
    }
    get accessPermissions() {
        return eo(this.type);
    }
    hasFlag(e) {
        return (0, _.yE)(this.flags, e);
    }
}
class e_ extends ef {
    static fromServer(e, t) {
        var n, r, i;
        let a = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? er(e.available_tags) : void 0,
            bitrate_: e.bitrate,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            icon: e.icon,
            iconEmoji: ei(e.icon_emoji),
            id: e.id,
            isMessageRequest: e.is_message_request,
            isMessageRequestTimestamp: e.is_message_request_timestamp,
            isSpam: e.is_spam,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            memberListId: e.member_list_id,
            messageCount: e.message_count,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
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
            recipients: null != e.recipients ? e.recipients.map((e) => e.id) : [],
            recipientFlags: e.recipient_flags,
            rtcRegion: e.rtc_region,
            safetyWarnings: e.safety_warnings,
            blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
            template: e.template,
            themeColor: e.theme_color,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: null === (i = e.thread_metadata.invitable) || void 0 === i || i
                      }
                    : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : p.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        };
        return (0, c.gh)(a, e_);
    }
    constructor(e) {
        super(e), (this.application_id = e.application_id), (this.appliedTags = e.appliedTags), (this.availableTags = e.availableTags), (this.bitrate_ = e.bitrate_), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.icon = e.icon), (this.iconEmoji = e.iconEmoji), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.memberListId = e.memberListId), (this.messageCount = e.messageCount), (this.nicks = e.nicks), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.permissionOverwrites_ = e.permissionOverwrites_), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rawRecipients = e.rawRecipients), (this.recipients = e.recipients), (this.recipientFlags = e.recipientFlags), (this.rtcRegion = e.rtcRegion), (this.safetyWarnings = e.safetyWarnings), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed), (this.template = e.template), (this.themeColor = e.themeColor), (this.threadMetadata = e.threadMetadata), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.linkedLobby = e.linkedLobby), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class eh extends ef {
    static fromServer(e, t) {
        var n, r, i, a;
        return eN({
            application_id: e.application_id,
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: ei(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
            originChannelId: e.origin_channel_id,
            parent_id: e.parent_id,
            permissionOverwrites_: et(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            rtcRegion: e.rtc_region,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : p.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.originChannelId = e.originChannelId), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.userLimit_ = e.userLimit_), (this.version = e.version), (this.videoQualityMode = e.videoQualityMode), (this.hdStreamingUntil = e.hdStreamingUntil), (this.hdStreamingBuyerId = e.hdStreamingBuyerId);
    }
}
class ep extends ef {
    static fromServer(e, t) {
        var n, r, i, a;
        return eN({
            application_id: e.application_id,
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: ei(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
            parent_id: e.parent_id,
            permissionOverwrites_: et(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : p.d4z.GUILD_TEXT,
            linkedLobby: e.linked_lobby,
            hdStreamingUntil: e.hd_streaming_until,
            hdStreamingBuyerId: e.hd_streaming_buyer_id,
            version: e.version
        });
    }
    constructor(e) {
        var t;
        super(e), (this.application_id = e.application_id), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version), (this.linkedLobby = e.linkedLobby), (this.hdStreamingBuyerId = e.hdStreamingBuyerId), (this.hdStreamingUntil = e.hdStreamingUntil);
    }
}
class em extends ef {
    static fromServer(e, t) {
        var n, r, i, a;
        let s = {
            availableTags: null != e.available_tags ? er(e.available_tags) : [],
            defaultAutoArchiveDuration: e.default_auto_archive_duration,
            defaultForumLayout: e.default_forum_layout,
            defaultReactionEmoji:
                null != e.default_reaction_emoji
                    ? {
                          emojiId: 0 !== e.default_reaction_emoji.emoji_id ? e.default_reaction_emoji.emoji_id : void 0,
                          emojiName: e.default_reaction_emoji.emoji_name
                      }
                    : void 0,
            defaultSortOrder: e.default_sort_order,
            defaultThreadRateLimitPerUser: e.default_thread_rate_limit_per_user,
            flags_: e.flags,
            guild_id: null !== (n = null != t ? t : e.guild_id) && void 0 !== n ? n : null,
            iconEmoji: ei(e.icon_emoji),
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            memberListId: e.member_list_id,
            name: null !== (r = e.name) && void 0 !== r ? r : '',
            nsfw_: null !== (i = e.nsfw) && void 0 !== i && i,
            parent_id: e.parent_id,
            permissionOverwrites_: et(e.permission_overwrites),
            position_: e.position,
            rateLimitPerUser_: null !== (a = e.rate_limit_per_user) && void 0 !== a ? a : 0,
            template: e.template,
            themeColor: e.theme_color,
            topic_: e.topic,
            type: null != e.type ? e.type : p.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, c.gh)(s, em);
    }
    constructor(e) {
        var t, n;
        super(e), (this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : []), (this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration), (this.defaultForumLayout = e.defaultForumLayout), (this.defaultReactionEmoji = e.defaultReactionEmoji), (this.defaultSortOrder = e.defaultSortOrder), (this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser), (this.flags_ = e.flags_), (this.iconEmoji = e.iconEmoji), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.memberListId = e.memberListId), (this.nsfw_ = e.nsfw_), (this.parent_id = e.parent_id), (this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}), (this.position_ = e.position_), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.template = e.template), (this.themeColor = e.themeColor), (this.topic_ = e.topic_), (this.version = e.version);
    }
}
class eg {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t) return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        g(this, 'cache', void 0), (this.cache = new (s())(e));
    }
}
let eE = new eg(),
    ev = new eg();
class eI extends ef {
    static sortRecipients(e, t) {
        let n = eE.getOrCompute(t);
        return [...(null != e ? e : [])].sort((e, t) => {
            let r = ev.getOrCompute(e.id);
            return (r ^ n) - (ev.getOrCompute(t.id) ^ n);
        });
    }
    static fromServer(e) {
        var t, n;
        let r = eI.sortRecipients(e.recipients, e.id),
            i = {
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
                name: null !== (n = e.name) && void 0 !== n ? n : '',
                nicks: en(e.nicks),
                ownerId: e.owner_id,
                rawRecipients: r,
                recipients: r.map((e) => e.id),
                recipientFlags: e.recipient_flags,
                safetyWarnings: e.safety_warnings,
                blockedUserWarningDismissed: e.blocked_user_warning_dismissed,
                type: null != e.type ? e.type : p.d4z.DM
            };
        return (0, c.gh)(i, eI);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === p.d4z.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n) return this;
        {
            var r;
            let n = this.set(
                'recipients',
                i()
                    .uniq([...(null !== (r = this.recipients) && void 0 !== r ? r : []), e])
                    .sort(h.default.compare)
            );
            return null == t
                ? n
                : n.set('nicks', {
                      ...n.nicks,
                      [e]: t
                  });
        }
    }
    removeRecipient(e) {
        return this.set('recipients', i().without(this.recipients, e));
    }
    constructor(e) {
        var t, n;
        super(e), (this.application_id = e.application_id), (this.flags_ = e.flags_), (this.icon = e.icon), (this.isMessageRequest = e.isMessageRequest), (this.isMessageRequestTimestamp = e.isMessageRequestTimestamp), (this.isSpam = e.isSpam), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.nicks = e.nicks), (this.ownerId = e.ownerId), (this.rawRecipients = eI.sortRecipients(e.rawRecipients, this.id)), (this.recipients = [...(null !== (t = e.recipients) && void 0 !== t ? t : [])].sort(h.default.compare)), (this.recipientFlags = e.recipientFlags), (this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : []), (this.blockedUserWarningDismissed = e.blockedUserWarningDismissed);
    }
}
class eS extends ef {
    static fromServer(e, t) {
        var n, r, i, a, s;
        let o = {
            appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (r = null != t ? t : e.guild_id) && void 0 !== r ? r : null,
            id: e.id,
            lastMessageId: e.last_message_id,
            lastPinTimestamp: e.last_pin_timestamp,
            member:
                null != e.member
                    ? {
                          flags: e.member.flags,
                          muted: e.member.muted,
                          muteConfig: e.member.mute_config,
                          joinTimestamp: e.member.join_timestamp
                      }
                    : void 0,
            memberCount: e.member_count,
            memberIdsPreview: e.member_ids_preview,
            messageCount: e.message_count,
            name: null !== (i = e.name) && void 0 !== i ? i : '',
            nsfw_: null !== (a = e.nsfw) && void 0 !== a && a,
            ownerId: e.owner_id,
            parent_id: e.parent_id,
            parentChannelThreadType: e.parentChannelThreadType,
            rateLimitPerUser_: e.rate_limit_per_user,
            rtcRegion: e.rtc_region,
            threadMetadata:
                null != e.thread_metadata
                    ? {
                          archived: e.thread_metadata.archived,
                          autoArchiveDuration: e.thread_metadata.auto_archive_duration,
                          archiveTimestamp: e.thread_metadata.archive_timestamp,
                          createTimestamp: e.thread_metadata.create_timestamp,
                          locked: e.thread_metadata.locked,
                          invitable: null === (s = e.thread_metadata.invitable) || void 0 === s || s
                      }
                    : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : p.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, c.gh)(o, eS);
    }
    constructor(e) {
        var t;
        super(e), (this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : []), (this.bitrate_ = e.bitrate_), (this.flags_ = e.flags_), (this.lastMessageId = e.lastMessageId), (this.lastPinTimestamp = e.lastPinTimestamp), (this.member = e.member), (this.memberCount = e.memberCount), (this.memberIdsPreview = e.memberIdsPreview), (this.messageCount = e.messageCount), (this.nsfw_ = e.nsfw_), (this.ownerId = e.ownerId), (this.parent_id = e.parent_id), (this.parentChannelThreadType = e.parentChannelThreadType), (this.rateLimitPerUser_ = e.rateLimitPerUser_), (this.rtcRegion = e.rtcRegion), (this.threadMetadata = e.threadMetadata), (this.userLimit_ = e.userLimit_), (this.videoQualityMode = e.videoQualityMode);
    }
}
let eT = {
    [p.d4z.DM]: eI.fromServer,
    [p.d4z.GROUP_DM]: eI.fromServer,
    [p.d4z.GUILD_TEXT]: ep.fromServer,
    [p.d4z.GUILD_VOICE]: eh.fromServer,
    [p.d4z.GUILD_STAGE_VOICE]: eh.fromServer,
    [p.d4z.GUILD_CATEGORY]: ep.fromServer,
    [p.d4z.GUILD_ANNOUNCEMENT]: ep.fromServer,
    [p.d4z.GUILD_STORE]: ep.fromServer,
    [p.d4z.ANNOUNCEMENT_THREAD]: eS.fromServer,
    [p.d4z.PUBLIC_THREAD]: eS.fromServer,
    [p.d4z.PRIVATE_THREAD]: eS.fromServer,
    [p.d4z.GUILD_DIRECTORY]: ep.fromServer,
    [p.d4z.GUILD_FORUM]: em.fromServer,
    [p.d4z.GUILD_MEDIA]: em.fromServer
};
function eb(e, t) {
    var n, r;
    return (null !== (r = eT[null !== (n = e.type) && void 0 !== n ? n : p.d4z.GUILD_TEXT]) && void 0 !== r ? r : e_.fromServer)(e, t);
}
function ey(e) {
    return eC(e);
}
let eA = {
    [p.d4z.DM]: class e extends eI {},
    [p.d4z.GROUP_DM]: class e extends eI {},
    [p.d4z.GUILD_TEXT]: class e extends ep {},
    [p.d4z.GUILD_VOICE]: class e extends eh {},
    [p.d4z.GUILD_STAGE_VOICE]: class e extends eh {},
    [p.d4z.GUILD_CATEGORY]: class e extends ep {},
    [p.d4z.GUILD_ANNOUNCEMENT]: class e extends ep {},
    [p.d4z.GUILD_STORE]: class e extends ep {},
    [p.d4z.ANNOUNCEMENT_THREAD]: eS,
    [p.d4z.PUBLIC_THREAD]: eS,
    [p.d4z.PRIVATE_THREAD]: eS,
    [p.d4z.GUILD_DIRECTORY]: class e extends ep {},
    [p.d4z.GUILD_FORUM]: em,
    [p.d4z.GUILD_MEDIA]: em
};
function eN(e) {
    var t, n;
    let r = null !== (n = eA[null !== (t = e.type) && void 0 !== t ? t : p.d4z.GUILD_TEXT]) && void 0 !== n ? n : e_;
    return (0, c.gh)(e, r);
}
function eC(e) {
    var t, n;
    return new (null !== (n = eA[null !== (t = e.type) && void 0 !== t ? t : p.d4z.GUILD_TEXT]) && void 0 !== n ? n : e_)(ec(e));
}
