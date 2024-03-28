"use strict";
n.r(t), n("47120");
var a, s, l, i, r = n("442837"),
  o = n("433517"),
  u = n("570140"),
  d = n("695346"),
  c = n("581883"),
  f = n("314897"),
  E = n("592125"),
  h = n("885110"),
  _ = n("981631");
let C = "IncomingCallStore",
  m = {
    width: 232,
    height: 315
  },
  S = new Set,
  I = [],
  p = new Map,
  T = new Set,
  g = 0,
  A = 0,
  N = !1;

function v(e) {
  if (null == e || null == p.get(e)) return !1;
  p.delete(e), (T = new Set(T)).delete(e)
}

function O(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(f.default.getId());
  if (!T.has(t) && a) {
    let e = E.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * T.size;
    p.set(t, {
      channel: e,
      x: g + n,
      y: A + n
    }), (T = new Set(T)).add(t)
  } else {
    if (!T.has(t) || a) return !1;
    v(t)
  }
}! function() {
  let e = o.Storage.get(C);
  if (null != e) g = +e.x, A = +e.y;
  else {
    let e = n("451478").default.windowSize();
    g = e.width / 2 - m.width / 2, A = e.height / 2 - m.height / 2
  }
}();

function R() {
  N = h.default.getStatus() === _.StatusTypes.DND || d.FocusMode.getSetting()
}
class L extends(a = r.default.Store) {
  initialize() {
    this.waitFor(E.default, h.default), this.syncWith([h.default], R), this.syncWith([c.default], R)
  }
  getIncomingCalls() {
    return N ? I : Array.from(p.values())
  }
  getIncomingCallChannelIds() {
    return N ? S : T
  }
  getFirstIncomingCallId() {
    return N ? null : T.values().next().value
  }
  hasIncomingCalls() {
    return !N && T.size > 0
  }
}
i = "IncomingCallStore", (l = "displayName") in(s = L) ? Object.defineProperty(s, l, {
  value: i,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[l] = i, t.default = new L(u.default, {
  CALL_CREATE: O,
  CALL_UPDATE: O,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return v(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return v(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return g = t, A = n, o.Storage.set(C, {
      x: g,
      y: A
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return v(t.id)
  }
})