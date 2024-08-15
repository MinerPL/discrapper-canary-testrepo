n(47120);
var r, i, a, s, o = n(442837),
  l = n(433517),
  u = n(570140),
  c = n(695346),
  d = n(581883),
  _ = n(314897),
  E = n(592125),
  f = n(885110),
  h = n(981631);
let p = 'IncomingCallStore',
  m = {
width: 232,
height: 315
  },
  I = new Set(),
  T = [],
  g = new Map(),
  S = new Set(),
  A = 0,
  N = 0,
  v = !1;

function O(e) {
  if (null == e || null == g.get(e))
return !1;
  g.delete(e), (S = new Set(S)).delete(e);
}

function R(e) {
  let {
channelId: t,
ringing: n
  } = e, r = n.includes(_.default.getId());
  if (!S.has(t) && r) {
let e = E.Z.getChannel(t);
if (null == e)
  return !1;
let n = 10 * S.size;
g.set(t, {
  channel: e,
  x: A + n,
  y: N + n
}), (S = new Set(S)).add(t);
  } else {
if (!S.has(t) || r)
  return !1;
O(t);
  }
}! function() {
  let e = l.K.get(p);
  if (null != e)
A = +e.x, N = +e.y;
  else {
let e = n(451478).Z.windowSize();
A = e.width / 2 - m.width / 2, N = e.height / 2 - m.height / 2;
  }
}();

function C() {
  v = f.Z.getStatus() === h.Skl.DND || c.QZ.getSetting();
}
class y extends(r = o.ZP.Store) {
  initialize() {
this.waitFor(E.Z, f.Z), this.syncWith([f.Z], C), this.syncWith([d.Z], C);
  }
  getIncomingCalls() {
return v ? T : Array.from(g.values());
  }
  getIncomingCallChannelIds() {
return v ? I : S;
  }
  getFirstIncomingCallId() {
return v ? null : S.values().next().value;
  }
  hasIncomingCalls() {
return !v && S.size > 0;
  }
}
s = 'IncomingCallStore', (a = 'displayName') in(i = y) ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, t.Z = new y(u.Z, {
  CALL_CREATE: R,
  CALL_UPDATE: R,
  CALL_DELETE: function(e) {
let {
  channelId: t
} = e;
return O(t);
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
return O(t);
  },
  INCOMING_CALL_MOVE: function(e) {
let {
  x: t,
  y: n
} = e;
return A = t, N = n, l.K.set(p, {
  x: A,
  y: N
}), !1;
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
return O(t.id);
  }
});