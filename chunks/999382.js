"use strict";
let i, r, s, o, a, l, u, _;
n(47120), n(724458);
var d, c, E, I, T = n(392711),
  h = n.n(T),
  S = n(913527),
  f = n.n(S),
  N = n(442837),
  A = n(544891),
  m = n(433517),
  O = n(570140),
  R = n(749210),
  C = n(131704),
  p = n(601964),
  g = n(758449),
  L = n(598077),
  v = n(430824),
  D = n(594174),
  M = n(709054),
  P = n(372454),
  y = n(330010),
  U = n(981631),
  b = n(731455),
  G = n(135899);
let w = ["name", "description", "icon", "splash", "banner", "homeHeader", "afkChannelId", "afkTimeout", "systemChannelId", "verificationLevel", "defaultMessageNotifications", "explicitContentFilter", "features", "systemChannelFlags", "preferredLocale", "rulesChannelId", "safetyAlertsChannelId", "discoverySplash", "publicUpdatesChannelId", "premiumProgressBarEnabled", "clan"],
  k = new Set(["icon", "splash", "banner", "discoverySplash", "homeHeader"]),
  B = !1,
  x = U.QZA.CLOSED,
  V = {},
  Z = !1,
  H = null,
  F = null,
  Y = 0,
  j = U.BpS.NONE,
  W = null,
  K = {
    primaryCategoryId: b.o3,
    secondaryCategoryIds: [],
    keywords: [],
    emojiDiscoverabilityEnabled: b.Vb,
    partnerActionedTimestamp: null,
    partnerApplicationTimestamp: null,
    isPublished: !1,
    reasonsToJoin: [],
    socialLinks: [],
    about: ""
  },
  z = !1,
  q = K,
  X = K,
  Q = null,
  J = 0,
  $ = null,
  ee = null,
  et = null;

function en(e) {
  if (null == a || null == o || o.id !== e) return !1;
  let t = v.Z.getGuild(e);
  return null != t && (o === a ? a = o = t : o = t, !0)
}

function ei(e) {
  var t;
  let {
    guildId: n,
    section: r,
    subsection: s,
    location: u
  } = e, d = v.Z.getGuild(n);
  if (null == d) return er();
  o = a = d, x = U.QZA.OPEN, V = {}, l = M.default.castGuildIdAsEveryoneGuildRoleId(n), j = a.mfaLevel, X = q, _ = null, W = u;
  es({
    section: null !== (t = null != r ? r : i) && void 0 !== t ? t : U.pNK.OVERVIEW,
    subsection: null != s ? s : null
  })
}

function er() {
  B = !1, x = U.QZA.CLOSED, o = a = null, Z = !1, H = null, F = null, Y = 0, Q = null, ee = null, et = null, i = null, r = null, s = null, j = U.BpS.NONE, u = void 0
}

function es(e) {
  if (null == a) return !1;
  let t = i;
  if (i = e.section, r = e.subsection, i === U.pNK.BANS) {
    let {
      enabled: e
    } = P.T.getCurrentConfig({
      guildId: a.id,
      location: "7f0c91_1"
    });
    !e && R.Z.fetchGuildBans(a.id)
  } else if (i === U.pNK.INSTANT_INVITES) A.tn.get({
    url: U.ANM.GUILD_INSTANT_INVITES(a.id),
    oldFormErrors: !0
  }).then(e => {
    O.Z.dispatch({
      type: "GUILD_SETTINGS_LOADED_INVITES",
      invites: e.body
    })
  });
  else if (i === U.pNK.WIDGET) A.tn.get({
    url: U.ANM.GUILD_WIDGET(a.id),
    oldFormErrors: !0
  }).then(e => {
    O.Z.dispatch({
      type: "GUILD_SETTINGS_SET_WIDGET",
      enabled: e.body.enabled,
      channelId: e.body.channel_id
    })
  });
  else if (i === U.pNK.INTEGRATIONS || i === U.pNK.ROLES) {
    if (l = null, t !== e.section) return ea(e)
  } else i === U.pNK.MEMBERS ? l = a.getEveryoneRoleId() : i === U.pNK.VANITY_URL ? A.tn.get({
    url: U.ANM.GUILD_VANITY_URL(a.id),
    oldFormErrors: !0
  }).then(e => {
    let {
      body: {
        code: t,
        uses: n,
        error: i
      }
    } = e;
    O.Z.dispatch({
      type: "GUILD_SETTINGS_SET_VANITY_URL",
      code: t,
      uses: n,
      error: i
    })
  }) : i === U.pNK.SAFETY && O.Z.dispatch({
    type: "GUILD_SETTINGS_SAFETY_SET_SUBSECTION",
    subsection: null == r ? U.KsC.SAFETY_OVERVIEW : r
  })
}

function eo(e) {
  var t;
  return new g.Z({
    code: e.code,
    temporary: e.temporary,
    revoked: e.revoked,
    inviter: null != e.inviter ? new L.Z(e.inviter) : null,
    channel: (0, C.jD)(e.channel),
    guild: null != e.guild ? new p.ZP(e.guild) : null,
    uses: e.uses,
    maxUses: e.max_uses,
    maxAge: e.max_age,
    createdAt: f()(null !== (t = e.created_at) && void 0 !== t ? t : void 0)
  })
}

function ea(e) {
  if (null == a || x !== U.QZA.OPEN || "GUILD_INTEGRATIONS_UPDATE" === e.type && e.guildId !== a.id) return !1;
  (0, y.i)(a.id)
}
class el extends(d = N.ZP.Store) {
  initialize() {
    this.waitFor(v.Z, D.default)
  }
  getMetadata() {
    return X
  }
  hasChanges() {
    return !h().isEqual(a, o) || !h().isEqual(X, q)
  }
  isOpen() {
    return B
  }
  getSavedRouteState() {
    return u
  }
  getSection() {
    return i
  }
  showNotice() {
    return this.hasChanges()
  }
  getGuildId() {
    return null != a ? a.id : null
  }
  showPublicSuccessModal() {
    return !m.K.get(G.zs)
  }
  getGuild() {
    return a
  }
  isSubmitting() {
    return x === U.QZA.SUBMITTING
  }
  isGuildMetadataLoaded() {
    return z
  }
  getErrors() {
    return V
  }
  getSelectedRoleId() {
    return l
  }
  getSlug() {
    return _
  }
  getBans() {
    return [Q, J]
  }
  getProps() {
    return {
      submitting: this.isSubmitting(),
      integrations: et,
      section: i,
      subsection: r,
      errors: V,
      guild: a,
      bans: Q,
      bansVersion: J,
      invites: ee,
      selectedRoleId: l,
      embedEnabled: Z,
      embedChannelId: H,
      mfaLevel: j,
      searchQuery: s,
      vanityURLCode: F,
      vanityURLUses: Y,
      originalGuild: o,
      hasChanges: this.hasChanges(),
      guildMetadata: X,
      analyticsLocation: W,
      isGuildMetadataLoaded: z
    }
  }
}
I = "GuildSettingsStore", (E = "displayName") in(c = el) ? Object.defineProperty(c, E, {
  value: I,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : c[E] = I, t.Z = new el(O.Z, __OVERLAY__ ? {} : {
  GUILD_SETTINGS_INIT: ei,
  GUILD_SETTINGS_OPEN: function(e) {
    B = !0, ei(e)
  },
  GUILD_SETTINGS_CLOSE: er,
  GUILD_SETTINGS_UPDATE: function(e) {
    if (null == a) return !1;
    w.forEach(t => {
      null != a && e.hasOwnProperty(t) && (a = a.set(t, e[t]))
    }), ! function() {
      if (null == a) return;
      let e = a.toJS(),
        t = o.toJS();
      !w.some(n => e[n] !== t[n]) && (a = o)
    }()
  },
  GUILD_SETTINGS_CANCEL_CHANGES: function(e) {
    let {
      guildId: t
    } = e;
    V = {};
    let n = v.Z.getGuild(t);
    null != n && (o = a = n)
  },
  GUILD_SETTINGS_SAVE_ROUTE_STACK: function(e) {
    let {
      state: t
    } = e;
    return u = t, !1
  },
  GUILD_SETTINGS_SUBMIT: function() {
    x = U.QZA.SUBMITTING, V = {}
  },
  GUILD_SETTINGS_SUBMIT_SUCCESS: function() {
    x = U.QZA.OPEN
  },
  GUILD_SETTINGS_SUBMIT_FAILURE: function(e) {
    var t;
    x = U.QZA.OPEN, i = null != i ? i : U.pNK.OVERVIEW, r = null, V = null !== (t = e.errors) && void 0 !== t ? t : {}
  },
  GUILD_SETTINGS_SET_SECTION: es,
  GUILD_SETTINGS_SET_SEARCH_QUERY: function(e) {
    s = e.searchQuery
  },
  GUILD_SETTINGS_LOADED_BANS: function(e) {
    Q = e.bans.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), new Map), J++
  },
  GUILD_SETTINGS_LOADED_BANS_BATCH: function(e) {
    let {
      bans: t,
      guildId: n
    } = e;
    ($ !== n || null == Q) && ($ = n, Q = new Map), Q = t.reduce((e, t) => (null != t.user && null != t.user.id && e.set(t.user.id, t), e), Q), J++
  },
  GUILD_SETTINGS_LOADED_INVITES: function(e) {
    ee = e.invites.reduce((e, t) => (e[t.code] = eo(t), e), {})
  },
  GUILD_SETTINGS_SET_WIDGET: function(e) {
    Z = e.enabled, H = e.channelId
  },
  GUILD_SETTINGS_SET_VANITY_URL: function(e) {
    var t;
    F = null !== (t = e.code) && void 0 !== t ? t : null, Y = e.uses
  },
  GUILD_SETTINGS_SET_MFA_SUCCESS: function(e) {
    let {
      level: t
    } = e;
    j = t
  },
  GUILD_SETTINGS_ROLE_SELECT: function(e) {
    let {
      roleId: t
    } = e;
    l = null != t ? t : null
  },
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    et = e.integrations
  },
  GUILD_BAN_ADD: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    if (null == Q || null == a || a.id !== n) return !1;
    Q.set(t.id, {
      user: t,
      reason: null
    }), J++
  },
  GUILD_BAN_REMOVE: function(e) {
    let {
      user: t,
      guildId: n
    } = e;
    if (null == Q || null == a || a.id !== n) return !1;
    Q.delete(t.id), J++
  },
  GUILD_ROLE_CREATE: function(e) {
    let {
      guildId: t
    } = e;
    if (!en(t)) return !1
  },
  GUILD_ROLE_UPDATE: function(e) {
    let {
      guildId: t
    } = e;
    if (!en(t)) return !1
  },
  GUILD_ROLE_DELETE: function(e) {
    let {
      guildId: t,
      roleId: n
    } = e;
    if (!en(t)) return !1;
    l === n && (l = null)
  },
  GUILD_UPDATE: function(e) {
    if (null == a || a.id !== e.guild.id) return !1;
    {
      let e = v.Z.getGuild(a.id);
      if (null == e) return !1;
      let t = o = e,
        n = a.toJS();
      w.forEach(e => {
        if (!k.has(e) && ("rulesChannelId" !== e && "publicUpdatesChannelId" !== e || n[e] !== G.b4)) {
          if ("features" === e) {
            t.set(e, new Set(n[e]));
            return
          }
          t = t.set(e, n[e])
        }
      }), a = t
    }
  },
  GUILD_DELETE: function(e) {
    if (null == a || a.id !== e.guild.id) return !1;
    er()
  },
  USER_CONNECTIONS_UPDATE: ea,
  GUILD_INTEGRATIONS_UPDATE: ea,
  INSTANT_INVITE_REVOKE_SUCCESS: function(e) {
    ee = {
      ...ee
    }, delete ee[e.code]
  },
  INSTANT_INVITE_CREATE_SUCCESS: function(e) {
    ee = {
      ...ee,
      [e.invite.code]: eo(e.invite)
    }
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FROM_SERVER: function(e) {
    var t, n, i, r, s, o, l, u, _, d;
    let {
      guildId: c,
      metadata: E
    } = e;
    null != a && c === a.id && (!1 === z && (z = !0), X = q = {
      primaryCategoryId: null !== (t = E.primaryCategoryId) && void 0 !== t ? t : b.o3,
      secondaryCategoryIds: null !== (n = E.secondaryCategoryIds) && void 0 !== n ? n : [],
      keywords: null !== (i = E.keywords) && void 0 !== i ? i : [],
      emojiDiscoverabilityEnabled: null !== (r = E.emojiDiscoverabilityEnabled) && void 0 !== r ? r : b.Vb,
      partnerActionedTimestamp: null !== (s = E.partnerActionedTimestamp) && void 0 !== s ? s : null,
      partnerApplicationTimestamp: null !== (o = E.partnerApplicationTimestamp) && void 0 !== o ? o : null,
      isPublished: null !== (l = E.isPublished) && void 0 !== l && l,
      reasonsToJoin: null !== (u = E.reasonsToJoin) && void 0 !== u ? u : [],
      socialLinks: null !== (_ = E.socialLinks) && void 0 !== _ ? _ : [],
      about: null !== (d = E.about) && void 0 !== d ? d : ""
    }, V = {})
  },
  GUILD_DISCOVERY_METADATA_FETCH_FAIL: function() {
    q = X = K
  },
  GUILD_DISCOVERY_CATEGORY_ADD: function(e) {
    let {
      guildId: t,
      categoryId: n
    } = e;
    null != a && t === a.id && (X = {
      ...X,
      secondaryCategoryIds: [...X.secondaryCategoryIds, n]
    }, q = {
      ...q,
      secondaryCategoryIds: [...q.secondaryCategoryIds, n]
    })
  },
  GUILD_DISCOVERY_CATEGORY_DELETE: function(e) {
    let t, {
      guildId: n,
      categoryId: i
    } = e;
    if (null == a || n !== a.id) return;
    let r = X.secondaryCategoryIds.indexOf(i); - 1 !== r && ((t = [...X.secondaryCategoryIds]).splice(r, 1), X = {
      ...X,
      secondaryCategoryIds: t
    }), -1 !== (r = q.secondaryCategoryIds.indexOf(i)) && ((t = [...q.secondaryCategoryIds]).splice(r, 1), q = {
      ...q,
      secondaryCategoryIds: t
    })
  },
  GUILD_DISCOVERY_CATEGORY_UPDATE_FAIL: function(e) {
    let {
      guildId: t,
      errors: n
    } = e;
    null != a && t === a.id && (V = null != n ? n : {})
  },
  GUILD_UPDATE_DISCOVERY_METADATA: function(e) {
    let {
      guildId: t,
      primaryCategoryId: n,
      keywords: i,
      emojiDiscoverabilityEnabled: r,
      isPublished: s,
      reasonsToJoin: o,
      socialLinks: l,
      about: u
    } = e;
    null != a && t === a.id && (X = {
      ...X,
      primaryCategoryId: null != n ? n : X.primaryCategoryId,
      keywords: null != i ? i : X.keywords,
      emojiDiscoverabilityEnabled: null != r ? r : X.emojiDiscoverabilityEnabled,
      isPublished: null != s ? s : X.isPublished,
      reasonsToJoin: null != o ? o : X.reasonsToJoin,
      socialLinks: null != l ? l : X.socialLinks,
      about: null != u ? u : X.about
    })
  },
  GUILD_UPDATE_DISCOVERY_METADATA_FAIL: function(e) {
    let {
      guildId: t,
      errors: n
    } = e;
    null != a && t === a.id && (V = null != n ? n : {})
  },
  GUILD_DISCOVERY_SLUG_FETCH_SUCCESS: function(e) {
    let {
      slug: t
    } = e;
    _ = t
  },
  GUILD_DISCOVERY_SLUG_FETCH_FAIL: function(e) {
    let {} = e;
    _ = null
  }
})