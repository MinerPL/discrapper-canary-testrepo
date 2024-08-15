n.d(t, {
	Z: function () {
		return r;
	}
}),
	n(789020);
var i = n(978003),
	a = n(630388),
	s = n(981631);
function r(e) {
	var t;
	return (
		!(
			e.type !== s.uaV.DEFAULT ||
			null != e.poll ||
			(0, a.yE)(null !== (t = e.flags) && void 0 !== t ? t : 0, s.iLy.EPHEMERAL) ||
			('messageReference' in e ? (0, i.Z)(e) : (0, i.s)(e))
		) && !0
	);
}
