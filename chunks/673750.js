n.d(t, {
  $V: function() {
return i;
  },
  Bz: function() {
return C;
  },
  hc: function() {
return y;
  }
}), n(653041), n(47120);
var r, i, a, o, s = n(512722),
  l = n.n(s),
  u = n(261470),
  c = n(544891),
  d = n(911969),
  _ = n(367907),
  E = n(710845),
  f = n(432877);
n(893233);
var h = n(873741),
  p = n(314897),
  m = n(866960),
  I = n(70956),
  T = n(403182),
  g = n(651655),
  S = n(861990),
  A = n(141795),
  N = n(981631);

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let O = null;
__OVERLAY__ && (O = n(237997).Z), (a = r || (r = {})).OVERLAY_UNLOCKED = 'overlay_unlocked', a.OVERLAY_UNLOCKED_PINNED = 'overlay_unlocked_pinned', a.OVERLAY_LOCKED_ACTIVATED = 'overlay_locked_activated', (o = i || (i = {}))[o.SEND = 0] = 'SEND', o[o.EDIT = 1] = 'EDIT', o[o.COMMAND = 2] = 'COMMAND';
let R = e => 0 === e.type,
  C = e => 1 === e.type,
  y = e => R(e) ? e.message.nonce : C(e) ? e.message.messageId : e.message.data.id,
  D = [
1 * I.Z.Millis.MINUTE,
5 * I.Z.Millis.MINUTE
  ];
class L extends g.Z {
  isFull() {
return this.queue.length >= this.maxSize;
  }
  drain(e, t) {
switch (this.logger.log('Draining Message Queue with: ', e.type), e.type) {
  case 0:
    this.handleSend(e.message, t);
    break;
  case 1:
    this.handleEdit(e.message, t);
    break;
  case 2:
    this.handleCommand(e.message, t);
}
  }
  cancelRequest(e) {
var t;
this.logger.log('Cancel message send: ', e), null === (t = this.requests.get(e)) || void 0 === t || t.abort(), this.requests.delete(e), this.cancelQueueMetricTimers(e);
  }
  cancelPendingSendRequests(e) {
let t = [],
  n = [];
for (; this.queue.length > 0;) {
  let r = this.queue.shift(),
    {
      message: i
    } = r;
  0 === i.type && i.message.channelId === e ? t.push(i.message) : n.push(r);
}
return this.queue.push(...n), this.logger.log('Cancel pending send requests', t.length), t;
  }
  startQueueMetricTimers(e) {
let t = D.map(e => setTimeout(() => {
  (0, _.yw)(N.rMx.SEND_MESSAGE_QUEUED, {
    queued_duration_ms: e
  });
}, e));
this.analyticsTimeouts.set(e, t);
  }
  cancelQueueMetricTimers(e) {
var t;
null === (t = this.analyticsTimeouts.get(e)) || void 0 === t || t.forEach(clearTimeout), this.analyticsTimeouts.delete(e);
  }
  createResponseHandler(e, t) {
return n => {
  if (null != e && (this.requests.delete(e), this.cancelQueueMetricTimers(e)), n.hasErr)
    return t(null, n);
  null != n.body && (n.body.code === N.evJ.SLOWMODE_RATE_LIMITED || n.body.code === N.evJ.CHANNEL_FOLLOWING_EDIT_RATE_LIMITED) ? t(null, n) : 429 === n.status ? t({
    retryAfter: n.body.retry_after * I.Z.Millis.SECOND
  }) : t(null, n);
};
  }
  handleSend(e, t) {
let n;
let {
  channelId: r,
  file: i,
  filename: a,
  ...o
} = e, s = (0, h.d)(), l = {
  mobile_network_type: m.Z.getType(),
  ...o,
  ...null != s && {
    signal_strength: s
  }
};
if (f.ZP.get('send_fail_100')) {
  this.logger.log('Skipping message sened because send_fail_100 is enabled'), t(null, {
    ok: !1,
    hasErr: !1,
    status: 500,
    headers: {},
    body: '{}',
    text: 'Simulated failure'
  });
  return;
}
null != O && (O.isInstanceUILocked() ? n = {
  location: 'overlay_locked_activated'
} : !O.isInstanceUILocked() && (n = O.isPinned(N.Odu.TEXT) ? {
  location: 'overlay_unlocked_pinned'
} : {
  location: 'overlay_unlocked'
}));
let d = this.createResponseHandler(e.nonce, t),
  _ = new AbortController();
if (this.startQueueMetricTimers(e.nonce), null != i && null != a && '' !== a)
  c.tn.post({
    url: N.ANM.MESSAGES(r),
    fields: Object.entries(l).map(e => {
      let [t, n] = e;
      return {
        name: t,
        value: n
      };
    }),
    attachments: [{
      name: 'file',
      file: i,
      filename: a
    }],
    context: n,
    oldFormErrors: !0,
    signal: _.signal,
    onRequestCreated: () => {
      null != e.nonce && this.requests.set(e.nonce, _);
    }
  }, d);
else {
  let t;
  t = {
    timeout: 60 * I.Z.Millis.SECOND,
    retries: 3,
    backoff: new u.Z()
  }, c.tn.post({
    url: N.ANM.MESSAGES(r),
    body: l,
    context: n,
    oldFormErrors: !0,
    ...t,
    signal: _.signal,
    onRequestCreated: () => {
      null != e.nonce && this.requests.set(e.nonce, _);
    }
  }, d);
}
  }
  handleEdit(e, t) {
let {
  channelId: n,
  messageId: r,
  ...i
} = e, a = new AbortController();
c.tn.patch({
  url: N.ANM.MESSAGE(n, r),
  body: i,
  retries: 1,
  oldFormErrors: !0,
  signal: a.signal,
  onRequestCreated: () => {
    this.requests.set(r, a);
  }
}, this.createResponseHandler(r, t));
  }
  handleCommand(e, t) {
let n, {
    applicationId: r,
    guildId: i,
    channelId: a,
    data: o,
    nonce: s,
    attachments: u,
    maxSizeCallback: _,
    analytics_location: E,
    sectionName: f
  } = e,
  h = {
    type: d.B8.APPLICATION_COMMAND,
    application_id: r,
    guild_id: i,
    channel_id: a,
    session_id: p.default.getSessionId(),
    data: o,
    nonce: s,
    analytics_location: E,
    section_name: f
  };
if (null != u) {
  h.data.attachments = [], n = [];
  h.data.attachments = u.map((e, t) => (l()(e.status === A.m.COMPLETED, 'Uploads must be staged before trying to send a message'), (0, S.B)(e, t)));
}
let m = new AbortController();
c.tn.post({
  url: N.ANM.INTERACTIONS,
  fields: [{
    name: 'payload_json',
    value: JSON.stringify(h)
  }],
  attachments: n,
  signal: m.signal,
  onRequestCreated: e => {
    this.requests.set(s, m), e.on('progress', e => {
      let {
        total: t
      } = e, n = (0, T.dg)(i);
      null != t && t > n && (this.cancelRequest(s), null == _ || _(n));
    });
  }
}, this.createResponseHandler(s, t));
  }
  constructor(e = 5) {
super(new E.Z('MessageQueue')), v(this, 'maxSize', void 0), v(this, 'requests', void 0), v(this, 'analyticsTimeouts', void 0), this.maxSize = e, this.requests = new Map(), this.analyticsTimeouts = new Map();
  }
}
t.ZP = new L();