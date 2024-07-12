n.d(t, {
  I: function() {
return _;
  }
}), n(653041), n(411104), n(518263), n(970173), n(520712), n(268111), n(941497), n(32026), n(480839), n(744285), n(492257), n(873817), n(47120);
var r = n(710845),
  i = n(374023),
  a = n(420491),
  o = n(988348);

function s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
value: n,
enumerable: !0,
configurable: !0,
writable: !0
  }) : e[t] = n, e;
}
let {
  NativeModules: l
} = {}, u = [];
class c {
  static canUse() {
return !1;
  }
  bindWebSocket(e) {}
  feed(e) {}
  dataReady(e) {
this._onDataReady = e;
  }
  constructor(e) {
s(this, '_onDataReady', void 0), s(this, '_gatewayEncoding', void 0), this._onDataReady = null, this._gatewayEncoding = e;
  }
}
u.push(class extends c {
  static canUse() {
return a.Z.shouldUseZstd();
  }
  getAlgorithm() {
return 'zstd-stream';
  }
  usesLegacyCompression() {
return !1;
  }
  feed(e) {
let t;
if (null == this._stream)
  throw Error('Trying to decompress with zstd but did not initialize with it');
if (!(e instanceof ArrayBuffer))
  throw Error('Expected array buffer, but got ' + typeof e);
t = this._stream.decompress(e), null != this._decoder && (t = this._decoder.decode(t)), null != this._onDataReady && this._onDataReady(t);
  }
  close() {}
  constructor(e) {
super(e), s(this, '_decoder', null), s(this, '_stream', void 0), this._gatewayEncoding.wantsString() ? this._decoder = new TextDecoder('utf-8') : this._decoder = null, this._stream = (0, o.Gz)();
  }
}), u.push(class extends c {
  static canUse() {
return void 0 !== window.Uint8Array;
  }
  getAlgorithm() {
return 'zlib-stream';
  }
  usesLegacyCompression() {
return !1;
  }
  feed(e) {
if (null == this._inflate)
  throw Error('Trying to feed to closed compression adapter');
if (null === this._onDataReady)
  throw Error('Cannot feed unless a data ready callback is registered.');
if (!(e instanceof ArrayBuffer))
  throw Error('Expected array buffer, but got ' + typeof e);
let t = new DataView(e),
  n = t.byteLength >= 4 && 65535 === t.getUint32(t.byteLength - 4, !1);
this._inflate.push(e, !!n && this._pako.Z_SYNC_FLUSH);
  }
  close() {
null != this._inflate && (this._inflate.onEnd = null, this._inflate.chunks = []), this._inflate = null;
  }
  handleFlushEnd(e) {
let t;
let n = this._pako,
  i = this._inflate;
if (null == i) {
  new r.Z('GatewayCompressionHandler').error('flush end happened on closed compression adapter');
  return;
}
if (e !== n.Z_OK)
  throw Error('zlib error, '.concat(e, ', ').concat(i.strm.msg));
let {
  chunks: a
} = i, o = a.length;
if (this._gatewayEncoding.wantsString())
  t = o > 1 ? a.join('') : a[0];
else if (o > 1) {
  let e = 0;
  for (let t = 0; t < o; t++)
    e += a[t].length;
  let n = new Uint8Array(e),
    r = 0;
  for (let e = 0; e < o; e++) {
    let t = a[e];
    n.set(t, r), r += t.length;
  }
  t = n;
} else
  t = a[0];
a.length = 0, null != this._onDataReady && this._onDataReady(t);
  }
  constructor(e) {
super(e), s(this, '_inflate', void 0), s(this, '_pako', n(457854)), s(this, '_usesZstd', !1), s(this, '_zstdDecoder', null), s(this, '_zstdStream', null), this._inflate = new this._pako.Inflate({
  chunkSize: 65536,
  to: this._gatewayEncoding.wantsString() ? 'string' : ''
}), this._inflate.onEnd = this.handleFlushEnd.bind(this);
  }
}), u.push(class extends c {
  static canUse() {
return !0;
  }
  getAlgorithm() {
return null;
  }
  usesLegacyCompression() {
return !0;
  }
  feed(e) {
let t = this._pako;
if (e instanceof ArrayBuffer && this._gatewayEncoding.wantsString() && (e = t.inflate(e, {
    to: 'string'
  })), null == this._onDataReady)
  throw Error('Cannot feed unless a data ready callback is registered.');
this._onDataReady(e);
  }
  close() {}
  constructor(...e) {
super(...e), s(this, '_pako', n(457854));
  }
}), u.push(class extends c {
  static canUse() {
return !1;
  }
  bindWebSocket(e) {
this.close(), this._socketId = e._socketId, this._usesZstd ? l.DCDCompressionManager.enableZstdStreamSupport(this._socketId, 0) : l.DCDCompressionManager.enableZlibStreamSupport(this._socketId);
  }
  getAlgorithm() {
return this._usesZstd ? 'zstd-stream' : 'zlib-stream';
  }
  usesLegacyCompression() {
return !1;
  }
  feed(e) {
if (null == this._onDataReady)
  throw Error('Cannot feed unless a data ready callback is registered.');
null !== e && this._onDataReady(e);
  }
  close() {
let e = this._socketId;
this._socketId = null, null !== e && l.DCDCompressionManager.disableZlibStreamSupport(e);
  }
  constructor(e) {
super(e), s(this, '_socketId', void 0), s(this, '_usesZstd', void 0), this._usesZstd = a.Z.shouldUseZstd(), this._socketId = null;
  }
});
class d extends c {
  static canUse() {
return !0;
  }
  getAlgorithm() {
return null;
  }
  usesLegacyCompression() {
return !1;
  }
  feed(e) {
if (null == this._onDataReady)
  throw Error('Cannot feed unless a data ready callback is registered.');
this._onDataReady(e);
  }
  close() {}
}

function _(e) {
  if (i.s.isDiscordGatewayPlaintextSet())
return new d(e);
  for (var t of u)
if (t.canUse())
  return new t(e);
  return new d(e);
}
u.push(d);