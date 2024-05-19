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
  m = n("901461"),
  T = n("814082"),
  I = n("23750"),
  p = n("314897"),
  h = n("592125"),
  N = n("375954"),
  S = n("306680"),
  C = n("699516"),
  A = n("914010"),
  g = n("9156"),
  M = n("594174"),
  R = n("981631");
let v = "recentMentionFilterSettings",
  O = [],
  x = {},
  L = !1,
  D = !0,
  P = d.Storage.get(v, {
    guildFilter: R.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  y = !1,
  U = 0,
  j = !1,
  b = !1;

function B(e) {
  if (e instanceof I.default) return e;
  let t = N.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, E.createMessageRecord)(e)
}

function F(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, m.default)(e) && !R.MessageTypesSets.SELF_MENTIONABLE_SYSTEM.has(e.type)) return null;
  null == n && (n = e.channel_id);
  let s = h.default.getChannel(n);
  if (null == s || s.type === R.ChannelTypes.DM || P.guildFilter === R.RecentMentionsFilters.THIS_SERVER && s.getGuildId() !== A.default.getGuildId()) return null;
  let a = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    l = p.default.getId();
  if (null != a && C.default.isBlocked(a) || (0, T.default)(e, l)) return null;
  e = B(e);
  let i = !P.everyoneFilter,
    r = !P.roleFilter;
  return (0, _.default)({
    message: e,
    userId: l,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (b && S.default.ackMessageId(s.id) !== e.id && (0, _.default)({
    message: e,
    userId: l,
    suppressEveryone: g.default.isSuppressEveryoneEnabled(s.getGuildId()),
    suppressRoles: g.default.isSuppressRolesEnabled(s.getGuildId())
  }) && (b = !1), e) : null
}

function G(e) {
  if (null == x[e]) return !1;
  delete x[e], O = o().filter(O, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function k(e) {
  let {
    id: t
  } = e;
  return G(t)
}

function w(e) {
  let t = {
    ...P
  };
  P = o().defaults(o().pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), P), d.Storage.set(v, P);
  let n = (e, n) => t[e] !== P[e] && P[e] === n,
    s = n("guildFilter", R.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  x = {};
  let a = [];
  s && O.forEach(e => {
    let t = F(e);
    null != t && (a.push(t), x[t.id] = !0)
  }), 0 === (O = a).length && (y = !1)
}

function H() {
  O = [], x = {}, y = !1, b = !1
}

function V() {
  O = O.filter(e => !C.default.isBlocked(e.author.id))
}

function Y(e) {
  let {
    channel: t
  } = e;
  O = o().filter(O, e => e.channel_id !== t.id || (delete x[e.id], !1))
}
class K extends(s = u.default.Store) {
  initialize() {
    this.waitFor(M.default, h.default, N.default, S.default)
  }
  isOpen() {
    return j
  }
  get hasLoadedEver() {
    return y
  }
  get lastLoaded() {
    return U
  }
  getMentions() {
    return y || O.length > 0 ? O : null
  }
  hasMention(e) {
    return x[e]
  }
  get loading() {
    return L
  }
  get hasMore() {
    return D
  }
  get guildFilter() {
    return P.guildFilter
  }
  get everyoneFilter() {
    return P.everyoneFilter
  }
  get roleFilter() {
    return P.roleFilter
  }
  get mentionsAreStale() {
    return b
  }
}
i = "RecentMentionsStore", (l = "displayName") in(a = K) ? Object.defineProperty(a, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[l] = i, t.default = new K(f.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    L = !0, null == t && P.guildFilter === R.RecentMentionsFilters.THIS_SERVER && w({
      guildFilter: R.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: s
    } = e, a = o().map(n, B);
    s ? O = O.concat(a) : (O = a, x = {}), o().forEach(a, e => {
      x[e.id] = !0
    }), L = !1, D = t, U = (0, c.now)(), y = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    L = !1
  },
  SET_RECENT_MENTIONS_FILTER: w,
  CLEAR_MENTIONS: function(e) {
    H()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < O.length; ++e) delete x[O[e].id];
    let n = O.length;
    n > (O = O.slice(0, t)).length && (D = !0)
  },
  CHANNEL_SELECT: function() {
    if (P.guildFilter !== R.RecentMentionsFilters.THIS_SERVER) return !1;
    y = !1
  },
  CONNECTION_OPEN: H,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    O = o().filter(O, e => {
      let n = h.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete x[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, s = M.default.getCurrentUser();
    if (null == s || !(0, _.isRawMessageMentioned)({
        rawMessage: n,
        userId: s.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let a = F(n, t);
    if (null == a) return !1;
    (O = O.slice()).unshift(a), x[a.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == x[String(t)]) return !1;
    let n = o().findIndex(O, e => {
        let {
          id: n
        } = e;
        return n === t
      }),
      s = (O = O.slice())[n];
    null != s && (O[n] = (0, E.updateMessageRecord)(s, e.message))
  },
  MESSAGE_DELETE: k,
  RECENT_MENTION_DELETE: k,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    o().forEach(t, G)
  },
  CHANNEL_DELETE: Y,
  THREAD_DELETE: Y,
  RELATIONSHIP_ADD: V,
  RELATIONSHIP_REMOVE: V,
  MENTION_MODAL_OPEN: function() {
    j = !0
  },
  MENTION_MODAL_CLOSE: function() {
    j = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    b = !0
  }
})