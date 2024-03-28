"use strict";
n.r(t), n("733860"), n("653041");
var s, a, l, i, r = n("392711"),
  o = n.n(r),
  u = n("442837"),
  d = n("433517"),
  c = n("379649"),
  f = n("570140"),
  E = n("786761"),
  _ = n("572804"),
  T = n("901461"),
  m = n("23750"),
  I = n("314897"),
  p = n("592125"),
  h = n("375954"),
  N = n("306680"),
  S = n("699516"),
  C = n("914010"),
  A = n("9156"),
  g = n("594174"),
  M = n("981631");
let R = "recentMentionFilterSettings",
  O = [],
  v = {},
  L = !1,
  x = !0,
  D = d.Storage.get(R, {
    guildFilter: M.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  P = !1,
  y = 0,
  U = !1,
  b = !1;

function j(e) {
  if (e instanceof m.default) return e;
  let t = h.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, E.createMessageRecord)(e)
}

function G(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, T.default)(e)) return null;
  null == n && (n = e.channel_id);
  let s = p.default.getChannel(n);
  if (null == s || s.type === M.ChannelTypes.DM || D.guildFilter === M.RecentMentionsFilters.THIS_SERVER && s.getGuildId() !== C.default.getGuildId()) return null;
  let a = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    l = I.default.getId();
  if (null != a && S.default.isBlocked(a) || a === l) return null;
  e = j(e);
  let i = !D.everyoneFilter,
    r = !D.roleFilter;
  return (0, _.default)({
    message: e,
    userId: l,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (b && N.default.ackMessageId(s.id) !== e.id && (0, _.default)({
    message: e,
    userId: l,
    suppressEveryone: A.default.isSuppressEveryoneEnabled(s.getGuildId()),
    suppressRoles: A.default.isSuppressRolesEnabled(s.getGuildId())
  }) && (b = !1), e) : null
}

function B(e) {
  if (null == v[e]) return !1;
  delete v[e], O = o().filter(O, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function F(e) {
  let {
    id: t
  } = e;
  return B(t)
}

function k(e) {
  let t = {
    ...D
  };
  D = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), D), d.Storage.set(R, D);
  let n = (e, n) => t[e] !== D[e] && D[e] === n,
    s = n("guildFilter", M.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  v = {};
  let a = [];
  s && O.forEach(e => {
    let t = G(e);
    null != t && (a.push(t), v[t.id] = !0)
  }), 0 === (O = a).length && (P = !1)
}

function w() {
  O = [], v = {}, P = !1, b = !1
}

function H() {
  O = O.filter(e => !S.default.isBlocked(e.author.id))
}

function V(e) {
  let {
    channel: t
  } = e;
  O = o().filter(O, e => e.channel_id !== t.id || (delete v[e.id], !1))
}
class Y extends(s = u.default.Store) {
  initialize() {
    this.waitFor(g.default, p.default, h.default, N.default)
  }
  isOpen() {
    return U
  }
  get hasLoadedEver() {
    return P
  }
  get lastLoaded() {
    return y
  }
  getMentions() {
    return P || O.length > 0 ? O : null
  }
  hasMention(e) {
    return v[e]
  }
  get loading() {
    return L
  }
  get hasMore() {
    return x
  }
  get guildFilter() {
    return D.guildFilter
  }
  get everyoneFilter() {
    return D.everyoneFilter
  }
  get roleFilter() {
    return D.roleFilter
  }
  get mentionsAreStale() {
    return b
  }
}
i = "RecentMentionsStore", (l = "displayName") in(a = Y) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new Y(f.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    L = !0, null == t && D.guildFilter === M.RecentMentionsFilters.THIS_SERVER && k({
      guildFilter: M.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: s
    } = e, a = o().map(n, j);
    s ? O = O.concat(a) : (O = a, v = {}), o().forEach(a, e => {
      v[e.id] = !0
    }), L = !1, x = t, y = (0, c.now)(), P = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    L = !1
  },
  SET_RECENT_MENTIONS_FILTER: k,
  CLEAR_MENTIONS: function(e) {
    w()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < O.length; ++e) delete v[O[e].id];
    let n = O.length;
    n > (O = O.slice(0, t)).length && (x = !0)
  },
  CHANNEL_SELECT: function() {
    if (D.guildFilter !== M.RecentMentionsFilters.THIS_SERVER) return !1;
    P = !1
  },
  CONNECTION_OPEN: w,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    O = o().filter(O, e => {
      let n = p.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete v[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, s = g.default.getCurrentUser();
    if (null == s || !(0, _.isRawMessageMentioned)({
        rawMessage: n,
        userId: s.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let a = G(n, t);
    if (null == a) return !1;
    (O = O.slice()).unshift(a), v[a.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == v[String(t)]) return !1;
    let n = o().findIndex(O, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      s = (O = O.slice())[n];
    null != s && (O[n] = (0, E.updateMessageRecord)(s, e.message))
  },
  MESSAGE_DELETE: F,
  RECENT_MENTION_DELETE: F,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    o().forEach(t, B)
  },
  CHANNEL_DELETE: V,
  THREAD_DELETE: V,
  RELATIONSHIP_ADD: H,
  RELATIONSHIP_REMOVE: H,
  MENTION_MODAL_OPEN: function() {
    U = !0
  },
  MENTION_MODAL_CLOSE: function() {
    U = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    b = !0
  }
})