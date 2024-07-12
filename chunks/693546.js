var r = n(544891),
  i = n(570140),
  a = n(287734),
  o = n(970606),
  s = n(131704),
  l = n(826581),
  u = n(246364),
  c = n(937111),
  d = n(981631);
let _ = async e => {
  let t = await r.tn.get({
  url: d.ANM.GUILD_JOIN_REQUEST_BY_ID(e)
}),
n = (0, c.j)(t.body);
  return i.Z.dispatch({
type: 'GUILD_JOIN_REQUEST_BY_ID_FETCH_SUCCESS',
joinRequest: n
  }), t;
}, E = async e => {
  let {
guildId: t,
status: n = u.wB.SUBMITTED,
before: a,
after: o,
limit: s = u.tB,
force: _ = !1
  } = e, E = _ || !l.Z.hasFetched(t);
  if (!l.Z.isFetching() && E) {
i.Z.dispatch({
  type: 'GUILD_JOIN_REQUESTS_FETCH_START'
});
try {
  var f;
  let e = await r.tn.get({
      url: d.ANM.GUILD_JOIN_REQUESTS(t),
      query: {
        status: n,
        limit: s,
        before: a,
        after: o
      }
    }),
    l = e.body.total,
    u = (null !== (f = e.body.guild_join_requests) && void 0 !== f ? f : []).map(c.j);
  return i.Z.dispatch({
    type: 'GUILD_JOIN_REQUESTS_FETCH_SUCCESS',
    status: n,
    requests: u,
    total: l,
    limit: s,
    guildId: t
  }), e;
} catch (e) {
  throw i.Z.dispatch({
    type: 'GUILD_JOIN_REQUESTS_FETCH_FAILURE'
  }), e;
}
  }
}, f = async e => {
  try {
let t = await r.tn.del({
  url: d.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e)
});
return i.Z.dispatch({
  type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
  guildId: e,
  request: null
}), t;
  } catch (e) {
throw e;
  }
}, h = async (e, t) => {
  try {
return await r.tn.post({
  url: d.ANM.GUILD_JOIN_REQUEST_ACK(e, t)
});
  } catch (e) {} finally {
i.Z.dispatch({
  type: 'ACK_APPROVED_GUILD_JOIN_REQUEST',
  id: t,
  guildId: e
});
  }
}, p = async function(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : u.wB.APPROVED,
a = arguments.length > 3 ? arguments[3] : void 0;
  (0, o.r2)({
guildId: e,
actionType: n,
applicationUserId: t
  });
  let s = await r.tn.patch({
url: d.ANM.GUILD_JOIN_REQUEST(e, t),
body: {
  action: n,
  rejection_reason: a
}
  });
  i.Z.dispatch({
type: 'GUILD_JOIN_REQUEST_UPDATE',
guildId: e,
status: s.body.application_status,
request: s.body
  });
}, m = async (e, t) => {
  let n = await r.tn.patch({
url: d.ANM.GUILD_JOIN_REQUESTS(e),
body: {
  action: t
}
  });
  return i.Z.dispatch({
type: 'GUILD_JOIN_REQUESTS_BULK_ACTION',
guildId: e,
action: t
  }), n.body;
}, I = async e => {
  try {
let {
  body: t
} = await r.tn.post({
  url: d.ANM.GUILD_MEMBER_REQUEST_TO_JOIN(e)
});
return i.Z.dispatch({
  type: 'USER_GUILD_JOIN_REQUEST_UPDATE',
  guildId: e,
  request: t
}), t;
  } catch (e) {
throw e;
  }
}, T = async () => {
  let e = await r.tn.get({
url: d.ANM.USER_JOIN_REQUEST_GUILDS
  });
  i.Z.dispatch({
type: 'USER_JOIN_REQUEST_GUILDS_FETCH',
guilds: e.body
  });
}, g = async function(e) {
  let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
n = await r.tn.post({
  url: d.ANM.GUILD_JOIN_REQUEST_INTERVIEW(e)
}),
o = (0, s.q_)(n.body);
  return i.Z.dispatch({
type: 'CHANNEL_CREATE',
channel: o
  }), t && a.default.selectPrivateChannel(o.id), o.id;
};
t.Z = {
  fetchGuildJoinRequest: _,
  fetchGuildJoinRequests: E,
  ackUserGuildJoinRequest: h,
  removeGuildJoinRequest: f,
  updateGuildJoinRequest: p,
  actionAllPendingJoinRequests: m,
  resetGuildJoinRequest: I,
  fetchRequestToJoinGuilds: T,
  setSelectedApplicationTab: (e, t) => {
i.Z.dispatch({
  type: 'GUILD_JOIN_REQUESTS_SET_APPLICATION_TAB',
  guildId: e,
  applicationTab: t
});
  },
  setSelectedSortOrder: (e, t) => {
i.Z.dispatch({
  type: 'GUILD_JOIN_REQUESTS_SET_SORT_ORDER',
  guildId: e,
  sortOrder: t
});
  },
  setSelectedGuildJoinRequest: (e, t) => {
null != t && (0, o.bH)({
  guildId: e,
  applicationStatus: t.applicationStatus,
  applicationUserId: t.userId
}), i.Z.dispatch({
  type: 'GUILD_JOIN_REQUESTS_SET_SELECTED',
  guildId: e,
  request: t
});
  },
  createOrEnterJoinRequestInterview: g
};