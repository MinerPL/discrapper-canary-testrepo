"use strict";
n.r(t), n.d(t, {
  useArchiveSubscriptionListing: function() {
    return m
  },
  useDeleteSubscriptionListing: function() {
    return _
  },
  useFetchListingsForSubscriptions: function() {
    return p
  },
  useFetchSubscriptionsSettings: function() {
    return v
  },
  useGroupListingsForGuild: function() {
    return h
  },
  usePublishSubscriptionListing: function() {
    return C
  },
  useSubscriptionListing: function() {
    return g
  },
  useSubscriptionListingsForGroup: function() {
    return S
  },
  useSubscriptionListingsForGuild: function() {
    return E
  },
  useSubscriptionTrial: function() {
    return N
  },
  useSubscriptionsSettings: function() {
    return I
  },
  useUpdateSubscriptionsSettings: function() {
    return T
  }
}), n("47120"), n("653041");
var r = n("470079"),
  i = n("442837"),
  l = n("935369"),
  s = n("38618");
n("823379");
var o = n("730647"),
  u = n("423117"),
  a = n("289393"),
  c = n("697227");
let d = [],
  f = function(e) {
    let {
      refetchOnMount: t = !1,
      includeSoftDeleted: n = !0,
      countryCode: l,
      dontFetchWhileTrue: o
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, c = (0, i.useStateFromStores)([s.default], () => s.default.isConnected()), d = (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionGroupListingsForGuildFetchState(e) : a.FetchState.FETCHED), f = r.useRef(t);
    return r.useEffect(() => {
      if (null == e || !c || !0 === o) return;
      let r = a.default.getSubscriptionGroupListingsForGuildFetchState(e);
      (t || r === a.FetchState.NOT_FETCHED) && (f.current = !1, u.fetchAllSubscriptionListingsDataForGuild(e, {
        includeSoftDeleted: n,
        countryCode: l
      }))
    }, [c, e, n, t, l, o]), {
      listingsLoaded: d === a.FetchState.FETCHED && !0 !== f.current
    }
  },
  S = function(e) {
    let {
      includeSoftDeleted: t = !1,
      includeUnpublished: n = !0
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, i.useStateFromStoresArray)([a.default], () => {
      if (null == e) return [];
      let r = a.default.getSubscriptionGroupListing(e);
      if (null == r) return [];
      let i = [];
      for (let e of r.subscription_listings_ids) {
        let r = a.default.getSubscriptionListing(e);
        if (null != r && (!r.soft_deleted || !!t))(r.published || n) && i.push(r)
      }
      return i
    }, [e, t, n])
  },
  g = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionListing(e) : null),
  h = e => {
    let t = (0, o.useGroupListingsFetchContext)("useGroupListingsForGuild");
    return (0, i.useStateFromStores)([a.default], () => null != e && t ? a.default.getSubscriptionGroupListingsForGuild(e) : d)
  },
  E = function(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
      includeSoftDeleted: !1,
      sortDeletedListingsLast: !1
    };
    return f(e), (0, i.useStateFromStoresArray)([a.default], () => {
      let n = null != e ? a.default.getSubscriptionGroupListingsForGuild(e) : d,
        r = [];
      for (let e of n)
        for (let n of e.subscription_listings_ids) {
          let e = a.default.getSubscriptionListing(n);
          null != e && (t.includeSoftDeleted || !e.soft_deleted) && r.push(e)
        }
      return t.includeSoftDeleted && t.sortDeletedListingsLast ? [...r.filter(e => !e.soft_deleted), ...r.filter(e => e.soft_deleted)] : r
    })
  },
  p = e => {
    let [t, n] = r.useState(!1), l = r.useMemo(() => e.map(c.getRoleSubscriptionPlanId), [e]), s = (0, i.useStateFromStoresArray)([a.default], () => l.filter(e => !a.default.getDidFetchListingForSubscriptionPlanId(e)), [l]);
    return r.useEffect(() => {
      !t && s.length > 0 && (n(!0), Promise.all(s.map(e => u.fetchSubscriptionListingForPlan(e))).catch(() => {}).then(() => {
        n(!1)
      }))
    }, [t, s]), {
      loading: t
    }
  },
  _ = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      deleteSubscriptionListing: async (e, n, r) => {
        try {
          return t(!0), i(null), await u.deleteSubscriptionListing(e, n, r), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }
    }
  },
  m = () => {
    let [e, t] = (0, l.default)(u.archiveSubscriptionListing), {
      loading: n,
      error: r
    } = t;
    return {
      error: r,
      submitting: n,
      archiveSubscriptionListing: e
    }
  },
  C = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      error: n,
      submitting: e,
      publishSubscriptionListing: async e => {
        let {
          guildId: n,
          groupListingId: r,
          listingId: l
        } = e;
        try {
          return t(!0), i(null), await u.updateSubscriptionListing({
            guildId: n,
            groupListingId: r,
            listingId: l,
            data: {
              published: !0
            }
          }), !0
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      },
      clearError: () => i(null)
    }
  },
  I = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionSettings(e) : void 0),
  T = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: e,
      updateSubscriptionsSettings: r.useCallback(async (e, n) => {
        t(!0), i(null);
        try {
          await u.updateSubscriptionsSettings(e, n)
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  v = () => {
    let [e, t] = r.useState(!1), [n, i] = r.useState(null);
    return {
      loading: e,
      fetchSubscriptionsSettings: r.useCallback(async e => {
        t(!0), i(null);
        try {
          await u.fetchSubscriptionsSettings(e)
        } catch (e) {
          i(e)
        } finally {
          t(!1)
        }
      }, []),
      error: n
    }
  },
  N = e => (0, i.useStateFromStores)([a.default], () => null != e ? a.default.getSubscriptionTrial(e) : null)