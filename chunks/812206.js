"use strict";
n(47120), n(653041);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(973616);
let _ = [],
  d = {},
  c = {},
  E = {},
  I = {};

function T(e) {
  for (let t of (d[e.id] = e, E[e.name.toLowerCase()] = e, e.aliases)) E[t.toLowerCase()] = e;
  delete I[e.id]
}

function h(e) {
  let {
    entitlements: t
  } = e, n = !1;
  for (let {
      sku: e
    }
    of t)(null == e ? void 0 : e.application) != null && (T(u.Z.createFromServer(e.application)), n = !0);
  return n
}
class S extends(i = a.ZP.Store) {
  _getAllApplications() {
    return Object.values(d)
  }
  getGuildApplication(e, t) {
    if (null != e) {
      for (let n of Object.values(d))
        if (n.guildId === e && n.type === t) return n
    }
  }
  getGuildApplicationIds(e) {
    var t;
    return null == e ? _ : null !== (t = c[e]) && void 0 !== t ? t : _
  }
  getApplication(e) {
    return d[e]
  }
  getApplicationByName(e) {
    if (null == e) return;
    let t = e.toLowerCase();
    return Object.prototype.hasOwnProperty.call(E, t) ? E[t] : void 0
  }
  isFetchingApplication(e) {
    return !0 === I[e]
  }
  didFetchingApplicationFail(e) {
    return !1 === I[e]
  }
  getFetchingOrFailedFetchingIds() {
    return Object.keys(I)
  }
}
o = "ApplicationStore", (s = "displayName") in(r = S) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new S(l.Z, {
  LOGOUT: function() {
    d = {}, c = {}, E = {}, I = {}
  },
  OVERLAY_INITIALIZE: function(e) {
    let {
      applications: t
    } = e;
    for (let e of t) T(new u.Z(e))
  },
  APPLICATION_FETCH: function(e) {
    let {
      applicationId: t
    } = e, n = I[t];
    return I[t] = !0, !0 !== n
  },
  APPLICATION_FETCH_SUCCESS: function(e) {
    let {
      application: t
    } = e;
    T(u.Z.createFromServer(t))
  },
  APPLICATION_FETCH_FAIL: function(e) {
    let {
      applicationId: t
    } = e, n = I[t];
    return I[t] = !1, !1 !== n
  },
  APPLICATIONS_FETCH: function(e) {
    let {
      applicationIds: t
    } = e, n = !1;
    for (let e of t) {
      let t = I[e];
      I[e] = !0, n = !0 !== t
    }
    return n
  },
  APPLICATIONS_FETCH_SUCCESS: function(e) {
    let {
      applications: t
    } = e;
    for (let e of t) T(u.Z.createFromServer(e))
  },
  APPLICATIONS_FETCH_FAIL: function(e) {
    let {
      applicationIds: t
    } = e, n = !1;
    for (let e of t) {
      let t = I[e];
      I[e] = !1, n = !1 !== t
    }
    return n
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: h,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: h,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: h,
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
    let {
      integrations: t,
      guildId: n
    } = e, i = !1, r = [];
    for (let {
        application: e
      }
      of t) null != e && (T(e), r.push(e.id), i = !0);
    return i && (c[n] = r), i
  },
  GUILD_APPLICATIONS_FETCH_SUCCESS: function(e) {
    let {
      guildId: t,
      applications: n
    } = e, i = [];
    for (let e of n) i.push(e.id), T(u.Z.createFromServer(e));
    c[t] = i
  },
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
    let {
      payments: t
    } = e, n = new Set;
    for (let e of t) {
      var i;
      let t = null === (i = e.sku) || void 0 === i ? void 0 : i.application;
      !(null == t || n.has(t.id)) && T(u.Z.createFromServer(t))
    }
    return n.size > 0
  },
  PAYMENT_UPDATE: function(e) {
    var t;
    let {
      payment: n
    } = e;
    if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null) return !1;
    T(u.Z.createFromServer(n.sku.application))
  },
  INVITE_RESOLVE_SUCCESS: function(e) {
    let {
      invite: t
    } = e;
    if (null == t.target_application) return !1;
    T(u.Z.createFromServer(t.target_application))
  },
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
    var t;
    let {
      giftCode: n
    } = e;
    if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null) return !1;
    T(u.Z.createFromServer(n.store_listing.sku.application))
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
    let {
      libraryApplications: t
    } = e;
    for (let e of t) T(u.Z.createFromServer(e.application))
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
    let {
      storeListing: t
    } = e;
    if (null == t.sku.application) return !1;
    T(u.Z.createFromServer(t.sku.application))
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
    let {
      messages: t
    } = e;
    t.forEach(e => (function(e) {
      var t;
      null === (t = e.attachments) || void 0 === t || t.forEach(e => {
        null != e.application && T(u.Z.createFromServer(e.application))
      })
    })(e))
  }
})