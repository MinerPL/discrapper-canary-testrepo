let r, i;
n(47120);
var a, s, o, l, u = n(442837),
  c = n(570140),
  d = n(911969),
  _ = n(314897),
  E = n(592125),
  f = n(622449);
let h = {},
  p = {},
  m = {};

function I(e) {
  var t;
  if (null == e)
return !1;
  let n = h[e];
  if (null == n)
return !1;
  null === (t = n.onSuccess) || void 0 === t || t.call(n), T(e);
}

function T(e) {
  delete h[e];
  let t = m[e];
  null != t && delete p[t], delete m[e];
}
class g extends(a = u.ZP.Store) {
  getInteraction(e) {
let t = p[e.id];
return null != t ? h[t] : null;
  }
  getMessageInteractionStates() {
let e = {};
for (let [t, n] of Object.entries(h)) {
  let r = m[t];
  null != r && (e[r] = n.state);
}
return e;
  }
  canQueueInteraction(e, t) {
let n = p[e];
return (null == n || null == h[n] || h[n].state === f.F.FAILED) && (null == h[t] || h[t].state === f.F.FAILED) && !0;
  }
  getIFrameModalApplicationId() {
return i;
  }
  getIFrameModalKey() {
return r;
  }
}
l = 'InteractionStore', (o = 'displayName') in(s = g) ? Object.defineProperty(s, o, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : s[o] = l, t.Z = new g(c.Z, {
  LOGOUT: function() {
h = {}, p = {}, m = {};
  },
  INTERACTION_QUEUE: function(e) {
let {
  nonce: t,
  messageId: n,
  data: r,
  onCreate: i,
  onCancel: a,
  onSuccess: s,
  onFailure: o
} = e;
null != n && (p[n] = t, m[t] = n), h[t] = {
  state: f.F.QUEUED,
  data: r,
  onCreate: i,
  onCancel: a,
  onSuccess: s,
  onFailure: o
};
  },
  INTERACTION_CREATE: function(e) {
var t;
let {
  nonce: n,
  interactionId: r
} = e;
if (null == n)
  return !1;
let i = h[n];
if (null == i || i.state !== f.F.QUEUED)
  return !1;
i.state = f.F.CREATED, null === (t = i.onCreate) || void 0 === t || t.call(i, r);
  },
  INTERACTION_SUCCESS: function(e) {
let {
  nonce: t
} = e;
I(t);
  },
  INTERACTION_FAILURE: function(e) {
var t;
let {
  nonce: n,
  errorCode: r,
  errorMessage: i
} = e;
if (null == n)
  return !1;
let a = h[n];
if (null == a)
  return !1;
null === (t = a.onFailure) || void 0 === t || t.call(a, r, i), a.data.interactionType === d.B8.APPLICATION_COMMAND ? T(n) : h[n] = {
  ...a,
  state: f.F.FAILED,
  errorCode: r,
  errorMessage: i
};
  },
  MESSAGE_CREATE: function(e) {
let {
  message: t
} = e;
if (null == t.nonce)
  return !1;
{
  var n;
  let e = h[t.nonce];
  if (null == e)
    return !1;
  null === (n = e.onSuccess) || void 0 === n || n.call(e), T(t.nonce);
}
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
if (null == E.Z.getChannel(t))
  return !1;
for (let [e, t] of Object.entries(h))
  t.state === f.F.FAILED && T(e);
  },
  INTERACTION_IFRAME_MODAL_CREATE: function(e) {
let {
  application: t
} = e;
i = t.id;
  },
  INTERACTION_IFRAME_MODAL_CLOSE: function() {
r = void 0, i = void 0;
  },
  INTERACTION_IFRAME_MODAL_KEY_CREATE: function(e) {
let {
  modalKey: t
} = e;
r = t;
  },
  EMBEDDED_ACTIVITY_UPDATE_V2: function(e) {
let {
  participants: t
} = e, n = _.default.getSessionId(), r = _.default.getId(), i = t.find(e => e.user_id === r && e.session_id === n);
if (null != i && null != i.nonce)
  I(i.nonce);
  }
});