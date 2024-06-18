"use strict";
n.d(t, {
  PH: function() {
    return p
  },
  sQ: function() {
    return C
  }
}), n(47120), n(724458);
var i, r = n(392711),
  s = n.n(r),
  o = n(442837),
  a = n(759174),
  l = n(570140),
  u = n(598077),
  _ = n(314897),
  d = n(592125),
  c = n(271383),
  E = n(594174),
  I = n(979651),
  T = n(709054),
  h = n(51144),
  S = n(981631);

function f(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let N = Object.freeze([]),
  A = {};

function m(e) {
  let t = A[e];
  return null == t && (t = new g(e), A[e] = t), t
}

function O(e, t) {
  return c.ZP.getMember(e, t.id)
}

function R(e, t, n) {
  var i;
  let r = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : h.ZP.getName(n);
  return {
    member: t,
    comparator: C(e, r)
  }
}

function C(e, t) {
  return "".concat(e.selfStream ? "\0" : "\x01").concat(t.toLowerCase(), "\0").concat(e.userId)
}

function p(e, t, n) {
  var i;
  let r = E.default.getUser(n),
    s = null == r;
  null == r && (r = new u.Z({
    id: n,
    username: "...",
    discriminator: n.slice(-5, -1)
  }));
  let {
    member: o,
    comparator: a
  } = R(e, O(t, i = r), i), l = {
    voiceState: e,
    user: r,
    member: o,
    comparator: a,
    nick: null == o ? void 0 : o.nick
  };
  return s && (l._isPlaceholder = !0), l
}
class g {
  updateVoiceState(e) {
    if (null != this._pending) return this._pending.add(e), !1;
    let t = I.Z.getVoiceState(this.guildId, e),
      n = this._voiceStates.get(e),
      i = E.default.getUser(e);
    if (null != t && null != i) {
      if (null == n) return this._voiceStates.set(e, p(t, this.guildId, e)), !0;
      if (n.voiceState !== t) {
        var r;
        let s = O(this.guildId, i),
          o = null !== (r = null == s ? void 0 : s.nick) && void 0 !== r ? r : h.ZP.getName(i);
        return this._voiceStates.set(e, {
          ...n,
          member: s,
          comparator: C(t, o),
          nick: o,
          voiceState: t
        }), !0
      }
    } else if (null != n) return this._voiceStates.delete(e), !0;
    return !1
  }
  updateMember(e) {
    if (null != this._pending) return this._pending.add(e), !1;
    let t = this._voiceStates.get(e),
      n = E.default.getUser(e);
    if (null != t && null != n) {
      var i, r;
      let s = O(this.guildId, n);
      if ((null == s ? void 0 : s.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == s ? void 0 : s.avatar) !== (null === (r = t.member) || void 0 === r ? void 0 : r.avatar)) {
        let {
          comparator: i
        } = R(t.voiceState, s, n);
        return this._voiceStates.set(e, {
          ...t,
          member: s,
          comparator: i,
          nick: null == s ? void 0 : s.nick
        }), !0
      }
    }
    return !1
  }
  updateUsers() {
    return null == this._pending && this._voiceStates.values().reduce((e, t) => {
      let n = E.default.getUser(t.user.id);
      return null != n && t.user !== n ? (this._voiceStates.set(n.id, p(t.voiceState, this.guildId, n.id)), !0) : e
    }, !1)
  }
  getUserIds() {
    return this.processPending(), this._voiceStates.keys()
  }
  getVoiceStates() {
    return this.processPending(), this._voiceStates.indexes()
  }
  getVoiceStatesForChannel(e) {
    this.processPending();
    let t = this._voiceStates.values(e);
    return 0 === t.length ? N : t
  }
  countVoiceStatesForChannel(e) {
    return this.processPending(), this._voiceStates.size(e)
  }
  getVersion() {
    return this.processPending(), this._voiceStates.version
  }
  processPending() {
    if (null != this._pending) {
      let e = this._pending;
      this._pending = void 0, e.forEach(e => this.updateVoiceState(e))
    }
  }
  constructor(e) {
    f(this, "guildId", void 0), f(this, "_pending", new Set), f(this, "_voiceStates", new a.h(e => {
      let {
        voiceState: {
          channelId: t
        }
      } = e;
      return null != t ? [t] : []
    }, e => {
      let {
        comparator: t
      } = e;
      return t
    })), this.guildId = e
  }
}

function L() {
  return s().reduce(A, (e, t) => t.updateUsers() || e, !1)
}

function v() {
  A = {};
  let e = I.Z.getAllVoiceStates();
  T.default.keys(e).forEach(t => {
    Object.keys(e[t]).forEach(e => {
      m(null != t ? t : S.ME).updateVoiceState(e)
    })
  })
}
class D extends(i = o.ZP.Store) {
  initialize() {
    v(), this.waitFor(_.default, E.default, c.ZP, I.Z), this.syncWith([E.default], L)
  }
  getVoiceStates(e) {
    return m(null != e ? e : S.ME).getVoiceStates()
  }
  getAllVoiceStates() {
    return A
  }
  getVoiceStatesForChannel(e) {
    let t = e.getGuildId(),
      n = e.id;
    return m(null != t ? t : S.ME).getVoiceStatesForChannel(n)
  }
  getVoiceStatesForChannelAlt(e, t) {
    return m(null != t ? t : S.ME).getVoiceStatesForChannel(e)
  }
  countVoiceStatesForChannel(e) {
    let t = d.Z.getChannel(e);
    if (null == t) return 0;
    let n = t.getGuildId();
    return m(null != n ? n : S.ME).countVoiceStatesForChannel(e)
  }
  getVoiceStateVersion(e) {
    return m(null != e ? e : S.ME).getVersion()
  }
}
f(D, "displayName", "SortedVoiceStateStore"), t.ZP = new D(l.Z, {
  CONNECTION_OPEN: function() {
    A = {}
  },
  OVERLAY_INITIALIZE: function() {
    v()
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e, n = _.default.getId();
    return null != n && m(null != t ? t : S.ME).updateVoiceState(n)
  },
  VOICE_STATE_UPDATES: function(e) {
    let {
      voiceStates: t
    } = e;
    return t.reduce((e, t) => {
      let {
        guildId: n,
        userId: i
      } = t;
      return m(null != n ? n : S.ME).updateVoiceState(i) || e
    }, !1)
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return m(t).updateMember(n.id)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    delete A[t.id]
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete A[t.id]
  },
  PASSIVE_UPDATE_V2: function(e) {
    var t, n;
    let i = !1,
      r = new Set(null === (t = A[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
      s = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map(e => e.userId)),
      o = new Set(e.removedVoiceStateUsers);
    for (let t of new Set([...r, ...s])) i = m(e.guildId).updateVoiceState(t) || i;
    for (let t of r) !o.has(t) && (i = m(e.guildId).updateMember(t) || i);
    return i
  }
})