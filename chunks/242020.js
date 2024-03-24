"use strict";
E.r(t), E.d(t, {
  getTargetType: function() {
    return u
  },
  getActionType: function() {
    return I
  },
  AuditLogChange: function() {
    return i
  },
  default: function() {
    return L
  }
});
var _ = E("866227"),
  s = E.n(_),
  T = E("666038"),
  a = E("286235"),
  n = E("299039"),
  A = E("49111");

function u(e) {
  if (e === A.AuditLogActions.ALL) return A.AuditLogTargetTypes.ALL;
  if (e <= A.AuditLogActions.GUILD_UPDATE) return A.AuditLogTargetTypes.GUILD;
  if (e <= A.AuditLogActions.CHANNEL_DELETE || e === A.AuditLogActions.MESSAGE_BULK_DELETE) return A.AuditLogTargetTypes.CHANNEL;
  else if (e <= A.AuditLogActions.CHANNEL_OVERWRITE_DELETE) return A.AuditLogTargetTypes.CHANNEL_OVERWRITE;
  else if (e <= A.AuditLogActions.BOT_ADD || e === A.AuditLogActions.MESSAGE_DELETE || e === A.AuditLogActions.MESSAGE_PIN || e === A.AuditLogActions.MESSAGE_UNPIN) return A.AuditLogTargetTypes.USER;
  else if (e <= A.AuditLogActions.ROLE_DELETE) return A.AuditLogTargetTypes.ROLE;
  else if (e <= A.AuditLogActions.INVITE_DELETE) return A.AuditLogTargetTypes.INVITE;
  else if (e <= A.AuditLogActions.WEBHOOK_DELETE) return A.AuditLogTargetTypes.WEBHOOK;
  else if (e <= A.AuditLogActions.EMOJI_DELETE) return A.AuditLogTargetTypes.EMOJI;
  else if (e <= A.AuditLogActions.INTEGRATION_DELETE) return A.AuditLogTargetTypes.INTEGRATION;
  else if (e <= A.AuditLogActions.STAGE_INSTANCE_DELETE) return A.AuditLogTargetTypes.STAGE_INSTANCE;
  else if (e <= A.AuditLogActions.STICKER_DELETE) return A.AuditLogTargetTypes.STICKER;
  else if (e <= A.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE) return A.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT;
  else if (e <= A.AuditLogActions.THREAD_DELETE) return A.AuditLogTargetTypes.THREAD;
  else if (e === A.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) return A.AuditLogTargetTypes.APPLICATION_COMMAND;
  else if (e <= A.AuditLogActions.SOUNDBOARD_SOUND_DELETE) return A.AuditLogTargetTypes.GUILD_SOUNDBOARD;
  else if (e < A.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return A.AuditLogTargetTypes.AUTO_MODERATION_RULE;
  else if (e === A.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return A.AuditLogTargetTypes.USER;
  else if (e === A.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL) return A.AuditLogTargetTypes.USER;
  else if (e === A.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return A.AuditLogTargetTypes.USER;
  else if (e === A.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER) return A.AuditLogTargetTypes.USER;
  else if (e <= A.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED) return A.AuditLogTargetTypes.GUILD;
  else if (e <= A.AuditLogActions.ONBOARDING_PROMPT_DELETE) return A.AuditLogTargetTypes.ONBOARDING_PROMPT;
  else if (e <= A.AuditLogActions.ONBOARDING_UPDATE) return A.AuditLogTargetTypes.GUILD_ONBOARDING;
  else if (e <= A.AuditLogActions.GUILD_HOME_REMOVE_ITEM) return A.AuditLogTargetTypes.GUILD_HOME;
  else if (e <= A.AuditLogActions.HARMFUL_LINKS_BLOCKED_MESSAGE) return A.AuditLogTargetTypes.GUILD;
  else if (e <= A.AuditLogActions.HOME_SETTINGS_UPDATE) return A.AuditLogTargetTypes.HOME_SETTINGS;
  else if (e <= A.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE) return A.AuditLogTargetTypes.VOICE_CHANNEL_STATUS;
  else if (e <= A.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return A.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION;
  return a.default.captureMessage("Unknown target type for: ".concat(e)), A.AuditLogTargetTypes.UNKNOWN
}

function I(e) {
  switch (e) {
    case A.AuditLogActions.CHANNEL_CREATE:
    case A.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
    case A.AuditLogActions.MEMBER_BAN_REMOVE:
    case A.AuditLogActions.ROLE_CREATE:
    case A.AuditLogActions.INVITE_CREATE:
    case A.AuditLogActions.WEBHOOK_CREATE:
    case A.AuditLogActions.EMOJI_CREATE:
    case A.AuditLogActions.STICKER_CREATE:
    case A.AuditLogActions.MESSAGE_PIN:
    case A.AuditLogActions.BOT_ADD:
    case A.AuditLogActions.INTEGRATION_CREATE:
    case A.AuditLogActions.STAGE_INSTANCE_CREATE:
    case A.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
    case A.AuditLogActions.THREAD_CREATE:
    case A.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
    case A.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
    case A.AuditLogActions.ONBOARDING_PROMPT_CREATE:
    case A.AuditLogActions.ONBOARDING_CREATE:
    case A.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
    case A.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
    case A.AuditLogActions.HOME_SETTINGS_CREATE:
    case A.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return A.AuditLogActionTypes.CREATE;
    case A.AuditLogActions.CHANNEL_DELETE:
    case A.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
    case A.AuditLogActions.MEMBER_KICK:
    case A.AuditLogActions.MEMBER_PRUNE:
    case A.AuditLogActions.MEMBER_BAN_ADD:
    case A.AuditLogActions.ROLE_DELETE:
    case A.AuditLogActions.INVITE_DELETE:
    case A.AuditLogActions.WEBHOOK_DELETE:
    case A.AuditLogActions.EMOJI_DELETE:
    case A.AuditLogActions.STICKER_DELETE:
    case A.AuditLogActions.MESSAGE_DELETE:
    case A.AuditLogActions.MESSAGE_BULK_DELETE:
    case A.AuditLogActions.MESSAGE_UNPIN:
    case A.AuditLogActions.INTEGRATION_DELETE:
    case A.AuditLogActions.MEMBER_DISCONNECT:
    case A.AuditLogActions.STAGE_INSTANCE_DELETE:
    case A.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
    case A.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case A.AuditLogActions.THREAD_DELETE:
    case A.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
    case A.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
    case A.AuditLogActions.ONBOARDING_PROMPT_DELETE:
    case A.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
    case A.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
    case A.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return A.AuditLogActionTypes.DELETE;
    case A.AuditLogActions.GUILD_UPDATE:
    case A.AuditLogActions.CHANNEL_UPDATE:
    case A.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
    case A.AuditLogActions.MEMBER_UPDATE:
    case A.AuditLogActions.MEMBER_ROLE_UPDATE:
    case A.AuditLogActions.ROLE_UPDATE:
    case A.AuditLogActions.INVITE_UPDATE:
    case A.AuditLogActions.WEBHOOK_UPDATE:
    case A.AuditLogActions.EMOJI_UPDATE:
    case A.AuditLogActions.STICKER_UPDATE:
    case A.AuditLogActions.INTEGRATION_UPDATE:
    case A.AuditLogActions.MEMBER_MOVE:
    case A.AuditLogActions.STAGE_INSTANCE_UPDATE:
    case A.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
    case A.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case A.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case A.AuditLogActions.THREAD_UPDATE:
    case A.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case A.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case A.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
    case A.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case A.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case A.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
    case A.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
    case A.AuditLogActions.ONBOARDING_UPDATE:
    case A.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
    case A.AuditLogActions.HOME_SETTINGS_UPDATE:
      return A.AuditLogActionTypes.UPDATE
  }
  return A.AuditLogActionTypes.ALL
}
class i {
  constructor(e, t, E) {
    this.key = e, this.oldValue = t, this.newValue = E
  }
}
class l extends T.default {
  constructor(e) {
    var t, E, _, T, a, A;
    super(), this.id = e.id, this.action = e.action, this.actionType = I(this.action), this.targetId = e.targetId, this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : s(n.default.extractTimestamp(this.id)), this.timestampEnd = null !== (E = e.timestampEnd) && void 0 !== E ? E : this.timestampStart, this.userId = e.userId, this.changes = null !== (_ = e.changes) && void 0 !== _ ? _ : [], this.targetType = u(this.action), this.options = null !== (T = e.options) && void 0 !== T ? T : {}, this.target = null !== (a = e.target) && void 0 !== a ? a : e.id, this.user = null !== (A = e.user) && void 0 !== A ? A : null
  }
}
var L = l