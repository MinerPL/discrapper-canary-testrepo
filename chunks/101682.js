var r = n(685053),
  i = n(814033),
  a = n(689118),
  o = n(806981),
  s = r.assert;

function l(e) {
  o.call(this, 'short', e), this.a = new i(e.a, 16).toRed(this.red), this.b = new i(e.b, 16).toRed(this.red), this.tinv = this.two.redInvm(), this.zeroA = 0 === this.a.fromRed().cmpn(0), this.threeA = 0 === this.a.fromRed().sub(this.p).cmpn(-3), this.endo = this._getEndomorphism(e), this._endoWnafT1 = [, , , , ], this._endoWnafT2 = [, , , , ];
}

function u(e, t, n, r) {
  o.BasePoint.call(this, e, 'affine'), null === t && null === n ? (this.x = null, this.y = null, this.inf = !0) : (this.x = new i(t, 16), this.y = new i(n, 16), r && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), this.inf = !1);
}

function c(e, t, n, r) {
  o.BasePoint.call(this, e, 'jacobian'), null === t && null === n && null === r ? (this.x = this.curve.one, this.y = this.curve.one, this.z = new i(0)) : (this.x = new i(t, 16), this.y = new i(n, 16), this.z = new i(r, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.zOne = this.z === this.curve.one;
}
a(l, o), e.exports = l, l.prototype._getEndomorphism = function(e) {
  if (this.zeroA && this.g && this.n && 1 === this.p.modn(3)) {
if (e.beta)
  t = new i(e.beta, 16).toRed(this.red);
else {
  var t, n, r, a = this._getEndoRoots(this.p);
  t = (t = 0 > a[0].cmp(a[1]) ? a[0] : a[1]).toRed(this.red);
}
if (e.lambda)
  n = new i(e.lambda, 16);
else {
  var o = this._getEndoRoots(this.n);
  0 === this.g.mul(o[0]).x.cmp(this.g.x.redMul(t)) ? n = o[0] : (n = o[1], s(0 === this.g.mul(n).x.cmp(this.g.x.redMul(t))));
}
return r = e.basis ? e.basis.map(function(e) {
  return {
    a: new i(e.a, 16),
    b: new i(e.b, 16)
  };
}) : this._getEndoBasis(n), {
  beta: t,
  lambda: n,
  basis: r
};
  }
}, l.prototype._getEndoRoots = function(e) {
  var t = e === this.p ? this.red : i.mont(e),
n = new i(2).toRed(t).redInvm(),
r = n.redNeg(),
a = new i(3).toRed(t).redNeg().redSqrt().redMul(n);
  return [
r.redAdd(a).fromRed(),
r.redSub(a).fromRed()
  ];
}, l.prototype._getEndoBasis = function(e) {
  for (var t, n, r, a, o, s, l, u, c, d = this.n.ushrn(Math.floor(this.n.bitLength() / 2)), _ = e, E = this.n.clone(), f = new i(1), h = new i(0), p = new i(0), m = new i(1), I = 0; 0 !== _.cmpn(0);) {
var T = E.div(_);
u = E.sub(T.mul(_)), c = p.sub(T.mul(f));
var g = m.sub(T.mul(h));
if (!r && 0 > u.cmp(d))
  t = l.neg(), n = f, r = u.neg(), a = c;
else if (r && 2 == ++I)
  break;
l = u, E = _, _ = u, p = f, f = c, m = h, h = g;
  }
  o = u.neg(), s = c;
  var S = r.sqr().add(a.sqr());
  return o.sqr().add(s.sqr()).cmp(S) >= 0 && (o = t, s = n), r.negative && (r = r.neg(), a = a.neg()), o.negative && (o = o.neg(), s = s.neg()), [{
  a: r,
  b: a
},
{
  a: o,
  b: s
}
  ];
}, l.prototype._endoSplit = function(e) {
  var t = this.endo.basis,
n = t[0],
r = t[1],
i = r.b.mul(e).divRound(this.n),
a = n.b.neg().mul(e).divRound(this.n),
o = i.mul(n.a),
s = a.mul(r.a),
l = i.mul(n.b),
u = a.mul(r.b);
  return {
k1: e.sub(o).sub(s),
k2: l.add(u).neg()
  };
}, l.prototype.pointFromX = function(e, t) {
  !(e = new i(e, 16)).red && (e = e.toRed(this.red));
  var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
r = n.redSqrt();
  if (0 !== r.redSqr().redSub(n).cmp(this.zero))
throw Error('invalid point');
  var a = r.fromRed().isOdd();
  return (t && !a || !t && a) && (r = r.redNeg()), this.point(e, r);
}, l.prototype.validate = function(e) {
  if (e.inf)
return !0;
  var t = e.x,
n = e.y,
r = this.a.redMul(t),
i = t.redSqr().redMul(t).redIAdd(r).redIAdd(this.b);
  return 0 === n.redSqr().redISub(i).cmpn(0);
}, l.prototype._endoWnafMulAdd = function(e, t, n) {
  for (var r = this._endoWnafT1, i = this._endoWnafT2, a = 0; a < e.length; a++) {
var o = this._endoSplit(t[a]),
  s = e[a],
  l = s._getBeta();
o.k1.negative && (o.k1.ineg(), s = s.neg(!0)), o.k2.negative && (o.k2.ineg(), l = l.neg(!0)), r[2 * a] = s, r[2 * a + 1] = l, i[2 * a] = o.k1, i[2 * a + 1] = o.k2;
  }
  for (var u = this._wnafMulAdd(1, r, i, 2 * a, n), c = 0; c < 2 * a; c++)
r[c] = null, i[c] = null;
  return u;
}, a(u, o.BasePoint), l.prototype.point = function(e, t, n) {
  return new u(this, e, t, n);
}, l.prototype.pointFromJSON = function(e, t) {
  return u.fromJSON(this, e, t);
}, u.prototype._getBeta = function() {
  if (this.curve.endo) {
var e = this.precomputed;
if (e && e.beta)
  return e.beta;
var t = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
if (e) {
  var n = this.curve,
    r = function(e) {
      return n.point(e.x.redMul(n.endo.beta), e.y);
    };
  e.beta = t, t.precomputed = {
    beta: null,
    naf: e.naf && {
      wnd: e.naf.wnd,
      points: e.naf.points.map(r)
    },
    doubles: e.doubles && {
      step: e.doubles.step,
      points: e.doubles.points.map(r)
    }
  };
}
return t;
  }
}, u.prototype.toJSON = function() {
  return this.precomputed ? [
this.x,
this.y,
this.precomputed && {
  doubles: this.precomputed.doubles && {
    step: this.precomputed.doubles.step,
    points: this.precomputed.doubles.points.slice(1)
  },
  naf: this.precomputed.naf && {
    wnd: this.precomputed.naf.wnd,
    points: this.precomputed.naf.points.slice(1)
  }
}
  ] : [
this.x,
this.y
  ];
}, u.fromJSON = function(e, t, n) {
  'string' == typeof t && (t = JSON.parse(t));
  var r = e.point(t[0], t[1], n);
  if (!t[2])
return r;

  function i(t) {
return e.point(t[0], t[1], n);
  }
  var a = t[2];
  return r.precomputed = {
beta: null,
doubles: a.doubles && {
  step: a.doubles.step,
  points: [r].concat(a.doubles.points.map(i))
},
naf: a.naf && {
  wnd: a.naf.wnd,
  points: [r].concat(a.naf.points.map(i))
}
  }, r;
}, u.prototype.inspect = function() {
  return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + '>';
}, u.prototype.isInfinity = function() {
  return this.inf;
}, u.prototype.add = function(e) {
  if (this.inf)
return e;
  if (e.inf)
return this;
  if (this.eq(e))
return this.dbl();
  if (this.neg().eq(e) || 0 === this.x.cmp(e.x))
return this.curve.point(null, null);
  var t = this.y.redSub(e.y);
  0 !== t.cmpn(0) && (t = t.redMul(this.x.redSub(e.x).redInvm()));
  var n = t.redSqr().redISub(this.x).redISub(e.x),
r = t.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, r);
}, u.prototype.dbl = function() {
  if (this.inf)
return this;
  var e = this.y.redAdd(this.y);
  if (0 === e.cmpn(0))
return this.curve.point(null, null);
  var t = this.curve.a,
n = this.x.redSqr(),
r = e.redInvm(),
i = n.redAdd(n).redIAdd(n).redIAdd(t).redMul(r),
a = i.redSqr().redISub(this.x.redAdd(this.x)),
o = i.redMul(this.x.redSub(a)).redISub(this.y);
  return this.curve.point(a, o);
}, u.prototype.getX = function() {
  return this.x.fromRed();
}, u.prototype.getY = function() {
  return this.y.fromRed();
}, u.prototype.mul = function(e) {
  if (e = new i(e, 16), this.isInfinity())
return this;
  if (this._hasDoubles(e))
return this.curve._fixedNafMul(this, e);
  if (this.curve.endo)
return this.curve._endoWnafMulAdd([this], [e]);
  else
return this.curve._wnafMul(this, e);
}, u.prototype.mulAdd = function(e, t, n) {
  var r = [
  this,
  t
],
i = [
  e,
  n
];
  return this.curve.endo ? this.curve._endoWnafMulAdd(r, i) : this.curve._wnafMulAdd(1, r, i, 2);
}, u.prototype.jmulAdd = function(e, t, n) {
  var r = [
  this,
  t
],
i = [
  e,
  n
];
  return this.curve.endo ? this.curve._endoWnafMulAdd(r, i, !0) : this.curve._wnafMulAdd(1, r, i, 2, !0);
}, u.prototype.eq = function(e) {
  return this === e || this.inf === e.inf && (this.inf || 0 === this.x.cmp(e.x) && 0 === this.y.cmp(e.y));
}, u.prototype.neg = function(e) {
  if (this.inf)
return this;
  var t = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
var n = this.precomputed,
  r = function(e) {
    return e.neg();
  };
t.precomputed = {
  naf: n.naf && {
    wnd: n.naf.wnd,
    points: n.naf.points.map(r)
  },
  doubles: n.doubles && {
    step: n.doubles.step,
    points: n.doubles.points.map(r)
  }
};
  }
  return t;
}, u.prototype.toJ = function() {
  return this.inf ? this.curve.jpoint(null, null, null) : this.curve.jpoint(this.x, this.y, this.curve.one);
}, a(c, o.BasePoint), l.prototype.jpoint = function(e, t, n) {
  return new c(this, e, t, n);
}, c.prototype.toP = function() {
  if (this.isInfinity())
return this.curve.point(null, null);
  var e = this.z.redInvm(),
t = e.redSqr(),
n = this.x.redMul(t),
r = this.y.redMul(t).redMul(e);
  return this.curve.point(n, r);
}, c.prototype.neg = function() {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
}, c.prototype.add = function(e) {
  if (this.isInfinity())
return e;
  if (e.isInfinity())
return this;
  var t = e.z.redSqr(),
n = this.z.redSqr(),
r = this.x.redMul(t),
i = e.x.redMul(n),
a = this.y.redMul(t.redMul(e.z)),
o = e.y.redMul(n.redMul(this.z)),
s = r.redSub(i),
l = a.redSub(o);
  if (0 === s.cmpn(0))
return 0 !== l.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
  var u = s.redSqr(),
c = u.redMul(s),
d = r.redMul(u),
_ = l.redSqr().redIAdd(c).redISub(d).redISub(d),
E = l.redMul(d.redISub(_)).redISub(a.redMul(c)),
f = this.z.redMul(e.z).redMul(s);
  return this.curve.jpoint(_, E, f);
}, c.prototype.mixedAdd = function(e) {
  if (this.isInfinity())
return e.toJ();
  if (e.isInfinity())
return this;
  var t = this.z.redSqr(),
n = this.x,
r = e.x.redMul(t),
i = this.y,
a = e.y.redMul(t).redMul(this.z),
o = n.redSub(r),
s = i.redSub(a);
  if (0 === o.cmpn(0))
return 0 !== s.cmpn(0) ? this.curve.jpoint(null, null, null) : this.dbl();
  var l = o.redSqr(),
u = l.redMul(o),
c = n.redMul(l),
d = s.redSqr().redIAdd(u).redISub(c).redISub(c),
_ = s.redMul(c.redISub(d)).redISub(i.redMul(u)),
E = this.z.redMul(o);
  return this.curve.jpoint(d, _, E);
}, c.prototype.dblp = function(e) {
  if (0 === e || this.isInfinity())
return this;
  if (!e)
return this.dbl();
  if (this.curve.zeroA || this.curve.threeA) {
var t, n = this;
for (t = 0; t < e; t++)
  n = n.dbl();
return n;
  }
  var r = this.curve.a,
i = this.curve.tinv,
a = this.x,
o = this.y,
s = this.z,
l = s.redSqr().redSqr(),
u = o.redAdd(o);
  for (t = 0; t < e; t++) {
var c = a.redSqr(),
  d = u.redSqr(),
  _ = d.redSqr(),
  E = c.redAdd(c).redIAdd(c).redIAdd(r.redMul(l)),
  f = a.redMul(d),
  h = E.redSqr().redISub(f.redAdd(f)),
  p = f.redISub(h),
  m = E.redMul(p);
m = m.redIAdd(m).redISub(_);
var I = u.redMul(s);
t + 1 < e && (l = l.redMul(_)), a = h, s = I, u = m;
  }
  return this.curve.jpoint(a, u.redMul(i), s);
}, c.prototype.dbl = function() {
  return this.isInfinity() ? this : this.curve.zeroA ? this._zeroDbl() : this.curve.threeA ? this._threeDbl() : this._dbl();
}, c.prototype._zeroDbl = function() {
  if (this.zOne) {
var e, t, n, r = this.x.redSqr(),
  i = this.y.redSqr(),
  a = i.redSqr(),
  o = this.x.redAdd(i).redSqr().redISub(r).redISub(a);
o = o.redIAdd(o);
var s = r.redAdd(r).redIAdd(r),
  l = s.redSqr().redISub(o).redISub(o),
  u = a.redIAdd(a);
u = (u = u.redIAdd(u)).redIAdd(u), e = l, t = s.redMul(o.redISub(l)).redISub(u), n = this.y.redAdd(this.y);
  } else {
var c = this.x.redSqr(),
  d = this.y.redSqr(),
  _ = d.redSqr(),
  E = this.x.redAdd(d).redSqr().redISub(c).redISub(_);
E = E.redIAdd(E);
var f = c.redAdd(c).redIAdd(c),
  h = f.redSqr(),
  p = _.redIAdd(_);
p = (p = p.redIAdd(p)).redIAdd(p), e = h.redISub(E).redISub(E), t = f.redMul(E.redISub(e)).redISub(p), n = (n = this.y.redMul(this.z)).redIAdd(n);
  }
  return this.curve.jpoint(e, t, n);
}, c.prototype._threeDbl = function() {
  if (this.zOne) {
var e, t, n, r = this.x.redSqr(),
  i = this.y.redSqr(),
  a = i.redSqr(),
  o = this.x.redAdd(i).redSqr().redISub(r).redISub(a);
o = o.redIAdd(o);
var s = r.redAdd(r).redIAdd(r).redIAdd(this.curve.a),
  l = s.redSqr().redISub(o).redISub(o);
e = l;
var u = a.redIAdd(a);
u = (u = u.redIAdd(u)).redIAdd(u), t = s.redMul(o.redISub(l)).redISub(u), n = this.y.redAdd(this.y);
  } else {
var c = this.z.redSqr(),
  d = this.y.redSqr(),
  _ = this.x.redMul(d),
  E = this.x.redSub(c).redMul(this.x.redAdd(c));
E = E.redAdd(E).redIAdd(E);
var f = _.redIAdd(_),
  h = (f = f.redIAdd(f)).redAdd(f);
e = E.redSqr().redISub(h), n = this.y.redAdd(this.z).redSqr().redISub(d).redISub(c);
var p = d.redSqr();
p = (p = (p = p.redIAdd(p)).redIAdd(p)).redIAdd(p), t = E.redMul(f.redISub(e)).redISub(p);
  }
  return this.curve.jpoint(e, t, n);
}, c.prototype._dbl = function() {
  var e = this.curve.a,
t = this.x,
n = this.y,
r = this.z,
i = r.redSqr().redSqr(),
a = t.redSqr(),
o = n.redSqr(),
s = a.redAdd(a).redIAdd(a).redIAdd(e.redMul(i)),
l = t.redAdd(t),
u = (l = l.redIAdd(l)).redMul(o),
c = s.redSqr().redISub(u.redAdd(u)),
d = u.redISub(c),
_ = o.redSqr();
  _ = (_ = (_ = _.redIAdd(_)).redIAdd(_)).redIAdd(_);
  var E = s.redMul(d).redISub(_),
f = n.redAdd(n).redMul(r);
  return this.curve.jpoint(c, E, f);
}, c.prototype.trpl = function() {
  if (!this.curve.zeroA)
return this.dbl().add(this);
  var e = this.x.redSqr(),
t = this.y.redSqr(),
n = this.z.redSqr(),
r = t.redSqr(),
i = e.redAdd(e).redIAdd(e),
a = i.redSqr(),
o = this.x.redAdd(t).redSqr().redISub(e).redISub(r),
s = (o = (o = (o = o.redIAdd(o)).redAdd(o).redIAdd(o)).redISub(a)).redSqr(),
l = r.redIAdd(r);
  l = (l = (l = l.redIAdd(l)).redIAdd(l)).redIAdd(l);
  var u = i.redIAdd(o).redSqr().redISub(a).redISub(s).redISub(l),
c = t.redMul(u);
  c = (c = c.redIAdd(c)).redIAdd(c);
  var d = this.x.redMul(s).redISub(c);
  d = (d = d.redIAdd(d)).redIAdd(d);
  var _ = this.y.redMul(u.redMul(l.redISub(u)).redISub(o.redMul(s)));
  _ = (_ = (_ = _.redIAdd(_)).redIAdd(_)).redIAdd(_);
  var E = this.z.redAdd(o).redSqr().redISub(n).redISub(s);
  return this.curve.jpoint(d, _, E);
}, c.prototype.mul = function(e, t) {
  return e = new i(e, t), this.curve._wnafMul(this, e);
}, c.prototype.eq = function(e) {
  if ('affine' === e.type)
return this.eq(e.toJ());
  if (this === e)
return !0;
  var t = this.z.redSqr(),
n = e.z.redSqr();
  if (0 !== this.x.redMul(n).redISub(e.x.redMul(t)).cmpn(0))
return !1;
  var r = t.redMul(this.z),
i = n.redMul(e.z);
  return 0 === this.y.redMul(i).redISub(e.y.redMul(r)).cmpn(0);
}, c.prototype.eqXToP = function(e) {
  var t = this.z.redSqr(),
n = e.toRed(this.curve.red).redMul(t);
  if (0 === this.x.cmp(n))
return !0;
  for (var r = e.clone(), i = this.curve.redN.redMul(t);;) {
if (r.iadd(this.curve.n), r.cmp(this.curve.p) >= 0)
  return !1;
if (n.redIAdd(i), 0 === this.x.cmp(n))
  return !0;
  }
}, c.prototype.inspect = function() {
  return this.isInfinity() ? '<EC JPoint Infinity>' : '<EC JPoint x: ' + this.x.toString(16, 2) + ' y: ' + this.y.toString(16, 2) + ' z: ' + this.z.toString(16, 2) + '>';
}, c.prototype.isInfinity = function() {
  return 0 === this.z.cmpn(0);
};