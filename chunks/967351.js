n(47120), n(411104);
var i = n(413135),
  a = n(836560),
  s = n(392711),
  r = n.n(s),
  l = n(710845),
  o = n(998502),
  c = n(901077),
  d = n(76238),
  u = n(852926),
  _ = n(981631);
let h = o.ZP.requireModule('discord_rpc').RPCIPC,
  E = new l.Z('RPCServer:IPC'),
  I = {
HANDSHAKE: 0,
FRAME: 1,
CLOSE: 2,
PING: 3,
PONG: 4
  };

function m(e, t) {
  null != e.setHandshakeComplete ? e.setHandshakeComplete(t) : e._didHandshake = t;
}

function g(e) {
  return null != e.getHandshakeComplete ? e.getHandshakeComplete() : e._didHandshake;
}

function p(e) {
  return new Promise((t, n) => {
'string' == typeof e && (e = h.net.createConnection(e)), e.pause(), e.on('readable', () => {
  try {
    S(e);
  } catch (t) {
    e.end(T(I.CLOSE, {
      code: 1003,
      message: t.message
    })), e.destroy();
  }
});
let i = () => {
    try {
      e.end(), e.destroy();
    } catch (e) {}
  },
  a = Promise.race([
    new Promise(t => e.on('error', () => t())),
    new Promise((t, n) => {
      e.on('pong', () => n(Error('socket responded with pong')));
    }),
    new Promise((e, t) => {
      setTimeout(() => t(Error('socket alive timeout')), 1000);
    })
  ]).then(() => {
    i();
  }, e => {
    throw i(), e;
  });
return e.write(T(I.PING, r().uniqueId())), a.then(t, n);
  });
}

function T(e, t) {
  var n;
  t = JSON.stringify(t);
  let a = i.Buffer.byteLength(t),
s = i.Buffer.alloc(8 + a);
  return s.writeInt32LE(e, 0), s.writeInt32LE(a, 4), s.write(t, 8, a), (n = s).buffer.slice(n.byteOffset, n.byteOffset + n.byteLength);
}

function S(e) {
  let t = e.read(8);
  if (null == t)
return;
  let n = i.Buffer.from(t),
a = n.readInt32LE(0),
s = n.readInt32LE(4);
  if (!Object.values(I).includes(a) || s < 0)
throw Error('protocol error');
  if (null == (t = e.read(s)))
throw Error('data size does not match what was received');
  let r = JSON.parse((n = i.Buffer.from(t)).toString());
  switch (a) {
case I.PING:
  e.emit('ping', r), e.write(T(I.PONG, r));
  break;
case I.PONG:
  e.emit('pong', r);
  break;
case I.HANDSHAKE:
  if (g(e))
    throw Error('already did handshake');
  m(e, !0), e.emit('handshake', r);
  break;
case I.FRAME:
  if (!g(e))
    throw Error('did not handshake');
  e.emit('request', r);
  break;
case I.CLOSE:
  e.end(), e.destroy();
  }
  S(e);
}
class f extends d.Z {
  send(e) {
E.info('Socket Emit: '.concat(this.id), (0, c.Z)(e)), this.socket.write(T(I.FRAME, e));
  }
  close(e, t) {
this.socket.end(T(I.CLOSE, {
  code: e,
  message: t
})), this.socket.destroy();
  }
  constructor(e, t, n) {
var i, a, s;
super('ipc', t, n), i = this, s = void 0, (a = 'socket') in i ? Object.defineProperty(i, a, {
  value: s,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : i[a] = s, this.socket = e;
  }
}
class C extends a.EventEmitter {
  handleConnection(e) {
m(e, !1), e.pause(), e.on('readable', () => {
  try {
    S(e);
  } catch (t) {
    e.end(T(I.CLOSE, {
      code: _.$VG.CLOSE_UNSUPPORTED,
      message: t.message
    })), e.destroy();
  }
}), e.once('handshake', t => {
  let n;
  let i = t.client_id,
    a = +t.v;
  try {
    n = new f(e, a, 'json');
  } catch (t) {
    e.end(T(I.CLOSE, {
      code: t.code,
      message: t.message
    })), e.destroy();
    return;
  }
  E.info('Socket Opened: '.concat(n.id)), e.on('error', e => E.error('Socket Error: '.concat(e.message))), e.on('close', () => {
    E.info('Socket Close: '.concat(n.id)), this.emit('disconnect', n);
  }), (0, u.em)(n, null, i).then(() => {
    e.on('request', e => {
      E.info('Socket Message: '.concat(n.id), (0, c.Z)(e)), this.emit('request', n, e);
    }), this.emit('connect', n);
  }).catch(e => {
    let {
      code: t,
      message: i
    } = e;
    return n.close(t, i);
  });
});
  }
  constructor() {
super();
let e = h.net.createServer(e => this.handleConnection(e));
e.on('error', e => E.error('Error: '.concat(e.message))), h.getAvailableSocket(p).then(t => {
  e.listen(t, () => {
    ('function' == typeof e.listening ? e.listening() : e.listening) && E.info('Starting on '.concat(e.address()));
  });
});
  }
}
t.Z = new C();