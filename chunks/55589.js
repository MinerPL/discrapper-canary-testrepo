"use strict";
let n, u, i;
l.r(t), l("47120"), l("653041");
var r, a, s, d, o, E, f = l("913527"),
  c = l.n(f),
  T = l("442837"),
  I = l("759174"),
  _ = l("570140"),
  A = l("57132"),
  S = l("781157"),
  p = l("355298"),
  O = l("333984"),
  N = l("131704"),
  h = l("592125"),
  C = l("430824"),
  m = l("306680"),
  v = l("9156"),
  L = l("594174"),
  g = l("709054"),
  D = l("176505");
(s = r || (r = {})).DEFAULT = "DEFAULT", s.FAVORITE = "FAVORITE";
let P = new I.SecondaryIndexMap(e => {
  let {
    isRequest: t,
    isFavorite: l
  } = e;
  return t ? [] : [l ? "FAVORITE" : "DEFAULT"]
}, e => {
  let {
    lastMessageId: t
  } = e;
  return -t
});

function y(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, l;
    let n = null !== (l = null !== (t = m.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== l ? l : e.id,
      u = e.isMessageRequestTimestamp;
    if (null != u) {
      let e = c()(u).valueOf(),
        t = g.default.fromTimestamp(e);
      return g.default.compare(n, t) > 0 ? n : t
    }
    return n
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: v.default.isMessagesFavorite(e.id) && (0, A.isInMainTabsExperiment)(),
    isRequest: p.default.isMessageRequest(e.id) || O.default.isSpam(e.id)
  }
}

function F() {
  P.clear(), Object.values(h.default.getMutablePrivateChannels()).forEach(e => {
    P.set(e.id, y(e))
  }), (0, A.isInMainTabsExperiment)() && (0, S.isSplitMessagesTab)() && v.default.getAddedToMessages().forEach(e => {
    let t = h.default.getChannel(e);
    null != t && (0, N.isGuildTextChannelType)(t.type) && P.set(t.id, y(t))
  })
}

function R() {
  let e = h.default.getMutablePrivateChannels();
  for (let t in e) P.set(t, y(e[t]))
}
let M = (n = [], u = [], i = [], () => {
  let e = P.values("FAVORITE"),
    t = P.values("DEFAULT");
  return (n !== e || u !== t) && (i = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), n = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return i.push(t)
  }), u = t), i
});
class b extends(a = T.default.Store) {
  initialize() {
    this.waitFor(h.default, C.default, L.default, p.default, v.default), this.syncWith([v.default, p.default], F)
  }
  getPrivateChannelIds() {
    return M()
  }
  getSortedChannels() {
    return [P.values("FAVORITE"), P.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return P.values().forEach(t => {
      let {
        channelId: l,
        lastMessageId: n
      } = t;
      e[l] = n
    }), e
  }
}
E = "PrivateChannelSortStore", (o = "displayName") in(d = b) ? Object.defineProperty(d, o, {
  value: E,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : d[o] = E, t.default = new b(_.default, {
  CONNECTION_OPEN: F,
  CONNECTION_OPEN_SUPPLEMENTAL: F,
  OVERLAY_INITIALIZE: F,
  CACHE_LOADED: R,
  CACHE_LOADED_LAZY: R,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, N.isPrivate)(e.type) || P.has(e.id)) && P.set(e.id, y(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, N.isPrivate)(t.type) || t.id === D.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    P.set(t.id, y(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return P.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: l
    } = e;
    if (!P.has(t)) return !1;
    let n = h.default.getChannel(t);
    return null != n && P.set(t, y(n, l.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return P.delete(t)
  },
  LOGOUT: function() {
    P.clear()
  }
})