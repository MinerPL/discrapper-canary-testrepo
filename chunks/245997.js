"use strict";
n.r(e), n.d(e, {
  default: function() {
    return v
  }
}), n("424973"), n("222007"), n("808653");
var l = n("446674"),
  u = n("913144"),
  i = n("320954"),
  r = n("379881"),
  d = n("271938"),
  a = n("42203"),
  o = n("923959"),
  f = n("305961"),
  c = n("49111");
let E = null,
  _ = {},
  A = null;

function C() {
  return {
    _categories: [],
    null: []
  }
}
let s = C();

function h(t, e) {
  t.index = e
}

function L(t) {
  let e = o.default.getChannels(t),
    n = C(),
    l = t => {
      var e;
      let {
        channel: l
      } = t, u = null !== (e = n[null != l.parent_id ? l.parent_id : "null"]) && void 0 !== e ? e : n.null;
      u.push({
        channel: l,
        index: -1
      })
    };
  return e[c.ChannelTypes.GUILD_CATEGORY].forEach(t => {
    let {
      channel: e
    } = t;
    n._categories.push({
      channel: e,
      index: -1
    }), n[e.id] = []
  }), e[0, o.GUILD_SELECTABLE_CHANNELS_KEY].forEach(l), e[0, o.GUILD_VOCAL_CHANNELS_KEY].forEach(l), (0, i.default)(n._categories, n).forEach(h), _[t] = n, n
}

function T() {
  _ = {}, null != E && L(E)
}

function N(t) {
  let {
    guild: {
      id: e
    }
  } = t;
  _[e] = void 0, E === e && L(e)
}

function g(t) {
  let {
    channel: {
      guild_id: e
    }
  } = t;
  if (null == e) return !1;
  _[e] = void 0, E === e && L(e)
}

function p(t) {
  let {
    guildId: e
  } = t;
  _[e] = void 0, e === E && L(e)
}

function U(t, e) {
  if (A = e, null == t || null == t.getGuildId()) return !1;
  let n = t.getGuildId();
  return null != n && (_[n] = void 0, n === E && L(n), !0)
}

function I() {
  L(c.FAVORITES)
}
class D extends l.default.Store {
  initialize() {
    this.waitFor(o.default, f.default, d.default, a.default, r.default), this.syncWith([r.default], I)
  }
  getCategories(t) {
    return null != t ? function(t) {
      let e = _[t];
      return null != e ? e : L(t)
    }(t) : s
  }
}
D.displayName = "GuildCategoryStore";
var v = new D(u.default, {
  CHANNEL_SELECT: function(t) {
    let {
      guildId: e
    } = t;
    if (E = null != e ? e : null, null == e || null != _[e]) return !1;
    L(e)
  },
  CONNECTION_OPEN: T,
  OVERLAY_INITIALIZE: T,
  CACHE_LOADED_LAZY: T,
  GUILD_CREATE: N,
  GUILD_UPDATE: N,
  GUILD_DELETE: function(t) {
    let {
      guild: {
        id: e
      }
    } = t;
    delete _[e]
  },
  CHANNEL_CREATE: g,
  CHANNEL_DELETE: g,
  CHANNEL_UPDATES: function(t) {
    let {
      channels: e
    } = t, n = !1;
    for (let {
        guild_id: t
      }
      of e) null != t && (_[t] = void 0, n = !0, E === t && L(t));
    return n
  },
  GUILD_MEMBER_UPDATE: function(t) {
    let {
      guildId: e,
      user: n
    } = t;
    if (d.default.getId() !== n.id) return !1;
    _[e] = void 0, e === E && L(e)
  },
  CURRENT_USER_UPDATE: function() {
    if (null == E) return !1;
    L(E)
  },
  GUILD_ROLE_CREATE: p,
  GUILD_ROLE_UPDATE: p,
  GUILD_ROLE_DELETE: p,
  IMPERSONATE_UPDATE: p,
  IMPERSONATE_STOP: p,
  VOICE_CHANNEL_SELECT: function(t) {
    let {
      channelId: e
    } = t;
    return null == e && null != A ? U(a.default.getChannel(A), null) : U(a.default.getChannel(e), e)
  },
  VOICE_STATE_UPDATES: function(t) {
    let {
      voiceStates: e
    } = t;
    return e.reduce((t, e) => {
      let {
        channelId: n,
        sessionId: l
      } = e;
      return d.default.getSessionId() !== l ? t : U(a.default.getChannel(n), n) || t
    }, !1)
  }
})