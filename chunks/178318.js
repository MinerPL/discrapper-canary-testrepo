let i, a;
n(47120), n(610138), n(216116), n(78328), n(815648), n(653041), n(411104);
var s = n(836560),
  r = n(392711),
  l = n.n(r),
  o = n(729594),
  c = n(570140),
  d = n(710845),
  u = n(857192),
  _ = n(998502),
  E = n(996106),
  h = n(901077),
  m = n(76238),
  I = n(852926),
  g = n(186901),
  p = n(981631),
  T = n(413135).Buffer;

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
try {
  i = _.ZP.requireModule('discord_erlpack');
} catch (e) {
  try {
i = _.ZP.requireModule('erlpack');
  } catch (e) {}
}
let f = _.ZP.requireModule('discord_rpc').RPCWebSocket,
  C = window.GLOBAL_ENV.MARKETING_ENDPOINT,
  N = new d.Z('RPCServer:WSS'),
  A = [];

function v(e) {
  return 'function' == typeof e ? e() : e;
}

function Z() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
t = e > 0 ? void 0 : () => {
  if (!v(a.listening))
    return;
  let e = a.address().port;
  N.info('Starting on '.concat(e)), c.Z.dispatch({
    type: 'RPC_SERVER_READY',
    port: e
  });
};
  a.listen(p.V6Z + e % p.frH, '127.0.0.1', t);
}

function L(e, t, n) {
  let i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 200,
a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
s = null != v(e.headers).origin ? {
  'Access-Control-Allow-Origin': v(e.headers).origin,
  'Access-Control-Allow-Credentials': 'true',
  'Access-Control-Allow-Methods': 'POST, GET, PUT, PATCH, DELETE',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization'
} : {};
  n = n ? JSON.stringify(n) : '', i = 200 === i && 0 === n.length ? 204 : i, t.setHeader('Content-Length', T.byteLength(n).toString()), t.setHeader('Content-Type', 'application/json'), t.writeHead(i, {
...a,
...s
  }), t.end(n);
}

function O(e, t, n, i) {
  let a = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 0;
  L(e, t, {
code: a,
message: i
  }, n);
}
class R extends m.Z {
  send(e) {
(u.default.isLoggingOverlayEvents || e.cmd !== p.Etm.OVERLAY && e.evt !== p.zMe.OVERLAY) && N.info('Socket Emit: '.concat(this.id), (0, h.Z)(e)), null != i && 'etf' === this.encoding ? this._socket.send(i.pack(e), {
  binary: !0
}) : this._socket.send(JSON.stringify(e));
  }
  close(e, t) {
this._socket.close(e, t);
  }
  constructor(e, t, n) {
if (super('ws', t, n), S(this, '_socket', void 0), -1 === [
    'etf',
    'json'
  ].indexOf(n))
  throw new E.Z({
    closeCode: p.$VG.INVALID_ENCODING
  }, 'Invalid Encoding: '.concat(n));
if ('etf' === n && null == i)
  throw new E.Z({
    closeCode: p.$VG.INVALID_ENCODING
  }, 'Erlpack cannot be used on this client');
this._socket = e;
  }
}
class x extends m.Z {
  send(e) {
(u.default.isLoggingOverlayEvents || e.cmd !== p.Etm.OVERLAY) && N.info('Socket Emit: '.concat(this.id), e), this._sendCallback(e);
  }
  close(e, t) {
this._closeCallback(t, e);
  }
  constructor(e, t, n, i) {
if (super('http', n, i), S(this, '_sendCallback', void 0), S(this, '_closeCallback', void 0), 'json' !== i)
  throw new E.Z({
    closeCode: p.$VG.INVALID_ENCODING
  }, 'Invalid Encoding: '.concat(i));
this._sendCallback = e, this._closeCallback = t;
  }
}
class b extends s.EventEmitter {
  handleRequest(e, t) {
let [n, i] = v(e.url).split('?'), a = v(e.method);
if ('/rpc' === n && 'OPTIONS' === a) {
  L(e, t, {
    body: ''
  });
  return;
}
let s = 'POST' === a;
if ('/rpc' === n && ('GET' === a || s)) {
  let n = new URLSearchParams(i),
    a = s ? v(e.headers)['content-type'].split('/')[1] : 'json',
    l = function() {
      var e;
      let {
        protocol: i,
        host: a
      } = o.parse(null !== (e = n.get('callback')) && void 0 !== e ? e : '');
      i === location.protocol && a === location.host ? t.setHeader('Location', n.get('callback')) : t.setHeader('Location', C), t.writeHead(301), t.end();
    },
    c = new x(s ? L.bind(null, e, t) : l, s ? O.bind(null, e, t, 400) : l, Number(n.get('v')), a);
  if (s)
    (0, I.em)(c, v(e.headers).origin, n.get('client_id')).then(() => {
      let n = '';
      e.on('data', e => n += e), e.on('error', () => O(e, t, 500, 'Internal Server Error')), e.on('end', () => this.handleMessage(c, n));
    }).catch(e => {
      let {
        code: t,
        message: n
      } = e;
      return c.close(t, n);
    });
  else {
    var r;
    c.authorization.scopes = [g.CN], this.handleMessage(c, decodeURIComponent(null !== (r = n.get('payload')) && void 0 !== r ? r : ''));
  }
  return;
}
O(e, t, 404, 'Not Found');
  }
  handleConnection(e) {
var t, n;
let i;
let a = new URLSearchParams(v(e.upgradeReq).url.split('?')[1]),
  s = null !== (t = v(e.upgradeReq).headers.origin) && void 0 !== t ? t : '';
try {
  i = new R(e, Number(a.get('v')), null !== (n = a.get('encoding')) && void 0 !== n ? n : 'json');
} catch (t) {
  e.close(t.code, t.message);
  return;
}
N.info('Socket Opened: '.concat(i.id)), e.on('error', e => N.error('WS Error: '.concat(e.message))), e.on('close', (e, t) => {
  N.info('Socket Closed: '.concat(i.id, ', code ').concat(e, ', message ').concat(t)), l().remove(A, e => e === i), this.emit('disconnect', i);
}), (0, I.em)(i, s, a.get('client_id')).then(() => {
  A.push(i), e.on('message', e => this.handleMessage(i, e)), this.emit('connect', i);
}).catch(e => {
  let {
    code: t,
    message: n
  } = e;
  return i.close(t, n);
});
  }
  handleMessage(e, t) {
let n;
try {
  if (null != i && 'etf' === e.encoding)
    n = i.unpack(t);
  else if ('string' == typeof t)
    n = JSON.parse(t);
  else
    throw Error();
} catch (t) {
  e.close(p.$VG.CLOSE_UNSUPPORTED, 'Payload not '.concat(e.encoding));
  return;
}
(u.default.isLoggingOverlayEvents || n.cmd !== p.Etm.OVERLAY) && N.info('Socket Message: '.concat(e.id), (0, h.Z)(n)), this.emit('request', e, n);
  }
  constructor() {
var e;
super();
let t = 0;
(a = f.http.createServer()).on('error', e => {
  N.error('Error: '.concat(e.message)), ('EADDRINUSE' === e.code || e.message.includes('EADDRINUSE')) && setTimeout(() => Z(++t), 1000);
}), a.on('request', this.handleRequest.bind(this)), Z(t);
let n = {
  instanceId: null !== (e = a.instanceId) && void 0 !== e ? e : 0,
  server: a
};
new f.ws.Server(n).on('connection', e => this.handleConnection(e));
  }
}
t.Z = new b();