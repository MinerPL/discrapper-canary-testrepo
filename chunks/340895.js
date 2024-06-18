"use strict";
n(47120);
var i, r, s, o, a = n(442837),
  l = n(433517),
  u = n(570140),
  _ = n(695346),
  d = n(581883),
  c = n(314897),
  E = n(592125),
  I = n(885110),
  T = n(981631);
let h = "IncomingCallStore",
  S = {
    width: 232,
    height: 315
  },
  f = new Set,
  N = [],
  A = new Map,
  m = new Set,
  O = 0,
  R = 0,
  C = !1;

function p(e) {
  if (null == e || null == A.get(e)) return !1;
  A.delete(e), (m = new Set(m)).delete(e)
}

function g(e) {
  let {
    channelId: t,
    ringing: n
  } = e, i = n.includes(c.default.getId());
  if (!m.has(t) && i) {
    let e = E.Z.getChannel(t);
    if (null == e) return !1;
    let n = 10 * m.size;
    A.set(t, {
      channel: e,
      x: O + n,
      y: R + n
    }), (m = new Set(m)).add(t)
  } else {
    if (!m.has(t) || i) return !1;
    p(t)
  }
}! function() {
  let e = l.K.get(h);
  if (null != e) O = +e.x, R = +e.y;
  else {
    let e = n(451478).Z.windowSize();
    O = e.width / 2 - S.width / 2, R = e.height / 2 - S.height / 2
  }
}();

function L() {
  C = I.Z.getStatus() === T.Skl.DND || _.QZ.getSetting()
}
class v extends(i = a.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, I.Z), this.syncWith([I.Z], L), this.syncWith([d.Z], L)
  }
  getIncomingCalls() {
    return C ? N : Array.from(A.values())
  }
  getIncomingCallChannelIds() {
    return C ? f : m
  }
  getFirstIncomingCallId() {
    return C ? null : m.values().next().value
  }
  hasIncomingCalls() {
    return !C && m.size > 0
  }
}
o = "IncomingCallStore", (s = "displayName") in(r = v) ? Object.defineProperty(r, s, {
  value: o,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[s] = o, t.Z = new v(u.Z, {
  CALL_CREATE: g,
  CALL_UPDATE: g,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return p(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return p(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return O = t, R = n, l.K.set(h, {
      x: O,
      y: R
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return p(t.id)
  }
})