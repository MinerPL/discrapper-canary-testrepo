"use strict";
n.r(t), n.d(t, {
  default: function() {
    return R
  }
}), n("222007");
var a = n("446674"),
  s = n("95410"),
  l = n("913144"),
  i = n("845579"),
  r = n("374363"),
  o = n("271938"),
  u = n("42203"),
  d = n("101125"),
  c = n("49111");
let f = "IncomingCallStore",
  E = {
    width: 232,
    height: 315
  },
  h = new Set,
  _ = [],
  C = new Map,
  S = new Set,
  I = 0,
  m = 0,
  p = !1;

function T(e) {
  if (null == e || null == C.get(e)) return !1;
  C.delete(e), (S = new Set(S)).delete(e)
}

function g(e) {
  let {
    channelId: t,
    ringing: n
  } = e, a = n.includes(o.default.getId());
  if (!S.has(t) && a) {
    let e = u.default.getChannel(t);
    if (null == e) return !1;
    let n = 10 * S.size;
    C.set(t, {
      channel: e,
      x: I + n,
      y: m + n
    }), (S = new Set(S)).add(t)
  } else {
    if (!S.has(t) || a) return !1;
    T(t)
  }
}! function() {
  let e = s.Storage.get(f);
  if (null != e) I = +e.x, m = +e.y;
  else {
    let e = n("471671").default.windowSize();
    I = e.width / 2 - E.width / 2, m = e.height / 2 - E.height / 2
  }
}();

function A() {
  p = d.default.getStatus() === c.StatusTypes.DND || i.FocusMode.getSetting()
}
class N extends a.default.Store {
  initialize() {
    this.waitFor(u.default, d.default), this.syncWith([d.default], A), this.syncWith([r.default], A)
  }
  getIncomingCalls() {
    return p ? _ : Array.from(C.values())
  }
  getIncomingCallChannelIds() {
    return p ? h : S
  }
  getFirstIncomingCallId() {
    return p ? null : S.values().next().value
  }
  hasIncomingCalls() {
    return !p && S.size > 0
  }
}
N.displayName = "IncomingCallStore";
var R = new N(l.default, {
  CALL_CREATE: g,
  CALL_UPDATE: g,
  CALL_DELETE: function(e) {
    let {
      channelId: t
    } = e;
    return T(t)
  },
  VOICE_CHANNEL_SELECT: function(e) {
    let {
      channelId: t
    } = e;
    return T(t)
  },
  INCOMING_CALL_MOVE: function(e) {
    let {
      x: t,
      y: n
    } = e;
    return I = t, m = n, s.Storage.set(f, {
      x: I,
      y: m
    }), !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    return T(t.id)
  }
})