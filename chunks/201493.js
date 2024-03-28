"use strict";
n.r(t), n("47120");
var a = n("735250"),
  l = n("470079"),
  s = n("442837"),
  i = n("481060"),
  r = n("570140"),
  o = n("45114"),
  u = n("147754"),
  d = n("306680"),
  c = n("626135"),
  f = n("597"),
  h = n("99325"),
  m = n("866112"),
  p = n("273387"),
  E = n("683818"),
  C = n("102888"),
  g = n("65839"),
  S = n("453879"),
  _ = n("408310"),
  T = n("486527"),
  I = n("981631"),
  A = n("647695");
t.default = e => {
  var t;
  let {
    channel: v,
    guild: N
  } = e, {
    currentCategoryId: x,
    directoryEntries: M,
    categoryCounts: R,
    allEntriesCount: L,
    isLoading: y
  } = (0, s.useStateFromStoresObject)([p.default], () => {
    let e = p.default.getCurrentCategoryId(v.id),
      t = p.default.getDirectoryEntries(v.id, e === T.DirectoryEntryCategories.ALL ? null : e),
      n = p.default.getDirectoryCategoryCounts(v.id),
      a = p.default.getDirectoryAllEntriesCount(v.id);
    return {
      currentCategoryId: e,
      directoryEntries: t,
      categoryCounts: n,
      allEntriesCount: a,
      isLoading: p.default.isFetching()
    }
  });
  l.useEffect(() => () => {
    let e = d.default.lastMessageId(v.id);
    null != e && r.default.wait(() => {
      (0, o.ack)(v.id, !0, !0, e)
    })
  }, [v.id]);
  let O = l.useMemo(() => null != M ? (0, S.generateDirectoryRows)(Object.values(M), x) : null, [M, x]),
    {
      mostRecentQuery: j,
      searchFetching: P,
      searchResults: D
    } = (0, s.useStateFromStoresObject)([m.default], () => {
      let {
        mostRecentQuery: e,
        fetching: t
      } = m.default.getSearchState(v.id);
      return {
        mostRecentQuery: e,
        searchFetching: t,
        searchResults: m.default.getSearchResults(v.id, e)
      }
    }),
    [b, U] = l.useState(j),
    F = "" !== j,
    {
      showHubEventsList: w
    } = u.default.useExperiment({
      guildId: null !== (t = N.id) && void 0 !== t ? t : "",
      location: "6f7fb0_1"
    }, {
      autoTrackExposure: !1
    });
  l.useEffect(() => {
    h.fetchDirectoryEntries(v.id), h.fetchDirectoryCounts(v.id), w && f.fetchDirectoryEntries(v.id), U(j)
  }, [v.id]), l.useEffect(() => {
    c.default.track(I.AnalyticEvents.GUILD_DIRECTORY_CHANNEL_VIEWED, {
      directory_channel_id: v.id,
      directory_guild_id: N.id,
      primary_category_id: x
    })
  }, [v.id, N.id, x]);
  let k = (0, E.useCanCreateOrAddGuildInDirectory)(v) ? () => {
      (0, i.openModalLazy)(async () => {
        let {
          default: e
        } = await Promise.all([n.e("99387"), n.e("79764")]).then(n.bind(n, "533202"));
        return t => (0, a.jsx)(e, {
          ...t,
          directoryGuildName: N.name,
          directoryGuildId: N.id,
          directoryChannelId: v.id,
          currentCategoryId: x === T.DirectoryEntryCategories.ALL ? null : x
        })
      })
    } : void 0,
    H = e => {
      0 !== b.trim().length && e.charCode === I.KeyboardKeys.ENTER && (h.searchDirectoryEntries(v.id, b), c.default.track(I.AnalyticEvents.GUILD_DIRECTORY_SEARCH, {
        directory_channel_id: v.id,
        directory_guild_id: N.id
      }))
    },
    B = () => {
      U(""), h.clearDirectorySearch(v.id)
    };
  return F ? (0, a.jsx)(_.default, {
    searchQuery: b,
    setSearchQuery: U,
    mostRecentQuery: j,
    handleSearchKeyPress: H,
    handleClearSearch: B,
    handleCreateOrAddGuild: k,
    searchResults: D,
    searchFetching: P
  }) : null == O && null == x ? (0, a.jsx)("div", {
    className: A.pageContainer,
    children: (0, a.jsx)(i.Spinner, {
      className: A.spinner
    })
  }) : (null == O ? void 0 : O.length) === 0 && null == x ? (0, a.jsx)("div", {
    className: A.pageContainer,
    children: (0, a.jsx)(C.default, {
      guild: N,
      onAddGuild: k
    })
  }) : (0, a.jsx)(g.default, {
    channel: v,
    searchQuery: b,
    setSearchQuery: U,
    handleSearchKeyPress: H,
    handleClearSearch: B,
    handleCreateOrAddGuild: k,
    currentCategoryId: x,
    handleSelectCategory: e => {
      h.selectDirectoryCategory(v.id, e)
    },
    directoryEntries: O,
    categoryCounts: R,
    allEntriesCount: L,
    isLoading: y
  })
}