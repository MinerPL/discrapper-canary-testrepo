"use strict";
var i = n(544891),
  r = n(570140),
  s = n(287734),
  o = n(970606),
  a = n(131704),
  l = n(826581),
  u = n(246364),
  _ = n(937111),
  d = n(981631);
let c = async e => {
  let t = await i.tn.get({
      url: d.ANM.GUILD_JOIN_REQUEST_BY_ID(e)
    }),
    n = (0, _.j)(t.body);
  return r.Z.dispatch({
    type: "GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS",
    joinRequest: n
  }), t
}, E = async e => {
  let {
    guildId: t,
    status: n = u.wB.SUBMITTED,
    before: s,
    after: o,
    limit: a = u.tB,
    force: c = !1
  } = e, E = c || !l.Z.hasFetched(t);
  if (!l.Z.isFetching() && E) {
    r.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_FETCH_START"
    });
    try {
      var I;
      let e = await i.tn.get({
          url: d.ANM.GUILD_JOIN_REQUESTS(t),
          query: {
            status: n,
            limit: a,
            before: s,
            after: o
          }
        }),
        l = e.body.total,
        u = (null !== (I = e.body.guild_join_requests) && void 0 !== I ? I : []).map(_.j);
      return r.Z.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_SUCCESS",
        status: n,
        requests: u,
        total: l,
        limit: a,
        guildId: t
      }), e
    } catch (e) {
      throw r.Z.dispatch({
        type: "GUILD_JOIN_REQUESTS_FETCH_FAILURE"
      }), e
    }
  }
}, I = async e => {
  try {
    let t = await i.tn.del({
      url: d.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return r.Z.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: null
    }), t
  } catch (e) {
    throw e
  }
}, T = async (e, t) => {
  try {
    return await i.tn.post({
      url: d.ANM.GUILD_JOIN_REQUEST_ACK(e, t)
    })
  } catch (e) {} finally {
    r.Z.dispatch({
      type: "ACK_APPROVED_GUILD_JOIN_REQUEST",
      id: t,
      guildId: e
    })
  }
}, h = async function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.wB.APPROVED,
    s = arguments.length > 3 ? arguments[3] : void 0;
  (0, o.r2)({
    guildId: e,
    actionType: n,
    applicationUserId: t
  });
  let a = await i.tn.patch({
    url: d.ANM.GUILD_JOIN_REQUEST(e, t),
    body: {
      action: n,
      rejection_reason: s
    }
  });
  r.Z.dispatch({
    type: "GUILD_JOIN_REQUEST_UPDATE",
    guildId: e,
    status: a.body.application_status,
    request: a.body
  })
}, S = async (e, t) => {
  let n = await i.tn.patch({
    url: d.ANM.GUILD_JOIN_REQUESTS(e),
    body: {
      action: t
    }
  });
  return r.Z.dispatch({
    type: "GUILD_JOIN_REQUESTS_BULK_ACTION",
    guildId: e,
    action: t
  }), n.body
}, f = async e => {
  try {
    let {
      body: t
    } = await i.tn.post({
      url: d.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e)
    });
    return r.Z.dispatch({
      type: "USER_GUILD_JOIN_REQUEST_UPDATE",
      guildId: e,
      request: t
    }), t
  } catch (e) {
    throw e
  }
}, N = async () => {
  let e = await i.tn.get({
    url: d.ANM.USER_JOIN_REQUEST_GUILDS
  });
  r.Z.dispatch({
    type: "USER_JOIN_REQUEST_GUILDS_FETCH",
    guilds: e.body
  })
}, A = async function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
    n = await i.tn.post({
      url: d.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e)
    }),
    o = (0, a.q_)(n.body);
  return r.Z.dispatch({
    type: "CHANNEL_CREATE",
    channel: o
  }), t && s.default.selectPrivateChannel(o.id), o.id
};
t.Z = {
  fetchGuildJoinRequest: c,
  fetchGuildJoinRequests: E,
  ackUserGuildJoinRequest: T,
  removeGuildJoinRequest: I,
  updateGuildJoinRequest: h,
  actionAllPendingJoinRequests: S,
  resetGuildJoinRequest: f,
  fetchRequestToJoinGuilds: N,
  setSelectedApplicationTab: (e, t) => {
    r.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB",
      guildId: e,
      applicationTab: t
    })
  },
  setSelectedSortOrder: (e, t) => {
    r.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SORT_ORDER",
      guildId: e,
      sortOrder: t
    })
  },
  setSelectedGuildJoinRequest: (e, t) => {
    null != t && (0, o.bH)({
      guildId: e,
      applicationStatus: t.applicationStatus,
      applicationUserId: t.userId
    }), r.Z.dispatch({
      type: "GUILD_JOIN_REQUESTS_SET_SELECTED",
      guildId: e,
      request: t
    })
  },
  createOrEnterJoinRequestInterview: A
}