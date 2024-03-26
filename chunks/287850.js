"use strict";
let s, i, a;
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var l, r, u = n("866227"),
  o = n.n(u),
  c = n("446674"),
  d = n("407846"),
  f = n("913144"),
  p = n("21121"),
  h = n("934306"),
  I = n("288518"),
  v = n("486503"),
  E = n("233069"),
  _ = n("42203"),
  T = n("305961"),
  C = n("660478"),
  m = n("282109"),
  A = n("697218"),
  g = n("299039"),
  N = n("724210");
(r = l || (l = {})).DEFAULT = "DEFAULT", r.FAVORITE = "FAVORITE";
let S = new d.SecondaryIndexMap(e => {
  let {
    isRequest: t,
    isFavorite: n
  } = e;
  return t ? [] : [n ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function R(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let s = null !== (n = null !== (t = C.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = o(i).valueOf(),
        t = g.default.fromTimestamp(e);
      return g.default.compare(s, t) > 0 ? s : t
    }
    return s
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: m.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
    isRequest: I.default.isMessageRequest(e.id) || v.default.isSpam(e.id)
  }
}

function L() {
  S.clear(), Object.values(_.default.getMutablePrivateChannels()).forEach(e => {
    S.set(e.id, R(e))
  }), (0, p.isInMainTabsExperiment)() && (0, h.isSplitMessagesTab)() && m.default.getAddedToMessages().forEach(e => {
    let t = _.default.getChannel(e);
    null != t && (0, E.isGuildTextChannelType)(t.type) && S.set(t.id, R(t))
  })
}

function x() {
  let e = _.default.getMutablePrivateChannels();
  for (let t in e) S.set(t, R(e[t]))
}
let P = (s = [], i = [], a = [], () => {
  let e = S.values("FAVORITE"),
    t = S.values("DEFAULT");
  return (s !== e || i !== t) && (a = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return a.push(t)
  }), s = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return a.push(t)
  }), i = t), a
});
class O extends c.default.Store {
  initialize() {
    this.waitFor(_.default, T.default, A.default, I.default, m.default), this.syncWith([m.default, I.default], L)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [S.values("FAVORITE"), S.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return S.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: s
      } = t;
      e[n] = s
    }), e
  }
}
O.displayName = "PrivateChannelSortStore";
var M = new O(f.default, {
  CONNECTION_OPEN: L,
  CONNECTION_OPEN_SUPPLEMENTAL: L,
  OVERLAY_INITIALIZE: L,
  CACHE_LOADED: x,
  CACHE_LOADED_LAZY: x,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, E.isPrivate)(e.type) || S.has(e.id)) && S.set(e.id, R(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, E.isPrivate)(t.type) || t.id === N.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    S.set(t.id, R(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return S.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!S.has(t)) return !1;
    let s = _.default.getChannel(t);
    return null != s && S.set(t, R(s, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return S.delete(t)
  },
  LOGOUT: function() {
    S.clear()
  }
})