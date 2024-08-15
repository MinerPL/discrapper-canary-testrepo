let s, a, i;
n(47120);
var r,
	l,
	o,
	c,
	d = n(392711),
	u = n.n(d),
	_ = n(149765),
	I = n(866442),
	E = n(442837),
	T = n(570140),
	m = n(561654),
	N = n(430824),
	S = n(990492),
	h = n(823379),
	g = n(700785),
	C = n(999382),
	x = n(981631);
let p = new Set(),
	R = x.QZA.CLOSED,
	f = !1,
	L = !1,
	O = [],
	A = [],
	M = !1,
	D = new Set(),
	v = new Map(),
	j = new Map();
function Z() {
	if (null == s || null == O) return [];
	let e = u()(N.Z.getRoles(s.id))
		.values()
		.sortBy((e) => {
			let { position: t } = e;
			return t;
		})
		.reverse()
		.value();
	return S.ZP.calculatePositionDeltas({
		oldOrdering: e,
		newOrdering: O,
		idGetter: (e) => {
			let { id: t } = e;
			return t;
		},
		existingPositionGetter: (e) => {
			let { originalPosition: t } = e;
			return null != t ? t : 1 / 0;
		},
		ascending: !1
	});
}
function b(e) {
	let { section: t } = e;
	if (null != s || t !== x.pNK.ROLES) return !1;
	U();
}
function U() {
	let e = !(arguments.length > 0) || void 0 === arguments[0] || arguments[0];
	(s = C.Z.getProps().guild),
		(f = !1),
		(L = !1),
		(i = void 0),
		p.clear(),
		(R = x.QZA.OPEN),
		(A = [
			...(O =
				null != s
					? u()(N.Z.getRoles(s.id))
							.values()
							.sortBy((e) => {
								let { position: t } = e;
								return t;
							})
							.reverse()
							.value()
					: [])
		]),
		(M = !1),
		e &&
			(j.clear(),
			v.forEach((e, t) => {
				j.set(t, [...e]);
			}));
}
let G = u().debounce(() => {
	let e = !1;
	L && !(L = Z().length > 0) && (e = !0),
		[...p].forEach((t) => {
			u().isEqual(
				B(t),
				(function (e) {
					return A.find((t) => {
						let { id: n } = t;
						return n === e;
					});
				})(t)
			) && (p.delete(t), (e = !0));
		}),
		0 === p.size && (f = !1),
		M && u().isEqual(v, j) && ((e = !0), (M = !1)),
		e && k.emitChange();
}, 500);
function P(e, t) {
	let n = O.indexOf(e);
	if (n < 0) return !1;
	let s = {
		...e,
		...t
	};
	(O[n] = s), (O = [...O]), (f = !0), p.add(s.id), G();
}
function B(e) {
	return O.find((t) => {
		let { id: n } = t;
		return n === e;
	});
}
function y(e) {
	let { guildId: t } = e;
	if (null == s || t !== s.id || R === x.QZA.SUBMITTING) return !1;
	s = C.Z.getProps().guild;
	let n = [];
	null != s &&
		(n = u()(N.Z.getRoles(s.id))
			.values()
			.sortBy((e) => {
				let { position: t } = e;
				return t;
			})
			.reverse()
			.value()),
		p.forEach((e) => {
			let t = B(e),
				s = -1;
			null ==
				n.find((t, n) => {
					let { id: a } = t;
					if (a === e) return (s = n), !0;
				}) || null == t
				? p.delete(e)
				: (n[s] = t);
		}),
		0 === p.size && (f = !1),
		(L = !1),
		(O = [...n]);
}
class F extends (r = E.ZP.Store) {
	initialize() {
		this.waitFor(C.Z, m.Z, N.Z);
	}
	hasChanges() {
		return f || L || M;
	}
	get errorMessage() {
		return i;
	}
	get hasSortChanges() {
		return L;
	}
	get hasRoleConfigurationChanges() {
		return M;
	}
	get guild() {
		return s;
	}
	get editedRoleIds() {
		return Array.from(p);
	}
	get editedRoleIdsForConfigurations() {
		return D;
	}
	get roles() {
		return O;
	}
	get formState() {
		return R;
	}
	getSortDeltas() {
		return Z();
	}
	showNotice() {
		return this.hasChanges();
	}
	getRole(e) {
		return B(e);
	}
	getPermissionSearchQuery() {
		return a;
	}
	getEditedRoleConnectionConfigurationsMap() {
		return j;
	}
}
(c = 'GuildSettingsRolesStore'),
	(o = 'displayName') in (l = F)
		? Object.defineProperty(l, o, {
				value: c,
				enumerable: !0,
				configurable: !0,
				writable: !0
			})
		: (l[o] = c);
let k = new F(
	T.Z,
	__OVERLAY__
		? {}
		: {
				GUILD_SETTINGS_ROLES_INIT: () => U(),
				GUILD_SETTINGS_INIT: b,
				GUILD_SETTINGS_SET_SECTION: b,
				GUILD_SETTINGS_ROLES_SORT_UPDATE: function (e) {
					let { roles: t } = e;
					if (null != O && t.length !== O.length) return !1;
					(O = t.map((e) => B(e)).filter(h.lm)), (L = !0), G();
				},
				GUILD_SETTINGS_ROLES_UPDATE_PERMISSIONS: function (e) {
					let { id: t, flag: n, allow: s } = e,
						a = B(t);
					if (null == a) return !1;
					let { permissions: i } = a;
					return P(a, { permissions: (i = s ? _.IH(i, n) : _.Od(i, n)) });
				},
				GUILD_SETTINGS_ROLES_UPDATE_PERMISSION_SET: function (e) {
					let { id: t, permissions: n } = e,
						s = B(t);
					return null != s && P(s, { permissions: n });
				},
				GUILD_SETTINGS_ROLES_CLEAR_PERMISSIONS: function (e) {
					let { id: t } = e,
						n = B(t);
					return null != n && P(n, { permissions: g.Hn });
				},
				GUILD_SETTINGS_ROLES_UPDATE_NAME: function (e) {
					let { id: t, name: n } = e,
						s = B(t);
					return null != s && P(s, { name: n });
				},
				GUILD_SETTINGS_ROLES_UPDATE_DESCRIPTION: function (e) {
					let { id: t, description: n } = e,
						s = B(t);
					return null != s && P(s, { description: n });
				},
				GUILD_SETTINGS_ROLES_UPDATE_COLOR: function (e) {
					let { id: t, color: n } = e,
						s = 0 === n ? null : (0, I.Rf)(n),
						a = B(t);
					return (
						null != a &&
						P(a, {
							color: n,
							colorString: s
						})
					);
				},
				GUILD_SETTINGS_ROLES_UPDATE_SETTINGS: function (e) {
					let { id: t, hoist: n, mentionable: s } = e,
						a = B(t);
					return (
						null != a &&
						P(a, {
							hoist: n,
							mentionable: s
						})
					);
				},
				GUILD_SETTINGS_ROLES_UPDATE_ROLE_ICON: function (e) {
					let { id: t, icon: n, unicodeEmoji: s } = e,
						a = B(t);
					return (
						null != a &&
						P(a, {
							icon: n,
							unicodeEmoji: s
						})
					);
				},
				GUILD_SETTINGS_ROLE_SELECT: function (e) {
					let { role: t, searchQuery: n } = e;
					if (((a = n), null != t)) {
						if (null != B(t.id)) {
							P(t, t);
							return;
						}
						(O = [...O, t]), G();
					}
				},
				GUILD_ROLE_CONNECTIONS_CONFIGURATIONS_FETCH_SUCCESS: function (e) {
					let { roleId: t, roleConnectionConfigurations: n } = e,
						s = B(t);
					if (null == s) return !1;
					let a = v.get(s.id);
					if (u().isEqual(a, n)) return !1;
					j.set(s.id, n), v.set(s.id, n), G();
				},
				GUILD_SETTINGS_ROLES_UPDATE_ROLE_CONNECTION_CONFIGURATIONS: function (e) {
					let { roleId: t, roleConnectionConfigurations: n } = e,
						s = B(t);
					if (null == s) return !1;
					(M = !0), D.add(s.id), j.set(s.id, n), G();
				},
				GUILD_SETTINGS_CLOSE: function () {
					(s = null), (A = O = []), v.clear(), p.clear(), j.clear(), (D = new Set()), (f = !1), (L = !1), (M = !1), (R = x.QZA.CLOSED);
				},
				GUILD_ROLE_CREATE: y,
				GUILD_ROLE_UPDATE: y,
				GUILD_ROLE_DELETE: function (e) {
					return D.has(e.roleId) && (D.delete(e.roleId), v.delete(e.roleId), j.delete(e.roleId), (M = !1)), y(e);
				},
				GUILD_SETTINGS_ROLES_SUBMITTING: function () {
					R = x.QZA.SUBMITTING;
				},
				GUILD_SETTINGS_ROLES_SAVE_FAIL: function (e) {
					let { message: t } = e;
					(R = x.QZA.OPEN), (i = t);
				},
				GUILD_SETTINGS_ROLES_SAVE_SUCCESS: function () {
					U(!1);
				}
			}
);
t.Z = k;
