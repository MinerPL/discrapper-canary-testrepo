var r = n(21841),
  i = n(689118),
  a = n(726315),
  s = n(449348);

function o() {
  this.tmp = [, , ], this.keys = null;
}

function l(e) {
  s.call(this, e);
  var t = new o();
  this._desState = t, this.deriveKeys(t, e.key);
}
i(l, s), e.exports = l, l.create = function(e) {
  return new l(e);
};
var u = [
  1,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1,
  2,
  2,
  2,
  2,
  2,
  2,
  1
];
l.prototype.deriveKeys = function(e, t) {
  e.keys = Array(32), r.equal(t.length, this.blockSize, 'Invalid key length');
  var n = a.readUInt32BE(t, 0),
i = a.readUInt32BE(t, 4);
  a.pc1(n, i, e.tmp, 0), n = e.tmp[0], i = e.tmp[1];
  for (var s = 0; s < e.keys.length; s += 2) {
var o = u[s >>> 1];
n = a.r28shl(n, o), i = a.r28shl(i, o), a.pc2(n, i, e.keys, s);
  }
}, l.prototype._update = function(e, t, n, r) {
  var i = this._desState,
s = a.readUInt32BE(e, t),
o = a.readUInt32BE(e, t + 4);
  a.ip(s, o, i.tmp, 0), s = i.tmp[0], o = i.tmp[1], 'encrypt' === this.type ? this._encrypt(i, s, o, i.tmp, 0) : this._decrypt(i, s, o, i.tmp, 0), s = i.tmp[0], o = i.tmp[1], a.writeUInt32BE(n, s, r), a.writeUInt32BE(n, o, r + 4);
}, l.prototype._pad = function(e, t) {
  if (!1 === this.padding)
return !1;
  for (var n = e.length - t, r = t; r < e.length; r++)
e[r] = n;
  return !0;
}, l.prototype._unpad = function(e) {
  if (!1 === this.padding)
return e;
  for (var t = e[e.length - 1], n = e.length - t; n < e.length; n++)
r.equal(e[n], t);
  return e.slice(0, e.length - t);
}, l.prototype._encrypt = function(e, t, n, r, i) {
  for (var s = t, o = n, l = 0; l < e.keys.length; l += 2) {
var u = e.keys[l],
  c = e.keys[l + 1];
a.expand(o, e.tmp, 0), u ^= e.tmp[0], c ^= e.tmp[1];
var d = a.substitute(u, c),
  _ = a.permute(d),
  E = o;
o = (s ^ _) >>> 0, s = E;
  }
  a.rip(o, s, r, i);
}, l.prototype._decrypt = function(e, t, n, r, i) {
  for (var s = n, o = t, l = e.keys.length - 2; l >= 0; l -= 2) {
var u = e.keys[l],
  c = e.keys[l + 1];
a.expand(s, e.tmp, 0), u ^= e.tmp[0], c ^= e.tmp[1];
var d = a.substitute(u, c),
  _ = a.permute(d),
  E = s;
s = (o ^ _) >>> 0, o = E;
  }
  a.rip(s, o, r, i);
};