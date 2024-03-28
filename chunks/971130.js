"use strict";
let n;
s.r(t), s.d(t, {
  RowTypes: function() {
    return r
  },
  generateRowsForQuery: function() {
    return A
  },
  getMostRecentDMedUser: function() {
    return V
  },
  getUsersAlreadyJoined: function() {
    return R
  },
  maxAgeString: function() {
    return D
  }
}), s("653041"), s("47120");
var r, l, a = s("317381"),
  u = s("592125"),
  i = s("271383"),
  I = s("306680"),
  d = s("699516"),
  o = s("594174"),
  _ = s("55589"),
  f = s("483360"),
  c = s("981631"),
  E = s("245335"),
  N = s("689938");
n = s("603617"), (l = r || (r = {})).GROUP_DM = "GROUP_DM", l.DM = "DM", l.FRIEND = "FRIEND", l.CHANNEL = "CHANNEL";
let T = (e, t) => null != e && i.default.isMember(e, t),
  S = e => {
    let {
      omitUserIds: t,
      suggestedUserIds: s,
      maxRowsWithoutQuery: n,
      omitGuildId: r,
      shownUserIds: l,
      rows: a,
      counts: u
    } = e;
    if (null != s)
      for (let e of s) {
        if (null != n && n > 0 && a.length >= n) break;
        if (t.has(e) || l.has(e)) continue;
        let s = o.default.getUser(e);
        !(null == s || T(r, s.id)) && (l.add(s.id), a.push({
          type: "FRIEND",
          item: s,
          isSuggested: !0
        }), u.numFriends++)
      }
  },
  O = e => {
    let {
      suggestedChannelIds: t,
      maxRowsWithoutQuery: s,
      rows: n,
      counts: r
    } = e;
    if (null != t)
      for (let e of t) {
        if (null != s && s > 0 && n.length >= s) break;
        let t = u.default.getChannel(e);
        null != t && (n.push({
          type: "CHANNEL",
          item: t,
          isSuggested: !0
        }), r.numChannels++)
      }
  },
  h = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: s,
      omitGuildId: n,
      shownUserIds: r,
      rows: l,
      counts: a,
      includeGroupDms: i,
      limit: d
    } = e, f = 0;
    for (let e of _.default.getPrivateChannelIds()) {
      if (null != s && s > 0 && l.length >= s || null != d && f >= d) break;
      let _ = u.default.getChannel(e);
      if (null == _ || !_.isPrivate()) continue;
      if (i && _.type === c.ChannelTypes.GROUP_DM) {
        l.push({
          type: "GROUP_DM",
          item: _,
          isSuggested: !1
        }), a.numGroupDms++, f++;
        continue
      }
      if (null == I.default.lastMessageId(_.id)) continue;
      let E = _.getRecipientId();
      if (null != E && !t.has(E) && !r.has(E)) {
        let e = o.default.getUser(E);
        if (null == e || e.bot || T(n, e.id)) continue;
        r.add(e.id), l.push({
          type: "DM",
          item: e,
          isSuggested: !1
        }), a.numDms++, f++
      }
    }
  },
  g = e => {
    let {
      omitUserIds: t,
      maxRowsWithoutQuery: s,
      omitGuildId: n,
      shownUserIds: r,
      rows: l,
      counts: a
    } = e;
    for (let e of d.default.getFriendIDs()) {
      if (null != s && s > 0 && l.length >= s) break;
      if (t.has(e) || r.has(e)) continue;
      let u = o.default.getUser(e);
      !(null == u || T(n, u.id)) && (l.push({
        type: "FRIEND",
        item: u,
        isSuggested: !1
      }), a.numFriends++)
    }
  },
  M = e => {
    let {
      query: t,
      rows: s,
      counts: n,
      inviteTargetType: r
    } = e;
    r === E.InviteTargetTypes.EMBEDDED_APPLICATION && f.default.queryChannels({
      query: t,
      limit: 3,
      guildId: void 0
    }).forEach(e => {
      let {
        record: t
      } = e;
      s.push({
        type: "CHANNEL",
        item: t,
        isSuggested: !1
      }), n.numChannels++
    })
  },
  p = e => {
    let {
      query: t,
      omitUserIds: s,
      shownUserIds: n,
      rows: r,
      counts: l
    } = e;
    f.default.queryDMUsers({
      query: t,
      limit: 50
    }).forEach(e => {
      let {
        record: t
      } = e;
      if (s.has(t.id)) return;
      let a = u.default.getDMFromUserId(t.id);
      if (null != a) null != I.default.lastMessageId(a) && (n.add(t.id), r.push({
        type: "DM",
        item: t,
        isSuggested: !1
      }), l.numDms++)
    })
  },
  m = e => {
    let {
      query: t,
      rows: s,
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
      s.push({
        type: "GROUP_DM",
        item: t,
        isSuggested: !1
      }), n.numGroupDms++
    })
  },
  v = e => {
    let {
      query: t,
      rows: s,
      counts: n,
      omitUserIds: r,
      shownUserIds: l
    } = e;
    f.default.queryFriends({
      query: t,
      limit: 500,
      _fuzzy: !1
    }).forEach(e => {
      let {
        record: t
      } = e;
      !(r.has(t.id) || l.has(t.id)) && (l.add(t.id), s.push({
        type: "FRIEND",
        item: t,
        isSuggested: !1
      }), n.numFriends++)
    })
  };

function A(e) {
  let {
    query: t,
    inviteTargetType: s,
    omitUserIds: n,
    suggestedUserIds: r,
    suggestedChannelIds: l,
    maxRowsWithoutQuery: a,
    omitGuildId: u
  } = e, i = new Set, I = [], d = {
    numFriends: 0,
    numDms: 0,
    numGroupDms: 0,
    numGuildMembers: 0,
    numChannels: 0
  };
  if ("" === t) {
    let e = {
      omitUserIds: n,
      maxRowsWithoutQuery: a,
      omitGuildId: u,
      shownUserIds: i,
      rows: I,
      counts: d
    };
    s === E.InviteTargetTypes.EMBEDDED_APPLICATION && (h({
      ...e,
      includeGroupDms: !1,
      limit: 1
    }), O({
      ...e,
      suggestedChannelIds: l
    })), S({
      ...e,
      suggestedUserIds: r
    }), h({
      ...e,
      includeGroupDms: !0
    }), g(e)
  } else {
    let e = {
      query: t,
      rows: I,
      counts: d
    };
    s === E.InviteTargetTypes.EMBEDDED_APPLICATION && M({
      ...e,
      inviteTargetType: s
    }), p({
      ...e,
      omitUserIds: n,
      shownUserIds: i
    }), m(e), v({
      ...e,
      omitUserIds: n,
      shownUserIds: i
    })
  }
  return {
    rows: I,
    counts: d
  }
}

function V(e, t) {
  for (let s of _.default.getPrivateChannelIds()) {
    let n = u.default.getChannel(s);
    if (null == n || !n.isDM() || null == I.default.lastMessageId(n.id)) continue;
    let r = n.getRecipientId();
    if (null != r && !e.has(r)) {
      let e = o.default.getUser(r);
      if (null == e || e.bot || T(t, e.id)) continue;
      return e
    }
  }
  return null
}

function R(e) {
  let {
    channel: t,
    inviteTargetType: s,
    applicationId: n
  } = e;
  if (s === E.InviteTargetTypes.EMBEDDED_APPLICATION) {
    if (null != t) {
      for (let e of a.default.getEmbeddedActivitiesForChannel(t.id))
        if (e.applicationId === n) return new Set(e.userIds)
    }
  }
  return new Set
}
let P = {
    MINUTES: "minutes",
    HOURS: "hours",
    DAYS: "days",
    NEVER: "never"
  },
  U = {
    [n.INVITE_OPTIONS_30_MINUTES.value]: {
      value: 30,
      type: P.MINUTES
    },
    [n.INVITE_OPTIONS_1_HOUR.value]: {
      value: 1,
      type: P.HOURS
    },
    [n.INVITE_OPTIONS_6_HOURS.value]: {
      value: 6,
      type: P.HOURS
    },
    [n.INVITE_OPTIONS_12_HOURS.value]: {
      value: 12,
      type: P.HOURS
    },
    [n.INVITE_OPTIONS_1_DAY.value]: {
      value: 1,
      type: P.DAYS
    },
    [n.INVITE_OPTIONS_7_DAYS.value]: {
      value: 7,
      type: P.DAYS
    },
    [n.INVITE_OPTIONS_FOREVER.value]: {
      value: 0,
      type: P.NEVER
    }
  };

function D(e, t) {
  let s = parseInt(t, 10),
    n = 0 === s,
    r = U[e].value;
  switch (U[e].type) {
    case P.MINUTES:
      if (n) return N.default.Messages.INVITE_EXPIRES_MINUTES;
      return N.default.Messages.INVITE_EXPIRES_MINUTES_OR_USES.format({
        numUses: s
      });
    case P.HOURS:
      if (n) return N.default.Messages.INVITE_EXPIRES_HOURS.format({
        numHours: r
      });
      return N.default.Messages.INVITE_EXPIRES_HOURS_OR_USES.format({
        numHours: r,
        numUses: s
      });
    case P.DAYS:
      if (n) return N.default.Messages.INVITE_EXPIRES_DAYS_PLURAL.format({
        numDays: r
      });
      return N.default.Messages.INVITE_EXPIRES_DAYS_OR_USES_PLURAL.format({
        numDays: r,
        numUses: s
      });
    case P.NEVER:
      if (n) return N.default.Messages.INVITE_EXPIRES_NEVER;
      return N.default.Messages.INVITE_EXPIRES_USES.format({
        numUses: s
      });
    default:
      return ""
  }
}
t.default = {
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