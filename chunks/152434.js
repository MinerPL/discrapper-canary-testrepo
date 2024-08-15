n.r(t),
	n.d(t, {
		default: function () {
			return o;
		}
	});
var r = n(528734),
	i = n(780264),
	a = n(621359),
	s = n(951516);
function o(e) {
	(0, s.Z)(1, arguments);
	var t = (0, r.default)(e);
	return Math.round(((0, i.Z)(t).getTime() - (0, a.Z)(t).getTime()) / 604800000) + 1;
}
