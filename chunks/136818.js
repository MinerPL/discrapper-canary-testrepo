n.d(t, {
	Z: function () {
		return s;
	}
});
var r = n(528734),
	i = n(780264),
	a = n(951516);
function s(e) {
	(0, a.Z)(1, arguments);
	var t = (0, r.default)(e),
		n = t.getFullYear(),
		s = new Date(0);
	s.setFullYear(n + 1, 0, 4), s.setHours(0, 0, 0, 0);
	var o = (0, i.Z)(s),
		l = new Date(0);
	l.setFullYear(n, 0, 4), l.setHours(0, 0, 0, 0);
	var u = (0, i.Z)(l);
	return t.getTime() >= o.getTime() ? n + 1 : t.getTime() >= u.getTime() ? n : n - 1;
}
