n.d(t, {
	KM: function () {
		return c;
	},
	R2: function () {
		return d;
	},
	Zc: function () {
		return u;
	}
});
var r = n(442837),
	i = n(570140),
	a = n(238514),
	s = n(675478),
	o = n(581883),
	l = n(526761);
function u(e, t, n, i) {
	let a = () => {
		var r;
		return n(null === (r = o.Z.settings[e]) || void 0 === r ? void 0 : r[t]);
	};
	return {
		getSetting: a,
		updateSetting: _(a, (n) =>
			s.hW.updateAsync(
				e,
				(e) => {
					e[t] = i(n, e[t]);
				},
				l.fy.INFREQUENT_USER_ACTION
			)
		),
		useSetting: () => (0, r.e7)([o.Z], a)
	};
}
function c(e, t, n) {
	let s = () => {
		var r;
		let i = a.Z.getState()[t];
		return null !== (r = null == i ? void 0 : i.settings[n]) && void 0 !== r ? r : e.getSetting();
	};
	return {
		getSetting: s,
		useSetting: () => {
			let i = e.useSetting(),
				s = (0, r.e7)([a.Z], () => {
					let e = a.Z.getState()[t];
					return null == e ? void 0 : e.settings[n];
				});
			return null != s ? s : i;
		},
		updateSetting: _(s, (r) =>
			a.Z.shouldSync(t)
				? e.updateSetting(r)
				: (i.Z.dispatch({
						type: 'SELECTIVELY_SYNCED_USER_SETTINGS_UPDATE',
						changes: { [t]: { settings: { [n]: r } } }
					}),
					Promise.resolve())
		)
	};
}
function d(e, t, n, r) {
	let a = () => {
		var t;
		return null !== (t = n()) && void 0 !== t ? t : e.getSetting();
	};
	return {
		getSetting: a,
		useSetting: () => {
			let t = e.useSetting(),
				n = r();
			return null != n ? n : t;
		},
		updateSetting: _(
			a,
			(n) => (
				i.Z.dispatch({
					type: 'USER_SETTINGS_OVERRIDE_CLEAR',
					settings: [t]
				}),
				e.updateSetting(n)
			)
		)
	};
}
function _(e, t) {
	return function (n) {
		return 'function' == typeof n ? t(n(e())) : t(n);
	};
}
