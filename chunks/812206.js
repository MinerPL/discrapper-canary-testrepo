n(47120), n(653041);
var r, i, a, o, s = n(442837),
  l = n(570140),
  u = n(973616);
let c = [],
  d = {},
  _ = {},
  E = {},
  f = {};

function h(e) {
  for (let t of (d[e.id] = e, E[e.name.toLowerCase()] = e, e.aliases))
E[t.toLowerCase()] = e;
  delete f[e.id];
}

function p(e) {
  let {
entitlements: t
  } = e, n = !1;
  for (let {
  sku: e
}
of t)
(null == e ? void 0 : e.application) != null && (h(u.Z.createFromServer(e.application)), n = !0);
  return n;
}
class m extends(r = s.ZP.Store) {
  _getAllApplications() {
return Object.values(d);
  }
  getGuildApplication(e, t) {
if (null != e) {
  for (let n of Object.values(d))
    if (n.guildId === e && n.type === t)
      return n;
}
  }
  getGuildApplicationIds(e) {
var t;
return null == e ? c : null !== (t = _[e]) && void 0 !== t ? t : c;
  }
  getApplication(e) {
return d[e];
  }
  getApplicationByName(e) {
if (null == e)
  return;
let t = e.toLowerCase();
return Object.prototype.hasOwnProperty.call(E, t) ? E[t] : void 0;
  }
  isFetchingApplication(e) {
return !0 === f[e];
  }
  didFetchingApplicationFail(e) {
return !1 === f[e];
  }
  getFetchingOrFailedFetchingIds() {
return Object.keys(f);
  }
}
o = 'ApplicationStore', (a = 'displayName') in(i = m) ? Object.defineProperty(i, a, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = o, t.Z = new m(l.Z, {
  LOGOUT: function() {
d = {}, _ = {}, E = {}, f = {};
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  applications: t
} = e;
for (let e of t)
  h(new u.Z(e));
  },
  APPLICATION_FETCH: function(e) {
let {
  applicationId: t
} = e, n = f[t];
return f[t] = !0, !0 !== n;
  },
  APPLICATION_FETCH_SUCCESS: function(e) {
let {
  application: t
} = e;
h(u.Z.createFromServer(t));
  },
  APPLICATION_FETCH_FAIL: function(e) {
let {
  applicationId: t
} = e, n = f[t];
return f[t] = !1, !1 !== n;
  },
  APPLICATIONS_FETCH: function(e) {
let {
  applicationIds: t
} = e, n = !1;
for (let e of t) {
  let t = f[e];
  f[e] = !0, n = !0 !== t;
}
return n;
  },
  APPLICATIONS_FETCH_SUCCESS: function(e) {
let {
  applications: t
} = e;
for (let e of t)
  h(u.Z.createFromServer(e));
  },
  APPLICATIONS_FETCH_FAIL: function(e) {
let {
  applicationIds: t
} = e, n = !1;
for (let e of t) {
  let t = f[e];
  f[e] = !1, n = !1 !== t;
}
return n;
  },
  APPLICATION_SUBSCRIPTIONS_FETCH_ENTITLEMENTS_SUCCESS: p,
  ENTITLEMENTS_FETCH_FOR_USER_SUCCESS: p,
  ENTITLEMENTS_GIFTABLE_FETCH_SUCCESS: p,
  GUILD_SETTINGS_LOADED_INTEGRATIONS: function(e) {
let {
  integrations: t,
  guildId: n
} = e, r = !1, i = [];
for (let {
    application: e
  }
  of t)
  null != e && (h(e), i.push(e.id), r = !0);
return r && (_[n] = i), r;
  },
  GUILD_APPLICATIONS_FETCH_SUCCESS: function(e) {
let {
  guildId: t,
  applications: n
} = e, r = [];
for (let e of n)
  r.push(e.id), h(u.Z.createFromServer(e));
_[t] = r;
  },
  BILLING_PAYMENTS_FETCH_SUCCESS: function(e) {
let {
  payments: t
} = e, n = new Set();
for (let e of t) {
  var r;
  let t = null === (r = e.sku) || void 0 === r ? void 0 : r.application;
  !(null == t || n.has(t.id)) && h(u.Z.createFromServer(t));
}
return n.size > 0;
  },
  PAYMENT_UPDATE: function(e) {
var t;
let {
  payment: n
} = e;
if ((null === (t = n.sku) || void 0 === t ? void 0 : t.application) == null)
  return !1;
h(u.Z.createFromServer(n.sku.application));
  },
  INVITE_RESOLVE_SUCCESS: function(e) {
let {
  invite: t
} = e;
if (null == t.target_application)
  return !1;
h(u.Z.createFromServer(t.target_application));
  },
  GIFT_CODE_RESOLVE_SUCCESS: function(e) {
var t;
let {
  giftCode: n
} = e;
if ((null === (t = n.store_listing) || void 0 === t ? void 0 : t.sku.application) == null)
  return !1;
h(u.Z.createFromServer(n.store_listing.sku.application));
  },
  LIBRARY_FETCH_SUCCESS: function(e) {
let {
  libraryApplications: t
} = e;
for (let e of t)
  h(u.Z.createFromServer(e.application));
  },
  STORE_LISTING_FETCH_SUCCESS: function(e) {
let {
  storeListing: t
} = e;
if (null == t.sku.application)
  return !1;
h(u.Z.createFromServer(t.sku.application));
  },
  LOAD_MESSAGES_SUCCESS: function(e) {
let {
  messages: t
} = e;
t.forEach(e => function(e) {
  var t;
  null === (t = e.attachments) || void 0 === t || t.forEach(e => {
    null != e.application && h(u.Z.createFromServer(e.application));
  });
}(e));
  }
});