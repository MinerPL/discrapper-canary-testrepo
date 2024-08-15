n.d(t, {
	Z: function () {
		return i;
	}
});
var s = n(470079),
	a = n(442837),
	l = n(897285),
	r = n(924301);
function i(e, t, n) {
	let i = (0, a.e7)([r.ZP], () => r.ZP.getUserCount(t, n));
	return (
		(0, s.useEffect)(() => {
			null != e && null != t && l.Z.getGuildEventUserCounts(e, t, null != n ? [n] : []);
		}, [t, e, n]),
		i
	);
}
