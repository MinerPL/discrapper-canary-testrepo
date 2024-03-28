"use strict";
s.r(t), s.d(t, {
  ACTION_FILTER_ITEMS: function() {
    return en
  },
  AutoModerationRuleChangeStrings: function() {
    return es
  },
  ChannelChangeStrings: function() {
    return x
  },
  CommandPermissionChangeStrings: function() {
    return et
  },
  DEFAULT_FOR_STRINGS_KEY: function() {
    return B
  },
  EmojiChangeStrings: function() {
    return X
  },
  GuildChangeStrings: function() {
    return K
  },
  GuildScheduledEventChangeStrings: function() {
    return q
  },
  GuildScheduledEventExceptionChangeStrings: function() {
    return $
  },
  GuildSoundboardChangeStrings: function() {
    return eE
  },
  HomeSettingsChangeStrings: function() {
    return Y
  },
  IntegrationChangeStrings: function() {
    return z
  },
  InviteChangeStrings: function() {
    return W
  },
  NotRenderedChanges: function() {
    return ea
  },
  OnboardingChangeStrings: function() {
    return w
  },
  OnboardingPromptChangeStrings: function() {
    return k
  },
  RoleChangeStrings: function() {
    return j
  },
  StageInstanceChangeStrings: function() {
    return Q
  },
  StickerChangeStrings: function() {
    return Z
  },
  ThreadChangeStrings: function() {
    return ee
  },
  UserChangeStrings: function() {
    return b
  },
  VoiceChannelStatusStrings: function() {
    return e_
  },
  WebhookChangeStrings: function() {
    return J
  },
  getChangeTitle: function() {
    return eT
  },
  getStringForAddedChannelFlag: function() {
    return ei
  },
  getStringForPermission: function() {
    return eA
  },
  getStringForRemovedChannelFlag: function() {
    return eu
  },
  transformLogs: function() {
    return el
  }
}), s("411104"), s("653041");
var E = s("654861"),
  _ = s.n(E),
  a = s("913527"),
  n = s.n(a),
  T = s("536402"),
  i = s("533800"),
  u = s("149765"),
  A = s("866442"),
  l = s("911969"),
  I = s("933557"),
  r = s("710845"),
  o = s("339085"),
  L = s("236413"),
  d = s("45966"),
  N = s("563534"),
  S = s("776617"),
  g = s("427679"),
  D = s("926491"),
  c = s("387667"),
  G = s("592125"),
  O = s("430824"),
  U = s("699516"),
  C = s("594174"),
  M = s("55935"),
  R = s("630388"),
  f = s("823379"),
  h = s("971130"),
  p = s("709054"),
  m = s("981631"),
  P = s("176505"),
  y = s("273504"),
  v = s("765305"),
  H = s("689938");
let V = new r.default("AuditLogUtils"),
  B = -1,
  F = () => ({
    [m.AuditLogChangeKeys.REASON]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  K = () => ({
    [m.AuditLogChangeKeys.NAME]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
    [m.AuditLogChangeKeys.DESCRIPTION]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
    [m.AuditLogChangeKeys.ICON_HASH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
    [m.AuditLogChangeKeys.SPLASH_HASH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
    [m.AuditLogChangeKeys.DISCOVERY_SPLASH_HASH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
    [m.AuditLogChangeKeys.BANNER_HASH]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
    [m.AuditLogChangeKeys.OWNER_ID]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
    [m.AuditLogChangeKeys.REGION]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
    [m.AuditLogChangeKeys.PREFERRED_LOCALE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
    [m.AuditLogChangeKeys.AFK_CHANNEL_ID]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
    [m.AuditLogChangeKeys.AFK_TIMEOUT]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
    [m.AuditLogChangeKeys.SYSTEM_CHANNEL_ID]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
    [m.AuditLogChangeKeys.RULES_CHANNEL_ID]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
    [m.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
    [m.AuditLogChangeKeys.MFA_LEVEL]: {
      [m.MFALevels.NONE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
      [m.MFALevels.ELEVATED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
    },
    [m.AuditLogChangeKeys.WIDGET_ENABLED]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
    },
    [m.AuditLogChangeKeys.WIDGET_CHANNEL_ID]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
    [m.AuditLogChangeKeys.VERIFICATION_LEVEL]: {
      [m.VerificationLevels.NONE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
      [m.VerificationLevels.LOW]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
      [m.VerificationLevels.MEDIUM]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
      [m.VerificationLevels.HIGH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
      [m.VerificationLevels.VERY_HIGH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
    },
    [m.AuditLogChangeKeys.DEFAULT_MESSAGE_NOTIFICATIONS]: {
      [m.UserNotificationSettings.ALL_MESSAGES]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
      [m.UserNotificationSettings.ONLY_MENTIONS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
    },
    [m.AuditLogChangeKeys.VANITY_URL_CODE]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
    [m.AuditLogChangeKeys.EXPLICIT_CONTENT_FILTER]: {
      [m.GuildExplicitContentFilterTypes.DISABLED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
      [m.GuildExplicitContentFilterTypes.MEMBERS_WITHOUT_ROLES]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
      [m.GuildExplicitContentFilterTypes.ALL_MEMBERS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
    },
    [m.AuditLogChangeKeys.PREMIUM_PROGRESS_BAR_ENABLED]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
    },
    [m.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    [m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
    [m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
    [m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
    [m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
    ...F()
  }),
  x = () => ({
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
    [m.AuditLogChangeKeys.POSITION]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
    [m.AuditLogChangeKeys.TOPIC]: eg(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
    [m.AuditLogChangeKeys.BITRATE]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
    [m.AuditLogChangeKeys.RTC_REGION_OVERRIDE]: eg(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
    [m.AuditLogChangeKeys.USER_LIMIT]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
    [m.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [m.AuditLogChangeKeys.PERMISSIONS_RESET]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
    [m.AuditLogChangeKeys.PERMISSIONS_GRANTED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
    [m.AuditLogChangeKeys.PERMISSIONS_DENIED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
    [m.AuditLogChangeKeys.REASON]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
    [m.AuditLogChangeKeys.NSFW]: {
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
    },
    [m.AuditLogChangeKeys.TYPE]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
    [m.AuditLogChangeKeys.VIDEO_QUALITY_MODE]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
    [m.AuditLogChangeKeys.DEFAULT_AUTO_ARCHIVE_DURATION]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE),
    [m.AuditLogChangeKeys.FLAGS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_FLAGS_CHANGE,
    [m.AuditLogChangeKeys.AVAILABLE_TAG_ADD]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_ADD,
    [m.AuditLogChangeKeys.AVAILABLE_TAG_EDIT]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_UPDATE,
    [m.AuditLogChangeKeys.AVAILABLE_TAG_DELETE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_AVAILABLE_TAGS_DELETE
  }),
  b = () => ({
    [m.AuditLogChangeKeys.NICK]: eg(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
    [m.AuditLogChangeKeys.DEAF]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
    },
    [m.AuditLogChangeKeys.MUTE]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
    },
    [m.AuditLogChangeKeys.ROLES_REMOVE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
    [m.AuditLogChangeKeys.ROLES_ADD]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
    [m.AuditLogChangeKeys.PRUNE_DELETE_DAYS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
    [m.AuditLogChangeKeys.COMMUNICATION_DISABLED_UNTIL]: eg(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
    [m.AuditLogChangeKeys.BYPASSES_VERIFICATION]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
    },
    [m.AuditLogChangeKeys.AUTO_MODERATION_TRIGGERED_RULE_NAME]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
    ...F()
  }),
  j = () => ({
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
    [m.AuditLogChangeKeys.DESCRIPTION]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    [m.AuditLogChangeKeys.PERMISSIONS_GRANTED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
    [m.AuditLogChangeKeys.PERMISSIONS_DENIED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
    [m.AuditLogChangeKeys.COLOR]: {
      "#000000": H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
      [B]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
    },
    [m.AuditLogChangeKeys.HOIST]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
    },
    [m.AuditLogChangeKeys.MENTIONABLE]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
    },
    [m.AuditLogChangeKeys.ICON_HASH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
    [m.AuditLogChangeKeys.UNICODE_EMOJI]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
    ...F()
  }),
  k = () => ({
    ...F(),
    [m.AuditLogChangeKeys.TITLE]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_TITLE_CREATE
    },
    [m.AuditLogChangeKeys.DESCRIPTION]: e => {
      let {
        oldValue: t,
        newValue: s
      } = e;
      return null != t ? (0 === t.length && (t = H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE), H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CHANGE.format({
        oldValue: t,
        newValue: s
      })) : H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DESCRIPTION_CREATE.format({
        newValue: s
      })
    },
    [m.AuditLogChangeKeys.OPTIONS]: () => H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_PROMPT_CHANGED_OPTIONS,
    [m.AuditLogChangeKeys.SINGLE_SELECT]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_SINGLE_SELECT,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_MULTI_SELECT
    },
    [m.AuditLogChangeKeys.REQUIRED]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_REQUIRED,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_OPTIONAL
    }
  }),
  w = () => ({
    ...F(),
    [m.AuditLogChangeKeys.DEFAULT_CHANNEL_IDS]: e => {
      let {
        newValue: t
      } = e;
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DEFAULT_CHANNEL_IDS.format({
        count: t.length
      })
    },
    [m.AuditLogChangeKeys.ENABLE_DEFAULT_CHANNELS]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_DEFAULT_CHANNELS,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_DEFAULT_CHANNELS
    },
    [m.AuditLogChangeKeys.ENABLE_ONBOARDING_PROMPTS]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE_PROMPTS,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE_PROMPTS
    },
    [m.AuditLogChangeKeys.ENABLED]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_ENABLE,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_DISABLE
    }
  }),
  Y = () => ({
    ...F(),
    [m.AuditLogChangeKeys.WELCOME_MESSAGE]: () => H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_WELCOME_MESSAGE,
    [m.AuditLogChangeKeys.NEW_MEMBER_ACTIONS]: () => H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_NEW_MEMBER_ACTIONS,
    [m.AuditLogChangeKeys.RESOURCE_CHANNELS]: () => H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CHANGED_RESOURCE_CHANNELS
  }),
  W = () => ({
    [m.AuditLogChangeKeys.CODE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
    [m.AuditLogChangeKeys.CHANNEL_ID]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
    [m.AuditLogChangeKeys.MAX_USES]: {
      0: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
      [B]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
    },
    [m.AuditLogChangeKeys.MAX_AGE]: {
      0: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
      [B]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
    },
    [m.AuditLogChangeKeys.TEMPORARY]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
    },
    [m.AuditLogChangeKeys.FLAGS]: e => {
      let {
        newValue: t
      } = e;
      return function(e) {
        let {
          newValue: t
        } = e;
        return t.map(e => (function(e) {
          if (e === i.GuildInviteFlags.IS_GUEST_INVITE) return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_INVITE_GUEST_INVITE;
          return null
        })(e)).filter(f.isNotNullish)
      }({
        newValue: t
      })
    },
    ...F()
  }),
  J = () => ({
    [m.AuditLogChangeKeys.CHANNEL_ID]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
    [m.AuditLogChangeKeys.AVATAR_HASH]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
    [m.AuditLogChangeKeys.REASON]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  X = () => ({
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
    ...F()
  }),
  Z = () => ({
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
    [m.AuditLogChangeKeys.TAGS]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
    [m.AuditLogChangeKeys.DESCRIPTION]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
    ...F()
  }),
  z = () => ({
    [m.AuditLogChangeKeys.ENABLE_EMOTICONS]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
    },
    [m.AuditLogChangeKeys.EXPIRE_BEHAVIOR]: {
      0: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
      1: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
    },
    [m.AuditLogChangeKeys.EXPIRE_GRACE_PERIOD]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
    ...F()
  }),
  Q = () => ({
    [m.AuditLogChangeKeys.TOPIC]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
    [m.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [v.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [v.GuildScheduledEventPrivacyLevel.PUBLIC]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    ...F()
  }),
  q = () => ({
    [m.AuditLogChangeKeys.NAME]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
    [m.AuditLogChangeKeys.DESCRIPTION]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
    [m.AuditLogChangeKeys.PRIVACY_LEVEL]: {
      [v.GuildScheduledEventPrivacyLevel.GUILD_ONLY]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
      [v.GuildScheduledEventPrivacyLevel.PUBLIC]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
    },
    [m.AuditLogChangeKeys.STATUS]: {
      [v.GuildScheduledEventStatus.SCHEDULED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
      [v.GuildScheduledEventStatus.ACTIVE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
      [v.GuildScheduledEventStatus.COMPLETED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
      [v.GuildScheduledEventStatus.CANCELED]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
    },
    [m.AuditLogChangeKeys.ENTITY_TYPE]: {
      [v.GuildScheduledEventEntityTypes.NONE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
      [v.GuildScheduledEventEntityTypes.STAGE_INSTANCE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
      [v.GuildScheduledEventEntityTypes.VOICE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
      [v.GuildScheduledEventEntityTypes.EXTERNAL]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
    },
    [m.AuditLogChangeKeys.CHANNEL_ID]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
    [m.AuditLogChangeKeys.LOCATION]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
    [m.AuditLogChangeKeys.IMAGE_HASH]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_REMOVE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_IMAGE_HASH_CHANGE),
    ...F()
  }),
  $ = () => ({
    [m.AuditLogChangeKeys.SCHEDULED_START_TIME]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_REMOVED, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_START_TIME_CHANGE),
    [m.AuditLogChangeKeys.SCHEDULED_END_TIME]: eS(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_REMOVED, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_SCHEDULED_END_TIME_CHANGE),
    [m.AuditLogChangeKeys.IS_CANCELED]: e => {
      if (null != e.oldValue || !0 === e.newValue) {
        if (!e.oldValue && e.newValue) return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_CANCELED;
        if (e.oldValue && !e.newValue) return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_EXCEPTION_IS_CANCELED_RESTORED
      }
      return ""
    },
    ...F()
  }),
  ee = () => ({
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
    [m.AuditLogChangeKeys.ARCHIVED]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
    },
    [m.AuditLogChangeKeys.LOCKED]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
    },
    [m.AuditLogChangeKeys.INVITABLE]: {
      true: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
      false: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
    },
    [m.AuditLogChangeKeys.AUTO_ARCHIVE_DURATION]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
    [m.AuditLogChangeKeys.RATE_LIMIT_PER_USER]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
    [m.AuditLogChangeKeys.FLAGS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_FLAGS_CHANGE,
    ...F()
  }),
  et = e => {
    let t = {
      ...F()
    };
    return null == e || e.forEach(e => {
      e.newValue ? e.newValue.permission ? t[e.key] = H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : t[e.key] = H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : t[e.key] = H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED
    }), t
  },
  es = () => ({
    [m.AuditLogChangeKeys.NAME]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NAME_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_TYPE_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EVENT_TYPE_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ACTIONS_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_ENABLED]: e => {
      var t;
      return !0 === (null !== (t = e.newValue) && void 0 !== t ? t : e.oldValue) ? H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ENABLED_UPDATE : H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DISABLED_UPDATE
    },
    [m.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_ROLES_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_EXEMPT_CHANNELS_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_UPDATE,
    [m.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_KEYWORDS,
    [m.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_KEYWORDS,
    [m.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_REGEX_PATTERNS,
    [m.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_REGEX_PATTERNS,
    [m.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_ADD_ALLOW_LIST,
    [m.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_REMOVE_ALLOW_LIST,
    ...F()
  }),
  eE = () => ({
    [m.AuditLogChangeKeys.NAME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_NAME_CHANGE),
    [m.AuditLogChangeKeys.VOLUME]: eN(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_VOLUME_CHANGE),
    [m.AuditLogChangeKeys.EMOJI_NAME]: eg(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REPLACE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_NAME_REMOVE),
    [m.AuditLogChangeKeys.EMOJI_ID]: eg(H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REPLACE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_CREATE, H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_EMOJI_ID_REMOVE),
    ...F()
  }),
  e_ = () => ({
    [m.AuditLogChangeKeys.STATUS]: H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_STATUS_CREATE,
    ...F()
  }),
  ea = {
    [m.AuditLogTargetTypes.CHANNEL]: {
      [m.AuditLogChangeKeys.ID]: !0,
      [m.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [m.AuditLogTargetTypes.CHANNEL_OVERWRITE]: {
      [m.AuditLogChangeKeys.TYPE]: !0,
      [m.AuditLogChangeKeys.ID]: !0,
      [m.AuditLogChangeKeys.PERMISSION_OVERWRITES]: !0
    },
    [m.AuditLogTargetTypes.INVITE]: {
      [m.AuditLogChangeKeys.INVITER_ID]: !0,
      [m.AuditLogChangeKeys.USES]: !0
    },
    [m.AuditLogTargetTypes.WEBHOOK]: {
      [m.AuditLogChangeKeys.TYPE]: !0,
      [m.AuditLogChangeKeys.APPLICATION_ID]: !0
    },
    [m.AuditLogTargetTypes.INTEGRATION]: {
      [m.AuditLogChangeKeys.TYPE]: !0
    },
    [m.AuditLogTargetTypes.THREAD]: {
      [m.AuditLogChangeKeys.ID]: !0,
      [m.AuditLogChangeKeys.TYPE]: !0
    },
    [m.AuditLogTargetTypes.STICKER]: {
      [m.AuditLogChangeKeys.ID]: !0,
      [m.AuditLogChangeKeys.TYPE]: !0,
      [m.AuditLogChangeKeys.ASSET]: !0,
      [m.AuditLogChangeKeys.FORMAT_TYPE]: !0,
      [m.AuditLogChangeKeys.AVAILABLE]: !0,
      [m.AuditLogChangeKeys.GUILD_ID]: !0
    },
    [m.AuditLogTargetTypes.GUILD_HOME]: {
      [m.AuditLogChangeKeys.ENTITY_TYPE]: !0
    },
    [m.AuditLogTargetTypes.GUILD_ONBOARDING]: {
      [m.AuditLogChangeKeys.PROMPTS]: !0
    },
    [m.AuditLogTargetTypes.GUILD_SOUNDBOARD]: {
      [m.AuditLogChangeKeys.ID]: !0,
      [m.AuditLogChangeKeys.SOUND_ID]: !0
    }
  },
  en = () => [{
    value: m.AuditLogActions.ALL,
    label: H.default.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
    valueLabel: H.default.Messages.GUILD_SETTINGS_FILTER_ALL
  }, {
    value: m.AuditLogActions.GUILD_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
  }, {
    value: m.AuditLogActions.CHANNEL_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
  }, {
    value: m.AuditLogActions.CHANNEL_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
  }, {
    value: m.AuditLogActions.CHANNEL_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
  }, {
    value: m.AuditLogActions.CHANNEL_OVERWRITE_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
  }, {
    value: m.AuditLogActions.CHANNEL_OVERWRITE_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
  }, {
    value: m.AuditLogActions.CHANNEL_OVERWRITE_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
  }, {
    value: m.AuditLogActions.MEMBER_KICK,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
  }, {
    value: m.AuditLogActions.MEMBER_PRUNE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
  }, {
    value: m.AuditLogActions.MEMBER_BAN_ADD,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
  }, {
    value: m.AuditLogActions.MEMBER_BAN_REMOVE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
  }, {
    value: m.AuditLogActions.MEMBER_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
  }, {
    value: m.AuditLogActions.MEMBER_ROLE_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
  }, {
    value: m.AuditLogActions.MEMBER_MOVE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
  }, {
    value: m.AuditLogActions.MEMBER_DISCONNECT,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
  }, {
    value: m.AuditLogActions.BOT_ADD,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
  }, {
    value: m.AuditLogActions.THREAD_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
  }, {
    value: m.AuditLogActions.THREAD_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
  }, {
    value: m.AuditLogActions.THREAD_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
  }, {
    value: m.AuditLogActions.ROLE_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
  }, {
    value: m.AuditLogActions.ROLE_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
  }, {
    value: m.AuditLogActions.ROLE_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
  }, {
    value: m.AuditLogActions.ONBOARDING_PROMPT_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_CREATE
  }, {
    value: m.AuditLogActions.ONBOARDING_PROMPT_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_UPDATE
  }, {
    value: m.AuditLogActions.ONBOARDING_PROMPT_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_PROMPT_DELETE
  }, {
    value: m.AuditLogActions.ONBOARDING_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_CREATE
  }, {
    value: m.AuditLogActions.ONBOARDING_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_ONBOARDING_UPDATE
  }, {
    value: m.AuditLogActions.HOME_SETTINGS_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_CREATE
  }, {
    value: m.AuditLogActions.HOME_SETTINGS_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_HOME_SETTINGS_UPDATE
  }, {
    value: m.AuditLogActions.INVITE_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
  }, {
    value: m.AuditLogActions.INVITE_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
  }, {
    value: m.AuditLogActions.INVITE_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
  }, {
    value: m.AuditLogActions.WEBHOOK_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
  }, {
    value: m.AuditLogActions.WEBHOOK_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
  }, {
    value: m.AuditLogActions.WEBHOOK_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
  }, {
    value: m.AuditLogActions.EMOJI_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
  }, {
    value: m.AuditLogActions.EMOJI_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
  }, {
    value: m.AuditLogActions.EMOJI_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
  }, {
    value: m.AuditLogActions.MESSAGE_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
  }, {
    value: m.AuditLogActions.MESSAGE_BULK_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
  }, {
    value: m.AuditLogActions.MESSAGE_PIN,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
  }, {
    value: m.AuditLogActions.MESSAGE_UNPIN,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
  }, {
    value: m.AuditLogActions.INTEGRATION_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
  }, {
    value: m.AuditLogActions.INTEGRATION_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
  }, {
    value: m.AuditLogActions.INTEGRATION_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
  }, {
    value: m.AuditLogActions.STICKER_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
  }, {
    value: m.AuditLogActions.STICKER_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
  }, {
    value: m.AuditLogActions.STICKER_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
  }, {
    value: m.AuditLogActions.STAGE_INSTANCE_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
  }, {
    value: m.AuditLogActions.STAGE_INSTANCE_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
  }, {
    value: m.AuditLogActions.STAGE_INSTANCE_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
  }, {
    value: m.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
  }, {
    value: m.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
  }, {
    value: m.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
  }, {
    value: m.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
  }, {
    value: m.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
  }, {
    value: m.AuditLogActions.AUTO_MODERATION_RULE_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_CREATE
  }, {
    value: m.AuditLogActions.AUTO_MODERATION_RULE_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_UPDATE
  }, {
    value: m.AuditLogActions.AUTO_MODERATION_RULE_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTOMOD_RULE_DELETE
  }, {
    value: m.AuditLogActions.GUILD_HOME_FEATURE_ITEM,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_FEATURE_ITEM
  }, {
    value: m.AuditLogActions.GUILD_HOME_REMOVE_ITEM,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_HOME_REMOVE_ITEM
  }, {
    value: m.AuditLogActions.SOUNDBOARD_SOUND_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_CREATE
  }, {
    value: m.AuditLogActions.SOUNDBOARD_SOUND_UPDATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_UPDATE
  }, {
    value: m.AuditLogActions.SOUNDBOARD_SOUND_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_SOUNDBOARD_SOUND_DELETE
  }, {
    value: m.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_CREATE
  }, {
    value: m.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE,
    label: H.default.Messages.GUILD_SETTINGS_ACTION_FILTER_VOICE_CHANNEL_STATUS_DELETE
  }];

function eT(e) {
  switch (e.action) {
    case m.AuditLogActions.GUILD_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
    case m.AuditLogActions.CHANNEL_CREATE:
      let t = null != e.changes ? e.changes.find(e => e.key === m.AuditLogChangeKeys.TYPE) : null;
      if (null == t) throw Error("[AuditLog] Could not find type change for channel create");
      switch (t.newValue) {
        case m.ChannelTypes.GUILD_STAGE_VOICE:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
        case m.ChannelTypes.GUILD_VOICE:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
        case m.ChannelTypes.GUILD_CATEGORY:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
        default:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE
      }
    case m.AuditLogActions.CHANNEL_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
    case m.AuditLogActions.CHANNEL_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
    case m.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
    case m.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
    case m.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
    case m.AuditLogActions.MEMBER_KICK:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
    case m.AuditLogActions.MEMBER_PRUNE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
    case m.AuditLogActions.MEMBER_BAN_ADD:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_ADD;
    case m.AuditLogActions.MEMBER_BAN_REMOVE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
    case m.AuditLogActions.MEMBER_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
    case m.AuditLogActions.MEMBER_ROLE_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
    case m.AuditLogActions.MEMBER_MOVE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
    case m.AuditLogActions.MEMBER_DISCONNECT:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
    case m.AuditLogActions.BOT_ADD:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
    case m.AuditLogActions.ROLE_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
    case m.AuditLogActions.ROLE_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
    case m.AuditLogActions.ROLE_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
    case m.AuditLogActions.INVITE_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
    case m.AuditLogActions.INVITE_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
    case m.AuditLogActions.INVITE_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
    case m.AuditLogActions.WEBHOOK_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
    case m.AuditLogActions.WEBHOOK_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
    case m.AuditLogActions.WEBHOOK_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
    case m.AuditLogActions.EMOJI_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
    case m.AuditLogActions.EMOJI_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
    case m.AuditLogActions.EMOJI_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
    case m.AuditLogActions.STICKER_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
    case m.AuditLogActions.STICKER_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
    case m.AuditLogActions.STICKER_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
    case m.AuditLogActions.MESSAGE_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
    case m.AuditLogActions.MESSAGE_BULK_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
    case m.AuditLogActions.MESSAGE_PIN:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
    case m.AuditLogActions.MESSAGE_UNPIN:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
    case m.AuditLogActions.INTEGRATION_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
    case m.AuditLogActions.INTEGRATION_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
    case m.AuditLogActions.INTEGRATION_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
    case m.AuditLogActions.STAGE_INSTANCE_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
    case m.AuditLogActions.STAGE_INSTANCE_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
    case m.AuditLogActions.STAGE_INSTANCE_DELETE:
      if (null != e.userId) return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
    case m.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CREATE;
    case m.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_UPDATE;
    case m.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DELETE;
    case m.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case m.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_UPDATE;
    case m.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_DELETE;
    case m.AuditLogActions.THREAD_CREATE:
      let s = null != e.changes ? e.changes.find(e => e.key === m.AuditLogChangeKeys.TYPE) : null;
      if (null == s) throw Error("[AuditLog] Could not find type change for thread create");
      switch (s.newValue) {
        case m.ChannelTypes.PRIVATE_THREAD:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_PRIVATE_THREAD_CREATE;
        case m.ChannelTypes.ANNOUNCEMENT_THREAD:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ANNOUNCEMENT_THREAD_CREATE;
        default:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_CREATE
      }
    case m.AuditLogActions.THREAD_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UPDATE;
    case m.AuditLogActions.THREAD_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_DELETE;
    case m.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
    case m.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
    case m.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
      var E;
      if ((null === (E = e.options) || void 0 === E ? void 0 : E.auto_moderation_rule_trigger_type) === y.AutomodTriggerType.USER_PROFILE.toString()) return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAGGED_USER_PROFILE;
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
    case m.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
    case m.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_QUARANTINE_USER;
    case m.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
      return H.default.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
    case m.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
      return H.default.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
    case m.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_CREATE;
    case m.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_UPDATE;
    case m.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_DELETE;
    case m.AuditLogActions.ONBOARDING_PROMPT_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_CREATE;
    case m.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_UPDATE;
    case m.AuditLogActions.ONBOARDING_PROMPT_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_DELETE;
    case m.AuditLogActions.ONBOARDING_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_CREATE;
    case m.AuditLogActions.ONBOARDING_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ONBOARDING_UPDATE;
    case m.AuditLogActions.HOME_SETTINGS_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_CREATE;
    case m.AuditLogActions.HOME_SETTINGS_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_HOME_SETTINGS_UPDATE;
    case m.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
      let _ = null != e.changes ? e.changes.find(e => e.key === m.AuditLogChangeKeys.ENTITY_TYPE) : null;
      if (null == _) return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM;
      switch (_.newValue) {
        case T.GuildFeedItemTypes.MESSAGE:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_MESSAGE;
        case T.GuildFeedItemTypes.FORUM_POST:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_FORUM_POST;
        default:
          return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_FEATURE_ITEM
      }
    case m.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_ITEM;
    case m.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_CREATED;
    case m.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_UPDATED;
    case m.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SOUNDBOARD_SOUND_DELETED;
    case m.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_CREATED;
    case m.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_VOICE_CHANNEL_STATUS_DELETED;
    default:
      return null
  }
}

function ei(e) {
  switch (e) {
    case P.ChannelFlags.GUILD_FEED_REMOVED:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_REMOVE_CHANNEL;
    case P.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_REMOVE_CHANNEL;
    case P.ChannelFlags.PINNED:
      return H.default.Messages.PINNED_POST
  }
  return null
}

function eu(e) {
  switch (e) {
    case P.ChannelFlags.GUILD_FEED_REMOVED:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_HOME_UNREMOVE_CHANNEL;
    case P.ChannelFlags.ACTIVE_CHANNELS_REMOVED:
      return H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ACTIVE_CHANNELS_UNREMOVE_CHANNEL;
    case P.ChannelFlags.PINNED:
      return H.default.Messages.UNPINNED_POST
  }
  return null
}

function eA(e, t) {
  switch (e) {
    case m.Permissions.CREATE_INSTANT_INVITE:
      return H.default.Messages.CREATE_INSTANT_INVITE;
    case m.Permissions.KICK_MEMBERS:
      return H.default.Messages.KICK_MEMBERS;
    case m.Permissions.BAN_MEMBERS:
      return H.default.Messages.BAN_MEMBERS;
    case m.Permissions.ADMINISTRATOR:
      return H.default.Messages.ADMINISTRATOR;
    case m.Permissions.MANAGE_CHANNELS:
      if (t.targetType === m.AuditLogTargetTypes.CHANNEL || t.targetType === m.AuditLogTargetTypes.CHANNEL_OVERWRITE) return H.default.Messages.MANAGE_CHANNEL;
      return H.default.Messages.MANAGE_CHANNELS;
    case m.Permissions.MANAGE_GUILD:
      return H.default.Messages.MANAGE_SERVER;
    case m.Permissions.VIEW_GUILD_ANALYTICS:
      return H.default.Messages.VIEW_GUILD_ANALYTICS;
    case m.Permissions.CHANGE_NICKNAME:
      return H.default.Messages.CHANGE_NICKNAME;
    case m.Permissions.MANAGE_NICKNAMES:
      return H.default.Messages.MANAGE_NICKNAMES;
    case m.Permissions.MANAGE_ROLES:
      return H.default.Messages.MANAGE_ROLES;
    case m.Permissions.MANAGE_WEBHOOKS:
      return H.default.Messages.MANAGE_WEBHOOKS;
    case m.Permissions.CREATE_GUILD_EXPRESSIONS:
      return H.default.Messages.CREATE_EXPRESSIONS;
    case m.Permissions.MANAGE_GUILD_EXPRESSIONS:
      return H.default.Messages.MANAGE_EXPRESSIONS;
    case m.Permissions.VIEW_AUDIT_LOG:
      return H.default.Messages.VIEW_AUDIT_LOG;
    case m.Permissions.VIEW_CHANNEL:
      return H.default.Messages.READ_MESSAGES;
    case m.Permissions.SEND_MESSAGES:
      return H.default.Messages.SEND_MESSAGES;
    case m.Permissions.SEND_TTS_MESSAGES:
      return H.default.Messages.SEND_TTS_MESSAGES;
    case m.Permissions.USE_APPLICATION_COMMANDS:
      return H.default.Messages.USE_APPLICATION_COMMANDS;
    case m.Permissions.MANAGE_MESSAGES:
      return H.default.Messages.MANAGE_MESSAGES;
    case m.Permissions.EMBED_LINKS:
      return H.default.Messages.EMBED_LINKS;
    case m.Permissions.ATTACH_FILES:
      return H.default.Messages.ATTACH_FILES;
    case m.Permissions.READ_MESSAGE_HISTORY:
      return H.default.Messages.READ_MESSAGE_HISTORY;
    case m.Permissions.MENTION_EVERYONE:
      return H.default.Messages.MENTION_EVERYONE;
    case m.Permissions.USE_EXTERNAL_EMOJIS:
      return H.default.Messages.USE_EXTERNAL_EMOJIS;
    case m.Permissions.USE_EXTERNAL_STICKERS:
      return H.default.Messages.USE_EXTERNAL_STICKERS;
    case m.Permissions.ADD_REACTIONS:
      return H.default.Messages.ADD_REACTIONS;
    case m.Permissions.CONNECT:
      return H.default.Messages.CONNECT;
    case m.Permissions.SPEAK:
      return H.default.Messages.SPEAK;
    case m.Permissions.MUTE_MEMBERS:
      return H.default.Messages.MUTE_MEMBERS;
    case m.Permissions.DEAFEN_MEMBERS:
      return H.default.Messages.DEAFEN_MEMBERS;
    case m.Permissions.MOVE_MEMBERS:
      return H.default.Messages.MOVE_MEMBERS;
    case m.Permissions.USE_VAD:
      return H.default.Messages.USE_VAD;
    case m.Permissions.PRIORITY_SPEAKER:
      return H.default.Messages.PRIORITY_SPEAKER;
    case m.Permissions.STREAM:
      return H.default.Messages.VIDEO;
    case m.Permissions.REQUEST_TO_SPEAK:
      return H.default.Messages.REQUEST_TO_SPEAK;
    case m.Permissions.CREATE_EVENTS:
      return H.default.Messages.CREATE_EVENTS;
    case m.Permissions.MANAGE_EVENTS:
      return H.default.Messages.MANAGE_EVENTS;
    case m.Permissions.CREATE_PUBLIC_THREADS:
      return H.default.Messages.CREATE_PUBLIC_THREADS;
    case m.Permissions.CREATE_PRIVATE_THREADS:
      return H.default.Messages.CREATE_PRIVATE_THREADS;
    case m.Permissions.SEND_MESSAGES_IN_THREADS:
      return H.default.Messages.SEND_MESSAGES_IN_THREADS;
    case m.Permissions.MANAGE_THREADS:
      return H.default.Messages.MANAGE_THREADS;
    case m.Permissions.MODERATE_MEMBERS:
      return H.default.Messages.MODERATE_MEMBER;
    case m.Permissions.USE_CLYDE_AI:
      return H.default.Messages.ROLE_PERMISSIONS_USE_CLYDE_AI;
    case m.Permissions.SET_VOICE_CHANNEL_STATUS:
      return H.default.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE
  }
  return null
}

function el(e, t) {
  let s = [];
  return e.forEach(e => {
    let E = function(e, t) {
        switch (e.targetType) {
          case m.AuditLogTargetTypes.GUILD:
          case m.AuditLogTargetTypes.GUILD_HOME:
            return t;
          case m.AuditLogTargetTypes.CHANNEL:
          case m.AuditLogTargetTypes.CHANNEL_OVERWRITE:
            return eL(e, m.AuditLogChangeKeys.NAME, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
          case m.AuditLogTargetTypes.USER:
            return eL(e, m.AuditLogChangeKeys.NICK, e => C.default.getUser(e), e => e);
          case m.AuditLogTargetTypes.ROLE:
            return eL(e, m.AuditLogChangeKeys.NAME, e => O.default.getRole(t.id, e), e => e.name);
          case m.AuditLogTargetTypes.ONBOARDING_PROMPT:
            let s = eL(e, m.AuditLogChangeKeys.ID, e => d.default.getOnboardingPrompt(e), e => e.title);
            return null != s ? s : H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PROMPT_EMPTY_VALUE;
          case m.AuditLogTargetTypes.GUILD_ONBOARDING:
            return t;
          case m.AuditLogTargetTypes.INVITE:
            return eL(e, m.AuditLogChangeKeys.CODE, m.NOOP_NULL);
          case m.AuditLogTargetTypes.INTEGRATION:
            return eL(e, m.AuditLogChangeKeys.TYPE, e => S.default.integrations.find(t => t.id === e), e => e.name);
          case m.AuditLogTargetTypes.WEBHOOK:
            return eL(e, m.AuditLogChangeKeys.NAME, e => S.default.webhooks.find(t => t.id === e), e => e.name);
          case m.AuditLogTargetTypes.EMOJI:
            return eL(e, m.AuditLogChangeKeys.NAME, e => o.default.getGuildEmoji(t.id).find(t => t.id === e), e => e.name);
          case m.AuditLogTargetTypes.STICKER:
            return eL(e, m.AuditLogChangeKeys.NAME, e => D.default.getStickerById(e), e => e.name);
          case m.AuditLogTargetTypes.STAGE_INSTANCE:
            return eL(e, m.AuditLogChangeKeys.TOPIC, e => {
              var s;
              return null === (s = Object.values(g.default.getStageInstancesByGuild(t.id))) || void 0 === s ? void 0 : s.find(t => t.id === e)
            }, e => e.topic);
          case m.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT:
          case m.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION:
            return eL(e, m.AuditLogChangeKeys.NAME, e => S.default.guildScheduledEvents.find(t => t.id === e), e => e.name);
          case m.AuditLogTargetTypes.THREAD:
            return eL(e, m.AuditLogChangeKeys.NAME, e => S.default.threads.find(t => t.id === e), e => e.name);
          case m.AuditLogTargetTypes.APPLICATION_COMMAND:
            if (e.targetId === e.options.application_id) {
              let t = S.default.integrations.find(t => t.application_id === e.targetId);
              if (null != t) return t.name;
              return e.targetId
            }
            return eL(e, m.AuditLogChangeKeys.NAME, e => S.default.applicationCommands.find(t => t.id === e), e => {
              let t = null != e.name_localized && "" !== e.name_localized ? e.name_localized : e.name;
              return e.type === l.ApplicationCommandType.CHAT ? "/⁠".concat(t) : t
            });
          case m.AuditLogTargetTypes.AUTO_MODERATION_RULE:
            return eL(e, m.AuditLogChangeKeys.NAME, e => S.default.automodRules.find(t => t.id === e), e => e.name);
          case m.AuditLogTargetTypes.GUILD_SOUNDBOARD:
            return eL(e, m.AuditLogChangeKeys.NAME, m.NOOP_NULL);
          case m.AuditLogTargetTypes.HOME_SETTINGS:
            return eL(e, m.AuditLogChangeKeys.GUILD_ID, e => N.default.getSettings(e), () => H.default.Messages.SERVER_GUIDE, t.id);
          case m.AuditLogTargetTypes.VOICE_CHANNEL_STATUS:
            return eL(e, m.AuditLogChangeKeys.STATUS, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
          default:
            return V.warn("Unknown targetType for log", e), null
        }
      }(e, t),
      a = C.default.getUser(e.userId);
    if (null != E || [m.AuditLogActions.MEMBER_PRUNE, m.AuditLogActions.MEMBER_DISCONNECT, m.AuditLogActions.MEMBER_MOVE, m.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED, m.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED].includes(e.action)) {
      if (null != (e = (e = (e = e.set("user", a)).set("target", E)).set("options", function(e) {
          if (null != e.options) {
            let s = {
              ...e.options
            };
            switch (e.options.type) {
              case m.AuditLogSubtargetTypes.USER:
                s.subtarget = ed(e.options.id, e => C.default.getUser(e), e => e.tag);
                break;
              case m.AuditLogSubtargetTypes.ROLE:
                s.subtarget = ed(e.options.role_name, m.NOOP_NULL)
            }
            if (null != e.options.channel_id && (s.channel = eL(e, "", e => G.default.getChannel(e), e => e, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), null != e.options.event_exception_id) {
              var t;
              let E = S.default.guildScheduledEvents.find(t => t.id === e.targetId),
                _ = null == E ? void 0 : E.guild_scheduled_event_exceptions.find(t => t.event_exception_id === e.options.event_exception_id);
              s.subtarget = (0, M.dateFormat)(n()(p.default.extractTimestamp(null !== (t = null == _ ? void 0 : _.event_exception_id) && void 0 !== t ? t : "0")), "LL")
            }
            return s
          }
          return e.options
        }(e))).changes) {
        let s = [];
        e.changes.forEach(E => {
          let a = function(e, t, s) {
            if (t.action === m.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) {
              let t = e.newValue || e.oldValue;
              switch (t.type) {
                case m.ApplicationCommandPermissionTypes.ROLE:
                  e.subtarget = ed(t.id, e => O.default.getRole(s.id, e), e => e.name);
                  break;
                case m.ApplicationCommandPermissionTypes.USER:
                  e.subtarget = ed(t.id, e => C.default.getUser(e), e => e.tag);
                  break;
                case m.ApplicationCommandPermissionTypes.CHANNEL:
                  t.id === _()(s.id).subtract(1).toString() ? e.subtarget = H.default.Messages.ALL_CHANNELS : e.subtarget = ed(t.id, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0))
              }
              return e
            }
            switch (e.key) {
              case m.AuditLogChangeKeys.OWNER_ID:
                return eo(e, e => C.default.getUser(e));
              case m.AuditLogChangeKeys.CHANNEL_ID:
              case m.AuditLogChangeKeys.AFK_CHANNEL_ID:
              case m.AuditLogChangeKeys.SYSTEM_CHANNEL_ID:
              case m.AuditLogChangeKeys.RULES_CHANNEL_ID:
              case m.AuditLogChangeKeys.PUBLIC_UPDATES_CHANNEL_ID:
                return eo(e, e => G.default.getChannel(e), e => (0, I.computeChannelName)(e, C.default, U.default, !0));
              case m.AuditLogChangeKeys.AFK_TIMEOUT:
                return eo(e, e => e / 60);
              case m.AuditLogChangeKeys.BITRATE:
                return eo(e, e => e / 1e3);
              case m.AuditLogChangeKeys.COLOR:
                return eo(e, e => (0, A.int2hex)(e).toUpperCase());
              case m.AuditLogChangeKeys.THEME_COLORS:
                return eo(e, e => "".concat((0, A.int2hex)(e[0]).toUpperCase(), ", ").concat((0, A.int2hex)(e[1]).toUpperCase()));
              case m.AuditLogChangeKeys.MAX_AGE:
                return eo(e, e => {
                  let t = h.default.getMaxAgeOptions.find(t => {
                    let {
                      value: s
                    } = t;
                    return e === s
                  });
                  return t ? t.label : e
                });
              case m.AuditLogChangeKeys.PERMISSIONS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = eI(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let e = new c.AuditLogChange(m.AuditLogChangeKeys.PERMISSIONS_GRANTED, null, s);
                  t.push(e)
                }
                if (E.length > 0) {
                  let e = new c.AuditLogChange(m.AuditLogChangeKeys.PERMISSIONS_DENIED, null, E);
                  t.push(e)
                }
                return t
              }
              case m.AuditLogChangeKeys.PERMISSIONS_GRANTED:
              case m.AuditLogChangeKeys.PERMISSIONS_DENIED: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = eI(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new c.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let e = new c.AuditLogChange(m.AuditLogChangeKeys.PERMISSIONS_RESET, E, E);
                  t.push(e)
                }
                return t
              }
              case m.AuditLogChangeKeys.FLAGS: {
                let t = [],
                  {
                    added: s,
                    removed: E
                  } = function(e, t) {
                    let s = "number" == typeof e ? e : 0,
                      E = "number" == typeof t ? t : 0,
                      _ = R.removeFlag(E, s),
                      a = R.removeFlag(s, E),
                      n = [],
                      T = [];
                    for (let e in P.ChannelFlags) {
                      let t = P.ChannelFlags[e];
                      R.hasFlag(_, t) && n.push(t), R.hasFlag(a, t) && T.push(t)
                    }
                    return {
                      added: n,
                      removed: T
                    }
                  }(e.oldValue, e.newValue);
                if (s.length > 0) {
                  let E = new c.AuditLogChange(e.key, null, s);
                  t.push(E)
                }
                if (E.length > 0) {
                  let s = new c.AuditLogChange(e.key, E, null);
                  t.push(s)
                }
                return t
              }
              case m.AuditLogChangeKeys.PREFERRED_LOCALE:
                return eo(e, e => {
                  let t = H.default.getAvailableLocales().find(t => t.value === e);
                  return null != t ? t.name : null
                });
              case m.AuditLogChangeKeys.VIDEO_QUALITY_MODE:
                return eo(e, e => e === m.VideoQualityMode.FULL ? H.default.Messages.VIDEO_QUALITY_MODE_FULL : H.default.Messages.VIDEO_QUALITY_MODE_AUTO);
              case m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAGS:
                return function(e) {
                  let t = {
                      [m.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATIONS]: m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                      [m.SystemChannelFlags.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                      [m.SystemChannelFlags.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                      [m.SystemChannelFlags.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: m.AuditLogChangeKeys.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                    },
                    s = [];
                  return Object.values(m.SystemChannelFlags).forEach(E => {
                    let _ = (e.oldValue & E) === E,
                      a = (e.newValue & E) === E;
                    if (_ === a) return;
                    let n = new c.AuditLogChange(t[E], !_, !a);
                    s.push(n)
                  }), s
                }(e);
              case m.AuditLogChangeKeys.AUTO_MODERATION_ACTIONS:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(e => e.type), e => e.map(L.actionTypeToName).join(", "));
                break;
              case m.AuditLogChangeKeys.AUTO_MODERATION_EVENT_TYPE:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, L.eventTypeToName);
                break;
              case m.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_TYPE:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, L.triggerTypeToName);
                break;
              case m.AuditLogChangeKeys.AUTO_MODERATION_TRIGGER_METADATA:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => {
                  if (null != e && "object" == typeof e) return null != e.keyword_filter && Array.isArray(e.keyword_filter) ? H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_TRIGGER_METADATA_KEYWORDS_UPDATE.plainFormat({
                    newValue: e.keyword_filter.map(e => "'".concat(e, "'")).join(", ")
                  }) : JSON.stringify(e);
                  return e
                });
                break;
              case m.AuditLogChangeKeys.AUTO_MODERATION_ADD_KEYWORDS:
              case m.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_KEYWORDS:
              case m.AuditLogChangeKeys.AUTO_MODERATION_ADD_REGEX_PATTERNS:
              case m.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_REGEX_PATTERNS:
              case m.AuditLogChangeKeys.AUTO_MODERATION_ADD_ALLOW_LIST:
              case m.AuditLogChangeKeys.AUTO_MODERATION_REMOVE_ALLOW_LIST:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => null != e && Array.isArray(e) ? e.map(e => "'".concat(e, "'")).join(", ") : JSON.stringify(e));
                break;
              case m.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_CHANNELS:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(G.default.getChannel).filter(e => null != e).map(e => (0, I.computeChannelName)(e, C.default, U.default, !0)), e => null != e && e.length > 0 ? e.join(", ") : H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case m.AuditLogChangeKeys.AUTO_MODERATION_EXEMPT_ROLES:
                if (t.targetType === m.AuditLogTargetTypes.AUTO_MODERATION_RULE) return eo(e, e => e.map(e => O.default.getRole(s.id, e)).filter(e => null != e).map(e => e.name), e => null != e && e.length > 0 ? e.join(", ") : H.default.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTOMOD_RULE_NONE);
                break;
              case m.AuditLogChangeKeys.AVAILABLE_TAGS:
                return function(e) {
                  let {
                    oldValue: t,
                    newValue: s
                  } = e, E = Array.isArray(t) ? t : [], _ = Array.isArray(s) ? s : [];
                  if (0 === E.length && 0 === _.length) return e;
                  let a = {},
                    n = {};
                  if (E.forEach(e => {
                      a[e.id] = e
                    }), _.forEach(e => {
                      n[e.id] = e
                    }), E.length < _.length) {
                    for (let e in n)
                      if (null == a[e]) return new c.AuditLogChange(m.AuditLogChangeKeys.AVAILABLE_TAG_ADD, null, er(n[e]))
                  }
                  if (E.length > _.length) {
                    for (let e in a)
                      if (null == n[e]) return new c.AuditLogChange(m.AuditLogChangeKeys.AVAILABLE_TAG_DELETE, null, er(a[e]))
                  }
                  for (let e in a) {
                    let t = a[e],
                      s = n[e];
                    if ((null == s ? void 0 : s.name) !== t.name || (null == s ? void 0 : s.emoji_id) !== t.emoji_id || (null == s ? void 0 : s.emoji_name) !== t.emoji_name) return new c.AuditLogChange(m.AuditLogChangeKeys.AVAILABLE_TAG_EDIT, er(t), er(s))
                  }
                  return e
                }(e);
              case m.AuditLogChangeKeys.SCHEDULED_START_TIME:
              case m.AuditLogChangeKeys.SCHEDULED_END_TIME:
                return eo(e, e => (0, M.dateFormat)(n()(new Date(e)), "LLLL"))
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

function eI(e, t) {
  let s = u.deserialize("string" == typeof e ? e : 0),
    E = u.deserialize("string" == typeof t ? t : 0),
    _ = u.remove(E, s),
    a = u.remove(s, E),
    n = [],
    T = [];
  for (let e in m.Permissions) {
    let t = m.Permissions[e];
    u.has(_, t) && n.push(t), u.has(a, t) && T.push(t)
  }
  return {
    added: n,
    removed: T
  }
}

function er(e) {
  return null == e ? null : {
    id: e.id,
    name: e.name,
    emojiId: 0 !== e.emoji_id ? e.emoji_id : void 0,
    emojiName: e.emoji_name,
    moderated: e.moderated
  }
}

function eo(e, t, s) {
  let E = e.newValue,
    _ = e.oldValue;
  return null != e.newValue && (E = t(e.newValue), null != s && null != E && (E = s(E))), null != e.oldValue && (_ = t(e.oldValue), null != s && null != _ && (_ = s(_))), new c.AuditLogChange(e.key, _ || e.oldValue, E || e.newValue)
}

function eL(e, t, s, E, _) {
  let a = null,
    n = s(_ = null != _ ? _ : e.targetId);
  if (null != n && null != E && (a = E(n)), null == a) {
    let t = S.default.deletedTargets[e.targetType];
    null != t && null != t[_] && (a = t[_])
  }
  if (null == a && null != e.changes) {
    let s = e.changes.find(e => e.key === t);
    null != s && (a = s.newValue || s.oldValue)
  }
  return null != a ? a : _
}

function ed(e, t, s) {
  let E = e,
    _ = t(e);
  return null != _ && null != s && (E = s(_)), E
}

function eN(e, t) {
  return s => null == s.oldValue ? e : t
}

function eS(e, t) {
  return s => null == s.newValue ? e : t
}

function eg(e, t, s, E) {
  return _ => {
    if (null != _.newValue && null != _.oldValue) return e;
    if (null != _.newValue) return t;
    if (null != _.oldValue) return s;
    return E
  }
}