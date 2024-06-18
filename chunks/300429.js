"use strict";
n.d(t, {
  S: function() {
    return i
  }
}), n(47120);
var i, r, s, o, a, l, u = n(442837),
  _ = n(846519),
  d = n(570140),
  c = n(70956),
  E = n(592125),
  I = n(496675),
  T = n(981631);
(s = i || (i = {}))[s.SendMessage = 0] = "SendMessage", s[s.CreateThread = 1] = "CreateThread";
let h = {
  0: {},
  1: {}
};

function S(e, t, n) {
  if (function(e, t) {
      null != h[t][e.id] && (h[t][e.id].timer.stop(), delete h[t][e.id])
    }(e, t), function(e, t) {
      return 0 === t ? I.Z.can(T.Plq.MANAGE_CHANNELS, e) || I.Z.can(T.Plq.MANAGE_MESSAGES, e) : I.Z.can(T.Plq.MANAGE_THREADS, e)
    }(e, t) || n <= 0) return;
  let i = n + Date.now();
  h[t][e.id] = {
    rateLimitPerUser: e.rateLimitPerUser,
    cooldownMs: n,
    cooldownEndTimestamp: i,
    timer: new _.V7
  }, h[t][e.id].timer.start(1e3, () => {
    d.Z.dispatch({
      type: "SLOWMODE_SET_COOLDOWN",
      channelId: e.id,
      slowmodeType: t,
      cooldownMs: Math.max(i - Date.now(), 0)
    })
  }, !0)
}

function f(e, t) {
  let n = E.Z.getChannel(e);
  if (null == n) return !1;
  S(n, t, 0 === n.rateLimitPerUser ? 0 : n.rateLimitPerUser * c.Z.Millis.SECOND + 100)
}

function N(e) {
  let {
    file: t
  } = e, n = E.Z.getChannel(t.channelId);
  return null != n && S(n, 0, 0)
}
class A extends(r = u.ZP.Store) {
  initialize() {
    this.waitFor(E.Z)
  }
  getSlowmodeCooldownGuess(e, t) {
    let n = h[null != t ? t : 0][e];
    return null != n ? n.cooldownMs : 0
  }
}
l = "SlowmodeStore", (a = "displayName") in(o = A) ? Object.defineProperty(o, a, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : o[a] = l, t.Z = new A(d.Z, {
  SLOWMODE_RESET_COOLDOWN: function(e) {
    let {
      channelId: t,
      slowmodeType: n
    } = e;
    return f(t, n)
  },
  SLOWMODE_SET_COOLDOWN: function(e) {
    let {
      channelId: t,
      slowmodeType: n,
      cooldownMs: i
    } = e, r = E.Z.getChannel(t);
    if (null == r) return !1;
    S(r, n, 0 === i ? 0 : i + 100)
  },
  UPLOAD_START: function(e) {
    let {
      channelId: t
    } = e;
    return f(t, 0)
  },
  UPLOAD_FAIL: N,
  UPLOAD_CANCEL_REQUEST: N,
  CHANNEL_UPDATES: function(e) {
    let {
      channels: t
    } = e;
    [0, 1].forEach(e => {
      for (let i of t) {
        var n;
        let t = h[e][i.id],
          r = i.rateLimitPerUser;
        if (null != t && t.rateLimitPerUser !== r) S(i, e, Math.min(null !== (n = null == t ? void 0 : t.cooldownMs) && void 0 !== n ? n : 0, r * c.Z.Millis.SECOND))
      }
    })
  },
  LOGOUT: function() {
    [0, 1].forEach(e => {
      Object.keys(h[e]).forEach(t => h[e][t].timer.stop()), h[e] = {}
    })
  }
})