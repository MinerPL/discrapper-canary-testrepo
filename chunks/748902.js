n(47120);
var i, a, s, l, r = n(442837),
  o = n(570140),
  c = n(786761),
  u = n(594174),
  d = n(355298),
  h = n(333984);
let p = {},
  m = new Set();

function _(e) {
  return d.Z.isMessageRequest(e) || h.Z.isSpam(e);
}

function f(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  if (!_(e) || null != t && e !== (null == t ? void 0 : t.channel_id))
return;
  let i = null == t ? null : (0, c.e5)(t);
  p[e] = {
loaded: !0,
error: n,
message: i
  };
}
class E extends(i = r.ZP.Store) {
  initialize() {
this.waitFor(d.Z, h.Z, u.default);
  }
  shouldLoadMessageRequestPreview(e) {
return !m.has(e);
  }
  getMessageRequestPreview(e) {
return !(e in p) && (p[e] = {
  loaded: !1,
  error: !1,
  message: null
}), p[e];
  }
}
l = 'MessageRequestPreviewStore', (s = 'displayName') in(a = E) ? Object.defineProperty(a, s, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : a[s] = l, t.Z = new E(o.Z, {
  CONNECTION_OPEN: function() {
p = {}, m.clear();
  },
  CHANNEL_CREATE: function(e) {
let {
  channel: t
} = e;
_(t.id) && m.add(t.id);
  },
  CHANNEL_UPDATES: function(e) {
let {
  channels: t
} = e;
for (let e of t)
  !_(e.id) && (m.delete(e.id), delete p[e.id]);
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
m.delete(t.id), delete p[t.id];
  },
  MESSAGE_CREATE: function(e) {
if (e.isPushNotification)
  return !1;
f(e.message.channel_id, e.message);
  },
  MESSAGE_UPDATE: function(e) {
let t = e.message.channel_id;
if (null == t)
  return !1;
let n = p[t];
if (null == n || null == n.message)
  return !1;
p[t] = {
  ...n,
  message: (0, c.wi)(n.message, e.message)
};
  },
  MESSAGE_DELETE: function(e) {
if (!_(e.channelId))
  return !1;
p[e.channelId] = {
  loaded: !0,
  error: !1,
  message: null
};
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: function(e) {
let {
  requestedChannelIds: t,
  supplementalData: n
} = e, i = new Set([...t]);
for (let e of (n.forEach(e => {
    f(e.channel_id, e.message_preview), i.delete(e.channel_id);
  }), Array.from(i)))
  f(e, null);
  },
  LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_ERROR: function(e) {
let {
  requestedChannelIds: t
} = e;
t.forEach(e => {
  f(e, null, !0);
});
  }
});