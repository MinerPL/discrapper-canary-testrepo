n(47120);
var r, i = n(442837),
  a = n(570140),
  s = n(797258),
  o = n(979651);

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let u = null,
  c = null,
  d = new Set(),
  _ = {},
  E = {},
  f = new Set(),
  h = Object.freeze({});
class p extends(r = i.ZP.DeviceSettingsStore) {
  initialize(e) {
null != e && (E = e.lastSelectedDeviceByPlatform), this.waitFor(s.Z, o.Z);
  }
  getUserAgnosticState() {
return {
  lastSelectedDeviceByPlatform: E
};
  }
  getDevicesForPlatform(e) {
var t;
return null !== (t = _[e]) && void 0 !== t ? t : h;
  }
  getLastSelectedDeviceByPlatform(e) {
return E[e];
  }
  getDevice(e, t) {
var n;
return null === (n = _[e]) || void 0 === n ? void 0 : n[t];
  }
  getFetchingDevices(e) {
return f.has(e);
  }
  getPendingDeviceCommands() {
return d;
  }
  getRemoteSessionId() {
return u;
  }
  getAwaitingRemoteSessionInfo() {
return c;
  }
}
l(p, 'displayName', 'GameConsoleStore'), l(p, 'persistKey', 'GameConsoleStore'), t.Z = new p(a.Z, {
  REMOTE_SESSION_CONNECT: function(e) {
let {
  sessionId: t
} = e;
u = t, c = null;
  },
  REMOTE_SESSION_DISCONNECT: function() {
u = null, c = null;
  },
  WAIT_FOR_REMOTE_SESSION: function(e) {
let {
  sessionType: t,
  nonce: n,
  channelId: r,
  deviceId: i,
  commandId: a
} = e;
c = {
  type: t,
  nonce: n,
  channelId: r,
  startedAt: Date.now(),
  deviceId: i,
  commandId: a
};
  },
  GAME_CONSOLE_FETCH_DEVICES_START: function(e) {
let {
  platform: t
} = e;
f.add(t);
  },
  GAME_CONSOLE_FETCH_DEVICES_SUCCESS: function(e) {
let {
  platform: t,
  devices: n
} = e;
f.delete(t);
let r = _[t] = {},
  i = {};
for (let e of n)
  r[e.id] = e, E[t] === e.id && (i[t] = e.id);
E = i;
  },
  GAME_CONSOLE_FETCH_DEVICES_FAIL: function(e) {
let {
  platform: t
} = e;
f.delete(t);
  },
  GAME_CONSOLE_SELECT_DEVICE: function(e) {
let {
  platform: t,
  deviceId: n
} = e;
E[t] = n;
  }
});