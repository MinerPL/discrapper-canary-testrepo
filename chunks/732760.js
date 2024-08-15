t.d(s, {
	d: function () {
		return a;
	},
	y: function () {
		return r;
	}
});
var n = t(981631),
	i = t(490897),
	l = t(689938);
let a = (e) => [
		{
			label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
			value: n.bL.ALL_MESSAGES
		},
		{
			label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
			value: n.bL.ONLY_MENTIONS
		},
		{
			label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_NONE,
			value: n.bL.NO_MESSAGES
		}
	],
	r = (e) => [
		{
			label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_ALL_MESSAGES,
			value: i.i.ALL_MESSAGES
		},
		{
			value: i.i.ONLY_MENTIONS,
			label: l.Z.Messages.NOTIFICATION_SETTINGS_PRESETS_MENTION_ONLY,
			disabled: (null == e ? void 0 : e.notificationSetting) === n.bL.ALL_MESSAGES
		}
	];
