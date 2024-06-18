"use strict";
n(47120), n(789020), n(724458);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(430824),
  _ = n(630388),
  d = n(709054),
  c = n(225675),
  E = n(981631),
  I = n(526761);
let T = {};
class h extends(i = a.ZP.Store) {
  hasViewingRoles() {
    return Object.keys(T).length > 0
  }
  isViewingRoles(e) {
    return null != e && null != T[e]
  }
  getViewingRoles(e) {
    var t;
    return null === (t = T[e]) || void 0 === t ? void 0 : t.roles
  }
  getViewingRolesTimestamp(e) {
    var t;
    return null != e ? null === (t = T[e]) || void 0 === t ? void 0 : t.timestamp : null
  }
  getData(e) {
    return T[e]
  }
  isFullServerPreview(e) {
    var t;
    return (null === (t = T[e]) || void 0 === t ? void 0 : t.type) === c.z.NEW_MEMBER
  }
  isOptInEnabled(e) {
    let t = T[e];
    return null != t && t.type === c.z.NEW_MEMBER && t.optInEnabled
  }
  isOnboardingEnabled(e) {
    let t = T[e];
    return null != t && t.type === c.z.NEW_MEMBER && t.onboardingEnabled
  }
  getViewingChannels(e) {
    let t = T[e];
    return null == t || t.type !== c.z.NEW_MEMBER ? null : t.optInChannels
  }
  getOnboardingResponses(e) {
    let t = T[e];
    return null == t || t.type !== c.z.NEW_MEMBER ? null : t.onboardingResponses
  }
  getMemberOptions(e) {
    let t = T[e];
    return null == t || t.type !== c.z.NEW_MEMBER ? null : t.memberOptions
  }
  isChannelOptedIn(e, t) {
    let n = this.getViewingChannels(e);
    return null != n && n.has(t)
  }
  isViewingServerShop(e) {
    var t;
    return null != e && (null === (t = T[e]) || void 0 === t ? void 0 : t.type) === c.z.SERVER_SHOP
  }
  getImpersonateType(e) {
    if (null == e) return null;
    let t = T[e];
    return null == t ? null : t.type
  }
  getBackNavigationSection(e) {
    if (null == e) return E.pNK.ROLES;
    let t = T[e];
    if (null == t) return E.pNK.ROLES;
    switch (t.type) {
      case c.z.ROLES:
      case c.z.SERVER_SHOP:
        return t.returnToSection;
      case c.z.NEW_MEMBER:
        return E.pNK.ONBOARDING;
      default:
        return E.pNK.ROLES
    }
  }
}
o = "ImpersonateStore", (s = "displayName") in(r = h) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new h(l.Z, {
  IMPERSONATE_UPDATE: function(e) {
    let {
      guildId: t,
      data: n
    } = e;
    delete n.roles[d.default.castGuildIdAsEveryoneGuildRoleId(t)], T[t] = {
      ...n,
      timestamp: Date.now()
    }
  },
  IMPERSONATE_STOP: function(e) {
    let {
      guildId: t
    } = e;
    if (null == T[t]) return !1;
    delete T[t]
  },
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e;
    if (null == T[t]) return !1;
    delete T[t].roles[n]
  },
  USER_GUILD_SETTINGS_CHANNEL_UPDATE_BULK: function(e) {
    var t;
    let {
      guildId: n,
      overrides: i
    } = e;
    if (null == n || null == T[n]) return !1;
    let r = T[n];
    if (null == r || r.type !== c.z.NEW_MEMBER) return !1;
    let s = null !== (t = r.optInChannels) && void 0 !== t ? t : new Set;
    return d.default.keys(i).forEach(e => {
      var t;
      let n = i[e];
      _.yE(null !== (t = n.flags) && void 0 !== t ? t : 0, I.ic.OPT_IN_ENABLED) ? s.add(e) : s.delete(e)
    }), r.optInChannels = s, !0
  },
  GUILD_ONBOARDING_SELECT_OPTION: function(e) {
    var t;
    let {
      guildId: n,
      optionId: i,
      selected: r,
      removedOptionIds: s
    } = e;
    if (null == n || null == T[n]) return !1;
    let o = T[n];
    if (null == o || o.type !== c.z.NEW_MEMBER) return !1;
    let a = null !== (t = o.onboardingResponses) && void 0 !== t ? t : new Set;
    return null != s && s.length > 0 && s.forEach(e => a.delete(e)), r ? a.add(i) : a.delete(i), o.onboardingResponses = a, !0
  },
  GUILD_MEMBER_UPDATE_LOCAL: function(e) {
    let {
      guildId: t,
      roles: n,
      flags: i
    } = e;
    if (null == t) return !1;
    let r = T[t];
    return null != r && (null != n && (r.roles = n.reduce((e, n) => {
      let i = u.Z.getRole(t, n);
      return null != i && (e[n] = i), e
    }, {})), null != i && r.type === c.z.NEW_MEMBER && (r.memberOptions.flags = i), !0)
  }
})