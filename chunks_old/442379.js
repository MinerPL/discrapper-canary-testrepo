"use strict";
r.r(e), r.d(e, {
  useFetchGuildProductListingsForGuild: function() {
    return f
  },
  useFetchGuildProductListing: function() {
    return _
  },
  useGuildProductsForGuild: function() {
    return E
  },
  useGuildProductListingById: function() {
    return T
  },
  useCanManageGuildProduct: function() {
    return C
  }
}), r("222007");
var u = r("884691"),
  n = r("446674");
r("162426");
var i = r("619443"),
  l = r("38654"),
  o = r("957255"),
  c = r("162771"),
  a = r("359366"),
  d = r("565559"),
  s = r("49111");
let f = t => {
    let e = (0, n.useStateFromStores)([d.default], () => null != t ? d.default.getGuildProductsForGuildFetchState(t) : d.FetchState.FETCHED, [t]),
      r = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, o] = u.useState(!0);
    return u.useEffect(() => {
      l && (e === d.FetchState.NOT_FETCHED || e === d.FetchState.FETCHED && d.default.isGuildProductsCacheExpired(t)) && r && a.fetchGuildProductsForGuild(t), o(!r)
    }, [t, r, e, l]), {
      listingsLoaded: e === d.FetchState.FETCHED && !l
    }
  },
  _ = function(t, e) {
    let {
      requireCurrentGuild: r
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, n.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, n.useStateFromStores)([c.default], () => c.default.getGuildId());
    return u.useEffect(() => {
      let u = d.default.getGuildProductFetchState(e);
      if ((!r || o === t) && l && u === d.FetchState.NOT_FETCHED) try {
        a.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, o, r]), (0, n.useStateFromStores)([d.default], () => d.default.getGuildProduct(e))
  },
  E = function(t) {
    let {
      publishedOnly: e
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, n.useStateFromStores)([d.default, l.default], () => d.default.getGuildProductsForGuild(t, {
      publishedOnly: null != e ? e : !l.default.isViewingServerShop(t)
    }))
  },
  T = t => (0, n.useStateFromStores)([d.default], () => null == t ? void 0 : d.default.getGuildProduct(t)),
  C = t => (0, n.useStateFromStores)([o.default], () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t))