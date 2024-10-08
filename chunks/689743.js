var r = n(814033),
    i = n(689118),
    a = n(806981),
    s = n(685053);
function o(e) {
    a.call(this, 'mont', e), (this.a = new r(e.a, 16).toRed(this.red)), (this.b = new r(e.b, 16).toRed(this.red)), (this.i4 = new r(4).toRed(this.red).redInvm()), (this.two = new r(2).toRed(this.red)), (this.a24 = this.i4.redMul(this.a.redAdd(this.two)));
}
function l(e, t, n) {
    a.BasePoint.call(this, e, 'projective'), null === t && null === n ? ((this.x = this.curve.one), (this.z = this.curve.zero)) : ((this.x = new r(t, 16)), (this.z = new r(n, 16)), !this.x.red && (this.x = this.x.toRed(this.curve.red)), !this.z.red && (this.z = this.z.toRed(this.curve.red)));
}
i(o, a),
    (e.exports = o),
    (o.prototype.validate = function (e) {
        var t = e.normalize().x,
            n = t.redSqr(),
            r = n.redMul(t).redAdd(n.redMul(this.a)).redAdd(t);
        return 0 === r.redSqrt().redSqr().cmp(r);
    }),
    i(l, a.BasePoint),
    (o.prototype.decodePoint = function (e, t) {
        return this.point(s.toArray(e, t), 1);
    }),
    (o.prototype.point = function (e, t) {
        return new l(this, e, t);
    }),
    (o.prototype.pointFromJSON = function (e) {
        return l.fromJSON(this, e);
    }),
    (l.prototype.precompute = function () {}),
    (l.prototype._encode = function () {
        return this.getX().toArray('be', this.curve.p.byteLength());
    }),
    (l.fromJSON = function (e, t) {
        return new l(e, t[0], t[1] || e.one);
    }),
    (l.prototype.inspect = function () {
        return this.isInfinity() ? '<EC Point Infinity>' : '<EC Point x: ' + this.x.fromRed().toString(16, 2) + ' z: ' + this.z.fromRed().toString(16, 2) + '>';
    }),
    (l.prototype.isInfinity = function () {
        return 0 === this.z.cmpn(0);
    }),
    (l.prototype.dbl = function () {
        var e = this.x.redAdd(this.z).redSqr(),
            t = this.x.redSub(this.z).redSqr(),
            n = e.redSub(t),
            r = e.redMul(t),
            i = n.redMul(t.redAdd(this.curve.a24.redMul(n)));
        return this.curve.point(r, i);
    }),
    (l.prototype.add = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (l.prototype.diffAdd = function (e, t) {
        var n = this.x.redAdd(this.z),
            r = this.x.redSub(this.z),
            i = e.x.redAdd(e.z),
            a = e.x.redSub(e.z).redMul(n),
            s = i.redMul(r),
            o = t.z.redMul(a.redAdd(s).redSqr()),
            l = t.x.redMul(a.redISub(s).redSqr());
        return this.curve.point(o, l);
    }),
    (l.prototype.mul = function (e) {
        for (var t = e.clone(), n = this, r = this.curve.point(null, null), i = []; 0 !== t.cmpn(0); t.iushrn(1)) i.push(t.andln(1));
        for (var a = i.length - 1; a >= 0; a--) 0 === i[a] ? ((n = n.diffAdd(r, this)), (r = r.dbl())) : ((r = n.diffAdd(r, this)), (n = n.dbl()));
        return r;
    }),
    (l.prototype.mulAdd = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (l.prototype.jumlAdd = function () {
        throw Error('Not supported on Montgomery curve');
    }),
    (l.prototype.eq = function (e) {
        return 0 === this.getX().cmp(e.getX());
    }),
    (l.prototype.normalize = function () {
        return (this.x = this.x.redMul(this.z.redInvm())), (this.z = this.curve.one), this;
    }),
    (l.prototype.getX = function () {
        return this.normalize(), this.x.fromRed();
    });
