var r = n(703284),
	i = n(771701),
	a = n(830911),
	s = n(706627);
e.exports = function (e, t, n) {
	if (!s(n)) return !1;
	var o = typeof t;
	return ('number' == o ? !!(i(n) && a(t, n.length)) : 'string' == o && t in n) && r(n[t], e);
};
