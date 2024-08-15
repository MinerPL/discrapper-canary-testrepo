n.d(t, {
	I: function () {
		return c;
	},
	j: function () {
		return E;
	}
}),
	n(47120);
var r = n(498607),
	i = n.n(r),
	a = n(715903),
	s = n(69882),
	o = n(709054),
	l = n(733026);
function u(e, t, n) {
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
function c() {
	return {
		query: '',
		requireUnusualDmActivity: !1,
		requireCommunicationDisabled: !1,
		requireUnusualAccountActivity: !1,
		requireUsernameQuarantined: !1,
		selectedRoleIds: new Set(),
		selectedJoinDateOption: {
			optionId: 0,
			afterDate: null,
			beforeDate: null
		},
		selectedAccountAgeOption: {
			optionId: 0,
			afterDate: null,
			beforeDate: null
		},
		selectedJoinSourceType: void 0,
		selectedSourceInviteCode: void 0,
		selectedSort: void 0
	};
}
let d = Object.freeze(c());
function _(e, t) {
	return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1);
}
class E {
	get requiresUsernameMatch() {
		return this._searchState.query.trim().length > 0;
	}
	reset() {
		(this._searchState = c()), (this.hasDefaultQuery = !0);
	}
	updateSearchState(e) {
		return (
			(this._searchState = {
				...this._searchState,
				...e
			}),
			(this.hasDefaultQuery = i()(this._searchState, d)),
			!0
		);
	}
	resetSearchState() {
		return !this.hasDefaultQuery && ((this._searchState = c()), (this.hasDefaultQuery = !0), !0);
	}
	getSearchState() {
		return this._searchState;
	}
	isMemberIncludedInSearchResults(e) {
		let {
			query: t,
			requireUnusualDmActivity: n,
			requireCommunicationDisabled: r,
			requireUnusualAccountActivity: i,
			requireUsernameQuarantined: u,
			selectedRoleIds: c,
			selectedJoinDateOption: d,
			selectedAccountAgeOption: E,
			selectedSourceInviteCode: f,
			selectedJoinSourceType: h
		} = this._searchState;
		if (
			t.length > 0 &&
			!(function (e, t) {
				if ('' === t.trim()) return !1;
				let [n, r] = (0, l.C)(t);
				for (let t of r) if (e.userId === t) return !0;
				for (let t of n) if (_(e.nick, t)) return !0;
				if (null == e.user) return !1;
				let { globalName: i, username: a } = e.user;
				for (let e of n) if (_(a, e)) return !0;
				for (let e of n) if (_(i, e)) return !0;
				return !1;
			})(e, t)
		)
			return !1;
		if (c.size > 0) {
			var p, I;
			if (((p = e), !(0 !== (I = c).size && Array.from(I).every((e) => p.roles.includes(e))))) return !1;
		}
		if (
			(null != d.afterDate && e.joinedAtTimestamp < d.afterDate) ||
			(null != d.beforeDate && e.joinedAtTimestamp > d.beforeDate) ||
			(null != E.afterDate && o.default.extractTimestamp(e.userId) < E.afterDate) ||
			(null != E.beforeDate && o.default.extractTimestamp(e.userId) > E.beforeDate) ||
			(null != f && e.sourceInviteCode !== f) ||
			(null != h && e.joinSourceType !== h)
		)
			return !1;
		if (n || r || i || u)
			return (
				!!(
					(n && e.hasUnusualDmActivity) ||
					(r && (0, s.b)(e)) ||
					(i && e.hasUnusualAccountActivity) ||
					(u && (0, a.EY)(e))
				) || !1
			);
		return !0;
	}
	constructor(e) {
		u(this, 'guildId', void 0),
			u(this, '_searchState', void 0),
			u(this, 'hasDefaultQuery', void 0),
			(this.guildId = e),
			(this._searchState = c()),
			(this.hasDefaultQuery = !0);
	}
}
