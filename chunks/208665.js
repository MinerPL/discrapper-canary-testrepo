var s,
	l,
	a,
	i,
	r = t(392711),
	o = t.n(r),
	c = t(442837),
	d = t(570140),
	I = t(45966),
	N = t(999382),
	_ = t(981631),
	u = t(290511);
let E = !1,
	T = null,
	m = [],
	O = !1,
	S = [];
function D() {
	(function () {
		(E = !1), (T = null), (S = []), (O = !1);
	})(),
		null != (T = N.Z.getGuildId()) && N.Z.getSection() === _.pNK.ONBOARDING && ((m = I.Z.getOnboardingPrompts(T)), (O = I.Z.isAdvancedMode(T)));
}
class G extends (i = c.ZP.Store) {
	initialize() {
		this.waitFor(N.Z, I.Z);
	}
	hasChanges() {
		return null != T && !o().isEqual(I.Z.getOnboardingPrompts(T), m);
	}
	get guildId() {
		return T;
	}
	get submitting() {
		return E;
	}
	get errors() {
		return S;
	}
	get editedOnboardingPrompts() {
		return m;
	}
	get advancedMode() {
		return O;
	}
}
(a = 'GuildSettingsOnboardingPromptsStore'),
	(l = 'displayName') in (s = G)
		? Object.defineProperty(s, l, {
				value: a,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (s[l] = a),
	(n.Z = new G(d.Z, {
		GUILD_SETTINGS_INIT: D,
		GUILD_SETTINGS_SET_SECTION: D,
		GUILD_ONBOARDING_PROMPTS_FETCH_SUCCESS: D,
		GUILD_SETTINGS_ONBOARDING_PROMPTS_RESET: D,
		GUILD_SETTINGS_DEFAULT_CHANNELS_RESET: D,
		GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_SUCCESS: D,
		GUILD_SETTINGS_ONBOARDING_PROMPTS_SAVE_FAILED: function (e) {
			var n;
			(S = null !== (n = e.errors) && void 0 !== n ? n : []), (E = !1);
		},
		GUILD_SETTINGS_ONBOARDING_PROMPTS_EDIT: function (e) {
			let { prompts: n } = e;
			m = n;
		},
		GUILD_SETTINGS_ONBOARDING_PROMPTS_SUBMIT: function () {
			(E = !0), (S = []);
		},
		GUILD_SETTINGS_ONBOARDING_PROMPTS_ERRORS: function (e) {
			var n;
			S = null !== (n = e.errors) && void 0 !== n ? n : [];
		},
		GUILD_SETTINGS_ONBOARDING_SET_MODE: function (e) {
			let { mode: n } = e;
			O = n === u.Un.ONBOARDING_ADVANCED;
		}
	}));
