var r = n(640767),
	i = n(393020),
	a = n(493883),
	s = n(414916),
	o = n(383718),
	l = n(713720),
	u = n(1213),
	c = n(124084),
	d = n(581527),
	_ = n(192853),
	E = n(163494),
	f = Object('a'),
	h = 'a' !== f[0] || !(0 in f),
	p = _('String.prototype.split');
e.exports = function (e) {
	var t,
		n = c(this),
		_ = u((h && E(n) ? p(n, '') : n).length);
	if (!l(e)) throw TypeError('Array.prototype.map callback must be a function');
	arguments.length > 1 && (t = arguments[1]);
	for (var f = r(n, _), I = 0; I < _; ) {
		var m = d(I);
		if (o(n, m)) {
			var T = i(e, t, [s(n, m), I, n]);
			a(f, m, T);
		}
		I += 1;
	}
	return f;
};
