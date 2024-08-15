let r;
var i,
	a,
	s = n(442837),
	o = n(524437),
	l = n(692547),
	u = n(780384),
	c = n(570140),
	d = n(607070),
	_ = n(47760),
	E = n(540059);
n(57132);
var f = n(541049);
n(449934);
var h = n(12647),
	p = n(358085),
	m = n(238514),
	I = n(740492),
	T = n(581883),
	g = n(874893),
	S = n(981631),
	A = n(469115);
function N(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
let v = null !== (i = (0, f.Z)()) && void 0 !== i ? i : S.BRd.DARK,
	O = null,
	R = !1;
function C() {
	let e = (function () {
		var e, t;
		if (__OVERLAY__) return S.BRd.DARK;
		if (d.Z.syncForcedColors && 'active' === d.Z.systemForcedColors && null != r) return r;
		let n = I.ZP.useSystemTheme;
		if (n === g.K.ON && null != r) return r;
		let i = null === (e = m.Z.getAppearanceSettings()) || void 0 === e ? void 0 : e.theme;
		if (null != i) return i;
		let a = null === (t = T.Z.settings.appearance) || void 0 === t ? void 0 : t.theme;
		if (null == a) return v;
		if (!E.i.getCurrentConfig({ location: 'ThemeStore' }).enabled) return a === o.Q2.LIGHT ? S.BRd.LIGHT : S.BRd.DARK;
		switch (a) {
			case o.Q2.LIGHT:
				return S.BRd.LIGHT;
			case o.Q2.DARK:
				return S.BRd.DARK;
			case o.Q2.DARKER:
				return S.BRd.DARKER;
			case o.Q2.MIDNIGHT:
				return S.BRd.MIDNIGHT;
			default:
				return S.BRd.DARK;
		}
	})();
	return e;
}
function y() {
	return L();
}
function D() {
	return L();
}
function L() {
	let e = C();
	return e !== v && ((v = e), !0);
}
class b extends (a = s.ZP.PersistedStore) {
	initialize(e) {
		(null == e ? void 0 : e.theme) != null && (v = e.theme), this.waitFor(I.ZP, m.Z, T.Z, d.Z);
	}
	getState() {
		return { theme: this.theme };
	}
	get darkSidebar() {
		return (0, u.ap)(this.theme) && I.ZP.darkSidebar && !R;
	}
	get theme() {
		return C();
	}
	get systemTheme() {
		return O;
	}
	get systemPrefersColorScheme() {
		return r;
	}
	get isSystemThemeAvailable() {
		return null !== O;
	}
}
N(b, 'displayName', 'ThemeStore'),
	N(b, 'persistKey', 'ThemeStore'),
	N(b, 'migrations', [
		(e) => {
			let t = e.theme;
			return (
				'amoled' === t && (t = 'midnight'),
				{
					...e,
					theme: t
				}
			);
		}
	]),
	(t.Z = new b(c.Z, {
		CACHE_LOADED: y,
		CONNECTION_OPEN: y,
		LOGOUT: function (e) {
			return (
				!e.isSwitchingAccount &&
				v !== S.BRd.DARK &&
				((v = S.BRd.DARK),
				(function () {
					!__OVERLAY__ && p.isPlatformEmbedded && h.Z.setApplicationBackgroundColor((0, u.wj)(C()) ? l.Z.unsafe_rawColors.PRIMARY_700.resolve({ saturation: d.Z.saturation }).hsl() : l.Z.unsafe_rawColors.WHITE_500.resolve({ saturation: d.Z.saturation }).hsl());
				})(),
				L())
			);
		},
		OVERLAY_INITIALIZE: y,
		SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE: D,
		UNSYNCED_USER_SETTINGS_UPDATE: D,
		USER_SETTINGS_PROTO_UPDATE: y,
		UPDATE_BACKGROUND_GRADIENT_PRESET: function (e) {
			var t, n;
			let { presetId: r } = e;
			v = null != r && null !== (n = null === (t = A.qt[r]) || void 0 === t ? void 0 : t.theme) && void 0 !== n ? n : C();
			let i = null != r;
			return R !== i
				? ((R = i), !0)
				: (function () {
						let e = C();
						return !(0, _.qu)(v, e) && ((v = e), !0);
					})();
		},
		RESET_PREVIEW_CLIENT_THEME: y,
		SYSTEM_THEME_CHANGE: function (e) {
			let { systemTheme: t } = e;
			return (O = t), L();
		},
		ACCESSIBILITY_SYSTEM_COLOR_PREFERENCES_CHANGED: function (e) {
			return (r = e.systemPrefersColorScheme), L();
		},
		ACCESSIBILITY_DARK_SIDEBAR_TOGGLE: function () {
			return (0, u.ap)(C());
		}
	}));
