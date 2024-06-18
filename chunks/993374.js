"use strict";
n.d(t, {
  I: function() {
    return _
  },
  j: function() {
    return E
  }
}), n(47120);
var i = n(498607),
  r = n.n(i),
  s = n(715903),
  o = n(69882),
  a = n(709054),
  l = n(733026);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function _() {
  return {
    query: "",
    requireUnusualDmActivity: !1,
    requireCommunicationDisabled: !1,
    requireUnusualAccountActivity: !1,
    requireUsernameQuarantined: !1,
    selectedRoleIds: new Set,
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
  }
}
let d = Object.freeze(_());

function c(e, t) {
  return null != e && (!!e.toLowerCase().includes(t.toLowerCase()) || !1)
}
class E {
  get requiresUsernameMatch() {
    return this._searchState.query.trim().length > 0
  }
  reset() {
    this._searchState = _(), this.hasDefaultQuery = !0
  }
  updateSearchState(e) {
    return this._searchState = {
      ...this._searchState,
      ...e
    }, this.hasDefaultQuery = r()(this._searchState, d), !0
  }
  resetSearchState() {
    return !this.hasDefaultQuery && (this._searchState = _(), this.hasDefaultQuery = !0, !0)
  }
  getSearchState() {
    return this._searchState
  }
  isMemberIncludedInSearchResults(e) {
    let {
      query: t,
      requireUnusualDmActivity: n,
      requireCommunicationDisabled: i,
      requireUnusualAccountActivity: r,
      requireUsernameQuarantined: u,
      selectedRoleIds: _,
      selectedJoinDateOption: d,
      selectedAccountAgeOption: E,
      selectedSourceInviteCode: I,
      selectedJoinSourceType: T
    } = this._searchState;
    if (t.length > 0 && ! function(e, t) {
        if ("" === t.trim()) return !1;
        let [n, i] = (0, l.C)(t);
        for (let t of i)
          if (e.userId === t) return !0;
        for (let t of n)
          if (c(e.nick, t)) return !0;
        if (null == e.user) return !1;
        let {
          globalName: r,
          username: s
        } = e.user;
        for (let e of n)
          if (c(s, e)) return !0;
        for (let e of n)
          if (c(r, e)) return !0;
        return !1
      }(e, t)) return !1;
    if (_.size > 0) {
      var h, S;
      if (h = e, !(0 !== (S = _).size && Array.from(S).every(e => h.roles.includes(e)))) return !1
    }
    if (null != d.afterDate && e.joinedAtTimestamp < d.afterDate || null != d.beforeDate && e.joinedAtTimestamp > d.beforeDate || null != E.afterDate && a.default.extractTimestamp(e.userId) < E.afterDate || null != E.beforeDate && a.default.extractTimestamp(e.userId) > E.beforeDate || null != I && e.sourceInviteCode !== I || null != T && e.joinSourceType !== T) return !1;
    if (n || i || r || u) return !!(n && e.hasUnusualDmActivity || i && (0, o.b)(e) || r && e.hasUnusualAccountActivity || u && (0, s.EY)(e)) || !1;
    return !0
  }
  constructor(e) {
    u(this, "guildId", void 0), u(this, "_searchState", void 0), u(this, "hasDefaultQuery", void 0), this.guildId = e, this._searchState = _(), this.hasDefaultQuery = !0
  }
}