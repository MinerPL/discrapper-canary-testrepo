"use strict";
n.r(t), n.d(t, {
  addDirectoryGuildEntry: function() {
    return m
  },
  clearDirectorySearch: function() {
    return C
  },
  fetchDirectoryCounts: function() {
    return h
  },
  fetchDirectoryEntries: function() {
    return f
  },
  fetchGuildEntriesForIds: function() {
    return _
  },
  removeDirectoryGuildEntry: function() {
    return p
  },
  searchDirectoryEntries: function() {
    return E
  },
  selectDirectoryCategory: function() {
    return S
  },
  updateDirectoryEntry: function() {
    return g
  }
});
var a = n("954955"),
  l = n.n(a),
  s = n("990547"),
  i = n("544891"),
  r = n("570140"),
  o = n("573261"),
  u = n("866112"),
  d = n("486527"),
  c = n("981631");
let f = l()(async (e, t) => {
    try {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_START"
      });
      let n = await i.HTTP.get({
        url: c.Endpoints.DIRECTORY_CHANNEL_ENTRIES(e),
        query: {
          category_id: t
        }
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_SUCCESS",
        channelId: e,
        entries: n.body
      })
    } catch (e) {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_FAILURE"
      })
    }
  }, 200),
  h = l()(async e => {
    try {
      let t = await i.HTTP.get({
        url: c.Endpoints.DIRECTORY_CHANNEL_CATEGORY_COUNTS(e)
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_COUNTS_FETCH_SUCCESS",
        channelId: e,
        counts: t.body
      })
    } catch (e) {}
  }, 200);
async function m(e, t, n) {
  let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DirectoryEntryCategories.UNCATEGORIZED,
    l = await o.default.post({
      url: c.Endpoints.DIRECTORY_CHANNEL_ENTRY(e, t),
      body: {
        description: n,
        primary_category_id: a
      },
      trackedActionData: {
        event: s.NetworkActionNames.DIRECTORY_GUILD_ENTRY_CREATE,
        properties: {
          directory_channel_id: e,
          guild_id: t,
          primary_category_id: a
        }
      }
    });
  r.default.dispatch({
    type: "GUILD_DIRECTORY_ENTRY_CREATE",
    channelId: e,
    entry: l.body
  })
}

function p(e, t) {
  o.default.delete({
    url: c.Endpoints.DIRECTORY_CHANNEL_ENTRY(e, t),
    trackedActionData: {
      event: s.NetworkActionNames.DIRECTORY_GUILD_ENTRY_DELETE,
      properties: {
        directory_channel_id: e,
        guild_id: t
      }
    }
  }), r.default.dispatch({
    type: "GUILD_DIRECTORY_ENTRY_DELETE",
    channelId: e,
    guildId: t
  })
}
let E = l()(async (e, t) => {
    if (!u.default.shouldFetch(e, t)) {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_CACHED_SEARCH",
        channelId: e,
        query: t
      });
      return
    }
    try {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_SEARCH_START",
        channelId: e,
        query: t
      });
      let n = await i.HTTP.get({
        url: c.Endpoints.DIRECTORY_ENTRIES_SEARCH(e),
        query: {
          query: t
        }
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_SEARCH_SUCCESS",
        channelId: e,
        query: t,
        results: n.body
      })
    } catch (e) {
      r.default.dispatch({
        type: "GUILD_DIRECTORY_FETCH_FAILURE"
      })
    }
  }, 200),
  C = e => {
    r.default.dispatch({
      type: "GUILD_DIRECTORY_SEARCH_CLEAR",
      channelId: e
    })
  },
  g = async function(e, t, n) {
    let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : d.DirectoryEntryCategories.UNCATEGORIZED,
      l = await i.HTTP.patch({
        url: c.Endpoints.DIRECTORY_CHANNEL_ENTRY(e, t),
        body: {
          description: n,
          primary_category_id: a
        }
      });
    r.default.dispatch({
      type: "GUILD_DIRECTORY_ENTRY_UPDATE",
      channelId: e,
      entry: l.body
    })
  }, S = (e, t) => {
    r.default.dispatch({
      type: "GUILD_DIRECTORY_CATEGORY_SELECT",
      channelId: e,
      categoryId: t
    })
  }, _ = async (e, t) => {
    try {
      let n = await i.HTTP.get({
        url: c.Endpoints.DIRECTORY_CHANNEL_LIST_BY_ID(e),
        query: {
          entity_ids: t
        }
      });
      r.default.dispatch({
        type: "GUILD_DIRECTORY_ADMIN_ENTRIES_FETCH_SUCCESS",
        channelId: e,
        entries: n.body
      })
    } catch (e) {}
  }