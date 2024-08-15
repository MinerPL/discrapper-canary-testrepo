n.d(t, {
	Z: function () {
		return c;
	},
	m: function () {
		return u;
	}
}),
	n(789020);
var r = n(442837),
	i = n(160404),
	a = n(271383),
	s = n(70956),
	o = n(630388),
	l = n(372897);
function u(e, t) {
	let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
	if (n) return !0;
	let r = null != e ? new Date(e) : void 0;
	return (
		null != r &&
		new Date().getTime() - r.getTime() < s.Z.Millis.WEEK &&
		!(0, o.yE)(null != t ? t : 0, l.q.COMPLETED_HOME_ACTIONS)
	);
}
function c(e) {
	return (0, r.e7)([a.ZP, i.Z], () => {
		var t, n;
		if (i.Z.isFullServerPreview(e)) return !0;
		let r = a.ZP.getSelfMember(e);
		return u(
			null !== (t = null == r ? void 0 : r.joinedAt) && void 0 !== t ? t : void 0,
			null !== (n = null == r ? void 0 : r.flags) && void 0 !== n ? n : void 0
		);
	});
}
