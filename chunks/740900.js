"use strict";
n.d(t, {
  R_: function() {
    return i
  },
  cm: function() {
    return N
  }
}), n(653041), n(47120);
var i, r, s = n(498607),
  o = n.n(s),
  a = n(759174),
  l = n(493892),
  u = n(594174),
  _ = n(815790),
  d = n(588215),
  c = n(44715),
  E = n(331551);

function I(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let T = Date.now();

function h(e) {
  let t = [e.isCurrentGuildMemberByTimestamp ? "CURRENT_GUILD_MEMBER" : "NEW_GUILD_MEMBER"];
  return e.isIncludedInSearchResults && t.push("INCLUDED_IN_SEARCH_RESULTS"), t
}

function S(e) {
  return e.sort
}

function f() {
  return new a.h(h, S)
}(r = i || (i = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", r.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", r.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
class N {
  reset() {
    this._membersMap.clear(), this._membersMap = f(), this.resetNewMemberTimestamp()
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now()
  }
  enhanceNewMember(e, t) {
    var n;
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
      r = (0, _.Dw)(e.joinedAt),
      {
        hasUnusualDmActivity: s,
        hasUnusualAccountActivity: o,
        sourceInviteCode: a,
        joinSourceType: l,
        inviterId: c,
        integrationType: I
      } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
      T = u.default.getUser(e.userId);
    return {
      hasUnusualDmActivity: s,
      hasUnusualAccountActivity: o,
      sourceInviteCode: a,
      joinSourceType: l,
      inviterId: c,
      integrationType: I,
      ...e,
      isCurrentGuildMemberByTimestamp: r <= this.newMemberTimestamp,
      isIncludedInSearchResults: !1,
      user: T,
      sort: (0, E.b)(e, null !== (n = t.selectedSort) && void 0 !== n ? n : d.d$.ORDER_BY_UNSPECIFIED),
      joinedAtTimestamp: r,
      ...i
    }
  }
  _computeMemberSupplementals(e, t) {
    var n, i;
    let {
      sourceInviteCode: r,
      joinSourceType: s,
      inviterId: o,
      integrationType: a
    } = null !== (n = (0, c.W2)(this.guildId)[e]) && void 0 !== n ? n : {};
    return {
      sourceInviteCode: null != r ? r : null,
      joinSourceType: null != s ? s : null,
      inviterId: null != o ? o : null,
      integrationType: null != a ? a : null,
      hasUnusualDmActivity: null != (i = t) && new Date(i).getTime() >= T - d.rL,
      hasUnusualAccountActivity: (0, l.He)(e)
    }
  }
  createMember(e) {
    return this._membersMap.set(e.userId, e)
  }
  updateMember(e, t) {
    var n;
    if (null == t) return this._membersMap.set(e.userId, e);
    let i = {
        ...e
      },
      r = {
        ...t
      },
      s = !1,
      {
        sourceInviteCode: a,
        hasUnusualDmActivity: l,
        hasUnusualAccountActivity: u,
        joinSourceType: _,
        inviterId: d,
        integrationType: c
      } = this._computeMemberSupplementals(i.userId, null !== (n = r.unusualDMActivityUntil) && void 0 !== n ? n : i.unusualDMActivityUntil);
    for (let e in i.sourceInviteCode !== a && (r.sourceInviteCode = a), i.hasUnusualDmActivity !== l && (r.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== u && (r.hasUnusualAccountActivity = u), i.joinSourceType !== _ && (r.joinSourceType = _), i.inviterId !== d && (r.inviterId = d), i.integrationType !== c && (r.integrationType = c), r) {
      let t = r[e],
        n = i[e];
      !o()(t, n) && (i[e] = t, s = !0)
    }
    return this._membersMap.set(i.userId, i) || s
  }
  removeMember(e) {
    return this._membersMap.delete(e)
  }
  getMemberByUserId(e) {
    return this._membersMap.get(e)
  }
  values(e) {
    return this._membersMap.values(e, !0)
  }
  count(e) {
    return this._membersMap.size(e)
  }
  get version() {
    return this._membersMap.version
  }
  constructor(e) {
    I(this, "guildId", void 0), I(this, "_membersMap", void 0), I(this, "newMemberTimestamp", Date.now()), this.guildId = e, this._membersMap = f()
  }
}