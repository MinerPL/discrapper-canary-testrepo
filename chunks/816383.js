n.d(t, {
	I: function () {
		return a;
	}
});
function r(e, t) {
	for (var n = 0; n < t.length; n++) {
		var r = t[n];
		(r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
	}
}
function i(e, t, n) {
	return (
		t in e
			? Object.defineProperty(e, t, {
					value: n,
					enumerable: !0,
					configurable: !0,
					writable: !0
				})
			: (e[t] = n),
		e
	);
}
var a = (function () {
	var e, t, n;
	function a(e, t) {
		!(function (e, t) {
			if (!(e instanceof t)) throw TypeError('Cannot call a class as a function');
		})(this, a),
			i(this, 'xs', void 0),
			i(this, 'ys', void 0),
			i(this, 'c1s', void 0),
			i(this, 'c2s', void 0),
			i(this, 'c3s', void 0);
		for (var n, r, s, o = e.length, l = [], u = 0; u < o; u++) l.push(u);
		l.sort(function (t, n) {
			return e[t] < e[n] ? -1 : 1;
		});
		for (var c = [], d = [], _ = [], E = 0; E < o - 1; E++) (n = e[E + 1] - e[E]), (r = t[E + 1] - t[E]), d.push(n), c.push(r), _.push(r / n);
		for (var f = [_[0]], h = 0; h < d.length - 1; h++) {
			var p = _[h],
				m = _[h + 1];
			if (p * m <= 0) f.push(0);
			else {
				n = d[h];
				var I = d[h + 1],
					T = n + I;
				f.push((3 * T) / ((T + I) / p + (T + n) / m));
			}
		}
		f.push(_[_.length - 1]);
		for (var g = [], S = [], A = 0; A < f.length - 1; A++) {
			s = _[A];
			var N = f[A],
				v = 1 / d[A],
				O = N + f[A + 1] - s - s;
			g.push((s - N - O) * v), S.push(O * v * v);
		}
		(this.xs = e), (this.ys = t), (this.c1s = f), (this.c2s = g), (this.c3s = S);
	}
	return (
		(e = a),
		(t = [
			{
				key: 'interpolate',
				value: function (e) {
					var t,
						n = this.xs,
						r = this.ys,
						i = this.c1s,
						a = this.c2s,
						s = this.c3s,
						o = n.length - 1;
					if (e === n[o]) return r[o];
					for (var l = 0, u = s.length - 1; l <= u; ) {
						var c = n[(t = Math.floor(0.5 * (l + u)))];
						if (c < e) l = t + 1;
						else {
							if (!(c > e)) return r[t];
							u = t - 1;
						}
					}
					var d = e - n[(o = Math.max(0, u))],
						_ = d * d;
					return r[o] + i[o] * d + a[o] * _ + s[o] * d * _;
				}
			}
		]),
		r(e.prototype, t),
		a
	);
})();
