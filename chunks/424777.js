var r = n(814033),
  i = n(789188),
  a = n(685053),
  o = n(609513),
  s = n(526808),
  l = a.assert,
  u = n(175671),
  c = n(361879);

function d(e) {
  if (!(this instanceof d))
return new d(e);
  'string' == typeof e && (l(Object.prototype.hasOwnProperty.call(o, e), 'Unknown curve ' + e), e = o[e]), e instanceof o.PresetCurve && (e = {
curve: e
  }), this.curve = e.curve.curve, this.n = this.curve.n, this.nh = this.n.ushrn(1), this.g = this.curve.g, this.g = e.curve.g, this.g.precompute(e.curve.n.bitLength() + 1), this.hash = e.hash || e.curve.hash;
}
e.exports = d, d.prototype.keyPair = function(e) {
  return new u(this, e);
}, d.prototype.keyFromPrivate = function(e, t) {
  return u.fromPrivate(this, e, t);
}, d.prototype.keyFromPublic = function(e, t) {
  return u.fromPublic(this, e, t);
}, d.prototype.genKeyPair = function(e) {
  !e && (e = {});
  for (var t = new i({
  hash: this.hash,
  pers: e.pers,
  persEnc: e.persEnc || 'utf8',
  entropy: e.entropy || s(this.hash.hmacStrength),
  entropyEnc: e.entropy && e.entropyEnc || 'utf8',
  nonce: this.n.toArray()
}), n = this.n.byteLength(), a = this.n.sub(new r(2));;) {
var o = new r(t.generate(n));
if (!(o.cmp(a) > 0))
  return o.iaddn(1), this.keyFromPrivate(o);
  }
}, d.prototype._truncateToN = function(e, t) {
  var n = 8 * e.byteLength() - this.n.bitLength();
  return (n > 0 && (e = e.ushrn(n)), !t && e.cmp(this.n) >= 0) ? e.sub(this.n) : e;
}, d.prototype.sign = function(e, t, n, a) {
  'object' == typeof n && (a = n, n = null), !a && (a = {}), t = this.keyFromPrivate(t, n), e = this._truncateToN(new r(e, 16));
  for (var o = this.n.byteLength(), s = t.getPrivate().toArray('be', o), l = e.toArray('be', o), u = new i({
  hash: this.hash,
  entropy: s,
  nonce: l,
  pers: a.pers,
  persEnc: a.persEnc || 'utf8'
}), d = this.n.sub(new r(1)), _ = 0;; _++) {
var E = a.k ? a.k(_) : new r(u.generate(this.n.byteLength()));
if (0 >= (E = this._truncateToN(E, !0)).cmpn(1) || E.cmp(d) >= 0)
  continue;
var f = this.g.mul(E);
if (f.isInfinity())
  continue;
var h = f.getX(),
  p = h.umod(this.n);
if (0 !== p.cmpn(0)) {
  var m = E.invm(this.n).mul(p.mul(t.getPrivate()).iadd(e));
  if (0 !== (m = m.umod(this.n)).cmpn(0)) {
    var I = (f.getY().isOdd() ? 1 : 0) | (0 !== h.cmp(p) ? 2 : 0);
    return a.canonical && m.cmp(this.nh) > 0 && (m = this.n.sub(m), I ^= 1), new c({
      r: p,
      s: m,
      recoveryParam: I
    });
  }
}
  }
}, d.prototype.verify = function(e, t, n, i) {
  e = this._truncateToN(new r(e, 16)), n = this.keyFromPublic(n, i);
  var a, o = (t = new c(t, 'hex')).r,
s = t.s;
  if (0 > o.cmpn(1) || o.cmp(this.n) >= 0 || 0 > s.cmpn(1) || s.cmp(this.n) >= 0)
return !1;
  var l = s.invm(this.n),
u = l.mul(e).umod(this.n),
d = l.mul(o).umod(this.n);
  if (!this.curve._maxwellTrick)
return !(a = this.g.mulAdd(u, n.getPublic(), d)).isInfinity() && 0 === a.getX().umod(this.n).cmp(o);
  return !(a = this.g.jmulAdd(u, n.getPublic(), d)).isInfinity() && a.eqXToP(o);
}, d.prototype.recoverPubKey = function(e, t, n, i) {
  l((3 & n) === n, 'The recovery param is more than two bits'), t = new c(t, i);
  var a = this.n,
o = new r(e),
s = t.r,
u = t.s,
d = 1 & n,
_ = n >> 1;
  if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && _)
throw Error('Unable to find sencond key candinate');
  s = _ ? this.curve.pointFromX(s.add(this.curve.n), d) : this.curve.pointFromX(s, d);
  var E = t.r.invm(a),
f = a.sub(o).mul(E).umod(a),
h = u.mul(E).umod(a);
  return this.g.mulAdd(f, s, h);
}, d.prototype.getKeyRecoveryParam = function(e, t, n, r) {
  if (null !== (t = new c(t, r)).recoveryParam)
return t.recoveryParam;
  for (var i, a = 0; a < 4; a++) {
try {
  i = this.recoverPubKey(e, t, a);
} catch (e) {
  continue;
}
if (i.eq(n))
  return a;
  }
  throw Error('Unable to find valid recovery factor');
};