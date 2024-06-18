"use strict";
n.d(t, {
  j: function() {
    return h
  }
});
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(601964),
  _ = n(594174),
  d = n(881952);
let c = !1,
  E = {},
  I = !1,
  T = {};

function h(e) {
  return {
    joinRequestId: e.join_request_id,
    guildId: e.guild_id,
    userId: e.user_id,
    user: e.user,
    createdAt: e.created_at,
    formResponses: e.form_responses,
    rejectionReason: e.rejection_reason,
    applicationStatus: e.application_status,
    actionedAt: e.actioned_at,
    actionedByUser: e.actioned_by_user,
    lastSeen: e.last_seen,
    interviewChannelId: e.interview_channel_id
  }
}

function S(e) {
  let {
    guildId: t,
    request: n
  } = e;
  if (null == n) return;
  let i = h(n),
    r = _.default.getCurrentUser();
  if (null != r && i.userId !== r.id) return !1;
  (0, d.d3)(i) ? delete E[t]: E[t] = i
}
class f extends(o = a.ZP.Store) {
  getRequest(e) {
    return E[e]
  }
  computeGuildIds() {
    return Object.values(E).map(e => null == e ? void 0 : e.guildId).filter(e => null != e)
  }
  getJoinRequestGuild(e) {
    return null != T[e] ? new u.ZP(T[e]) : null
  }
  get hasFetchedRequestToJoinGuilds() {
    return I
  }
  hasJoinRequestCoackmark() {
    return c
  }
}
s = "UserGuildJoinRequestStore", (r = "displayName") in(i = f) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new f(l.Z, {
  CONNECTION_OPEN: function(e) {
    let {
      guildJoinRequests: t
    } = e;
    I = !1, T = {}, E = {}, t.forEach(e => {
      let {
        guild_id: t
      } = e;
      null != t && (E[t] = h(e))
    })
  },
  GUILD_JOIN_REQUEST_UPDATE: S,
  GUILD_JOIN_REQUEST_CREATE: S,
  USER_GUILD_JOIN_REQUEST_UPDATE: function(e) {
    let {
      request: t,
      guildId: n
    } = e;
    if (null == t) {
      delete E[n];
      return
    }
    let i = h(t);
    (0, d.d3)(i) ? delete E[n]: E[n] = i
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete E[t.id]
  },
  USER_JOIN_REQUEST_GUILDS_FETCH: function(e) {
    let {
      guilds: t
    } = e;
    I = !0, t.forEach(e => {
      let {
        id: t,
        name: n,
        features: i,
        icon: r
      } = e;
      T[t] = {
        id: t,
        name: n,
        features: i,
        icon: r
      }
    })
  },
  MEMBER_VERIFICATION_FORM_UPDATE: function(e) {
    let {
      form: t,
      guildId: n
    } = e;
    if ((null == t ? void 0 : t.guild) != null) {
      let {
        id: e,
        name: i,
        icon: r,
        features: s
      } = t.guild;
      T[n] = {
        id: e,
        name: i,
        icon: r,
        features: null != s ? s : []
      }
    }
  },
  INVITE_ACCEPT_SUCCESS: function(e) {
    let {
      invite: t
    } = e, {
      guild: n,
      join_request: i
    } = t;
    if (null != n && null != i) {
      let {
        guild_id: e
      } = i;
      E[e] = h(i);
      let {
        id: t,
        name: r,
        icon: s,
        features: o
      } = n;
      T[t] = {
        id: t,
        name: r,
        icon: s,
        features: null != o ? o : []
      }
    }
  },
  ACK_APPROVED_GUILD_JOIN_REQUEST: function(e) {
    let {
      guildId: t
    } = e;
    delete E[t]
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_SHOW: function() {
    c = !0
  },
  USER_GUILD_JOIN_REQUEST_COACHMARK_CLEAR: function() {
    c = !1
  }
})