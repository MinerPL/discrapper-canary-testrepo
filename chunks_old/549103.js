"use strict";
n.r(t), n.d(t, {
  default: function() {
    return T
  }
});
var s = n("872717"),
  a = n("913144"),
  l = n("567054"),
  i = n("982527"),
  r = n("49111");
let o = async e => {
  let {
    guildId: t,
    status: n = l.GuildJoinRequestApplicationStatuses.SUBMITTED,
    before: o,
    after: u,
    limit: d = l.MAX_RESULTS_PER_PAGE
  } = e;
  a.default.dispatch({
    type: "GUILD_JOIN_REQUESTS_FETCH_START"
  });
  try {
    var c;
    let e = await s.HTTP.get({
        url: r.Endpoints.GUILD_JOIN_REQUESTS(t),
        query: {
          status: n,
          limit: d,
          before: o,
          after: u
        }
      }),
      l = e.body.total,
      E = null !== (c = e.body.guild_join_requests) && void 0 !== c ? c : [],
      f = E.map(i.joinRequestFromServer);
    return a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
      status: n,
      requests: f,
      total: l,
      limit: d,
      guildId: t
    }), e
  } catch (e) {
    throw a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
    }), e
  }
}, u = async e => {
  try {
    let t = await s.HTTP.del({
      url: r.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return a.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: null
    }), t
  } catch (e) {
    throw e
  }
}, d = async (e, t) => {
  try {
    let n = await s.HTTP.post({
      url: r.Endpoints.GUILD_JOIN_REQUEST_ACK(e, t)
    });
    return n
  } catch (e) {} finally {
    a.default.dispatch({
      type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
      id: t,
      guildId: e
    })
  }
}, c = async function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : l.GuildJoinRequestApplicationStatuses.APPROVED,
    i = arguments.length > 3 ? arguments[3] : void 0,
    o = await s.HTTP.patch({
      url: r.Endpoints.GUILD_JOIN_REQUEST(e, t),
      body: {
        action: n,
        rejection_reason: i
      }
    });
  a.default.dispatch({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    guildId: e,
    status: o.body.application_status,
    request: o.body
  })
}, E = async (e, t) => {
  let n = await s.HTTP.patch({
    url: r.Endpoints.GUILD_JOIN_REQUESTS(e),
    body: {
      action: t
    }
  });
  return a.default.dispatch({
    type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
    guildId: e,
    action: t
  }), n.body
}, f = async e => {
  try {
    let t = await s.HTTP.post({
        url: r.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
      }),
      {
        body: n
      } = t;
    return a.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: n
    }), n
  } catch (e) {
    throw e
  }
}, _ = async () => {
  let e = await s.HTTP.get({
    url: r.Endpoints.USER_JOIN_REQUEST_GUILDS
  });
  a.default.dispatch({
    type: "USER_JOIN_REQUEST_GUILDS_FETCH",
    guilds: e.body
  })
};
var T = {
  fetchGuildJoinRequests: o,
  ackUserGuildJoinRequest: d,
  removeGuildJoinRequest: u,
  updateGuildJoinRequest: c,
  actionAllPendingJoinRequests: E,
  resetGuildJoinRequest: f,
  fetchRequestToJoinGuilds: _,
  setSelectedApplicationTab: (e, t) => {
    a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
      guildId: e,
      applicationTab: t
    })
  },
  setSelectedSortOrder: (e, t) => {
    a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
      guildId: e,
      sortOrder: t
    })
  },
  setSelectedGuildJoinRequest: (e, t) => {
    a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
      guildId: e,
      request: t
    })
  }
}