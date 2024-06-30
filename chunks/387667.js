E.d(_, {
    Pw: function () {
        return N;
    },
    ms: function () {
        return L;
    },
    p5: function () {
        return r;
    }
});
var s = E(913527), T = E.n(s), I = E(81825), n = E(960048), A = E(709054), t = E(981631);
function a(e, _, E) {
    return _ in e ? Object.defineProperty(e, _, {
        value: E,
        enumerable: !0,
        configurable: !0,
        writable: !0
    }) : e[_] = E, e;
}
function r(e) {
    if (e === t.rsA.ALL)
        return t.KFR.ALL;
    if (e <= t.rsA.GUILD_UPDATE)
        return t.KFR.GUILD;
    if (e <= t.rsA.CHANNEL_DELETE || e === t.rsA.MESSAGE_BULK_DELETE)
        return t.KFR.CHANNEL;
    else if (e <= t.rsA.CHANNEL_OVERWRITE_DELETE)
        return t.KFR.CHANNEL_OVERWRITE;
    else if (e <= t.rsA.BOT_ADD || e === t.rsA.MESSAGE_DELETE || e === t.rsA.MESSAGE_PIN || e === t.rsA.MESSAGE_UNPIN)
        return t.KFR.USER;
    else if (e <= t.rsA.ROLE_DELETE)
        return t.KFR.ROLE;
    else if (e <= t.rsA.INVITE_DELETE)
        return t.KFR.INVITE;
    else if (e <= t.rsA.WEBHOOK_DELETE)
        return t.KFR.WEBHOOK;
    else if (e <= t.rsA.EMOJI_DELETE)
        return t.KFR.EMOJI;
    else if (e <= t.rsA.INTEGRATION_DELETE)
        return t.KFR.INTEGRATION;
    else if (e <= t.rsA.STAGE_INSTANCE_DELETE)
        return t.KFR.STAGE_INSTANCE;
    else if (e <= t.rsA.STICKER_DELETE)
        return t.KFR.STICKER;
    else if (e <= t.rsA.GUILD_SCHEDULED_EVENT_DELETE)
        return t.KFR.GUILD_SCHEDULED_EVENT;
    else if (e <= t.rsA.THREAD_DELETE)
        return t.KFR.THREAD;
    else if (e === t.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE)
        return t.KFR.APPLICATION_COMMAND;
    else if (e <= t.rsA.SOUNDBOARD_SOUND_DELETE)
        return t.KFR.GUILD_SOUNDBOARD;
    else if (e < t.rsA.AUTO_MODERATION_BLOCK_MESSAGE)
        return t.KFR.AUTO_MODERATION_RULE;
    else if (e === t.rsA.AUTO_MODERATION_BLOCK_MESSAGE)
        return t.KFR.USER;
    else if (e === t.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL)
        return t.KFR.USER;
    else if (e === t.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED)
        return t.KFR.USER;
    else if (e === t.rsA.AUTO_MODERATION_QUARANTINE_USER)
        return t.KFR.USER;
    else if (e <= t.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED)
        return t.KFR.GUILD;
    else if (e <= t.rsA.ONBOARDING_PROMPT_DELETE)
        return t.KFR.ONBOARDING_PROMPT;
    else if (e <= t.rsA.ONBOARDING_UPDATE)
        return t.KFR.GUILD_ONBOARDING;
    else if (e <= t.rsA.GUILD_HOME_REMOVE_ITEM)
        return t.KFR.GUILD_HOME;
    else if (e <= t.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE)
        return t.KFR.GUILD;
    else if (e <= t.rsA.HOME_SETTINGS_UPDATE)
        return t.KFR.HOME_SETTINGS;
    else if (e <= t.rsA.VOICE_CHANNEL_STATUS_DELETE)
        return t.KFR.VOICE_CHANNEL_STATUS;
    else if (e <= t.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE)
        return t.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
    return n.Z.captureMessage('Unknown target type for: '.concat(e)), t.KFR.UNKNOWN;
}
function N(e) {
    switch (e) {
    case t.rsA.CHANNEL_CREATE:
    case t.rsA.CHANNEL_OVERWRITE_CREATE:
    case t.rsA.MEMBER_BAN_REMOVE:
    case t.rsA.ROLE_CREATE:
    case t.rsA.INVITE_CREATE:
    case t.rsA.WEBHOOK_CREATE:
    case t.rsA.EMOJI_CREATE:
    case t.rsA.STICKER_CREATE:
    case t.rsA.MESSAGE_PIN:
    case t.rsA.BOT_ADD:
    case t.rsA.INTEGRATION_CREATE:
    case t.rsA.STAGE_INSTANCE_CREATE:
    case t.rsA.GUILD_SCHEDULED_EVENT_CREATE:
    case t.rsA.THREAD_CREATE:
    case t.rsA.AUTO_MODERATION_RULE_CREATE:
    case t.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
    case t.rsA.ONBOARDING_PROMPT_CREATE:
    case t.rsA.ONBOARDING_CREATE:
    case t.rsA.GUILD_HOME_FEATURE_ITEM:
    case t.rsA.SOUNDBOARD_SOUND_CREATE:
    case t.rsA.HOME_SETTINGS_CREATE:
    case t.rsA.VOICE_CHANNEL_STATUS_CREATE:
        return t.vB8.CREATE;
    case t.rsA.CHANNEL_DELETE:
    case t.rsA.CHANNEL_OVERWRITE_DELETE:
    case t.rsA.MEMBER_KICK:
    case t.rsA.MEMBER_PRUNE:
    case t.rsA.MEMBER_BAN_ADD:
    case t.rsA.ROLE_DELETE:
    case t.rsA.INVITE_DELETE:
    case t.rsA.WEBHOOK_DELETE:
    case t.rsA.EMOJI_DELETE:
    case t.rsA.STICKER_DELETE:
    case t.rsA.MESSAGE_DELETE:
    case t.rsA.MESSAGE_BULK_DELETE:
    case t.rsA.MESSAGE_UNPIN:
    case t.rsA.INTEGRATION_DELETE:
    case t.rsA.MEMBER_DISCONNECT:
    case t.rsA.STAGE_INSTANCE_DELETE:
    case t.rsA.GUILD_SCHEDULED_EVENT_DELETE:
    case t.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case t.rsA.THREAD_DELETE:
    case t.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
    case t.rsA.AUTO_MODERATION_RULE_DELETE:
    case t.rsA.ONBOARDING_PROMPT_DELETE:
    case t.rsA.GUILD_HOME_REMOVE_ITEM:
    case t.rsA.SOUNDBOARD_SOUND_DELETE:
    case t.rsA.VOICE_CHANNEL_STATUS_DELETE:
        return t.vB8.DELETE;
    case t.rsA.GUILD_UPDATE:
    case t.rsA.CHANNEL_UPDATE:
    case t.rsA.CHANNEL_OVERWRITE_UPDATE:
    case t.rsA.MEMBER_UPDATE:
    case t.rsA.MEMBER_ROLE_UPDATE:
    case t.rsA.ROLE_UPDATE:
    case t.rsA.INVITE_UPDATE:
    case t.rsA.WEBHOOK_UPDATE:
    case t.rsA.EMOJI_UPDATE:
    case t.rsA.STICKER_UPDATE:
    case t.rsA.INTEGRATION_UPDATE:
    case t.rsA.MEMBER_MOVE:
    case t.rsA.STAGE_INSTANCE_UPDATE:
    case t.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
    case t.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case t.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case t.rsA.THREAD_UPDATE:
    case t.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case t.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case t.rsA.AUTO_MODERATION_RULE_UPDATE:
    case t.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case t.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case t.rsA.AUTO_MODERATION_QUARANTINE_USER:
    case t.rsA.ONBOARDING_PROMPT_UPDATE:
    case t.rsA.ONBOARDING_UPDATE:
    case t.rsA.SOUNDBOARD_SOUND_UPDATE:
    case t.rsA.HOME_SETTINGS_UPDATE:
        return t.vB8.UPDATE;
    }
    return t.vB8.ALL;
}
class L {
    constructor(e, _, E) {
        a(this, 'key', void 0), a(this, 'oldValue', void 0), a(this, 'newValue', void 0), a(this, 'subtarget', void 0), this.key = e, this.oldValue = _, this.newValue = E;
    }
}
class S extends I.Z {
    constructor(e) {
        var _, E, s, I, n, t;
        super(), a(this, 'id', void 0), a(this, 'actionType', void 0), a(this, 'action', void 0), a(this, 'targetType', void 0), a(this, 'targetId', void 0), a(this, 'target', void 0), a(this, 'userId', void 0), a(this, 'changes', void 0), a(this, 'timestampStart', void 0), a(this, 'timestampEnd', void 0), a(this, 'user', void 0), a(this, 'options', void 0), this.id = e.id, this.action = e.action, this.actionType = N(this.action), this.targetId = e.targetId, this.timestampStart = null !== (_ = e.timestampStart) && void 0 !== _ ? _ : T()(A.default.extractTimestamp(this.id)), this.timestampEnd = null !== (E = e.timestampEnd) && void 0 !== E ? E : this.timestampStart, this.userId = e.userId, this.changes = null !== (s = e.changes) && void 0 !== s ? s : [], this.targetType = r(this.action), this.options = null !== (I = e.options) && void 0 !== I ? I : {}, this.target = null !== (n = e.target) && void 0 !== n ? n : e.id, this.user = null !== (t = e.user) && void 0 !== t ? t : null;
    }
}
_.ZP = S;
