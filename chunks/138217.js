"use strict";
n.r(t), n.d(t, {
  default: function() {
    return B
  }
}), n("843762"), n("424973");
var a = n("917351"),
  l = n.n(a),
  s = n("446674"),
  i = n("95410"),
  r = n("398183"),
  o = n("913144"),
  u = n("692038"),
  d = n("406297"),
  c = n("913491"),
  f = n("719926"),
  h = n("271938"),
  E = n("42203"),
  m = n("377253"),
  p = n("660478"),
  S = n("27618"),
  g = n("162771"),
  N = n("282109"),
  _ = n("697218"),
  T = n("49111");
let I = "recentMentionFilterSettings",
  C = [],
  A = {},
  M = !1,
  v = !0,
  R = i.default.get(I, {
    guildFilter: T.RecentMentionsFilters.ALL_SERVERS,
    everyoneFilter: !0,
    roleFilter: !0
  }),
  x = !1,
  L = 0,
  O = !1,
  b = !1;

function y(e) {
  if (e instanceof f.default) return e;
  let t = m.default.getMessage(e.channel_id, e.id);
  return null != t ? t : (0, u.createMessageRecord)(e)
}

function j(e) {
  var t;
  let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
  if ((0, c.default)(e)) return null;
  null == n && (n = e.channel_id);
  let a = E.default.getChannel(n);
  if (null == a || a.type === T.ChannelTypes.DM || R.guildFilter === T.RecentMentionsFilters.THIS_SERVER && a.getGuildId() !== g.default.getGuildId()) return null;
  let l = null === (t = e.author) || void 0 === t ? void 0 : t.id,
    s = h.default.getId();
  if (null != l && S.default.isBlocked(l) || l === s) return null;
  e = y(e);
  let i = !R.everyoneFilter,
    r = !R.roleFilter;
  return (0, d.default)({
    message: e,
    userId: s,
    suppressEveryone: i,
    suppressRoles: r
  }) ? (b && p.default.ackMessageId(a.id) !== e.id && (0, d.default)({
    message: e,
    userId: s,
    suppressEveryone: N.default.isSuppressEveryoneEnabled(a.getGuildId()),
    suppressRoles: N.default.isSuppressRolesEnabled(a.getGuildId())
  }) && (b = !1), e) : null
}

function F(e) {
  if (null == A[e]) return !1;
  delete A[e], C = l.filter(C, t => {
    let {
      id: n
    } = t;
    return n !== e
  })
}

function D(e) {
  let {
    id: t
  } = e;
  return F(t)
}

function U(e) {
  let t = {
    ...R
  };
  R = l.defaults(l.pick(e, ["guildFilter", "roleFilter", "everyoneFilter"]), R), i.default.set(I, R);
  let n = (e, n) => t[e] !== R[e] && R[e] === n,
    a = n("guildFilter", T.RecentMentionsFilters.THIS_SERVER) || n("everyoneFilter", !1) || n("roleFilter", !1);
  A = {};
  let s = [];
  a && C.forEach(e => {
    let t = j(e);
    null != t && (s.push(t), A[t.id] = !0)
  }), 0 === (C = s).length && (x = !1)
}

function k() {
  C = [], A = {}, x = !1, b = !1
}

function P() {
  C = C.filter(e => !S.default.isBlocked(e.author.id))
}

function w(e) {
  let {
    channel: t
  } = e;
  C = l.filter(C, e => e.channel_id !== t.id || (delete A[e.id], !1))
}
class G extends s.default.Store {
  initialize() {
    this.waitFor(_.default, E.default, m.default, p.default)
  }
  isOpen() {
    return O
  }
  get hasLoadedEver() {
    return x
  }
  get lastLoaded() {
    return L
  }
  getMentions() {
    return x || C.length > 0 ? C : null
  }
  hasMention(e) {
    return A[e]
  }
  get loading() {
    return M
  }
  get hasMore() {
    return v
  }
  get guildFilter() {
    return R.guildFilter
  }
  get everyoneFilter() {
    return R.everyoneFilter
  }
  get roleFilter() {
    return R.roleFilter
  }
  get mentionsAreStale() {
    return b
  }
}
G.displayName = "RecentMentionsStore";
var B = new G(o.default, {
  LOAD_RECENT_MENTIONS: function(e) {
    let {
      guildId: t
    } = e;
    M = !0, null == t && R.guildFilter === T.RecentMentionsFilters.THIS_SERVER && U({
      guildFilter: T.RecentMentionsFilters.ALL_SERVERS
    })
  },
  LOAD_RECENT_MENTIONS_SUCCESS: function(e) {
    let {
      hasMoreAfter: t,
      messages: n,
      isAfter: a
    } = e, s = l.map(n, y);
    a ? C = C.concat(s) : (C = s, A = {}), l.forEach(s, e => {
      A[e.id] = !0
    }), M = !1, v = t, L = (0, r.now)(), x = !0
  },
  LOAD_RECENT_MENTIONS_FAILURE: function() {
    M = !1
  },
  SET_RECENT_MENTIONS_FILTER: U,
  CLEAR_MENTIONS: function(e) {
    k()
  },
  TRUNCATE_MENTIONS: function(e) {
    let {
      size: t
    } = e;
    for (let e = t; e < C.length; ++e) delete A[C[e].id];
    let n = C.length;
    n > (C = C.slice(0, t)).length && (v = !0)
  },
  CHANNEL_SELECT: function() {
    if (R.guildFilter !== T.RecentMentionsFilters.THIS_SERVER) return !1;
    x = !1
  },
  CONNECTION_OPEN: k,
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    C = l.filter(C, e => {
      let n = E.default.getChannel(e.channel_id);
      return null != n && n.getGuildId() !== t.id || (delete A[e.id], !1)
    })
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e, a = _.default.getCurrentUser();
    if (null == a || !(0, d.isRawMessageMentioned)({
        rawMessage: n,
        userId: a.id,
        suppressRoles: !1,
        suppressEveryone: !1
      })) return !1;
    let l = j(n, t);
    if (null == l) return !1;
    (C = C.slice()).unshift(l), A[l.id] = !0
  },
  MESSAGE_UPDATE: function(e) {
    let t = e.message.id;
    if (null == A[String(t)]) return !1;
    let n = l.findIndex(C, e => {
      let {
        id: n
      } = e;
      return n === t
    });
    C = C.slice();
    let a = C[n];
    null != a && (C[n] = (0, u.updateMessageRecord)(a, e.message))
  },
  MESSAGE_DELETE: D,
  RECENT_MENTION_DELETE: D,
  MESSAGE_DELETE_BULK: function(e) {
    let {
      ids: t
    } = e;
    l.forEach(t, F)
  },
  CHANNEL_DELETE: w,
  THREAD_DELETE: w,
  RELATIONSHIP_ADD: P,
  RELATIONSHIP_REMOVE: P,
  MENTION_MODAL_OPEN: function() {
    O = !0
  },
  MENTION_MODAL_CLOSE: function() {
    O = !1
  },
  SET_RECENT_MENTIONS_STALE: function(e) {
    b = !0
  }
})