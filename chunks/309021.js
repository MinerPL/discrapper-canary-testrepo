"use strict";
E.r(t), E.d(t, {
  DEFAULT_FOR_STRINGS_KEY: function() {
    return M
  },
  GuildChangeStrings: function() {
    return f
  },
  ChannelChangeStrings: function() {
    return h
  },
  UserChangeStrings: function() {
    return p
  },
  RoleChangeStrings: function() {
    return P
  },
  InviteChangeStrings: function() {
    return y
  },
  WebhookChangeStrings: function() {
    return H
  },
  EmojiChangeStrings: function() {
    return m
  },
  StickerChangeStrings: function() {
    return v
  },
  IntegrationChangeStrings: function() {
    return V
  },
  StageInstanceChangeStrings: function() {
    return B
  },
  GuildScheduledEventChangeStrings: function() {
    return K
  },
  ThreadChangeStrings: function() {
    return F
  },
  CommandPermissionChangeStrings: function() {
    return x
  },
  NotRenderedChanges: function() {
    return b
  },
  getSimpleAuditLogTitleFromChange: function() {
    return Y
  },
  getSimpleAuditLogTitleContextFromChange: function() {
    return w
  },
  getSimpleAuditLogChangeDetails: function() {
    return X
  },
  getChangeTitle: function() {
    return z
  },
  getStringForBanReason: function() {
    return Z
  },
  getStringForPermission: function() {
    return Q
  },
  transformLogs: function() {
    return q
  }
}), E("70102"), E("424973");
var _ = E("552442"),
  s = E.n(_),
  T = E("316693"),
  a = E("509043"),
  n = E("512330"),
  A = E("798609"),
  u = E("679653"),
  I = E("605250"),
  i = E("385976"),
  l = E("287103"),
  L = E("834052"),
  o = E("364685"),
  r = E("242020"),
  d = E("42203"),
  N = E("305961"),
  S = E("27618"),
  g = E("697218"),
  D = E("354023"),
  G = E("299039"),
  O = E("49111"),
  c = E("745049"),
  U = E("782340");
let C = new I.default("AuditLogUtils"),
  M = -1,
  R = () => ({
    [O.AuditLogChangeKeys.REASON]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  f = () => ({
    [O.AuditLogChangeKeys.NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [O.AuditLogChangeKeys.DESCRIPTION]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [O.AuditLogChangeKeys.ICON_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [O.AuditLogChangeKeys.SPLASH_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [O.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [O.AuditLogChangeKeys.BANNER_HASH]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [O.AuditLogChangeKeys.OWNER_ID]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [O.AuditLogChangeKeys.REGION]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [O.AuditLogChangeKeys.PREFERRED_LOCALE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [O.AuditLogChangeKeys.AFK_CHANNEL_ID]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.AFK_TIMEOUT]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.RULES_CHANNEL_ID]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.MFA_LEVEL]: {
      [O.MFALevels.NONE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [O.MFALevels.ELEVATED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [O.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [O.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [O.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [O.VerificationLevels.NONE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [O.VerificationLevels.LOW]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [O.VerificationLevels.MEDIUM]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [O.VerificationLevels.HIGH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [O.VerificationLevels.VERY_HIGH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [O.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [O.UserNotificationSettings.ALL_MESSAGES]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [O.UserNotificationSettings.ONLY_MENTIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [O.AuditLogChangeKeys.VANITY_URL_CODE]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [O.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [O.GuildExplicitContentFilterTypes.DISABLED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [O.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [O.GuildExplicitContentFilterTypes.ALL_MEMBERS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [O.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [O.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...R()
  }),
  h = () => ({
    [O.AuditLogChangeKeys.NAME]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [O.AuditLogChangeKeys.POSITION]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [O.AuditLogChangeKeys.TOPIC]: eT(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [O.AuditLogChangeKeys.BITRATE]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [O.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eT(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [O.AuditLogChangeKeys.USER_LIMIT]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [O.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [O.AuditLogChangeKeys.PERMISSIONS_RESET]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [O.AuditLogChangeKeys.PERMISSIONS_GRANTED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [O.AuditLogChangeKeys.PERMISSIONS_DENIED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [O.AuditLogChangeKeys.REASON]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [O.AuditLogChangeKeys.NSFW]: {
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [O.AuditLogChangeKeys.TYPE]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [O.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [O.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  p = () => ({
    [O.AuditLogChangeKeys.NICK]: eT(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [O.AuditLogChangeKeys.DEAF]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [O.AuditLogChangeKeys.MUTE]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [O.AuditLogChangeKeys.ROLES_REMOVE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [O.AuditLogChangeKeys.ROLES_ADD]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [O.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [O.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eT(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [O.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [O.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...R()
  }),
  P = () => ({
    [O.AuditLogChangeKeys.NAME]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [O.AuditLogChangeKeys.PERMISSIONS_GRANTED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [O.AuditLogChangeKeys.PERMISSIONS_DENIED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [O.AuditLogChangeKeys.COLOR]: {
      "#000000": U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [M]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [O.AuditLogChangeKeys.HOIST]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [O.AuditLogChangeKeys.MENTIONABLE]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [O.AuditLogChangeKeys.ICON_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [O.AuditLogChangeKeys.UNICODE_EMOJI]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...R()
  }),
  y = () => ({
    [O.AuditLogChangeKeys.CODE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [O.AuditLogChangeKeys.CHANNEL_ID]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [O.AuditLogChangeKeys.MAX_USES]: {
      0: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [M]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [O.AuditLogChangeKeys.MAX_AGE]: {
      0: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [M]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [O.AuditLogChangeKeys.TEMPORARY]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    ...R()
  }),
  H = () => ({
    [O.AuditLogChangeKeys.CHANNEL_ID]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [O.AuditLogChangeKeys.NAME]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [O.AuditLogChangeKeys.AVATAR_HASH]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [O.AuditLogChangeKeys.REASON]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  m = () => ({
    [O.AuditLogChangeKeys.NAME]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...R()
  }),
  v = () => ({
    [O.AuditLogChangeKeys.NAME]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [O.AuditLogChangeKeys.TAGS]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [O.AuditLogChangeKeys.DESCRIPTION]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...R()
  }),
  V = () => ({
    [O.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [O.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [O.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...R()
  }),
  B = () => ({
    [O.AuditLogChangeKeys.TOPIC]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [O.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [c.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [c.GuildScheduledEventPrivacyLevel.PUBLIC]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...R()
  }),
  K = () => ({
    [O.AuditLogChangeKeys.NAME]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [O.AuditLogChangeKeys.DESCRIPTION]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [O.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [c.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [c.GuildScheduledEventPrivacyLevel.PUBLIC]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [O.AuditLogChangeKeys.STATUS]: {
      [c.GuildScheduledEventStatus.SCHEDULED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [c.GuildScheduledEventStatus.ACTIVE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [c.GuildScheduledEventStatus.COMPLETED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [c.GuildScheduledEventStatus.CANCELED]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [O.AuditLogChangeKeys.ENTITY_TYPE]: {
      [c.GuildScheduledEventEntityTypes.NONE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [c.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [c.GuildScheduledEventEntityTypes.VOICE]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [c.GuildScheduledEventEntityTypes.EXTERNAL]: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [O.AuditLogChangeKeys.CHANNEL_ID]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [O.AuditLogChangeKeys.LOCATION]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [O.AuditLogChangeKeys.RECURRENCE_RULE]: es(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
    ...R()
  }),
  F = () => ({
    [O.AuditLogChangeKeys.NAME]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [O.AuditLogChangeKeys.ARCHIVED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [O.AuditLogChangeKeys.LOCKED]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [O.AuditLogChangeKeys.INVITABLE]: {
      true: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [O.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [O.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: e_(U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
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
    [O.AuditLogTargetTypes.CHANNEL]: {
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [O.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [O.AuditLogChangeKeys.TYPE]: !0,
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [O.AuditLogTargetTypes.INVITE]: {
      [O.AuditLogChangeKeys.INVITER_ID]: !0,
      [O.AuditLogChangeKeys.USES]: !0
    },
    [O.AuditLogTargetTypes.WEBHOOK]: {
      [O.AuditLogChangeKeys.TYPE]: !0,
      [O.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [O.AuditLogTargetTypes.INTEGRATION]: {
      [O.AuditLogChangeKeys.TYPE]: !0
    },
    [O.AuditLogTargetTypes.THREAD]: {
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.TYPE]: !0
    },
    [O.AuditLogTargetTypes.STICKER]: {
      [O.AuditLogChangeKeys.ID]: !0,
      [O.AuditLogChangeKeys.TYPE]: !0,
      [O.AuditLogChangeKeys.ASSET]: !0,
      [O.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [O.AuditLogChangeKeys.AVAILABLE]: !0,
      [O.AuditLogChangeKeys.GUILD_ID]: !0
    }
  },
  j = () => [{
    value: O.AuditLogActions.ALL,
    label: U.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: U.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: O.AuditLogActions.GUILD_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: O.AuditLogActions.CHANNEL_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: O.AuditLogActions.CHANNEL_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: O.AuditLogActions.CHANNEL_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: O.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: O.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: O.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: O.AuditLogActions.MEMBER_KICK,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: O.AuditLogActions.MEMBER_PRUNE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: O.AuditLogActions.MEMBER_BAN_ADD,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: O.AuditLogActions.MEMBER_BAN_REMOVE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: O.AuditLogActions.MEMBER_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: O.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: O.AuditLogActions.MEMBER_MOVE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: O.AuditLogActions.MEMBER_DISCONNECT,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: O.AuditLogActions.BOT_ADD,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: O.AuditLogActions.THREAD_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: O.AuditLogActions.THREAD_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: O.AuditLogActions.THREAD_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: O.AuditLogActions.ROLE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: O.AuditLogActions.ROLE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: O.AuditLogActions.ROLE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: O.AuditLogActions.INVITE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: O.AuditLogActions.INVITE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: O.AuditLogActions.INVITE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: O.AuditLogActions.WEBHOOK_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: O.AuditLogActions.WEBHOOK_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: O.AuditLogActions.WEBHOOK_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: O.AuditLogActions.EMOJI_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: O.AuditLogActions.EMOJI_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: O.AuditLogActions.EMOJI_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: O.AuditLogActions.MESSAGE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: O.AuditLogActions.MESSAGE_BULK_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: O.AuditLogActions.MESSAGE_PIN,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: O.AuditLogActions.MESSAGE_UNPIN,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: O.AuditLogActions.INTEGRATION_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: O.AuditLogActions.INTEGRATION_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: O.AuditLogActions.INTEGRATION_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: O.AuditLogActions.STICKER_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: O.AuditLogActions.STICKER_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: O.AuditLogActions.STICKER_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: O.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: O.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: O.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: O.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: O.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: O.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: O.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
  }, {
    value: O.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER,
    label: U.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
  }];

function k(e, t) {
  return null != t.changes ? t.changes.find(t => t.key === e) : null
}

function Y(e) {
  let t = j().find(t => t.value === e.action),
    E = k(O.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e);
  switch (!0) {
    case null != E:
      return U.default.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
    case null != t:
      var _;
      return null !== (_ = null == t ? void 0 : t.label) && void 0 !== _ ? _ : null;
    default:
      return null
  }
}
let W = {
  [n.TimeUnits.SECONDS]: e => U.default.Messages.DURATION_SECONDS.format({
    seconds: e
  }),
  [n.TimeUnits.MINUTES]: e => U.default.Messages.DURATION_MINUTES.format({
    minutes: e
  }),
  [n.TimeUnits.HOURS]: e => U.default.Messages.DURATION_HOURS.format({
    hours: e
  }),
  [n.TimeUnits.DAYS]: e => U.default.Messages.DURATION_DAYS.format({
    days: e
  })
};

function w(e) {
  let t = k(O.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL, e),
    E = J(O.AuditLogChangeKeys.ROLES_ADD, e).length > 0,
    _ = J(O.AuditLogChangeKeys.ROLES_REMOVE, e).length > 0;
  switch (!0) {
    case null != t:
      if ((null == t ? void 0 : t.newValue) != null) {
        let E = new Date(null == t ? void 0 : t.newValue).getTime(),
          _ = G.default.extractTimestamp(e.id),
          s = [n.TimeUnits.DAYS, n.TimeUnits.HOURS, n.TimeUnits.MINUTES, n.TimeUnits.SECONDS],
          T = (0, n.getTimeAndUnit)(Math.round((E - _) / 1e3 / 60), s);
        if (null == T.unit || null == T.time) return null;
        if (T.unit in W) {
          let e = T.unit;
          return W[e](T.time)
        }
        return null
      }
      if ((null == t ? void 0 : t.oldValue) != null) return U.default.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
      return null;
    case E && _:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
    case E:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
    case _:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
    default:
      return null
  }
}

function J(e, t) {
  return null != t.changes ? t.changes.filter(t => t.key === e) : []
}

function X(e) {
  let t = J(O.AuditLogChangeKeys.ROLES_ADD, e),
    E = J(O.AuditLogChangeKeys.ROLES_REMOVE, e),
    _ = null == t ? void 0 : t.map(e => {
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
    s = null == E ? void 0 : E.map(e => {
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
    case t.length > 0 && E.length > 0:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
        roleNamesAdded: _,
        roleNamesRemoved: s
      });
    case t.length > 0:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
        roleNames: _
      });
    case E.length > 0:
      return U.default.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
        roleNames: s
      });
    default:
      return null
  }
}

function z(e) {
  switch (e.action) {
    case O.AuditLogActions.GUILD_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case O.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === O.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case O.ChannelTypes.GUILD_STAGE_VOICE:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case O.ChannelTypes.GUILD_VOICE:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case O.ChannelTypes.GUILD_CATEGORY:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case O.AuditLogActions.CHANNEL_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case O.AuditLogActions.CHANNEL_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case O.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case O.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case O.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case O.AuditLogActions.MEMBER_KICK:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case O.AuditLogActions.MEMBER_PRUNE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case O.AuditLogActions.MEMBER_BAN_ADD:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
    case O.AuditLogActions.MEMBER_BAN_REMOVE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case O.AuditLogActions.MEMBER_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case O.AuditLogActions.MEMBER_ROLE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case O.AuditLogActions.MEMBER_MOVE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case O.AuditLogActions.MEMBER_DISCONNECT:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case O.AuditLogActions.BOT_ADD:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case O.AuditLogActions.ROLE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case O.AuditLogActions.ROLE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case O.AuditLogActions.ROLE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case O.AuditLogActions.INVITE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case O.AuditLogActions.INVITE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case O.AuditLogActions.INVITE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case O.AuditLogActions.WEBHOOK_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case O.AuditLogActions.WEBHOOK_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case O.AuditLogActions.WEBHOOK_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case O.AuditLogActions.EMOJI_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case O.AuditLogActions.EMOJI_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case O.AuditLogActions.EMOJI_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case O.AuditLogActions.STICKER_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case O.AuditLogActions.STICKER_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case O.AuditLogActions.STICKER_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case O.AuditLogActions.MESSAGE_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case O.AuditLogActions.MESSAGE_BULK_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case O.AuditLogActions.MESSAGE_PIN:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case O.AuditLogActions.MESSAGE_UNPIN:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case O.AuditLogActions.INTEGRATION_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case O.AuditLogActions.INTEGRATION_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case O.AuditLogActions.INTEGRATION_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case O.AuditLogActions.STAGE_INSTANCE_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case O.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case O.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case O.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
    case O.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
    case O.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
    case O.AuditLogActions.THREAD_CREATE:
      let E = null != e.changes ? e.changes.find(e => e.key === O.AuditLogChangeKeys.TYPE) : null;
      if (null == E) throw Error("[AuditLog] Could not find type change for thread create");
      switch (E.newValue) {
        case O.ChannelTypes.PRIVATE_THREAD:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
        case O.ChannelTypes.ANNOUNCEMENT_THREAD:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE
      }
    case O.AuditLogActions.THREAD_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
    case O.AuditLogActions.THREAD_DELETE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
    case O.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case O.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case O.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case O.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return U.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case O.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return U.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case O.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return U.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    default:
      return null
  }
}

function Z(e) {
  var t;
  let E = null == e ? void 0 : null === (t = e.changes) || void 0 === t ? void 0 : t.find(e => "reason" === e.key);
  return null != E ? E.newValue : null
}

function Q(e, t) {
  switch (e) {
    case O.Permissions.CREATE_INSTANT_INVITE:
      return U.default.Messages.CREATE_INSTANT_INVITE;
    case O.Permissions.KICK_MEMBERS:
      return U.default.Messages.KICK_MEMBERS;
    case O.Permissions.BAN_MEMBERS:
      return U.default.Messages.BAN_MEMBERS;
    case O.Permissions.ADMINISTRATOR:
      return U.default.Messages.ADMINISTRATOR;
    case O.Permissions.MANAGE_CHANNELS:
      if (t.targetType === O.AuditLogTargetTypes.CHANNEL || t.targetType === O.AuditLogTargetTypes.CHANNEL_OVERWRITE) return U.default.Messages.MANAGE_CHANNEL;
      return U.default.Messages.MANAGE_CHANNELS;
    case O.Permissions.MANAGE_GUILD:
      return U.default.Messages.MANAGE_SERVER;
    case O.Permissions.VIEW_GUILD_ANALYTICS:
      return U.default.Messages.VIEW_GUILD_ANALYTICS;
    case O.Permissions.VIEW_CREATOR_MONETIZATION_ANALYTICS:
      return U.default.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
    case O.Permissions.CHANGE_NICKNAME:
      return U.default.Messages.CHANGE_NICKNAME;
    case O.Permissions.MANAGE_NICKNAMES:
      return U.default.Messages.MANAGE_NICKNAMES;
    case O.Permissions.MANAGE_ROLES:
      return U.default.Messages.MANAGE_ROLES;
    case O.Permissions.MANAGE_WEBHOOKS:
      return U.default.Messages.MANAGE_WEBHOOKS;
    case O.Permissions.CREATE_GUILD_EXPRESSIONS:
      return U.default.Messages.CREATE_EXPRESSIONS;
    case O.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return U.default.Messages.MANAGE_EXPRESSIONS;
    case O.Permissions.VIEW_AUDIT_LOG:
      return U.default.Messages.VIEW_AUDIT_LOG;
    case O.Permissions.VIEW_CHANNEL:
      return U.default.Messages.READ_MESSAGES;
    case O.Permissions.SEND_MESSAGES:
      return U.default.Messages.SEND_MESSAGES;
    case O.Permissions.SEND_TTS_MESSAGES:
      return U.default.Messages.SEND_TTS_MESSAGES;
    case O.Permissions.USE_APPLICATION_COMMANDS:
      return U.default.Messages.USE_APPLICATION_COMMANDS;
    case O.Permissions.MANAGE_MESSAGES:
      return U.default.Messages.MANAGE_MESSAGES;
    case O.Permissions.EMBED_LINKS:
      return U.default.Messages.EMBED_LINKS;
    case O.Permissions.ATTACH_FILES:
      return U.default.Messages.ATTACH_FILES;
    case O.Permissions.READ_MESSAGE_HISTORY:
      return U.default.Messages.READ_MESSAGE_HISTORY;
    case O.Permissions.MENTION_EVERYONE:
      return U.default.Messages.MENTION_EVERYONE;
    case O.Permissions.USE_EXTERNAL_EMOJIS:
      return U.default.Messages.USE_EXTERNAL_EMOJIS;
    case O.Permissions.USE_EXTERNAL_STICKERS:
      return U.default.Messages.USE_EXTERNAL_STICKERS;
    case O.Permissions.ADD_REACTIONS:
      return U.default.Messages.ADD_REACTIONS;
    case O.Permissions.CONNECT:
      return U.default.Messages.CONNECT;
    case O.Permissions.SPEAK:
      return U.default.Messages.SPEAK;
    case O.Permissions.MUTE_MEMBERS:
      return U.default.Messages.MUTE_MEMBERS;
    case O.Permissions.DEAFEN_MEMBERS:
      return U.default.Messages.DEAFEN_MEMBERS;
    case O.Permissions.MOVE_MEMBERS:
      return U.default.Messages.MOVE_MEMBERS;
    case O.Permissions.USE_VAD:
      return U.default.Messages.USE_VAD;
    case O.Permissions.PRIORITY_SPEAKER:
      return U.default.Messages.PRIORITY_SPEAKER;
    case O.Permissions.STREAM:
      return U.default.Messages.VIDEO;
    case O.Permissions.REQUEST_TO_SPEAK:
      return U.default.Messages.REQUEST_TO_SPEAK;
    case O.Permissions.CREATE_EVENTS:
      return U.default.Messages.CREATE_EVENTS;
    case O.Permissions.MANAGE_EVENTS:
      return U.default.Messages.MANAGE_EVENTS;
    case O.Permissions.CREATE_PUBLIC_THREADS:
      return U.default.Messages.CREATE_PUBLIC_THREADS;
    case O.Permissions.CREATE_PRIVATE_THREADS:
      return U.default.Messages.CREATE_PRIVATE_THREADS;
    case O.Permissions.SEND_MESSAGES_IN_THREADS:
      return U.default.Messages.SEND_MESSAGES_IN_THREADS;
    case O.Permissions.MANAGE_THREADS:
      return U.default.Messages.MANAGE_THREADS;
    case O.Permissions.MODERATE_MEMBERS:
      return U.default.Messages.MODERATE_MEMBER;
    case O.Permissions.SET_VOICE_CHANNEL_STATUS:
      return U.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function q(e, t) {
  if (null == t) return [];
  let E = [];
  return e.forEach(e => {
    let _ = function(e, t) {
        switch (e.targetType) {
          case O.AuditLogTargetTypes.GUILD:
            return t;
          case O.AuditLogTargetTypes.CHANNEL:
          case O.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return et(e, O.AuditLogChangeKeys.NAME, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0));
          case O.AuditLogTargetTypes.USER:
            return et(e, O.AuditLogChangeKeys.NICK, e => g.default.getUser(e), void 0);
          case O.AuditLogTargetTypes.ROLE:
            return et(e, O.AuditLogChangeKeys.NAME, e => N.default.getRole(t.id, e), e => e.name);
          case O.AuditLogTargetTypes.INVITE:
            return et(e, O.AuditLogChangeKeys.CODE, O.NOOP_NULL);
          case O.AuditLogTargetTypes.INTEGRATION:
            return et(e, O.AuditLogChangeKeys.TYPE, e => l.default.integrations.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.WEBHOOK:
            return et(e, O.AuditLogChangeKeys.NAME, e => l.default.webhooks.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.EMOJI:
            return et(e, O.AuditLogChangeKeys.NAME, e => i.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.STICKER:
            return et(e, O.AuditLogChangeKeys.NAME, e => o.default.getStickerById(e), e => e.name);
          case O.AuditLogTargetTypes.STAGE_INSTANCE:
            return et(e, O.AuditLogChangeKeys.TOPIC, e => {
              var E;
              return null === (E = Object.values(L.default.getStageInstancesByGuild(t.id))) || void 0 === E ? void 0 : E.find(t => t.id === e)
            }, e => e.topic);
          case O.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
            return et(e, O.AuditLogChangeKeys.NAME, e => l.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.THREAD:
            return et(e, O.AuditLogChangeKeys.NAME, e => l.default.threads.find(t => t.id === e), e => e.name);
          case O.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = l.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return et(e, O.AuditLogChangeKeys.NAME, e => l.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === A.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          default:
            return C.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      T = g.default.getUser(e.userId);
    if (null != T && (null != _ || e.action === O.AuditLogActions.MEMBER_PRUNE || e.action === O.AuditLogActions.MEMBER_DISCONNECT || e.action === O.AuditLogActions.MEMBER_MOVE || e.action === O.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === O.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
      if (null != (e = (e = (e = e.set("user", T)).set("target", _)).set("options", function(e) {
          if (null != e.options) {
            let _ = {
              ...e.options
            };
            switch (e.options.type) {
              case O.AuditLogSubtargetTypes.USER:
                var t, E;
                (null === (t = e.options) || void 0 === t ? void 0 : t.id) != null && (_.subtarget = eE(null == e ? void 0 : null === (E = e.options) || void 0 === E ? void 0 : E.id, e => g.default.getUser(e), e => e.tag));
                break;
              case O.AuditLogSubtargetTypes.ROLE:
                null != e.options.role_name && (_.subtarget = eE(e.options.role_name, O.NOOP_NULL))
            }
            return null != e.options.channel_id && (_.channel = et(e, "", e => d.default.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (_.count = e.options.members_removed), _
          }
          return e.options
        }(e))).changes) {
        let E = [];
        e.changes.forEach(_ => {
          let T = function(e, t, E) {
            if (t.action === O.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case O.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = eE(t.id, e => N.default.getRole(E.id, e), e => e.name);
                  break;
                case O.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = eE(t.id, e => g.default.getUser(e), e => e.tag);
                  break;
                case O.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === s(E.id).subtract(1).toString() ? e.subtarget = U.default.Messages.ALL_CHANNELS : e.subtarget = eE(t.id, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0))
              }
              return e
            }
            switch (e.key) {
              case O.AuditLogChangeKeys.OWNER_ID:
                return ee(e, e => g.default.getUser(e));
              case O.AuditLogChangeKeys.CHANNEL_ID:
              case O.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case O.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case O.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case O.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return ee(e, e => d.default.getChannel(e), e => (0, u.computeChannelName)(e, g.default, S.default, !0));
              case O.AuditLogChangeKeys.AFK_TIMEOUT:
                return ee(e, e => e / 60);
              case O.AuditLogChangeKeys.BITRATE:
                return ee(e, e => e / 1e3);
              case O.AuditLogChangeKeys.COLOR:
                return ee(e, e => (0, a.int2hex)(e).toUpperCase());
              case O.AuditLogChangeKeys.MAX_AGE:
                return ee(e, e => {
                  let t = D.default.getMaxAgeOptions.find(t => {
                    let {
                      value: E
                    } = t;
                    return e === E
                  });
                  return t ? t.label : e
                });
              case O.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = $(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let e = new r.AuditLogChange(O.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, E);
                  t.push(e)
                }
                if (_.length > 0) {
                  let e = new r.AuditLogChange(O.AuditLogChangeKeys.PERMISSIONS_DENIED, null, _);
                  t.push(e)
                }
                return t
              }
              case O.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case O.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: E,
                    removed: _
                  } = $(e.oldValue, e.newValue);
                if (E.length > 0) {
                  let _ = new r.AuditLogChange(e.key, null, E);
                  t.push(_)
                }
                if (_.length > 0) {
                  let e = new r.AuditLogChange(O.AuditLogChangeKeys.PERMISSIONS_RESET, _, _);
                  t.push(e)
                }
                return t
              }
              case O.AuditLogChangeKeys.PREFERRED_LOCALE:
                return ee(e, e => {
                  let t = U.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case O.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return ee(e, e => e === O.VideoQualityMode.FULL ? U.default.Messages.VIDEO_QUALITY_MODE_FULL : U.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [O.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [O.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [O.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [O.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: O.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    E = [];
                  return Object.values(O.SystemChannelFlags).forEach(_ => {
                    let s = (e.oldValue & _) === _,
                      T = (e.newValue & _) === _;
                    if (s === T) return;
                    let a = new r.AuditLogChange(t[_], !s, !T);
                    E.push(a)
                  }), E
                }(e)
            }
            return e
          }(_, e, t);
          Array.isArray(T) ? T.forEach(e => E.push(e)) : E.push(T)
        }), e = e.set("changes", E)
      }
      E.push(e)
    }
  }), E
}

function $(e, t) {
  let E = T.deserialize("string" == typeof e ? e : 0),
    _ = T.deserialize("string" == typeof t ? t : 0),
    s = T.remove(_, E),
    a = T.remove(E, _),
    n = [],
    A = [],
    u = {
      ...O.Permissions
    };
  for (let e in u) {
    let t = u[e];
    T.has(s, t) && n.push(t), T.has(a, t) && A.push(t)
  }
  return {
    added: n,
    removed: A
  }
}

function ee(e, t, E) {
  let _ = e.newValue,
    s = e.oldValue;
  return null != e.newValue && (_ = t(e.newValue), null != E && null != _ && (_ = E(_))), null != e.oldValue && (s = t(e.oldValue), null != E && null != s && (s = E(s))), new r.AuditLogChange(e.key, s || e.oldValue, _ || e.newValue)
}

function et(e, t, E, _, s) {
  let T = null;
  s = null != s ? s : e.targetId;
  let a = E(s);
  if (null != a && null != _ && (T = _(a)), null == T && null != a && (T = a), null == T) {
    let t = l.default.deletedTargets[e.targetType];
    null != t && null != t[s] && (T = t[s])
  }
  if (null == T && null != e.changes) {
    let E = e.changes.find(e => e.key === t);
    null != E && (T = E.newValue || E.oldValue)
  }
  return T || s
}

function eE(e, t, E) {
  let _ = e,
    s = t(e);
  return null != s && null != E && (_ = E(s)), _
}

function e_(e, t) {
  return E => null == E.oldValue ? e : t
}

function es(e, t) {
  return E => null == E.newValue ? e : t
}

function eT(e, t, E, _) {
  return s => {
    if (null != s.newValue && null != s.oldValue) return e;
    if (null != s.newValue) return t;
    if (null != s.oldValue) return E;
    return _
  }
}