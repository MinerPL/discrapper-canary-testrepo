var r = n(685053),
	i = n(814033),
	a = n(689118),
	s = n(806981),
	o = r.assert;
function l(e) {
	(this.twisted = (0 | e.a) != 1), (this.mOneA = this.twisted && (0 | e.a) == -1), (this.extended = this.mOneA), s.call(this, 'edwards', e), (this.a = new i(e.a, 16).umod(this.red.m)), (this.a = this.a.toRed(this.red)), (this.c = new i(e.c, 16).toRed(this.red)), (this.c2 = this.c.redSqr()), (this.d = new i(e.d, 16).toRed(this.red)), (this.dd = this.d.redAdd(this.d)), o(!this.twisted || 0 === this.c.fromRed().cmpn(1)), (this.oneC = (0 | e.c) == 1);
}
function u(e, t, n, r, a) {
	s.BasePoint.call(this, e, 'projective'), null === t && null === n && null === r ? ((this.x = this.curve.zero), (this.y = this.curve.one), (this.z = this.curve.one), (this.t = this.curve.zero), (this.zOne = !0)) : ((this.x = new i(t, 16)), (this.y = new i(n, 16)), (this.z = r ? new i(r, 16) : this.curve.one), (this.t = a && new i(a, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.y.red && (this.y = this.y.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)), this.t && !this.t.red && (this.t = this.t.toRed(this.curve.red)), (this.zOne = this.z === this.curve.one), this.curve.extended && !this.t && ((this.t = this.x.redMul(this.y)), !this.zOne && (this.t = this.t.redMul(this.z.redInvm()))));
}
a(l, s),
	(e.exports = l),
	(l.prototype._mulA = function (e) {
		return this.mOneA ? e.redNeg() : this.a.redMul(e);
	}),
	(l.prototype._mulC = function (e) {
		return this.oneC ? e : this.c.redMul(e);
	}),
	(l.prototype.jpoint = function (e, t, n, r) {
		return this.point(e, t, n, r);
	}),
	(l.prototype.pointFromX = function (e, t) {
		!(e = new i(e, 16)).red && (e = e.toRed(this.red));
		var n = e.redSqr(),
			r = this.c2.redSub(this.a.redMul(n)),
			a = this.one.redSub(this.c2.redMul(this.d).redMul(n)),
			s = r.redMul(a.redInvm()),
			o = s.redSqrt();
		if (0 !== o.redSqr().redSub(s).cmp(this.zero)) throw Error('invalid point');
		var l = o.fromRed().isOdd();
		return ((t && !l) || (!t && l)) && (o = o.redNeg()), this.point(e, o);
	}),
	(l.prototype.pointFromY = function (e, t) {
		!(e = new i(e, 16)).red && (e = e.toRed(this.red));
		var n = e.redSqr(),
			r = n.redSub(this.c2),
			a = n.redMul(this.d).redMul(this.c2).redSub(this.a),
			s = r.redMul(a.redInvm());
		if (0 === s.cmp(this.zero)) {
			if (!t) return this.point(this.zero, e);
			throw Error('invalid point');
		}
		var o = s.redSqrt();
		if (0 !== o.redSqr().redSub(s).cmp(this.zero)) throw Error('invalid point');
		return o.fromRed().isOdd() !== t && (o = o.redNeg()), this.point(o, e);
	}),
	(l.prototype.validate = function (e) {
		if (e.isInfinity()) return !0;
		e.normalize();
		var t = e.x.redSqr(),
			n = e.y.redSqr(),
			r = t.redMul(this.a).redAdd(n),
			i = this.c2.redMul(this.one.redAdd(this.d.redMul(t).redMul(n)));
		return 0 === r.cmp(i);
	}),
	a(u, s.BasePoint),
	(l.prototype.pointFromJSON = function (e) {
		return u.fromJSON(this, e);
	}),
	(l.prototype.point = function (e, t, n, r) {
		return new u(this, e, t, n, r);
	}),
	(u.fromJSON = function (e, t) {
		return new u(e, t[0], t[1], t[2]);
	}),
	(u.prototype.inspect = function () {
		return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' y: ' + this.y.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
	}),
	(u.prototype.isInfinity = function () {
		return 0 === this.x.cmpn(0) && (0 === this.y.cmp(this.z) || (this.zOne && 0 === this.y.cmp(this.curve.c)));
	}),
	(u.prototype._extDbl = function () {
		var e = this.x.redSqr(),
			t = this.y.redSqr(),
			n = this.z.redSqr();
		n = n.redIAdd(n);
		var r = this.curve._mulA(e),
			i = this.x.redAdd(this.y).redSqr().redISub(e).redISub(t),
			a = r.redAdd(t),
			s = a.redSub(n),
			o = r.redSub(t),
			l = i.redMul(s),
			u = a.redMul(o),
			c = i.redMul(o),
			d = s.redMul(a);
		return this.curve.point(l, u, d, c);
	}),
	(u.prototype._projDbl = function () {
		var e,
			t,
			n,
			r,
			i,
			a,
			s = this.x.redAdd(this.y).redSqr(),
			o = this.x.redSqr(),
			l = this.y.redSqr();
		if (this.curve.twisted) {
			var u = (r = this.curve._mulA(o)).redAdd(l);
			this.zOne ? ((e = s.redSub(o).redSub(l).redMul(u.redSub(this.curve.two))), (t = u.redMul(r.redSub(l))), (n = u.redSqr().redSub(u).redSub(u))) : ((i = this.z.redSqr()), (a = u.redSub(i).redISub(i)), (e = s.redSub(o).redISub(l).redMul(a)), (t = u.redMul(r.redSub(l))), (n = u.redMul(a)));
		} else (r = o.redAdd(l)), (i = this.curve._mulC(this.z).redSqr()), (a = r.redSub(i).redSub(i)), (e = this.curve._mulC(s.redISub(r)).redMul(a)), (t = this.curve._mulC(r).redMul(o.redISub(l))), (n = r.redMul(a));
		return this.curve.point(e, t, n);
	}),
	(u.prototype.dbl = function () {
		return this.isInfinity() ? this : this.curve.extended ? this._extDbl() : this._projDbl();
	}),
	(u.prototype._extAdd = function (e) {
		var t = this.y.redSub(this.x).redMul(e.y.redSub(e.x)),
			n = this.y.redAdd(this.x).redMul(e.y.redAdd(e.x)),
			r = this.t.redMul(this.curve.dd).redMul(e.t),
			i = this.z.redMul(e.z.redAdd(e.z)),
			a = n.redSub(t),
			s = i.redSub(r),
			o = i.redAdd(r),
			l = n.redAdd(t),
			u = a.redMul(s),
			c = o.redMul(l),
			d = a.redMul(l),
			_ = s.redMul(o);
		return this.curve.point(u, c, _, d);
	}),
	(u.prototype._projAdd = function (e) {
		var t,
			n,
			r = this.z.redMul(e.z),
			i = r.redSqr(),
			a = this.x.redMul(e.x),
			s = this.y.redMul(e.y),
			o = this.curve.d.redMul(a).redMul(s),
			l = i.redSub(o),
			u = i.redAdd(o),
			c = this.x.redAdd(this.y).redMul(e.x.redAdd(e.y)).redISub(a).redISub(s),
			d = r.redMul(l).redMul(c);
		return this.curve.twisted ? ((t = r.redMul(u).redMul(s.redSub(this.curve._mulA(a)))), (n = l.redMul(u))) : ((t = r.redMul(u).redMul(s.redSub(a))), (n = this.curve._mulC(l).redMul(u))), this.curve.point(d, t, n);
	}),
	(u.prototype.add = function (e) {
		return this.isInfinity() ? e : e.isInfinity() ? this : this.curve.extended ? this._extAdd(e) : this._projAdd(e);
	}),
	(u.prototype.mul = function (e) {
		return this._hasDoubles(e) ? this.curve._fixedNafMul(this, e) : this.curve._wnafMul(this, e);
	}),
	(u.prototype.mulAdd = function (e, t, n) {
		return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !1);
	}),
	(u.prototype.jmulAdd = function (e, t, n) {
		return this.curve._wnafMulAdd(1, [this, t], [e, n], 2, !0);
	}),
	(u.prototype.normalize = function () {
		if (this.zOne) return this;
		var e = this.z.redInvm();
		return (this.x = this.x.redMul(e)), (this.y = this.y.redMul(e)), this.t && (this.t = this.t.redMul(e)), (this.z = this.curve.one), (this.zOne = !0), this;
	}),
	(u.prototype.neg = function () {
		return this.curve.point(this.x.redNeg(), this.y, this.z, this.t && this.t.redNeg());
	}),
	(u.prototype.getX = function () {
		return this.normalize(), this.x.fromRed();
	}),
	(u.prototype.getY = function () {
		return this.normalize(), this.y.fromRed();
	}),
	(u.prototype.eq = function (e) {
		return this === e || (0 === this.getX().cmp(e.getX()) && 0 === this.getY().cmp(e.getY()));
	}),
	(u.prototype.eqXToP = function (e) {
		var t = e.toRed(this.curve.red).redMul(this.z);
		if (0 === this.x.cmp(t)) return !0;
		for (var n = e.clone(), r = this.curve.redN.redMul(this.z); ; ) {
			if ((n.iadd(this.curve.n), n.cmp(this.curve.p) >= 0)) return !1;
			if ((t.redIAdd(r), 0 === this.x.cmp(t))) return !0;
		}
	}),
	(u.prototype.toP = u.prototype.normalize),
	(u.prototype.mixedAdd = u.prototype.add);
