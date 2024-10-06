E.d(_, {
    Bq: function () {
        return X;
    },
    C0: function () {
        return en;
    },
    C2: function () {
        return Q;
    },
    EN: function () {
        return K;
    },
    F1: function () {
        return et;
    },
    HE: function () {
        return k;
    },
    HN: function () {
        return W;
    },
    Iv: function () {
        return ea;
    },
    J5: function () {
        return ei;
    },
    K: function () {
        return J;
    },
    ML: function () {
        return j;
    },
    N$: function () {
        return q;
    },
    N5: function () {
        return eN;
    },
    QM: function () {
        return eA;
    },
    V$: function () {
        return eT;
    },
    _$: function () {
        return eu;
    },
    cT: function () {
        return eL;
    },
    em: function () {
        return eD;
    },
    hQ: function () {
        return eS;
    },
    hx: function () {
        return w;
    },
    lR: function () {
        return Y;
    },
    lU: function () {
        return y;
    },
    nm: function () {
        return el;
    },
    oD: function () {
        return z;
    },
    pA: function () {
        return e_;
    },
    pY: function () {
        return V;
    },
    pi: function () {
        return ee;
    },
    rK: function () {
        return es;
    },
    uB: function () {
        return $;
    },
    vc: function () {
        return er;
    },
    vm: function () {
        return eE;
    }
}),
    E(411104),
    E(653041);
var s = E(654861),
    n = E.n(s),
    t = E(913527),
    r = E.n(t),
    a = E(536402),
    T = E(533800),
    I = E(149765),
    l = E(866442),
    o = E(379649),
    A = E(911969),
    i = E(933557),
    N = E(710845),
    D = E(339085),
    L = E(236413),
    S = E(45966),
    u = E(563534),
    c = E(427679),
    O = E(926491),
    U = E(387667),
    d = E(592125),
    G = E(430824),
    M = E(699516),
    R = E(594174),
    g = E(55935),
    C = E(630388),
    f = E(823379),
    p = E(971130),
    h = E(709054),
    m = E(987707),
    P = E(981631),
    Z = E(176505),
    v = E(273504),
    b = E(765305),
    H = E(689938);
let F = new N.Z('AuditLogUtils'),
    B = [o.J6.DAYS, o.J6.HOURS, o.J6.MINUTES, o.J6.SECONDS],
    x = () => ({ [P.zUn.REASON]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON }),
    V = () => ({
        [P.zUn.NAME]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
        [P.zUn.DESCRIPTION]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
        [P.zUn.ICON_HASH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
        [P.zUn.SPLASH_HASH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
        [P.zUn.DISCOVERY_SPLASH_HASH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
        [P.zUn.BANNER_HASH]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
        [P.zUn.OWNER_ID]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
        [P.zUn.REGION]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
        [P.zUn.PREFERRED_LOCALE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
        [P.zUn.AFK_CHANNEL_ID]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
        [P.zUn.AFK_TIMEOUT]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
        [P.zUn.SYSTEM_CHANNEL_ID]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
        [P.zUn.RULES_CHANNEL_ID]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
        [P.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
        [P.zUn.MFA_LEVEL]: ef({
            [P.BpS.NONE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
            [P.BpS.ELEVATED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
        }),
        [P.zUn.WIDGET_ENABLED]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED),
        [P.zUn.WIDGET_CHANNEL_ID]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
        [P.zUn.VERIFICATION_LEVEL]: ef({
            [P.sFg.NONE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
            [P.sFg.LOW]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
            [P.sFg.MEDIUM]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
            [P.sFg.HIGH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
            [P.sFg.VERY_HIGH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
        }),
        [P.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: ef({
            [P.bL.ALL_MESSAGES]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
            [P.bL.ONLY_MENTIONS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
        }),
        [P.zUn.VANITY_URL_CODE]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
        [P.zUn.EXPLICIT_CONTENT_FILTER]: ef({
            [P.lxg.DISABLED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
            [P.lxg.MEMBERS_WITHOUT_ROLES]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
            [P.lxg.ALL_MEMBERS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
        }),
        [P.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED),
        [P.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        [P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
        [P.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
        [P.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
        [P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
        ...x()
    }),
    j = () => ({
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
        [P.zUn.POSITION]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
        [P.zUn.TOPIC]: eg(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
        [P.zUn.BITRATE]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
        [P.zUn.RTC_REGION_OVERRIDE]: eg(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
        [P.zUn.USER_LIMIT]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
        [P.zUn.RATE_LIMIT_PER_USER]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [P.zUn.PERMISSIONS_RESET]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
        [P.zUn.PERMISSIONS_GRANTED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
        [P.zUn.PERMISSIONS_DENIED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
        [P.zUn.REASON]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
        [P.zUn.NSFW]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED),
        [P.zUn.TYPE]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
        [P.zUn.VIDEO_QUALITY_MODE]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
        [P.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
        [P.zUn.FLAGS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
        [P.zUn.AVAILABLE_TAG_ADD]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
        [P.zUn.AVAILABLE_TAG_EDIT]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
        [P.zUn.AVAILABLE_TAG_DELETE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE,
        [P.zUn.LINKED_LOBBY]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_LOBBY_LINK_DELETE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_LOBBY_LINK_CREATE)
    }),
    y = () => ({
        [P.zUn.NICK]: eg(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
        [P.zUn.DEAF]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF),
        [P.zUn.MUTE]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF),
        [P.zUn.ROLES_REMOVE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
        [P.zUn.ROLES_ADD]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
        [P.zUn.PRUNE_DELETE_DAYS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
        [P.zUn.COMMUNICATION_DISABLED_UNTIL]: eg(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
        [P.zUn.BYPASSES_VERIFICATION]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF),
        [P.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
        ...x()
    }),
    k = () => ({
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
        [P.zUn.DESCRIPTION]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        [P.zUn.PERMISSIONS_GRANTED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
        [P.zUn.PERMISSIONS_DENIED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
        [P.zUn.COLOR]: ep({ '#000000': H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE }, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS),
        [P.zUn.HOIST]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF),
        [P.zUn.MENTIONABLE]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF),
        [P.zUn.ICON_HASH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
        [P.zUn.UNICODE_EMOJI]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
        ...x()
    }),
    z = () => ({
        ...x(),
        [P.zUn.TITLE]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE;
        },
        [P.zUn.DESCRIPTION]: (e) => {
            let { oldValue: _, newValue: E } = e;
            return null != _
                ? (0 === _.length && (_ = H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE),
                  H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
                      oldValue: _,
                      newValue: E
                  }))
                : H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({ newValue: E });
        },
        [P.zUn.OPTIONS]: () => H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
        [P.zUn.SINGLE_SELECT]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT),
        [P.zUn.REQUIRED]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL)
    }),
    K = () => ({
        ...x(),
        [P.zUn.DEFAULT_CHANNEL_IDS]: (e) => {
            let { newValue: _ } = e;
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({ count: _.length });
        },
        [P.zUn.ENABLE_DEFAULT_CHANNELS]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS),
        [P.zUn.ENABLE_ONBOARDING_PROMPTS]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS),
        [P.zUn.ENABLED]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE)
    }),
    w = () => ({
        ...x(),
        [P.zUn.WELCOME_MESSAGE]: () => H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
        [P.zUn.NEW_MEMBER_ACTIONS]: () => H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
        [P.zUn.RESOURCE_CHANNELS]: () => H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
    }),
    W = () => ({
        [P.zUn.CODE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
        [P.zUn.CHANNEL_ID]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
        [P.zUn.MAX_USES]: ep({ 0: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE }, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE),
        [P.zUn.MAX_AGE]: ep({ [H.Z.Messages.MAX_AGE_NEVER]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE }, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE),
        [P.zUn.TEMPORARY]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF),
        [P.zUn.FLAGS]: (e) => {
            let { newValue: _ } = e;
            return (function (e) {
                let { newValue: _ } = e;
                return _.map((e) =>
                    (function (e) {
                        if (e === T.$.IS_GUEST_INVITE) return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
                        return null;
                    })(e)
                ).filter(f.lm);
            })({ newValue: _ });
        },
        ...x()
    }),
    Y = () => ({
        [P.zUn.CHANNEL_ID]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
        [P.zUn.AVATAR_HASH]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
        [P.zUn.REASON]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
    }),
    q = () => ({
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
        ...x()
    }),
    X = () => ({
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
        [P.zUn.TAGS]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
        [P.zUn.DESCRIPTION]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
        ...x()
    }),
    J = () => ({
        [P.zUn.ENABLE_EMOTICONS]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF),
        [P.zUn.EXPIRE_BEHAVIOR]: ef({
            0: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
            1: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
        }),
        [P.zUn.EXPIRE_GRACE_PERIOD]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
        ...x()
    }),
    Q = () => ({
        [P.zUn.TOPIC]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
        [P.zUn.PRIVACY_LEVEL]: ef({
            [b.j8.GUILD_ONLY]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [b.j8.PUBLIC]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        }),
        ...x()
    }),
    $ = () => ({
        [P.zUn.NAME]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
        [P.zUn.DESCRIPTION]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
        [P.zUn.PRIVACY_LEVEL]: ef({
            [b.j8.GUILD_ONLY]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
            [b.j8.PUBLIC]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
        }),
        [P.zUn.STATUS]: ef({
            [b.p1.SCHEDULED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
            [b.p1.ACTIVE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
            [b.p1.COMPLETED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
            [b.p1.CANCELED]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
        }),
        [P.zUn.ENTITY_TYPE]: ef({
            [b.WX.NONE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
            [b.WX.STAGE_INSTANCE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
            [b.WX.VOICE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
            [b.WX.EXTERNAL]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
        }),
        [P.zUn.CHANNEL_ID]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
        [P.zUn.LOCATION]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
        [P.zUn.IMAGE_HASH]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
        ...x()
    }),
    ee = () => ({
        [P.zUn.SCHEDULED_START_TIME]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
        [P.zUn.SCHEDULED_END_TIME]: eR(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
        [P.zUn.IS_CANCELED]: (e) => {
            if (null != e.oldValue || !0 === e.newValue) {
                if (!e.oldValue && e.newValue) return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
                if (e.oldValue && !e.newValue) return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED;
            }
            return '';
        },
        ...x()
    }),
    e_ = () => ({
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
        [P.zUn.ARCHIVED]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED),
        [P.zUn.LOCKED]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED),
        [P.zUn.INVITABLE]: eC(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED),
        [P.zUn.AUTO_ARCHIVE_DURATION]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
        [P.zUn.RATE_LIMIT_PER_USER]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
        [P.zUn.FLAGS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
        ...x()
    }),
    eE = (e) => {
        let _ = { ...x() };
        return (
            null == e ||
                e.forEach((e) => {
                    e.newValue ? (e.newValue.permission ? (_[e.key] = H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED) : (_[e.key] = H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED)) : (_[e.key] = H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED);
                }),
            _
        );
    },
    es = () => ({
        [P.zUn.NAME]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
        [P.zUn.AUTO_MODERATION_TRIGGER_TYPE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
        [P.zUn.AUTO_MODERATION_EVENT_TYPE]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
        [P.zUn.AUTO_MODERATION_ACTIONS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
        [P.zUn.AUTO_MODERATION_ENABLED]: (e) => {
            var _;
            return !0 === (null !== (_ = e.newValue) && void 0 !== _ ? _ : e.oldValue) ? H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE;
        },
        [P.zUn.AUTO_MODERATION_EXEMPT_ROLES]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
        [P.zUn.AUTO_MODERATION_EXEMPT_CHANNELS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
        [P.zUn.AUTO_MODERATION_TRIGGER_METADATA]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
        [P.zUn.AUTO_MODERATION_ADD_KEYWORDS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
        [P.zUn.AUTO_MODERATION_REMOVE_KEYWORDS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
        [P.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
        [P.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
        [P.zUn.AUTO_MODERATION_ADD_ALLOW_LIST]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
        [P.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
        ...x()
    }),
    en = () => ({
        [P.zUn.NAME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
        [P.zUn.VOLUME]: eM(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
        [P.zUn.EMOJI_NAME]: eg(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
        [P.zUn.EMOJI_ID]: eg(H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
        ...x()
    }),
    et = () => ({
        [P.zUn.STATUS]: H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
        ...x()
    }),
    er = {
        [P.KFR.CHANNEL]: {
            [P.zUn.ID]: !0,
            [P.zUn.PERMISSION_OVERWRITES]: !0
        },
        [P.KFR.CHANNEL_OVERWRITE]: {
            [P.zUn.TYPE]: !0,
            [P.zUn.ID]: !0,
            [P.zUn.PERMISSION_OVERWRITES]: !0
        },
        [P.KFR.INVITE]: {
            [P.zUn.INVITER_ID]: !0,
            [P.zUn.USES]: !0
        },
        [P.KFR.WEBHOOK]: {
            [P.zUn.TYPE]: !0,
            [P.zUn.APPLICATION_ID]: !0
        },
        [P.KFR.INTEGRATION]: { [P.zUn.TYPE]: !0 },
        [P.KFR.THREAD]: {
            [P.zUn.ID]: !0,
            [P.zUn.TYPE]: !0
        },
        [P.KFR.STICKER]: {
            [P.zUn.ID]: !0,
            [P.zUn.TYPE]: !0,
            [P.zUn.ASSET]: !0,
            [P.zUn.FORMAT_TYPE]: !0,
            [P.zUn.AVAILABLE]: !0,
            [P.zUn.GUILD_ID]: !0
        },
        [P.KFR.GUILD_HOME]: { [P.zUn.ENTITY_TYPE]: !0 },
        [P.KFR.GUILD_ONBOARDING]: { [P.zUn.PROMPTS]: !0 },
        [P.KFR.GUILD_SOUNDBOARD]: {
            [P.zUn.ID]: !0,
            [P.zUn.SOUND_ID]: !0
        }
    },
    ea = () => [
        {
            value: P.rsA.ALL,
            label: H.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
            valueLabel: H.Z.Messages.GUILD_SETTINGS_FILTER_ALL
        },
        {
            value: P.rsA.GUILD_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
        },
        {
            value: P.rsA.CHANNEL_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
        },
        {
            value: P.rsA.CHANNEL_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
        },
        {
            value: P.rsA.CHANNEL_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
        },
        {
            value: P.rsA.CHANNEL_OVERWRITE_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
        },
        {
            value: P.rsA.CHANNEL_OVERWRITE_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
        },
        {
            value: P.rsA.CHANNEL_OVERWRITE_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
        },
        {
            value: P.rsA.MEMBER_KICK,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
        },
        {
            value: P.rsA.MEMBER_PRUNE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
        },
        {
            value: P.rsA.MEMBER_BAN_ADD,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
        },
        {
            value: P.rsA.MEMBER_BAN_REMOVE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
        },
        {
            value: P.rsA.MEMBER_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
        },
        {
            value: P.rsA.MEMBER_ROLE_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
        },
        {
            value: P.rsA.MEMBER_MOVE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
        },
        {
            value: P.rsA.MEMBER_DISCONNECT,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
        },
        {
            value: P.rsA.BOT_ADD,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
        },
        {
            value: P.rsA.THREAD_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
        },
        {
            value: P.rsA.THREAD_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
        },
        {
            value: P.rsA.THREAD_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
        },
        {
            value: P.rsA.ROLE_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
        },
        {
            value: P.rsA.ROLE_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
        },
        {
            value: P.rsA.ROLE_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
        },
        {
            value: P.rsA.ONBOARDING_PROMPT_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
        },
        {
            value: P.rsA.ONBOARDING_PROMPT_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
        },
        {
            value: P.rsA.ONBOARDING_PROMPT_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
        },
        {
            value: P.rsA.ONBOARDING_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
        },
        {
            value: P.rsA.ONBOARDING_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
        },
        {
            value: P.rsA.HOME_SETTINGS_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
        },
        {
            value: P.rsA.HOME_SETTINGS_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
        },
        {
            value: P.rsA.INVITE_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
        },
        {
            value: P.rsA.INVITE_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
        },
        {
            value: P.rsA.INVITE_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
        },
        {
            value: P.rsA.WEBHOOK_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
        },
        {
            value: P.rsA.WEBHOOK_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
        },
        {
            value: P.rsA.WEBHOOK_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
        },
        {
            value: P.rsA.EMOJI_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
        },
        {
            value: P.rsA.EMOJI_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
        },
        {
            value: P.rsA.EMOJI_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
        },
        {
            value: P.rsA.MESSAGE_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
        },
        {
            value: P.rsA.MESSAGE_BULK_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
        },
        {
            value: P.rsA.MESSAGE_PIN,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
        },
        {
            value: P.rsA.MESSAGE_UNPIN,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
        },
        {
            value: P.rsA.INTEGRATION_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
        },
        {
            value: P.rsA.INTEGRATION_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
        },
        {
            value: P.rsA.INTEGRATION_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
        },
        {
            value: P.rsA.STICKER_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
        },
        {
            value: P.rsA.STICKER_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
        },
        {
            value: P.rsA.STICKER_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
        },
        {
            value: P.rsA.STAGE_INSTANCE_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
        },
        {
            value: P.rsA.STAGE_INSTANCE_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
        },
        {
            value: P.rsA.STAGE_INSTANCE_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
        },
        {
            value: P.rsA.GUILD_SCHEDULED_EVENT_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
        },
        {
            value: P.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
        },
        {
            value: P.rsA.GUILD_SCHEDULED_EVENT_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
        },
        {
            value: P.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
        },
        {
            value: P.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
        },
        {
            value: P.rsA.AUTO_MODERATION_RULE_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
        },
        {
            value: P.rsA.AUTO_MODERATION_RULE_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
        },
        {
            value: P.rsA.AUTO_MODERATION_RULE_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
        },
        {
            value: P.rsA.GUILD_HOME_FEATURE_ITEM,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
        },
        {
            value: P.rsA.GUILD_HOME_REMOVE_ITEM,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
        },
        {
            value: P.rsA.SOUNDBOARD_SOUND_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
        },
        {
            value: P.rsA.SOUNDBOARD_SOUND_UPDATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
        },
        {
            value: P.rsA.SOUNDBOARD_SOUND_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
        },
        {
            value: P.rsA.VOICE_CHANNEL_STATUS_CREATE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
        },
        {
            value: P.rsA.VOICE_CHANNEL_STATUS_DELETE,
            label: H.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
        }
    ];
function eT(e, _) {
    return null != _.changes ? _.changes.find((_) => _.key === e) : null;
}
function eI(e, _) {
    return null != _.changes ? _.changes.filter((_) => _.key === e) : [];
}
function el(e) {
    var _;
    let E = ea().find((_) => _.value === e.action);
    return null != eT(P.zUn.COMMUNICATION_DISABLED_UNTIL, e) ? H.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED : null !== (_ = null == E ? void 0 : E.label) && void 0 !== _ ? _ : null;
}
let eo = {
    [o.J6.SECONDS]: (e) => H.Z.Messages.DURATION_SECONDS.format({ seconds: e }),
    [o.J6.MINUTES]: (e) => H.Z.Messages.DURATION_MINUTES.format({ minutes: e }),
    [o.J6.HOURS]: (e) => H.Z.Messages.DURATION_HOURS.format({ hours: e }),
    [o.J6.DAYS]: (e) => H.Z.Messages.DURATION_DAYS.format({ days: e })
};
function eA(e) {
    let _ = eT(P.zUn.COMMUNICATION_DISABLED_UNTIL, e),
        E = eI(P.zUn.ROLES_ADD, e).length > 0,
        s = eI(P.zUn.ROLES_REMOVE, e).length > 0;
    if (null != _) {
        if ((null == _ ? void 0 : _.newValue) != null) {
            let E = new Date(null == _ ? void 0 : _.newValue).getTime(),
                s = E - h.default.extractTimestamp(e.id),
                n = Math.round(s / 1000 / 60),
                t = (0, o.CI)(n, B);
            if (null == t.unit || null == t.time) return null;
            if (t.unit in eo) {
                let e = t.unit,
                    _ = t.unit === o.J6.SECONDS ? Math.round(s / 1000) : t.time;
                return eo[e](_);
            }
        } else if ((null == _ ? void 0 : _.oldValue) != null) return H.Z.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
    } else if (E && s) return H.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    else if (E) return H.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    else if (s) return H.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    return null;
}
function ei(e) {
    let _ = eI(P.zUn.ROLES_ADD, e),
        E = eI(P.zUn.ROLES_REMOVE, e),
        s =
            null == _
                ? void 0
                : _.map((e) => {
                      let { newValue: _ } = e;
                      return null == _
                          ? void 0
                          : _.map((e) => {
                                let { name: _ } = e;
                                return _;
                            }).join(', ');
                  }).join(', '),
        n =
            null == E
                ? void 0
                : E.map((e) => {
                      let { newValue: _ } = e;
                      return null == _
                          ? void 0
                          : _.map((e) => {
                                let { name: _ } = e;
                                return _;
                            }).join(', ');
                  }).join(', ');
    if (_.length > 0 && E.length > 0)
        return H.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
            roleNamesAdded: s,
            roleNamesRemoved: n
        });
    if (_.length > 0) return H.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({ roleNames: s });
    if (E.length > 0) return H.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({ roleNames: n });
    return null;
}
function eN(e) {
    switch (e.action) {
        case P.rsA.GUILD_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
        case P.rsA.CHANNEL_CREATE:
            let _ = null != e.changes ? e.changes.find((e) => e.key === P.zUn.TYPE) : null;
            if (null == _) throw Error('[AuditLog] Could not find type change for channel create');
            switch (_.newValue) {
                case P.d4z.GUILD_STAGE_VOICE:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
                case P.d4z.GUILD_VOICE:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
                case P.d4z.GUILD_CATEGORY:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
                default:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE;
            }
        case P.rsA.CHANNEL_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
        case P.rsA.CHANNEL_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
        case P.rsA.CHANNEL_OVERWRITE_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
        case P.rsA.CHANNEL_OVERWRITE_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
        case P.rsA.CHANNEL_OVERWRITE_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
        case P.rsA.MEMBER_KICK:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
        case P.rsA.MEMBER_PRUNE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
        case P.rsA.MEMBER_BAN_ADD:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
        case P.rsA.MEMBER_BAN_REMOVE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
        case P.rsA.MEMBER_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
        case P.rsA.MEMBER_ROLE_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
        case P.rsA.MEMBER_MOVE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
        case P.rsA.MEMBER_DISCONNECT:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
        case P.rsA.BOT_ADD:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
        case P.rsA.ROLE_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
        case P.rsA.ROLE_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
        case P.rsA.ROLE_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
        case P.rsA.INVITE_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
        case P.rsA.INVITE_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
        case P.rsA.INVITE_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
        case P.rsA.WEBHOOK_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
        case P.rsA.WEBHOOK_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
        case P.rsA.WEBHOOK_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
        case P.rsA.EMOJI_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
        case P.rsA.EMOJI_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
        case P.rsA.EMOJI_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
        case P.rsA.STICKER_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
        case P.rsA.STICKER_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
        case P.rsA.STICKER_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
        case P.rsA.MESSAGE_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
        case P.rsA.MESSAGE_BULK_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
        case P.rsA.MESSAGE_PIN:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
        case P.rsA.MESSAGE_UNPIN:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
        case P.rsA.INTEGRATION_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
        case P.rsA.INTEGRATION_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
        case P.rsA.INTEGRATION_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
        case P.rsA.STAGE_INSTANCE_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
        case P.rsA.STAGE_INSTANCE_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
        case P.rsA.STAGE_INSTANCE_DELETE:
            if (null != e.userId) return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
        case P.rsA.GUILD_SCHEDULED_EVENT_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
        case P.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
        case P.rsA.GUILD_SCHEDULED_EVENT_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
        case P.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
        case P.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
        case P.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
        case P.rsA.THREAD_CREATE:
            let E = null != e.changes ? e.changes.find((e) => e.key === P.zUn.TYPE) : null;
            if (null == E) throw Error('[AuditLog] Could not find type change for thread create');
            switch (E.newValue) {
                case P.d4z.PRIVATE_THREAD:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
                case P.d4z.ANNOUNCEMENT_THREAD:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
                default:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE;
            }
        case P.rsA.THREAD_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
        case P.rsA.THREAD_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
        case P.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
        case P.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
        case P.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
            var s;
            if ((null === (s = e.options) || void 0 === s ? void 0 : s.auto_moderation_rule_trigger_type) === v.fX.USER_PROFILE.toString()) return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
        case P.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
        case P.rsA.AUTO_MODERATION_QUARANTINE_USER:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
        case P.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
            return H.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
        case P.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
            return H.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
        case P.rsA.AUTO_MODERATION_RULE_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
        case P.rsA.AUTO_MODERATION_RULE_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
        case P.rsA.AUTO_MODERATION_RULE_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
        case P.rsA.ONBOARDING_PROMPT_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
        case P.rsA.ONBOARDING_PROMPT_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
        case P.rsA.ONBOARDING_PROMPT_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
        case P.rsA.ONBOARDING_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
        case P.rsA.ONBOARDING_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
        case P.rsA.HOME_SETTINGS_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
        case P.rsA.HOME_SETTINGS_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
        case P.rsA.GUILD_HOME_FEATURE_ITEM:
            let n = null != e.changes ? e.changes.find((e) => e.key === P.zUn.ENTITY_TYPE) : null;
            if (null == n) return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            switch (n.newValue) {
                case a.w.MESSAGE:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
                case a.w.FORUM_POST:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
                default:
                    return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
            }
        case P.rsA.GUILD_HOME_REMOVE_ITEM:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
        case P.rsA.SOUNDBOARD_SOUND_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
        case P.rsA.SOUNDBOARD_SOUND_UPDATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
        case P.rsA.SOUNDBOARD_SOUND_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
        case P.rsA.VOICE_CHANNEL_STATUS_CREATE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
        case P.rsA.VOICE_CHANNEL_STATUS_DELETE:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
        default:
            return null;
    }
}
function eD(e) {
    switch (e) {
        case Z.zZ.GUILD_FEED_REMOVED:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
        case Z.zZ.ACTIVE_CHANNELS_REMOVED:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
        case Z.zZ.PINNED:
            return H.Z.Messages.PINNED_POST;
    }
    return null;
}
function eL(e) {
    switch (e) {
        case Z.zZ.GUILD_FEED_REMOVED:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
        case Z.zZ.ACTIVE_CHANNELS_REMOVED:
            return H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
        case Z.zZ.PINNED:
            return H.Z.Messages.UNPINNED_POST;
    }
    return null;
}
function eS(e, _) {
    switch (e) {
        case P.Plq.CREATE_INSTANT_INVITE:
            return H.Z.Messages.CREATE_INSTANT_INVITE;
        case P.Plq.KICK_MEMBERS:
            return H.Z.Messages.KICK_MEMBERS;
        case P.Plq.BAN_MEMBERS:
            return H.Z.Messages.BAN_MEMBERS;
        case P.Plq.ADMINISTRATOR:
            return H.Z.Messages.ADMINISTRATOR;
        case P.Plq.MANAGE_CHANNELS:
            if (_.targetType === P.KFR.CHANNEL || _.targetType === P.KFR.CHANNEL_OVERWRITE) return H.Z.Messages.MANAGE_CHANNEL;
            return H.Z.Messages.MANAGE_CHANNELS;
        case P.Plq.MANAGE_GUILD:
            return H.Z.Messages.MANAGE_SERVER;
        case P.Plq.VIEW_GUILD_ANALYTICS:
            return H.Z.Messages.VIEW_GUILD_ANALYTICS;
        case P.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
            return H.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
        case P.Plq.CHANGE_NICKNAME:
            return H.Z.Messages.CHANGE_NICKNAME;
        case P.Plq.MANAGE_NICKNAMES:
            return H.Z.Messages.MANAGE_NICKNAMES;
        case P.Plq.MANAGE_ROLES:
            return H.Z.Messages.MANAGE_ROLES;
        case P.Plq.MANAGE_WEBHOOKS:
            return H.Z.Messages.MANAGE_WEBHOOKS;
        case P.Plq.CREATE_GUILD_EXPRESSIONS:
            return H.Z.Messages.CREATE_EXPRESSIONS;
        case P.Plq.MANAGE_GUILD_EXPRESSIONS:
            return H.Z.Messages.MANAGE_EXPRESSIONS;
        case P.Plq.VIEW_AUDIT_LOG:
            return H.Z.Messages.VIEW_AUDIT_LOG;
        case P.Plq.VIEW_CHANNEL:
            if (_.targetType === P.KFR.CHANNEL || _.targetType === P.KFR.CHANNEL_OVERWRITE) return H.Z.Messages.VIEW_CHANNEL;
            return H.Z.Messages.ROLE_PERMISSIONS_VIEW_CHANNEL;
        case P.Plq.SEND_MESSAGES:
            return H.Z.Messages.SEND_MESSAGES;
        case P.Plq.SEND_TTS_MESSAGES:
            return H.Z.Messages.SEND_TTS_MESSAGES;
        case P.Plq.USE_APPLICATION_COMMANDS:
            return H.Z.Messages.USE_APPLICATION_COMMANDS;
        case P.Plq.MANAGE_MESSAGES:
            return H.Z.Messages.MANAGE_MESSAGES;
        case P.Plq.EMBED_LINKS:
            return H.Z.Messages.EMBED_LINKS;
        case P.Plq.ATTACH_FILES:
            return H.Z.Messages.ATTACH_FILES;
        case P.Plq.READ_MESSAGE_HISTORY:
            return H.Z.Messages.READ_MESSAGE_HISTORY;
        case P.Plq.MENTION_EVERYONE:
            return H.Z.Messages.MENTION_EVERYONE;
        case P.Plq.USE_EXTERNAL_EMOJIS:
            return H.Z.Messages.USE_EXTERNAL_EMOJIS;
        case P.Plq.USE_EXTERNAL_STICKERS:
            return H.Z.Messages.USE_EXTERNAL_STICKERS;
        case P.Plq.ADD_REACTIONS:
            return H.Z.Messages.ADD_REACTIONS;
        case P.Plq.CONNECT:
            return H.Z.Messages.CONNECT;
        case P.Plq.SPEAK:
            return H.Z.Messages.SPEAK;
        case P.Plq.MUTE_MEMBERS:
            return H.Z.Messages.MUTE_MEMBERS;
        case P.Plq.DEAFEN_MEMBERS:
            return H.Z.Messages.DEAFEN_MEMBERS;
        case P.Plq.MOVE_MEMBERS:
            return H.Z.Messages.MOVE_MEMBERS;
        case P.Plq.USE_VAD:
            return H.Z.Messages.USE_VAD;
        case P.Plq.PRIORITY_SPEAKER:
            return H.Z.Messages.PRIORITY_SPEAKER;
        case P.Plq.STREAM:
            return H.Z.Messages.VIDEO;
        case P.Plq.REQUEST_TO_SPEAK:
            return H.Z.Messages.REQUEST_TO_SPEAK;
        case P.Plq.CREATE_EVENTS:
            return H.Z.Messages.CREATE_EVENTS;
        case P.Plq.MANAGE_EVENTS:
            return H.Z.Messages.MANAGE_EVENTS;
        case P.Plq.CREATE_PUBLIC_THREADS:
            return H.Z.Messages.CREATE_PUBLIC_THREADS;
        case P.Plq.CREATE_PRIVATE_THREADS:
            return H.Z.Messages.CREATE_PRIVATE_THREADS;
        case P.Plq.SEND_MESSAGES_IN_THREADS:
            return H.Z.Messages.SEND_MESSAGES_IN_THREADS;
        case P.Plq.MANAGE_THREADS:
            return H.Z.Messages.MANAGE_THREADS;
        case P.Plq.MODERATE_MEMBERS:
            return H.Z.Messages.MODERATE_MEMBER;
        case P.Plq.USE_CLYDE_AI:
            return H.Z.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
        case P.Plq.SET_VOICE_CHANNEL_STATUS:
            return H.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
        case P.Plq.SEND_POLLS:
            return H.Z.Messages.ROLE_PERMISSIONS_SEND_POLLS;
        case P.Plq.USE_EXTERNAL_APPS:
            return H.Z.Messages.ROLE_PERMISSIONS_USE_EXTERNAL_APPS;
    }
    return null;
}
function eu(e, _) {
    let E = [];
    return (
        e.forEach((e) => {
            let s = (function (e, _) {
                    switch (e.targetType) {
                        case P.KFR.GUILD:
                        case P.KFR.GUILD_HOME:
                            return _;
                        case P.KFR.CHANNEL:
                        case P.KFR.CHANNEL_OVERWRITE:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => d.Z.getChannel(e),
                                (e) => (0, i.F6)(e, R.default, M.Z, !0)
                            );
                        case P.KFR.USER:
                            return ed(
                                e,
                                P.zUn.NICK,
                                (e) => R.default.getUser(e),
                                (e) => e
                            );
                        case P.KFR.ROLE:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => G.Z.getRole(_.id, e),
                                (e) => e.name
                            );
                        case P.KFR.ONBOARDING_PROMPT:
                            let E = ed(
                                e,
                                P.zUn.ID,
                                (e) => S.Z.getOnboardingPrompt(e),
                                (e) => e.title
                            );
                            return null != E ? E : H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
                        case P.KFR.GUILD_ONBOARDING:
                            return _;
                        case P.KFR.INVITE:
                            return ed(e, P.zUn.CODE, P.VqG);
                        case P.KFR.INTEGRATION:
                            return ed(
                                e,
                                P.zUn.TYPE,
                                (e) => m.Z.integrations.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.WEBHOOK:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.webhooks.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.EMOJI:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => D.ZP.getGuildEmoji(_.id).find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.STICKER:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => O.Z.getStickerById(e),
                                (e) => e.name
                            );
                        case P.KFR.STAGE_INSTANCE:
                            return ed(
                                e,
                                P.zUn.TOPIC,
                                (e) => {
                                    var E;
                                    return null === (E = Object.values(c.Z.getStageInstancesByGuild(_.id))) || void 0 === E ? void 0 : E.find((_) => _.id === e);
                                },
                                (e) => e.topic
                            );
                        case P.KFR.GUILD_SCHEDULED_EVENT:
                        case P.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.guildScheduledEvents.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.THREAD:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.threads.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.APPLICATION_COMMAND:
                            if (e.targetId === e.options.application_id) {
                                let _ = m.Z.integrations.find((_) => _.application_id === e.targetId);
                                if (null != _) return _.name;
                                return e.targetId;
                            }
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.applicationCommands.find((_) => _.id === e),
                                (e) => {
                                    let _ = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
                                    return e.type === A.yU.CHAT ? '/\u2060'.concat(_) : _;
                                }
                            );
                        case P.KFR.AUTO_MODERATION_RULE:
                            return ed(
                                e,
                                P.zUn.NAME,
                                (e) => m.Z.automodRules.find((_) => _.id === e),
                                (e) => e.name
                            );
                        case P.KFR.GUILD_SOUNDBOARD:
                            return ed(e, P.zUn.NAME, P.VqG);
                        case P.KFR.HOME_SETTINGS:
                            return ed(
                                e,
                                P.zUn.GUILD_ID,
                                (e) => u.Z.getSettings(e),
                                () => H.Z.Messages.SERVER_GUIDE,
                                _.id
                            );
                        case P.KFR.VOICE_CHANNEL_STATUS:
                            return ed(
                                e,
                                P.zUn.STATUS,
                                (e) => d.Z.getChannel(e),
                                (e) => (0, i.F6)(e, R.default, M.Z, !0)
                            );
                        default:
                            return F.warn('Unknown targetType for log', e), null;
                    }
                })(e, _),
                t = R.default.getUser(e.userId);
            if (null != s || !![P.rsA.MEMBER_PRUNE, P.rsA.MEMBER_DISCONNECT, P.rsA.MEMBER_MOVE, P.rsA.CREATOR_MONETIZATION_REQUEST_CREATED, P.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
                if (
                    null !=
                    (e = (e = (e = e.set('user', t)).set('target', s)).set(
                        'options',
                        (function (e) {
                            if (null != e.options) {
                                let E = { ...e.options };
                                switch (e.options.type) {
                                    case P.jwA.USER:
                                        E.subtarget = eG(
                                            e.options.id,
                                            (e) => R.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case P.jwA.ROLE:
                                        E.subtarget = eG(e.options.role_name, P.VqG);
                                }
                                if (
                                    (null != e.options.channel_id &&
                                        (E.channel = ed(
                                            e,
                                            '',
                                            (e) => d.Z.getChannel(e),
                                            (e) => e,
                                            e.options.channel_id
                                        )),
                                    null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed),
                                    null != e.options.event_exception_id)
                                ) {
                                    var _;
                                    let s = m.Z.guildScheduledEvents.find((_) => _.id === e.targetId),
                                        n = null == s ? void 0 : s.guild_scheduled_event_exceptions.find((_) => _.event_exception_id === e.options.event_exception_id);
                                    E.subtarget = (0, g.vc)(r()(h.default.extractTimestamp(null !== (_ = null == n ? void 0 : n.event_exception_id) && void 0 !== _ ? _ : '0')), 'LL');
                                }
                                return E;
                            }
                            return e.options;
                        })(e)
                    )).changes
                ) {
                    let E = [];
                    e.changes.forEach((s) => {
                        let t = (function (e, _, E) {
                            if (_.action === P.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
                                let _ = e.newValue || e.oldValue;
                                switch (_.type) {
                                    case P.ecB.ROLE:
                                        e.subtarget = eG(
                                            _.id,
                                            (e) => G.Z.getRole(E.id, e),
                                            (e) => e.name
                                        );
                                        break;
                                    case P.ecB.USER:
                                        e.subtarget = eG(
                                            _.id,
                                            (e) => R.default.getUser(e),
                                            (e) => e.tag
                                        );
                                        break;
                                    case P.ecB.CHANNEL:
                                        _.id === n()(E.id).subtract(1).toString()
                                            ? (e.subtarget = H.Z.Messages.ALL_CHANNELS)
                                            : (e.subtarget = eG(
                                                  _.id,
                                                  (e) => d.Z.getChannel(e),
                                                  (e) => (0, i.F6)(e, R.default, M.Z, !0)
                                              ));
                                }
                                return e;
                            }
                            switch (e.key) {
                                case P.zUn.OWNER_ID:
                                    return eU(e, (e) => R.default.getUser(e));
                                case P.zUn.CHANNEL_ID:
                                case P.zUn.AFK_CHANNEL_ID:
                                case P.zUn.SYSTEM_CHANNEL_ID:
                                case P.zUn.RULES_CHANNEL_ID:
                                case P.zUn.PUBLIC_UPDATES_CHANNEL_ID:
                                    return eU(
                                        e,
                                        (e) => d.Z.getChannel(e),
                                        (e) => (0, i.F6)(e, R.default, M.Z, !0)
                                    );
                                case P.zUn.AFK_TIMEOUT:
                                    return eU(e, (e) => e / 60);
                                case P.zUn.BITRATE:
                                    return eU(e, (e) => e / 1000);
                                case P.zUn.COLOR:
                                    return eU(e, (e) => (0, l.Rf)(e).toUpperCase());
                                case P.zUn.THEME_COLORS:
                                    return eU(e, (e) => ''.concat((0, l.Rf)(e[0]).toUpperCase(), ', ').concat((0, l.Rf)(e[1]).toUpperCase()));
                                case P.zUn.MAX_AGE:
                                    return eU(e, (e) => {
                                        let _ = p.ZP.getMaxAgeOptions.find((_) => {
                                            let { value: E } = _;
                                            return e === E;
                                        });
                                        return _ ? _.label : e;
                                    });
                                case P.zUn.PERMISSIONS: {
                                    let _ = [],
                                        { added: E, removed: s } = ec(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let e = new U.ms(P.zUn.PERMISSIONS_GRANTED, null, E);
                                        _.push(e);
                                    }
                                    if (s.length > 0) {
                                        let e = new U.ms(P.zUn.PERMISSIONS_DENIED, null, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case P.zUn.PERMISSIONS_GRANTED:
                                case P.zUn.PERMISSIONS_DENIED: {
                                    let _ = [],
                                        { added: E, removed: s } = ec(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new U.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let e = new U.ms(P.zUn.PERMISSIONS_RESET, s, s);
                                        _.push(e);
                                    }
                                    return _;
                                }
                                case P.zUn.FLAGS: {
                                    let _ = [],
                                        { added: E, removed: s } = (function (e, _) {
                                            let E = 'number' == typeof e ? e : 0,
                                                s = 'number' == typeof _ ? _ : 0,
                                                n = C.Ge(s, E),
                                                t = C.Ge(E, s),
                                                r = [],
                                                a = [];
                                            for (let e in Z.zZ) {
                                                let _ = Z.zZ[e];
                                                C.yE(n, _) && r.push(_), C.yE(t, _) && a.push(_);
                                            }
                                            return {
                                                added: r,
                                                removed: a
                                            };
                                        })(e.oldValue, e.newValue);
                                    if (E.length > 0) {
                                        let s = new U.ms(e.key, null, E);
                                        _.push(s);
                                    }
                                    if (s.length > 0) {
                                        let E = new U.ms(e.key, s, null);
                                        _.push(E);
                                    }
                                    return _;
                                }
                                case P.zUn.PREFERRED_LOCALE:
                                    return eU(e, (e) => {
                                        let _ = H.Z.getAvailableLocales().find((_) => _.value === e);
                                        return null != _ ? _.name : null;
                                    });
                                case P.zUn.VIDEO_QUALITY_MODE:
                                    return eU(e, (e) => (e === P.Ucd.FULL ? H.Z.Messages.VIDEO_QUALITY_MODE_FULL : H.Z.Messages.VIDEO_QUALITY_MODE_AUTO));
                                case P.zUn.SYSTEM_CHANNEL_FLAGS:
                                    return (function (e) {
                                        let _ = {
                                                [P.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                                                [P.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: P.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                                                [P.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: P.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                                                [P.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: P.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                                            },
                                            E = [];
                                        return (
                                            Object.values(P.xmn).forEach((s) => {
                                                let n = (e.oldValue & s) === s,
                                                    t = (e.newValue & s) === s;
                                                if (n === t) return;
                                                let r = new U.ms(_[s], !n, !t);
                                                E.push(r);
                                            }),
                                            E
                                        );
                                    })(e);
                                case P.zUn.AUTO_MODERATION_ACTIONS:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return eU(
                                            e,
                                            (e) => e.map((e) => e.type),
                                            (e) => e.map(L.ZF).join(', ')
                                        );
                                    break;
                                case P.zUn.AUTO_MODERATION_EVENT_TYPE:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE) return eU(e, L.YN);
                                    break;
                                case P.zUn.AUTO_MODERATION_TRIGGER_TYPE:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE) return eU(e, L.Ar);
                                    break;
                                case P.zUn.AUTO_MODERATION_TRIGGER_METADATA:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return eU(e, (e) => {
                                            if (null != e && 'object' == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({ newValue: e.keyword_filter.map((e) => "'".concat(e, "'")).join(', ') }) : JSON.stringify(e);
                                            return e;
                                        });
                                    break;
                                case P.zUn.AUTO_MODERATION_ADD_KEYWORDS:
                                case P.zUn.AUTO_MODERATION_REMOVE_KEYWORDS:
                                case P.zUn.AUTO_MODERATION_ADD_REGEX_PATTERNS:
                                case P.zUn.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
                                case P.zUn.AUTO_MODERATION_ADD_ALLOW_LIST:
                                case P.zUn.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE) return eU(e, (e) => (null != e && Array.isArray(e) ? e.map((e) => "'".concat(e, "'")).join(', ') : JSON.stringify(e)));
                                    break;
                                case P.zUn.AUTO_MODERATION_EXEMPT_CHANNELS:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return eU(
                                            e,
                                            (e) =>
                                                e
                                                    .map(d.Z.getChannel)
                                                    .filter((e) => null != e)
                                                    .map((e) => (0, i.F6)(e, R.default, M.Z, !0)),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case P.zUn.AUTO_MODERATION_EXEMPT_ROLES:
                                    if (_.targetType === P.KFR.AUTO_MODERATION_RULE)
                                        return eU(
                                            e,
                                            (e) =>
                                                e
                                                    .map((e) => G.Z.getRole(E.id, e))
                                                    .filter((e) => null != e)
                                                    .map((e) => e.name),
                                            (e) => (null != e && e.length > 0 ? e.join(', ') : H.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE)
                                        );
                                    break;
                                case P.zUn.AVAILABLE_TAGS:
                                    return (function (e) {
                                        let { oldValue: _, newValue: E } = e,
                                            s = Array.isArray(_) ? _ : [],
                                            n = Array.isArray(E) ? E : [];
                                        if (0 === s.length && 0 === n.length) return e;
                                        let t = {},
                                            r = {};
                                        if (
                                            (s.forEach((e) => {
                                                t[e.id] = e;
                                            }),
                                            n.forEach((e) => {
                                                r[e.id] = e;
                                            }),
                                            s.length < n.length)
                                        ) {
                                            for (let e in r) if (null == t[e]) return new U.ms(P.zUn.AVAILABLE_TAG_ADD, null, eO(r[e]));
                                        }
                                        if (s.length > n.length) {
                                            for (let e in t) if (null == r[e]) return new U.ms(P.zUn.AVAILABLE_TAG_DELETE, null, eO(t[e]));
                                        }
                                        for (let e in t) {
                                            let _ = t[e],
                                                E = r[e];
                                            if ((null == E ? void 0 : E.name) !== _.name || (null == E ? void 0 : E.emoji_id) !== _.emoji_id || (null == E ? void 0 : E.emoji_name) !== _.emoji_name) return new U.ms(P.zUn.AVAILABLE_TAG_EDIT, eO(_), eO(E));
                                        }
                                        return e;
                                    })(e);
                                case P.zUn.SCHEDULED_START_TIME:
                                case P.zUn.SCHEDULED_END_TIME:
                                    return eU(e, (e) => (0, g.vc)(r()(new Date(e)), 'LLLL'));
                            }
                            return e;
                        })(s, e, _);
                        Array.isArray(t) ? t.forEach((e) => E.push(e)) : E.push(t);
                    }),
                        (e = e.set('changes', E));
                }
                E.push(e);
            }
        }),
        E
    );
}
function ec(e, _) {
    let E = I.vB('string' == typeof e ? e : 0),
        s = I.vB('string' == typeof _ ? _ : 0),
        n = I.Od(s, E),
        t = I.Od(E, s),
        r = [],
        a = [];
    for (let e in P.Plq) {
        let _ = P.Plq[e];
        I.e$(n, _) && r.push(_), I.e$(t, _) && a.push(_);
    }
    return {
        added: r,
        removed: a
    };
}
function eO(e) {
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
function eU(e, _, E) {
    let s = e.newValue,
        n = e.oldValue;
    return null != e.newValue && ((s = _(e.newValue)), null != E && null != s && (s = E(s))), null != e.oldValue && ((n = _(e.oldValue)), null != E && null != n && (n = E(n))), new U.ms(e.key, n || e.oldValue, s || e.newValue);
}
function ed(e, _, E, s, n) {
    let t = null,
        r = E((n = null != n ? n : e.targetId));
    if ((null != r && null != s && (t = s(r)), null == t)) {
        let _ = m.Z.deletedTargets[e.targetType];
        null != _ && null != _[n] && (t = _[n]);
    }
    if (null == t && null != e.changes) {
        let E = e.changes.find((e) => e.key === _);
        null != E && (t = E.newValue || E.oldValue);
    }
    return null != t ? t : n;
}
function eG(e, _, E) {
    let s = e,
        n = _(e);
    return null != n && null != E && (s = E(n)), s;
}
function eM(e, _) {
    return (E) => (null == E.oldValue ? e : _);
}
function eR(e, _) {
    return (E) => (null == E.newValue ? e : _);
}
function eg(e, _, E, s) {
    return (n) => {
        if (null != n.newValue && null != n.oldValue) return e;
        if (null != n.newValue) return _;
        if (null != n.oldValue) return E;
        return s;
    };
}
function eC(e, _) {
    return (E) => (E.newValue ? e : _);
}
function ef(e) {
    return (_) => e[_.newValue];
}
function ep(e, _) {
    return (E) => {
        var s;
        return null !== (s = e[E.newValue]) && void 0 !== s ? s : _;
    };
}
