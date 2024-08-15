n.d(t, {
  LO: function() {
return O;
  },
  On: function() {
return N;
  },
  Vv: function() {
return S;
  },
  _: function() {
return A;
  },
  bp: function() {
return R;
  },
  ef: function() {
return g;
  },
  s6: function() {
return T;
  },
  sh: function() {
return D;
  }
}), n(653041), n(47120);
var r = n(434179),
  i = n(771649),
  a = n(544891),
  s = n(570140),
  o = n(668781),
  l = n(340332),
  u = n(19780),
  c = n(797258),
  d = n(626135),
  _ = n(960048),
  E = n(607214),
  f = n(258609),
  h = n(893387),
  p = n(981631),
  m = n(689938);

function I(e, t) {
  var n, r;
  d.default.track(p.rMx.REMOTE_COMMAND_SENT, {
command_type: e,
remote_platform: null === (r = c.Z.getSessionById(t)) || void 0 === r ? void 0 : null === (n = r.clientInfo) || void 0 === n ? void 0 : n.os
  });
}
async function T() {
  let e = f.Z.getAwaitingRemoteSessionInfo(),
t = null == e ? void 0 : e.nonce;
  s.Z.dispatch({
type: 'REMOTE_SESSION_DISCONNECT'
  });
  let n = [];
  ((null == e ? void 0 : e.type) === p.ABu.PLAYSTATION || (null == e ? void 0 : e.type) === p.ABu.PLAYSTATION_STAGING) && (null == e ? void 0 : e.commandId) != null && (null == e ? void 0 : e.deviceId) != null && n.push(y(e.type, e.deviceId, e.commandId)), null != t && n.push(function(e) {
return a.tn.del({
  url: p.ANM.CONNECT_REQUEST(e)
});
  }(t));
  try {
await Promise.all(n);
  } catch (e) {
o.Z.show({
  title: m.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_TITLE,
  body: m.Z.Messages.CANCEL_TRANSFER_VOICE_FAILED_BODY
});
  }
}

function g(e) {
  s.Z.dispatch({
type: 'REMOTE_SESSION_CONNECT',
sessionId: e
  });
}

function S(e, t) {
  let {
selfMute: n,
selfDeaf: r
  } = t;
  s.Z.dispatch({
type: 'REMOTE_COMMAND',
sessionId: e,
payload: {
  type: 'VOICE_STATE_UPDATE',
  self_mute: n,
  self_deaf: r
}
  }), I('VOICE_STATE_UPDATE', e);
}

function A(e) {
  s.Z.dispatch({
type: 'REMOTE_COMMAND',
sessionId: e,
payload: {
  type: 'DISCONNECT'
}
  }), I('DISCONNECT', e), T();
}

function N(e, t, n, r) {
  let i = (0, l.z)(n);
  null != i && (s.Z.dispatch({
type: 'REMOTE_COMMAND',
sessionId: e,
payload: {
  type: 'AUDIO_SETTINGS_UPDATE',
  context: i,
  id: t,
  ...r
}
  }), I('AUDIO_SETTINGS_UPDATE', e));
}
async function v() {
  let e;
  try {
let t = null != u.Z.getRTCConnectionId() ? i.o.TRANSFER_EXISTING_CALL : i.o.CREATE_NEW_CALL;
e = (await a.tn.post({
  url: p.ANM.CONNECT_REQUEST_CREATE,
  body: {
    analytics_properties: {
      handoff_type: t
    }
  }
})).body.nonce;
  } catch (e) {
_.Z.captureException(e);
  }
  return e;
}
async function O(e) {
  let t;
  s.Z.dispatch({
type: 'GAME_CONSOLE_FETCH_DEVICES_START',
platform: e
  });
  try {
t = await a.tn.get({
  url: p.ANM.CONSOLES_DEVICES(e)
});
  } catch (t) {
throw s.Z.dispatch({
  type: 'GAME_CONSOLE_FETCH_DEVICES_FAIL',
  platform: e,
  error: t
}), t;
  }
  let n = t.body.devices;
  return s.Z.dispatch({
type: 'GAME_CONSOLE_FETCH_DEVICES_SUCCESS',
platform: e,
devices: n
  }), n;
}

function R(e, t) {
  s.Z.dispatch({
type: 'GAME_CONSOLE_SELECT_DEVICE',
platform: e,
deviceId: t
  });
}
async function C(e, t, n, i) {
  let o;
  s.Z.dispatch({
type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_START',
platform: e
  });
  try {
o = await a.tn.post({
  url: p.ANM.CONSOLES_DEVICES_COMMANDS(e, t),
  body: {
    command: r.n.CONNECT_VOICE,
    channel_id: n.id,
    guild_id: n.guild_id,
    nonce: i
  }
});
  } catch (t) {
throw s.Z.dispatch({
  type: 'GAME_CONSOLE_DEVICE_SEND_COMMAND_FAIL',
  platform: e,
  error: t
}), t;
  }
  let l = o.body.id;
  return s.Z.dispatch({
type: 'WAIT_FOR_REMOTE_SESSION',
sessionType: e,
nonce: i,
channelId: n.id,
deviceId: t,
commandId: l
  }), l;
}
async function y(e, t, n) {
  s.Z.dispatch({
type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_START',
platform: e,
deviceId: t,
commandId: n
  });
  try {
await a.tn.del({
  url: p.ANM.CONSOLES_DEVICES_COMMAND(e, t, n)
});
  } catch (r) {
throw s.Z.dispatch({
  type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_FAIL',
  platform: e,
  deviceId: t,
  commandId: n,
  error: r
}), r;
  }
  s.Z.dispatch({
type: 'GAME_CONSOLE_DEVICE_CANCEL_COMMAND_SUCCESS',
platform: e,
deviceId: t,
commandId: n
  });
}
async function D(e, t, n) {
  await E.Z.maybeShowPTTAlert(e), await T();
  let r = await v();
  await C(e, t, n, r), (0, h.Z)(n.id, e);
}