"use strict";
n.r(t), n.d(t, {
  getComparator: function() {
    return T
  },
  default: function() {
    return R
  }
}), n("222007"), n("808653");
var i = n("917351"),
  s = n.n(i),
  r = n("446674"),
  a = n("407846"),
  o = n("913144"),
  l = n("766274"),
  u = n("271938"),
  d = n("42203"),
  c = n("26989"),
  f = n("697218"),
  _ = n("800762"),
  h = n("158998"),
  g = n("49111");
let m = Object.freeze([]),
  E = {};

function p(e) {
  let t = E[e];
  return null == t && (t = new C(e), E[e] = t), t
}

function v(e, t) {
  return c.default.getMember(e, t.id)
}

function S(e, t, n) {
  var i;
  let s = null !== (i = null == t ? void 0 : t.nick) && void 0 !== i ? i : h.default.getName(n);
  return {
    member: t,
    comparator: T(e, s)
  }
}

function T(e, t) {
  return "".concat(e.selfStream ? "\x00" : "\x01").concat(t.toLowerCase(), "\x00").concat(e.userId)
}

function I(e, t, n) {
  let i = f.default.getUser(n),
    s = null == i;
  null == i && (i = new l.default({
    id: n,
    username: "...",
    discriminator: n.slice(-5, -1)
  }));
  let {
    member: r,
    comparator: a
  } = function(e, t, n) {
    let i = v(e, t);
    return S(n, i, t)
  }(t, i, e), o = {
    voiceState: e,
    user: i,
    member: r,
    comparator: a,
    nick: null == r ? void 0 : r.nick
  };
  return s && (o._isPlaceholder = !0), o
}
class C {
  updateVoiceState(e) {
    if (null != this._pending) return this._pending.add(e), !1;
    let t = _.default.getVoiceState(this.guildId, e),
      n = this._voiceStates.get(e),
      i = f.default.getUser(e);
    if (null != t && null != i) {
      if (null == n) return this._voiceStates.set(e, I(t, this.guildId, e)), !0;
      if (n.voiceState !== t) {
        var s;
        let r = v(this.guildId, i),
          a = null !== (s = null == r ? void 0 : r.nick) && void 0 !== s ? s : h.default.getName(i);
        return this._voiceStates.set(e, {
          ...n,
          member: r,
          comparator: T(t, a),
          nick: a,
          voiceState: t
        }), !0
      }
    } else if (null != n) return this._voiceStates.delete(e), !0;
    return !1
  }
  updateMember(e) {
    if (null != this._pending) return this._pending.add(e), !1;
    let t = this._voiceStates.get(e),
      n = f.default.getUser(e);
    if (null != t && null != n) {
      var i, s;
      let r = v(this.guildId, n);
      if ((null == r ? void 0 : r.nick) !== (null === (i = t.member) || void 0 === i ? void 0 : i.nick) || (null == r ? void 0 : r.avatar) !== (null === (s = t.member) || void 0 === s ? void 0 : s.avatar)) {
        let {
          comparator: i
        } = S(t.voiceState, r, n);
        return this._voiceStates.set(e, {
          ...t,
          member: r,
          comparator: i,
          nick: null == r ? void 0 : r.nick
        }), !0
      }
    }
    return !1
  }
  updateUsers() {
    return null == this._pending && this._voiceStates.values().reduce((e, t) => {
      let n = f.default.getUser(t.user.id);
      return null != n && t.user !== n ? (this._voiceStates.set(n.id, I(t.voiceState, this.guildId, n.id)), !0) : e
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
    return 0 === t.length ? m : t
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
    this._pending = new Set, this._voiceStates = new a.default(e => {
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
    }), this.guildId = e
  }
}

function A() {
  return s.reduce(E, (e, t) => t.updateUsers() || e, !1)
}

function y() {
  E = {};
  let e = _.default.getAllVoiceStates();
  Object.keys(e).forEach(t => {
    Object.keys(e[t]).forEach(e => {
      p(null != t ? t : g.ME).updateVoiceState(e)
    })
  })
}
class N extends r.default.Store {
  initialize() {
    y(), this.waitFor(u.default, f.default, c.default, _.default), this.syncWith([f.default], A)
  }
  getVoiceStates(e) {
    return p(null != e ? e : g.ME).getVoiceStates()
  }
  getAllVoiceStates() {
    return E
  }
  getVoiceStatesForChannel(e) {
    let t = e.getGuildId(),
      n = e.id;
    return p(null != t ? t : g.ME).getVoiceStatesForChannel(n)
  }
  getVoiceStatesForChannelAlt(e, t) {
    return p(null != t ? t : g.ME).getVoiceStatesForChannel(e)
  }
  countVoiceStatesForChannel(e) {
    let t = d.default.getChannel(e);
    if (null == t) return 0;
    let n = t.getGuildId();
    return p(null != n ? n : g.ME).countVoiceStatesForChannel(e)
  }
  getVoiceStateVersion(e) {
    return p(null != e ? e : g.ME).getVersion()
  }
}
N.displayName = "SortedVoiceStateStore";
var R = new N(o.default, {
  CONNECTION_OPEN: function() {
    E = {}
  },
  OVERLAY_INITIALIZE: function() {
    y()
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      guildId: t
    } = e, n = u.default.getId();
    return null != n && p(null != t ? t : g.ME).updateVoiceState(n)
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
      return p(null != n ? n : g.ME).updateVoiceState(i) || e
    }, !1)
  },
  GUILD_MEMBER_UPDATE: function(e) {
    let {
      guildId: t,
      user: n
    } = e;
    return p(t).updateMember(n.id)
  },
  GUILD_CREATE: function(e) {
    let {
      guild: t
    } = e;
    delete E[t.id]
  },
  GUILD_DELETE: function(e) {
    let {
      guild: t
    } = e;
    delete E[t.id]
  },
  PASSIVE_UPDATE_V1: function(e) {
    var t, n;
    let i = !1,
      s = new Set(null === (t = E[e.guildId]) || void 0 === t ? void 0 : t.getUserIds()),
      r = new Set(null === (n = e.voiceStates) || void 0 === n ? void 0 : n.map(e => e.userId)),
      a = new Set([...s, ...r]);
    for (let t of a) i = p(e.guildId).updateVoiceState(t) || i;
    for (let t of r) s.has(t) && (i = p(e.guildId).updateMember(t) || i);
    return i
  }
})