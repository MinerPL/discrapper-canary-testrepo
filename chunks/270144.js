"use strict";
n.d(t, {
  CR: function() {
    return G
  },
  F5: function() {
    return D
  },
  FE: function() {
    return R
  },
  IX: function() {
    return U
  },
  LM: function() {
    return C
  },
  ZP: function() {
    return b
  },
  _k: function() {
    return g
  },
  h6: function() {
    return M
  },
  jd: function() {
    return i
  },
  qz: function() {
    return y
  },
  sp: function() {
    return P
  }
}), n(653041), n(47120);
var i, r, s = n(470079),
  o = n(442837),
  a = n(496929),
  l = n(887706),
  u = n(812206),
  _ = n(430824),
  d = n(496675),
  c = n(509545),
  E = n(78839),
  I = n(580130),
  T = n(55563),
  h = n(801249),
  S = n(106976),
  f = n(307643),
  N = n(488915),
  A = n(171246),
  m = n(981631);
let O = 12633 == n.j ? 2592e6 : null;
(r = i || (i = {}))[r.NOT_LOADED = 0] = "NOT_LOADED", r[r.LOADING = 1] = "LOADING", r[r.LOADED = 2] = "LOADED", r[r.ERROR = 3] = "ERROR";
let R = function(e, t) {
    let {
      refetchOnMount: n = !1
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}, i = (0, o.e7)([N.Z], () => null != e ? N.Z.getSubscriptionGroupListingsForApplicationFetchState(e) : N.M.FETCHED, [e]);
    return s.useEffect(() => {
      if (null == e || null == t) return;
      let i = N.Z.getSubscriptionGroupListingsForApplicationFetchState(e);
      (n || i === N.M.NOT_FETCHED) && (0, S.rx)(e, t)
    }, [e, t, n]), {
      listingsLoaded: i === N.M.FETCHED
    }
  },
  C = e => {
    let {
      guildId: t,
      canFetch: n = !0,
      forceRefetch: i = !1
    } = e, r = (0, o.e7)([N.Z], () => null != t ? N.Z.getEntitlementsForGuildFetchState(t) : null, [t]);
    return s.useEffect(() => {
      if (null == t || t === m.ME) return;
      let e = N.Z.getEntitlementsForGuildFetchState(t);
      n && (e === N.M.NOT_FETCHED || i) && (0, S.i1)(t)
    }, [t, n, i]), {
      entitlementsLoaded: r === N.M.FETCHED
    }
  },
  p = e => {
    let {
      applicationId: t,
      canFetch: n = !0,
      forceRefetch: i = !1,
      loggedIn: r
    } = e, l = (0, o.e7)([I.Z], () => I.Z.isFetchedForApplication(t), [t]);
    return s.useEffect(() => {
      if (r) {
        let e = I.Z.isFetchingForApplication(t);
        (n && !e && !l || i) && (0, a.p0)({
          entitlementType: m.qc2.APPLICATION_SUBSCRIPTION
        })
      }
    }, [t, n, l, i, r]), {
      entitlementsLoaded: l
    }
  },
  g = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1
    };
    return (0, o.Wu)([N.Z], () => {
      if (null == e) return [];
      let n = N.Z.getSubscriptionGroupListing(e);
      if (null == n) return [];
      let i = [];
      for (let e of n.subscription_listings_ids) {
        let n = N.Z.getSubscriptionListing(e);
        if (null != n)(!n.soft_deleted || t.includeSoftDeleted) && i.push(n)
      }
      return i
    }, [e, t.includeSoftDeleted])
  },
  L = [],
  v = [];

function D(e, t) {
  let n = (0, o.e7)([E.ZP], () => E.ZP.getSubscriptions()),
    {
      subscriptionGroupListing: i,
      guildEntitlements: r,
      userEntitlements: a
    } = (0, o.cj)([N.Z, I.Z], () => {
      var n, i;
      return {
        subscriptionGroupListing: null != e ? N.Z.getSubscriptionGroupListingForApplication(e) : null,
        guildEntitlements: null != e && null != t ? N.Z.getApplicationEntitlementsForGuild(e, t) : L,
        userEntitlements: null != e && null !== (i = null === (n = I.Z.getForApplication(e)) || void 0 === n ? void 0 : n.values()) && void 0 !== i ? i : v
      }
    }, [e, t]),
    l = s.useMemo(() => [...r, ...a], [r, a]),
    u = null == i ? void 0 : i.subscription_listings,
    {
      activeSubscriptionListing: _,
      activeEntitlement: d
    } = s.useMemo(() => {
      if (null != u) {
        for (let e of l)
          for (let n of u)
            if ((0, A.AQ)(n, e, t)) return {
              activeSubscriptionListing: n,
              activeEntitlement: e
            }
      }
      return {
        activeSubscriptionListing: null,
        activeEntitlement: null
      }
    }, [l, u, t]);
  return {
    activeSubscription: s.useMemo(() => {
      if (null == n) return null;
      let e = null == _ ? void 0 : _.subscription_plans[0].id;
      for (let t of Object.values(n))
        if (t.type === m.NYc.APPLICATION && t.items[0].planId === e) return t;
      return null
    }, [_, n]),
    activeSubscriptionListing: _,
    activeEntitlement: d,
    subscriptionGroupListing: i
  }
}

function M(e) {
  var t;
  let n = null !== (t = null == e ? void 0 : e.id) && void 0 !== t ? t : m.lds,
    {
      entitlementsLoaded: i
    } = C({
      guildId: n,
      canFetch: (0, o.e7)([d.Z], () => d.Z.can(m.Plq.ADMINISTRATOR, e))
    }),
    r = (0, o.e7)([h.Z], () => h.Z.getLastGuildDismissedTime(n)),
    a = (0, o.Wu)([N.Z], () => {
      let e = N.Z.getEntitlementsForGuild(n),
        t = N.Z.getEntitlementsForGuild(n, !1),
        i = e.map(e => e.applicationId);
      return t.filter(e => !i.includes(e.applicationId))
    }),
    l = (0, o.cj)([T.Z], () => T.Z.getSKUs()),
    u = s.useMemo(() => a.filter(e => {
      let t = l[e.skuId];
      return null != t && t.available
    }), [a, l]);
  return i ? u.filter(e => null != e.endsAt && e.endsAt.getTime() > Math.max(null != r ? r : 0, Date.now() - O)) : []
}
let P = e => {
    let [t, n] = s.useState(!1), i = s.useMemo(() => e.map(A.bZ), [e]), r = (0, o.Wu)([c.Z], () => i.filter(e => null == c.Z.get(e)), [i]);
    return s.useEffect(() => {
      r.length > 0 && (n(!0), Promise.all(r.map(e => (0, S.vY)(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [r]), {
      loading: t
    }
  },
  y = () => {
    let [e, t] = s.useState(0);
    return s.useEffect(() => {
      t(1), (0, a.p0)({
        withSku: !0,
        withApplication: !0,
        entitlementType: m.qc2.APPLICATION_SUBSCRIPTION
      }).catch(() => {
        t(3)
      }).then(() => {
        t(2)
      })
    }, []), {
      loadState: e
    }
  },
  U = e => {
    let t = (0, l.Z)(),
      n = (0, o.e7)([u.Z], () => null != e ? u.Z.getApplication(e) : null, [e]),
      i = null != n;
    return s.useEffect(() => {
      !i && null != e && t && (0, f.UM)(e)
    }, [i, e, t]), n
  };

function b(e) {
  let {
    applicationId: t,
    groupListingId: n,
    guildId: i
  } = e, r = (0, l.Z)(), {
    listingsLoaded: s
  } = R(t, n), {
    entitlementsLoaded: o
  } = C({
    guildId: i
  }), {
    entitlementsLoaded: a
  } = p({
    applicationId: t,
    loggedIn: r
  }), u = U(t), _ = (null == u ? void 0 : u.isMonetized) === !0;
  return {
    applicationSubscriptionListingsShown: null != t && null != n && (null == i || o) && (!r || a) && s && _
  }
}

function G(e, t) {
  let n = (0, o.e7)([_.Z], () => _.Z.isLoaded()),
    [i, r] = s.useState([]);
  return s.useEffect(() => {
    null == t && null != e && n && (0, f.tn)(e).then(e => {
      r(e.map(e => _.Z.getGuild(e)).filter(e => null != e))
    })
  }, [e, t, n]), i
}