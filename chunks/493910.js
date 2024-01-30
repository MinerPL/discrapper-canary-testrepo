"use strict";
r.r(t), r.d(t, {
  MemberSafetySecondaryIndex: function() {
    return i
  },
  GuildMemberSafetyMembers: function() {
    return g
  }
}), r("424973"), r("222007");
var i, n, s = r("969176"),
  u = r.n(s),
  a = r("407846"),
  l = r("654017"),
  d = r("26989"),
  h = r("697218"),
  o = r("64905"),
  m = r("490931"),
  _ = r("178406"),
  c = r("159132"),
  M = r("165958");
let S = Date.now();

function I(e) {
  let t = !e.isCurrentGuildMemberByTimestamp,
    r = [t ? "NEW_GUILD_MEMBER" : "CURRENT_GUILD_MEMBER"];
  return e.isIncludedInSearchResults && r.push("INCLUDED_IN_SEARCH_RESULTS"), r
}

function f(e) {
  return e.sort
}

function E() {
  return new a.default(I, f)
}(n = i || (i = {})).NEW_GUILD_MEMBER = "NEW_GUILD_MEMBER", n.CURRENT_GUILD_MEMBER = "CURRENT_GUILD_MEMBER", n.INCLUDED_IN_SEARCH_RESULTS = "INCLUDED_IN_SEARCH_RESULTS";
class g {
  reset() {
    this._membersMap.clear(), this._membersMap = E(), this.resetNewMemberTimestamp()
  }
  resetNewMemberTimestamp() {
    this.newMemberTimestamp = Date.now()
  }
  enhanceNewMember(e) {
    var t;
    let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      i = (0, o.getJoinedAtTimestamp)(e.joinedAt),
      {
        hasUnusualDmActivity: n,
        hasUnusualAccountActivity: s,
        sourceInviteCode: u,
        joinSourceType: a,
        inviterId: l,
        integrationType: d
      } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
      c = h.default.getUser(e.userId),
      S = _.default.getSearchStateByGuildId(this.guildId),
      I = {
        hasUnusualDmActivity: n,
        hasUnusualAccountActivity: s,
        sourceInviteCode: u,
        joinSourceType: a,
        inviterId: l,
        integrationType: d,
        ...e,
        isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
        isIncludedInSearchResults: !1,
        user: c,
        sort: (0, M.getSortValueForMember)(e, null !== (t = S.selectedSort) && void 0 !== t ? t : m.OrderBy.ORDER_BY_UNSPECIFIED),
        joinedAtTimestamp: i,
        ...r
      };
    return I
  }
  _computeMemberSupplementals(e, t) {
    var r;
    let i = (0, c.getMemberSupplementalByGuildId)(this.guildId),
      {
        sourceInviteCode: n,
        joinSourceType: s,
        inviterId: u,
        integrationType: a
      } = null !== (r = i[e]) && void 0 !== r ? r : {};
    return {
      sourceInviteCode: null != n ? n : null,
      joinSourceType: null != s ? s : null,
      inviterId: null != u ? u : null,
      integrationType: null != a ? a : null,
      hasUnusualDmActivity: function(e) {
        if (null == e) return !1;
        let t = new Date(e).getTime();
        return t >= S - m.UNUSUAL_DM_COMPARISON_DELTA
      }(t),
      hasUnusualAccountActivity: (0, l.isSpammer)(e)
    }
  }
  createMember(e) {
    return this._membersMap.set(e.userId, e)
  }
  updateMember(e, t) {
    var r;
    if (null == t) return this._membersMap.set(e.userId, e);
    let i = {
        ...e
      },
      n = {
        ...t
      },
      s = !1,
      {
        sourceInviteCode: a,
        hasUnusualDmActivity: l,
        hasUnusualAccountActivity: d,
        joinSourceType: h,
        inviterId: o,
        integrationType: m
      } = this._computeMemberSupplementals(i.userId, null !== (r = n.unusualDMActivityUntil) && void 0 !== r ? r : i.unusualDMActivityUntil);
    for (let e in i.sourceInviteCode !== a && (n.sourceInviteCode = a), i.hasUnusualDmActivity !== l && (n.hasUnusualDmActivity = l), i.hasUnusualAccountActivity !== d && (n.hasUnusualAccountActivity = d), i.joinSourceType !== h && (n.joinSourceType = h), i.inviterId !== o && (n.inviterId = o), i.integrationType !== m && (n.integrationType = m), n) {
      let t = n[e],
        r = i[e];
      !u(t, r) && (i[e] = t, s = !0)
    }
    return this._membersMap.set(i.userId, i) || s
  }
  upsertMember(e, t) {
    let r = this.getMemberByUserId(e);
    if (null == r) {
      let t = d.default.getTrueMember(this.guildId, e);
      if (null == t) return !1;
      r = this.enhanceNewMember(t)
    }
    return this.updateMember(r, t)
  }
  removeMember(e) {
    return this._membersMap.delete(e)
  }
  syncFromGuildMemberStore(e, t) {
    let r = d.default.getTrueMember(e, t);
    return null == r ? this.removeMember(t) : this.upsertMember(t, r)
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
    this.newMemberTimestamp = Date.now(), this.guildId = e, this._membersMap = E()
  }
}