"use strict";
let n;
u.r(t), u.d(t, {
  RowTypes: function() {
    return s
  },
  generateRowsForQuery: function() {
    return R
  },
  getMostRecentDMedUser: function() {
    return D
  },
  getUsersAlreadyJoined: function() {
    return V
  },
  maxAgeString: function() {
    return v
  },
  default: function() {
    return C
  }
}), u("424973"), u("222007");
var s, a, l = u("191225"),
  I = u("42203"),
  r = u("26989"),
  i = u("660478"),
  E = u("27618"),
  _ = u("697218"),
  T = u("287850"),
  f = u("25292"),
  O = u("49111"),
  N = u("91366"),
  d = u("782340");
n = u("591205"), (a = s || (s = {})).GROUP_DM = "GROUP_DM", a.DM = "DM", a.FRIEND = "FRIEND", a.CHANNEL = "CHANNEL";
let S = (e, t) => null != e && r.default.isMember(e, t),
  o = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: u,
      maxRowsWithoutQuery: n,
      omitGuildId: s,
      shownUserIds: a,
      rows: l,
      counts: I
    } = e;
    if (null != u)
      for (let e of u) {
        if (null != n && n > 0 && l.length >= n) break;
        if (t.has(e) || a.has(e)) continue;
        let u = _.default.getUser(e);
        !(null == u || S(s, u.id)) && (a.add(u.id), l.push({
          type: "FRIEND",
          item: u,
          isSuggested: !0
        }), I.numFriends++)
      }
  },
  M = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: u,
      rows: n,
      counts: s
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != u && u > 0 && n.length >= u) break;
        let t = I.default.getChannel(e);
        null != t && (n.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), s.numChannels++)
      }
  },
  g = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: u,
      omitGuildId: n,
      shownUserIds: s,
      rows: a,
      counts: l,
      includeGroupDms: r,
      limit: E
    } = e, f = 0;
    for (let e of T.default.getPrivateChannelIds()) {
      if (null != u && u > 0 && a.length >= u || null != E && f >= E) break;
      let T = I.default.getChannel(e);
      if (null == T || !T.isPrivate()) continue;
      if (r && T.type === O.ChannelTypes.GROUP_DM) {
        a.push({
          type: "GROUP_DM",
          item: T,
          isSuggested: !1
        }), l.numGroupDms++, f++;
        continue
      }
      let N = i.default.lastMessageId(T.id);
      if (null == N) continue;
      let d = T.getRecipientId();
      if (null != d && !t.has(d) && !s.has(d)) {
        let e = _.default.getUser(d);
        if (null == e || e.bot || S(n, e.id)) continue;
        s.add(e.id), a.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), l.numDms++, f++
      }
    }
  },
  P = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: u,
      omitGuildId: n,
      shownUserIds: s,
      rows: a,
      counts: l
    } = e;
    for (let e of E.default.getFriendIDs()) {
      if (null != u && u > 0 && a.length >= u) break;
      if (t.has(e) || s.has(e)) continue;
      let I = _.default.getUser(e);
      !(null == I || S(n, I.id)) && (a.push({
        type: "FRIEND",
        item: I,
        isSuggested: !1
      }), l.numFriends++)
    }
  },
  A = e => {
    let {
      query: t,
      rows: u,
      counts: n,
      inviteTargetType: s
    } = e;
    s === N.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
      query: t,
      limit: 3,
      guildId: void 0
    }).forEach(e => {
      let {
        record: t
      } = e;
      u.push({
        type: "CHANNEL",
        item: t,
        isSuggested: !1
      }), n.numChannels++
    })
  },
  U = e => {
    let {
      query: t,
      omitUserIds: u,
      shownUserIds: n,
      rows: s,
      counts: a
    } = e;
    f.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (u.has(t.id)) return;
      let l = I.default.getDMFromUserId(t.id);
      if (null == l) return;
      let r = i.default.lastMessageId(l);
      null != r && (n.add(t.id), s.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), a.numDms++)
    })
  },
  c = e => {
    let {
      query: t,
      rows: u,
      counts: n
    } = e;
    f.default.queryGroupDMs({
      query: t,
      limit: 50,
      fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      u.push({
        type: "GROUP_DM",
        item: t,
        isSuggested: !1
      }), n.numGroupDms++
    })
  },
  m = e => {
    let {
      query: t,
      rows: u,
      counts: n,
      omitUserIds: s,
      shownUserIds: a
    } = e;
    f.default.queryFriends({
      query: t,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      !(s.has(t.id) || a.has(t.id)) && (a.add(t.id), u.push({
        type: "FRIEND",
        item: t,
        isSuggested: !1
      }), n.numFriends++)
    })
  };

function R(e) {
  let {
    query: t,
    inviteTargetType: u,
    omitUserIds: n,
    suggestedUserIds: s,
    suggestedChannelIds: a,
    maxRowsWithoutQuery: l,
    omitGuildId: I
  } = e, r = new Set, i = [], E = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: n,
      maxRowsWithoutQuery: l,
      omitGuildId: I,
      shownUserIds: r,
      rows: i,
      counts: E
    };
    u === N.InviteTargetTypes.EMBEDDED_APPLICATION && (g({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), M({
      ...e,
      suggestedChannelIds: a
    })), o({
      ...e,
      suggestedUserIds: s
    }), g({
      ...e,
      includeGroupDms: !0
    }), P(e)
  } else {
    let e = {
      query: t,
      rows: i,
      counts: E
    };
    u === N.InviteTargetTypes.EMBEDDED_APPLICATION && A({
      ...e,
      inviteTargetType: u
    }), U({
      ...e,
      omitUserIds: n,
      shownUserIds: r
    }), c(e), m({
      ...e,
      omitUserIds: n,
      shownUserIds: r
    })
  }
  return {
    rows: i,
    counts: E
  }
}

function D(e, t) {
  for (let u of T.default.getPrivateChannelIds()) {
    let n = I.default.getChannel(u);
    if (null == n || !n.isDM() || null == i.default.lastMessageId(n.id)) continue;
    let s = n.getRecipientId();
    if (null != s && !e.has(s)) {
      let e = _.default.getUser(s);
      if (null == e || e.bot || S(t, e.id)) continue;
      return e
    }
  }
  return null
}

function V(e) {
  let {
    channel: t,
    inviteTargetType: u,
    applicationId: n
  } = e;
  if (u === N.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of l.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === n) return new Set(e.userIds)
    }
  }
  return new Set
}
let h = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  p = {
    [n.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: h.MINUTES
    },
    [n.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: h.HOURS
    },
    [n.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: h.HOURS
    },
    [n.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: h.HOURS
    },
    [n.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: h.DAYS
    },
    [n.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: h.DAYS
    },
    [n.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: h.NEVER
    }
  };

function v(e, t) {
  let u = parseInt(t, 10),
    n = 0 === u,
    s = p[e].value,
    a = p[e].type;
  switch (a) {
    case h.MINUTES:
      if (n) return d.default.Messages.INVITE_EXPIRES_MINUTES;
      return d.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: u
      });
    case h.HOURS:
      if (n) return d.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: s
      });
      return d.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: s,
        numUses: u
      });
    case h.DAYS:
      if (n) return d.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: s
      });
      return d.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: s,
        numUses: u
      });
    case h.NEVER:
      if (n) return d.default.Messages.INVITE_EXPIRES_NEVER;
      return d.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: u
      });
    default:
      return ""
  }
}
var C = {
  getMaxAgeOptions: n.MAX_AGE_OPTIONS,
  getMaxUsesOptions: n.MAX_USES_OPTIONS,
  INVITE_OPTIONS_FOREVER: n.INVITE_OPTIONS_FOREVER,
  INVITE_OPTIONS_1_DAY: n.INVITE_OPTIONS_1_DAY,
  INVITE_OPTIONS_7_DAYS: n.INVITE_OPTIONS_7_DAYS,
  INVITE_OPTIONS_12_HOURS: n.INVITE_OPTIONS_12_HOURS,
  INVITE_OPTIONS_6_HOURS: n.INVITE_OPTIONS_6_HOURS,
  INVITE_OPTIONS_1_HOUR: n.INVITE_OPTIONS_1_HOUR,
  INVITE_OPTIONS_30_MINUTES: n.INVITE_OPTIONS_30_MINUTES,
  INVITE_OPTIONS_UNLIMITED: n.INVITE_OPTIONS_UNLIMITED,
  INVITE_OPTIONS_ONCE: n.INVITE_OPTIONS_ONCE,
  INVITE_OPTIONS_5_TIMES: n.INVITE_OPTIONS_5_TIMES,
  INVITE_OPTIONS_10_TIMES: n.INVITE_OPTIONS_10_TIMES,
  INVITE_OPTIONS_25_TIMES: n.INVITE_OPTIONS_25_TIMES,
  INVITE_OPTIONS_50_TIMES: n.INVITE_OPTIONS_50_TIMES,
  INVITE_OPTIONS_100_TIMES: n.INVITE_OPTIONS_100_TIMES
}