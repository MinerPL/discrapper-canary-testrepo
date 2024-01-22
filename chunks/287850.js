"use strict";
let i, s, r;
n.r(t), n.d(t, {
  default: function() {
    return M
  }
}), n("222007"), n("424973");
var l, a, u = n("866227"),
  o = n.n(u),
  c = n("446674"),
  d = n("407846"),
  f = n("913144"),
  h = n("21121"),
  p = n("934306"),
  I = n("288518"),
  v = n("486503"),
  E = n("233069"),
  C = n("42203"),
  _ = n("305961"),
  T = n("660478"),
  m = n("282109"),
  S = n("697218"),
  A = n("299039"),
  g = n("724210");
(a = l || (l = {})).DEFAULT = "DEFAULT", a.FAVORITE = "FAVORITE";
let R = new d.default(e => {
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

function N(e) {
  let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
    var t, n;
    let i = null !== (n = null !== (t = T.default.lastMessageId(e.id)) && void 0 !== t ? t : e.lastMessageId) && void 0 !== n ? n : e.id,
      s = e.isMessageRequestTimestamp;
    if (null != s) {
      let e = o(s).valueOf(),
        t = A.default.fromTimestamp(e);
      return A.default.compare(i, t) > 0 ? i : t
    }
    return i
  }(e);
  return {
    channelId: e.id,
    lastMessageId: t,
    isFavorite: m.default.isMessagesFavorite(e.id) && (0, h.isInMainTabsExperiment)(),
    isRequest: I.default.isMessageRequest(e.id) || v.default.isSpam(e.id)
  }
}

function x() {
  R.clear(), Object.values(C.default.getMutablePrivateChannels()).forEach(e => {
    R.set(e.id, N(e))
  }), (0, h.isInMainTabsExperiment)() && (0, p.isSplitMessagesTab)() && m.default.getAddedToMessages().forEach(e => {
    let t = C.default.getChannel(e);
    null != t && (0, E.isGuildTextChannelType)(t.type) && R.set(t.id, N(t))
  })
}

function L() {
  let e = C.default.getMutablePrivateChannels();
  for (let t in e) R.set(t, N(e[t]))
}
let P = (i = [], s = [], r = [], () => {
  let e = R.values("FAVORITE"),
    t = R.values("DEFAULT");
  return (i !== e || s !== t) && (r = [], e.forEach(e => {
    let {
      channelId: t
    } = e;
    return r.push(t)
  }), i = e, t.forEach(e => {
    let {
      channelId: t
    } = e;
    return r.push(t)
  }), s = t), r
});
class y extends c.default.Store {
  initialize() {
    this.waitFor(C.default, _.default, S.default, I.default, m.default), this.syncWith([m.default, I.default], x)
  }
  getPrivateChannelIds() {
    return P()
  }
  getSortedChannels() {
    return [R.values("FAVORITE"), R.values("DEFAULT")]
  }
  serializeForOverlay() {
    let e = {};
    return R.values().forEach(t => {
      let {
        channelId: n,
        lastMessageId: i
      } = t;
      e[n] = i
    }), e
  }
}
y.displayName = "PrivateChannelSortStore";
var M = new y(f.default, {
  CONNECTION_OPEN: x,
  CONNECTION_OPEN_SUPPLEMENTAL: x,
  OVERLAY_INITIALIZE: x,
  CACHE_LOADED: L,
  CACHE_LOADED_LAZY: L,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    t.forEach(e => {
      ((0, E.isPrivate)(e.type) || R.has(e.id)) && R.set(e.id, N(e))
    })
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    if (!(0, E.isPrivate)(t.type) || t.id === g.FAKE_PLACEHOLDER_PRIVATE_CHANNEL_ID) return !1;
    R.set(t.id, N(t))
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return R.delete(t.id)
  },
  MESSAGE_CREATE: function(e) {
    let {
      channelId: t,
      message: n
    } = e;
    if (!R.has(t)) return !1;
    let i = C.default.getChannel(t);
    return null != i && R.set(t, N(i, n.id))
  },
  GUILD_CREATE: function(e) {
    let t = e.guild.id;
    return R.delete(t)
  }
})