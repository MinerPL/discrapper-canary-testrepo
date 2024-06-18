"use strict";
n(653041), n(47120), n(724458);
var i, r, s, o, a = n(442837),
  l = n(570140),
  u = n(740504),
  _ = n(853856),
  d = n(314897),
  c = n(592125),
  E = n(984933),
  I = n(430824),
  T = n(981631);
let h = null,
  S = {},
  f = null;

function N() {
  return {
    _categories: [],
    null: []
  }
}
let A = N();

function m(e, t) {
  e.index = t
}

function O(e) {
  let t = E.ZP.getChannels(e),
    n = N(),
    i = e => {
      var t;
      let {
        channel: i
      } = e;
      (null !== (t = n[null != i.parent_id ? i.parent_id : "null"]) && void 0 !== t ? t : n.null).push({
        channel: i,
        index: -1
      })
    };
  return t[T.d4z.GUILD_CATEGORY].forEach(e => {
    let {
      channel: t
    } = e;
    n._categories.push({
      channel: t,
      index: -1
    }), n[t.id] = []
  }), t[E.sH].forEach(i), t[E.Zb].forEach(i), (0, u.Z)(n._categories, n).forEach(m), S[e] = n, n
}

function R() {
  S = {}, null != h && O(h)
}

function C(e) {
  let {
    guild: {
      id: t
    }
  } = e;
  S[t] = void 0, h === t && O(t)
}

function p(e) {
  let {
    channel: {
      guild_id: t
    }
  } = e;
  if (null == t) return !1;
  S[t] = void 0, h === t && O(t)
}

function g(e) {
  let {
    guildId: t
  } = e;
  S[t] = void 0, t === h && O(t)
}

function L(e, t) {
  if (f = t, null == e || null == e.getGuildId()) return !1;
  let n = e.getGuildId();
  return null != n && (S[n] = void 0, n === h && O(n), !0)
}

function v() {
  O(T.I_8)
}
class D extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(E.ZP, I.Z, d.default, c.Z, _.Z), this.syncWith([_.Z], v)
  }
  getCategories(e) {
    return null != e ? function(e) {
      let t = S[e];
      return null != t ? t : O(e)
    }(e) : A
  }
}
o = "GuildCategoryStore", (s = "displayName") in(r = D) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new D(l.Z, {
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e;
    if (h = null != t ? t : null, null == t || null != S[t]) return !1;
    O(t)
  },
  CONNECTION_OPEN: R,
  OVERLAY_INITIALIZE: R,
  CACHE_LOADED_LAZY: R,
  GUILD_CREATE: C,
  GUILD_UPDATE: C,
  GUILD_DELETE: function(e) {
    let {
      guild: {
        id: t
      }
    } = e;
    delete S[t]
  },
  CHANNEL_CREATE: p,
  CHANNEL_DELETE: p,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e, n = !1;
    for (let {
        guild_id: e
      }
      of t) null != e && (S[e] = void 0, n = !0, h === e && O(e));
    return n
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    if (d.default.getId() !== n.id) return !1;
    S[t] = void 0, t === h && O(t)
  },
  CURRENT_USER_UPDATE: function() {
    if (null == h) return !1;
    O(h)
  },
  GUILD_ROLE_CREATE: g,
  GUILD_ROLE_UPDATE: g,
  GUILD_ROLE_DELETE: g,
  IMPERSONATE_UPDATE: g,
  IMPERSONATE_STOP: g,
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return null == t && null != f ? L(c.Z.getChannel(f), null) : L(c.Z.getChannel(t), t)
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
      return d.default.getSessionId() !== i ? e : L(c.Z.getChannel(n), n) || e
    }, !1)
  }
})