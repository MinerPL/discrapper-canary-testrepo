"use strict";
n.r(t), n.d(t, {
  default: function() {
    return x
  }
}), n("222007");
var a = n("37983"),
  l = n("884691"),
  s = n("446674"),
  i = n("77078"),
  r = n("913144"),
  u = n("267363"),
  o = n("27978"),
  d = n("660478"),
  c = n("599110"),
  f = n("15433"),
  h = n("71102"),
  m = n("393467"),
  p = n("209397"),
  E = n("187163"),
  g = n("132615"),
  S = n("663685"),
  C = n("516056"),
  _ = n("30176"),
  I = n("730647"),
  T = n("49111"),
  v = n("794260"),
  x = e => {
    var t;
    let {
      channel: x,
      guild: N
    } = e, {
      currentCategoryId: A,
      directoryEntries: M,
      categoryCounts: R,
      allEntriesCount: j,
      isLoading: L
    } = (0, s.useStateFromStoresObject)([p.default], () => {
      let e = p.default.getCurrentCategoryId(x.id),
        t = p.default.getDirectoryEntries(x.id, e === I.DirectoryEntryCategories.ALL ? null : e),
        n = p.default.getDirectoryCategoryCounts(x.id),
        a = p.default.getDirectoryAllEntriesCount(x.id),
        l = p.default.isFetching();
      return {
        currentCategoryId: e,
        directoryEntries: t,
        categoryCounts: n,
        allEntriesCount: a,
        isLoading: l
      }
    });
    l.useEffect(() => () => {
      let e = d.default.lastMessageId(x.id);
      null != e && r.default.wait(() => {
        (0, u.ack)(x.id, !0, !0, e)
      })
    }, [x.id]);
    let y = l.useMemo(() => null != M ? (0, C.generateDirectoryRows)(Object.values(M), A) : null, [M, A]),
      {
        mostRecentQuery: O,
        searchFetching: P,
        searchResults: D
      } = (0, s.useStateFromStoresObject)([m.default], () => {
        let {
          mostRecentQuery: e,
          fetching: t
        } = m.default.getSearchState(x.id);
        return {
          mostRecentQuery: e,
          searchFetching: t,
          searchResults: m.default.getSearchResults(x.id, e)
        }
      }),
      [b, U] = l.useState(O),
      w = "" !== O,
      {
        showHubEventsList: F
      } = o.default.useExperiment({
        guildId: null !== (t = N.id) && void 0 !== t ? t : "",
        location: "6f7fb0_1"
      }, {
        autoTrackExposure: !1
      });
    l.useEffect(() => {
      h.fetchDirectoryEntries(x.id), h.fetchDirectoryCounts(x.id), F && f.fetchDirectoryEntries(x.id), U(O)
    }, [x.id]), l.useEffect(() => {
      c.default.track(T.AnalyticEvents.GUILD_DIRECTORY_CHANNEL_VIEWED, {
        directory_channel_id: x.id,
        directory_guild_id: N.id,
        primary_category_id: A
      })
    }, [x.id, N.id, A]);
    let V = (0, E.useCanCreateOrAddGuildInDirectory)(x),
      H = V ? () => {
        (0, i.openModalLazy)(async () => {
          let {
            default: e
          } = await n.el("467085").then(n.bind(n, "467085"));
          return t => (0, a.jsx)(e, {
            ...t,
            directoryGuildName: N.name,
            directoryGuildId: N.id,
            directoryChannelId: x.id,
            currentCategoryId: A === I.DirectoryEntryCategories.ALL ? null : A
          })
        })
      } : void 0,
      k = e => {
        0 !== b.trim().length && e.charCode === T.KeyboardKeys.ENTER && (h.searchDirectoryEntries(x.id, b), c.default.track(T.AnalyticEvents.GUILD_DIRECTORY_SEARCH, {
          directory_channel_id: x.id,
          directory_guild_id: N.id
        }))
      },
      B = () => {
        U(""), h.clearDirectorySearch(x.id)
      };
    return w ? (0, a.jsx)(_.default, {
      searchQuery: b,
      setSearchQuery: U,
      mostRecentQuery: O,
      handleSearchKeyPress: k,
      handleClearSearch: B,
      handleCreateOrAddGuild: H,
      searchResults: D,
      searchFetching: P
    }) : null == y && null == A ? (0, a.jsx)("div", {
      className: v.pageContainer,
      children: (0, a.jsx)(i.Spinner, {
        className: v.spinner
      })
    }) : (null == y ? void 0 : y.length) === 0 && null == A ? (0, a.jsx)("div", {
      className: v.pageContainer,
      children: (0, a.jsx)(g.default, {
        guild: N,
        onAddGuild: H
      })
    }) : (0, a.jsx)(S.default, {
      channel: x,
      searchQuery: b,
      setSearchQuery: U,
      handleSearchKeyPress: k,
      handleClearSearch: B,
      handleCreateOrAddGuild: H,
      currentCategoryId: A,
      handleSelectCategory: e => {
        h.selectDirectoryCategory(x.id, e)
      },
      directoryEntries: y,
      categoryCounts: R,
      allEntriesCount: j,
      isLoading: L
    })
  }