"use strict";
n.r(t);
var s = n("544891"),
  a = n("570140"),
  l = n("287734"),
  i = n("131704"),
  r = n("246364"),
  o = n("937111"),
  u = n("981631");
let d = async e => {
  let t = await s.HTTP.get({
      url: u.Endpoints.GUILD_JOIN_REQUEST_BY_ID(e)
    }),
    n = (0, o.joinRequestFromServer)(t.body);
  return a.default.dispatch({
    type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
    joinRequest: n
  }), t
}, c = async e => {
  let {
    guildId: t,
    status: n = r.GuildJoinRequestApplicationStatuses.SUBMITTED,
    before: l,
    after: i,
    limit: d = r.MAX_RESULTS_PER_PAGE
  } = e;
  a.default.dispatch({
    type: "GUILD_JOIN_REQUESTS_FETCH_START"
  });
  try {
    var c;
    let e = await s.HTTP.get({
        url: u.Endpoints.GUILD_JOIN_REQUESTS(t),
        query: {
          status: n,
          limit: d,
          before: l,
          after: i
        }
      }),
      r = e.body.total,
      f = (null !== (c = e.body.guild_join_requests) && void 0 !== c ? c : []).map(o.joinRequestFromServer);
    return a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
      status: n,
      requests: f,
      total: r,
      limit: d,
      guildId: t
    }), e
  } catch (e) {
    throw a.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
    }), e
  }
}, f = async e => {
  try {
    let t = await s.HTTP.del({
      url: u.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return a.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: null
    }), t
  } catch (e) {
    throw e
  }
}, E = async (e, t) => {
  try {
    return await s.HTTP.post({
      url: u.Endpoints.GUILD_JOIN_REQUEST_ACK(e, t)
    })
  } catch (e) {} finally {
    a.default.dispatch({
      type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
      id: t,
      guildId: e
    })
  }
}, _ = async function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r.GuildJoinRequestApplicationStatuses.APPROVED,
    l = arguments.length > 3 ? arguments[3] : void 0,
    i = await s.HTTP.patch({
      url: u.Endpoints.GUILD_JOIN_REQUEST(e, t),
      body: {
        action: n,
        rejection_reason: l
      }
    });
  a.default.dispatch({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    guildId: e,
    status: i.body.application_status,
    request: i.body
  })
}, T = async (e, t) => {
  let n = await s.HTTP.patch({
    url: u.Endpoints.GUILD_JOIN_REQUESTS(e),
    body: {
      action: t
    }
  });
  return a.default.dispatch({
    type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
    guildId: e,
    action: t
  }), n.body
}, m = async e => {
  try {
    let {
      body: t
    } = await s.HTTP.post({
      url: u.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return a.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: t
    }), t
  } catch (e) {
    throw e
  }
}, I = async () => {
  let e = await s.HTTP.get({
    url: u.Endpoints.USER_JOIN_REQUEST_GUILDS
  });
  a.default.dispatch({
    type: "USER_JOIN_REQUEST_GUILDS_FETCH",
    guilds: e.body
  })
}, p = async function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = await s.HTTP.post({
      url: u.Endpoints.GUILD_JOIN_REQUEST_INTERVIEW(e)
    }),
    r = (0, i.createChannelRecordFromServer)(n.body);
  return a.default.dispatch({
    type: "CHANNEL_CREATE",
    channel: r
  }), t && l.default.selectPrivateChannel(r.id), r.id
};
t.default = {
  fetchGuildJoinRequest: d,
  fetchGuildJoinRequests: c,
  ackUserGuildJoinRequest: E,
  removeGuildJoinRequest: f,
  updateGuildJoinRequest: _,
  actionAllPendingJoinRequests: T,
  resetGuildJoinRequest: m,
  fetchRequestToJoinGuilds: I,
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
  },
  createOrEnterJoinRequestInterview: p
}