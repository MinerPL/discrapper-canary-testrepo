"use strict";
let i, s, n, l, o, r, d;
a.r(t), a("47120");
var c, u, f, m, p = a("442837"),
  I = a("570140"),
  g = a("823385"),
  T = a("823379"),
  h = a("971130"),
  N = a("709054"),
  S = a("592125"),
  y = a("496675"),
  v = a("699516"),
  C = a("800599"),
  A = a("981631"),
  E = a("245335");
let x = new Set,
  _ = [],
  w = new Map;

function R(e) {
  let t = new Set,
    a = null == l || d === E.InviteTargetTypes.EMBEDDED_APPLICATION ? void 0 : l.id,
    i = (0, h.getMostRecentDMedUser)(x, a);
  for (let e of (null != i && !v.default.isBlocked(i.id) && t.add(i.id), C.default.getUserAffinitiesUserIds())) t.add(e);
  let s = new Set;
  return d === E.InviteTargetTypes.EMBEDDED_APPLICATION && g.default.getChannelHistory().map(e => S.default.getChannel(e)).filter(T.isNotNullish).filter(e => e.type === A.ChannelTypes.GUILD_TEXT).filter(e => y.default.can(A.Permissions.SEND_MESSAGES, e)).slice(0, 3).forEach(e => s.add(e.id)), (0, h.generateRowsForQuery)({
    query: e,
    omitUserIds: x,
    suggestedUserIds: t,
    maxRowsWithoutQuery: 100,
    omitGuildId: a,
    suggestedChannelIds: s,
    inviteTargetType: d
  })
}

function D(e) {
  _ = e, w = new Map, e.forEach((e, t) => {
    w.set(e, {
      index: t
    })
  })
}
class j extends(c = p.default.Store) {
  initialize() {
    this.waitFor(v.default, C.default)
  }
  getInviteSuggestionRows() {
    return _
  }
  getTotalSuggestionsCount() {
    return s
  }
  getInitialCounts() {
    return i
  }
  getSelectedInviteMetadata(e) {
    let t = w.get(e),
      a = C.default.getUserAffinitiesUserIds();
    return null != t ? {
      rowNum: t.index,
      isAffinitySuggestion: e.isSuggested,
      numTotal: _.length,
      numAffinityConnections: a.size,
      isFiltered: n
    } : null
  }
}
m = "InviteSuggestionsStore", (f = "displayName") in(u = j) ? Object.defineProperty(u, f, {
  value: m,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : u[f] = m, t.default = new j(I.default, {
  LOAD_INVITE_SUGGESTIONS: function(e) {
    let {
      omitUserIds: t,
      guild: a,
      channel: c,
      applicationId: u,
      inviteTargetType: f
    } = e;
    l = null != c ? a : null, o = c, r = u, d = f;
    let m = v.default.getRelationships(),
      p = N.default.keys(m).filter(e => m[e] === A.RelationshipTypes.BLOCKED),
      I = (0, h.getUsersAlreadyJoined)({
        channel: o,
        applicationId: r,
        inviteTargetType: f
      });
    x = new Set([...t, ...p, ...I]), n = !1;
    let {
      rows: g,
      counts: T
    } = R("");
    D(g), i = T, s = _.length
  },
  INVITE_SUGGESTIONS_SEARCH: function(e) {
    let {
      query: t
    } = e;
    n = "" !== t;
    let {
      rows: a
    } = R(t);
    D(a)
  }
})