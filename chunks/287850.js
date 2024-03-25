"use strict";
let n, i, s;
r.r(t), r.d(t, {
  default: function() {
    return O
  }
}), r("222007"), r("424973");
var l, a, u = r("866227"),
  o = r.n(u),
  d = r("446674"),
  c = r("407846"),
  f = r("913144"),
  p = r("21121"),
  E = r("934306"),
  _ = r("288518"),
  h = r("486503"),
  v = r("233069"),
  m = r("42203"),
  g = r("305961"),
  y = r("660478"),
  T = r("282109"),
  A = r("697218"),
  b = r("299039"),
  I = r("724210");
(a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
let C = new c.SecondaryIndexMap(e => {
  let {
    isRequest: t,
    isFavorite: r
  } = e;
  return t ? [] : [r ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function S(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, r;
    let n = null !== (r = null !== (t = y.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== r ? r : e.id,
      i = e.isMessageRequestTimestamp;
    if (null != i) {
      let e = o(i).valueOf(),
        t = b.default.fromTimestamp(e);
      return b.default.compare(n, t) > 0 ? n : t
    }
    return n
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: T.default.isMessagesFavorite(e.id) && (0, p.isInMainTabsExperiment)(),
    isRequest: _.default.isMessageRequest(e.id) || h.default.isSpam(e.id)
  }
}

function N() {
  C.clear(), Object.values(m.default.getMutablePrivateChannels()).forEach(e => {
    C.set(e.id, S(e))
  }), (0, p.isInMainTabsExperiment)() && (0, E.isSplitMessagesTab)() && T.default.getAddedToMessages().forEach(e => {
    let t = m.default.getChannel(e);
    null != t && (0, v.isGuildTextChannelType)(t.type) && C.set(t.id, S(t))
  })
}

function P() {
  let e = m.default.getMutablePrivateChannels();
  for (let t in e) C.set(t, S(e[t]))
}
let R = (n = [], i = [], s = [], () => {
  let e = C.values("FAVORITE"),
    t = C.values("DEFAULT");
  return (n !== e || i !== t) && (s = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), n = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return s.push(t)
  }), i = t), s
});
class x extends d.default.Store {
  initialize() {
    this.waitFor(m.default, g.default, A.default, _.default, T.default), this.syncWith([T.default, _.default], N)
  }
  getPrivateChannelIds() {
    return R()
  }
  getSortedChannels() {
    return [C.values("FAVORITE"), C.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return C.values().forEach(t => {
      let {
        channelId: r,
        lastMessageId: n
      } = t;
      e[r] = n
    }), e
  }
}
x.displayName = "PrivateChannelSortStore";
var O = new x(f.default, {
  CONNECTION_OPEN: N,
  CONNECTION_OPEN_SUPPLEMENTAL: N,
  OVERLAY_INITIALIZE: N,
  CACHE_LOADED: P,
  CACHE_LOADED_LAZY: P,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, v.isPrivate)(e.type) || C.has(e.id)) && C.set(e.id, S(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, v.isPrivate)(t.type) || t.id === I.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    C.set(t.id, S(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return C.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: r
    } = e;
    if (!C.has(t)) return !1;
    let n = m.default.getChannel(t);
    return null != n && C.set(t, S(n, r.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return C.delete(t)
  },
  LOGOUT: function() {
    C.clear()
  }
})