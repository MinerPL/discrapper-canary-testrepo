"use strict";
s.r(t), s.d(t, {
  AuditLogChange: function() {
    return I
  },
  getActionType: function() {
    return l
  },
  getTargetType: function() {
    return A
  }
});
var E = s("913527"),
  _ = s.n(E),
  a = s("81825"),
  n = s("960048"),
  T = s("709054"),
  i = s("981631");

function u(e, t, s) {
  return t in e ? Object.defineProperty(e, t, {
    value: s,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = s, e
}

function A(e) {
  if (e === i.AuditLogActions.ALL) return i.AuditLogTargetTypes.ALL;
  if (e <= i.AuditLogActions.GUILD_UPDATE) return i.AuditLogTargetTypes.GUILD;
  if (e <= i.AuditLogActions.CHANNEL_DELETE || e === i.AuditLogActions.MESSAGE_BULK_DELETE) return i.AuditLogTargetTypes.CHANNEL;
  else if (e <= i.AuditLogActions.CHANNEL_OVERWRITE_DELETE) return i.AuditLogTargetTypes.CHANNEL_OVERWRITE;
  else if (e <= i.AuditLogActions.BOT_ADD || e === i.AuditLogActions.MESSAGE_DELETE || e === i.AuditLogActions.MESSAGE_PIN || e === i.AuditLogActions.MESSAGE_UNPIN) return i.AuditLogTargetTypes.USER;
  else if (e <= i.AuditLogActions.ROLE_DELETE) return i.AuditLogTargetTypes.ROLE;
  else if (e <= i.AuditLogActions.INVITE_DELETE) return i.AuditLogTargetTypes.INVITE;
  else if (e <= i.AuditLogActions.WEBHOOK_DELETE) return i.AuditLogTargetTypes.WEBHOOK;
  else if (e <= i.AuditLogActions.EMOJI_DELETE) return i.AuditLogTargetTypes.EMOJI;
  else if (e <= i.AuditLogActions.INTEGRATION_DELETE) return i.AuditLogTargetTypes.INTEGRATION;
  else if (e <= i.AuditLogActions.STAGE_INSTANCE_DELETE) return i.AuditLogTargetTypes.STAGE_INSTANCE;
  else if (e <= i.AuditLogActions.STICKER_DELETE) return i.AuditLogTargetTypes.STICKER;
  else if (e <= i.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE) return i.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT;
  else if (e <= i.AuditLogActions.THREAD_DELETE) return i.AuditLogTargetTypes.THREAD;
  else if (e === i.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE) return i.AuditLogTargetTypes.APPLICATION_COMMAND;
  else if (e <= i.AuditLogActions.SOUNDBOARD_SOUND_DELETE) return i.AuditLogTargetTypes.GUILD_SOUNDBOARD;
  else if (e < i.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return i.AuditLogTargetTypes.AUTO_MODERATION_RULE;
  else if (e === i.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE) return i.AuditLogTargetTypes.USER;
  else if (e === i.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL) return i.AuditLogTargetTypes.USER;
  else if (e === i.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return i.AuditLogTargetTypes.USER;
  else if (e === i.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER) return i.AuditLogTargetTypes.USER;
  else if (e <= i.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED) return i.AuditLogTargetTypes.GUILD;
  else if (e <= i.AuditLogActions.ONBOARDING_PROMPT_DELETE) return i.AuditLogTargetTypes.ONBOARDING_PROMPT;
  else if (e <= i.AuditLogActions.ONBOARDING_UPDATE) return i.AuditLogTargetTypes.GUILD_ONBOARDING;
  else if (e <= i.AuditLogActions.GUILD_HOME_REMOVE_ITEM) return i.AuditLogTargetTypes.GUILD_HOME;
  else if (e <= i.AuditLogActions.HARMFUL_LINKS_BLOCKED_MESSAGE) return i.AuditLogTargetTypes.GUILD;
  else if (e <= i.AuditLogActions.HOME_SETTINGS_UPDATE) return i.AuditLogTargetTypes.HOME_SETTINGS;
  else if (e <= i.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE) return i.AuditLogTargetTypes.VOICE_CHANNEL_STATUS;
  else if (e <= i.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return i.AuditLogTargetTypes.GUILD_SCHEDULED_EVENT_EXCEPTION;
  return n.default.captureMessage("Unknown target type for: ".concat(e)), i.AuditLogTargetTypes.UNKNOWN
}

function l(e) {
  switch (e) {
    case i.AuditLogActions.CHANNEL_CREATE:
    case i.AuditLogActions.CHANNEL_OVERWRITE_CREATE:
    case i.AuditLogActions.MEMBER_BAN_REMOVE:
    case i.AuditLogActions.ROLE_CREATE:
    case i.AuditLogActions.INVITE_CREATE:
    case i.AuditLogActions.WEBHOOK_CREATE:
    case i.AuditLogActions.EMOJI_CREATE:
    case i.AuditLogActions.STICKER_CREATE:
    case i.AuditLogActions.MESSAGE_PIN:
    case i.AuditLogActions.BOT_ADD:
    case i.AuditLogActions.INTEGRATION_CREATE:
    case i.AuditLogActions.STAGE_INSTANCE_CREATE:
    case i.AuditLogActions.GUILD_SCHEDULED_EVENT_CREATE:
    case i.AuditLogActions.THREAD_CREATE:
    case i.AuditLogActions.AUTO_MODERATION_RULE_CREATE:
    case i.AuditLogActions.CREATOR_MONETIZATION_REQUEST_CREATED:
    case i.AuditLogActions.ONBOARDING_PROMPT_CREATE:
    case i.AuditLogActions.ONBOARDING_CREATE:
    case i.AuditLogActions.GUILD_HOME_FEATURE_ITEM:
    case i.AuditLogActions.SOUNDBOARD_SOUND_CREATE:
    case i.AuditLogActions.HOME_SETTINGS_CREATE:
    case i.AuditLogActions.VOICE_CHANNEL_STATUS_CREATE:
      return i.AuditLogActionTypes.CREATE;
    case i.AuditLogActions.CHANNEL_DELETE:
    case i.AuditLogActions.CHANNEL_OVERWRITE_DELETE:
    case i.AuditLogActions.MEMBER_KICK:
    case i.AuditLogActions.MEMBER_PRUNE:
    case i.AuditLogActions.MEMBER_BAN_ADD:
    case i.AuditLogActions.ROLE_DELETE:
    case i.AuditLogActions.INVITE_DELETE:
    case i.AuditLogActions.WEBHOOK_DELETE:
    case i.AuditLogActions.EMOJI_DELETE:
    case i.AuditLogActions.STICKER_DELETE:
    case i.AuditLogActions.MESSAGE_DELETE:
    case i.AuditLogActions.MESSAGE_BULK_DELETE:
    case i.AuditLogActions.MESSAGE_UNPIN:
    case i.AuditLogActions.INTEGRATION_DELETE:
    case i.AuditLogActions.MEMBER_DISCONNECT:
    case i.AuditLogActions.STAGE_INSTANCE_DELETE:
    case i.AuditLogActions.GUILD_SCHEDULED_EVENT_DELETE:
    case i.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
    case i.AuditLogActions.THREAD_DELETE:
    case i.AuditLogActions.AUTO_MODERATION_BLOCK_MESSAGE:
    case i.AuditLogActions.AUTO_MODERATION_RULE_DELETE:
    case i.AuditLogActions.ONBOARDING_PROMPT_DELETE:
    case i.AuditLogActions.GUILD_HOME_REMOVE_ITEM:
    case i.AuditLogActions.SOUNDBOARD_SOUND_DELETE:
    case i.AuditLogActions.VOICE_CHANNEL_STATUS_DELETE:
      return i.AuditLogActionTypes.DELETE;
    case i.AuditLogActions.GUILD_UPDATE:
    case i.AuditLogActions.CHANNEL_UPDATE:
    case i.AuditLogActions.CHANNEL_OVERWRITE_UPDATE:
    case i.AuditLogActions.MEMBER_UPDATE:
    case i.AuditLogActions.MEMBER_ROLE_UPDATE:
    case i.AuditLogActions.ROLE_UPDATE:
    case i.AuditLogActions.INVITE_UPDATE:
    case i.AuditLogActions.WEBHOOK_UPDATE:
    case i.AuditLogActions.EMOJI_UPDATE:
    case i.AuditLogActions.STICKER_UPDATE:
    case i.AuditLogActions.INTEGRATION_UPDATE:
    case i.AuditLogActions.MEMBER_MOVE:
    case i.AuditLogActions.STAGE_INSTANCE_UPDATE:
    case i.AuditLogActions.GUILD_SCHEDULED_EVENT_UPDATE:
    case i.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
    case i.AuditLogActions.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
    case i.AuditLogActions.THREAD_UPDATE:
    case i.AuditLogActions.APPLICATION_COMMAND_PERMISSION_UPDATE:
    case i.AuditLogActions.CREATOR_MONETIZATION_TERMS_ACCEPTED:
    case i.AuditLogActions.AUTO_MODERATION_RULE_UPDATE:
    case i.AuditLogActions.AUTO_MODERATION_FLAG_TO_CHANNEL:
    case i.AuditLogActions.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
    case i.AuditLogActions.AUTO_MODERATION_QUARANTINE_USER:
    case i.AuditLogActions.ONBOARDING_PROMPT_UPDATE:
    case i.AuditLogActions.ONBOARDING_UPDATE:
    case i.AuditLogActions.SOUNDBOARD_SOUND_UPDATE:
    case i.AuditLogActions.HOME_SETTINGS_UPDATE:
      return i.AuditLogActionTypes.UPDATE
  }
  return i.AuditLogActionTypes.ALL
}
class I {
  constructor(e, t, s) {
    u(this, "key", void 0), u(this, "oldValue", void 0), u(this, "newValue", void 0), u(this, "subtarget", void 0), this.key = e, this.oldValue = t, this.newValue = s
  }
}
class r extends a.default {
  constructor(e) {
    var t, s, E, a, n, i;
    super(), u(this, "id", void 0), u(this, "actionType", void 0), u(this, "action", void 0), u(this, "targetType", void 0), u(this, "targetId", void 0), u(this, "target", void 0), u(this, "userId", void 0), u(this, "changes", void 0), u(this, "timestampStart", void 0), u(this, "timestampEnd", void 0), u(this, "user", void 0), u(this, "options", void 0), this.id = e.id, this.action = e.action, this.actionType = l(this.action), this.targetId = e.targetId, this.timestampStart = null !== (t = e.timestampStart) && void 0 !== t ? t : _()(T.default.extractTimestamp(this.id)), this.timestampEnd = null !== (s = e.timestampEnd) && void 0 !== s ? s : this.timestampStart, this.userId = e.userId, this.changes = null !== (E = e.changes) && void 0 !== E ? E : [], this.targetType = A(this.action), this.options = null !== (a = e.options) && void 0 !== a ? a : {}, this.target = null !== (n = e.target) && void 0 !== n ? n : e.id, this.user = null !== (i = e.user) && void 0 !== i ? i : null
  }
}
t.default = r