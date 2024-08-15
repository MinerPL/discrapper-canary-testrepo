var e = r(926515),
	i = r(24033),
	u = r(354848),
	o = r(332916),
	a = r(213265),
	c = TypeError;
n.exports = function (n, t) {
	var r = n.exec;
	if (u(r)) {
		var s = e(r, n, t);
		return null !== s && i(s), s;
	}
	if ('RegExp' === o(n)) return e(a, n, t);
	throw c('RegExp#exec called on incompatible receiver');
};
