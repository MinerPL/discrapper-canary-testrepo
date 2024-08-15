n.d(t, {
	Z: function () {
		return s;
	}
});
var i = n(470079),
	a = n(584825);
function s(e, t) {
	let n = (0, a.oC)(t);
	return i.useMemo(() => {
		var e;
		return (
			null != n &&
			(null == n.max_num_active_trial_users ||
				n.max_num_active_trial_users > (null !== (e = n.num_active_trial_users) && void 0 !== e ? e : 0))
		);
	}, [n]);
}
