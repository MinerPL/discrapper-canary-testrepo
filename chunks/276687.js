var s = n(735250);
n(470079);
var a = n(442837),
	i = n(852860),
	r = n(999382),
	l = n(524329),
	o = n(575258),
	c = n(689938);
t.Z = () => {
	let { guild: e } = (0, a.e7)([r.Z], () => r.Z.getProps()),
		{ submitting: t, welcomeSettings: n } = (0, a.e7)([o.Z], () => o.Z.getSettingsProps());
	return null == e
		? null
		: (0, s.jsx)(i.Z, {
				onSave: () => (0, l.Es)(e.id, n),
				onReset: l.Xb,
				submitting: t,
				onSaveText: c.Z.Messages.TRY_AGAIN,
				message: c.Z.Messages.GUILD_SETTINGS_PUBLIC_WELCOME_UPDATE_FAILURE
			});
};
