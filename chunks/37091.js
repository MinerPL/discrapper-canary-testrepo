"use strict";
var i, r, s, o, a = n(442837),
  l = n(570140);
let u = {
    enabled: !1
  },
  _ = {},
  d = {},
  c = !1;
class E extends(o = a.ZP.DeviceSettingsStore) {
  initialize() {
    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : u;
    c = e.enabled
  }
  getWaitingHighFive(e, t) {
    var n;
    return null === (n = _[e]) || void 0 === n ? void 0 : n[t]
  }
  getCompletedHighFive(e, t) {
    var n;
    return null === (n = d[e]) || void 0 === n ? void 0 : n[t]
  }
  getEnabled() {
    return c
  }
  getUserAgnosticState() {
    return {
      enabled: c
    }
  }
}
s = "HighFiveStore", (r = "persistKey") in(i = E) ? Object.defineProperty(i, r, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[r] = s, t.Z = new E(l.Z, {
  HIGH_FIVE_QUEUE: function(e) {
    let {
      userId: t,
      channelId: n,
      emoji: i
    } = e;
    _[n] = {
      ..._[n],
      [t]: i
    }
  },
  HIGH_FIVE_REMOVE: function(e) {
    let {
      userId: t,
      channelId: n
    } = e, i = _[n];
    if (null == i) return !1;
    delete i[t]
  },
  HIGH_FIVE_SET_ENABLED: function(e) {
    let {
      enabled: t
    } = e;
    c = t
  },
  HIGH_FIVE_COMPLETE: function(e) {
    var t;
    let {
      completingEmoji: n,
      completingUserId: i,
      waitingUserId: r,
      channelId: s
    } = e, o = null !== (t = _[s]) && void 0 !== t ? t : {}, a = o[r];
    if (delete o[r], null == a) return !1;
    d[s] = {
      ...d[s],
      [r]: [a, n],
      [i]: [n, a]
    }
  },
  HIGH_FIVE_COMPLETE_CLEAR: function(e) {
    var t;
    let {
      firstUserId: n,
      secondUserId: i,
      channelId: r
    } = e, s = null !== (t = d[r]) && void 0 !== t ? t : {};
    delete s[n], delete s[i]
  }
})