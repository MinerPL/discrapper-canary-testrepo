n.d(t, {
	Q: function () {
		return c;
	}
});
var i = n(735250),
	a = n(470079),
	s = n(286379),
	l = n(797614),
	r = n(596739),
	o = n(473092);
function c(e) {
	let { channelId: t, warningId: n, senderId: c, warningType: u, header: d, description: h, onDismiss: m, buttons: p } = e;
	a.useEffect(() => {
		l.Z.increment({ name: s.V.SAFETY_WARNING_VIEW });
	}, []);
	let _ = a.useCallback(() => {
		null == m || m(),
			(0, o.qc)({
				channelId: t,
				warningId: n,
				senderId: c,
				warningType: u,
				cta: o.NM.USER_BANNER_DISMISS
			});
	}, [m, t, n, c, u]);
	return (0, i.jsx)(r.W, {
		buttons: p,
		description: h,
		header: d,
		onDismiss: _
	});
}
