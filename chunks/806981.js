var r = n(814033),
  i = n(685053),
  a = i.getNAF,
  s = i.getJSF,
  o = i.assert;

function l(e, t) {
  this.type = e, this.p = new r(t.p, 16), this.red = t.prime ? r.red(t.prime) : r.mont(this.p), this.zero = new r(0).toRed(this.red), this.one = new r(1).toRed(this.red), this.two = new r(2).toRed(this.red), this.n = t.n && new r(t.n, 16), this.g = t.g && this.pointFromJSON(t.g, t.gRed), this._wnafT1 = [, , , , ], this._wnafT2 = [, , , , ], this._wnafT3 = [, , , , ], this._wnafT4 = [, , , , ], this._bitLength = this.n ? this.n.bitLength() : 0;
  var n = this.n && this.p.div(this.n);
  !n || n.cmpn(100) > 0 ? this.redN = null : (this._maxwellTrick = !0, this.redN = this.n.toRed(this.red));
}

function u(e, t) {
  this.curve = e, this.type = t, this.precomputed = null;
}
e.exports = l, l.prototype.point = function() {
  throw Error('Not implemented');
}, l.prototype.validate = function() {
  throw Error('Not implemented');
}, l.prototype._fixedNafMul = function(e, t) {
  o(e.precomputed);
  var n, r, i = e._getDoubles(),
s = a(t, 1, this._bitLength),
l = (1 << i.step + 1) - (i.step % 2 == 0 ? 2 : 1);
  l /= 3;
  var u = [];
  for (n = 0; n < s.length; n += i.step) {
r = 0;
for (var c = n + i.step - 1; c >= n; c--)
  r = (r << 1) + s[c];
u.push(r);
  }
  for (var d = this.jpoint(null, null, null), _ = this.jpoint(null, null, null), E = l; E > 0; E--) {
for (n = 0; n < u.length; n++)
  (r = u[n]) === E ? _ = _.mixedAdd(i.points[n]) : r === -E && (_ = _.mixedAdd(i.points[n].neg()));
d = d.add(_);
  }
  return d.toP();
}, l.prototype._wnafMul = function(e, t) {
  var n = 4,
r = e._getNAFPoints(n);
  n = r.wnd;
  for (var i = r.points, s = a(t, n, this._bitLength), l = this.jpoint(null, null, null), u = s.length - 1; u >= 0; u--) {
for (var c = 0; u >= 0 && 0 === s[u]; u--)
  c++;
if (u >= 0 && c++, l = l.dblp(c), u < 0)
  break;
var d = s[u];
o(0 !== d), l = 'affine' === e.type ? d > 0 ? l.mixedAdd(i[d - 1 >> 1]) : l.mixedAdd(i[-d - 1 >> 1].neg()) : d > 0 ? l.add(i[d - 1 >> 1]) : l.add(i[-d - 1 >> 1].neg());
  }
  return 'affine' === e.type ? l.toP() : l;
}, l.prototype._wnafMulAdd = function(e, t, n, r, i) {
  var o, l, u, c = this._wnafT1,
d = this._wnafT2,
_ = this._wnafT3,
E = 0;
  for (o = 0; o < r; o++) {
var f = (u = t[o])._getNAFPoints(e);
c[o] = f.wnd, d[o] = f.points;
  }
  for (o = r - 1; o >= 1; o -= 2) {
var h = o - 1,
  p = o;
if (1 !== c[h] || 1 !== c[p]) {
  _[h] = a(n[h], c[h], this._bitLength), _[p] = a(n[p], c[p], this._bitLength), E = Math.max(_[h].length, E), E = Math.max(_[p].length, E);
  continue;
}
var m = [
  t[h],
  null,
  null,
  t[p]
];
0 === t[h].y.cmp(t[p].y) ? (m[1] = t[h].add(t[p]), m[2] = t[h].toJ().mixedAdd(t[p].neg())) : 0 === t[h].y.cmp(t[p].y.redNeg()) ? (m[1] = t[h].toJ().mixedAdd(t[p]), m[2] = t[h].add(t[p].neg())) : (m[1] = t[h].toJ().mixedAdd(t[p]), m[2] = t[h].toJ().mixedAdd(t[p].neg()));
var I = [
    -3,
    -1,
    -5,
    -7,
    0,
    7,
    5,
    1,
    3
  ],
  T = s(n[h], n[p]);
for (l = 0, E = Math.max(T[0].length, E), _[h] = Array(E), _[p] = Array(E); l < E; l++) {
  var g = 0 | T[0][l],
    S = 0 | T[1][l];
  _[h][l] = I[(g + 1) * 3 + (S + 1)], _[p][l] = 0, d[h] = m;
}
  }
  var A = this.jpoint(null, null, null),
N = this._wnafT4;
  for (o = E; o >= 0; o--) {
for (var v = 0; o >= 0;) {
  var O = !0;
  for (l = 0; l < r; l++)
    N[l] = 0 | _[l][o], 0 !== N[l] && (O = !1);
  if (!O)
    break;
  v++, o--;
}
if (o >= 0 && v++, A = A.dblp(v), o < 0)
  break;
for (l = 0; l < r; l++) {
  var R = N[l];
  if (0 !== R) {
    R > 0 ? u = d[l][R - 1 >> 1] : R < 0 && (u = d[l][-R - 1 >> 1].neg());
    A = 'affine' === u.type ? A.mixedAdd(u) : A.add(u);
  }
}
  }
  for (o = 0; o < r; o++)
d[o] = null;
  return i ? A : A.toP();
}, l.BasePoint = u, u.prototype.eq = function() {
  throw Error('Not implemented');
}, u.prototype.validate = function() {
  return this.curve.validate(this);
}, l.prototype.decodePoint = function(e, t) {
  e = i.toArray(e, t);
  var n = this.p.byteLength();
  if ((4 === e[0] || 6 === e[0] || 7 === e[0]) && e.length - 1 == 2 * n)
return 6 === e[0] ? o(e[e.length - 1] % 2 == 0) : 7 === e[0] && o(e[e.length - 1] % 2 == 1), this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
  if ((2 === e[0] || 3 === e[0]) && e.length - 1 === n)
return this.pointFromX(e.slice(1, 1 + n), 3 === e[0]);
  throw Error('Unknown point format');
}, u.prototype.encodeCompressed = function(e) {
  return this.encode(e, !0);
}, u.prototype._encode = function(e) {
  var t = this.curve.p.byteLength(),
n = this.getX().toArray('be', t);
  return e ? [this.getY().isEven() ? 2 : 3].concat(n) : [4].concat(n, this.getY().toArray('be', t));
}, u.prototype.encode = function(e, t) {
  return i.encode(this._encode(t), e);
}, u.prototype.precompute = function(e) {
  if (this.precomputed)
return this;
  var t = {
doubles: null,
naf: null,
beta: null
  };
  return t.naf = this._getNAFPoints(8), t.doubles = this._getDoubles(4, e), t.beta = this._getBeta(), this.precomputed = t, this;
}, u.prototype._hasDoubles = function(e) {
  if (!this.precomputed)
return !1;
  var t = this.precomputed.doubles;
  return !!t && t.points.length >= Math.ceil((e.bitLength() + 1) / t.step);
}, u.prototype._getDoubles = function(e, t) {
  if (this.precomputed && this.precomputed.doubles)
return this.precomputed.doubles;
  for (var n = [this], r = this, i = 0; i < t; i += e) {
for (var a = 0; a < e; a++)
  r = r.dbl();
n.push(r);
  }
  return {
step: e,
points: n
  };
}, u.prototype._getNAFPoints = function(e) {
  if (this.precomputed && this.precomputed.naf)
return this.precomputed.naf;
  for (var t = [this], n = (1 << e) - 1, r = 1 === n ? null : this.dbl(), i = 1; i < n; i++)
t[i] = t[i - 1].add(r);
  return {
wnd: e,
points: t
  };
}, u.prototype._getBeta = function() {
  return null;
}, u.prototype.dblp = function(e) {
  for (var t = this, n = 0; n < e; n++)
t = t.dbl();
  return t;
};