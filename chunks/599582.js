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
	return isNaN(s) ? new Date(NaN) : s ? (n.setDate(n.getDate() + s), n) : n;
}
