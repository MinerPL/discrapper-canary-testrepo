"use strict";
n.r(t);
var i = n("544891"),
  r = n("570140"),
  a = n("287734"),
  s = n("970606"),
  o = n("131704"),
  l = n("826581"),
  u = n("246364"),
  d = n("937111"),
  _ = n("981631");
let c = async e => {
  let t = await i.HTTP.get({
      url: _.Endpoints.GUILD_JOIN_REQUEST_BY_ID(e)
    }),
    n = (0, d.joinRequestFromServer)(t.body);
  return r.default.dispatch({
    type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
    joinRequest: n
  }), t
}, E = async e => {
  let {
    guildId: t,
    status: n = u.GuildJoinRequestApplicationStatuses.SUBMITTED,
    before: a,
    after: s,
    limit: o = u.MAX_RESULTS_PER_PAGE
  } = e;
  if (!(l.default.isFetching() || l.default.hasFetched(t))) {
    r.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_FETCH_START"
    });
    try {
      var c;
      let e = await i.HTTP.get({
          url: _.Endpoints.GUILD_JOIN_REQUESTS(t),
          query: {
            status: n,
            limit: o,
            before: a,
            after: s
          }
        }),
        l = e.body.total,
        u = (null !== (c = e.body.guild_join_requests) && void 0 !== c ? c : []).map(d.joinRequestFromServer);
      return r.default.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
        status: n,
        requests: u,
        total: l,
        limit: o,
        guildId: t
      }), e
    } catch (e) {
      throw r.default.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
      }), e
    }
  }
}, I = async e => {
  try {
    let t = await i.HTTP.del({
      url: _.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: null
    }), t
  } catch (e) {
    throw e
  }
}, T = async (e, t) => {
  try {
    return await i.HTTP.post({
      url: _.Endpoints.GUILD_JOIN_REQUEST_ACK(e, t)
    })
  } catch (e) {} finally {
    r.default.dispatch({
      type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
      id: t,
      guildId: e
    })
  }
}, f = async function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.GuildJoinRequestApplicationStatuses.APPROVED,
    a = arguments.length > 3 ? arguments[3] : void 0;
  (0, s.trackClanApplicationAction)({
    guildId: e,
    actionType: n,
    applicationUserId: t
  });
  let o = await i.HTTP.patch({
    url: _.Endpoints.GUILD_JOIN_REQUEST(e, t),
    body: {
      action: n,
      rejection_reason: a
    }
  });
  r.default.dispatch({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    guildId: e,
    status: o.body.application_status,
    request: o.body
  })
}, S = async (e, t) => {
  let n = await i.HTTP.patch({
    url: _.Endpoints.GUILD_JOIN_REQUESTS(e),
    body: {
      action: t
    }
  });
  return r.default.dispatch({
    type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
    guildId: e,
    action: t
  }), n.body
}, h = async e => {
  try {
    let {
      body: t
    } = await i.HTTP.post({
      url: _.Endpoints.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return r.default.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: t
    }), t
  } catch (e) {
    throw e
  }
}, A = async () => {
  let e = await i.HTTP.get({
    url: _.Endpoints.USER_JOIN_REQUEST_GUILDS
  });
  r.default.dispatch({
    type: "USER_JOIN_REQUEST_GUILDS_FETCH",
    guilds: e.body
  })
}, m = async function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = await i.HTTP.post({
      url: _.Endpoints.GUILD_JOIN_REQUEST_INTERVIEW(e)
    }),
    s = (0, o.createChannelRecordFromServer)(n.body);
  return r.default.dispatch({
    type: "CHANNEL_CREATE",
    channel: s
  }), t && a.default.selectPrivateChannel(s.id), s.id
};
t.default = {
  fetchGuildJoinRequest: c,
  fetchGuildJoinRequests: E,
  ackUserGuildJoinRequest: T,
  removeGuildJoinRequest: I,
  updateGuildJoinRequest: f,
  actionAllPendingJoinRequests: S,
  resetGuildJoinRequest: h,
  fetchRequestToJoinGuilds: A,
  setSelectedApplicationTab: (e, t) => {
    r.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
      guildId: e,
      applicationTab: t
    })
  },
  setSelectedSortOrder: (e, t) => {
    r.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
      guildId: e,
      sortOrder: t
    })
  },
  setSelectedGuildJoinRequest: (e, t) => {
    null != t && (0, s.trackClanApplicationViewed)({
      guildId: e,
      applicationStatus: t.applicationStatus,
      applicationUserId: t.userId
    }), r.default.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
      guildId: e,
      request: t
    })
  },
  createOrEnterJoinRequestInterview: m
}