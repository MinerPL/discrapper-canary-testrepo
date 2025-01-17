E.d(_, {
    Bq: function () {
        return q;
    },
    C0: function () {
        return es;
    },
    C2: function () {
        return J;
    },
    EN: function () {
        return j;
    },
    Et: function () {
        return V;
    },
    F1: function () {
        return eT;
    },
    HE: function () {
        return K;
    },
    HN: function () {
        return w;
    },
    Iv: function () {
        return en;
    },
    K: function () {
        return X;
    },
    ML: function () {
        return x;
    },
    N$: function () {
        return Y;
    },
    N5: function () {
        return et;
    },
    _$: function () {
        return eN;
    },
    cT: function () {
        return er;
    },
    em: function () {
        return eA;
    },
    hQ: function () {
        return ea;
    },
    hx: function () {
        return k;
    },
    lR: function () {
        return W;
    },
    lU: function () {
        return z;
    },
    oD: function () {
        return y;
    },
    pA: function () {
        return ee;
    },
    pY: function () {
        return b;
    },
    pi: function () {
        return $;
    },
    rK: function () {
        return eE;
    },
    uB: function () {
        return Q;
    },
    vc: function () {
        return eI;
    },
    vm: function () {
        return e_;
    }
}),
    E(411104),
    E(653041);
var s = E(654861),
    T = E.n(s),
    I = E(913527),
    n = E.n(I),
    t = E(536402),
    A = E(533800),
    r = E(149765),
    a = E(866442),
    N = E(911969),
    l = E(933557),
    L = E(710845),
    S = E(339085),
    D = E(236413),
    U = E(45966),
    G = E(563534),
    O = E(987707),
    o = E(427679),
    i = E(926491),
    M = E(387667),
    u = E(592125),
    R = E(430824),
    c = E(699516),
    C = E(594174),
    d = E(55935),
    g = E(630388),
    f = E(823379),
    Z = E(971130),
    P = E(709054),
    H = E(981631),
    p = E(176505),
    h = E(273504),
    m = E(765305),
    v = E(689938);
let F = new L.Z('AuditLogUtils'),
    V = -1,
    B = () => ({ [H.zUn.REASON]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON }),
    b = () => ({
        [H.zUn.NAME]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
        [H.zUn.DESCRIPTION]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
        [H.zUn.ICON_HASH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
        [H.zUn.SPLASH_HASH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
        [H.zUn.DISCOVERY_SPLASH_HASH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
        [H.zUn.BANNER_HASH]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
        [H.zUn.OWNER_ID]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
        [H.zUn.REGION]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
        [H.zUn.PREFERRED_LOCALE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
        [H.zUn.AFK_CHANNEL_ID]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
        [H.zUn.AFK_TIMEOUT]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
        [H.zUn.SYSTEM_CHANNEL_ID]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
        [H.zUn.RULES_CHANNEL_ID]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
        [H.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
        [H.zUn.MFA_LEVEL]: {
            [H.BpS.NONE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
            [H.BpS.ELEVATED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
        },
        [H.zUn.WIDGET_ENABLED]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
        },
        [H.zUn.WIDGET_CHANNEL_ID]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
        [H.zUn.VERIFICATION_LEVEL]: {
            [H.sFg.NONE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
            [H.sFg.LOW]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
            [H.sFg.MEDIUM]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
            [H.sFg.HIGH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
            [H.sFg.VERY_HIGH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
        },
        [H.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: {
            [H.bL.ALL_MESSAGES]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
            [H.bL.ONLY_MENTIONS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
        },
        [H.zUn.VANITY_URL_CODE]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
        [H.zUn.EXPLICIT_CONTENT_FILTER]: {
            [H.lxg.DISABLED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
            [H.lxg.MEMBERS_WITHOUT_ROLES]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
            [H.lxg.ALL_MEMBERS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
        },
        [H.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
        },
        [H.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        [H.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
        [H.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
        [H.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
        [H.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
        ...B()
    }),
    x = () => ({
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
        [H.zUn.POSITION]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
        [H.zUn.TOPIC]: eo(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
        [H.zUn.BITRATE]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
        [H.zUn.RTC_REGION_OVERRIDE]: eo(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
        [H.zUn.USER_LIMIT]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
        [H.zUn.RATE_LIMIT_PER_USER]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [H.zUn.PERMISSIONS_RESET]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
        [H.zUn.PERMISSIONS_GRANTED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
        [H.zUn.PERMISSIONS_DENIED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
        [H.zUn.REASON]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
        [H.zUn.NSFW]: {
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
        },
        [H.zUn.TYPE]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
        [H.zUn.VIDEO_QUALITY_MODE]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
        [H.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
        [H.zUn.FLAGS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
        [H.zUn.AVAILABLE_TAG_ADD]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
        [H.zUn.AVAILABLE_TAG_EDIT]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
        [H.zUn.AVAILABLE_TAG_DELETE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
    }),
    z = () => ({
        [H.zUn.NICK]: eo(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
        [H.zUn.DEAF]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
        },
        [H.zUn.MUTE]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
        },
        [H.zUn.ROLES_REMOVE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
        [H.zUn.ROLES_ADD]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
        [H.zUn.PRUNE_DELETE_DAYS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
        [H.zUn.COMMUNICATION_DISABLED_UNTIL]: eo(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
        [H.zUn.BYPASSES_VERIFICATION]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
        },
        [H.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        ...B()
    }),
    K = () => ({
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
        [H.zUn.DESCRIPTION]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        [H.zUn.PERMISSIONS_GRANTED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
        [H.zUn.PERMISSIONS_DENIED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
        [H.zUn.COLOR]: {
            '#000000': v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
            [V]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
        },
        [H.zUn.HOIST]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
        },
        [H.zUn.MENTIONABLE]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
        },
        [H.zUn.ICON_HASH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
        [H.zUn.UNICODE_EMOJI]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
        ...B()
    }),
    y = () => ({
        ...B(),
        [H.zUn.TITLE]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE;
        },
        [H.zUn.DESCRIPTION]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({ newValue: E });
        },
        [H.zUn.OPTIONS]: () => v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
        [H.zUn.SINGLE_SELECT]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
        },
        [H.zUn.REQUIRED]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
        }
    }),
    j = () => ({
        ...B(),
        [H.zUn.DEFAULT_CHANNEL_IDS]: (e) => {
            let { newValue: _ } = e;
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({ count: _.length });
        },
        [H.zUn.ENABLE_DEFAULT_CHANNELS]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
        },
        [H.zUn.ENABLE_ONBOARDING_PROMPTS]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
        },
        [H.zUn.ENABLED]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
        }
    }),
    k = () => ({
        ...B(),
        [H.zUn.WELCOME_MESSAGE]: () => v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
        [H.zUn.NEW_MEMBER_ACTIONS]: () => v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
        [H.zUn.RESOURCE_CHANNELS]: () => v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
    }),
    w = () => ({
        [H.zUn.CODE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
        [H.zUn.CHANNEL_ID]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
        [H.zUn.MAX_USES]: {
            0: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
            [V]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
        },
        [H.zUn.MAX_AGE]: {
            0: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
            [V]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
        },
        [H.zUn.TEMPORARY]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
        },
        [H.zUn.FLAGS]: (e) => {
            let { newValue: _ } = e;
            return (function (e) {
                let { newValue: _ } = e;
                return _.map((e) =>
                    (function (e) {
                        if (e === A.$.IS_GUEST_INVITE) return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
                        return null;
                    })(e)
                ).filter(f.lm);
            })({ newValue: _ });
        },
        ...B()
    }),
    W = () => ({
        [H.zUn.CHANNEL_ID]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
        [H.zUn.AVATAR_HASH]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
        [H.zUn.REASON]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
    }),
    Y = () => ({
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
        ...B()
    }),
    q = () => ({
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
        [H.zUn.TAGS]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
        [H.zUn.DESCRIPTION]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        ...B()
    }),
    X = () => ({
        [H.zUn.ENABLE_EMOTICONS]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
        },
        [H.zUn.EXPIRE_BEHAVIOR]: {
            0: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
            1: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
        },
        [H.zUn.EXPIRE_GRACE_PERIOD]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
        ...B()
    }),
    J = () => ({
        [H.zUn.TOPIC]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
        [H.zUn.PRIVACY_LEVEL]: {
            [m.j8.GUILD_ONLY]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [m.j8.PUBLIC]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        },
        ...B()
    }),
    Q = () => ({
        [H.zUn.NAME]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
        [H.zUn.DESCRIPTION]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
        [H.zUn.PRIVACY_LEVEL]: {
            [m.j8.GUILD_ONLY]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [m.j8.PUBLIC]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        },
        [H.zUn.STATUS]: {
            [m.p1.SCHEDULED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
            [m.p1.ACTIVE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
            [m.p1.COMPLETED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
            [m.p1.CANCELED]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
        },
        [H.zUn.ENTITY_TYPE]: {
            [m.WX.NONE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
            [m.WX.STAGE_INSTANCE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
            [m.WX.VOICE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
            [m.WX.EXTERNAL]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
        },
        [H.zUn.CHANNEL_ID]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
        [H.zUn.LOCATION]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
        [H.zUn.IMAGE_HASH]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
        ...B()
    }),
    $ = () => ({
        [H.zUn.SCHEDULED_START_TIME]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
        [H.zUn.SCHEDULED_END_TIME]: eO(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
        [H.zUn.IS_CANCELED]: (e) => {
            if (null != e.oldValue || !0 === e.newValue) {
                if (!e.oldValue && e.newValue) return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
                if (e.oldValue && !e.newValue) return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED;
            }
            return '';
        },
        ...B()
    }),
    ee = () => ({
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
        [H.zUn.ARCHIVED]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
        },
        [H.zUn.LOCKED]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
        },
        [H.zUn.INVITABLE]: {
            true: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
            false: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
        },
        [H.zUn.AUTO_ARCHIVE_DURATION]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
        [H.zUn.RATE_LIMIT_PER_USER]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [H.zUn.FLAGS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
        ...B()
    }),
    e_ = (e) => {
        let _ = { ...B() };
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (_[e.key] = v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED) : (_[e.key] = v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED)) : (_[e.key] = v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED);
                }),
            _
        );
    },
    eE = () => ({
        [H.zUn.NAME]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
        [H.zUn.AUTO_MODERATION_TRIGGER_TYPE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
        [H.zUn.AUTO_MODERATION_EVENT_TYPE]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
        [H.zUn.AUTO_MODERATION_ACTIONS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
        [H.zUn.AUTO_MODERATION_ENABLED]: (e) => {
            var _;
            return !0 === (null !== (_ = e.newValue) && void 0 !== _ ? _ : e.oldValue) ? v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE;
        },
        [H.zUn.AUTO_MODERATION_EXEMPT_ROLES]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
        [H.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
        [H.zUn.AUTO_MODERATION_TRIGGER_METADATA]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
        [H.zUn.AUTO_MODERATION_ADD_KEYWORDS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
        [H.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
        [H.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
        [H.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
        [H.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
        [H.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
        ...B()
    }),
    es = () => ({
        [H.zUn.NAME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
        [H.zUn.VOLUME]: eG(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
        [H.zUn.EMOJI_NAME]: eo(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
        [H.zUn.EMOJI_ID]: eo(v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
        ...B()
    }),
    eT = () => ({
        [H.zUn.STATUS]: v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
        ...B()
    }),
    eI = {
        [H.KFR.CHANNEL]: {
            [H.zUn.ID]: !0,
            [H.zUn.PERMISSION_OVERWRITES]: !0
        },
        [H.KFR.CHANNEL_OVERWRITE]: {
            [H.zUn.TYPE]: !0,
            [H.zUn.ID]: !0,
            [H.zUn.PERMISSION_OVERWRITES]: !0
        },
        [H.KFR.INVITE]: {
            [H.zUn.INVITER_ID]: !0,
            [H.zUn.USES]: !0
        },
        [H.KFR.WEBHOOK]: {
            [H.zUn.TYPE]: !0,
            [H.zUn.APPLICATION_ID]: !0
        },
        [H.KFR.INTEGRATION]: { [H.zUn.TYPE]: !0 },
        [H.KFR.THREAD]: {
            [H.zUn.ID]: !0,
            [H.zUn.TYPE]: !0
        },
        [H.KFR.STICKER]: {
            [H.zUn.ID]: !0,
            [H.zUn.TYPE]: !0,
            [H.zUn.ASSET]: !0,
            [H.zUn.FORMAT_TYPE]: !0,
            [H.zUn.AVAILABLE]: !0,
            [H.zUn.GUILD_ID]: !0
        },
        [H.KFR.GUILD_HOME]: { [H.zUn.ENTITY_TYPE]: !0 },
        [H.KFR.GUILD_ONBOARDING]: { [H.zUn.PROMPTS]: !0 },
        [H.KFR.GUILD_SOUNDBOARD]: {
            [H.zUn.ID]: !0,
            [H.zUn.SOUND_ID]: !0
        }
    },
    en = () => [
        {
            value: H.rsA.ALL,
            label: v.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
            valueLabel: v.Z.Messages.GUILD_SETTINGS_FILTER_ALL
        },
        {
            value: H.rsA.GUILD_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
        },
        {
            value: H.rsA.CHANNEL_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
        },
        {
            value: H.rsA.CHANNEL_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
        },
        {
            value: H.rsA.CHANNEL_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
        },
        {
            value: H.rsA.CHANNEL_OVERWRITE_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
        },
        {
            value: H.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
        },
        {
            value: H.rsA.CHANNEL_OVERWRITE_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
        },
        {
            value: H.rsA.MEMBER_KICK,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
        },
        {
            value: H.rsA.MEMBER_PRUNE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
        },
        {
            value: H.rsA.MEMBER_BAN_ADD,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
        },
        {
            value: H.rsA.MEMBER_BAN_REMOVE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
        },
        {
            value: H.rsA.MEMBER_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
        },
        {
            value: H.rsA.MEMBER_ROLE_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
        },
        {
            value: H.rsA.MEMBER_MOVE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
        },
        {
            value: H.rsA.MEMBER_DISCONNECT,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
        },
        {
            value: H.rsA.BOT_ADD,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
        },
        {
            value: H.rsA.THREAD_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
        },
        {
            value: H.rsA.THREAD_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
        },
        {
            value: H.rsA.THREAD_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
        },
        {
            value: H.rsA.ROLE_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
        },
        {
            value: H.rsA.ROLE_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
        },
        {
            value: H.rsA.ROLE_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
        },
        {
            value: H.rsA.ONBOARDING_PROMPT_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
        },
        {
            value: H.rsA.ONBOARDING_PROMPT_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
        },
        {
            value: H.rsA.ONBOARDING_PROMPT_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
        },
        {
            value: H.rsA.ONBOARDING_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
        },
        {
            value: H.rsA.ONBOARDING_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
        },
        {
            value: H.rsA.HOME_SETTINGS_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
        },
        {
            value: H.rsA.HOME_SETTINGS_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
        },
        {
            value: H.rsA.INVITE_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
        },
        {
            value: H.rsA.INVITE_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
        },
        {
            value: H.rsA.INVITE_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
        },
        {
            value: H.rsA.WEBHOOK_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
        },
        {
            value: H.rsA.WEBHOOK_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
        },
        {
            value: H.rsA.WEBHOOK_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
        },
        {
            value: H.rsA.EMOJI_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
        },
        {
            value: H.rsA.EMOJI_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
        },
        {
            value: H.rsA.EMOJI_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
        },
        {
            value: H.rsA.MESSAGE_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
        },
        {
            value: H.rsA.MESSAGE_BULK_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
        },
        {
            value: H.rsA.MESSAGE_PIN,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
        },
        {
            value: H.rsA.MESSAGE_UNPIN,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
        },
        {
            value: H.rsA.INTEGRATION_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
        },
        {
            value: H.rsA.INTEGRATION_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
        },
        {
            value: H.rsA.INTEGRATION_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
        },
        {
            value: H.rsA.STICKER_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
        },
        {
            value: H.rsA.STICKER_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
        },
        {
            value: H.rsA.STICKER_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
        },
        {
            value: H.rsA.STAGE_INSTANCE_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
        },
        {
            value: H.rsA.STAGE_INSTANCE_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
        },
        {
            value: H.rsA.STAGE_INSTANCE_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
        },
        {
            value: H.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
        },
        {
            value: H.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
        },
        {
            value: H.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
        },
        {
            value: H.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
        },
        {
            value: H.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
        },
        {
            value: H.rsA.AUTO_MODERATION_RULE_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
        },
        {
            value: H.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
        },
        {
            value: H.rsA.AUTO_MODERATION_RULE_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
        },
        {
            value: H.rsA.GUILD_HOME_FEATURE_ITEM,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
        },
        {
            value: H.rsA.GUILD_HOME_REMOVE_ITEM,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
        },
        {
            value: H.rsA.SOUNDBOARD_SOUND_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
        },
        {
            value: H.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
        },
        {
            value: H.rsA.SOUNDBOARD_SOUND_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
        },
        {
            value: H.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
        },
        {
            value: H.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: v.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
        }
    ];
function et(e) {
    switch (e.action) {
        case H.rsA.GUILD_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
        case H.rsA.CHANNEL_CREATE:
            let _ = null != e.changes ? e.changes.find((e) => e.key === H.zUn.TYPE) : null;
            if (null == _) throw Error('[AuditLog] Could not find type change for channel create');
            switch (_.newValue) {
                case H.d4z.GUILD_STAGE_VOICE:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                case H.d4z.GUILD_VOICE:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                case H.d4z.GUILD_CATEGORY:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                default:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE;
            }
        case H.rsA.CHANNEL_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
        case H.rsA.CHANNEL_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
        case H.rsA.CHANNEL_OVERWRITE_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
        case H.rsA.CHANNEL_OVERWRITE_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
        case H.rsA.CHANNEL_OVERWRITE_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
        case H.rsA.MEMBER_KICK:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
        case H.rsA.MEMBER_PRUNE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
        case H.rsA.MEMBER_BAN_ADD:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
        case H.rsA.MEMBER_BAN_REMOVE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
        case H.rsA.MEMBER_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
        case H.rsA.MEMBER_ROLE_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
        case H.rsA.MEMBER_MOVE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
        case H.rsA.MEMBER_DISCONNECT:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
        case H.rsA.BOT_ADD:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
        case H.rsA.ROLE_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
        case H.rsA.ROLE_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
        case H.rsA.ROLE_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
        case H.rsA.INVITE_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
        case H.rsA.INVITE_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
        case H.rsA.INVITE_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
        case H.rsA.WEBHOOK_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
        case H.rsA.WEBHOOK_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
        case H.rsA.WEBHOOK_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
        case H.rsA.EMOJI_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
        case H.rsA.EMOJI_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
        case H.rsA.EMOJI_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
        case H.rsA.STICKER_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
        case H.rsA.STICKER_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
        case H.rsA.STICKER_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
        case H.rsA.MESSAGE_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
        case H.rsA.MESSAGE_BULK_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
        case H.rsA.MESSAGE_PIN:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
        case H.rsA.MESSAGE_UNPIN:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
        case H.rsA.INTEGRATION_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
        case H.rsA.INTEGRATION_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
        case H.rsA.INTEGRATION_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
        case H.rsA.STAGE_INSTANCE_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
        case H.rsA.STAGE_INSTANCE_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
        case H.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
        case H.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
        case H.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
        case H.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
        case H.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case H.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
        case H.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
        case H.rsA.THREAD_CREATE:
            let E = null != e.changes ? e.changes.find((e) => e.key === H.zUn.TYPE) : null;
            if (null == E) throw Error('[AuditLog] Could not find type change for thread create');
            switch (E.newValue) {
                case H.d4z.PRIVATE_THREAD:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
                case H.d4z.ANNOUNCEMENT_THREAD:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
                default:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE;
            }
        case H.rsA.THREAD_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
        case H.rsA.THREAD_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
        case H.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
        case H.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
        case H.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var s;
            if ((null === (s = e.options) || void 0 === s ? void 0 : s.auto_moderation_rule_trigger_type) === h.fX.USER_PROFILE.toString()) return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
        case H.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
        case H.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
        case H.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return v.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
        case H.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return v.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
        case H.rsA.AUTO_MODERATION_RULE_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
        case H.rsA.AUTO_MODERATION_RULE_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
        case H.rsA.AUTO_MODERATION_RULE_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
        case H.rsA.ONBOARDING_PROMPT_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
        case H.rsA.ONBOARDING_PROMPT_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
        case H.rsA.ONBOARDING_PROMPT_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
        case H.rsA.ONBOARDING_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
        case H.rsA.ONBOARDING_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
        case H.rsA.HOME_SETTINGS_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
        case H.rsA.HOME_SETTINGS_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
        case H.rsA.GUILD_HOME_FEATURE_ITEM:
            let T = null != e.changes ? e.changes.find((e) => e.key === H.zUn.ENTITY_TYPE) : null;
            if (null == T) return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            switch (T.newValue) {
                case t.w.MESSAGE:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
                case t.w.FORUM_POST:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
                default:
                    return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            }
        case H.rsA.GUILD_HOME_REMOVE_ITEM:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
        case H.rsA.SOUNDBOARD_SOUND_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
        case H.rsA.SOUNDBOARD_SOUND_UPDATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
        case H.rsA.SOUNDBOARD_SOUND_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
        case H.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
        case H.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
        default:
            return null;
    }
}
function eA(e) {
    switch (e) {
        case p.zZ.GUILD_FEED_REMOVED:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
        case p.zZ.ACTIVE_CHANNELS_REMOVED:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
        case p.zZ.PINNED:
            return v.Z.Messages.PINNED_POST;
    }
    return null;
}
function er(e) {
    switch (e) {
        case p.zZ.GUILD_FEED_REMOVED:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
        case p.zZ.ACTIVE_CHANNELS_REMOVED:
            return v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
        case p.zZ.PINNED:
            return v.Z.Messages.UNPINNED_POST;
    }
    return null;
}
function ea(e, _) {
    switch (e) {
        case H.Plq.CREATE_INSTANT_INVITE:
            return v.Z.Messages.CREATE_INSTANT_INVITE;
        case H.Plq.KICK_MEMBERS:
            return v.Z.Messages.KICK_MEMBERS;
        case H.Plq.BAN_MEMBERS:
            return v.Z.Messages.BAN_MEMBERS;
        case H.Plq.ADMINISTRATOR:
            return v.Z.Messages.ADMINISTRATOR;
        case H.Plq.MANAGE_CHANNELS:
            if (_.targetType === H.KFR.CHANNEL || _.targetType === H.KFR.CHANNEL_OVERWRITE) return v.Z.Messages.MANAGE_CHANNEL;
            return v.Z.Messages.MANAGE_CHANNELS;
        case H.Plq.MANAGE_GUILD:
            return v.Z.Messages.MANAGE_SERVER;
        case H.Plq.VIEW_GUILD_ANALYTICS:
            return v.Z.Messages.VIEW_GUILD_ANALYTICS;
        case H.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return v.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
        case H.Plq.CHANGE_NICKNAME:
            return v.Z.Messages.CHANGE_NICKNAME;
        case H.Plq.MANAGE_NICKNAMES:
            return v.Z.Messages.MANAGE_NICKNAMES;
        case H.Plq.MANAGE_ROLES:
            return v.Z.Messages.MANAGE_ROLES;
        case H.Plq.MANAGE_WEBHOOKS:
            return v.Z.Messages.MANAGE_WEBHOOKS;
        case H.Plq.CREATE_GUILD_EXPRESSIONS:
            return v.Z.Messages.CREATE_EXPRESSIONS;
        case H.Plq.MANAGE_GUILD_EXPRESSIONS:
            return v.Z.Messages.MANAGE_EXPRESSIONS;
        case H.Plq.VIEW_AUDIT_LOG:
            return v.Z.Messages.VIEW_AUDIT_LOG;
        case H.Plq.VIEW_CHANNEL:
            if (_.targetType === H.KFR.CHANNEL || _.targetType === H.KFR.CHANNEL_OVERWRITE) return v.Z.Messages.VIEW_CHANNEL;
            return v.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL;
        case H.Plq.SEND_MESSAGES:
            return v.Z.Messages.SEND_MESSAGES;
        case H.Plq.SEND_TTS_MESSAGES:
            return v.Z.Messages.SEND_TTS_MESSAGES;
        case H.Plq.USE_APPLICATION_COMMANDS:
            return v.Z.Messages.USE_APPLICATION_COMMANDS;
        case H.Plq.MANAGE_MESSAGES:
            return v.Z.Messages.MANAGE_MESSAGES;
        case H.Plq.EMBED_LINKS:
            return v.Z.Messages.EMBED_LINKS;
        case H.Plq.ATTACH_FILES:
            return v.Z.Messages.ATTACH_FILES;
        case H.Plq.READ_MESSAGE_HISTORY:
            return v.Z.Messages.READ_MESSAGE_HISTORY;
        case H.Plq.MENTION_EVERYONE:
            return v.Z.Messages.MENTION_EVERYONE;
        case H.Plq.USE_EXTERNAL_EMOJIS:
            return v.Z.Messages.USE_EXTERNAL_EMOJIS;
        case H.Plq.USE_EXTERNAL_STICKERS:
            return v.Z.Messages.USE_EXTERNAL_STICKERS;
        case H.Plq.ADD_REACTIONS:
            return v.Z.Messages.ADD_REACTIONS;
        case H.Plq.CONNECT:
            return v.Z.Messages.CONNECT;
        case H.Plq.SPEAK:
            return v.Z.Messages.SPEAK;
        case H.Plq.MUTE_MEMBERS:
            return v.Z.Messages.MUTE_MEMBERS;
        case H.Plq.DEAFEN_MEMBERS:
            return v.Z.Messages.DEAFEN_MEMBERS;
        case H.Plq.MOVE_MEMBERS:
            return v.Z.Messages.MOVE_MEMBERS;
        case H.Plq.USE_VAD:
            return v.Z.Messages.USE_VAD;
        case H.Plq.PRIORITY_SPEAKER:
            return v.Z.Messages.PRIORITY_SPEAKER;
        case H.Plq.STREAM:
            return v.Z.Messages.VIDEO;
        case H.Plq.REQUEST_TO_SPEAK:
            return v.Z.Messages.REQUEST_TO_SPEAK;
        case H.Plq.CREATE_EVENTS:
            return v.Z.Messages.CREATE_EVENTS;
        case H.Plq.MANAGE_EVENTS:
            return v.Z.Messages.MANAGE_EVENTS;
        case H.Plq.CREATE_PUBLIC_THREADS:
            return v.Z.Messages.CREATE_PUBLIC_THREADS;
        case H.Plq.CREATE_PRIVATE_THREADS:
            return v.Z.Messages.CREATE_PRIVATE_THREADS;
        case H.Plq.SEND_MESSAGES_IN_THREADS:
            return v.Z.Messages.SEND_MESSAGES_IN_THREADS;
        case H.Plq.MANAGE_THREADS:
            return v.Z.Messages.MANAGE_THREADS;
        case H.Plq.MODERATE_MEMBERS:
            return v.Z.Messages.MODERATE_MEMBER;
        case H.Plq.USE_CLYDE_AI:
            return v.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
        case H.Plq.SET_VOICE_CHANNEL_STATUS:
            return v.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
        case H.Plq.SEND_POLLS:
            return v.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS;
        case H.Plq.USE_EXTERNAL_APPS:
            return v.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS;
    }
    return null;
}
function eN(e, _) {
    let E = [];
    return (
        e.forEach((e) => {
            let s = (function (e, _) {
                    switch (e.targetType) {
                        case H.KFR.GUILD:
                        case H.KFR.GUILD_HOME:
                            return _;
                        case H.KFR.CHANNEL:
                        case H.KFR.CHANNEL_OVERWRITE:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => u.Z.getChannel(e),
                                (e) => (0, l.F6)(e, C.default, c.Z, !0)
                            );
                        case H.KFR.USER:
                            return eD(
                                e,
                                H.zUn.NICK,
                                (e) => C.default.getUser(e),
                                (e) => e
                            );
                        case H.KFR.ROLE:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => R.Z.getRole(_.id, e),
                                (e) => e.name
                            );
                        case H.KFR.ONBOARDING_PROMPT:
                            let E = eD(
                                e,
                                H.zUn.ID,
                                (e) => U.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null != E ? E : v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
                        case H.KFR.GUILD_ONBOARDING:
                            return _;
                        case H.KFR.INVITE:
                            return eD(e, H.zUn.CODE, H.VqG);
                        case H.KFR.INTEGRATION:
                            return eD(
                                e,
                                H.zUn.TYPE,
                                (e) => O.Z.integrations.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case H.KFR.WEBHOOK:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => O.Z.webhooks.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case H.KFR.EMOJI:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => S.ZP.getGuildEmoji(_.id).find((_) => _.id === e),
                                (e) => e.name
                            );
                        case H.KFR.STICKER:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => i.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case H.KFR.STAGE_INSTANCE:
                            return eD(
                                e,
                                H.zUn.TOPIC,
                                (e) => {
                                    var E;
                                    return null === (E = Object.values(o.Z.getStageInstancesByGuild(_.id))) || void 0 === E ? void 0 : E.find((_) => _.id === e);
                                },
                                (e) => e.topic
                            );
                        case H.KFR.GUILD_SCHEDULED_EVENT:
                        case H.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => O.Z.guildScheduledEvents.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case H.KFR.THREAD:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => O.Z.threads.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case H.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let _ = O.Z.integrations.find((_) => _.application_id === e.targetId);
                                if (null != _) return _.name;
                                return e.targetId;
                            }
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => O.Z.applicationCommands.find((_) => _.id === e),
                                (e) => {
                                    let _ = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === N.yU.CHAT ? '/\u2060'.concat(_) : _;
                                }
                            );
                        case H.KFR.AUTO_MODERATION_RULE:
                            return eD(
                                e,
                                H.zUn.NAME,
                                (e) => O.Z.automodRules.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case H.KFR.GUILD_SOUNDBOARD:
                            return eD(e, H.zUn.NAME, H.VqG);
                        case H.KFR.HOME_SETTINGS:
                            return eD(
                                e,
                                H.zUn.GUILD_ID,
                                (e) => G.Z.getSettings(e),
                                () => v.Z.Messages.SERVER_GUIDE,
                                _.id
                            );
                        case H.KFR.VOICE_CHANNEL_STATUS:
                            return eD(
                                e,
                                H.zUn.STATUS,
                                (e) => u.Z.getChannel(e),
                                (e) => (0, l.F6)(e, C.default, c.Z, !0)
                            );
                        default:
                            return F.warn('Unknown targetType for log', e), null;
                    }
                })(e, _),
                I = C.default.getUser(e.userId);
            if (null != s || !![H.rsA.MEMBER_PRUNE, H.rsA.MEMBER_DISCONNECT, H.rsA.MEMBER_MOVE, H.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, H.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', I)).set('target', s)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let E = { ...e.options };
                                switch (e.options.type) {
                                    case H.jwA.USER:
                                        E.subtarget = eU(
                                            e.options.id,
                                            (e) => C.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case H.jwA.ROLE:
                                        E.subtarget = eU(e.options.role_name, H.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (E.channel = eD(
                                            e,
                                            '',
                                            (e) => u.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var _;
                                    let s = O.Z.guildScheduledEvents.find((_) => _.id === e.targetId),
                                        T = null == s ? void 0 : s.guild_scheduled_event_exceptions.find((_) => _.event_exception_id === e.options.event_exception_id);
                                    E.subtarget = (0, d.vc)(n()(P.default.extractTimestamp(null !== (_ = null == T ? void 0 : T.event_exception_id) && void 0 !== _ ? _ : '0')), 'LL');
                                }
                                return E;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let E = [];
                    e.changes.forEach((s) => {
                        let I = (function (e, _, E) {
                            if (_.action === H.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let _ = e.newValue || e.oldValue;
                                switch (_.type) {
                                    case H.ecB.ROLE:
                                        e.subtarget = eU(
                                            _.id,
                                            (e) => R.Z.getRole(E.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case H.ecB.USER:
                                        e.subtarget = eU(
                                            _.id,
                                            (e) => C.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case H.ecB.CHANNEL:
                                        _.id === T()(E.id).subtract(1).toString()
                                            ? (e.subtarget = v.Z.Messages.ALL_CHANNELS)
                                            : (e.subtarget = eU(
                                                  _.id,
                                                  (e) => u.Z.getChannel(e),
                                                  (e) => (0, l.F6)(e, C.default, c.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case H.zUn.OWNER_ID:
                                    return eS(e, (e) => C.default.getUser(e));
                                case H.zUn.CHANNEL_ID:
                                case H.zUn.AFK_CHANNEL_ID:
                                case H.zUn.SYSTEM_CHANNEL_ID:
                                case H.zUn.RULES_CHANNEL_ID:
                                case H.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eS(
                                        e,
                                        (e) => u.Z.getChannel(e),
                                        (e) => (0, l.F6)(e, C.default, c.Z, !0)
                                    );
                                case H.zUn.AFK_TIMEOUT:
                                    return eS(e, (e) => e / 60);
                                case H.zUn.BITRATE:
                                    return eS(e, (e) => e / 1000);
                                case H.zUn.COLOR:
                                    return eS(e, (e) => (0, a.Rf)(e).toUpperCase());
                                case H.zUn.THEME_COLORS:
                                    return eS(e, (e) => ''.concat((0, a.Rf)(e[0]).toUpperCase(), ', ').concat((0, a.Rf)(e[1]).toUpperCase()));
                                case H.zUn.MAX_AGE:
                                    return eS(e, (e) => {
                                        let _ = Z.ZP.getMaxAgeOptions.find((_) => {
                                            let { value: E } = _;
                                            return e === E;
                                        });
                                        return _ ? _.label : e;
                                    });
                                case H.zUn.PERMISSIONS: {
                                    let _ = [],
                                        { added: E, removed: s } = el(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let e = new M.ms(H.zUn.PERMISSIONS_GRANTED, null, E);
                                        _.push(e);
                                    }
                                    if (s.length > 0) {
                                        let e = new M.ms(H.zUn.PERMISSIONS_DENIED, null, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case H.zUn.PERMISSIONS_GRANTED:
                                case H.zUn.PERMISSIONS_DENIED: {
                                    let _ = [],
                                        { added: E, removed: s } = el(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new M.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let e = new M.ms(H.zUn.PERMISSIONS_RESET, s, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case H.zUn.FLAGS: {
                                    let _ = [],
                                        { added: E, removed: s } = (function (e, _) {
                                            let E = 'number' == typeof e ? e : 0,
                                                s = 'number' == typeof _ ? _ : 0,
                                                T = g.Ge(s, E),
                                                I = g.Ge(E, s),
                                                n = [],
                                                t = [];
                                            for (let e in p.zZ) {
                                                let _ = p.zZ[e];
                                                g.yE(T, _) && n.push(_), g.yE(I, _) && t.push(_);
                                            }
                                            return {
                                                added: n,
                                                removed: t
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new M.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let E = new M.ms(e.key, s, null);
                                        _.push(E);
                                    }
                                    return _;
                                }
                                case H.zUn.PREFERRED_LOCALE:
                                    return eS(e, (e) => {
                                        let _ = v.Z.getAvailableLocales().find((_) => _.value === e);
                                        return null != _ ? _.name : null;
                                    });
                                case H.zUn.VIDEO_QUALITY_MODE:
                                    return eS(e, (e) => (e === H.Ucd.FULL ? v.Z.Messages.VIDEO_QUALITY_MODE_FULL : v.Z.Messages.VIDEO_QUALITY_MODE_AUTO));
                                case H.zUn.SYSTEM_CHANNEL_FLAGS:
                                    return (function (e) {
                                        let _ = {
                                                [H.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: H.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                [H.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: H.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                [H.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: H.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                [H.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: H.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                            },
                                            E = [];
                                        return (
                                            Object.values(H.xmn).forEach((s) => {
                                                let T = (e.oldValue & s) === s,
                                                    I = (e.newValue & s) === s;
                                                if (T === I) return;
                                                let n = new M.ms(_[s], !T, !I);
                                                E.push(n);
                                            }),
                                            E
                                        );
                                    })(e);
                                case H.zUn.AUTO_MODERATION_ACTIONS:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE)
                                        return eS(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(D.ZF).join(', ')
                                        );
                                    break;
                                case H.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE) return eS(e, D.YN);
                                    break;
                                case H.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE) return eS(e, D.Ar);
                                    break;
                                case H.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE)
                                        return eS(e, (e) => {
                                            if (null != e && 'object' == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({ newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e);
                                            return e;
                                        });
                                    break;
                                case H.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case H.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case H.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case H.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case H.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case H.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE) return eS(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case H.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE)
                                        return eS(
                                            e,
                                            (e) =>
                                                e
                                                    .map(u.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, l.F6)(e, C.default, c.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case H.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (_.targetType === H.KFR.AUTO_MODERATION_RULE)
                                        return eS(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => R.Z.getRole(E.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : v.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case H.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: _, newValue: E } = e,
                                            s = Array.isArray(_) ? _ : [],
                                            T = Array.isArray(E) ? E : [];
                                        if (0 === s.length && 0 === T.length) return e;
                                        let I = {},
                                            n = {};
                                        if (
                                            (s.forEach((e) => {
                                                I[e.id] = e;
                                            }),
                                            T.forEach((e) => {
                                                n[e.id] = e;
                                            }),
                                            s.length < T.length)
                                        ) {
                                            for (let e in n) if (null == I[e]) return new M.ms(H.zUn.AVAILABLE_TAG_ADD, null, eL(n[e]));
                                        }
                                        if (s.length > T.length) {
                                            for (let e in I) if (null == n[e]) return new M.ms(H.zUn.AVAILABLE_TAG_DELETE, null, eL(I[e]));
                                        }
                                        for (let e in I) {
                                            let _ = I[e],
                                                E = n[e];
                                            if ((null == E ? void 0 : E.name) !== _.name || (null == E ? void 0 : E.emoji_id) !== _.emoji_id || (null == E ? void 0 : E.emoji_name) !== _.emoji_name) return new M.ms(H.zUn.AVAILABLE_TAG_EDIT, eL(_), eL(E));
                                        }
                                        return e;
                                    })(e);
                                case H.zUn.SCHEDULED_START_TIME:
                                case H.zUn.SCHEDULED_END_TIME:
                                    return eS(e, (e) => (0, d.vc)(n()(new Date(e)), 'LLLL'));
                            }
                            return e;
                        })(s, e, _);
                        Array.isArray(I) ? I.forEach((e) => E.push(e)) : E.push(I);
                    }),
                        (e = e.set('changes', E));
                }
                E.push(e);
            }
        }),
        E
    );
}
function el(e, _) {
    let E = r.vB('string' == typeof e ? e : 0),
        s = r.vB('string' == typeof _ ? _ : 0),
        T = r.Od(s, E),
        I = r.Od(E, s),
        n = [],
        t = [];
    for (let e in H.Plq) {
        let _ = H.Plq[e];
        r.e$(T, _) && n.push(_), r.e$(I, _) && t.push(_);
    }
    return {
        added: n,
        removed: t
    };
}
function eL(e) {
    return null == e
        ? null
        : {
              id: e.id,
              name: e.name,
              emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
              emojiName: e.emoji_name,
              moderated: e.moderated
          };
}
function eS(e, _, E) {
    let s = e.newValue,
        T = e.oldValue;
    return null != e.newValue && ((s = _(e.newValue)), null != E && null != s && (s = E(s))), null != e.oldValue && ((T = _(e.oldValue)), null != E && null != T && (T = E(T))), new M.ms(e.key, T || e.oldValue, s || e.newValue);
}
function eD(e, _, E, s, T) {
    let I = null,
        n = E((T = null != T ? T : e.targetId));
    if ((null != n && null != s && (I = s(n)), null == I)) {
        let _ = O.Z.deletedTargets[e.targetType];
        null != _ && null != _[T] && (I = _[T]);
    }
    if (null == I && null != e.changes) {
        let E = e.changes.find((e) => e.key === _);
        null != E && (I = E.newValue || E.oldValue);
    }
    return null != I ? I : T;
}
function eU(e, _, E) {
    let s = e,
        T = _(e);
    return null != T && null != E && (s = E(T)), s;
}
function eG(e, _) {
    return (E) => (null == E.oldValue ? e : _);
}
function eO(e, _) {
    return (E) => (null == E.newValue ? e : _);
}
function eo(e, _, E, s) {
    return (T) => {
        if (null != T.newValue && null != T.oldValue) return e;
        if (null != T.newValue) return _;
        if (null != T.oldValue) return E;
        return s;
    };
}
