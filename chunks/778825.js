let r, i, a, s, o, l, u, c, d, _, E;
var f,
	h,
	p,
	I,
	m = n(442837),
	T = n(570140),
	g = n(981631);
let S = g.QZA.CLOSED,
	A = {};
function N() {
	v(), O(), (A = {}), (S = g.QZA.OPEN);
}
function v() {
	(r = void 0), (u = void 0), (i = void 0);
}
function O() {
	(s = void 0), (o = void 0), (l = void 0), (c = void 0), (a = void 0);
}
class R extends (I = m.ZP.Store) {
	getFormState() {
		return S;
	}
	getErrors() {
		return A;
	}
	showNotice() {
		return (
			void 0 !== r ||
			void 0 !== i ||
			void 0 !== a ||
			void 0 !== s ||
			void 0 !== o ||
			void 0 !== l ||
			void 0 !== u ||
			void 0 !== c
		);
	}
	getIsSubmitDisabled() {
		return void 0 !== o && o.length > g.tPV;
	}
	getPendingAvatar() {
		return r;
	}
	getPendingAvatarDecoration() {
		return i;
	}
	getPendingProfileEffectId() {
		return a;
	}
	getPendingBanner() {
		return s;
	}
	getPendingBio() {
		return o;
	}
	getPendingNickname() {
		return u;
	}
	getPendingPronouns() {
		return l;
	}
	getPendingAccentColor() {
		return u;
	}
	getPendingThemeColors() {
		return c;
	}
	getAllPending() {
		return {
			pendingAvatar: r,
			pendingAvatarDecoration: i,
			pendingProfileEffectId: a,
			pendingBanner: s,
			pendingBio: o,
			pendingPronouns: l,
			pendingNickname: u,
			pendingThemeColors: c
		};
	}
	getGuild() {
		return d;
	}
	getSource() {
		return _;
	}
	getAnalyticsLocations() {
		return E;
	}
}
(p = 'GuildIdentitySettingsStore'),
	(h = 'displayName') in (f = R)
		? Object.defineProperty(f, h, {
				value: p,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (f[h] = p),
	(t.Z = new R(T.Z, {
		GUILD_IDENTITY_SETTINGS_INIT: function (e) {
			(d = e.guild), (S = g.QZA.OPEN), (A = {}), (_ = e.source), (E = e.analyticsLocations);
		},
		GUILD_IDENTITY_SETTINGS_RESET_AND_CLOSE_FORM: function () {
			N(), (S = g.QZA.CLOSED), (A = {}), (d = null), (_ = void 0), (E = []);
		},
		GUILD_IDENTITY_SETTINGS_SET_GUILD: function (e) {
			(d = e.guild), (A = {});
		},
		GUILD_IDENTITY_SETTINGS_SUBMIT: function () {
			(S = g.QZA.SUBMITTING), (A = {});
		},
		GUILD_IDENTITY_SETTINGS_SUBMIT_FAILURE: function (e) {
			var t;
			if (S !== g.QZA.SUBMITTING) return !1;
			(S = g.QZA.OPEN), (A = null !== (t = e.errors) && void 0 !== t ? t : {});
		},
		USER_PROFILE_UPDATE_FAILURE: function (e) {
			(S = g.QZA.OPEN), (A = e.errors);
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR: function (e) {
			let { avatar: t } = e;
			r = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_AVATAR_DECORATION: function (e) {
			let { avatarDecoration: t } = e;
			i = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_PROFILE_EFFECT_ID: function (e) {
			let { profileEffectId: t } = e;
			a = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_BANNER: function (e) {
			let { banner: t } = e;
			s = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_BIO: function (e) {
			let { bio: t } = e;
			o = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_PRONOUNS: function (e) {
			let { pronouns: t } = e;
			l = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_NICKNAME: function (e) {
			let { nickname: t } = e;
			u = t;
		},
		GUILD_IDENTITY_SETTINGS_SET_PENDING_THEME_COLORS: function (e) {
			let { themeColors: t } = e;
			c = t;
		},
		GUILD_IDENTITY_SETTINGS_RESET_PENDING_MEMBER_CHANGES: v,
		GUILD_IDENTITY_SETTINGS_RESET_PENDING_PROFILE_CHANGES: O,
		GUILD_IDENTITY_SETTINGS_RESET_ALL_PENDING: N,
		GUILD_IDENTITY_SETTINGS_SUBMIT_SUCCESS: N,
		GUILD_IDENTITY_SETTINGS_CLEAR_ERRORS: function () {
			A = {};
		}
	}));
