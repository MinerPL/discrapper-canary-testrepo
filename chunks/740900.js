n.d(t, {
  R_: function() {
return r;
  },
  cm: function() {
return T;
  }
}), n(653041), n(47120);
var r, i, a = n(498607),
  o = n.n(a),
  s = n(759174),
  l = n(493892),
  u = n(594174),
  c = n(815790),
  d = n(588215),
  _ = n(44715),
  E = n(331551);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let h = Date.now();

function p(e) {
  let t = [e.isCurrentGuildMemberByTimestamp ? 'CURRENT_GUILD_MEMBER' : 'NEW_GUILD_MEMBER'];
  return e.isIncludedInSearchResults && t.push('INCLUDED_IN_SEARCH_RESULTS'), t;
}

function m(e) {
  return e.sort;
}

function I() {
  return new s.h(p, m);
}
(i = r || (r = {})).NEW_GUILD_MEMBER = 'NEW_GUILD_MEMBER', i.CURRENT_GUILD_MEMBER = 'CURRENT_GUILD_MEMBER', i.INCLUDED_IN_SEARCH_RESULTS = 'INCLUDED_IN_SEARCH_RESULTS';
class T {
  reset() {
this._membersMap.clear(), this._membersMap = I(), this.resetNewMemberTimestamp();
  }
  resetNewMemberTimestamp() {
this.newMemberTimestamp = Date.now();
  }
  enhanceNewMember(e, t) {
var n;
let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
  i = (0, c.Dw)(e.joinedAt),
  {
    hasUnusualDmActivity: a,
    hasUnusualAccountActivity: o,
    sourceInviteCode: s,
    joinSourceType: l,
    inviterId: _,
    integrationType: f
  } = this._computeMemberSupplementals(e.userId, e.unusualDMActivityUntil),
  h = u.default.getUser(e.userId);
return {
  hasUnusualDmActivity: a,
  hasUnusualAccountActivity: o,
  sourceInviteCode: s,
  joinSourceType: l,
  inviterId: _,
  integrationType: f,
  ...e,
  isCurrentGuildMemberByTimestamp: i <= this.newMemberTimestamp,
  isIncludedInSearchResults: !1,
  user: h,
  sort: (0, E.b)(e, null !== (n = t.selectedSort) && void 0 !== n ? n : d.d$.ORDER_BY_UNSPECIFIED),
  joinedAtTimestamp: i,
  ...r
};
  }
  _computeMemberSupplementals(e, t) {
var n, r;
let {
  sourceInviteCode: i,
  joinSourceType: a,
  inviterId: o,
  integrationType: s
} = null !== (n = (0, _.W2)(this.guildId)[e]) && void 0 !== n ? n : {};
return {
  sourceInviteCode: null != i ? i : null,
  joinSourceType: null != a ? a : null,
  inviterId: null != o ? o : null,
  integrationType: null != s ? s : null,
  hasUnusualDmActivity: null != (r = t) && new Date(r).getTime() >= h - d.rL,
  hasUnusualAccountActivity: (0, l.He)(e)
};
  }
  createMember(e) {
return this._membersMap.set(e.userId, e);
  }
  updateMember(e, t) {
var n;
if (null == t)
  return this._membersMap.set(e.userId, e);
let r = {
    ...e
  },
  i = {
    ...t
  },
  a = !1,
  {
    sourceInviteCode: s,
    hasUnusualDmActivity: l,
    hasUnusualAccountActivity: u,
    joinSourceType: c,
    inviterId: d,
    integrationType: _
  } = this._computeMemberSupplementals(r.userId, null !== (n = i.unusualDMActivityUntil) && void 0 !== n ? n : r.unusualDMActivityUntil);
for (let e in (r.sourceInviteCode !== s && (i.sourceInviteCode = s), r.hasUnusualDmActivity !== l && (i.hasUnusualDmActivity = l), r.hasUnusualAccountActivity !== u && (i.hasUnusualAccountActivity = u), r.joinSourceType !== c && (i.joinSourceType = c), r.inviterId !== d && (i.inviterId = d), r.integrationType !== _ && (i.integrationType = _), i)) {
  let t = i[e],
    n = r[e];
  !o()(t, n) && (r[e] = t, a = !0);
}
return this._membersMap.set(r.userId, r) || a;
  }
  removeMember(e) {
return this._membersMap.delete(e);
  }
  getMemberByUserId(e) {
return this._membersMap.get(e);
  }
  values(e) {
return this._membersMap.values(e, !0);
  }
  count(e) {
return this._membersMap.size(e);
  }
  get version() {
return this._membersMap.version;
  }
  constructor(e) {
f(this, 'guildId', void 0), f(this, '_membersMap', void 0), f(this, 'newMemberTimestamp', Date.now()), this.guildId = e, this._membersMap = I();
  }
}