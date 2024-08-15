var n = r(196322),
	a = r(443735),
	o = r(402428),
	i = r(830911),
	_ = r(406705),
	E = r(828091);
e.exports = function (e, t, r) {
	t = n(t, e);
	for (var s = -1, c = t.length, I = !1; ++s < c; ) {
		var u = E(t[s]);
		if (!(I = null != e && r(e, u))) break;
		e = e[u];
	}
	return I || ++s != c ? I : !!(c = null == e ? 0 : e.length) && _(c) && i(u, c) && (o(e) || a(e));
};
