var r = n(814033),
  i = n(526808);

function a(e) {
  this.rand = e || new i.Rand();
}
e.exports = a, a.create = function(e) {
  return new a(e);
}, a.prototype._randbelow = function(e) {
  var t = Math.ceil(e.bitLength() / 8);
  do
var n = new r(this.rand.generate(t));
  while (n.cmp(e) >= 0);
  return n;
}, a.prototype._randrange = function(e, t) {
  var n = t.sub(e);
  return e.add(this._randbelow(n));
}, a.prototype.test = function(e, t, n) {
  var i = e.bitLength(),
a = r.mont(e),
s = new r(1).toRed(a);
  !t && (t = Math.max(1, i / 48 | 0));
  for (var o = e.subn(1), l = 0; !o.testn(l); l++);
  for (var u = e.shrn(l), c = o.toRed(a); t > 0; t--) {
var d = this._randrange(new r(2), o);
n && n(d);
var _ = d.toRed(a).redPow(u);
if (0 !== _.cmp(s) && 0 !== _.cmp(c)) {
  for (var E = 1; E < l; E++) {
    if (0 === (_ = _.redSqr()).cmp(s))
      return !1;
    if (0 === _.cmp(c))
      break;
  }
  if (E === l)
    return !1;
}
  }
  return !0;
}, a.prototype.getDivisor = function(e, t) {
  var n = e.bitLength(),
i = r.mont(e),
a = new r(1).toRed(i);
  !t && (t = Math.max(1, n / 48 | 0));
  for (var s = e.subn(1), o = 0; !s.testn(o); o++);
  for (var l = e.shrn(o), u = s.toRed(i); t > 0; t--) {
var c = this._randrange(new r(2), s),
  d = e.gcd(c);
if (0 !== d.cmpn(1))
  return d;
var _ = c.toRed(i).redPow(l);
if (0 !== _.cmp(a) && 0 !== _.cmp(u)) {
  for (var E = 1; E < o; E++) {
    if (0 === (_ = _.redSqr()).cmp(a))
      return _.fromRed().subn(1).gcd(e);
    if (0 === _.cmp(u))
      break;
  }
  if (E === o)
    return (_ = _.redSqr()).fromRed().subn(1).gcd(e);
}
  }
  return !1;
};