n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(528734),
	i = n(951516),
	a = n(217224);
function s(e, t) {
	(0, i.Z)(2, arguments);
	var n = (0, a.Z)(t);
	n % 7 == 0 && (n -= 7);
	var s = (0, r.default)(e),
		o = s.getUTCDay(),
		l = n % 7,
		u = ((l + 7) % 7 < 1 ? 7 : 0) + n - o;
	return s.setUTCDate(s.getUTCDate() + u), s;
}
