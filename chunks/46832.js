n.d(t, {
  Z: function() {
return I;
  }
}), n(47120);
var i = n(836560),
  a = n(317381),
  s = n(626135),
  r = n(585483),
  l = n(70956),
  o = n(996106),
  c = n(631467),
  d = n(981631);

function u(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let _ = 10 * l.Z.Millis.SECOND,
  E = new Map(),
  h = new Set(),
  m = (e, t, n) => {
n([
  c.Z.CLOSE,
  t
], e);
  };
class I extends i.EventEmitter {
  routeEvent(e, t, n, i) {
if (!Array.isArray(n)) {
  console.warn('[PostMessageTransport] Protocol error: event data should be an Array!');
  return;
}
let [a, s] = n;
switch (a) {
  case c.Z.HANDSHAKE:
    if (null != e)
      throw new o.Z({
        closeCode: d.$VG.CLOSE_UNSUPPORTED
      }, 'Already connected');
    return this.handleHandshake(t, s, i);
  case c.Z.FRAME:
    if (null == e)
      throw new o.Z({
        closeCode: d.$VG.CLOSE_UNSUPPORTED
      }, 'Not connected');
    return this.handleFrame(t, e, s);
  case c.Z.CLOSE:
    if (null == e)
      throw new o.Z({
        closeCode: d.$VG.CLOSE_UNSUPPORTED
      }, 'Not connected');
    return this.handleClose(e, s);
  default:
    throw new o.Z({
      closeCode: d.$VG.CLOSE_UNSUPPORTED
    }, 'Invalid opcode');
}
  }
  constructor(e, t, i, l) {
var c;
super(), c = this, u(this, 'validateSocketClient', void 0), u(this, 'logger', void 0), u(this, 'createPostMessageProxySocket', void 0), u(this, 'onFrameHandled', void 0), u(this, 'handshakeFailureTimeoutId', void 0), u(this, 'disconnectSocket', function(e, t) {
  var n, i;
  let a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
  c.emit('disconnect', e, a ? void 0 : t), e.close(t.code, null !== (n = t.message) && void 0 !== n ? n : 'Unknown');
  let [s] = null !== (i = Array.from(E.entries()).find(t => {
    let [n, i] = t;
    return i === e;
  })) && void 0 !== i ? i : [
    null,
    null
  ];
  null != s && E.delete(s);
}), u(this, 'handleIFrameMount', e => {
  let {
    id: t
  } = e;
  h.add(t), this.handshakeFailureTimeoutId = setTimeout(() => {
    Array.from(a.ZP.getSelfEmbeddedActivities().entries()).forEach(e => {
      let [t, n] = e;
      s.default.track(d.rMx.ACTIVITY_HANDSHAKE_TIMED_OUT, {
        application_id: t,
        channel_id: n.channelId,
        guild_id: n.guildId,
        timeout_ms: _
      });
    });
  }, _);
}), u(this, 'handleIFrameUnmount', e => {
  var t;
  let {
    id: n
  } = e;
  h.delete(n);
  let [i, a] = null !== (t = Array.from(E.entries()).find(e => {
    let [t, i] = e;
    return i.frameId === n;
  })) && void 0 !== t ? t : [
    null,
    null
  ];
  null != a && null != i && (this.disconnectSocket(a, {
    code: d.$VG.CLOSE_NORMAL,
    message: 'iFrame gone'
  }, !0), E.delete(i));
}), u(this, 'handleMessage', (e, t, n) => {
  let i = E.get(t);
  try {
    this.routeEvent(i, t, e, n);
  } catch (e) {
    if (e instanceof o.Z && e.errorCode === d.lTL.INVALID_PAYLOAD)
      throw e;
    null != i ? this.disconnectSocket(i, {
      code: e.code,
      message: e.message
    }, !0) : m(t, {
      code: e.code,
      message: e.message
    }, n);
  }
}), u(this, 'handleFrame', (e, t, n) => {
  var i;
  let a;
  if (e !== t.origin)
    throw new o.Z({
      closeCode: d.$VG.INVALID_ORIGIN
    }, 'Origin has changed');
  try {
    a = 'string' == typeof n ? JSON.parse(n) : n;
  } catch (e) {
    throw new o.Z({
      closeCode: d.$VG.CLOSE_UNSUPPORTED
    }, 'Payload not recognized encoding');
  }
  null === (i = this.onFrameHandled) || void 0 === i || i.call(this, a, this.logger, t), this.emit('request', t, a);
}), u(this, 'handleHandshake', async (e, t, i) => {
  let a;
  null != this.handshakeFailureTimeoutId && clearTimeout(this.handshakeFailureTimeoutId);
  let s = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
  try {
    s.assert(t, s.object().required().keys({
      v: s.number().min(1).max(1).required(),
      encoding: s.string().equal('json').optional(),
      client_id: s.string().required(),
      frame_id: s.string().required()
    }));
  } catch (e) {
    throw new o.Z({
      closeCode: d.$VG.CLOSE_UNSUPPORTED
    }, e.message);
  }
  let r = t.frame_id;
  if (!h.has(r))
    throw this.logger.error('Unrecognized frame ID '.concat(r)), new o.Z({
      closeCode: d.$VG.CLOSE_UNSUPPORTED
    }, 'Unrecognized frame ID '.concat(r));
  try {
    var l;
    a = this.createPostMessageProxySocket({
      origin: e,
      postMessageToRPCClient: i,
      frameId: r,
      version: Number(t.v),
      logger: this.logger,
      postClose: m,
      encoding: null !== (l = t.encoding) && void 0 !== l ? l : 'json'
    });
  } catch (e) {
    throw this.logger.error('Error opening window socket '.concat(e)), e;
  }
  this.logger.info('Socket Opened: '.concat(a.id));
  try {
    if (await this.validateSocketClient(a, e, t.client_id), !h.has(r))
      throw this.logger.error('Frame ID '.concat(r, ' no longer exists')), new o.Z({
        closeCode: d.$VG.CLOSE_UNSUPPORTED
      }, 'Unrecognized frame ID '.concat(r));
    E.set(e, a), h.delete(r), this.emit('connect', a), this.logger.info('Socket Validated: '.concat(a.id));
  } catch (e) {
    throw this.logger.info('Socket Closed: '.concat(a.id, ', ').concat(e.message)), e;
  }
}), u(this, 'handleClose', async (e, t) => {
  let i = (await n.e('56268').then(n.t.bind(n, 826753, 23))).default;
  try {
    i.assert(t, i.object().required().unknown(!0).keys({
      code: i.number().valid(Object.values(d.$VG)).required(),
      message: i.string().optional()
    }));
  } catch (e) {
    throw new o.Z({
      closeCode: d.$VG.CLOSE_UNSUPPORTED
    }, e.message);
  }
  this.disconnectSocket(e, t);
}), r.S.subscribe(d.CkL.IFRAME_MOUNT, this.handleIFrameMount), r.S.subscribe(d.CkL.IFRAME_UNMOUNT, this.handleIFrameUnmount), this.validateSocketClient = e, this.logger = t, this.createPostMessageProxySocket = i, this.onFrameHandled = l;
  }
}