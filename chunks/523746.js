var r, i, a, s, o = n(392711),
  l = n.n(o),
  u = n(442837),
  c = n(544891),
  d = n(570140),
  _ = n(592125),
  E = n(944486),
  f = n(914010),
  h = n(981631);
let p = {},
  m = {};

function I() {
  let e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : E.Z.getChannelId(),
n = _.Z.getChannel(t);
  if (null != n && null == n.getGuildId() && null != t && (null == p[t] || e)) {
var r;
return p[t] = null !== (r = p[t]) && void 0 !== r ? r : {
  channelId: t,
  ringing: []
}, d.Z.dispatch({
  type: 'CALL_CONNECT',
  channelId: t
}), !0;
  }
  return !1;
}
class T extends(s = u.ZP.Store) {
  initialize() {
this.waitFor(f.Z, E.Z);
  }
  getCall(e) {
return p[e];
  }
  getCalls() {
return Object.values(p);
  }
  getMessageId(e) {
let t = this.getCall(e);
return null != t ? t.messageId : null;
  }
  isCallActive(e, t) {
let n = p[e];
return null != n && !n.unavailable && (null != t ? n.messageId === t : null != n.region);
  }
  isCallUnavailable(e) {
let t = p[e];
return null != t && t.unavailable;
  }
  getInternalState() {
return {
  calls: p,
  enqueuedRings: m
};
  }
}
a = 'CallStore', (i = 'displayName') in(r = T) ? Object.defineProperty(r, i, {
  value: a,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : r[i] = a, t.Z = new T(d.Z, {
  CONNECTION_OPEN: function() {
return I(!0);
  },
  CONNECTION_CLOSED: function() {
p = {}, m = {};
  },
  OVERLAY_INITIALIZE: function(e) {
let {
  callStoreInternalState: t
} = e;
p = {
  ...t.calls
}, m = {
  ...t.enqueuedRings
};
  },
  CONNECTION_RESUMED: function() {
return I(!0);
  },
  CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
return I(!1, t);
  },
  CHANNEL_DELETE: function(e) {
let {
  channel: t
} = e;
if (null != m[t.id] && delete m[t.id], null == p[t.id])
  return !1;
delete p[t.id];
  },
  CALL_CREATE: function(e) {
let {
  channelId: t,
  messageId: n,
  region: r,
  ringing: i
} = e;
if (p[t] = {
    channelId: t,
    messageId: n,
    region: r,
    ringing: i,
    unavailable: !1,
    regionUpdated: !1
  }, null != m[t]) {
  let e = m[t];
  delete m[t], 1 !== e.indexOf('all') && (e = null), c.tn.post({
    url: h.ANM.CALL_RING(t),
    body: {
      recipients: e
    },
    oldFormErrors: !0
  });
}
  },
  CALL_UPDATE: function(e) {
let {
  channelId: t,
  messageId: n,
  region: r,
  ringing: i
} = e, a = p[t], s = null != a && (a.regionUpdated || a.region !== r);
p[t] = {
  ...p[t],
  messageId: n,
  region: r,
  ringing: i,
  regionUpdated: s
};
  },
  CALL_DELETE: function(e) {
let {
  channelId: t,
  unavailable: n
} = e, r = p[t];
!0 === n && null != r ? p[t] = {
  ...r,
  unavailable: n
} : p[t] = {
  channelId: t,
  ringing: [],
  messageId: null,
  region: null,
  regionUpdated: !1,
  unavailable: n
}, null != m[t] && delete m[t];
  },
  CALL_ENQUEUE_RING: function(e) {
var t;
let {
  channelId: n,
  recipients: r
} = e;
m[n] = l().union(null !== (t = m[n]) && void 0 !== t ? t : [], null != r ? r : ['all']);
  },
  VOICE_CHANNEL_SELECT: function(e) {
let {
  channelId: t
} = e;
null == t && (m = {});
  }
});