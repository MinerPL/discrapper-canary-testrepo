n.r(t),
	n.d(t, {
		default: function () {
			return s;
		}
	});
var r = n(217224),
	i = n(528734),
	a = n(951516);
function s(e, t) {
	(0, a.Z)(2, arguments);
	var n = (0, i.default)(e),
		s = (0, r.Z)(t);
	if (isNaN(s)) return new Date(NaN);
	if (!s) return n;
	var o = n.getDate(),
		l = new Date(n.getTime());
	return (l.setMonth(n.getMonth() + s + 1, 0), o >= l.getDate()) ? l : (n.setFullYear(l.getFullYear(), l.getMonth(), o), n);
}
