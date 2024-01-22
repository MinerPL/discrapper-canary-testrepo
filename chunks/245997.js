"use strict";
n.r(t), n.d(t, {
  default: function() {
    return L
  }
}), n("424973"), n("222007"), n("808653");
var i = n("446674"),
  l = n("913144"),
  u = n("320954"),
  s = n("379881"),
  o = n("271938"),
  d = n("42203"),
  a = n("923959"),
  r = n("305961"),
  _ = n("49111");
let f = null,
  c = {},
  g = null;

function h() {
  return {
    _categories: [],
    null: []
  }
}
let p = h();

function E(e, t) {
  e.index = t
}

function m(e) {
  let t = a.default.getChannels(e),
    n = h(),
    i = e => {
      var t;
      let {
        channel: i
      } = e, l = null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null;
      l.push({
        channel: i,
        index: -1
      })
    };
  return t[_.ChannelTypes.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: -1
    }), n[t.id] = []
  }), t[0, a.GUILD_SELECTABLE_CHANNELS_KEY].forEach(i), t[0, a.GUILD_VOCAL_CHANNELS_KEY].forEach(i), (0, u.default)(n._categories, n).forEach(E), c[e] = n, n
}

function N() {
  c = {}, null != f && m(f)
}

function v(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  c[t] = void 0, f === t && m(t)
}

function C(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  c[t] = void 0, f === t && m(t)
}

function S(e) {
  let {
    guildId: t
  } = e;
  c[t] = void 0, t === f && m(t)
}

function A(e, t) {
  if (g = t, null == e || null == e.getGuildId()) return !1;
  let n = e.getGuildId();
  return null != n && (c[n] = void 0, n === f && m(n), !0)
}

function T() {
  m(_.FAVORITES)
}
class O extends i.default.Store {
  initialize() {
    this.waitFor(a.default, r.default, o.default, d.default, s.default), this.syncWith([s.default], T)
  }
  getCategories(e) {
    return null != e ? function(e) {
      let t = c[e];
      return null != t ? t : m(e)
    }(e) : p
  }
}
O.displayName = "GuildCategoryStore";
var L = new O(l.default, {
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (f = null != t ? t : null, null == t || null != c[t]) return !1;
    m(t)
  },
  CONNECTION_OPEN: N,
  OVERLAY_INITIALIZE: N,
  CACHE_LOADED_LAZY: N,
  GUILD_CREATE: v,
  GUILD_UPDATE: v,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    delete c[t]
  },
  CHANNEL_CREATE: C,
  CHANNEL_DELETE: C,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        guild_id: e
      }
      of t) null != e && (c[e] = void 0, n = !0, f === e && m(e));
    return n
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (o.default.getId() !== n.id) return !1;
    c[t] = void 0, t === f && m(t)
  },
  CURRENT_USER_UPDATE: function() {
    if (null == f) return !1;
    m(f)
  },
  GUILD_ROLE_CREATE: S,
  GUILD_ROLE_UPDATE: S,
  GUILD_ROLE_DELETE: S,
  IMPERSONATE_UPDATE: S,
  IMPERSONATE_STOP: S,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null == t && null != g ? A(d.default.getChannel(g), null) : A(d.default.getChannel(t), t)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        channelId: n,
        sessionId: i
      } = t;
      return o.default.getSessionId() !== i ? e : A(d.default.getChannel(n), n) || e
    }, !1)
  }
})