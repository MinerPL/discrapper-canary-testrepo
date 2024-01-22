"use strict";
let i, s, r, a, o, l, u;
n.r(t), n.d(t, {
  findFirstVoiceChannelId: function() {
    return w
  },
  default: function() {
    return B
  }
}), n("222007"), n("808653");
var d = n("917351"),
  c = n.n(d),
  f = n("446674"),
  _ = n("95410"),
  h = n("913144"),
  g = n("21121"),
  m = n("934306"),
  E = n("393414"),
  p = n("233069"),
  v = n("449008"),
  S = n("271938"),
  T = n("42203"),
  I = n("923959"),
  C = n("305961"),
  A = n("42887"),
  y = n("162771"),
  N = n("49111"),
  R = n("724210");
let O = "SelectedChannelStore",
  D = {},
  P = {},
  b = {},
  L = new Set;

function M() {
  !__OVERLAY__ && _.default.set(O, {
    selectedChannelId: r,
    selectedVoiceChannelId: o,
    lastChannelFollowingDestination: a,
    lastConnectedTime: l,
    selectedChannelIds: D,
    mostRecentSelectedTextChannelIds: b,
    knownThreadIds: c(D).values().concat(c.values(b)).filter(v.isNotNullish).uniq().filter(e => {
      let t = T.default.getBasicChannel(e);
      return L.has(e) || null != t && p.THREAD_CHANNEL_TYPES.has(t.type)
    }).value()
  })
}

function U(e) {
  if (null != e) {
    let t = I.default.getDefaultChannel(e);
    if (null != t) return t.id
  }
}

function k(e, t) {
  if (null == e || null == t || b[e] === t) return !1;
  let n = T.default.getChannel(t),
    i = null != n && (0, p.isGuildTextChannelType)(n.type),
    s = (null == n ? void 0 : n.getGuildId()) === e;
  return !!i && !!s && (b[e] = t, !0)
}

function w(e) {
  let t = T.default.getMutableBasicGuildChannelsForGuild(e),
    n = c.find(t, e => e.type === N.ChannelTypes.GUILD_VOICE);
  return null == n ? void 0 : n.id
}

function V() {
  let e = !1,
    t = C.default.getGuilds();
  return c.each(D, (t, n) => {
    (null == t || !T.default.hasChannel(t) && t !== r && !L.has(t) && !(0, R.isGuildHomeChannel)(t)) && (delete D[n], delete P[n], e = !0)
  }), c.each(b, (t, n) => {
    (null == t || !T.default.hasChannel(t) && !L.has(t)) && (delete b[n], e = !0)
  }), c.each(t, e => {
    let t = D[e.id];
    null == b[e.id] && k(e.id, t)
  }), null != l && Date.now() - l >= 3e5 && (o = null, e = !0), e
}

function G(e, t) {
  if (L.delete(e), null == t) {
    let n = y.default.getGuildId();
    D[String(n)] === e && (t = n)
  }
  let n = null != C.default.getGuild(t) ? t : null,
    i = !1;
  o === e && (o = null, i = !0), !(0, g.isInMainTabsExperiment)() && (D[String(n)] === e && (D[String(n)] = U(String(n)), y.default.getGuildId() === n && (0, E.replaceWith)(N.Routes.CHANNEL(t, D[String(n)])), i = !0), null != n && b[n] === e && (delete b[n], i = !0)), i && M()
}

function F(e) {
  let {
    channel: {
      id: t,
      guild_id: n
    }
  } = e;
  G(t, n)
}
class x extends f.default.Store {
  initialize() {
    if (!__OVERLAY__) {
      var e, t;
      let n = null !== (e = _.default.get(O)) && void 0 !== e ? e : {
        selectedChannelId: r,
        selectedVoiceChannelId: o,
        lastChannelFollowingDestination: a,
        lastConnectedTime: l,
        selectedChannelIds: D,
        mostRecentSelectedTextChannelIds: b
      };
      null != n.knownThreadIds && (L = new Set(n.knownThreadIds)), o = n.selectedVoiceChannelId, a = n.lastChannelFollowingDestination, l = n.lastConnectedTime, b = null !== (t = n.mostRecentSelectedTextChannelIds) && void 0 !== t ? t : {}, null != n.selectedChannelIds && (D = {
        ...n.selectedChannelIds,
        null: null
      })
    }
    this.mustEmitChanges(e => "CONNECTION_OPEN" !== e.type && "VOICE_STATE_UPDATES" !== e.type), this.waitFor(C.default, T.default, y.default, I.default, A.default)
  }
  getChannelId(e) {
    var t, n;
    let i = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1];
    return e = String(e === N.ME ? null : null !== (t = null != e ? e : y.default.getGuildId()) && void 0 !== t ? t : null), i ? null !== (n = D[e]) && void 0 !== n ? n : U(e) : D[e]
  }
  getVoiceChannelId() {
    return A.default.isSupported() ? o : null
  }
  getMostRecentSelectedTextChannelId(e) {
    var t;
    return null == e ? null : null !== (t = b[e]) && void 0 !== t ? t : null
  }
  getCurrentlySelectedChannelId(e) {
    return null != e ? D[e] : r
  }
  getLastSelectedChannelId(e) {
    return null != e ? P[e] : s
  }
  getLastSelectedChannels(e) {
    return P[e]
  }
  getLastChannelFollowingDestination() {
    return a
  }
}
x.displayName = "SelectedChannelStore";
var B = new x(h.default, {
  CONNECTION_OPEN: function(e) {
    i = e.sessionId, null != o && null == T.default.getChannel(o) && (o = null);
    let t = V();
    t && M()
  },
  OVERLAY_INITIALIZE: function(e) {
    i = e.sessionId, o = e.selectedVoiceChannelId, D = {}, P = {}, r = e.selectedChannelId, D[e.selectedGuildId] = e.selectedChannelId, k(e.selectedGuildId, r), V()
  },
  CONNECTION_CLOSED: function() {
    i = null
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (void 0 === t) return !1;
    null == n && (!(0, g.isInMainTabsExperiment)() || (0, m.shouldHandleNewPanelsRoute)(t)) && (n = U(t)), null != r && n !== r && (s = r), r = n, k(t, n), D[String(t)] !== n && (P[String(t)] = D[String(t)], D[String(t)] = r), M()
  },
  CHANNEL_CREATE: function(e) {
    let {
      channel: t
    } = e;
    switch (t.type) {
      case N.ChannelTypes.GUILD_ANNOUNCEMENT:
      case N.ChannelTypes.GUILD_TEXT:
        let n = t.guild_id;
        if (null != n && null == b[n] && (b[n] = t.id), null != n && null == D[n]) return D[n] = U(n), !0
    }
    return !1
  },
  CHANNEL_DELETE: F,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    for (let e of t) e.isScheduledForDeletion() && G(e.id, e.guild_id)
  },
  THREAD_DELETE: F,
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    if (null == D[t.id]) {
      let e = U(t.id);
      D[t.id] = e, k(t.id, e), M()
    }
  },
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t,
        unavailable: n
      }
    } = e;
    if (o === D[t] && (o = null), n) return !1;
    delete b[t], delete D[t], M()
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    if (null == t) {
      let e = T.default.getChannel(o),
        t = null == e ? void 0 : e.guild_id;
      null != t && t !== y.default.getGuildId() && D[t] === o && (D[t] = U(t))
    }
    o = t, M()
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      var n, s, r;
      if (t.sessionId === i) {
        clearInterval(u);
        let e = null === (n = T.default.getChannel(o)) || void 0 === n ? void 0 : n.getGuildId();
        t.guildId !== e && null == t.channelId || (o = t.channelId), l = Date.now(), null != o && (u = setInterval(() => {
          l = Date.now(), M()
        }, 6e4)), M()
      } else {
        if (t.userId !== S.default.getId()) return e;
        clearInterval(u), u = void 0, l = 0;
        let n = null === (s = T.default.getChannel(o)) || void 0 === s ? void 0 : s.getGuildId(),
          i = null === (r = T.default.getChannel(t.channelId)) || void 0 === r ? void 0 : r.getGuildId();
        null != n && i === n && (o = null), M()
      }
      return !0
    }, !1)
  },
  CHANNEL_FOLLOWER_CREATED: function(e) {
    let {
      channelId: t,
      guildId: n
    } = e;
    (null == a || t !== a.channelId) && (a = {
      channelId: t,
      guildId: n
    }, M())
  },
  LOGOUT: function() {
    D = {}, r = null, s = void 0, b = {}, a = {}, o = null, _.default.remove(O)
  }
})