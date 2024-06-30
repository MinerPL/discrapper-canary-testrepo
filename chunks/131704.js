n.d(t, {
    $N: function () {
        return J;
    },
    AW: function () {
        return g;
    },
    CG: function () {
        return es;
    },
    DA: function () {
        return eh;
    },
    Ec: function () {
        return B;
    },
    Em: function () {
        return Z;
    },
    Gz: function () {
        return el;
    },
    Km: function () {
        return O;
    },
    Lr: function () {
        return y;
    },
    Q5: function () {
        return V;
    },
    Qm: function () {
        return U;
    },
    Sf: function () {
        return e_;
    },
    TK: function () {
        return K;
    },
    Ti: function () {
        return N;
    },
    Um: function () {
        return $;
    },
    X_: function () {
        return Q;
    },
    Y0: function () {
        return W;
    },
    _H: function () {
        return eC;
    },
    bc: function () {
        return M;
    },
    bw: function () {
        return C;
    },
    cE: function () {
        return eS;
    },
    dF: function () {
        return j;
    },
    hv: function () {
        return L;
    },
    iR: function () {
        return ee;
    },
    jD: function () {
        return eO;
    },
    kt: function () {
        return ey;
    },
    mn: function () {
        return eg;
    },
    nl: function () {
        return eE;
    },
    oj: function () {
        return v;
    },
    ov: function () {
        return z;
    },
    q_: function () {
        return ev;
    },
    r8: function () {
        return T;
    },
    sR: function () {
        return P;
    },
    tx: function () {
        return R;
    },
    uC: function () {
        return F;
    },
    vc: function () {
        return k;
    },
    vd: function () {
        return x;
    },
    vg: function () {
        return X;
    },
    xL: function () {
        return q;
    },
    zS: function () {
        return Y;
    },
    zi: function () {
        return A;
    }
}), n(47120), n(724458), n(789020);
var r = n(392711), i = n.n(r), a = n(31775), o = n.n(a), s = n(313361), l = n(683860), u = n(149765), c = n(283693), d = n(146085), _ = n(427679), E = n(630388), f = n(709054), h = n(981631), p = n(176505);
function m(e, t, n) {
    return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[t] = n, e;
}
let I = new Set([
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.GUILD_STORE,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
    h.d4z.GUILD_DIRECTORY,
    h.d4z.GUILD_FORUM,
    h.d4z.GUILD_MEDIA,
    h.d4z.DM,
    h.d4z.GROUP_DM
]);
function T(e) {
    return I.has(e);
}
let g = new Set([
        h.d4z.DM,
        h.d4z.GROUP_DM,
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_STORE,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]), S = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD
    ]);
function A(e) {
    return S.has(e);
}
let N = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE
    ]), v = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_STORE,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]);
function O(e) {
    return v.has(e);
}
h.d4z.GUILD_TEXT, h.d4z.GUILD_ANNOUNCEMENT, h.d4z.GUILD_FORUM, h.d4z.GUILD_MEDIA;
let R = new Set([
    h.d4z.GUILD_VOICE,
    h.d4z.GUILD_STAGE_VOICE
]);
function C(e) {
    return 'SELECTABLE' !== e && R.has(e);
}
let y = new Set([h.d4z.GUILD_STAGE_VOICE]), D = new Set([
        h.d4z.DM,
        h.d4z.GROUP_DM
    ]);
function L(e) {
    return D.has(e);
}
let b = new Set([h.d4z.GROUP_DM]);
function M(e) {
    return b.has(e);
}
let P = new Set([
    h.d4z.DM,
    h.d4z.GROUP_DM,
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD
]);
function U(e) {
    return P.has(e);
}
let w = new Set([
    h.d4z.DM,
    h.d4z.GROUP_DM,
    h.d4z.GUILD_VOICE,
    h.d4z.GUILD_STAGE_VOICE,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD
]);
function x(e) {
    return w.has(e);
}
let G = new Set([
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
    h.d4z.GUILD_DIRECTORY,
    h.d4z.GUILD_FORUM,
    h.d4z.GUILD_MEDIA,
    h.d4z.DM,
    h.d4z.GROUP_DM
]);
function k(e) {
    return G.has(e);
}
let B = new Set([
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD
    ]), F = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]);
function V(e) {
    return B.has(e);
}
let H = new Set([
    h.d4z.DM,
    h.d4z.GROUP_DM,
    h.d4z.GUILD_TEXT,
    h.d4z.GUILD_ANNOUNCEMENT,
    h.d4z.ANNOUNCEMENT_THREAD,
    h.d4z.PUBLIC_THREAD,
    h.d4z.PRIVATE_THREAD,
    h.d4z.GUILD_FORUM,
    h.d4z.GUILD_MEDIA,
    h.d4z.GUILD_DIRECTORY,
    h.d4z.GUILD_VOICE,
    h.d4z.GUILD_STAGE_VOICE
]);
function Z(e) {
    return H.has(e);
}
let Y = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_STORE,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]), j = new Set([
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_STORE,
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE,
        h.d4z.GUILD_DIRECTORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]), W = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT
    ]), K = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]), z = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE
    ]), q = new Set([
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.ANNOUNCEMENT_THREAD
    ]), Q = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA,
        h.d4z.ANNOUNCEMENT_THREAD,
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE
    ]), X = new Set([
        h.d4z.PUBLIC_THREAD,
        h.d4z.PRIVATE_THREAD,
        h.d4z.GUILD_VOICE,
        h.d4z.GUILD_STAGE_VOICE
    ]), $ = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_MEDIA
    ]), J = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_CATEGORY,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_ANNOUNCEMENT
    ]), ee = new Set([
        h.d4z.GUILD_TEXT,
        h.d4z.GUILD_ANNOUNCEMENT,
        h.d4z.GUILD_FORUM,
        h.d4z.GUILD_VOICE
    ]);
function et(e) {
    let t = {};
    return null == e || e.forEach(e => {
        t[e.id] = {
            id: e.id,
            type: e.type,
            allow: u.vB(e.allow),
            deny: u.vB(e.deny)
        };
    }), t;
}
function en(e) {
    return null == e ? {} : i().reduce(e, (e, t) => (e[t.id] = t.nick, e), {});
}
function er(e) {
    return null == e ? [] : e.map(e => ({
        id: e.id,
        name: e.name,
        emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
        emojiName: e.emoji_name,
        moderated: e.moderated
    }));
}
function ei(e) {
    return null != e ? {
        id: e.id,
        name: e.name
    } : void 0;
}
let ea = u.$e(h.Plq.CONNECT, h.Plq.VIEW_CHANNEL), eo = h.S7T.CONNECT | h.S7T.VIEW_CHANNEL;
function es(e) {
    return C(e) ? ea : h.Plq.VIEW_CHANNEL;
}
function el(e) {
    return C(e) ? eo : h.S7T.VIEW_CHANNEL;
}
class eu {
    constructor(e) {
        var t, n, r;
        m(this, 'id', void 0), m(this, 'type', void 0), m(this, 'name', void 0), m(this, 'guild_id', void 0), m(this, 'topic_', void 0), m(this, 'position_', void 0), m(this, 'permissionOverwrites_', void 0), m(this, 'bitrate_', void 0), m(this, 'rtcRegion', void 0), m(this, 'videoQualityMode', void 0), m(this, 'userLimit_', void 0), m(this, 'recipients', void 0), m(this, 'rawRecipients', void 0), m(this, 'ownerId', void 0), m(this, 'icon', void 0), m(this, 'application_id', void 0), m(this, 'nicks', void 0), m(this, 'nsfw_', void 0), m(this, 'parent_id', void 0), m(this, 'memberListId', void 0), m(this, 'rateLimitPerUser_', void 0), m(this, 'defaultThreadRateLimitPerUser', void 0), m(this, 'defaultAutoArchiveDuration', void 0), m(this, 'flags_', void 0), m(this, 'originChannelId', void 0), m(this, 'lastMessageId', void 0), m(this, 'lastPinTimestamp', void 0), m(this, 'availableTags', void 0), m(this, 'appliedTags', void 0), m(this, 'messageCount', void 0), m(this, 'memberCount', void 0), m(this, 'threadMetadata', void 0), m(this, 'memberIdsPreview', void 0), m(this, 'member', void 0), m(this, 'parentChannelThreadType', void 0), m(this, 'template', void 0), m(this, 'defaultReactionEmoji', void 0), m(this, 'isMessageRequest', void 0), m(this, 'isMessageRequestTimestamp', void 0), m(this, 'isSpam', void 0), m(this, 'totalMessageSent', void 0), m(this, 'defaultSortOrder', void 0), m(this, 'version', void 0), m(this, 'defaultForumLayout', void 0), m(this, 'iconEmoji', void 0), m(this, 'themeColor', void 0), m(this, 'safetyWarnings', void 0), this.id = e.id, this.type = null !== (t = e.type) && void 0 !== t ? t : h.d4z.GUILD_TEXT, this.name = null !== (n = e.name) && void 0 !== n ? n : '', this.guild_id = null !== (r = e.guild_id) && void 0 !== r ? r : null;
    }
}
function ec(e) {
    return 'topic' in e && (e.topic_ = e.topic, delete e.topic), 'position' in e && (e.position_ = e.position, delete e.position), 'permissionOverwrites' in e && (e.permissionOverwrites_ = e.permissionOverwrites, delete e.permissionOverwrites), 'bitrate' in e && (e.bitrate_ = e.bitrate, delete e.bitrate), 'userLimit' in e && (e.userLimit_ = e.userLimit, delete e.userLimit), 'nsfw' in e && (e.nsfw_ = e.nsfw, delete e.nsfw), 'rateLimitPerUser' in e && (e.rateLimitPerUser_ = e.rateLimitPerUser, delete e.rateLimitPerUser), 'flags' in e && (e.flags_ = e.flags, delete e.flags), e;
}
let ed = Object.freeze({});
class e_ extends eu {
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
        return null !== (e = this.bitrate_) && void 0 !== e ? e : h.epw;
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
        let t = null, n = ec(e);
        for (let e in n) {
            if (!!n.hasOwnProperty(e))
                this[e] !== n[e] && (null == t && (t = this.toJS()), t[e] = n[e]);
        }
        return null != t ? new this.constructor(t) : this;
    }
    computeLurkerPermissionsAllowList() {
        if (this.isGuildStageVoice() && _.Z.isPublic(this.id))
            return d.L_;
    }
    isNSFW() {
        return this.nsfw;
    }
    isManaged() {
        return null != this.application_id;
    }
    isPrivate() {
        return L(this.type);
    }
    isGroupDM() {
        return this.type === h.d4z.GROUP_DM;
    }
    isMultiUserDM() {
        return M(this.type);
    }
    isDM() {
        return this.type === h.d4z.DM;
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
        return this.hasFlag(p.zZ.IS_SCHEDULED_FOR_DELETION);
    }
    isBroadcastChannel() {
        return this.hasFlag(p.zZ.IS_BROADCASTING);
    }
    isArchivedLockedThread() {
        var e, t;
        return B.has(this.type) && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) === !0 && (null === (t = this.threadMetadata) || void 0 === t ? void 0 : t.locked) === !0;
    }
    isForumPost() {
        return this.type === h.d4z.PUBLIC_THREAD && null != this.parentChannelThreadType && h.TPd.GUILD_THREADS_ONLY.has(this.parentChannelThreadType);
    }
    isCategory() {
        return this.type === h.d4z.GUILD_CATEGORY;
    }
    isVocal() {
        return x(this.type);
    }
    isGuildVocal() {
        return C(this.type);
    }
    isGuildVocalOrThread() {
        return this.isGuildVocal() || this.isVocalThread();
    }
    isGuildVoice() {
        return this.type === h.d4z.GUILD_VOICE;
    }
    isGuildStageVoice() {
        return this.type === h.d4z.GUILD_STAGE_VOICE;
    }
    isListenModeCapable() {
        return this.isGuildStageVoice();
    }
    isThread() {
        return V(this.type);
    }
    isAnnouncementThread() {
        return this.type === h.d4z.ANNOUNCEMENT_THREAD;
    }
    isVocalThread() {
        return this.type === h.d4z.PUBLIC_THREAD || this.type === h.d4z.PRIVATE_THREAD;
    }
    isActiveThread() {
        var e;
        return this.isThread() && (null === (e = this.threadMetadata) || void 0 === e ? void 0 : e.archived) !== !0;
    }
    isDirectory() {
        return this.type === h.d4z.GUILD_DIRECTORY;
    }
    isForumLikeChannel() {
        return this.isForumChannel() || this.isMediaChannel();
    }
    isForumChannel() {
        return this.type === h.d4z.GUILD_FORUM;
    }
    isMediaChannel() {
        return this.type === h.d4z.GUILD_MEDIA;
    }
    isMediaPost() {
        return this.type === h.d4z.PUBLIC_THREAD && this.parentChannelThreadType === h.d4z.GUILD_MEDIA;
    }
    isRoleSubscriptionTemplatePreviewChannel() {
        return this.hasFlag(p.zZ.IS_ROLE_SUBSCRIPTION_TEMPLATE_PREVIEW_CHANNEL);
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
        return this.isMediaChannel() ? s.X.GRID : null == this.defaultForumLayout || this.defaultForumLayout === s.X.DEFAULT ? s.X.LIST : this.defaultForumLayout;
    }
    get accessPermissions() {
        return es(this.type);
    }
    hasFlag(e) {
        return (0, E.yE)(this.flags, e);
    }
}
class eE extends e_ {
    static fromServer(e, t) {
        var n, r, i;
        let a = {
            application_id: e.application_id,
            appliedTags: e.applied_tags,
            availableTags: null != e.available_tags ? er(e.available_tags) : void 0,
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
            iconEmoji: ei(e.icon_emoji),
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
                invitable: null === (i = e.thread_metadata.invitable) || void 0 === i || i
            } : void 0,
            topic_: e.topic,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : h.d4z.UNKNOWN,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode
        };
        return (0, c.gh)(a, eE);
    }
    constructor(e) {
        super(e), this.application_id = e.application_id, this.appliedTags = e.appliedTags, this.availableTags = e.availableTags, this.bitrate_ = e.bitrate_, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.icon = e.icon, this.iconEmoji = e.iconEmoji, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.memberListId = e.memberListId, this.messageCount = e.messageCount, this.nicks = e.nicks, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.permissionOverwrites_ = e.permissionOverwrites_, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rawRecipients = e.rawRecipients, this.recipients = e.recipients, this.rtcRegion = e.rtcRegion, this.safetyWarnings = e.safetyWarnings, this.template = e.template, this.themeColor = e.themeColor, this.threadMetadata = e.threadMetadata, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode;
    }
}
class ef extends e_ {
    static fromServer(e, t) {
        var n, r, i, a;
        return eC({
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
            type: null != e.type ? e.type : h.d4z.GUILD_VOICE,
            userLimit_: e.user_limit,
            version: e.version,
            videoQualityMode: e.video_quality_mode
        });
    }
    constructor(e) {
        var t;
        super(e), this.application_id = e.application_id, this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.originChannelId = e.originChannelId, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.userLimit_ = e.userLimit_, this.version = e.version, this.videoQualityMode = e.videoQualityMode;
    }
}
class eh extends e_ {
    static fromServer(e, t) {
        var n, r, i, a;
        return eC({
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
            type: null != e.type ? e.type : h.d4z.GUILD_TEXT,
            version: e.version
        });
    }
    constructor(e) {
        var t;
        super(e), this.application_id = e.application_id, this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (t = e.permissionOverwrites_) && void 0 !== t ? t : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version;
    }
}
class ep extends e_ {
    static fromServer(e, t) {
        var n, r, i, a;
        let o = {
            availableTags: null != e.available_tags ? er(e.available_tags) : [],
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
            type: null != e.type ? e.type : h.d4z.GUILD_TEXT,
            version: e.version
        };
        return (0, c.gh)(o, ep);
    }
    constructor(e) {
        var t, n;
        super(e), this.availableTags = null !== (t = e.availableTags) && void 0 !== t ? t : [], this.defaultAutoArchiveDuration = e.defaultAutoArchiveDuration, this.defaultForumLayout = e.defaultForumLayout, this.defaultReactionEmoji = e.defaultReactionEmoji, this.defaultSortOrder = e.defaultSortOrder, this.defaultThreadRateLimitPerUser = e.defaultThreadRateLimitPerUser, this.flags_ = e.flags_, this.iconEmoji = e.iconEmoji, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.memberListId = e.memberListId, this.nsfw_ = e.nsfw_, this.parent_id = e.parent_id, this.permissionOverwrites_ = null !== (n = e.permissionOverwrites_) && void 0 !== n ? n : {}, this.position_ = e.position_, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.template = e.template, this.themeColor = e.themeColor, this.topic_ = e.topic_, this.version = e.version;
    }
}
class em {
    getOrCompute(e) {
        let t = this.cache.get(e);
        if (null != t)
            return t;
        {
            let t = parseInt(e, 10);
            return this.cache.set(e, t), t;
        }
    }
    constructor(e = 100) {
        m(this, 'cache', void 0), this.cache = new (o())(e);
    }
}
let eI = new em(), eT = new em();
class eg extends e_ {
    static sortRecipients(e, t) {
        let n = eI.getOrCompute(t);
        return [...null != e ? e : []].sort((e, t) => {
            let r = eT.getOrCompute(e.id);
            return (r ^ n) - (eT.getOrCompute(t.id) ^ n);
        });
    }
    static fromServer(e) {
        var t, n;
        let r = eg.sortRecipients(e.recipients, e.id), i = {
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
                recipients: r.map(e => e.id),
                safetyWarnings: e.safety_warnings,
                type: null != e.type ? e.type : h.d4z.DM
            };
        return (0, c.gh)(i, eg);
    }
    isSystemDM() {
        let e = this.rawRecipients[0];
        return this.type === h.d4z.DM && null != e && !0 === e.system;
    }
    getRecipientId() {
        return this.recipients[0];
    }
    addRecipient(e, t, n) {
        if (e === n)
            return this;
        {
            var r;
            let n = this.set('recipients', i().uniq([
                ...null !== (r = this.recipients) && void 0 !== r ? r : [],
                e
            ]).sort(f.default.compare));
            return null == t ? n : n.set('nicks', {
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
        super(e), this.application_id = e.application_id, this.flags_ = e.flags_, this.icon = e.icon, this.isMessageRequest = e.isMessageRequest, this.isMessageRequestTimestamp = e.isMessageRequestTimestamp, this.isSpam = e.isSpam, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.nicks = e.nicks, this.ownerId = e.ownerId, this.rawRecipients = eg.sortRecipients(e.rawRecipients, this.id), this.recipients = [...null !== (t = e.recipients) && void 0 !== t ? t : []].sort(f.default.compare), this.safetyWarnings = null !== (n = e.safetyWarnings) && void 0 !== n ? n : [];
    }
}
class eS extends eg {
}
class eA extends e_ {
    static fromServer(e, t) {
        var n, r, i, a, o;
        let s = {
            appliedTags: null !== (n = e.applied_tags) && void 0 !== n ? n : [],
            bitrate_: e.bitrate,
            flags_: e.flags,
            guild_id: null !== (r = null != t ? t : e.guild_id) && void 0 !== r ? r : null,
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
            name: null !== (i = e.name) && void 0 !== i ? i : '',
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
                invitable: null === (o = e.thread_metadata.invitable) || void 0 === o || o
            } : void 0,
            totalMessageSent: e.total_message_sent,
            type: null != e.type ? e.type : h.d4z.PUBLIC_THREAD,
            userLimit_: e.user_limit,
            videoQualityMode: e.video_quality_mode
        };
        return (0, c.gh)(s, eA);
    }
    constructor(e) {
        var t;
        super(e), this.appliedTags = null !== (t = e.appliedTags) && void 0 !== t ? t : [], this.bitrate_ = e.bitrate_, this.flags_ = e.flags_, this.lastMessageId = e.lastMessageId, this.lastPinTimestamp = e.lastPinTimestamp, this.member = e.member, this.memberCount = e.memberCount, this.memberIdsPreview = e.memberIdsPreview, this.messageCount = e.messageCount, this.nsfw_ = e.nsfw_, this.ownerId = e.ownerId, this.parent_id = e.parent_id, this.parentChannelThreadType = e.parentChannelThreadType, this.rateLimitPerUser_ = e.rateLimitPerUser_, this.rtcRegion = e.rtcRegion, this.threadMetadata = e.threadMetadata, this.userLimit_ = e.userLimit_, this.videoQualityMode = e.videoQualityMode;
    }
}
let eN = {
    [h.d4z.DM]: eg.fromServer,
    [h.d4z.GROUP_DM]: eg.fromServer,
    [h.d4z.GUILD_TEXT]: eh.fromServer,
    [h.d4z.GUILD_VOICE]: ef.fromServer,
    [h.d4z.GUILD_STAGE_VOICE]: ef.fromServer,
    [h.d4z.GUILD_CATEGORY]: eh.fromServer,
    [h.d4z.GUILD_ANNOUNCEMENT]: eh.fromServer,
    [h.d4z.GUILD_STORE]: eh.fromServer,
    [h.d4z.ANNOUNCEMENT_THREAD]: eA.fromServer,
    [h.d4z.PUBLIC_THREAD]: eA.fromServer,
    [h.d4z.PRIVATE_THREAD]: eA.fromServer,
    [h.d4z.GUILD_DIRECTORY]: eh.fromServer,
    [h.d4z.GUILD_FORUM]: ep.fromServer,
    [h.d4z.GUILD_MEDIA]: ep.fromServer
};
function ev(e, t) {
    var n, r;
    return (null !== (r = eN[null !== (n = e.type) && void 0 !== n ? n : h.d4z.GUILD_TEXT]) && void 0 !== r ? r : eE.fromServer)(e, t);
}
function eO(e) {
    return ey(e);
}
let eR = {
    [h.d4z.DM]: eS,
    [h.d4z.GROUP_DM]: class e extends eg {
    },
    [h.d4z.GUILD_TEXT]: class e extends eh {
    },
    [h.d4z.GUILD_VOICE]: class e extends ef {
    },
    [h.d4z.GUILD_STAGE_VOICE]: class e extends ef {
    },
    [h.d4z.GUILD_CATEGORY]: class e extends eh {
    },
    [h.d4z.GUILD_ANNOUNCEMENT]: class e extends eh {
    },
    [h.d4z.GUILD_STORE]: class e extends eh {
    },
    [h.d4z.ANNOUNCEMENT_THREAD]: eA,
    [h.d4z.PUBLIC_THREAD]: eA,
    [h.d4z.PRIVATE_THREAD]: eA,
    [h.d4z.GUILD_DIRECTORY]: class e extends eh {
    },
    [h.d4z.GUILD_FORUM]: ep,
    [h.d4z.GUILD_MEDIA]: ep
};
function eC(e) {
    var t, n;
    let r = null !== (n = eR[null !== (t = e.type) && void 0 !== t ? t : h.d4z.GUILD_TEXT]) && void 0 !== n ? n : eE;
    return (0, c.gh)(e, r);
}
function ey(e) {
    var t, n;
    return new (null !== (n = eR[null !== (t = e.type) && void 0 !== t ? t : h.d4z.GUILD_TEXT]) && void 0 !== n ? n : eE)(ec(e));
}
