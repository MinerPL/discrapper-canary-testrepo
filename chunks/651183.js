n.d(t, {
	Z: function () {
		return r;
	}
});
var i = n(735250);
n(470079);
var a = n(475674),
	s = n(42326),
	l = n(906467);
function r(e) {
	var t;
	let { participant: n, className: r } = e;
	let o = null == (t = (0, a.Z)(n)) ? null : l.Z.isDeveloper ? ''.concat(t.message, ' (').concat(t.errorType, ')') : t.message;
	return null != o
		? (0, i.jsx)(s.Z, {
				className: r,
				errorMessage: o
			})
		: null;
}
