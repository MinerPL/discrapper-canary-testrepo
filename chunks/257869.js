"use strict";
n.r(t), n.d(t, {
  useGroupListingsFetchContext: function() {
    return d
  },
  GroupListingsFetchContextProvider: function() {
    return c
  }
}), n("70102");
var i = n("37983"),
  r = n("884691"),
  l = n("65597"),
  s = n("619443"),
  u = n("371358"),
  o = n("648825");
let a = r.createContext(void 0);

function d(e) {
  let t = r.useContext(a);
  if (null == t) throw Error("".concat(null != e ? e : "useGroupListingsFetchContext", " must be used within a GroupListingsFetchContextProvider"));
  let {
    listingsLoaded: n,
    fetchGroupListingsForGuild: i
  } = t;
  return i(), n
}

function c(e) {
  let {
    guildId: t,
    children: n,
    refetchOnMount: d,
    includeSoftDeleted: c,
    countryCode: f,
    dontFetchWhileTrue: S
  } = e, E = (0, l.useStateFromStores)([s.default], () => s.default.isConnected()), _ = (0, l.useStateFromStores)([o.default], () => null != t ? o.default.getSubscriptionGroupListingsForGuildFetchState(t) : o.FetchState.FETCHED), h = r.useRef(d), g = r.useCallback(() => {
    if (null == t || !E || !0 === S) return;
    let e = o.default.getSubscriptionGroupListingsForGuildFetchState(t);
    (h.current || e === o.FetchState.NOT_FETCHED) && (h.current = !1, u.fetchAllSubscriptionListingsDataForGuild(t, {
      includeSoftDeleted: c,
      countryCode: f
    }))
  }, [E, t, c, f, S]), p = r.useMemo(() => _ === o.FetchState.FETCHED && !0 !== h.current, [_, h]);
  return (0, i.jsx)(a.Provider, {
    value: {
      listingsLoaded: p,
      fetchGroupListingsForGuild: g
    },
    children: n
  })
}