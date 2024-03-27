"use strict";
let l, a, s, i, r, u, o;
n.r(t), n.d(t, {
  default: function() {
    return y
  }
}), n("222007");
var d = n("446674"),
  c = n("913144"),
  h = n("116460"),
  f = n("449008"),
  I = n("354023"),
  g = n("299039"),
  E = n("42203"),
  v = n("957255"),
  T = n("27618"),
  m = n("843823"),
  p = n("49111"),
  _ = n("91366");
let N = new Set,
  C = [],
  S = new Map;

function x(e) {
  let t = new Set,
    n = null == i || o === _.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : i.id,
    l = (0, I.getMostRecentDMedUser)(N, n);
  for (let e of (null != l && !T.default.isBlocked(l.id) && t.add(l.id), m.default.getUserAffinitiesUserIds())) t.add(e);
  let a = new Set;
  if (o === _.InviteTargetTypes.EMBEDDED_APPLICATION) {
    let e = h.default.getChannelHistory();
    e.map(e => E.default.getChannel(e)).filter(f.isNotNullish).filter(e => e.type === p.ChannelTypes.GUILD_TEXT).filter(e => v.default.can(p.Permissions.SEND_MESSAGES, e)).slice(0, 3).forEach(e => a.add(e.id))
  }
  return (0, I.generateRowsForQuery)({
    query: e,
    omitUserIds: N,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: n,
    suggestedChannelIds: a,
    inviteTargetType: o
  })
}

function M(e) {
  C = e, S = new Map, e.forEach((e, t) => {
    S.set(e, {
      index: t
    })
  })
}
class A extends d.default.Store {
  initialize() {
    this.waitFor(T.default, m.default)
  }
  getInviteSuggestionRows() {
    return C
  }
  getTotalSuggestionsCount() {
    return a
  }
  getInitialCounts() {
    return l
  }
  getSelectedInviteMetadata(e) {
    let t = S.get(e),
      n = m.default.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: C.length,
      numAffinityConnections: n.size,
      isFiltered: s
    } : null
  }
}
A.displayName = "InviteSuggestionsStore";
var y = new A(c.default, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: n,
      channel: d,
      applicationId: c,
      inviteTargetType: h
    } = e;
    i = null != d ? n : null, r = d, u = c, o = h;
    let f = T.default.getRelationships(),
      E = g.default.keys(f).filter(e => f[e] === p.RelationshipTypes.BLOCKED),
      v = (0, I.getUsersAlreadyJoined)({
        channel: r,
        applicationId: u,
        inviteTargetType: h
      });
    N = new Set([...t, ...E, ...v]), s = !1;
    let {
      rows: m,
      counts: _
    } = x("");
    M(m), l = _, a = C.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    s = "" !== t;
    let {
      rows: n
    } = x(t);
    M(n)
  }
})