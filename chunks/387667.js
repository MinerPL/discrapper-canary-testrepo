E.d(_, {
	Pw: function () {
		return N;
	},
	ms: function () {
		return l;
	},
	p5: function () {
		return a;
	}
});
var s = E(913527),
	T = E.n(s),
	I = E(81825),
	n = E(960048),
	t = E(709054),
	A = E(981631);
function r(e, _, E) {
	return (
		_ in e
			? Object.defineProperty(e, _, {
					value: E,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[_] = E),
		e
	);
}
function a(e) {
	if (e === A.rsA.ALL) return A.KFR.ALL;
	if (e <= A.rsA.GUILD_UPDATE) return A.KFR.GUILD;
	if (e <= A.rsA.CHANNEL_DELETE || e === A.rsA.MESSAGE_BULK_DELETE) return A.KFR.CHANNEL;
	else if (e <= A.rsA.CHANNEL_OVERWRITE_DELETE) return A.KFR.CHANNEL_OVERWRITE;
	else if (e <= A.rsA.BOT_ADD || e === A.rsA.MESSAGE_DELETE || e === A.rsA.MESSAGE_PIN || e === A.rsA.MESSAGE_UNPIN) return A.KFR.USER;
	else if (e <= A.rsA.ROLE_DELETE) return A.KFR.ROLE;
	else if (e <= A.rsA.INVITE_DELETE) return A.KFR.INVITE;
	else if (e <= A.rsA.WEBHOOK_DELETE) return A.KFR.WEBHOOK;
	else if (e <= A.rsA.EMOJI_DELETE) return A.KFR.EMOJI;
	else if (e <= A.rsA.INTEGRATION_DELETE) return A.KFR.INTEGRATION;
	else if (e <= A.rsA.STAGE_INSTANCE_DELETE) return A.KFR.STAGE_INSTANCE;
	else if (e <= A.rsA.STICKER_DELETE) return A.KFR.STICKER;
	else if (e <= A.rsA.GUILD_SCHEDULED_EVENT_DELETE) return A.KFR.GUILD_SCHEDULED_EVENT;
	else if (e <= A.rsA.THREAD_DELETE) return A.KFR.THREAD;
	else if (e === A.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE) return A.KFR.APPLICATION_COMMAND;
	else if (e <= A.rsA.SOUNDBOARD_SOUND_DELETE) return A.KFR.GUILD_SOUNDBOARD;
	else if (e < A.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return A.KFR.AUTO_MODERATION_RULE;
	else if (e === A.rsA.AUTO_MODERATION_BLOCK_MESSAGE) return A.KFR.USER;
	else if (e === A.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL) return A.KFR.USER;
	else if (e === A.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED) return A.KFR.USER;
	else if (e === A.rsA.AUTO_MODERATION_QUARANTINE_USER) return A.KFR.USER;
	else if (e <= A.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED) return A.KFR.GUILD;
	else if (e <= A.rsA.ONBOARDING_PROMPT_DELETE) return A.KFR.ONBOARDING_PROMPT;
	else if (e <= A.rsA.ONBOARDING_UPDATE) return A.KFR.GUILD_ONBOARDING;
	else if (e <= A.rsA.GUILD_HOME_REMOVE_ITEM) return A.KFR.GUILD_HOME;
	else if (e <= A.rsA.HARMFUL_LINKS_BLOCKED_MESSAGE) return A.KFR.GUILD;
	else if (e <= A.rsA.HOME_SETTINGS_UPDATE) return A.KFR.HOME_SETTINGS;
	else if (e <= A.rsA.VOICE_CHANNEL_STATUS_DELETE) return A.KFR.VOICE_CHANNEL_STATUS;
	else if (e <= A.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE) return A.KFR.GUILD_SCHEDULED_EVENT_EXCEPTION;
	return n.Z.captureMessage('Unknown target type for: '.concat(e)), A.KFR.UNKNOWN;
}
function N(e) {
	switch (e) {
		case A.rsA.CHANNEL_CREATE:
		case A.rsA.CHANNEL_OVERWRITE_CREATE:
		case A.rsA.MEMBER_BAN_REMOVE:
		case A.rsA.ROLE_CREATE:
		case A.rsA.INVITE_CREATE:
		case A.rsA.WEBHOOK_CREATE:
		case A.rsA.EMOJI_CREATE:
		case A.rsA.STICKER_CREATE:
		case A.rsA.MESSAGE_PIN:
		case A.rsA.BOT_ADD:
		case A.rsA.INTEGRATION_CREATE:
		case A.rsA.STAGE_INSTANCE_CREATE:
		case A.rsA.GUILD_SCHEDULED_EVENT_CREATE:
		case A.rsA.THREAD_CREATE:
		case A.rsA.AUTO_MODERATION_RULE_CREATE:
		case A.rsA.CREATOR_MONETIZATION_REQUEST_CREATED:
		case A.rsA.ONBOARDING_PROMPT_CREATE:
		case A.rsA.ONBOARDING_CREATE:
		case A.rsA.GUILD_HOME_FEATURE_ITEM:
		case A.rsA.SOUNDBOARD_SOUND_CREATE:
		case A.rsA.HOME_SETTINGS_CREATE:
		case A.rsA.VOICE_CHANNEL_STATUS_CREATE:
			return A.vB8.CREATE;
		case A.rsA.CHANNEL_DELETE:
		case A.rsA.CHANNEL_OVERWRITE_DELETE:
		case A.rsA.MEMBER_KICK:
		case A.rsA.MEMBER_PRUNE:
		case A.rsA.MEMBER_BAN_ADD:
		case A.rsA.ROLE_DELETE:
		case A.rsA.INVITE_DELETE:
		case A.rsA.WEBHOOK_DELETE:
		case A.rsA.EMOJI_DELETE:
		case A.rsA.STICKER_DELETE:
		case A.rsA.MESSAGE_DELETE:
		case A.rsA.MESSAGE_BULK_DELETE:
		case A.rsA.MESSAGE_UNPIN:
		case A.rsA.INTEGRATION_DELETE:
		case A.rsA.MEMBER_DISCONNECT:
		case A.rsA.STAGE_INSTANCE_DELETE:
		case A.rsA.GUILD_SCHEDULED_EVENT_DELETE:
		case A.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_DELETE:
		case A.rsA.THREAD_DELETE:
		case A.rsA.AUTO_MODERATION_BLOCK_MESSAGE:
		case A.rsA.AUTO_MODERATION_RULE_DELETE:
		case A.rsA.ONBOARDING_PROMPT_DELETE:
		case A.rsA.GUILD_HOME_REMOVE_ITEM:
		case A.rsA.SOUNDBOARD_SOUND_DELETE:
		case A.rsA.VOICE_CHANNEL_STATUS_DELETE:
			return A.vB8.DELETE;
		case A.rsA.GUILD_UPDATE:
		case A.rsA.CHANNEL_UPDATE:
		case A.rsA.CHANNEL_OVERWRITE_UPDATE:
		case A.rsA.MEMBER_UPDATE:
		case A.rsA.MEMBER_ROLE_UPDATE:
		case A.rsA.ROLE_UPDATE:
		case A.rsA.INVITE_UPDATE:
		case A.rsA.WEBHOOK_UPDATE:
		case A.rsA.EMOJI_UPDATE:
		case A.rsA.STICKER_UPDATE:
		case A.rsA.INTEGRATION_UPDATE:
		case A.rsA.MEMBER_MOVE:
		case A.rsA.STAGE_INSTANCE_UPDATE:
		case A.rsA.GUILD_SCHEDULED_EVENT_UPDATE:
		case A.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_CREATE:
		case A.rsA.GUILD_SCHEDULED_EVENT_EXCEPTION_UPDATE:
		case A.rsA.THREAD_UPDATE:
		case A.rsA.APPLICATION_COMMAND_PERMISSION_UPDATE:
		case A.rsA.CREATOR_MONETIZATION_TERMS_ACCEPTED:
		case A.rsA.AUTO_MODERATION_RULE_UPDATE:
		case A.rsA.AUTO_MODERATION_FLAG_TO_CHANNEL:
		case A.rsA.AUTO_MODERATION_USER_COMMUNICATION_DISABLED:
		case A.rsA.AUTO_MODERATION_QUARANTINE_USER:
		case A.rsA.ONBOARDING_PROMPT_UPDATE:
		case A.rsA.ONBOARDING_UPDATE:
		case A.rsA.SOUNDBOARD_SOUND_UPDATE:
		case A.rsA.HOME_SETTINGS_UPDATE:
			return A.vB8.UPDATE;
	}
	return A.vB8.ALL;
}
class l {
	constructor(e, _, E) {
		r(this, 'key', void 0), r(this, 'oldValue', void 0), r(this, 'newValue', void 0), r(this, 'subtarget', void 0), (this.key = e), (this.oldValue = _), (this.newValue = E);
	}
}
class L extends I.Z {
	constructor(e) {
		var _, E, s, I, n, A;
		super(), r(this, 'id', void 0), r(this, 'actionType', void 0), r(this, 'action', void 0), r(this, 'targetType', void 0), r(this, 'targetId', void 0), r(this, 'target', void 0), r(this, 'userId', void 0), r(this, 'changes', void 0), r(this, 'timestampStart', void 0), r(this, 'timestampEnd', void 0), r(this, 'user', void 0), r(this, 'options', void 0), (this.id = e.id), (this.action = e.action), (this.actionType = N(this.action)), (this.targetId = e.targetId), (this.timestampStart = null !== (_ = e.timestampStart) && void 0 !== _ ? _ : T()(t.default.extractTimestamp(this.id))), (this.timestampEnd = null !== (E = e.timestampEnd) && void 0 !== E ? E : this.timestampStart), (this.userId = e.userId), (this.changes = null !== (s = e.changes) && void 0 !== s ? s : []), (this.targetType = a(this.action)), (this.options = null !== (I = e.options) && void 0 !== I ? I : {}), (this.target = null !== (n = e.target) && void 0 !== n ? n : e.id), (this.user = null !== (A = e.user) && void 0 !== A ? A : null);
	}
}
_.ZP = L;
