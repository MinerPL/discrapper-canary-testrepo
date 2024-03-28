"use strict";
s.r(t), s.d(t, {
  ChannelChangeStrings: function() {
    return h
  },
  CommandPermissionChangeStrings: function() {
    return x
  },
  DEFAULT_FOR_STRINGS_KEY: function() {
    return M
  },
  EmojiChangeStrings: function() {
    return v
  },
  GuildChangeStrings: function() {
    return f
  },
  GuildScheduledEventChangeStrings: function() {
    return F
  },
  IntegrationChangeStrings: function() {
    return V
  },
  InviteChangeStrings: function() {
    return P
  },
  NotRenderedChanges: function() {
    return b
  },
  RoleChangeStrings: function() {
    return m
  },
  StageInstanceChangeStrings: function() {
    return B
  },
  StickerChangeStrings: function() {
    return H
  },
  ThreadChangeStrings: function() {
    return K
  },
  UserChangeStrings: function() {
    return p
  },
  WebhookChangeStrings: function() {
    return y
  },
  getChangeTitle: function() {
    return Z
  },
  getSimpleAuditLogChangeDetails: function() {
    return X
  },
  getSimpleAuditLogTitleContextFromChange: function() {
    return W
  },
  getSimpleAuditLogTitleFromChange: function() {
    return w
  },
  getStringForBanReason: function() {
    return z
  },
  getStringForPermission: function() {
    return Q
  },
  transformLogs: function() {
    return q
  }
}), s("411104"), s("653041");
var E = s("654861"),
  _ = s.n(E),
  a = s("149765"),
  n = s("866442"),
  T = s("144830"),
  i = s("911969"),
  u = s("933557"),
  A = s("710845"),
  l = s("339085"),
  I = s("776617"),
  r = s("427679"),
  o = s("926491"),
  L = s("387667"),
  d = s("592125"),
  N = s("430824"),
  S = s("699516"),
  g = s("594174"),
  D = s("971130"),
  c = s("709054"),
  G = s("981631"),
  O = s("765305"),
  U = s("689938");
let C = new A.default("AuditLogUtils"),
  M = -1,
  R = () => ({
    [G.AuditLogChangeKeys.REASON]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  f = () => ({
    [G.AuditLogChangeKeys.NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [G.AuditLogChangeKeys.DESCRIPTION]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [G.AuditLogChangeKeys.ICON_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [G.AuditLogChangeKeys.SPLASH_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [G.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [G.AuditLogChangeKeys.BANNER_HASH]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [G.AuditLogChangeKeys.OWNER_ID]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [G.AuditLogChangeKeys.REGION]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [G.AuditLogChangeKeys.PREFERRED_LOCALE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [G.AuditLogChangeKeys.AFK_CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.AFK_TIMEOUT]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.RULES_CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.MFA_LEVEL]: {
      [G.MFALevels.NONE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [G.MFALevels.ELEVATED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [G.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [G.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [G.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [G.VerificationLevels.NONE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [G.VerificationLevels.LOW]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [G.VerificationLevels.MEDIUM]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [G.VerificationLevels.HIGH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [G.VerificationLevels.VERY_HIGH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [G.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [G.UserNotificationSettings.ALL_MESSAGES]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [G.UserNotificationSettings.ONLY_MENTIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [G.AuditLogChangeKeys.VANITY_URL_CODE]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [G.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [G.GuildExplicitContentFilterTypes.DISABLED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [G.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [G.GuildExplicitContentFilterTypes.ALL_MEMBERS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [G.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [G.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...R()
  }),
  h = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [G.AuditLogChangeKeys.POSITION]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [G.AuditLogChangeKeys.TOPIC]: ea(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [G.AuditLogChangeKeys.BITRATE]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [G.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: ea(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [G.AuditLogChangeKeys.USER_LIMIT]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [G.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [G.AuditLogChangeKeys.PERMISSIONS_RESET]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [G.AuditLogChangeKeys.PERMISSIONS_GRANTED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [G.AuditLogChangeKeys.PERMISSIONS_DENIED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [G.AuditLogChangeKeys.REASON]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [G.AuditLogChangeKeys.NSFW]: {
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [G.AuditLogChangeKeys.TYPE]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [G.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [G.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  p = () => ({
    [G.AuditLogChangeKeys.NICK]: ea(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [G.AuditLogChangeKeys.DEAF]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [G.AuditLogChangeKeys.MUTE]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [G.AuditLogChangeKeys.ROLES_REMOVE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [G.AuditLogChangeKeys.ROLES_ADD]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [G.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: ea(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [G.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [G.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...R()
  }),
  m = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [G.AuditLogChangeKeys.PERMISSIONS_GRANTED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [G.AuditLogChangeKeys.PERMISSIONS_DENIED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [G.AuditLogChangeKeys.COLOR]: {
      "#000000": U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [M]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [G.AuditLogChangeKeys.HOIST]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [G.AuditLogChangeKeys.MENTIONABLE]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [G.AuditLogChangeKeys.ICON_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [G.AuditLogChangeKeys.UNICODE_EMOJI]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...R()
  }),
  P = () => ({
    [G.AuditLogChangeKeys.CODE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [G.AuditLogChangeKeys.CHANNEL_ID]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [G.AuditLogChangeKeys.MAX_USES]: {
      0: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [M]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [G.AuditLogChangeKeys.MAX_AGE]: {
      0: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [M]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [G.AuditLogChangeKeys.TEMPORARY]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...R()
  }),
  y = () => ({
    [G.AuditLogChangeKeys.CHANNEL_ID]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [G.AuditLogChangeKeys.NAME]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [G.AuditLogChangeKeys.AVATAR_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [G.AuditLogChangeKeys.REASON]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  v = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...R()
  }),
  H = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [G.AuditLogChangeKeys.TAGS]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [G.AuditLogChangeKeys.DESCRIPTION]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...R()
  }),
  V = () => ({
    [G.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [G.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [G.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...R()
  }),
  B = () => ({
    [G.AuditLogChangeKeys.TOPIC]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [G.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [O.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [O.GuildScheduledEventPrivacyLevel.PUBLIC]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...R()
  }),
  F = () => ({
    [G.AuditLogChangeKeys.NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [G.AuditLogChangeKeys.DESCRIPTION]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [G.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [O.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [O.GuildScheduledEventPrivacyLevel.PUBLIC]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [G.AuditLogChangeKeys.STATUS]: {
      [O.GuildScheduledEventStatus.SCHEDULED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [O.GuildScheduledEventStatus.ACTIVE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [O.GuildScheduledEventStatus.COMPLETED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [O.GuildScheduledEventStatus.CANCELED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [G.AuditLogChangeKeys.ENTITY_TYPE]: {
      [O.GuildScheduledEventEntityTypes.NONE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [O.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [O.GuildScheduledEventEntityTypes.VOICE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [O.GuildScheduledEventEntityTypes.EXTERNAL]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [G.AuditLogChangeKeys.CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [G.AuditLogChangeKeys.LOCATION]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [G.AuditLogChangeKeys.RECURRENCE_RULE]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...R()
  }),
  K = () => ({
    [G.AuditLogChangeKeys.NAME]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [G.AuditLogChangeKeys.ARCHIVED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [G.AuditLogChangeKeys.LOCKED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [G.AuditLogChangeKeys.INVITABLE]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [G.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [G.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eE(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    ...R()
  }),
  x = e => {
    let t = {
      ...R()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  b = {
    [G.AuditLogTargetTypes.CHANNEL]: {
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [G.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [G.AuditLogChangeKeys.TYPE]: !0,
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [G.AuditLogTargetTypes.INVITE]: {
      [G.AuditLogChangeKeys.INVITER_ID]: !0,
      [G.AuditLogChangeKeys.USES]: !0
    },
    [G.AuditLogTargetTypes.WEBHOOK]: {
      [G.AuditLogChangeKeys.TYPE]: !0,
      [G.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [G.AuditLogTargetTypes.INTEGRATION]: {
      [G.AuditLogChangeKeys.TYPE]: !0
    },
    [G.AuditLogTargetTypes.THREAD]: {
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.TYPE]: !0
    },
    [G.AuditLogTargetTypes.STICKER]: {
      [G.AuditLogChangeKeys.ID]: !0,
      [G.AuditLogChangeKeys.TYPE]: !0,
      [G.AuditLogChangeKeys.ASSET]: !0,
      [G.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [G.AuditLogChangeKeys.AVAILABLE]: !0,
      [G.AuditLogChangeKeys.GUILD_ID]: !0
    }
  },
  j = () => [{
    value: G.AuditLogActions.ALL,
    label: U.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: U.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: G.AuditLogActions.GUILD_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: G.AuditLogActions.CHANNEL_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: G.AuditLogActions.CHANNEL_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: G.AuditLogActions.CHANNEL_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: G.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: G.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: G.AuditLogActions.MEMBER_KICK,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: G.AuditLogActions.MEMBER_PRUNE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: G.AuditLogActions.MEMBER_BAN_ADD,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: G.AuditLogActions.MEMBER_BAN_REMOVE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: G.AuditLogActions.MEMBER_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: G.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: G.AuditLogActions.MEMBER_MOVE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: G.AuditLogActions.MEMBER_DISCONNECT,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: G.AuditLogActions.BOT_ADD,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: G.AuditLogActions.THREAD_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: G.AuditLogActions.THREAD_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: G.AuditLogActions.THREAD_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: G.AuditLogActions.ROLE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: G.AuditLogActions.ROLE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: G.AuditLogActions.ROLE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: G.AuditLogActions.INVITE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: G.AuditLogActions.INVITE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: G.AuditLogActions.INVITE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: G.AuditLogActions.WEBHOOK_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: G.AuditLogActions.WEBHOOK_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: G.AuditLogActions.WEBHOOK_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: G.AuditLogActions.EMOJI_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: G.AuditLogActions.EMOJI_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: G.AuditLogActions.EMOJI_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: G.AuditLogActions.MESSAGE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: G.AuditLogActions.MESSAGE_BULK_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: G.AuditLogActions.MESSAGE_PIN,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: G.AuditLogActions.MESSAGE_UNPIN,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: G.AuditLogActions.INTEGRATION_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: G.AuditLogActions.INTEGRATION_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: G.AuditLogActions.INTEGRATION_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: G.AuditLogActions.STICKER_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: G.AuditLogActions.STICKER_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: G.AuditLogActions.STICKER_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: G.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: G.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: G.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: G.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: G.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: G.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: G.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
  }, {
    value: G.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
  }];

function k(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function w(e) {
  let t = j().find(t => t.value === e.action),
    s = k(G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e);
  switch (!0) {
    case null != s:
      return U.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
    case null != t:
      var E;
      return null !== (E = null == t ? void 0 : t.label) && void 0 !== E ? E : null;
    default:
      return null
  }
}
let Y = {
  [T.TimeUnits.SECONDS]: e => U.default.Messages.DURATION_SECONDS.format({
    seconds: e
  }),
  [T.TimeUnits.MINUTES]: e => U.default.Messages.DURATION_MINUTES.format({
    minutes: e
  }),
  [T.TimeUnits.HOURS]: e => U.default.Messages.DURATION_HOURS.format({
    hours: e
  }),
  [T.TimeUnits.DAYS]: e => U.default.Messages.DURATION_DAYS.format({
    days: e
  })
};

function W(e) {
  let t = k(G.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e),
    s = J(G.AuditLogChangeKeys.ROLES_ADD, e).length > 0,
    E = J(G.AuditLogChangeKeys.ROLES_REMOVE, e).length > 0;
  switch (!0) {
    case null != t:
      if ((null == t ? void 0 : t.newValue) != null) {
        let s = new Date(null == t ? void 0 : t.newValue).getTime(),
          E = c.default.extractTimestamp(e.id),
          _ = [T.TimeUnits.DAYS, T.TimeUnits.HOURS, T.TimeUnits.MINUTES, T.TimeUnits.SECONDS],
          a = (0, T.getTimeAndUnit)(Math.round((s - E) / 1e3 / 60), _);
        if (null == a.unit || null == a.time) return null;
        if (a.unit in Y) return Y[a.unit](a.time);
        return null
      }
      if ((null == t ? void 0 : t.oldValue) != null) return U.default.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
      return null;
    case s && E:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    case s:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    case E:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    default:
      return null
  }
}

function J(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function X(e) {
  let t = J(G.AuditLogChangeKeys.ROLES_ADD, e),
    s = J(G.AuditLogChangeKeys.ROLES_REMOVE, e),
    E = null == t ? void 0 : t.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? void 0 : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", "),
    _ = null == s ? void 0 : s.map(e => {
      let {
        newValue: t
      } = e;
      return null == t ? void 0 : t.map(e => {
        let {
          name: t
        } = e;
        return t
      }).join(", ")
    }).join(", ");
  switch (!0) {
    case t.length > 0 && s.length > 0:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
        roleNamesAdded: E,
        roleNamesRemoved: _
      });
    case t.length > 0:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
        roleNames: E
      });
    case s.length > 0:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
        roleNames: _
      });
    default:
      return null
  }
}

function Z(e) {
  switch (e.action) {
    case G.AuditLogActions.GUILD_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case G.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === G.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case G.ChannelTypes.GUILD_STAGE_VOICE:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case G.ChannelTypes.GUILD_VOICE:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case G.ChannelTypes.GUILD_CATEGORY:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case G.AuditLogActions.CHANNEL_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case G.AuditLogActions.CHANNEL_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case G.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case G.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case G.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case G.AuditLogActions.MEMBER_KICK:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case G.AuditLogActions.MEMBER_PRUNE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case G.AuditLogActions.MEMBER_BAN_ADD:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case G.AuditLogActions.MEMBER_BAN_REMOVE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case G.AuditLogActions.MEMBER_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case G.AuditLogActions.MEMBER_ROLE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case G.AuditLogActions.MEMBER_MOVE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case G.AuditLogActions.MEMBER_DISCONNECT:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case G.AuditLogActions.BOT_ADD:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case G.AuditLogActions.ROLE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case G.AuditLogActions.ROLE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case G.AuditLogActions.ROLE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case G.AuditLogActions.INVITE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case G.AuditLogActions.INVITE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case G.AuditLogActions.INVITE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case G.AuditLogActions.WEBHOOK_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case G.AuditLogActions.WEBHOOK_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case G.AuditLogActions.WEBHOOK_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case G.AuditLogActions.EMOJI_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case G.AuditLogActions.EMOJI_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case G.AuditLogActions.EMOJI_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case G.AuditLogActions.STICKER_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case G.AuditLogActions.STICKER_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case G.AuditLogActions.STICKER_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case G.AuditLogActions.MESSAGE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case G.AuditLogActions.MESSAGE_BULK_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case G.AuditLogActions.MESSAGE_PIN:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case G.AuditLogActions.MESSAGE_UNPIN:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case G.AuditLogActions.INTEGRATION_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case G.AuditLogActions.INTEGRATION_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case G.AuditLogActions.INTEGRATION_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case G.AuditLogActions.STAGE_INSTANCE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case G.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case G.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case G.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case G.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case G.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case G.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === G.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case G.ChannelTypes.PRIVATE_THREAD:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case G.ChannelTypes.ANNOUNCEMENT_THREAD:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case G.AuditLogActions.THREAD_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case G.AuditLogActions.THREAD_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case G.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case G.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case G.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case G.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case G.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return U.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case G.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return U.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    default:
      return null
  }
}

function z(e) {
  var t;
  let s = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
  return null != s ? s.newValue : null
}

function Q(e, t) {
  switch (e) {
    case G.Permissions.CREATE_INSTANT_INVITE:
      return U.default.Messages.CREATE_INSTANT_INVITE;
    case G.Permissions.KICK_MEMBERS:
      return U.default.Messages.KICK_MEMBERS;
    case G.Permissions.BAN_MEMBERS:
      return U.default.Messages.BAN_MEMBERS;
    case G.Permissions.ADMINISTRATOR:
      return U.default.Messages.ADMINISTRATOR;
    case G.Permissions.MANAGE_CHANNELS:
      if (t.targetType === G.AuditLogTargetTypes.CHANNEL || t.targetType === G.AuditLogTargetTypes.CHANNEL_OVERWRITE) return U.default.Messages.MANAGE_CHANNEL;
      return U.default.Messages.MANAGE_CHANNELS;
    case G.Permissions.MANAGE_GUILD:
      return U.default.Messages.MANAGE_SERVER;
    case G.Permissions.VIEW_GUILD_ANALYTICS:
      return U.default.Messages.VIEW_GUILD_ANALYTICS;
    case G.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return U.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case G.Permissions.CHANGE_NICKNAME:
      return U.default.Messages.CHANGE_NICKNAME;
    case G.Permissions.MANAGE_NICKNAMES:
      return U.default.Messages.MANAGE_NICKNAMES;
    case G.Permissions.MANAGE_ROLES:
      return U.default.Messages.MANAGE_ROLES;
    case G.Permissions.MANAGE_WEBHOOKS:
      return U.default.Messages.MANAGE_WEBHOOKS;
    case G.Permissions.CREATE_GUILD_EXPRESSIONS:
      return U.default.Messages.CREATE_EXPRESSIONS;
    case G.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return U.default.Messages.MANAGE_EXPRESSIONS;
    case G.Permissions.VIEW_AUDIT_LOG:
      return U.default.Messages.VIEW_AUDIT_LOG;
    case G.Permissions.VIEW_CHANNEL:
      return U.default.Messages.READ_MESSAGES;
    case G.Permissions.SEND_MESSAGES:
      return U.default.Messages.SEND_MESSAGES;
    case G.Permissions.SEND_TTS_MESSAGES:
      return U.default.Messages.SEND_TTS_MESSAGES;
    case G.Permissions.USE_APPLICATION_COMMANDS:
      return U.default.Messages.USE_APPLICATION_COMMANDS;
    case G.Permissions.MANAGE_MESSAGES:
      return U.default.Messages.MANAGE_MESSAGES;
    case G.Permissions.EMBED_LINKS:
      return U.default.Messages.EMBED_LINKS;
    case G.Permissions.ATTACH_FILES:
      return U.default.Messages.ATTACH_FILES;
    case G.Permissions.READ_MESSAGE_HISTORY:
      return U.default.Messages.READ_MESSAGE_HISTORY;
    case G.Permissions.MENTION_EVERYONE:
      return U.default.Messages.MENTION_EVERYONE;
    case G.Permissions.USE_EXTERNAL_EMOJIS:
      return U.default.Messages.USE_EXTERNAL_EMOJIS;
    case G.Permissions.USE_EXTERNAL_STICKERS:
      return U.default.Messages.USE_EXTERNAL_STICKERS;
    case G.Permissions.ADD_REACTIONS:
      return U.default.Messages.ADD_REACTIONS;
    case G.Permissions.CONNECT:
      return U.default.Messages.CONNECT;
    case G.Permissions.SPEAK:
      return U.default.Messages.SPEAK;
    case G.Permissions.MUTE_MEMBERS:
      return U.default.Messages.MUTE_MEMBERS;
    case G.Permissions.DEAFEN_MEMBERS:
      return U.default.Messages.DEAFEN_MEMBERS;
    case G.Permissions.MOVE_MEMBERS:
      return U.default.Messages.MOVE_MEMBERS;
    case G.Permissions.USE_VAD:
      return U.default.Messages.USE_VAD;
    case G.Permissions.PRIORITY_SPEAKER:
      return U.default.Messages.PRIORITY_SPEAKER;
    case G.Permissions.STREAM:
      return U.default.Messages.VIDEO;
    case G.Permissions.REQUEST_TO_SPEAK:
      return U.default.Messages.REQUEST_TO_SPEAK;
    case G.Permissions.CREATE_EVENTS:
      return U.default.Messages.CREATE_EVENTS;
    case G.Permissions.MANAGE_EVENTS:
      return U.default.Messages.MANAGE_EVENTS;
    case G.Permissions.CREATE_PUBLIC_THREADS:
      return U.default.Messages.CREATE_PUBLIC_THREADS;
    case G.Permissions.CREATE_PRIVATE_THREADS:
      return U.default.Messages.CREATE_PRIVATE_THREADS;
    case G.Permissions.SEND_MESSAGES_IN_THREADS:
      return U.default.Messages.SEND_MESSAGES_IN_THREADS;
    case G.Permissions.MANAGE_THREADS:
      return U.default.Messages.MANAGE_THREADS;
    case G.Permissions.MODERATE_MEMBERS:
      return U.default.Messages.MODERATE_MEMBER;
    case G.Permissions.SET_VOICE_CHANNEL_STATUS:
      return U.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function q(e, t) {
  if (null == t) return [];
  let s = [];
  return e.forEach(e => {
    let E = function(e, t) {
        switch (e.targetType) {
          case G.AuditLogTargetTypes.GUILD:
            return t;
          case G.AuditLogTargetTypes.CHANNEL:
          case G.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return et(e, G.AuditLogChangeKeys.NAME, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0));
          case G.AuditLogTargetTypes.USER:
            return et(e, G.AuditLogChangeKeys.NICK, e => g.default.getUser(e), void 0);
          case G.AuditLogTargetTypes.ROLE:
            return et(e, G.AuditLogChangeKeys.NAME, e => N.default.getRole(t.id, e), e => e.name);
          case G.AuditLogTargetTypes.INVITE:
            return et(e, G.AuditLogChangeKeys.CODE, G.NOOP_NULL);
          case G.AuditLogTargetTypes.INTEGRATION:
            return et(e, G.AuditLogChangeKeys.TYPE, e => I.default.integrations.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.WEBHOOK:
            return et(e, G.AuditLogChangeKeys.NAME, e => I.default.webhooks.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.EMOJI:
            return et(e, G.AuditLogChangeKeys.NAME, e => l.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.STICKER:
            return et(e, G.AuditLogChangeKeys.NAME, e => o.default.getStickerById(e), e => e.name);
          case G.AuditLogTargetTypes.STAGE_INSTANCE:
            return et(e, G.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(r.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case G.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
            return et(e, G.AuditLogChangeKeys.NAME, e => I.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.THREAD:
            return et(e, G.AuditLogChangeKeys.NAME, e => I.default.threads.find(t => t.id === e), e => e.name);
          case G.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = I.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return et(e, G.AuditLogChangeKeys.NAME, e => I.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === i.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          default:
            return C.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = g.default.getUser(e.userId);
    if (null != a && (null != E || e.action === G.AuditLogActions.MEMBER_PRUNE || e.action === G.AuditLogActions.MEMBER_DISCONNECT || e.action === G.AuditLogActions.MEMBER_MOVE || e.action === G.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === G.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", E)).set("options", function(e) {
          if (null != e.options) {
            let E = {
              ...e.options
            };
            switch (e.options.type) {
              case G.AuditLogSubtargetTypes.USER:
                var t, s;
                (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (E.subtarget = es(null == e ? void 0 : null === (s = e.options) || void 0 === s ? void 0 : s.id, e => g.default.getUser(e), e => e.tag));
                break;
              case G.AuditLogSubtargetTypes.ROLE:
                null != e.options.role_name && (E.subtarget = es(e.options.role_name, G.NOOP_NULL))
            }
            return null != e.options.channel_id && (E.channel = et(e, "", e => d.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (E.count = e.options.members_removed), E
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(E => {
          let a = function(e, t, s) {
            if (t.action === G.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case G.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = es(t.id, e => N.default.getRole(s.id, e), e => e.name);
                  break;
                case G.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = es(t.id, e => g.default.getUser(e), e => e.tag);
                  break;
                case G.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === _()(s.id).subtract(1).toString() ? e.subtarget = U.default.Messages.ALL_CHANNELS : e.subtarget = es(t.id, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0))
              }
              return e
            }
            switch (e.key) {
              case G.AuditLogChangeKeys.OWNER_ID:
                return ee(e, e => g.default.getUser(e));
              case G.AuditLogChangeKeys.CHANNEL_ID:
              case G.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case G.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case G.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case G.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return ee(e, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0));
              case G.AuditLogChangeKeys.AFK_TIMEOUT:
                return ee(e, e => e / 60);
              case G.AuditLogChangeKeys.BITRATE:
                return ee(e, e => e / 1e3);
              case G.AuditLogChangeKeys.COLOR:
                return ee(e, e => (0, n.int2hex)(e).toUpperCase());
              case G.AuditLogChangeKeys.MAX_AGE:
                return ee(e, e => {
                  let t = D.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case G.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = $(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new L.AuditLogChange(G.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (E.length > 0) {
                  let e = new L.AuditLogChange(G.AuditLogChangeKeys.PERMISSIONS_DENIED, null, E);
                  t.push(e)
                }
                return t
              }
              case G.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case G.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = $(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new L.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let e = new L.AuditLogChange(G.AuditLogChangeKeys.PERMISSIONS_RESET, E, E);
                  t.push(e)
                }
                return t
              }
              case G.AuditLogChangeKeys.PREFERRED_LOCALE:
                return ee(e, e => {
                  let t = U.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case G.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return ee(e, e => e === G.VideoQualityMode.FULL ? U.default.Messages.VIDEO_QUALITY_MODE_FULL : U.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [G.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [G.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [G.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [G.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: G.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(G.SystemChannelFlags).forEach(E => {
                    let _ = (e.oldValue & E) === E,
                      a = (e.newValue & E) === E;
                    if (_ === a) return;
                    let n = new L.AuditLogChange(t[E], !_, !a);
                    s.push(n)
                  }), s
                }(e)
            }
            return e
          }(E, e, t);
          Array.isArray(a) ? a.forEach(e => s.push(e)) : s.push(a)
        }), e = e.set("changes", s)
      }
      s.push(e)
    }
  }), s
}

function $(e, t) {
  let s = a.deserialize("string" == typeof e ? e : 0),
    E = a.deserialize("string" == typeof t ? t : 0),
    _ = a.remove(E, s),
    n = a.remove(s, E),
    T = [],
    i = [],
    u = {
      ...G.Permissions
    };
  for (let e in u) {
    let t = u[e];
    a.has(_, t) && T.push(t), a.has(n, t) && i.push(t)
  }
  return {
    added: T,
    removed: i
  }
}

function ee(e, t, s) {
  let E = e.newValue,
    _ = e.oldValue;
  return null != e.newValue && (E = t(e.newValue), null != s && null != E && (E = s(E))), null != e.oldValue && (_ = t(e.oldValue), null != s && null != _ && (_ = s(_))), new L.AuditLogChange(e.key, _ || e.oldValue, E || e.newValue)
}

function et(e, t, s, E, _) {
  let a = null,
    n = s(_ = null != _ ? _ : e.targetId);
  if (null != n && null != E && (a = E(n)), null == a && null != n && (a = n), null == a) {
    let t = I.default.deletedTargets[e.targetType];
    null != t && null != t[_] && (a = t[_])
  }
  if (null == a && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (a = s.newValue || s.oldValue)
  }
  return a || _
}

function es(e, t, s) {
  let E = e,
    _ = t(e);
  return null != _ && null != s && (E = s(_)), E
}

function eE(e, t) {
  return s => null == s.oldValue ? e : t
}

function e_(e, t) {
  return s => null == s.newValue ? e : t
}

function ea(e, t, s, E) {
  return _ => {
    if (null != _.newValue && null != _.oldValue) return e;
    if (null != _.newValue) return t;
    if (null != _.oldValue) return s;
    return E
  }
}