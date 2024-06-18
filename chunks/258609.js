"use strict";
n(47120);
var i, r = n(442837),
  s = n(570140),
  o = n(797258),
  a = n(979651);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}
let u = null,
  _ = null,
  d = new Set,
  c = {},
  E = {},
  I = new Set,
  T = Object.freeze({});
class h extends(i = r.ZP.DeviceSettingsStore) {
  initialize(e) {
    null != e && (E = e.lastSelectedDeviceByPlatform), this.waitFor(o.Z, a.Z)
  }
  getUserAgnosticState() {
    return {
      lastSelectedDeviceByPlatform: E
    }
  }
  getDevicesForPlatform(e) {
    var t;
    return null !== (t = c[e]) && void 0 !== t ? t : T
  }
  getLastSelectedDeviceByPlatform(e) {
    return E[e]
  }
  getDevice(e, t) {
    var n;
    return null === (n = c[e]) || void 0 === n ? void 0 : n[t]
  }
  getFetchingDevices(e) {
    return I.has(e)
  }
  getPendingDeviceCommands() {
    return d
  }
  getRemoteSessionId() {
    return u
  }
  getAwaitingRemoteSessionInfo() {
    return _
  }
}
l(h, "displayName", "GameConsoleStore"), l(h, "persistKey", "GameConsoleStore"), t.Z = new h(s.Z, {
  REMOTE_SESSION_CONNECT: function(e) {
    let {
      sessionId: t
    } = e;
    u = t, _ = null
  },
  REMOTE_SESSION_DISCONNECT: function() {
    u = null, _ = null
  },
  WAIT_FOR_REMOTE_SESSION: function(e) {
    let {
      sessionType: t,
      nonce: n,
      channelId: i,
      deviceId: r,
      commandId: s
    } = e;
    _ = {
      type: t,
      nonce: n,
      channelId: i,
      startedAt: Date.now(),
      deviceId: r,
      commandId: s
    }
  },
  GAME_CONSOLE_FETCH_DEVICES_START: function(e) {
    let {
      platform: t
    } = e;
    I.add(t)
  },
  GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function(e) {
    let {
      platform: t,
      devices: n
    } = e;
    I.delete(t);
    let i = c[t] = {},
      r = {};
    for (let e of n) i[e.id] = e, E[t] === e.id && (r[t] = e.id);
    E = r
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function(e) {
    let {
      platform: t
    } = e;
    I.delete(t)
  },
  GAME_CONSOLE_SELECT_DEVICE: function(e) {
    let {
      platform: t,
      deviceId: n
    } = e;
    E[t] = n
  }
})