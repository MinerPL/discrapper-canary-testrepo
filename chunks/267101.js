"use strict";
r.r(e), r.d(e, {
  useCanManageGuildProduct: function() {
    return C
  },
  useFetchGuildProductListing: function() {
    return E
  },
  useFetchGuildProductListingsForGuild: function() {
    return f
  },
  useGuildProductListingById: function() {
    return T
  },
  useGuildProductsForGuild: function() {
    return _
  }
}), r("47120");
var n = r("470079"),
  u = r("442837");
r("935369");
var i = r("38618"),
  l = r("160404"),
  o = r("496675"),
  a = r("914010"),
  c = r("495437"),
  d = r("240864"),
  s = r("981631");
let f = t => {
    let e = (0, u.useStateFromStores)([d.default], () => null != t ? d.default.getGuildProductsForGuildFetchState(t) : d.FetchState.FETCHED, [t]),
      r = (0, u.useStateFromStores)([i.default], () => i.default.isConnected()),
      [l, o] = n.useState(!0);
    return n.useEffect(() => {
      l && (e === d.FetchState.NOT_FETCHED || e === d.FetchState.FETCHED && d.default.isGuildProductsCacheExpired(t)) && r && c.fetchGuildProductsForGuild(t), o(!r)
    }, [t, r, e, l]), {
      listingsLoaded: e === d.FetchState.FETCHED && !l
    }
  },
  E = function(t, e) {
    let {
      requireCurrentGuild: r
    } = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      requireCurrentGuild: !0
    }, l = (0, u.useStateFromStores)([i.default], () => i.default.isConnected()), o = (0, u.useStateFromStores)([a.default], () => a.default.getGuildId());
    return n.useEffect(() => {
      let n = d.default.getGuildProductFetchState(e);
      if ((!r || o === t) && l && n === d.FetchState.NOT_FETCHED) try {
        c.fetchGuildProduct(t, e)
      } catch (t) {}
    }, [t, e, l, o, r]), (0, u.useStateFromStores)([d.default], () => d.default.getGuildProduct(e))
  },
  _ = function(t) {
    let {
      publishedOnly: e
    } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
    return (0, u.useStateFromStores)([d.default, l.default], () => d.default.getGuildProductsForGuild(t, {
      publishedOnly: null != e ? e : !l.default.isViewingServerShop(t)
    }))
  },
  T = t => (0, u.useStateFromStores)([d.default], () => null == t ? void 0 : d.default.getGuildProduct(t)),
  C = t => (0, u.useStateFromStores)([o.default], () => null != t && o.default.can(s.Permissions.ADMINISTRATOR, t))