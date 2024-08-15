E.d(_, {
  Bq: function() {
return F;
  },
  C2: function() {
return V;
  },
  Et: function() {
return g;
  },
  HE: function() {
return H;
  },
  HN: function() {
return h;
  },
  J5: function() {
return w;
  },
  K: function() {
return v;
  },
  ML: function() {
return P;
  },
  N$: function() {
return m;
  },
  N5: function() {
return q;
  },
  QM: function() {
return W;
  },
  _$: function() {
return Q;
  },
  hQ: function() {
return J;
  },
  lR: function() {
return p;
  },
  lU: function() {
return f;
  },
  nm: function() {
return j;
  },
  of: function() {
return X;
  },
  pA: function() {
return b;
  },
  pY: function() {
return Z;
  },
  uB: function() {
return B;
  },
  vc: function() {
return x;
  },
  vm: function() {
return z;
  }
}), E(411104), E(653041);
var s = E(654861),
  T = E.n(s),
  I = E(149765),
  n = E(866442),
  A = E(144830),
  t = E(911969),
  a = E(933557),
  r = E(710845),
  N = E(339085),
  L = E(987707),
  S = E(427679),
  D = E(926491),
  l = E(387667),
  U = E(592125),
  G = E(430824),
  O = E(699516),
  M = E(594174),
  i = E(971130),
  R = E(709054),
  u = E(981631),
  o = E(765305),
  c = E(689938);
let C = new r.Z('AuditLogUtils'),
  g = -1,
  d = () => ({
[u.zUn.REASON]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  Z = () => ({
[u.zUn.NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_NAME_CHANGE,
[u.zUn.DESCRIPTION]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DESCRIPTION_CHANGE),
[u.zUn.ICON_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_ICON_HASH_CHANGE,
[u.zUn.SPLASH_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SPLASH_HASH_CHANGE,
[u.zUn.DISCOVERY_SPLASH_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DISCOVERY_SPLASH_HASH_CHANGE,
[u.zUn.BANNER_HASH]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_REMOVE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_BANNER_HASH_CHANGE),
[u.zUn.OWNER_ID]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_OWNER_ID_CHANGE,
[u.zUn.REGION]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_REGION_CHANGE,
[u.zUn.PREFERRED_LOCALE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREFERRED_LOCALE_CHANGE,
[u.zUn.AFK_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_CHANNEL_ID_CHANGE),
[u.zUn.AFK_TIMEOUT]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_AFK_TIMEOUT_CHANGE,
[u.zUn.SYSTEM_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_DISABLE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_ID_CHANGE),
[u.zUn.RULES_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_RULES_CHANNEL_ID_CHANGE),
[u.zUn.PUBLIC_UPDATES_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATES_CHANNEL_ID_CHANGE),
[u.zUn.MFA_LEVEL]: {
  [u.BpS.NONE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_DISABLED,
  [u.BpS.ELEVATED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_MFA_LEVEL_ENABLED
},
[u.zUn.WIDGET_ENABLED]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_ENABLED,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_DISABLED
},
[u.zUn.WIDGET_CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_DELETE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_WIDGET_CHANNEL_ID_CHANGE),
[u.zUn.VERIFICATION_LEVEL]: {
  [u.sFg.NONE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_NONE,
  [u.sFg.LOW]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_LOW,
  [u.sFg.MEDIUM]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_MEDIUM,
  [u.sFg.HIGH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_HIGH,
  [u.sFg.VERY_HIGH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VERIFICATION_LEVEL_CHANGE_VERY_HIGH
},
[u.zUn.DEFAULT_MESSAGE_NOTIFICATIONS]: {
  [u.bL.ALL_MESSAGES]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ALL_MESSAGES,
  [u.bL.ONLY_MENTIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_DEFAULT_MESSAGE_NOTIFICATIONS_CHANGE_ONLY_MENTIONS
},
[u.zUn.VANITY_URL_CODE]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_DELETE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_VANITY_URL_CODE_CHANGE),
[u.zUn.EXPLICIT_CONTENT_FILTER]: {
  [u.lxg.DISABLED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_DISABLE,
  [u.lxg.MEMBERS_WITHOUT_ROLES]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_MEMBERS_WITHOUT_ROLES,
  [u.lxg.ALL_MEMBERS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_EXPLICIT_CONTENT_FILTER_ALL_MEMBERS
},
[u.zUn.PREMIUM_PROGRESS_BAR_ENABLED]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_ENABLED,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_PREMIUM_PROGRESS_BAR_ENABLED_DISABLED
},
[u.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
[u.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATIONS,
[u.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_PREMIUM_SUBSCRIPTIONS,
[u.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_REMINDER_NOTIFICATIONS,
[u.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_SYSTEM_CHANNEL_JOIN_NOTIFICATION_REPLIES,
...d()
  }),
  P = () => ({
[u.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NAME_CHANGE),
[u.zUn.POSITION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_POSITION_CHANGE),
[u.zUn.TOPIC]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CLEAR),
[u.zUn.BITRATE]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_BITRATE_CHANGE),
[u.zUn.RTC_REGION_OVERRIDE]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CHANGE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RTC_REGION_OVERRIDE_DELETE),
[u.zUn.USER_LIMIT]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_USER_LIMIT_CHANGE),
[u.zUn.RATE_LIMIT_PER_USER]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
[u.zUn.PERMISSIONS_RESET]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_RESET,
[u.zUn.PERMISSIONS_GRANTED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_GRANTED,
[u.zUn.PERMISSIONS_DENIED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_PERMISSION_OVERRIDES_DENIED,
[u.zUn.REASON]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON,
[u.zUn.NSFW]: {
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_DISABLED,
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_NSFW_ENABLED
},
[u.zUn.TYPE]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TYPE_CHANGE),
[u.zUn.VIDEO_QUALITY_MODE]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VIDEO_QUALITY_MODE_CHANGE),
[u.zUn.DEFAULT_AUTO_ARCHIVE_DURATION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DEFAULT_AUTO_ARCHIVE_DURATION_CHANGE)
  }),
  f = () => ({
[u.zUn.NICK]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CHANGE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_NICK_DELETE),
[u.zUn.DEAF]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DEAF_OFF
},
[u.zUn.MUTE]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MUTE_OFF
},
[u.zUn.ROLES_REMOVE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_REMOVE,
[u.zUn.ROLES_ADD]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLES_ADD,
[u.zUn.PRUNE_DELETE_DAYS]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE_DELETE_DAYS,
[u.zUn.COMMUNICATION_DISABLED_UNTIL]: eI(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMUNICATION_DISABLED_UNTIL_REMOVED),
[u.zUn.BYPASSES_VERIFICATION]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BYPASSES_VERIFICATION_OFF
},
[u.zUn.AUTO_MODERATION_TRIGGERED_RULE_NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_TRIGGERED_RULE_NAME_CHANGE,
...d()
  }),
  H = () => ({
[u.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_NAME_CHANGE),
[u.zUn.PERMISSIONS_GRANTED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_GRANTED,
[u.zUn.PERMISSIONS_DENIED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_PERMISSIONS_DENIED,
[u.zUn.COLOR]: {
  '#000000': c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_NONE,
  [g]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_COLOR_IOS
},
[u.zUn.HOIST]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_HOIST_OFF
},
[u.zUn.MENTIONABLE]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_MENTIONABLE_OFF
},
[u.zUn.ICON_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_ICON_HASH_CHANGE,
[u.zUn.UNICODE_EMOJI]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UNICODE_EMOJI_CHANGE,
...d()
  }),
  h = () => ({
[u.zUn.CODE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CODE_CREATE,
[u.zUn.CHANNEL_ID]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CHANNEL_CREATE,
[u.zUn.MAX_USES]: {
  0: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE_INFINITE,
  [g]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_USES_CREATE
},
[u.zUn.MAX_AGE]: {
  0: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE_INFINITE,
  [g]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_MAX_AGE_CREATE
},
[u.zUn.TEMPORARY]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_TEMPORARY_OFF
},
...d()
  }),
  p = () => ({
[u.zUn.CHANNEL_ID]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CHANNEL_CHANGE),
[u.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_NAME_CHANGE),
[u.zUn.AVATAR_HASH]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_AVATAR,
[u.zUn.REASON]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMON_REASON
  }),
  m = () => ({
[u.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_NAME_CHANGE),
...d()
  }),
  F = () => ({
[u.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_NAME_CHANGE),
[u.zUn.TAGS]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_TAGS_CHANGE),
[u.zUn.DESCRIPTION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_DESCRIPTION_CHANGE),
...d()
  }),
  v = () => ({
[u.zUn.ENABLE_EMOTICONS]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_ON,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_ENABLE_EMOTICONS_OFF
},
[u.zUn.EXPIRE_BEHAVIOR]: {
  0: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_REMOVE_SYNCED_ROLE,
  1: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_BEHAVIOR_KICK_FROM_SERVER
},
[u.zUn.EXPIRE_GRACE_PERIOD]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_EXPIRE_GRACE_PERIOD,
...d()
  }),
  V = () => ({
[u.zUn.TOPIC]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TOPIC_CHANGE),
[u.zUn.PRIVACY_LEVEL]: {
  [o.j8.GUILD_ONLY]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
  [o.j8.PUBLIC]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
},
...d()
  }),
  B = () => ({
[u.zUn.NAME]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_NAME_CREATE,
[u.zUn.DESCRIPTION]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_DESCRIPTION_CREATE,
[u.zUn.PRIVACY_LEVEL]: {
  [o.j8.GUILD_ONLY]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_GUILD_ONLY,
  [o.j8.PUBLIC]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_PRIVACY_LEVEL_PUBLIC
},
[u.zUn.STATUS]: {
  [o.p1.SCHEDULED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_SCHEDULED,
  [o.p1.ACTIVE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_ACTIVE,
  [o.p1.COMPLETED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_COMPLETED,
  [o.p1.CANCELED]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_STATUS_CANCELED
},
[u.zUn.ENTITY_TYPE]: {
  [o.WX.NONE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_NONE,
  [o.WX.STAGE_INSTANCE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_STAGE_INSTANCE,
  [o.WX.VOICE]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_VOICE,
  [o.WX.EXTERNAL]: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_ENTITY_TYPE_EXTERNAL
},
[u.zUn.CHANNEL_ID]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_CHANNEL),
[u.zUn.LOCATION]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_LOCATION),
[u.zUn.RECURRENCE_RULE]: eT(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE_CLEAR, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_SCHEDULED_EVENT_RECURRENCE_RULE),
...d()
  }),
  b = () => ({
[u.zUn.NAME]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_NAME_CHANGE),
[u.zUn.ARCHIVED]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_ARCHIVED,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNARCHIVED
},
[u.zUn.LOCKED]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_LOCKED,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_UNLOCKED
},
[u.zUn.INVITABLE]: {
  true: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_ENABLED,
  false: c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_INVITABLE_DISABLED
},
[u.zUn.AUTO_ARCHIVE_DURATION]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_THREAD_AUTO_ARCHIVE_DURATION_CHANGE),
[u.zUn.RATE_LIMIT_PER_USER]: es(c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CREATE, c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_RATE_LIMIT_PER_USER_CHANGE),
...d()
  }),
  z = e => {
let _ = {
  ...d()
};
return null == e || e.forEach(e => {
  e.newValue ? e.newValue.permission ? _[e.key] = c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_GRANTED : _[e.key] = c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_DENIED : _[e.key] = c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_REMOVED;
}), _;
  },
  x = {
[u.KFR.CHANNEL]: {
  [u.zUn.ID]: !0,
  [u.zUn.PERMISSION_OVERWRITES]: !0
},
[u.KFR.CHANNEL_OVERWRITE]: {
  [u.zUn.TYPE]: !0,
  [u.zUn.ID]: !0,
  [u.zUn.PERMISSION_OVERWRITES]: !0
},
[u.KFR.INVITE]: {
  [u.zUn.INVITER_ID]: !0,
  [u.zUn.USES]: !0
},
[u.KFR.WEBHOOK]: {
  [u.zUn.TYPE]: !0,
  [u.zUn.APPLICATION_ID]: !0
},
[u.KFR.INTEGRATION]: {
  [u.zUn.TYPE]: !0
},
[u.KFR.THREAD]: {
  [u.zUn.ID]: !0,
  [u.zUn.TYPE]: !0
},
[u.KFR.STICKER]: {
  [u.zUn.ID]: !0,
  [u.zUn.TYPE]: !0,
  [u.zUn.ASSET]: !0,
  [u.zUn.FORMAT_TYPE]: !0,
  [u.zUn.AVAILABLE]: !0,
  [u.zUn.GUILD_ID]: !0
}
  },
  K = () => [{
  value: u.rsA.ALL,
  label: c.Z.Messages.GUILD_SETTINGS_FILTER_ALL_ACTIONS,
  valueLabel: c.Z.Messages.GUILD_SETTINGS_FILTER_ALL
},
{
  value: u.rsA.GUILD_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_UPDATE
},
{
  value: u.rsA.CHANNEL_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_CREATE
},
{
  value: u.rsA.CHANNEL_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_UPDATE
},
{
  value: u.rsA.CHANNEL_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_DELETE
},
{
  value: u.rsA.CHANNEL_OVERWRITE_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_CREATE
},
{
  value: u.rsA.CHANNEL_OVERWRITE_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_UPDATE
},
{
  value: u.rsA.CHANNEL_OVERWRITE_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_CHANNEL_OVERWRITE_DELETE
},
{
  value: u.rsA.MEMBER_KICK,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_KICK
},
{
  value: u.rsA.MEMBER_PRUNE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_PRUNE
},
{
  value: u.rsA.MEMBER_BAN_ADD,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_ADD
},
{
  value: u.rsA.MEMBER_BAN_REMOVE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_BAN_REMOVE
},
{
  value: u.rsA.MEMBER_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_UPDATE
},
{
  value: u.rsA.MEMBER_ROLE_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_ROLE_UPDATE
},
{
  value: u.rsA.MEMBER_MOVE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_MOVE
},
{
  value: u.rsA.MEMBER_DISCONNECT,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MEMBER_DISCONNECT
},
{
  value: u.rsA.BOT_ADD,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_BOT_ADD
},
{
  value: u.rsA.THREAD_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_CREATE
},
{
  value: u.rsA.THREAD_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_UPDATE
},
{
  value: u.rsA.THREAD_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_THREAD_DELETE
},
{
  value: u.rsA.ROLE_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_CREATE
},
{
  value: u.rsA.ROLE_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_UPDATE
},
{
  value: u.rsA.ROLE_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_ROLE_DELETE
},
{
  value: u.rsA.INVITE_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_CREATE
},
{
  value: u.rsA.INVITE_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_UPDATE
},
{
  value: u.rsA.INVITE_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INVITE_DELETE
},
{
  value: u.rsA.WEBHOOK_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_CREATE
},
{
  value: u.rsA.WEBHOOK_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_UPDATE
},
{
  value: u.rsA.WEBHOOK_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_WEBHOOK_DELETE
},
{
  value: u.rsA.EMOJI_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_CREATE
},
{
  value: u.rsA.EMOJI_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_UPDATE
},
{
  value: u.rsA.EMOJI_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_EMOJI_DELETE
},
{
  value: u.rsA.MESSAGE_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_DELETE
},
{
  value: u.rsA.MESSAGE_BULK_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_BULK_DELETE
},
{
  value: u.rsA.MESSAGE_PIN,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_PIN
},
{
  value: u.rsA.MESSAGE_UNPIN,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_MESSAGE_UNPIN
},
{
  value: u.rsA.INTEGRATION_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_CREATE
},
{
  value: u.rsA.INTEGRATION_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_UPDATE
},
{
  value: u.rsA.INTEGRATION_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_INTEGRATION_DELETE
},
{
  value: u.rsA.STICKER_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_CREATE
},
{
  value: u.rsA.STICKER_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_UPDATE
},
{
  value: u.rsA.STICKER_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STICKER_DELETE
},
{
  value: u.rsA.STAGE_INSTANCE_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_CREATE
},
{
  value: u.rsA.STAGE_INSTANCE_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_UPDATE
},
{
  value: u.rsA.STAGE_INSTANCE_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_STAGE_INSTANCE_DELETE
},
{
  value: u.rsA.GUILD_SCHEDULED_EVENT_CREATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_CREATE
},
{
  value: u.rsA.GUILD_SCHEDULED_EVENT_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_UPDATE
},
{
  value: u.rsA.GUILD_SCHEDULED_EVENT_DELETE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_GUILD_SCHEDULED_EVENT_DELETE
},
{
  value: u.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_APPLICATION_COMMAND_PERMISSION_UPDATE
},
{
  value: u.rsA.AUTO_MODERATION_BLOCK_MESSAGE,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_BLOCK_MESSAGE
},
{
  value: u.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_FLAG_TO_CHANNEL
},
{
  value: u.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_TIMEOUT
},
{
  value: u.rsA.AUTO_MODERATION_QUARANTINE_USER,
  label: c.Z.Messages.GUILD_SETTINGS_ACTION_FILTER_AUTO_MODERATION_QUARANTINE
}
  ];

function y(e, _) {
  return null != _.changes ? _.changes.find(_ => _.key === e) : null;
}

function j(e) {
  let _ = K().find(_ => _.value === e.action),
E = y(u.zUn.COMMUNICATION_DISABLED_UNTIL, e);
  switch (!0) {
case null != E:
  return c.Z.Messages.MEMBER_SAFETY_COMMUNICATION_DISABLED;
case null != _:
  var s;
  return null !== (s = null == _ ? void 0 : _.label) && void 0 !== s ? s : null;
default:
  return null;
  }
}
let k = {
  [A.J6.SECONDS]: e => c.Z.Messages.DURATION_SECONDS.format({
seconds: e
  }),
  [A.J6.MINUTES]: e => c.Z.Messages.DURATION_MINUTES.format({
minutes: e
  }),
  [A.J6.HOURS]: e => c.Z.Messages.DURATION_HOURS.format({
hours: e
  }),
  [A.J6.DAYS]: e => c.Z.Messages.DURATION_DAYS.format({
days: e
  })
};

function W(e) {
  let _ = y(u.zUn.COMMUNICATION_DISABLED_UNTIL, e),
E = Y(u.zUn.ROLES_ADD, e).length > 0,
s = Y(u.zUn.ROLES_REMOVE, e).length > 0;
  switch (!0) {
case null != _:
  if ((null == _ ? void 0 : _.newValue) != null) {
    let E = new Date(null == _ ? void 0 : _.newValue).getTime(),
      s = R.default.extractTimestamp(e.id),
      T = Math.round((E - s) / 1000 / 60),
      I = [
        A.J6.DAYS,
        A.J6.HOURS,
        A.J6.MINUTES,
        A.J6.SECONDS
      ],
      n = (0, A.CI)(T, I);
    if (null == n.unit || null == n.time)
      return null;
    if (n.unit in k)
      return k[n.unit](n.time);
    return null;
  }
  if ((null == _ ? void 0 : _.oldValue) != null)
    return c.Z.Messages.GUILD_COMMUNICATION_DISABLED_REMOVED;
  return null;
case E && s:
  return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED_CONTEXT;
case E:
  return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_CONTEXT;
case s:
  return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED_CONTEXT;
default:
  return null;
  }
}

function Y(e, _) {
  return null != _.changes ? _.changes.filter(_ => _.key === e) : [];
}

function w(e) {
  let _ = Y(u.zUn.ROLES_ADD, e),
E = Y(u.zUn.ROLES_REMOVE, e),
s = null == _ ? void 0 : _.map(e => {
  let {
    newValue: _
  } = e;
  return null == _ ? void 0 : _.map(e => {
    let {
      name: _
    } = e;
    return _;
  }).join(', ');
}).join(', '),
T = null == E ? void 0 : E.map(e => {
  let {
    newValue: _
  } = e;
  return null == _ ? void 0 : _.map(e => {
    let {
      name: _
    } = e;
    return _;
  }).join(', ');
}).join(', ');
  switch (!0) {
case _.length > 0 && E.length > 0:
  return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED_AND_REMOVED.format({
    roleNamesAdded: s,
    roleNamesRemoved: T
  });
case _.length > 0:
  return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_ADDED.format({
    roleNames: s
  });
case E.length > 0:
  return c.Z.Messages.GUILD_MEMBER_MOD_VIEW_ROLES_REMOVED.format({
    roleNames: T
  });
default:
  return null;
  }
}

function q(e) {
  switch (e.action) {
case u.rsA.GUILD_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_GUILD_UPDATE;
case u.rsA.CHANNEL_CREATE:
  let _ = null != e.changes ? e.changes.find(e => e.key === u.zUn.TYPE) : null;
  if (null == _)
    throw Error('[AuditLog] Could not find type change for channel create');
  switch (_.newValue) {
    case u.d4z.GUILD_STAGE_VOICE:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_STAGE_CREATE;
    case u.d4z.GUILD_VOICE:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_VOICE_CREATE;
    case u.d4z.GUILD_CATEGORY:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_CATEGORY_CREATE;
    default:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_TEXT_CREATE;
  }
case u.rsA.CHANNEL_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_UPDATE;
case u.rsA.CHANNEL_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_DELETE;
case u.rsA.CHANNEL_OVERWRITE_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_CREATE;
case u.rsA.CHANNEL_OVERWRITE_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_UPDATE;
case u.rsA.CHANNEL_OVERWRITE_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_CHANNEL_OVERWRITE_DELETE;
case u.rsA.MEMBER_KICK:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_KICK;
case u.rsA.MEMBER_PRUNE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_PRUNE;
case u.rsA.MEMBER_BAN_ADD:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_MEMBER_BAN_ADD;
case u.rsA.MEMBER_BAN_REMOVE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_BAN_REMOVE;
case u.rsA.MEMBER_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_UPDATE;
case u.rsA.MEMBER_ROLE_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_ROLE_UPDATE;
case u.rsA.MEMBER_MOVE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_MOVE;
case u.rsA.MEMBER_DISCONNECT:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MEMBER_DISCONNECT;
case u.rsA.BOT_ADD:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_BOT_ADD;
case u.rsA.ROLE_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_CREATE;
case u.rsA.ROLE_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_UPDATE;
case u.rsA.ROLE_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_ROLE_DELETE;
case u.rsA.INVITE_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_CREATE;
case u.rsA.INVITE_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_UPDATE;
case u.rsA.INVITE_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INVITE_DELETE;
case u.rsA.WEBHOOK_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_CREATE;
case u.rsA.WEBHOOK_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_UPDATE;
case u.rsA.WEBHOOK_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_WEBHOOK_DELETE;
case u.rsA.EMOJI_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_CREATE;
case u.rsA.EMOJI_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_UPDATE;
case u.rsA.EMOJI_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_EMOJI_DELETE;
case u.rsA.STICKER_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_CREATE;
case u.rsA.STICKER_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_UPDATE;
case u.rsA.STICKER_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STICKER_DELETE;
case u.rsA.MESSAGE_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_DELETE;
case u.rsA.MESSAGE_BULK_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_BULK_DELETE;
case u.rsA.MESSAGE_PIN:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_PIN;
case u.rsA.MESSAGE_UNPIN:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_MESSAGE_UNPIN;
case u.rsA.INTEGRATION_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_CREATE;
case u.rsA.INTEGRATION_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_UPDATE;
case u.rsA.INTEGRATION_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_INTEGRATION_DELETE;
case u.rsA.STAGE_INSTANCE_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_CREATE;
case u.rsA.STAGE_INSTANCE_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_UPDATE;
case u.rsA.STAGE_INSTANCE_DELETE:
  if (null != e.userId)
    return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE;
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_STAGE_INSTANCE_DELETE_NO_USER;
case u.rsA.GUILD_SCHEDULED_EVENT_CREATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_CREATE;
case u.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_UPDATE;
case u.rsA.GUILD_SCHEDULED_EVENT_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_SCHEDULED_EVENT_DELETE;
case u.rsA.THREAD_CREATE:
  let E = null != e.changes ? e.changes.find(e => e.key === u.zUn.TYPE) : null;
  if (null == E)
    throw Error('[AuditLog] Could not find type change for thread create');
  switch (E.newValue) {
    case u.d4z.PRIVATE_THREAD:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_PRIVATE_THREAD_CREATE;
    case u.d4z.ANNOUNCEMENT_THREAD:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_ANNOUNCEMENT_THREAD_CREATE;
    default:
      return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_CREATE;
  }
case u.rsA.THREAD_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_UPDATE;
case u.rsA.THREAD_DELETE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_V2_THREAD_DELETE;
case u.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_COMMAND_PERMISSION_UPDATE;
case u.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_BLOCK_MESSAGE;
case u.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_FLAG_TO_CHANNEL_MESSAGE;
case u.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
  return c.Z.Messages.GUILD_SETTINGS_AUDIT_LOG_AUTO_MODERATION_USER_COMMUNICATION_DISABLED_MESSAGE;
case u.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
  return c.Z.Messages.CREATOR_MONETIZATION_APPLIED_AUDIT_LOG_TITLE;
case u.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
  return c.Z.Messages.CREATOR_MONETIZATION_TERMS_ACCEPTED_AUDIT_LOG_TITLE;
default:
  return null;
  }
}

function X(e) {
  var _;
  let E = null == e ? void 0 : null === (_ = e.changes) || void 0 === _ ? void 0 : _.find(e => 'reason' === e.key);
  return null != E ? E.newValue : null;
}

function J(e, _) {
  switch (e) {
case u.Plq.CREATE_INSTANT_INVITE:
  return c.Z.Messages.CREATE_INSTANT_INVITE;
case u.Plq.KICK_MEMBERS:
  return c.Z.Messages.KICK_MEMBERS;
case u.Plq.BAN_MEMBERS:
  return c.Z.Messages.BAN_MEMBERS;
case u.Plq.ADMINISTRATOR:
  return c.Z.Messages.ADMINISTRATOR;
case u.Plq.MANAGE_CHANNELS:
  if (_.targetType === u.KFR.CHANNEL || _.targetType === u.KFR.CHANNEL_OVERWRITE)
    return c.Z.Messages.MANAGE_CHANNEL;
  return c.Z.Messages.MANAGE_CHANNELS;
case u.Plq.MANAGE_GUILD:
  return c.Z.Messages.MANAGE_SERVER;
case u.Plq.VIEW_GUILD_ANALYTICS:
  return c.Z.Messages.VIEW_GUILD_ANALYTICS;
case u.Plq.VIEW_CREATOR_MONETIZATION_ANALYTICS:
  return c.Z.Messages.VIEW_CREATOR_MONETIZATION_ANALYTICS;
case u.Plq.CHANGE_NICKNAME:
  return c.Z.Messages.CHANGE_NICKNAME;
case u.Plq.MANAGE_NICKNAMES:
  return c.Z.Messages.MANAGE_NICKNAMES;
case u.Plq.MANAGE_ROLES:
  return c.Z.Messages.MANAGE_ROLES;
case u.Plq.MANAGE_WEBHOOKS:
  return c.Z.Messages.MANAGE_WEBHOOKS;
case u.Plq.CREATE_GUILD_EXPRESSIONS:
  return c.Z.Messages.CREATE_EXPRESSIONS;
case u.Plq.MANAGE_GUILD_EXPRESSIONS:
  return c.Z.Messages.MANAGE_EXPRESSIONS;
case u.Plq.VIEW_AUDIT_LOG:
  return c.Z.Messages.VIEW_AUDIT_LOG;
case u.Plq.VIEW_CHANNEL:
  return c.Z.Messages.VIEW_CHANNEL;
case u.Plq.SEND_MESSAGES:
  return c.Z.Messages.SEND_MESSAGES;
case u.Plq.SEND_TTS_MESSAGES:
  return c.Z.Messages.SEND_TTS_MESSAGES;
case u.Plq.USE_APPLICATION_COMMANDS:
  return c.Z.Messages.USE_APPLICATION_COMMANDS;
case u.Plq.MANAGE_MESSAGES:
  return c.Z.Messages.MANAGE_MESSAGES;
case u.Plq.EMBED_LINKS:
  return c.Z.Messages.EMBED_LINKS;
case u.Plq.ATTACH_FILES:
  return c.Z.Messages.ATTACH_FILES;
case u.Plq.READ_MESSAGE_HISTORY:
  return c.Z.Messages.READ_MESSAGE_HISTORY;
case u.Plq.MENTION_EVERYONE:
  return c.Z.Messages.MENTION_EVERYONE;
case u.Plq.USE_EXTERNAL_EMOJIS:
  return c.Z.Messages.USE_EXTERNAL_EMOJIS;
case u.Plq.USE_EXTERNAL_STICKERS:
  return c.Z.Messages.USE_EXTERNAL_STICKERS;
case u.Plq.ADD_REACTIONS:
  return c.Z.Messages.ADD_REACTIONS;
case u.Plq.CONNECT:
  return c.Z.Messages.CONNECT;
case u.Plq.SPEAK:
  return c.Z.Messages.SPEAK;
case u.Plq.MUTE_MEMBERS:
  return c.Z.Messages.MUTE_MEMBERS;
case u.Plq.DEAFEN_MEMBERS:
  return c.Z.Messages.DEAFEN_MEMBERS;
case u.Plq.MOVE_MEMBERS:
  return c.Z.Messages.MOVE_MEMBERS;
case u.Plq.USE_VAD:
  return c.Z.Messages.USE_VAD;
case u.Plq.PRIORITY_SPEAKER:
  return c.Z.Messages.PRIORITY_SPEAKER;
case u.Plq.STREAM:
  return c.Z.Messages.VIDEO;
case u.Plq.REQUEST_TO_SPEAK:
  return c.Z.Messages.REQUEST_TO_SPEAK;
case u.Plq.CREATE_EVENTS:
  return c.Z.Messages.CREATE_EVENTS;
case u.Plq.MANAGE_EVENTS:
  return c.Z.Messages.MANAGE_EVENTS;
case u.Plq.CREATE_PUBLIC_THREADS:
  return c.Z.Messages.CREATE_PUBLIC_THREADS;
case u.Plq.CREATE_PRIVATE_THREADS:
  return c.Z.Messages.CREATE_PRIVATE_THREADS;
case u.Plq.SEND_MESSAGES_IN_THREADS:
  return c.Z.Messages.SEND_MESSAGES_IN_THREADS;
case u.Plq.MANAGE_THREADS:
  return c.Z.Messages.MANAGE_THREADS;
case u.Plq.MODERATE_MEMBERS:
  return c.Z.Messages.MODERATE_MEMBER;
case u.Plq.SET_VOICE_CHANNEL_STATUS:
  return c.Z.Messages.VOICE_CHANNEL_STATUS_PERMISSION_TITLE;
  }
  return null;
}

function Q(e, _) {
  if (null == _)
return [];
  let E = [];
  return e.forEach(e => {
let s = function(e, _) {
    switch (e.targetType) {
      case u.KFR.GUILD:
        return _;
      case u.KFR.CHANNEL:
      case u.KFR.CHANNEL_OVERWRITE:
        return e_(e, u.zUn.NAME, e => U.Z.getChannel(e), e => (0, a.F6)(e, M.default, O.Z, !0));
      case u.KFR.USER:
        return e_(e, u.zUn.NICK, e => M.default.getUser(e), void 0);
      case u.KFR.ROLE:
        return e_(e, u.zUn.NAME, e => G.Z.getRole(_.id, e), e => e.name);
      case u.KFR.INVITE:
        return e_(e, u.zUn.CODE, u.VqG);
      case u.KFR.INTEGRATION:
        return e_(e, u.zUn.TYPE, e => L.Z.integrations.find(_ => _.id === e), e => e.name);
      case u.KFR.WEBHOOK:
        return e_(e, u.zUn.NAME, e => L.Z.webhooks.find(_ => _.id === e), e => e.name);
      case u.KFR.EMOJI:
        return e_(e, u.zUn.NAME, e => N.ZP.getGuildEmoji(_.id).find(_ => _.id === e), e => e.name);
      case u.KFR.STICKER:
        return e_(e, u.zUn.NAME, e => D.Z.getStickerById(e), e => e.name);
      case u.KFR.STAGE_INSTANCE:
        return e_(e, u.zUn.TOPIC, e => {
          var E;
          return null === (E = Object.values(S.Z.getStageInstancesByGuild(_.id))) || void 0 === E ? void 0 : E.find(_ => _.id === e);
        }, e => e.topic);
      case u.KFR.GUILD_SCHEDULED_EVENT:
        return e_(e, u.zUn.NAME, e => L.Z.guildScheduledEvents.find(_ => _.id === e), e => e.name);
      case u.KFR.THREAD:
        return e_(e, u.zUn.NAME, e => L.Z.threads.find(_ => _.id === e), e => e.name);
      case u.KFR.APPLICATION_COMMAND:
        if (e.targetId === e.options.application_id) {
          let _ = L.Z.integrations.find(_ => _.application_id === e.targetId);
          if (null != _)
            return _.name;
          return e.targetId;
        }
        return e_(e, u.zUn.NAME, e => L.Z.applicationCommands.find(_ => _.id === e), e => {
          let _ = null != e.name_localized && '' !== e.name_localized ? e.name_localized : e.name;
          return e.type === t.yU.CHAT ? '/\u2060'.concat(_) : _;
        });
      default:
        return C.warn('Unknown targetType for log', e), null;
    }
  }(e, _),
  I = M.default.getUser(e.userId);
if (null != I && (null != s || e.action === u.rsA.MEMBER_PRUNE || e.action === u.rsA.MEMBER_DISCONNECT || e.action === u.rsA.MEMBER_MOVE || e.action === u.rsA.CREATOR_MONETIZATION_REQUEST_CREATED || e.action === u.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED)) {
  if (null != (e = (e = (e = e.set('user', I)).set('target', s)).set('options', function(e) {
      if (null != e.options) {
        let s = {
          ...e.options
        };
        switch (e.options.type) {
          case u.jwA.USER:
            var _, E;
            (null === (_ = e.options) || void 0 === _ ? void 0 : _.id) != null && (s.subtarget = eE(null == e ? void 0 : null === (E = e.options) || void 0 === E ? void 0 : E.id, e => M.default.getUser(e), e => e.tag));
            break;
          case u.jwA.ROLE:
            null != e.options.role_name && (s.subtarget = eE(e.options.role_name, u.VqG));
        }
        return null != e.options.channel_id && (s.channel = e_(e, '', e => U.Z.getChannel(e), void 0, e.options.channel_id)), null != e.options.members_removed && 0 !== e.options.members_removed && (s.count = e.options.members_removed), s;
      }
      return e.options;
    }(e))).changes) {
    let E = [];
    e.changes.forEach(s => {
      let I = function(e, _, E) {
        if (_.action === u.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) {
          let _ = e.newValue || e.oldValue;
          switch (_.type) {
            case u.ecB.ROLE:
              e.subtarget = eE(_.id, e => G.Z.getRole(E.id, e), e => e.name);
              break;
            case u.ecB.USER:
              e.subtarget = eE(_.id, e => M.default.getUser(e), e => e.tag);
              break;
            case u.ecB.CHANNEL:
              _.id === T()(E.id).subtract(1).toString() ? e.subtarget = c.Z.Messages.ALL_CHANNELS : e.subtarget = eE(_.id, e => U.Z.getChannel(e), e => (0, a.F6)(e, M.default, O.Z, !0));
          }
          return e;
        }
        switch (e.key) {
          case u.zUn.OWNER_ID:
            return ee(e, e => M.default.getUser(e));
          case u.zUn.CHANNEL_ID:
          case u.zUn.AFK_CHANNEL_ID:
          case u.zUn.SYSTEM_CHANNEL_ID:
          case u.zUn.RULES_CHANNEL_ID:
          case u.zUn.PUBLIC_UPDATES_CHANNEL_ID:
            return ee(e, e => U.Z.getChannel(e), e => (0, a.F6)(e, M.default, O.Z, !0));
          case u.zUn.AFK_TIMEOUT:
            return ee(e, e => e / 60);
          case u.zUn.BITRATE:
            return ee(e, e => e / 1000);
          case u.zUn.COLOR:
            return ee(e, e => (0, n.Rf)(e).toUpperCase());
          case u.zUn.MAX_AGE:
            return ee(e, e => {
              let _ = i.ZP.getMaxAgeOptions.find(_ => {
                let {
                  value: E
                } = _;
                return e === E;
              });
              return _ ? _.label : e;
            });
          case u.zUn.PERMISSIONS: {
            let _ = [],
              {
                added: E,
                removed: s
              } = $(e.oldValue, e.newValue);
            if (E.length > 0) {
              let e = new l.ms(u.zUn.PERMISSIONS_GRANTED, null, E);
              _.push(e);
            }
            if (s.length > 0) {
              let e = new l.ms(u.zUn.PERMISSIONS_DENIED, null, s);
              _.push(e);
            }
            return _;
          }
          case u.zUn.PERMISSIONS_GRANTED:
          case u.zUn.PERMISSIONS_DENIED: {
            let _ = [],
              {
                added: E,
                removed: s
              } = $(e.oldValue, e.newValue);
            if (E.length > 0) {
              let s = new l.ms(e.key, null, E);
              _.push(s);
            }
            if (s.length > 0) {
              let e = new l.ms(u.zUn.PERMISSIONS_RESET, s, s);
              _.push(e);
            }
            return _;
          }
          case u.zUn.PREFERRED_LOCALE:
            return ee(e, e => {
              let _ = c.Z.getAvailableLocales().find(_ => _.value === e);
              return null != _ ? _.name : null;
            });
          case u.zUn.VIDEO_QUALITY_MODE:
            return ee(e, e => e === u.Ucd.FULL ? c.Z.Messages.VIDEO_QUALITY_MODE_FULL : c.Z.Messages.VIDEO_QUALITY_MODE_AUTO);
          case u.zUn.SYSTEM_CHANNEL_FLAGS:
            return function(e) {
              let _ = {
                  [u.xmn.SUPPRESS_JOIN_NOTIFICATIONS]: u.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATIONS,
                  [u.xmn.SUPPRESS_PREMIUM_SUBSCRIPTIONS]: u.zUn.SYSTEM_CHANNEL_FLAG_PREMIUM_SUBSCRIPTIONS,
                  [u.xmn.SUPPRESS_GUILD_REMINDER_NOTIFICATIONS]: u.zUn.SYSTEM_CHANNEL_FLAG_REMINDER_NOTIFICATIONS,
                  [u.xmn.SUPPRESS_JOIN_NOTIFICATION_REPLIES]: u.zUn.SYSTEM_CHANNEL_FLAG_JOIN_NOTIFICATION_REPLIES
                },
                E = [];
              return Object.values(u.xmn).forEach(s => {
                let T = (e.oldValue & s) === s,
                  I = (e.newValue & s) === s;
                if (T === I)
                  return;
                let n = new l.ms(_[s], !T, !I);
                E.push(n);
              }), E;
            }(e);
        }
        return e;
      }(s, e, _);
      Array.isArray(I) ? I.forEach(e => E.push(e)) : E.push(I);
    }), e = e.set('changes', E);
  }
  E.push(e);
}
  }), E;
}

function $(e, _) {
  let E = I.vB('string' == typeof e ? e : 0),
s = I.vB('string' == typeof _ ? _ : 0),
T = I.Od(s, E),
n = I.Od(E, s),
A = [],
t = [],
a = {
  ...u.Plq
};
  for (let e in a) {
let _ = a[e];
I.e$(T, _) && A.push(_), I.e$(n, _) && t.push(_);
  }
  return {
added: A,
removed: t
  };
}

function ee(e, _, E) {
  let s = e.newValue,
T = e.oldValue;
  return null != e.newValue && (s = _(e.newValue), null != E && null != s && (s = E(s))), null != e.oldValue && (T = _(e.oldValue), null != E && null != T && (T = E(T))), new l.ms(e.key, T || e.oldValue, s || e.newValue);
}

function e_(e, _, E, s, T) {
  let I = null,
n = E(T = null != T ? T : e.targetId);
  if (null != n && null != s && (I = s(n)), null == I && null != n && (I = n), null == I) {
let _ = L.Z.deletedTargets[e.targetType];
null != _ && null != _[T] && (I = _[T]);
  }
  if (null == I && null != e.changes) {
let E = e.changes.find(e => e.key === _);
null != E && (I = E.newValue || E.oldValue);
  }
  return I || T;
}

function eE(e, _, E) {
  let s = e,
T = _(e);
  return null != T && null != E && (s = E(T)), s;
}

function es(e, _) {
  return E => null == E.oldValue ? e : _;
}

function eT(e, _) {
  return E => null == E.newValue ? e : _;
}

function eI(e, _, E, s) {
  return T => {
if (null != T.newValue && null != T.oldValue)
  return e;
if (null != T.newValue)
  return _;
if (null != T.oldValue)
  return E;
return s;
  };
}