n.d(t, {
	BG: function () {
		return T;
	},
	DO: function () {
		return N;
	},
	pt: function () {
		return m;
	}
}),
	n(47120);
var s = n(570140),
	a = n(668781),
	i = n(881052),
	r = n(45966),
	l = n(637853),
	o = n(592125),
	c = n(823379),
	d = n(889369),
	u = n(570961),
	_ = n(208665),
	I = n(290511),
	E = n(689938);
function T() {
	s.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_RESET' });
}
function m(e) {
	s.Z.dispatch({
		type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_TOGGLE',
		channelId: e
	});
}
async function N(e) {
	let t = Array.from(d.Z.editedDefaultChannelIds).filter((e) => null != o.Z.getChannel(e)),
		n = _.Z.advancedMode,
		[T, m] = (0, l.d9)(e.id, [...t]),
		N = (0, l.kl)(e.id, t, _.Z.editedOnboardingPrompts),
		S = (0, l.kl)(e.id, t, _.Z.editedOnboardingPrompts, l.V7);
	if (r.Z.getEnabled(e.id) && ((!n && (m.length < I.md || T.length < I.X)) || (n && (N.length < I.md || S.length < I.X)))) {
		a.Z.show({
			title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
			body: E.Z.Messages.DEFAULT_CHANNELS_SAVE_INVALID_DEFAULT_CHANNELS
		});
		return;
	}
	if (d.Z.hasChanges()) {
		s.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SUBMIT' });
		try {
			await (0, u.n_)(e.id, { default_channel_ids: t }),
				s.Z.dispatch({
					type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_SUCCESS',
					guildId: e.id,
					channelIds: t
				});
		} catch (n) {
			var h;
			let { fieldName: e, error: t } = null !== (h = new i.Hx(n).getAnyErrorMessageAndField()) && void 0 !== h ? h : {};
			a.Z.show({
				title: E.Z.Messages.ONBOARDING_PROMPT_SAVE_FAILED,
				body: [e, t].filter(c.lm).join(': ')
			}),
				s.Z.dispatch({ type: 'GUILD_SETTINGS_DEFAULT_CHANNELS_SAVE_FAILED' });
		}
	}
}
