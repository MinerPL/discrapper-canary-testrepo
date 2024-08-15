var n = r(159219),
	a = r(995937),
	o = r(544054),
	i = r(999991),
	_ = r(662753);
function E(e) {
	var t = -1,
		r = null == e ? 0 : e.length;
	for (this.clear(); ++t < r; ) {
		var n = e[t];
		this.set(n[0], n[1]);
	}
}
(E.prototype.clear = n),
	(E.prototype.delete = a),
	(E.prototype.get = o),
	(E.prototype.has = i),
	(E.prototype.set = _),
	(e.exports = E);
